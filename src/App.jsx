import React, { useState, useEffect } from "react";
import SideNavigationBar from "../components/SideNavigationBar/SideNavigationBar";
import UserDetailsCard from "../components/UserDetailsCard/UserDetailsCard";

const App = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [screenSizePercentage, setScreenSizePercentage] = useState(screenSize);

  const handleResize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className="sidebarNavigationContainer"
        style={{
          width: (screenSize.width * 20) / 100 - 20,
          height: screenSize.height - 20,
          padding: 10,
        }}
      >
        <SideNavigationBar />
      </div>
      <div
        className="sidebarNavigationContainer"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: (screenSize.width * 80) / 100 - 20,
          height: screenSize.height - 20,
          padding: 10,
        }}
      >
        <UserDetailsCard />
      </div>
    </>
  );
};

export default App;
