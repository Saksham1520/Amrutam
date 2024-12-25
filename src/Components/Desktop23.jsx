import React from "react";
import Desktop23Card from "./Desktop23Card";
import Findmore from "../Images/Findmore.png";

function Desktop23() {
  return (
    <div className="max-w-screen-2xl h-[750px] md:h-[800px] flex flex-col gap-[40px] items-center justify-center container mx-auto px-4">
      <div className="w-full md:w-[597px] text-center font-dinpro text-[32px]  md:text-[48px] leading-[41.22px] md:leading-[61.82px] text-[#3A643B] underline">
        Meet Our Ayurveda Experts
      </div>
      <div className="w-full overflow-x-auto md:w-[1228px] flex gap-[20px] px-4 py-2 items-center justify-center ">
        <button className="hidden md:block text-[50px]"> ←</button>
        <div className="flex gap-[20px]">
          <Desktop23Card />
          <Desktop23Card />
          <Desktop23Card />
          <button className="hidden md:block text-[50px]">→</button>
        </div>
      </div>
      <div className="w-[276px] h-[62px]">
        <img src={Findmore} alt="image" />
      </div>
    </div>
  );
}

export default Desktop23;
