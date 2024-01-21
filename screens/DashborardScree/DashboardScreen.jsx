import React from "react";
import "./DashboardScreen.css";

import SideNavigationBar from "../../components/SideNavigationBar/SideNavigationBar";
import UserDetailsCard from "../../components/UserDetailsCard/UserDetailsCard";

function DashboardScreen() {
  return (
    <div className="dashboardScreenContiner">
      <div className="dashboardScreenSideContainer">
        <SideNavigationBar />
      </div>
      <div className="dashboardScreenDetailsContainer">
        {/* <UserDetailsCard /> */}
      </div>
    </div>
  );
}

export default DashboardScreen;
