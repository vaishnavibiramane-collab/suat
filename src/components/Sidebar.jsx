import React from "react";

import {
  Home,
  BookOpen,
  FileText,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

function Sidebar({
  activeTab,
  setActiveTab,
  verified,
}) {

  return (

   <aside className="sidebar">

      {/* BRAND */}

      <div className="sidebar-brand">

        <div className="sidebar-logo">
          SU
        </div>

        <div>

          <strong>
            SUAT ADMISSIONS
          </strong>

          {/* <span>
            Sandip University
          </span> */}

        </div>

      </div>


      {/* MENU */}

      <nav className="sidebar-navigation">

        {!verified && (

          <button
            className={
              activeTab === "home"
                ? "sidebar-link active"
                : "sidebar-link"
            }
            onClick={() =>
              setActiveTab("home")
            }
          >

            <div className="sidebar-link-icon">
              <Home size={19} />
            </div>

            <div>
              <strong>
                Registration
              </strong>

              <span>
                SUAT 2027
              </span>
            </div>

          </button>

        )}


        <button
          className={
            activeTab === "instructions"
              ? "sidebar-link active"
              : "sidebar-link"
          }
          onClick={() =>
            setActiveTab("instructions")
          }
        >

          <div className="sidebar-link-icon">
            <BookOpen size={19} />
          </div>

          <div>
            <strong>
              Entrance Exam
            </strong>

            <span>
              Instructions / Guidelines
            </span>
          </div>

        </button>


        <button
          className={
            activeTab === "details"
              ? "sidebar-link active"
              : "sidebar-link"
          }
          onClick={() =>
            setActiveTab("details")
          }
        >

          <div className="sidebar-link-icon">
            <FileText size={19} />
          </div>

          <div>
            <strong>
              Entrance Exam
            </strong>

            <span>
              Details
            </span>
          </div>

        </button>


        {/* AFTER VERIFICATION */}

        {verified && (

          <button
            className={
              activeTab === "application"
                ? "sidebar-link active"
                : "sidebar-link"
            }
            onClick={() =>
              setActiveTab("application")
            }
          >

            <div className="sidebar-link-icon">
              <GraduationCap size={19} />
            </div>

            <div>
              <strong>
                Entrance Application
              </strong>

              <span>
                Application Form
              </span>
            </div>

          </button>

        )}

      </nav>


      {/* APPLY NOW */}

      {!verified && (

        <div className="sidebar-apply-box">

          <div className="sidebar-apply-icon">
            <GraduationCap size={23} />
          </div>

          <h3>
            Ready to Apply?
          </h3>

          <p>
            Complete verification to open
            your entrance application.
          </p>

          <div className="sidebar-apply-disabled">

            Verify First

            <ArrowRight size={16} />

          </div>

        </div>

      )}


      {verified && (

        <div className="sidebar-verified-box">

          <CheckCircle2 size={20} />

          <div>

            <strong>
              Account Verified
            </strong>

            <span>
              Application is now available
            </span>

          </div>

        </div>

      )}


      {/* SUPPORT */}

      <div className="sidebar-support">

        <strong>
          Helpdesk Support
        </strong>

        <span>
          +91 9545453092
        </span>

        <span>
          suat@sandipuniversity.edu.in
        </span>

      </div>

    </aside>

  );
}

export default Sidebar;