import React from "react";
import "./TextButton.css";
function TextButton({
  width,
  height,
  borderRadius,
  backgroundColor,
  color,
  buttonText,
  onClick,
}) {
  return (
    <div
      className="textButtonContainer"
      style={{
        height: height ? height : "100%",
        width: width ? width : "100%",
        borderRadius: borderRadius ? borderRadius : 10,
        backgroundColor: backgroundColor ? backgroundColor : "#076DFC",
      }}
      onClick={onClick}
    >
      <p style={{ color: color ? color : "#fff" }}>{buttonText}</p>
    </div>
  );
}

export default TextButton;
