import React from "react";
import "./SideNavigationBar.css";
import IconButton from "../IconButton/IconButton";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faPepperHot } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function SideNavigationBar({ handleUserClick, handleVegitabelClick }) {
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
          buttonText="User"
          icon={faUsers}
          onClick={handleUserClick}
        />
        <IconButton
          width={"16vw"}
          height={50}
          backgroundColor="#076DFC"
          borderRadius={10}
          buttonText="Vegetables"
          icon={faPepperHot}
          onClick={handleVegitabelClick}
        />
        <IconButton
          width={"16vw"}
          height={50}
          backgroundColor="#076DFC"
          borderRadius={10}
          buttonText="Map"
          icon={faLocationDot}
        />
      </div>
      <div className="navigationButtonBottomContainer">
        <IconButton
          width={"16vw"}
          height={50}
          backgroundColor="#076DFC"
          borderRadius={10}
          buttonText="Messages"
          icon={faMessage}
        />
        <IconButton
          width={"16vw"}
          height={50}
          backgroundColor="tomato"
          borderRadius={10}
          marginBottom={30}
          buttonText="Logout"
          icon={faRightFromBracket}
        />
      </div>
    </div>
  );
}

export default SideNavigationBar;
