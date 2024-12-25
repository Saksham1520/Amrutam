import React from "react";

function Desktop20() {
  return (
    <div className="max-w-screen-2xl h-[590px] flex items-center justify-center container mx-auto bg-desktop20bg bg-cover bg-center">
      <div className="w-full max-w-[856px] h-auto flex flex-col items-center justify-center gap-[40px] px-4">
        <div className="w-full text-center font-dinpro text-[32px] sm:text-[48px] md:text-[64px] text-[#FFF7E2] leading-[40px] sm:leading-[60px] md:leading-[82.44px]">
          Ready to restore harmony in your mind, body and spirit?
        </div>
        <button className="w-full sm:w-[276px] h-[72px] text-white text-[16px] sm:text-[17px] rounded-[16px] pt-[16px] px-[32px] pb-[16px] bg-[#3A643B]">
          Book a consultation
        </button>
      </div>
    </div>
  );
}

export default Desktop20;
