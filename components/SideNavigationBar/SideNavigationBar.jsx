import React from "react";
import "./SideNavigationBar.css";
import IconButton from "../IconButton/IconButton";
function SideNavigationBar() {
  return (
    <div className="sideNavigationBarContainer">
      <div className="sideNavigationBarHeaddingContainer">
        <h1>Dashborard</h1>
      </div>
      <div className="sideNavigationBarButtonContainer">
        <IconButton
          width={"16vw"}
          height={50}
          backgroundColor="#076DFC"
          borderRadius={10}
        />
        <IconButton
          width={"16vw"}
          height={50}
          backgroundColor="#076DFC"
          borderRadius={10}
        />
        <IconButton
          width={"16vw"}
          height={50}
          backgroundColor="#076DFC"
          borderRadius={10}
        />
      </div>
      <div className="navigationButtonBottomContainer"></div>
    </div>
  );
}

export default SideNavigationBar;
