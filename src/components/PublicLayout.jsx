import React, { useState } from "react";

import Sidebar from "./Sidebar";
import LandingHome from "./LandingHome";
import Instructions from "./Instructions";
import ExamDetails from "./ExamDetails";

function PublicLayout({
  onVerified,
  verified = false,
  applicationMode = false,
  children,
}) {
  const [activeTab, setActiveTab] = useState(
    applicationMode ? "application" : "home"
  );

  React.useEffect(() => {
    if (applicationMode) {
      setActiveTab("application");
    }
  }, [applicationMode]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="portal-layout">

      {/* SIDEBAR */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        verified={verified}
      />

      {/* MAIN CONTENT */}
      <main className="portal-main">

        {/* TOP HEADER */}
        <header className="portal-header">

          <div>
            {/* <span className="portal-eyebrow">
              SANDIP UNIVERSITY
            </span> */}

            <h1>
              Sandip University Aptitude Test - 2027
              
            </h1>

           
          </div>

          {verified && (
            <div className="verified-user">

              <div className="verified-avatar">
                SU
              </div>

              <div>
                <strong>
                  Student
                </strong>

                <span>
                  ✓ Verified
                </span>
              </div>

            </div>
          )}

        </header>

        {/* CONTENT */}
        <section className="portal-content">

          {activeTab === "home" && !verified && (
            <LandingHome
              onVerified={onVerified}
            />
          )}

          {activeTab === "instructions" && (
            <Instructions />
          )}

          {activeTab === "details" && (
            <ExamDetails />
          )}

          {activeTab === "application" && verified && (
            children
          )}

        </section>

      </main>

    </div>
  );
}

export default PublicLayout;