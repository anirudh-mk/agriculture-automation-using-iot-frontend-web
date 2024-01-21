import React from "react";
import "./IconButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function IconButton({
  height,
  width,
  borderRadius,
  backgroundColor,
  buttonText,
  color,
  icon,
  onClick,
}) {
  return (
    <div
      className="iconButtonContainer"
      style={{
        width: width ? width : "100%",
        height: height ? height : 40,
        borderRadius: borderRadius ? borderRadius : 10,
        backgroundColor: backgroundColor ? backgroundColor : "#076DFC",
      }}
      onClick={onClick}
    >
      <div className="iconButtonIconContainer" style={{ width: height }}>
        <FontAwesomeIcon
          icon={icon}
          size="lg"
          style={{ color: color ? color : "#fff" }}
        />
      </div>
      <div className="iconButtonTextContainer">
        <p style={{ color: color ? color : "#fff", width: width - height }}>
          {buttonText}
        </p>
      </div>
    </div>
  );
}

export default IconButton;
