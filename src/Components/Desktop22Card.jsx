import React from "react";
import stars from "../Images/stars.jpg";

function Desktop22Card() {
  return (
    <div className="w-full sm:w-[388px] h-auto sm:h-[371px] bg-white rounded-xl shadow-lg">
      <div className="w-full sm:w-[386px] h-auto sm:h-[54px] bg-[#ECE7FF] p-4 sm:p-[17px] rounded-t-xl shadow-b-lg">
        <span className="font-nunito text-[16px] sm:text-[18px] ">
          Consulted for Skin
        </span>
      </div>
      <div className="w-full sm:w-[386px] h-auto sm:h-[317px] p-4 sm:p-5 flex flex-col gap-3 sm:gap-[10px]">
        <div className="w-full sm:w-[331px] h-auto sm:h-[60px]  flex justify-between items-center">
          <div className="flex gap-2 sm:gap-[10px]">
            <div className="w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] rounded-full bg-gray-400"></div>
            <div className="w-[100px] sm:w-[124px] h-[auto]">
              <h1 className="text-[14px] sm:text-[16px] font-semibold">
                Sophie Moore
              </h1>
              <h4 className="text-[12px] sm:text-[14px]">Chennai</h4>
            </div>
          </div>
          <div className="text-[12px] sm:text-[14px]">17/02/24</div>
        </div>
        <div className="w-[120px] sm:w-[140px] h-auto ml-2.5">
          <p className="w-[120px] sm:w-[140px] h-auto">⭐⭐⭐⭐⭐</p>
        </div>
        <div className="w-full sm:w-[308px] h-auto sm:h-[134px]">
          <div className="w-full sm:w-[263px] h-auto sm:h-[42px]">
            <h1 className="text-[16px] sm:text-[22px] font-bold text-[#333333]">
              "One of a kind service"
            </h1>
          </div>
          <div className="w-full sm:w-[308px] h-auto sm:h-[90px] text-[14px] sm:text-[18px] leading-[20px] sm:leading-[30px] text-[#555555]">
            Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra
            diam sit amet nisl suscipit adipis.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Desktop22Card;
