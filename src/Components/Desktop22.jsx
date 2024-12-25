import React from "react";
import Desktop22Card from "./Desktop22Card";

function Desktop22() {
  return (
    <div className="max-w-screen-2xl h-[690px] md:h-[710px] bg-[#FFF7E2] flex flex-col gap-[40px] items-center justify-center container mx-auto px-4">
      <div className="w-full md:w-[774px] text-center font-dinpro text-[32px]  md:text-[48px] leading-[41.22px] md:leading-[61.48px] text-[#3A643B]">
        STORIES FROM OUR VALUED CUSTOMERS!
      </div>
      <div className="w-full overflow-x-auto md:w-[1228px] flex gap-[20px] px-4 py-2">
        <div className="flex gap-[20px]">
          <Desktop22Card />
          <Desktop22Card />
          <Desktop22Card />
        </div>
      </div>
    </div>
  );
}

export default Desktop22;
