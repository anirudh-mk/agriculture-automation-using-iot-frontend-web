import React from "react";
import "./SideNavigationBar.css";
import IconButton from "../IconButton/IconButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
function SideNavigationBar() {
  return (
    <div className="sideNavigationBarContainer">
      <div className="sidenavigationBarHeadding">
        <h1>Dashboard</h1>
      </div>
      <div className="sideNavigationBarButtonsContainer">
        <IconButton buttonText="User" icon={faUser} />
      </div>
    </div>
  );
}

export default SideNavigationBar;
