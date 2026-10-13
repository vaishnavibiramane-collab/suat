import React, { useState } from "react";
import "../styles/ExamDetails.css";

import {
  Palette,
  Scale,
  BriefcaseBusiness,
  BookOpen,
  Brain,
  GraduationCap,
  Building2,
  Users,
  Award,
} from "lucide-react";


/* =========================================================
   EXAM DATA
========================================================= */

const examData = {

  /* =======================================================
     SU-DAT
  ======================================================= */

  "SU-DAT": {
    school: "School of Design",
    schoolFull: "School of Design – 120 Seats",
    seats: "120",
    totalMarks: "100",

    type: "design",

    phase1Title:
      "Phase 1: Online Exam Structure",

    phase1Marks:
      "40 Marks / 2 Hrs",

    subjects: [
      {
        sr: "1",
        topic: "Lateral Thinking",
        questions: "05 Qs",
        marks: "10 Marks",
      },
      {
        sr: "2",
        topic: "Logical Thinking",
        questions: "05 Qs",
        marks: "10 Marks",
      },
      {
        sr: "3",
        topic: "Numerical Skills",
        questions: "05 Qs",
        marks: "05 Marks",
      },
      {
        sr: "4",
        topic: "Comprehension Ability",
        questions: "01 Qs",
        marks: "05 Marks",
      },
      {
        sr: "5",
        topic: "General Knowledge",
        questions: "05 Qs",
        marks: "05 Marks",
      },
      {
        sr: "6",
        topic: "Perceptual Skills",
        questions: "04 Qs",
        marks: "05 Marks",
      },
    ],

    phase1TotalQuestions: "25 Qs",
    phase1TotalMarks: "40 Marks",

    phase2Title:
      "Phase 2: Portfolio Evaluation",

    phase2Marks:
      "60 Marks",

    portfolioIntro:
      "Evaluates creative aptitude across 10 core parameters:",

    portfolio: [
      "Originality & Uniqueness",
      "Sense of Composition",
      "2D / 3D Concept Conversion",
      "Presentation & Layout",
      "Ideas Development",
      "Illustration & Rendering",
      "Sketching Ability",
      "Material Experimentation",
    ],

    matrixTitle:
      "SOD Seat Distribution Matrix",

    matrix: [
      ["B.Des Fashion & Lifestyle", "30 Seats"],
      ["B.Des Space & Interior", "30 Seats"],
      ["B.Des Communication", "30 Seats"],
      ["B.Des Product Design", "30 Seats"],
    ],

    support:
      "Helpdesk Support",

    phone:
      "+91 - 9545453092",
  },


  /* =======================================================
     SU-LAT
  ======================================================= */

  "SU-LAT": {
    school: "School of Law",
    schoolFull: "School of Law (SOL)",
    seats: "180",
    totalMarks: "100",

    type: "law",

    duration: "2 Hours",

    syllabus: [
      {
        head: "English Language",

        coverage:
          "Prepositions, Articles, Common Errors, One word Substitution, Synonyms, Antonyms, English Comprehension",

        weightage:
          "100 Marks (Combined Weightage)",
      },

      {
        head:
          "Legal Aptitude & Legal Reasoning",

        coverage:
          "Legal Awareness, Legal Reasoning, Legal Terms and Maxims, Statement, Assumption, Analogy",

        weightage: "",
      },

      {
        head:
          "Current Affairs & GK",

        coverage:
          "History, Geography, Sports, Economics, Indian Culture (Dance and Music)",

        weightage: "",
      },

      {
        head:
          "Constitution of India",

        coverage:
          "Characteristics of Indian Constitution, Fundamental Rights, Directive Principles, President, Supreme Court, High Court",

        weightage: "",
      },
    ],

    lawPrograms: [
      "BA LLB (Hons) 5 Years Integrated Law Program",
      "BBA LLB (Hons) 5 Years Integrated Business Law",
      "LLB (3 Years) Post-Graduation law degree",
    ],

    bottomTitle:
      "BCI Recognized Institution",

    bottomText:
      "Curriculum mapped with Bar Council of India standards & Moot Court practicals.",

    support:
      "Law Helpdesk",

    phone:
      "+91 - 9545453092",
  },


  /* =======================================================
     SU-MAT
  ======================================================= */

  "SU-MAT": {
    school:
      "School of Commerce & Management",

    schoolFull:
      "School of Commerce & Management Studies (SOCMS)",

    seats: "240",
    totalMarks: "150",

    type: "management",

    phase1Title:
      "Phase 1: Online Entrance Exam",

    phase1Marks:
      "100 Marks / 2 Hours",

    phase1: [
      {
        sr: "1",
        syllabus: "General Knowledge",
        evaluation:
          "Current affairs, business world & economy",
      },
      {
        sr: "2",
        syllabus: "English",
        evaluation:
          "Grammatical accuracy & reading comprehension",
      },
      {
        sr: "3",
        syllabus: "Aptitude Test",
        evaluation:
          "Quantitative reasoning & logical problem solving",
      },
    ],

    phase2Title:
      "Phase 2: Personal Interview (PI)",

    phase2Marks:
      "50 Marks",

    phase2Intro:
      "Recognizes mental abilities, individuality, and core skillsets:",

    interviewLeft: [
      "Candidate Aptitude",
      "Confidence Level",
      "Academic Background",
    ],

    interviewRight: [
      "Communication Skills",
      "Decision Making Ability",
      "Awareness of Current Trends",
    ],

    managementTitle:
      "SOCMS Management Programs",

    managementPrograms: [
      {
        title:
          "New Age MBA (Business Analytics)",

        text:
          "Specialized Data-Driven Management Program",
      },

      {
        title:
          "New Age MBA (Banking & Financial Services)",

        text:
          "Fintech & Banking Operations Focus",
      },

      {
        title:
          "Regular MBA specializations:",

        text:
          "Marketing Management • Financial Management • Human Resource Management • International Business • Digital Marketing",
      },
    ],

    support:
      "Management Support",

    phone:
      "+91 - 9545453092",
  },

};


/* =========================================================
   COMPONENT
========================================================= */

function ExamDetails() {

  const [activeExam, setActiveExam] =
    useState("SU-DAT");

  const data =
    examData[activeExam];


  return (

    <div className="exam-details-page">


      {/* ===================================================
          PAGE TITLE
      =================================================== */}

      {/* 
      


      
      {/* ===================================================
          EXAM SELECTOR
      =================================================== */}

      <div className="details-selector">

        <div className="details-selector-label">

          <span>
            Select Exam Details
          </span>

        </div>


        <div className="details-exam-tabs">

          <button
            type="button"
            className={
              activeExam === "SU-DAT"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveExam("SU-DAT")
            }
          >

            <Palette size={14} />

            <span>
              SU-DAT (School of Design – 120 Seats)
            </span>

          </button>


          <button
            type="button"
            className={
              activeExam === "SU-LAT"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveExam("SU-LAT")
            }
          >

            <Scale size={14} />

            <span>
              SU-LAT (School of Law – 180 Seats)
            </span>

          </button>


          <button
            type="button"
            className={
              activeExam === "SU-MAT"
                ? "active"
                : ""
            }
            onClick={() =>
              setActiveExam("SU-MAT")
            }
          >

            <BriefcaseBusiness size={14} />

            <span>
              SU-MAT (Management – 240 Seats)
            </span>

          </button>


          <div className="total-marks">

            <span>
              TOTAL MARKS
            </span>

            <strong>
              {data.totalMarks}
            </strong>

          </div>

        </div>

      </div>


      {/* ===================================================
          SELECTED SCHOOL LABEL
      =================================================== */}

      <div className="selected-school">

        <div className="selected-school-icon">

          {activeExam === "SU-DAT" && (
            <Palette size={19} />
          )}

          {activeExam === "SU-LAT" && (
            <Scale size={19} />
          )}

          {activeExam === "SU-MAT" && (
            <BriefcaseBusiness size={19} />
          )}

        </div>


        <div>

          <span>
            {activeExam}
          </span>

          <strong>
            {data.schoolFull}
          </strong>

        </div>

      </div>


      {/* ===================================================
          DAT
      =================================================== */}

      {activeExam === "SU-DAT" && (

        <DATDetails data={data} />

      )}


      {/* ===================================================
          LAT
      =================================================== */}

      {activeExam === "SU-LAT" && (

        <LATDetails data={data} />

      )}


      {/* ===================================================
          MAT
      =================================================== */}

      {activeExam === "SU-MAT" && (

        <MATDetails data={data} />

      )}


    </div>

  );
}


/* =========================================================
   SU-DAT DETAILS
========================================================= */

function DATDetails({ data }) {

  return (

    <>

      <div className="details-columns dat-layout">


        {/* PHASE 1 */}

        <section className="details-box dat-phase-one">

          <div className="details-heading">

            <div>

              <span>
                PHASE 1
              </span>

              <h3>
                {data.phase1Title}
              </h3>

            </div>

            <strong>
              {data.phase1Marks}
            </strong>

          </div>


          <div className="exam-table">

            <div className="exam-row header">

              <span>
                Sr
              </span>

              <span>
                Syllabus Topic
              </span>

              <span>
                Questions
              </span>

              <span>
                Marks
              </span>

            </div>


            {data.subjects.map(
              (row) => (

                <div
                  className="exam-row"
                  key={row.sr}
                >

                  <span>
                    {row.sr}
                  </span>

                  <span>
                    {row.topic}
                  </span>

                  <span>
                    {row.questions}
                  </span>

                  <strong>
                    {row.marks}
                  </strong>

                </div>

              )
            )}


            <div className="exam-row total">
                <strong>
                
              </strong>

              <strong>
                Total Phase 1 Written Exam
              </strong>

              <strong>
                {data.phase1TotalQuestions}
              </strong>

              <strong>
                {data.phase1TotalMarks}
              </strong>

            </div>

          </div>

        </section>


        {/* PHASE 2 */}

        <section className="details-box dat-phase-two">

          <div className="details-heading">

            <div>

              <span>
                PHASE 2
              </span>

              <h3>
                {data.phase2Title}
              </h3>

            </div>

            <strong>
              {data.phase2Marks}
            </strong>

          </div>


          <p className="details-description">

            {data.portfolioIntro}

          </p>


          <div className="portfolio-list dat-portfolio">

            {data.portfolio.map(
              (item, index) => (

                <div
                  key={index}
                >

                  <span>
                    •
                  </span>

                  {item}

                </div>

              )
            )}

          </div>


          {/* SEAT MATRIX */}

          <div className="dat-seat-matrix">

            <div className="matrix-heading">

              <strong>
                {data.matrixTitle}
              </strong>

              <span>
                Total Seats: {data.seats}
              </span>

            </div>


            <div className="matrix-grid">

              {data.matrix.map(
                (item, index) => (

                  <div
                    key={index}
                  >

                    <span>
                      {item[0]}
                    </span>

                    <strong>
                      {item[1]}
                    </strong>

                  </div>

                )
              )}

            </div>

          </div>

        </section>

      </div>


      <SupportBox
        title={data.support}
        phone={data.phone}
      />

    </>

  );
}


/* =========================================================
   SU-LAT DETAILS
========================================================= */

function LATDetails({ data }) {

  return (

    <>

      <div className="details-columns lat-layout">


        {/* SYLLABUS */}

        <section className="details-box lat-syllabus">

          <div className="details-heading">

            <div>

              <span>
                SYLLABUS
              </span>

              <h3>
                SU-LAT Syllabus Heads & Subject Coverage
              </h3>

            </div>

            <strong>
              Duration: {data.duration}
            </strong>

          </div>


          <div className="lat-table">

            <div className="lat-row lat-header">

              <span>
                Heads
              </span>

              <span>
                Detailed Syllabus Coverage
              </span>

              <span>
                Weightage
              </span>

            </div>


            {data.syllabus.map(
              (item, index) => (

                <div
                  className="lat-row"
                  key={index}
                >

                  <strong>
                    {item.head}
                  </strong>

                  <span>
                    {item.coverage}
                  </span>

                  <span>
                    {item.weightage}
                  </span>

                </div>

              )
            )}


            <div className="lat-row lat-total">

              <strong>
                Total Entrance Marks
              </strong>

              <span></span>

              <strong>
                100 Marks
              </strong>

            </div>

          </div>

        </section>


        {/* LAW PROGRAMS */}

        <section className="details-box law-programs">

          <div className="details-heading">

            <div>

              <span>
                PROGRAMMES
              </span>

              <h3>
                School of Law (SOL) Programs
              </h3>

            </div>

          </div>


          <div className="program-list">

            {data.lawPrograms.map(
              (program, index) => (

                <div
                  key={index}
                  className="program-item"
                >

                  <BookOpen size={15} />

                  <span>
                    {program}
                  </span>

                </div>

              )
            )}

          </div>


          <div className="bci-box">

            <strong>
              {data.bottomTitle}
            </strong>

            <p>
              {data.bottomText}
            </p>

          </div>

        </section>

      </div>


      <SupportBox
        title={data.support}
        phone={data.phone}
      />

    </>

  );
}


/* =========================================================
   SU-MAT DETAILS
========================================================= */

function MATDetails({ data }) {

  return (

    <>

      <div className="details-columns mat-layout">


        {/* LEFT COLUMN */}

        <div className="mat-left">


          {/* PHASE 1 */}

          <section className="details-box mat-phase-one">

            <div className="details-heading">

              <div>

                <span>
                  PHASE 1
                </span>

                <h3>
                  {data.phase1Title}
                </h3>

              </div>

              <strong>
                {data.phase1Marks}
              </strong>

            </div>


            <div className="mat-table">

              <div className="mat-row mat-header">

                <span>
                  Sr No
                </span>

                <span>
                  Syllabus
                </span>

                <span>
                  Target Evaluation
                </span>

              </div>


              {data.phase1.map(
                (item) => (

                  <div
                    className="mat-row"
                    key={item.sr}
                  >

                    <span>
                      {item.sr}
                    </span>

                    <strong>
                      {item.syllabus}
                    </strong>

                    <span>
                      {item.evaluation}
                    </span>

                  </div>

                )
              )}

            </div>

          </section>


          {/* PHASE 2 */}

          <section className="details-box mat-phase-two">

            <div className="details-heading">

              <div>

                <span>
                  PHASE 2
                </span>

                <h3>
                  {data.phase2Title}
                </h3>

              </div>

              <strong>
                {data.phase2Marks}
              </strong>

            </div>


            <p className="details-description">

              {data.phase2Intro}

            </p>


            <div className="interview-grid">

              <div>

                {data.interviewLeft.map(
                  (item, index) => (

                    <div
                      key={index}
                    >
                      • {item}
                    </div>

                  )
                )}

              </div>


              <div>

                {data.interviewRight.map(
                  (item, index) => (

                    <div
                      key={index}
                    >
                      • {item}
                    </div>

                  )
                )}

              </div>

            </div>

          </section>


        </div>


        {/* RIGHT COLUMN */}

        <section className="details-box management-programs">

          <div className="details-heading">

            <div>

              <span>
                PROGRAMMES
              </span>

              <h3>
                {data.managementTitle}
              </h3>

            </div>

            <strong>
              Merit Based
            </strong>

          </div>


          <div className="management-list">

            {data.managementPrograms.map(
              (program, index) => (

                <div
                  key={index}
                  className="management-item"
                >

                  <strong>
                    {program.title}
                  </strong>

                  <span>
                    {program.text}
                  </span>

                </div>

              )
            )}

          </div>

        </section>

      </div>


      <SupportBox
        title={data.support}
        phone={data.phone}
      />

    </>

  );
}


/* =========================================================
   SUPPORT
========================================================= */

function SupportBox({
  title,
  phone,
}) {

  return (

    <div className="details-support">

      <div>

        <span>
          {title}
        </span>

        <strong>
          {phone}
        </strong>

      </div>

    </div>

  );
}


export default ExamDetails;