import React from "react";

import LandingNavbar from "./LandingNavbar";

const Hero = () => {
  return (
    <div className="container mx-auto my-10 ">
      <div className="bg-[#f84f66] px-6 lg:px-16 py-10 rounded-3xl">
        <LandingNavbar/>
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
          <div className="flex flex-col gap-5 lg:gap-10">
            <p className=" text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
            Your<br className="lg:flex hidden"/> Reliable Link <br className="lg:flex hidden" />Between Destinations
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-black">
            Bringing convenience to your doorstep.<br  className="lg:flex hidden"/> whatever you need
            </p>
            <button className="btn btn-sm lg:btn-lg bg-[#524fd5] text-white rounded-full border-none w-36 lg:w-44 capitalize">Sign In</button>
          </div>
          <img src="/assets/coolie.jpg" alt="" height={1000} width={800} className="rounded-2xl"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
