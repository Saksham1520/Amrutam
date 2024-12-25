import React from "react";
import desktop23girlimg from "../Images/desktop23girlimg.png";
import skinspecialist from "../Images/skinspecialist.png";

function Desktop23Card() {
  return (
    <div className="w-[295px] h-[470px]">
      <div className="w-[295px] h-[381px] bg-[#FFF7E2] rounded-t-3xl">
        <div className="w-[274px] h-[308px] mt-7  mx-auto flex flex-col items-center justify-end gap-[15px]  ">
          <div className="w-[150px] h-[150px] relative">
            <img
              className="w-[150px] h-[150px] rounded-full text-white"
              src={desktop23girlimg}
              alt="profileimage"
            />
            <div className="w-[70px] h-[20px] absolute bottom-0 left-[39px] bg-black text-white px-2.5 rounded-xl">
              4.5⭐
            </div>
          </div>
          <div className="w-[247px] h-[130px] text-center flex flex-col gap-[40px] items-center">
            <div className="w-[247px] h-[81px] flex flex-col gap-[16px]">
              <h1 className="font-gohtam text-[20px] leading-[24px] ">
                Dr. Vaishali Sharma
              </h1>
              <p className="font-inter font-light text-[#838383] text-[15px] leading-[20px]">
                Ayurveda Practitioner (BAMS, MD)
              </p>
              <p className="font-nunitolight text-[16px] text-[#0C0C0C] leading-[18px]">
                🎓 25 years of experience
              </p>
            </div>
            <div className="w-[153px] h-[30px]">
              <img src={skinspecialist} alt="skin" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[295px] h-[65px] bg-[#3A643B] text-[20px] font-nunitolight text-center p-4 text-white rounded-b-full">
        Book a session
      </div>
    </div>
  );
}

export default Desktop23Card;
