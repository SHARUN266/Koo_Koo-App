import LeftSidebar from "@/Components/LeftSidebar";
import React from "react";

function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/* Left sidebar for navigation/header*/}
         <LeftSidebar/>
      </div>
    </div>
  );
}

export default Home;
