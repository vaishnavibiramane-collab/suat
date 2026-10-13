import React, { useState } from "react";

import {
  CalendarDays,
  Brain,
  ShieldCheck,
  UserCheck,
  ScanFace,
  Volume2,
  BookOpen,
  GraduationCap,
  Clock3,
  IndianRupee,
} from "lucide-react";


/* =========================================================
   EXAM DATA
========================================================= */

const examData = {

  /* =======================================================
     SU-DAT
  ======================================================= */

  "SU-DAT": {

    school: "School of Design (SOD)",

    shortSchool: "Design / SOD",

    applicationFee: "₹1000",

    supportTitle: "Design Helpdesk",

    supportEmail: "sudat@sandipuniversity.edu.in",

    dates: {
      registration: "10th October 2026",
      lastDate: "04th February 2027",
      admitCard: "05th February 2027",
      examDate: "06th February 2027",
    },

    selectionTitle:
      "SU-DAT 2-Round Selection Architecture",

    selectionType: "2 ROUND SELECTION",

    rounds: [

      {
        title: "ROUND 1",
        marks: "40 MARKS",
        heading: "Online Aptitude Test",
        description:
          "Evaluating visual, logical & creative skills",
        date: "(06th Feb 2027)",
      },

      {
        title: "ROUND 2",
        marks: "60 MARKS",
        heading: "Portfolio Evaluation",
        description:
          "Offline in-person campus evaluation",
        date: "(April 2027)",
      },

    ],

    eligibilityTitle: "Eligibility Criteria",

    eligibility: [

      <>
        <strong>Academic Qualification:</strong>{" "}
        10+2 Pass/Appearing (Any Stream) OR 3 Years Diploma
        (Equivalent to 10+2) with min 45% aggregate score.
      </>,

      <>
        <strong>Entrance Score:</strong>{" "}
        Must appear in SU-DAT or any National Level Design Entrance
        Exam (NIFT, NID, etc.).
      </>,

    ],

    proctoringTitle:
      "Electronic AI Proctoring Rules",

    unfairMeans:
      "Any unfair means captured during the test duration by AI proctoring will lead to immediate candidate disqualification.",

  },


  /* =======================================================
     SU-LAT
  ======================================================= */

  "SU-LAT": {

    school: "School of Law (SOL)",

    shortSchool: "Law / SOL",

    applicationFee: "₹500",

    supportTitle: "Law Helpdesk",

    supportEmail: "sulat@sandipuniversity.edu.in",

    dates: {
      registration: "10th October 2026",
      lastDate: "11th February 2027",
      admitCard: "12th February 2027",
      examDate: "13th February 2027",
    },

    selectionTitle:
      "SU-LAT Entrance Examination Architecture",

    selectionType: "ONLINE ENTRANCE EXAMINATION",

    rounds: [

      {
        title: "ONLINE TEST MODE",
        marks: "100 MARKS (2 HRS)",
        heading: "Online Entrance Test",
        description:
          "Scheduled on 13th Feb 2027 across India",
        date: "",
      },

      {
        title: "EVALUATION FOCUS",
        marks: "",
        heading: "Legal Aptitude & GK",
        description:
          "Reasoning, Constitution, Maxims & English",
        date: "",
      },

    ],

    eligibilityTitle:
      "Category-Wise Eligibility Criteria",

    eligibility: [

      <>
        <strong>B.A. LL.B / BBA LL.B (5 Years):</strong>{" "}
        Passed 10+2 or equivalent in any discipline from
        recognized Board/University.
      </>,

      <>
        <strong>LL.B (3 Years):</strong>{" "}
        Passed Bachelor Degree of min 3 years duration in any
        discipline from recognized University.
      </>,

      <>
        <strong>Cut-off Marks:</strong>{" "}
        General (Open): 45% | OBC: 42% | SC/ST: 40%
      </>,

      <>
        <strong>Mandatory Test:</strong>{" "}
        Must appear in SU-LAT or National Entrance (e.g. CLAT).
      </>,

    ],

    proctoringTitle:
      "Electronic AI Proctoring Surveillance",

    unfairMeans:
      "Any unfair means captured during the test duration by AI proctoring will lead to immediate candidate disqualification.",

  },


  /* =======================================================
     SU-MAT
  ======================================================= */

  "SU-MAT": {

    school:
      "School of Commerce & Management Studies (SOCMS)",

    shortSchool:
      "Management / SOCMS",

    applicationFee:
      "New Age MBA Fee: ₹1000/- | Regular MBA Fee: ₹500/-",

    supportTitle: "Management Support",

    supportEmail:
      "sumat@sandipuniversity.edu.in",

    dates: {
      registration:
        "10th Oct 2026 to 28th Jan 2027",

      lastDate:
        "28th January 2027",

      admitCard:
        "29th January 2027",

      examDate:
        "30th January 2027",
    },

    selectionTitle:
      "SU-MAT 2-Phase Selection Architecture",

    selectionType:
      "2-PHASE SELECTION",

    rounds: [

      {
        title: "PHASE 1",
        marks: "100 MARKS",
        heading: "Online Entrance Test",
        description:
          "Logical, English & Aptitude",
        date: "(30th Jan 2027)",
      },

      {
        title: "PHASE 2",
        marks: "50 MARKS",
        heading: "Personal Interview (PI)",
        description:
          "Online & Offline within 10 days post exam",
        date: "",
      },

    ],

    eligibilityTitle:
      "Eligibility & National Exams",

    eligibility: [

      <>
        <strong>Qualifying Degree:</strong>{" "}
        Passed Bachelor Degree of minimum 3 years duration in any
        discipline.
      </>,

      <>
        <strong>Min Score:</strong>{" "}
        Min 50% marks in qualifying exam (45% for Reserved Category).
      </>,

      <>
        <strong>Management Test:</strong>{" "}
        Must appear in SU-MAT or National Level Exams
        (CAT, MAT, XAT, CMAT, etc.).
      </>,

    ],

    proctoringTitle:
      "Electronic AI Proctoring Mechanism",

    unfairMeans:
      "Unfair means captured during exam leads to immediate disqualification.",

  },

};


/* =========================================================
   MAIN COMPONENT
========================================================= */

function Instructions() {

  const [activeExam, setActiveExam] =
    useState("SU-DAT");


  const currentExam =
    examData[activeExam];


  return (

    <div className="instructions-page">
      


 <div className="animated-fee-notice">

  <div className="fee-notice-icon">
    ₹
  </div>

  <div className="fee-notice-marquee">

    <div className="fee-notice-track">

      <span className="fee-notice-label">
        IMPORTANT NOTICE
      </span>

      <span className="fee-notice-title">
        Application Fee Once Paid is Non-Refundable
      </span>

      <span className="fee-notice-separator">
        •
      </span>

      <span className="fee-notice-title">
        Please verify your details carefully before proceeding with payment.
      </span>

      <span className="fee-notice-separator">
        •
      </span>

    </div>

  </div>

</div>


      {/* ===================================================
          EXAM SELECTOR
      =================================================== */}

      <div className="public-exam-selector">


        <strong>
          Select Entrance Exam View
        </strong>


        <div>

          {Object.entries(examData).map(
            ([code, exam]) => (

              <button
                key={code}
                type="button"
                className={
                  activeExam === code
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setActiveExam(code)
                }
              >

                <b>
                  {code}
                </b>

                <span>
                  {exam.shortSchool}
                </span>

              </button>

            )
          )}

        </div>

      </div>


      {/* ===================================================
          SCHOOL INFORMATION
      =================================================== */}

      <div className="selected-exam-heading">

        <div className="selected-exam-icon">

          {activeExam === "SU-DAT" && (
            <GraduationCap size={20} />
          )}

          {activeExam === "SU-LAT" && (
            <BookOpen size={20} />
          )}

          {activeExam === "SU-MAT" && (
            <Brain size={20} />
          )}

        </div>


        <div>

          <span>
            {activeExam}
          </span>

          <strong>
            {currentExam.school}
          </strong>

        </div>

      </div>


      {/* ===================================================
          CONTENT GRID
      =================================================== */}

      <div className="instruction-cards">


        {/* =================================================
            KEY DATES
        ================================================= */}

        <section className="info-box">

          <div className="info-box-heading">


            <div className="red-icon">

              <CalendarDays size={19} />

            </div>


            <div>

              <span>
                IMPORTANT
              </span>

              <h3>
                {activeExam === "SU-MAT"
                  ? "Schedule & Application Fees"
                  : "Key Dates & Fee Details"}
              </h3>

            </div>


            <b>
              {activeExam === "SU-MAT"
                ? "Online Only"
                : `Application Fee: ${currentExam.applicationFee}`}
            </b>

          </div>


          {/* MAT SPECIAL FEES */}

          {activeExam === "SU-MAT" && (
            

            <div className="mat-fees">

              <div>

                <span>
                  New Age MBA Fee:
                </span>

                <strong>
                  ₹1000/-
                </strong>

              </div>

              <div>

                <span>
                  Regular MBA Fee:
                </span>

                <strong>
                  ₹500/-
                </strong>

              </div>

            </div>

          )}


          <div className="date-items">


            <div>

              <span>
                {activeExam === "SU-MAT"
                  ? "Reg. Starts / Last Date"
                  : "Online Reg. Starts"}
              </span>

              <strong>
                {currentExam.dates.registration}
              </strong>

            </div>


            {activeExam !== "SU-MAT" && (

              <div>

                <span>
                  Last Date to Apply
                </span>

                <strong>
                  {currentExam.dates.lastDate}
                </strong>

              </div>

            )}


            <div>

              <span>
                Admit Card Release
              </span>

              <strong>
                {currentExam.dates.admitCard}
              </strong>

            </div>


            <div>

              <span>
                Online Exam Date
              </span>

              <strong>
                {currentExam.dates.examDate}
              </strong>

            </div>


          </div>

        </section>


        {/* =================================================
            SELECTION ARCHITECTURE
        ================================================= */}

        <section className="info-box">


          <div className="info-box-heading">


            <div className="red-icon">

              <Brain size={19} />

            </div>


            <div>

              <span>
                SELECTION
              </span>

              <h3>
                {currentExam.selectionTitle}
              </h3>

            </div>


          </div>


          <div className="rounds">


            {currentExam.rounds.map(
              (round, index) => (

                <div
                  key={index}
                  className={
                    activeExam === "SU-LAT"
                      ? "law-round"
                      : ""
                  }
                >

                  <span>
                    {round.title}
                  </span>


                  {round.marks && (

                    <strong>
                      {round.marks}
                    </strong>

                  )}


                  <h4>
                    {round.heading}
                  </h4>


                  <p>
                    {round.description}
                  </p>


                  {round.date && (

                    <small>
                      {round.date}
                    </small>

                  )}

                </div>

              )
            )}


          </div>

        </section>


        {/* =================================================
            ELIGIBILITY
        ================================================= */}

        <section className="info-box">


          <div className="info-box-heading">


            <div className="red-icon">

              <UserCheck size={19} />

            </div>


            <div>

              <span>
                ELIGIBILITY
              </span>

              <h3>
                {currentExam.eligibilityTitle}
              </h3>

            </div>


          </div>


          <ul className="large-list">

            {currentExam.eligibility.map(
              (item, index) => (

                <li key={index}>
                  {item}
                </li>

              )
            )}

          </ul>


        </section>


        {/* =================================================
            AI PROCTORING
        ================================================= */}

        <section className="info-box">


          <div className="info-box-heading">


            <div className="red-icon">

              <ShieldCheck size={19} />

            </div>


            <div>

              <span>
                EXAM SECURITY
              </span>

              <h3>
                {currentExam.proctoringTitle}
              </h3>

            </div>


            <b>
              STRICT COMPLIANCE
            </b>

          </div>


          <div className="proctor-items">


            <div>

              <ScanFace size={18} />

              Face Tracking Enabled

            </div>


            <div>

              <UserCheck size={18} />

              Face Recognition

            </div>


            <div>

              <ShieldCheck size={18} />

              Object Detection

            </div>


            <div>

              <Volume2 size={18} />

              Noise Monitoring

            </div>


          </div>


          <div className="warning-box">

            {currentExam.unfairMeans}

          </div>


        </section>


      </div>


      {/* ===================================================
          SUPPORT
      =================================================== */}

      <div className="instruction-support">

        <span>
          {currentExam.supportTitle}
        </span>

        <strong>
          {currentExam.supportEmail}
        </strong>

      </div>


    </div>

  );
}


export default Instructions;