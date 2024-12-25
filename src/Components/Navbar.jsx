import React from "react";
import image45 from "../Images/image45.png";

function Navbar() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="bg-[#FFF7E2] flex items-center relative w-full h-[104px] md:h-[80px]">
        <div className="absolute flex flex-col gap-[7px] top-[56px] left-[19px] md:top-[24px] lg:left-[40px] md:hidden">
          <div className="w-[32px] border-t-[2px] border-[#3A643B]"></div>
          <div className="w-[31.5px] border-t-[2px] border-[#3A643B]"></div>
          <div className="w-[30.5px] border-t-[2px] border-[#3A643B]"></div>
        </div>

        <img
          src={image45}
          alt="Logo"
          className="absolute w-[122px] h-[24px] top-[51px] left-[123px] md:w-[122px] md:h-[24px] md:top-[28px] md:left-1/2 md:transform md:-translate-x-1/2"
        />
      </div>
    </div>
  );
}

export default Navbar;
