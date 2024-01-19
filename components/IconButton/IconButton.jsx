import React from "react";
import "./IconButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IconButton({
  height,
  width,
  backgroundColor,
  borderRadious,
  buttonText,
  fontcolor,
  icon,
  iconColor,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="iconButtonContainer"
      style={{
        width: width ? width : "100%",
        height: height ? height : 40,
        borderRadius: borderRadious ? borderRadious : 10,
        backgroundColor: backgroundColor ? backgroundColor : "#076DFC",
      }}
    >
      <div
        className="iconButtonIconContainer"
        style={{ width: height ? height : 40 }}
      >
        <FontAwesomeIcon icon={icon} color={iconColor ? iconColor : "#fff"} />
      </div>
      <div className="iconbuttonTextContiner">
        <p style={{ color: fontcolor ? fontcolor : "#fff" }}>{buttonText}</p>
      </div>
    </div>
  );
}

export default IconButton;
