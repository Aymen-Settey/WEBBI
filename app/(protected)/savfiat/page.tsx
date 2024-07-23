import { RoleGate } from "@/components/auth/role-gate";
import { UserRole } from "@prisma/client";
import React from "react";

const SAVFIATDashboard = () => {
  const iframeStyle = {
    border: "none", // Remove border
    width: "100%", // Make the iframe responsive
    height: "100%", // Make the iframe responsive
  };

  const containerStyle = {
    width: "60%", // Ensure the container takes up the full width
    height: "65%", // Ensure the container takes up the full height
    borderRadius: "8px", // Add border radius for a better look
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Add box shadow for depth
    overflow: "hidden", // Hide any content that might overflow the container
  };

  return (
    <RoleGate allowedRole={[UserRole.SAVFIAT]}>
      <div style={containerStyle}>
        <iframe
          title="ITALCAR_DASH_SAV_SA"
          width="600"
          height="373.5"
          style={iframeStyle}
          allowFullScreen
          src="https://app.powerbi.com/reportEmbed?reportId=b74861c6-4de9-4ff2-bcce-01e95c5b885e&autoAuth=true&ctid=dbd6664d-4eb9-46eb-99d8-5c43ba153c61"
        ></iframe>
      </div>
    </RoleGate>
  );
};

export default SAVFIATDashboard;
