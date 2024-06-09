import React from "react";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="flex flex-col h-svh">
      <Navbar />
      <LandingPage />
    </div>
  );
};

export default App;
