import React, { useState } from "react";
import "./DashboardScreen.css";

import SideNavigationBar from "../../components/SideNavigationBar/SideNavigationBar";
import UserDetailsCard from "../../components/UserDetailsCard/UserDetailsCard";
import VegetableDetailsCard from "../../components/VegetableDetailsCard/VegetableDetailsCard";
import MapDetailsCard from "../../components/MapDeatailsCard/MapDetailsCard";

function DashboardScreen({ handleLogout }) {
  const [navigation, setNavigation] = useState("userCard");

  const handleUserClick = () => {
    setNavigation("userCard");
  };

  const handleVegitabelClick = () => {
    setNavigation("vegetableCard");
  };
  const handleMapClick = () => {
    setNavigation("mapCard");
  };

  const accessToken = localStorage.getItem("accessToken");

  return (
    <div className="dashboardScreenContiner">
      <div className="dashboardScreenSideContainer">
        <SideNavigationBar
          handleUserClick={handleUserClick}
          handleVegitabelClick={handleVegitabelClick}
          handleMapClick={handleMapClick}
          handleLogoutClick={handleLogout}
        />
      </div>
      <div className="dashboardScreenDetailsContainer">
        {navigation === "userCard" && <UserDetailsCard />}
        {navigation === "vegetableCard" && <VegetableDetailsCard />}
        {navigation === "mapCard" && <MapDetailsCard />}
      </div>
    </div>
  );
}

export default DashboardScreen;
