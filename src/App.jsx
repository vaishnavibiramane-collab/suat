import React, { useState } from "react";

import PublicLayout from "./components/PublicLayout";
import ApplicationForm from "./components/ApplicationForm";

import "./styles/suat.css";

function App() {
  const [verified, setVerified] = useState(false);

  // Store details received after OTP verification
  const [verifiedData, setVerifiedData] = useState(null);

  const handleVerified = (data) => {
    console.log("OTP verified data:", data);

    setVerifiedData(data);
    setVerified(true);
  };

  return (
    <div className="suat-app">

      {!verified ? (
        <PublicLayout
          onVerified={handleVerified}
        />
      ) : (
        <PublicLayout
          verified={true}
          applicationMode={true}
        >
          <ApplicationForm
            verifiedData={verifiedData}
          />
        </PublicLayout>
      )}

    </div>
  );
}

export default App;