import React from "react";
import "./DashboardScreen.css";

import SideNavigationBar from "../../components/SideNavigationBar/SideNavigationBar";

function DashboardScreen() {
  return (
    <div className="dashboardScreenContiner">
      <div className="dashboardScreenSideContainer">
        <SideNavigationBar />
      </div>
      <div className="dashboardScreenDetailsContainer"></div>
    </div>
  );
}

export default DashboardScreen;
