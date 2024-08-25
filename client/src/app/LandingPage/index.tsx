import Navbar from "@/components/Landing/Navbar";
import Hero from "@/components/Landing/Hero/main";
import React from "react";

function LandingPage() {
  return (
    <div>
      <div className="flex justify-center mt-[1rem]">
        <Navbar />
      </div>
      <div className="flex flex-col mt-[3rem] mx-auto w-[85%] lg:w-[65%]">
        <Hero />
      </div>
    </div>
  );
}

export default LandingPage;
