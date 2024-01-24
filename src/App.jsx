import React, { useState } from "react";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import DashboardScreen from "../screens/DashborardScree/DashboardScreen";

function App() {
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(true);
  };
  const handleLogout = () => {
    setLogin(false);
  };
  return (
    <>
      {login ? (
        <DashboardScreen handleLogout={handleLogout} />
      ) : (
        <LoginScreen handleLogin={handleLogin} />
      )}
    </>
  );
}

export default App;
