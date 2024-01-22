import React from "react";
import "./SideNavigationBar.css";
import IconButton from "../IconButton/IconButton";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faPepperHot } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function SideNavigationBar({
  handleUserClick,
  handleVegitabelClick,
  handleMapClick,
}) {
  return (
    <div className="sideNavigationBarContainer">
      <div className="sideNavigationBarHeaddingContainer">
        <h1>Dashborard</h1>
      </div>
      <div className="sideNavigationBarButtonContainer">
        <div className="navigationButtonUsersContainer">
          <IconButton
            height={50}
            backgroundColor="#076DFC"
            borderRadius={10}
            buttonText="User"
            icon={faUsers}
            onClick={handleUserClick}
          />
        </div>
        <div className="navigationButtonVegetablesContainer">
          <IconButton
            height={50}
            backgroundColor="#076DFC"
            borderRadius={10}
            buttonText="Vegetables"
            icon={faPepperHot}
            onClick={handleVegitabelClick}
          />
        </div>
        <div className="navigationButtonMapContainer">
          <IconButton
            height={50}
            backgroundColor="#076DFC"
            borderRadius={10}
            buttonText="Map"
            icon={faLocationDot}
            onClick={handleMapClick}
          />
        </div>
      </div>
      <div className="navigationButtonBottomContainer">
        <div className="navigationButtonMessageContainer">
          <IconButton
            height={50}
            backgroundColor="#076DFC"
            borderRadius={10}
            buttonText="Messages"
            icon={faMessage}
          />
        </div>
        <div className="navigationButtonLogoutContainer">
          <IconButton
            height={50}
            backgroundColor="tomato"
            borderRadius={10}
            buttonText="Logout"
            icon={faRightFromBracket}
          />
        </div>
      </div>
    </div>
  );
}

export default SideNavigationBar;
