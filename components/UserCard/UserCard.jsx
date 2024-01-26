import React from "react";
import "./UserCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

function UserCard({ serialNo, username, farmName, location }) {
  return (
    <div className="userCardContainer">
      <div className="SerialNoContainer">
        <p>{serialNo}</p>
      </div>
      <div className="UserNameContainer">
        <p>{username}</p>
      </div>
      <div className="FarmNameContainer">
        <p>{farmName}</p>
      </div>
      <div className="LocationContainer">
        <p>{location}</p>
      </div>
      <div className="ImageContainer">
        <img src="" alt="" className="userCardUserImage" />
      </div>
      <div className="OptionContainer">
        <FontAwesomeIcon
          className="MenuIcon"
          icon={faEllipsisVertical}
          size="lg"
        />
      </div>
    </div>
  );
}

export default UserCard;
