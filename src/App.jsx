import { useState } from "react";
import "./App.css";
import SideNavigationBar from "../components/SideNavigationBar/SideNavigationBar";
import UserDetailsCard from "../components/userDetailsCard/UserDetailsCard";

function App() {
  return (
    <div className="dashboardScreen">
      <SideNavigationBar />
      <UserDetailsCard />
    </div>
  );
}

export default App;
