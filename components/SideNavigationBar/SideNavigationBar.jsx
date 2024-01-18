import React from "react";
import "./SideNavigationBar.css";
import IconButton from "../IconButton/IconButton";

function SideNavigationBar() {
  return (
    <div className="sideNavigationBarContainer">
      <div className="sidenavigationBarHeadding">
        <h1>Dashboard</h1>
      </div>
      <div className="sideNavigationBarButtonsContainer">
        <IconButton />
        <IconButton />
        <IconButton />
      </div>
    </div>
  );
}

export default SideNavigationBar;
