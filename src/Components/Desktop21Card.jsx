import React from "react";

function Desktop21Card({ items }) {
  return (
    <div className="flex flex-col bg-[#3A643B] rounded-2xl w-full max-w-[328px] sm:max-w-[295px] md:max-w-[295px] lg:max-w-[328px] h-[230px] md:h-[260px] sm:h-[210px]">
      <div className="flex flex-col items-center justify-center gap-6 p-6 rounded-xl bg-[#FFF7E2] mt-auto">
        <div className="w-[70px] h-[70px] font-bold text-[20px] sm:text-[24px] text-white text-center md:text-[45px] leading-[30px] md:leading-[30.91px] rounded-full bg-[#3A643B] p-6">
          {items.number}
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="w-full">
            <h1 className="font-dinpro text-[20px] sm:text-[24px] text-center text-[#3A643B] leading-[30.91px]">
              {items.heading}
            </h1>
          </div>
          <div>
            <p className="font-dinprolight text-[16px] sm:text-[20px] text-center leading-[25.76px] text-[#2E2E2E]">
              {items.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desktop21Card;
