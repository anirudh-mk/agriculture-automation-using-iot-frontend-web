// import React, { useState, useEffect } from "react";
// import SideNavigationBar from "../components/SideNavigationBar/SideNavigationBar";
// import UserDetailsCard from "../components/UserDetailsCard/UserDetailsCard";
// import "./App.css";

// const App = () => {
//   const [screenSize, setScreenSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   const handleResize = () => {
//     setScreenSize({
//       width: window.innerWidth,
//       height: window.innerHeight,
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const [screen, setScreen] = useState("");
//   const handleUserClick = () => {
//     setScreen("user");
//   };
//   const handleVegitabelClick = () => {
//     setScreen("vegitable");
//   };
//   return (
//     <>
//       <div
//         className="sidebarNavigationContainer"
//         style={{
//           width: (screenSize.width * 20) / 100 - 20,
//           height: screenSize.height - 20,
//         }}
//       >
//         <SideNavigationBar
//           handleUserClick={handleUserClick}
//           handleVegitabelClick={handleVegitabelClick}
//         />
//       </div>
//       <div
//         className="sidebarDetailsContainer"
//         style={{
//           width: (screenSize.width * 80) / 100 - 20,
//           height: screenSize.height - 20,
//         }}
//       >
//         {screen === "user" && <UserDetailsCard />}
//       </div>
//     </>
//   );
// };

// export default App;

import React from "react";
import LoginScreen from "../screens/LoginScreen/LoginScreen";

function App() {
  return (
    <>
      <LoginScreen />
    </>
  );
}

export default App;
