import React, { useState, useEffect } from "react";
import {
  GraduationCap,
  User,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  BookOpen,
  Briefcase,
  Building2,
  CalendarDays,
  Percent,
  CheckSquare,
  ArrowRight,
} from "lucide-react";

export default function ApplicationForm({ verifiedData }) {
  const [states, setStates] = useState([]);
const [districts, setDistricts] = useState([]);
const [loadingDistricts, setLoadingDistricts] = useState(false);
const [loadingStates, setLoadingStates] = useState(false);
const [utmData, setUtmData] = useState({
  utm_source: "",
  utm_campaign: "",
  utm_medium: "",
});
const [form, setForm] = useState({
  

    // Entrance Exam
    exam: "SU-DAT",
    examId: "56",

    school: "School of Design",

    course: "",
    courseId: "",

    streamId: "",
    streamName: "",

    // Student
    studentName: verifiedData?.name || "",
    email: verifiedData?.email || "",
    mobile: verifiedData?.mobile || "",
    alternateMobile: "",

    // Personal
    aadhaar: "",
    nationality: "Indian",
    religion: "",
    catagory: "",
    socialcatagory: "",

    // Parent
    parentName: "",
    parentMobile: "",
    parentOccupation: "",

    // Address
    address: "",
    state: "",
    city: "",

    // Other exam
    appearedOtherExam: "",
    otherExamName: "",

    // Education
    qualification: "",
    boardUniversity: "",
    edu_status: "",
    passingYear: "",
    percentage: "",

    acknowledgement: false,
});

  const [errors, setErrors] = useState({});

  /* =========================================================
     HARD CODED DATA
  ========================================================= */

  const examData = {
  "SU-LAT": {
    examId: "56",
    school: "School of Law",

    courses: [
      {
        id: "70",
        name: "B.A. LL.B. (HONS)",
      },
      {
        id: "71",
        name: "B.B.A. LL.B. (HONS)",
      },
      {
        id: "72",
        name: "LLB. (HONS)",
      },
    ],
  },

"SU-MAT": {
  school: "School of Commerce & Management Studies",
  courses: [
    "BBA",
    "B.Com",
    "MBA",
    "Integrated MBA",
  ],
},

  "SU-DAT": {
    examId: "56",
    school: "School of Design",

    courses: [
      {
        id: "67",
        name: "B. Design in Fashion and Lifestyle Design",
      },
      {
        id: "66",
        name: "B. Design in Space and Interior Design",
      },
      {
        id: "69",
        name: "B. Design in Communication Design",
      },
      {
        id: "68",
        name: "B. Design in Product Design",
      },
    ],
  },
};



const categories = [
  {
    id: "open",
    name: "Open",
  },
  {
    id: "reserved",
    name: "Reserved",
  },
];

  const qualifications = [
   
    "12th",
   
    "Graduation",
   
  ];

  const statuses = [
    "Passed",
    "Appearing",
  ];

  const years = [
    "2027",
    "2026",
    "2025",
    "2024",
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "Before 2018",
  ];

  /* =========================================================
     HANDLE CHANGE
  ========================================================= */

const handleChange = (e) => {
  const { name } = e.target;
  let { value } = e.target;

  // --------------------------------
  // MOBILE NUMBER VALIDATION
  // --------------------------------
  if (
    name === "mobile" ||
    name === "alternateMobile" ||
    name === "parentMobile"
  ) {
    // Remove everything except numbers
    value = value.replace(/\D/g, "");

    // Maximum 10 digits
    value = value.slice(0, 10);
  }

  // --------------------------------
  // AADHAAR VALIDATION
  // --------------------------------
  if (name === "aadhaar") {
    value = value.replace(/\D/g, "");
    value = value.slice(0, 12);
  }

  // --------------------------------
  // PERCENTAGE
  // --------------------------------
  if (name === "percentage") {
    value = value.replace(/[^0-9.]/g, "");

    // Only one decimal point
    const parts = value.split(".");

    if (parts.length > 2) {
      value = parts[0] + "." + parts.slice(1).join("");
    }

    // Maximum 100
    if (parseFloat(value) > 100) {
      value = "100";
    }
  }

  console.log("FIELD NAME:", name);
  console.log("SELECTED VALUE:", value);

  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  /* =========================================================
     EXAM CHANGE
  ========================================================= */

const handleExamChange = (e) => {

    const exam = e.target.value;

    const selectedExam = examData[exam];

    setForm((prev) => ({
        ...prev,

        exam: exam,

        examId: selectedExam?.examId || "",

        school: selectedExam?.school || "",

        course: "",
        courseId: "",
        streamId: "",
        streamName: "",
    }));
};

  /* =========================================================
     VALIDATION
  ========================================================= */

  const validate = () => {
    const newErrors = {};

    if (!form.exam) {
      newErrors.exam = "Please select entrance exam";
    }

    if (!form.course) {
      newErrors.course = "Please select course";
    }

    if (!form.studentName.trim()) {
      newErrors.studentName = "Student name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email ID is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = "Enter valid email ID";
    }

    if (
      !form.mobile ||
      form.mobile.length !== 10 ||
      !/^[6-9]/.test(form.mobile)
    ) {
      newErrors.mobile = "Enter valid 10 digit mobile number";
    }

    if (
      form.alternateMobile &&
      (form.alternateMobile.length !== 10 ||
        !/^[6-9]/.test(form.alternateMobile))
    ) {
      newErrors.alternateMobile =
        "Enter valid alternate mobile number";
    }

    if (
      form.aadhaar &&
      !/^\d{12}$/.test(form.aadhaar)
    ) {
      newErrors.aadhaar = "Aadhaar number must contain 12 digits";
    }

    if (!form.nationality) {
      newErrors.nationality = "Nationality is required";
    }

    if (!form.catagory) {
      newErrors.catagory = "Please select catagory";
    }

    if (!form.parentName.trim()) {
      newErrors.parentName =
        "Parent / Guardian name is required";
    }

    if (
      !form.parentMobile ||
      form.parentMobile.length !== 10 ||
      !/^[6-9]/.test(form.parentMobile)
    ) {
      newErrors.parentMobile =
        "Enter valid parent mobile number";
    }

    if (!form.parentOccupation.trim()) {
      newErrors.parentOccupation =
        "Parent occupation is required";
    }

    if (!form.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!form.state) {
      newErrors.state = "Please select state";
    }

    if (!form.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!form.appearedOtherExam) {
      newErrors.appearedOtherExam =
        "Please select Yes or No";
    }

    if (
      form.appearedOtherExam === "Yes" &&
      !form.otherExamName.trim()
    ) {
      newErrors.otherExamName =
        "Please mention examination name";
    }

    if (!form.qualification) {
      newErrors.qualification =
        "Please select education level";
    }

    if (!form.boardUniversity.trim()) {
      newErrors.boardUniversity =
        "Board / University is required";
    }

   if (!form.edu_status) {
  newErrors.edu_status = "Please select status";
}
    if (!form.passingYear) {
      newErrors.passingYear = "Please select passout year";
    }

   if (!form.percentage) {
  newErrors.percentage = "Percentage is required";
} else if (
  isNaN(form.percentage) ||
  Number(form.percentage) < 0 ||
  Number(form.percentage) > 100
) {
  newErrors.percentage = "Percentage must be between 0 and 100";
}

    if (!form.acknowledgement) {
      newErrors.acknowledgement =
        "Please accept the acknowledgement";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* =========================================================
     SUBMIT
  ========================================================= */

const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("========== PAY NOW CLICKED ==========");

  if (!validate()) {
    console.log("VALIDATION FAILED");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return;
  }

  console.log("VALIDATION SUCCESS");

  const formData = new FormData();

  /*
  |--------------------------------------------------------------------------
  | REQUEST
  |--------------------------------------------------------------------------
  */

  formData.append("react_request", "1");
  formData.append("submit-form", "1");


  /*
  |--------------------------------------------------------------------------
  | EXAM
  |--------------------------------------------------------------------------
  */

  formData.append("exam", form.exam || "");
  formData.append("exam_id", form.examId || "");
  formData.append("school", form.school || "");

  formData.append("course", form.course || "");
  formData.append("course_id", form.courseId || "");

  formData.append(
    "stream_id",
    form.streamId || form.courseId || ""
  );

  formData.append(
    "stream_name",
    form.streamName || form.course || ""
  );

  /*
   * Legacy compatibility
   */
  formData.append(
    "stream",
    form.streamId ||
      form.courseId ||
      form.course ||
      ""
  );


  /*
  |--------------------------------------------------------------------------
  | STUDENT
  |--------------------------------------------------------------------------
  */

  formData.append(
    "name",
    form.studentName || ""
  );

  formData.append(
    "email",
    form.email || ""
  );

  formData.append(
    "mobile",
    form.mobile || ""
  );

  formData.append(
    "alternateMobile",
    form.alternateMobile || ""
  );


  /*
  |--------------------------------------------------------------------------
  | PERSONAL
  |--------------------------------------------------------------------------
  */

  formData.append(
    "aadhar",
    form.aadhaar || ""
  );

  formData.append(
    "nationality",
    form.nationality || ""
  );

  formData.append(
    "religion",
    form.religion || ""
  );

  formData.append(
    "catagory",
    form.catagory || ""
  );

  formData.append(
    "social_category",
    form.socialcatagory || ""
  );


  /*
  |--------------------------------------------------------------------------
  | PARENT
  |--------------------------------------------------------------------------
  */

  formData.append(
    "fname",
    form.parentName || ""
  );

  formData.append(
    "parentMobile",
    form.parentMobile || ""
  );

  formData.append(
    "parentOccupation",
    form.parentOccupation || ""
  );


  /*
  |--------------------------------------------------------------------------
  | ADDRESS
  |--------------------------------------------------------------------------
  */

  formData.append(
    "address",
    form.address || ""
  );

  formData.append(
    "state",
    form.state || ""
  );

  formData.append(
    "city",
    form.city || ""
  );

  formData.append(
    "country",
    "101"
  );


  /*
  |--------------------------------------------------------------------------
  | OTHER EXAM
  |--------------------------------------------------------------------------
  */

  formData.append(
    "appearedOtherExam",
    form.appearedOtherExam || ""
  );

  formData.append(
    "otherExamName",
    form.otherExamName || ""
  );


  /*
  |--------------------------------------------------------------------------
  | EDUCATION
  |--------------------------------------------------------------------------
  */

  formData.append(
    "qualification",
    form.qualification || ""
  );

  formData.append(
    "boardUniversity",
    form.boardUniversity || ""
  );

  formData.append(
    "edu_status",
    form.edu_status || ""
  );

  formData.append(
    "passingYear",
    form.passingYear || ""
  );

  formData.append(
    "percentage",
    form.percentage || ""
  );


  /*
  |--------------------------------------------------------------------------
  | ACKNOWLEDGEMENT
  |--------------------------------------------------------------------------
  */

  formData.append(
    "acknowledgement",
    form.acknowledgement ? "1" : "0"
  );


  /*
  |--------------------------------------------------------------------------
  | EXISTING SYSTEM VALUES
  |--------------------------------------------------------------------------
  */

  formData.append(
    "academic_year",
    "2026-27"
  );

  formData.append(
    "payments",
    "Y"
  );

  formData.append(
    "exam_type",
    "1"
  );

  formData.append(
    "form_submitted_page",
    "su-dat"
  );

  formData.append(
    "campus_id",
    ""
  );

  formData.append(
    "gender",
    ""
  );

  formData.append(
    "whatsapp",
    form.mobile || ""
  );

  formData.append(
    "timeslot",
    ""
  );

  formData.append(
    "dateslot",
    ""
  );

  formData.append(
    "interested_in_scholarship",
    ""
  );

  formData.append(
    "thankyou_page",
    ""
  );

  formData.append(
    "ni",
    "0"
  );


  /*
  |--------------------------------------------------------------------------
  | OTP
  |--------------------------------------------------------------------------
  */

  formData.append(
    "otp",
    verifiedData?.otp || ""
  );


  /*
  |--------------------------------------------------------------------------
  | UTM
  |--------------------------------------------------------------------------
  */

  formData.append(
    "lead_source",
    utmData?.utm_source || "website"
  );

  formData.append(
    "utm_campaign",
    utmData?.utm_campaign || "organic"
  );

  formData.append(
    "utm_medium",
    utmData?.utm_medium || "organic"
  );


  /*
  |--------------------------------------------------------------------------
  | DEBUG
  |--------------------------------------------------------------------------
  */

  console.log(
    "========== DATA SENT TO PHP =========="
  );

  for (const [key, value] of formData.entries()) {
    console.log(key, ":", value);
  }


  try {

    /*
    |--------------------------------------------------------------------------
    | CALL NEW API
    |--------------------------------------------------------------------------
    */

    const response = await fetch(
      "https://www.sandipuniversity.edu.in/su-jee-exam/service_payments_react.php",
      {
        method: "POST",
        body: formData,
      }
    );


    console.log(
      "========== API RESPONSE =========="
    );

    console.log(
      "HTTP STATUS:",
      response.status
    );


    /*
    |--------------------------------------------------------------------------
    | READ RESPONSE
    |--------------------------------------------------------------------------
    */

    const responseText =
      await response.text();

    console.log(
      "RAW RESPONSE:",
      responseText
    );


    if (
      !responseText ||
      responseText.trim() === ""
    ) {

      alert(
        "Server returned an empty response. Please try again."
      );

      return;
    }


    /*
    |--------------------------------------------------------------------------
    | PARSE JSON
    |--------------------------------------------------------------------------
    */

    let result;

    try {

      result =
        JSON.parse(responseText);

    } catch (jsonError) {

      console.error(
        "JSON PARSE ERROR:",
        jsonError
      );

      console.error(
        "RAW RESPONSE:",
        responseText
      );

      alert(
        "Invalid server response. Please contact support."
      );

      return;
    }


    console.log(
      "PARSED API RESPONSE:",
      result
    );


    /*
    |--------------------------------------------------------------------------
    | API ERROR
    |--------------------------------------------------------------------------
    */

    if (
      !response.ok ||
      result.status !== true
    ) {

      alert(
        result.message ||
        "Unable to submit application."
      );

      return;
    }


    /*
    |--------------------------------------------------------------------------
    | SUCCESS
    |--------------------------------------------------------------------------
    */

    const paymentRequired =
      result.data?.payment_required;

    const paymentUrl =
      result.data?.payment_url;

    const thankyouUrl =
      result.data?.thankyou_url;


    console.log(
      "PAYMENT REQUIRED:",
      paymentRequired
    );

    console.log(
      "PAYMENT URL:",
      paymentUrl
    );

    console.log(
      "THANK YOU URL:",
      thankyouUrl
    );


    /*
    |--------------------------------------------------------------------------
    | PAYMENT REDIRECT
    |--------------------------------------------------------------------------
    */

   if (
  paymentRequired === true &&
  paymentUrl
) {

  console.log("=================================");
  console.log("PAYMENT REDIRECT");
  console.log("paymentRequired:", paymentRequired);
  console.log("paymentUrl:", paymentUrl);
  console.log("=================================");

  if (typeof paymentUrl !== "string" || paymentUrl.trim() === "") {
    alert("Payment URL was not generated.");
    return;
  }

  window.location.href = paymentUrl;

  return;
}


    /*
    |--------------------------------------------------------------------------
    | THANK YOU
    |--------------------------------------------------------------------------
    */

    if (thankyouUrl) {

      window.location.assign(
        thankyouUrl
      );

      return;
    }


    /*
    |--------------------------------------------------------------------------
    | SUCCESS WITHOUT URL
    |--------------------------------------------------------------------------
    */

    alert(
      result.message ||
      "Application submitted successfully."
    );

 } catch (error) {

    console.error(
      "========== FETCH / NETWORK ERROR =========="
    );

    console.error("ERROR:", error);
    console.error("ERROR NAME:", error?.name);
    console.error("ERROR MESSAGE:", error?.message);

    alert(
      "Unable to connect to application server. Please check browser console."
    );
}
};
const handleStateChange = async (e) => {
  const stateId = e.target.value;

  setForm((prev) => ({
    ...prev,
    state: stateId,
    city: "",
  }));

  setDistricts([]);

  if (!stateId) {
    return;
  }

  try {
    setLoadingDistricts(true);

    const response = await fetch(
      "https://www.sandipuniversity.edu.in/connections/maindata.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          action: "state",
          state_id: stateId,
        }).toString(),
      }
    );

    const html = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(
      `<select>${html}</select>`,
      "text/html"
    );

    const options = Array.from(
      doc.querySelectorAll("option")
    ).map((option) => ({
      id: option.value,
      name: option.textContent.trim(),
    }));

    setDistricts(options);
  } catch (error) {
    console.error("District loading error:", error);
    setDistricts([]);
  } finally {
    setLoadingDistricts(false);
  }
};

const loadStates = async () => {
  try {
    setLoadingStates(true);

    const response = await fetch(
      "https://www.sandipuniversity.edu.in/connections/maindata.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          action: "states",
        }).toString(),
      }
    );

    const result = await response.json();

    if (result.status) {
      setStates(result.data);
    } else {
      setStates([]);
    }
  } catch (error) {
    console.error("State loading error:", error);
    setStates([]);
  } finally {
    setLoadingStates(false);
  }
};
useEffect(() => {
  loadStates();
}, []);

  return (
    <div className="application-page">

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <div className="application-page-header">

        <div>
          <span className="application-eyebrow">
            SUAT ADMISSIONS
          </span>

          <h2>Sandip University Aptitude Test - 2027</h2>

          <p>
            Complete your entrance examination application
            details carefully.
          </p>
        </div>

      </div>


      <form
        className="application-form"
        onSubmit={handleSubmit}
      >

        {/* =====================================================
            SECTION 1
        ===================================================== */}

        <section className="application-section">

          <div className="application-section-header">

            <div className="application-section-number">
              1
            </div>

            <div>
              <span>
                ENTRANCE EXAM &amp; ACADEMIC PROGRAM
              </span>

              <h3>
                Entrance Exam &amp; Academic Program
              </h3>
            </div>

          </div>


          <div className="application-grid">

            {/* EXAM */}

            <FormSelect
              label="Exam"
              icon={<GraduationCap size={17} />}
              name="exam"
              value={form.exam}
              onChange={handleExamChange}
              options={[
                "SU-DAT",
                "SU-LAT",
                "SU-MAT",
              ]}
              error={errors.exam}
            />


            {/* SCHOOL */}

            <FormInput
              label="School"
              icon={<Building2 size={17} />}
              name="school"
              value={form.school}
              readOnly
            />


            {/* COURSE */}

          <FormSelect
    label="Select Course Name"
    icon={<BookOpen size={17} />}
    name="course"
    value={form.course}
    onChange={(e) => {

        const value = e.target.value;

        const selectedCourse =
            examData[form.exam]?.courses?.find(
                (course) =>
                    typeof course === "object"
                        ? course.name === value
                        : course === value
            );

        setForm((prev) => ({
            ...prev,

            course: value,

            courseId:
                typeof selectedCourse === "object"
                    ? selectedCourse.id
                    : "",

            streamId:
                typeof selectedCourse === "object"
                    ? selectedCourse.id
                    : "",

            streamName: value,
        }));
    }}
    options={
        examData[form.exam]?.courses || []
    }
    placeholder="Select Course Name"
    error={errors.course}
/>

          </div>

        </section>


        {/* =====================================================
            SECTION 2
        ===================================================== */}

       <section className="application-section">

  <div className="application-section-header">

    <div className="application-section-number">
      2
    </div>

    <div>
      <span>
        CANDIDATE PARTICULARS &amp; GUARDIAN DETAILS
      </span>

      <h3>
        Candidate Particulars &amp; Guardian Details
      </h3>
    </div>

  </div>


  {/* ROW 1 */}

  <div className="application-grid four">

    <FormInput
      label={
        <>
          Student Name (As Per Marks Card) <span className="required">*</span>
        </>
      }
      icon={<User size={17} />}
      name="studentName"
      value={form.studentName}
      onChange={handleChange}
      placeholder="Enter student name"
      error={errors.studentName}
    />

    <FormInput
      label={
        <>
          Email ID <span className="required">*</span>
        </>
      }
      icon={<Mail size={17} />}
      name="email"
      value={form.email}
      onChange={handleChange}
      placeholder="Enter email ID"
      error={errors.email}
    />

   <FormInput
  label={
    <>
      Mob. Number (+91) <span className="required">*</span>
    </>
  }
  icon={<Phone size={17} />}
  name="mobile"
  value={form.mobile}
  onChange={handleChange}
  placeholder="10 digit mobile"
  maxLength={10}
  type="tel"
  error={errors.mobile}
/>

   <FormInput
  label="Alt. Mob. Number"
  icon={<Phone size={17} />}
  name="alternateMobile"
  value={form.alternateMobile}
  onChange={handleChange}
  placeholder="Alternate number"
  maxLength={10}
  type="tel"
  error={errors.alternateMobile}
/>
  </div>


  {/* ROW 2 */}

  <div className="application-grid three">

    <FormInput
      label="Aadhaar Card No. (12 Digits)"
      icon={<CreditCard size={17} />}
      name="aadhaar"
      value={form.aadhaar}
      onChange={handleChange}
      placeholder="12 digit Aadhaar number"
      maxLength={12}
      type="tel"
      error={errors.aadhaar}
    />

    <FormSelect
  label={
    <>
      Category <span className="required">*</span>
    </>
  }
  name="catagory"
  value={form.catagory}
  onChange={handleChange}
  options={categories}
  placeholder="Select catagory"
  error={errors.catagory}
/>

    <FormInput
      label="Religion"
      icon={<User size={17} />}
      name="religion"
      value={form.religion}
      onChange={handleChange}
      placeholder="Enter religion"
    />

   
  </div>


  {/* ROW 3 */}

  <div className="application-grid three">

    <FormInput
      label={
        <>
          Parent / Guardian Name <span className="required">*</span>
        </>
      }
      icon={<User size={17} />}
      name="parentName"
      value={form.parentName}
      onChange={handleChange}
      placeholder="Enter parent / guardian name"
      error={errors.parentName}
    />

   <FormInput
  label={
    <>
      Parent Mob. No. <span className="required">*</span>
    </>
  }
  icon={<Phone size={17} />}
  name="parentMobile"
  value={form.parentMobile}
  onChange={handleChange}
  placeholder="10 digit mobile number"
  maxLength={10}
  type="tel"
  error={errors.parentMobile}
/>

    <FormInput
      label={
        <>
          Parent Occupation <span className="required">*</span>
        </>
      }
      icon={<Briefcase size={17} />}
      name="parentOccupation"
      value={form.parentOccupation}
      onChange={handleChange}
      placeholder="Enter occupation"
      error={errors.parentOccupation}
    />

  </div>


  {/* ROW 4 */}

  <div className="application-grid address-grid">

    <FormInput
      label={
        <>
          Address Line (Street/Area) <span className="required">*</span>
        </>
      }
      icon={<MapPin size={17} />}
      name="address"
      value={form.address}
      onChange={handleChange}
      placeholder="Enter complete address"
      error={errors.address}
    />
<FormSelect
  label={
    <>
      State <span className="required">*</span>
    </>
  }
  icon={<MapPin size={17} />}
  name="state"
  value={form.state}
  onChange={handleStateChange}
  options={states}
  placeholder={
    loadingStates
      ? "Loading States..."
      : "Select State"
  }
  error={errors.state}
/>
<FormSelect
  label={
    <>
      District <span className="required">*</span>
    </>
  }
  icon={<MapPin size={17} />}
  name="city"
  value={form.city}
  onChange={handleChange}
  options={districts}
  placeholder={
    loadingDistricts
      ? "Loading Districts..."
      : "Select District"
  }
  error={errors.city}
/>

  </div>

</section>

        {/* =====================================================
            SECTION 3
        ===================================================== */}

        <section className="application-section">

          <div className="application-section-header">

            <div className="application-section-number">
              3
            </div>

            <div>
              <span>
                OTHER ENTRANCE EXAM DETAILS
              </span>

              <h3>
                Other Entrance Exam Details
              </h3>
            </div>

          </div>


          <div className="other-exam-question">

            <label>
              Have you appeared for any other entrance exam?
            </label>

            <div className="yes-no-group">

              <label className="radio-option">

                <input
                  type="radio"
                  name="appearedOtherExam"
                  value="Yes"
                  checked={
                    form.appearedOtherExam === "Yes"
                  }
                  onChange={handleChange}
                />

                <span>Yes</span>

              </label>


              <label className="radio-option">

                <input
                  type="radio"
                  name="appearedOtherExam"
                  value="No"
                  checked={
                    form.appearedOtherExam === "No"
                  }
                  onChange={handleChange}
                />

                <span>No</span>

              </label>

            </div>


            <div className="other-exam-input">

              <FormInput
                label=""
                icon={<BookOpen size={17} />}
                name="otherExamName"
                value={form.otherExamName}
                onChange={handleChange}
                placeholder="If Yes, Mention Exam Name: e.g. NATA / CLAT / CAT / NDA / JEE"
                disabled={
                  form.appearedOtherExam !== "Yes"
                }
                error={errors.otherExamName}
              />

            </div>

          </div>

          {errors.appearedOtherExam && (
            <div className="form-error standalone-error">
              {errors.appearedOtherExam}
            </div>
          )}

        </section>


        {/* =====================================================
            SECTION 4
        ===================================================== */}

        <section className="application-section">

          <div className="application-section-header">

            <div className="application-section-number">
              4
            </div>

            <div>
              <span>
                EDUCATIONAL QUALIFICATIONS
              </span>

              <h3>
                Educational Qualifications
              </h3>
            </div>

          </div>


          <div className="application-grid five">

            <FormSelect
              label="Education Level"
              icon={<GraduationCap size={17} />}
              name="qualification"
              value={form.qualification}
              onChange={handleChange}
              options={qualifications}
              placeholder="Select level"
              error={errors.qualification}
            />


            <FormInput
              label="Board / University"
              icon={<Building2 size={17} />}
              name="boardUniversity"
              value={form.boardUniversity}
              onChange={handleChange}
              placeholder="Board / University"
              error={errors.boardUniversity}
            />


            <FormSelect
              label="Status (Passed / Appearing)"
              icon={<CheckSquare size={17} />}
              name="edu_status"
              value={form.edu_status}
              onChange={handleChange}
              options={statuses}
              placeholder="Select status"
              error={errors.edu_status}
            />


            <FormSelect
              label="Passout Year"
              icon={<CalendarDays size={17} />}
              name="passingYear"
              value={form.passingYear}
              onChange={handleChange}
              options={years}
              placeholder="Select year"
              error={errors.passingYear}
            />


            <FormInput
              label="Percentage %"
              icon={<Percent size={17} />}
              name="percentage"
              value={form.percentage}
              onChange={handleChange}
              placeholder="Enter percentage"
              type="number"
              min="0"
              max="100"
              step="0.01"
              error={errors.percentage}
            />

          </div>

        </section>


        {/* =====================================================
            ACKNOWLEDGEMENT + PAYMENT
        ===================================================== */}

        <div className="application-footer">

          <label className="acknowledgement">

            <input
              type="checkbox"
              name="acknowledgement"
              checked={form.acknowledgement}
              onChange={handleChange}
            />

            <span className="checkmark">
              <CheckSquare size={15} />
            </span>

            <span>
              <strong>Acknowledgement:</strong>{" "}
              I hereby declare that all provided details
              are authentic and true.
            </span>

          </label>


          <button
            type="submit"
            className="pay-submit-button"
          >
            PAY NOW &amp; SUBMIT

            <ArrowRight size={18} />

          </button>

        </div>


        {errors.acknowledgement && (
          <div className="form-error acknowledgement-error">
            {errors.acknowledgement}
          </div>
        )}

      </form>


      {/* =====================================================
          HELPDESK
      ===================================================== */}

      <div className="application-helpdesk">

        <div>

          <strong>Helpdesk Support</strong>

          <span>
            admission@sandipuniversity.edu.in
          </span>

        </div>

        <div>

          <strong>Admission Helpline</strong>

          <span>
            +91 - 9545453092
          </span>

        </div>

      </div>

    </div>
  );
}


/* =========================================================
   TEXT INPUT
========================================================= */

function FormInput({
  label,
  icon,
  name,
  value,
  onChange,
  placeholder,
  error,
  type = "text",
  maxLength,
  readOnly = false,
  disabled = false,
  min,
  max,
  step,
}) {
  return (
    <div className="application-field">

      {label && (
        <label>
          {label}
        </label>
      )}

      <div
        className={`application-input ${
          error ? "has-error" : ""
        }`}
      >

        {icon}

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          readOnly={readOnly}
          disabled={disabled}
          min={min}
          max={max}
          step={step}
        />

      </div>

      {error && (
        <small className="form-error">
          {error}
        </small>
      )}

    </div>
  );
}


/* =========================================================
   SELECT
========================================================= */

function FormSelect({
  label,
  icon,
  name,
  value,
  onChange,
  options,
  placeholder,
  error,
}) {
  return (
    <div className="application-field">

      <label>
        {label}
      </label>

      <div
        className={`application-select ${
          error ? "has-error" : ""
        }`}
      >

        {icon}

        <select
          name={name}
          value={value}
          onChange={onChange}
        >

          <option value="">
            {placeholder || `Select ${label}`}
          </option>

     {options.map((option) => {
  const optionValue =
    typeof option === "object"
      ? option.id
      : option;

  const optionLabel =
    typeof option === "object"
      ? option.name
      : option;

  return (
    <option
      key={optionValue}
      value={optionValue}
    >
      {optionLabel}
    </option>
  );
})}

        </select>

      </div>

      {error && (
        <small className="form-error">
          {error}
        </small>
      )}

    </div>
  );
}