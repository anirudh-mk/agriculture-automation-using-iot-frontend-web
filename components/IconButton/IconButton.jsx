import React from "react";
import "./IconButton.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function IconButton() {
  return (
    <div className="iconButtonContainer">
      <div className="iconButtonIconContainer">
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className="iconbuttonTextContiner">
        <p>Home</p>
      </div>
    </div>
  );
}

export default IconButton;
