// App.js

import { RoleGate } from "@/components/auth/role-gate";
import StreamlitComponent from "@/components/streamlit-components";
import { UserRole } from "@prisma/client";
import React from "react";

function App() {
  return (
    <RoleGate allowedRole={[UserRole.ADMIN, UserRole.CEO]}>
      <div>
        <header className="App-header"></header>
        <StreamlitComponent />
      </div>
    </RoleGate>
  );
}

export default App;
