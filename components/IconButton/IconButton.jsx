import React from "react";

function IconButton({ height, width, borderRadius, backgroundColor }) {
  return (
    <div
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius,
        backgroundColor: backgroundColor,
        position: "absolute",
        right: 20,
        top: 30,
      }}
    ></div>
  );
}

export default IconButton;
