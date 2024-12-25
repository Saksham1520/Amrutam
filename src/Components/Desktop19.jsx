import React from "react";
import twogirls from "../Images/twogirls.jpeg";
import singlegirl from "../Images/singlegirl.jpeg";
import dryfruits from "../Images/dryfruits.png";

function Desktop19() {
  return (
    <div className="max-w-screen-2xl md:min-h-[850px] min-h-[2100px] container mx-auto bg-[#FFF7E2] px-4">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="w-full max-w-[950px] min-h-[61px] mt-16 font-dinpro text-[32px] sm:text-[48px] leading-[38px] sm:leading-[61.82px] text-center text-[#3A643B] underline">
          What sets Ayurvedic consultations apart?
        </div>

        <div className="w-full max-w-[1250px] flex flex-wrap items-center justify-center gap-4">
          <div className="flex flex-col bg-[#3A643B]  rounded-2xl w-full max-w-[328px] md:max-w-[522px] md:h-[291px] h-[260px]">
            <div className="flex flex-col items-start gap-4 p-4 rounded-xl bg-white mt-auto">
              <div className="w-full text-center font-bold text-[24px] md:text-[32px] leading-[30px] md:leading-[50.88px] text-[#3A643B] p-4">
                स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।
              </div>
              <div className="w-full text-center text-[14px] md:text-[18px] leading-[20px] md:leading-[23.18px] text-[#3A643B] p-4">
                [ Meaning: The Goal of Ayurveda is to maintain the health of a
                healthy person and to cure the disease of a diseased person. ]
              </div>
            </div>
          </div>

          <img
            className="w-full max-w-[360px] h-[285px] rounded-3xl"
            src={twogirls}
            alt="Two Girls"
          />

          <div className="flex flex-col bg-[#3A643B]  rounded-2xl w-full max-w-[328px] md:max-w-[311px] md:h-[274px] h-[210px]">
            <div className="flex flex-col items-start gap-4 p-4 rounded-xl bg-white mt-auto">
              <div className="w-full font-bold text-[24px] md:text-[32px] leading-[30px] md:leading-[30.91px] text-[#3A643B] p-4">
                Precise Diagnosis
              </div>
              <div className="w-full text-[14px] md:text-[15px] leading-[20px] md:leading-[22.76px] text-[#414141] p-4">
                Ayurveda's core principles revolve around Vata, Pitta, and Kapha
                doshas, guiding you with precise diagnosis and treatment.
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1250px] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 justify-center place-items-center">
          <div className="flex flex-col bg-[#3A643B]  rounded-2xl w-full max-w-[300px] h-[230px] md:h-[272px]">
            <div className="flex flex-col items-start gap-4 p-4 rounded-xl bg-white mt-auto">
              <div className="w-full font-bold text-[24px] md:text-[32px] leading-[30px] md:leading-[30.91px] text-[#3A643B] p-4">
                Precise Diagnosis
              </div>
              <div className="w-full text-[14px] md:text-[15px] leading-[20px] md:leading-[22.76px] text-[#414141] p-4">
                Ayurveda's core principles revolve around Vata, Pitta, and Kapha
                doshas, guiding you with precise diagnosis and treatment.
              </div>
            </div>
          </div>

          <img
            className="w-full max-w-[300px] h-[274px] rounded-2xl"
            src={dryfruits}
            alt="Dry Fruits"
          />

          <div className="flex flex-col bg-[#3A643B] border-2 rounded-2xl w-full max-w-[300px] h-[230px] md:h-[272px]">
            <div className="flex flex-col items-start gap-4 p-4 rounded-xl bg-white mt-auto">
              <div className="w-full font-bold text-[24px] md:text-[32px] leading-[30px] md:leading-[30.91px] text-[#3A643B] p-4">
                Precise Diagnosis
              </div>
              <div className="w-full text-[14px] md:text-[15px] leading-[20px] md:leading-[22.76px] text-[#414141] p-4">
                Ayurveda's core principles revolve around Vata, Pitta, and Kapha
                doshas, guiding you with precise diagnosis and treatment.
              </div>
            </div>
          </div>

          <img
            className="w-full max-w-[300px] h-[274px] rounded-2xl"
            src={singlegirl}
            alt="Single Girl"
          />
        </div>
      </div>
    </div>
  );
}

export default Desktop19;
