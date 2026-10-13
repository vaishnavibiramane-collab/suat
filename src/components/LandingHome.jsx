import { useState } from "react";

import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Mail,
  Phone,
  ShieldCheck,
  User,
  ChevronDown,
} from "lucide-react";
const OTP_SEND_URL =
  "https://www.sandipuniversity.edu.in/otp_sms/otp.php";

const OTP_VERIFY_URL =
  "https://www.sandipuniversity.edu.in/otp_sms/verifyotp_icemelt.php";
  

function LandingHome({ onVerified }) {
  const [utmData] = useState(() => {
  const params = new URLSearchParams(window.location.search);

  return {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_term: params.get("utm_term") || "",
    utm_content: params.get("utm_content") || "",
  };
});

  const [step, setStep] = useState("details");
  const [otpSent, setOtpSent] = useState(false);
const [otpLoading, setOtpLoading] = useState(false);
const [otpMessage, setOtpMessage] = useState("");
const [otpVerified, setOtpVerified] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
   
  });

const [otp, setOtp] = useState(["", "", "", ""]);
const continueVerification = async () => {
  if (!validate()) {
    return;
  }

  setOtpLoading(true);
  setOtpMessage("");

  try {
    const response = await fetch(OTP_SEND_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `mobile=${encodeURIComponent(form.mobile)}`,
    });

    const result = await response.text();

    console.log("OTP API response:", result);

    setOtpSent(true);
    setStep("otp");
    setOtpMessage("OTP sent successfully.");

  } catch (error) {
    console.error("Send OTP error:", error);

    setOtpMessage(
      "Unable to send OTP. Please try again."
    );
  } finally {
    setOtpLoading(false);
  }
};

  const [errors, setErrors] = useState({});


  /* HARD CODED DROPDOWNS */


  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "exam"
        ? { course: "" }
        : {}),
    }));

  };


  const validate = () => {

    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email address is required";
    }

    if (
      form.mobile.length !== 10 ||
      !/^[6-9]/.test(form.mobile)
    ) {
      newErrors.mobile =
        "Enter valid 10 digit mobile number";
    }

    

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };





  const handleOtpChange = (value, index) => {

    if (!/^\d*$/.test(value)) {
      return;
    }

    const updated = [...otp];

    updated[index] = value.slice(-1);

    setOtp(updated);

    if (value && index < 5) {

      document
        .getElementById(`landing-otp-${index + 1}`)
        ?.focus();

    }

  };


const verifyOtp = async () => {
  const enteredOtp = otp.join("");

  if (enteredOtp.length !== 4) {
    alert("Please enter the 4-digit OTP.");
    return;
  }

  try {
    const response = await fetch(
      "https://www.sandipuniversity.edu.in/otp_sms/verifyotp_icemelt.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          otp: enteredOtp,
          mobile: form.mobile,
        }).toString(),
      }
    );

const result = (await response.text()).trim();

console.log("OTP API response:", {
  status: response.status,
  result: result,
});

if (response.ok && result === "1") {

  setOtpVerified(true);

  alert("OTP verified successfully.");

  onVerified({
    name: form.name,
    email: form.email,
    mobile: form.mobile,
    otp: enteredOtp,
    ...utmData,
  });

} else {

  setOtpVerified(false);

  alert("Invalid OTP. Please enter the correct OTP.");
}
if (response.ok) {
  alert("OTP verified successfully.");

  onVerified({
    name: form.name,
    email: form.email,
    mobile: form.mobile,
    otp: enteredOtp,
     utm_source: utmData.utm_source,
  utm_medium: utmData.utm_medium,
  utm_campaign: utmData.utm_campaign,
  utm_term: utmData.utm_term,
  utm_content: utmData.utm_content,
  });
}else {
      alert("OTP verification failed.");
    }
  } catch (error) {
    console.error("OTP verification error:", error);
    alert("Unable to verify OTP. Please try again.");
  }
};

  return (

    <div className="landing-page">

      {/* LEFT HERO */}

      <div className="landing-hero">

        <div className="landing-hero-content">

          <div className="landing-badge">

            <GraduationCap size={16} />

            ADMISSIONS OPEN 2027

          </div>


          <h2>
            Your Journey
            <span>
              Starts Here.
            </span>
          </h2>


          <p>
            Take the first step towards your
            future with Sandip University
            Aptitude Test.
          </p>


          {/* EXAM VISUAL */}

        <div className="suat-program-showcase">

  {/* CENTER SUAT BRAND */}

  <div className="suat-brand-badge">

    <div className="suat-brand-circle">
      <strong>SUAT</strong>
      <span>2027</span>
    </div>

    <div className="suat-brand-text">
      <strong>Sandip University</strong>
      <span>Entrance Admissions</span>
    </div>

  </div>


  {/* PROGRAM CARDS */}

  <div className="suat-program-grid">

    {/* SU-DAT */}

    <div className="suat-program-card dat-card">

      <div className="program-card-top">

        <div className="program-icon">
          ✦
        </div>

        <span className="program-number">
          01
        </span>

      </div>

      <div className="program-content">

        <strong>
          SU-DAT
        </strong>

        <span className="program-name">
          DESIGN
        </span>

        <small>
          Creative Aptitude
        </small>

      </div>

      <div className="program-arrow">
        →
      </div>

    </div>


    {/* SU-LAT */}

    <div className="suat-program-card lat-card">

      <div className="program-card-top">

        <div className="program-icon">
          ⚖
        </div>

        <span className="program-number">
          02
        </span>

      </div>

      <div className="program-content">

        <strong>
          SU-LAT
        </strong>

        <span className="program-name">
          LAW
        </span>

        <small>
          Legal Aptitude
        </small>

      </div>

      <div className="program-arrow">
        →
      </div>

    </div>


    {/* SU-MAT */}

    <div className="suat-program-card mat-card">

      <div className="program-card-top">

        <div className="program-icon">
          ◉
        </div>

        <span className="program-number">
          03
        </span>

      </div>

      <div className="program-content">

        <strong>
          SU-MAT
        </strong>

        <span className="program-name">
          MANAGEMENT
        </span>

        <small>
          Management Aptitude
        </small>

      </div>

      <div className="program-arrow">
        →
      </div>

    </div>

  </div>

</div>


          <div className="landing-features">

            <div>
              <CheckCircle2 size={17} />
              Online Registration
            </div>

            <div>
              <CheckCircle2 size={17} />
              Secure Verification
            </div>

            <div>
              <CheckCircle2 size={17} />
              Easy Application
            </div>

          </div>

        </div>

      </div>


      {/* REGISTRATION */}

      <div className="landing-form-area">

        <div className="landing-form-card">

          {step === "details" ? (

            <>

              <div className="landing-form-heading">

                <span>
                  GET STARTED
                </span>

                <h2>
                  Register for SUAT 2027
                </h2>

                <p>
                  Enter your basic details to
                  continue with registration.
                </p>

              </div>


              {/* NAME */}

              <FormInput
                label="Full Name"
                icon={<User size={18} />}
                name="name"
                value={form.name}
                placeholder="Enter your full name"
                onChange={handleChange}
                error={errors.name}
              />


              {/* EMAIL */}

              <FormInput
                label="Email Address"
                icon={<Mail size={18} />}
                name="email"
                value={form.email}
                placeholder="Enter your email address"
                onChange={handleChange}
                error={errors.email}
              />


              {/* MOBILE */}

              <div className="landing-field">

                <label>
                  Mobile Number
                </label>

                <div className="landing-input">

                  <Phone size={18} />

                  <span className="phone-code">
                    +91
                  </span>

                  <input
                    type="tel"
                    name="mobile"
                    maxLength="10"
                    value={form.mobile}
                    placeholder="Enter 10 digit mobile number"
                    onChange={handleChange}
                  />

                </div>

                {errors.mobile && (
                  <small>
                    {errors.mobile}
                  </small>
                )}

              </div>


            


             
              <button
                className="landing-red-button"
                onClick={continueVerification}
              >

                Continue & Verify

                <ArrowRight size={18} />

              </button>


              <div className="landing-secure">

                <ShieldCheck size={18} />

                <span>
                  Your information is secure and
                  used only for admission purposes.
                </span>

              </div>

            </>

          ) : (

            <>

              <div className="otp-icon-large">
                <ShieldCheck size={30} />
              </div>


              <div className="landing-form-heading centered">

                <span>
                  MOBILE VERIFICATION
                </span>

                <h2>
                  Verify Your Mobile
                </h2>

                <p>
                  Enter the 6 digit OTP sent to
                  <strong>
                    {" "}+91 {form.mobile}
                  </strong>
                </p>

              </div>


              <div className="landing-otp">

                {otp.map((value, index) => (

                  <input
                    key={index}
                    id={`landing-otp-${index}`}
                    maxLength="1"
                    value={value}
                    onChange={(e) =>
                      handleOtpChange(
                        e.target.value,
                        index
                      )
                    }
                  />

                ))}

              </div>


              <button
                className="landing-red-button"
                onClick={verifyOtp}
              >

                Verify & Continue

                <ArrowRight size={18} />

              </button>


              <button
                className="change-details"
                onClick={() =>
                  setStep("details")
                }
              >
                ← Change Details
              </button>


              <p className="demo-text">
                Frontend demo: enter any 6 digits.
              </p>

            </>

          )}

        </div>

      </div>

    </div>

  );
}


/* INPUT */

function FormInput({
  label,
  icon,
  name,
  value,
  placeholder,
  onChange,
  error,
}) {

  return (

    <div className="landing-field">

      <label>
        {label}
      </label>

      <div className="landing-input">

        {icon}

        <input
          type="text"
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />

      </div>

      {error && (
        <small>
          {error}
        </small>
      )}

    </div>

  );
}


/* SELECT */

function SelectInput({
  label,
  icon,
  name,
  value,
  onChange,
  options,
  disabled,
  error,
}) {

  return (

    <div className="landing-field">

      <label>
        {label}
      </label>

      <div className="landing-select">

        {icon}

        <select
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
        >

          <option value="">
            {disabled
              ? "Select Entrance Exam First"
              : `Select ${label}`}
          </option>

          {options.map((option) => (

            <option
              key={option}
              value={
                option.includes(" - ")
                  ? option.split(" - ")[0]
                  : option
              }
            >
              {option}
            </option>

          ))}

        </select>

        <ChevronDown size={17} />

      </div>

      {error && (
        <small>
          {error}
        </small>
      )}

    </div>

  );
}

export default LandingHome;