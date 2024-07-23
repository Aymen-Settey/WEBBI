import React from "react";
import { UserRole } from "@prisma/client";
import { RoleGate } from "@/components/auth/role-gate";
const PDRIVECO = () => {
  const iframeStyle = {
    border: "none", // Remove border
    width: "100%", // Make the iframe responsive
    height: "100%", // Make the iframe responsive
  };

  const containerStyle = {
    width: "60%", // Ensure the container takes up the full width
    height: "63%", // Ensure the container takes up the full height
    borderRadius: "8px", // Add border radius for a better look
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Add box shadow for depth
    overflow: "hidden", // Hide any content that might overflow the container
  };

  return (
    <RoleGate allowedRole={[UserRole.PDRIVECO, UserRole.DTIVECO]}>
      <div style={containerStyle}>
        <iframe
          title="ITALCAR_DASH_PIECE_GROS"
          src="https://app.powerbi.com/view?r=eyJrIjoiNzA2MTMzNTQtZjExMy00N2YxLWJlMDYtZWI3YWNhOGI5NmQ5IiwidCI6IjVkNjBmZmVkLTViNWUtNDU0ZC05MjU3LWMwNTZhMzU3MTc0NCJ9"
          style={iframeStyle}
          allowFullScreen
        ></iframe>
      </div>
    </RoleGate>
  );
};

export default PDRIVECO;
