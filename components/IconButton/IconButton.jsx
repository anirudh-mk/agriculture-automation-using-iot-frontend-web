import React from "react";

function IconButton({ height, width, borderRadius, backgroundColor }) {
  return (
    <div
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius,
        backgroundColor: backgroundColor,
        marginTop: 10,
        marginBottom: 10,
      }}
    ></div>
  );
}

export default IconButton;
