import React from "react";
import yogagirl from "../Images/yogagirl.png";
import heartbeat from "../Images/heartbeat.png";
import strongmuscel from "../Images/strongmuscel.png";
import doctorsign from "../Images/doctorsign.png";
import lotusposition from "../Images/lotusposition.png";
import ayurvedacup from "../Images/ayurvedacup.png";
import ribbon from "../Images/ribbon.png";

import artimage from "../Images/artimage.png";

function Desktop25() {
  return (
    <div className="max-w-screen-2xl container mx-auto">
      <div className="min-w-screen-2xl min-h-[849px] ">
        <div className="block md:hidden">
          <div className="flex items-center justify-center mt-[62px]">
            <div className="w-[334px] md:w-[820px] min-h-[164px]  text-center ">
              <h1 className="font-dinpro font-bold text-[32px] md:text-[48px] text-[#3A643B] md:underline md:decoration-[#C3D0C4]">
                Discover Ayurveda's Magic With Us
              </h1>
              <p className="max-w-[298px] md:max-w-[671px] mx-auto font-dinpro font-[400px] text-[14px] leading-[21px] md:text-[20px] md:leading-[28px] text-[#666666] mt-6">
                Ayurvedic treatment aims to balance your body and mind, bringing
                harmony and vitality. It's like a journey to better health using
                ancient wisdom, a totally effective approach for a better life.
              </p>
            </div>
          </div>
          <div className="w-[209px] h-[228px] mx-auto  relative mt-8">
            <div className="w-[208px] h-[220px]">
              <img src={artimage} alt="bgimage" />
            </div>
            <div className="w-[204px] h-[210px] absolute inset-0 flex items-center justify-center mt-4">
              <img src={yogagirl} alt="yogagirl" />
            </div>
          </div>
          <div className="w-[329px] min-h-[702px] mx-auto  mt-2 grid grid-cols-2 gap-2 gap-y-5 ">
            <div className="w-[154px] min-h-[214px] border-2 rounded-lg  flex items-center justify-center ">
              <div className="min-w-[136px] min-h-[180px]  flex flex-col items-center gap-[4px]">
                <div className="w-[63px] h-[59px]  flex items-center ">
                  <div className="w-[60px] h-[60px] bg-[#EDF5FA] rounded-full flex items-center justify-center">
                    <img
                      className="w-[42px] h-[42px]"
                      src={heartbeat}
                      alt="heartbeat"
                    />
                  </div>
                </div>
                <div className="w-[136px] h-[111px]  flex flex-col items-center justify-center text-center gap-[12px] mt-2">
                  <p className="font-dinpro font-bold text-[15px] leading-[19.32px]">
                    Personalized Wellness
                  </p>
                  <p className="font-dinpro font-[500px] text-[13px] leading-[16.74px] text-[#6D6B6B]">
                    treatments made just for you based on your individual
                    doshas, (body type)
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[154px] min-h-[214px] border-2 rounded-lg flex items-center justify-center">
              <div className="min-w-[136px] min-h-[180px]  flex flex-col items-center gap-[4px]">
                <div className="w-[63px] h-[59px]  flex items-center ">
                  <div className="w-[60px] h-[60px] bg-[#EAF2EA] rounded-full flex items-center justify-center">
                    <img
                      className="w-[42px] h-[42px]"
                      src={ribbon}
                      alt="ribbon"
                    />
                  </div>
                </div>
                <div className="w-[136px] h-[111px]  flex flex-col items-center justify-center text-center  gap-[12px]">
                  <p className="font-dinpro font-bold text-[15px] leading-[19.32px]">
                    Focus on prevention
                  </p>
                  <p className="font-dinpro font-[500px] text-[13px] leading-[16.74px] text-[#6D6B6B]">
                    Stop problems even before they start.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[154px] min-h-[214px] border-2 rounded-lg  flex items-center justify-center">
              <div className="min-w-[136px] min-h-[180px]  flex flex-col items-center gap-[4px]">
                <div className="w-[63px] h-[59px]  flex items-center ">
                  <div className="w-[60px] h-[60px] bg-[#FCF1F1] rounded-full flex items-center justify-center">
                    <img
                      className="w-[42px] h-[42px]"
                      src={lotusposition}
                      alt="lotusposition"
                    />
                  </div>
                </div>
                <div className="w-[136px] h-[111px]  flex flex-col items-center justify-center text-center gap-[12px]">
                  <p className="font-dinpro font-bold text-[15px] leading-[19.32px]">
                    Mind-Body Connection
                  </p>
                  <p className="font-dinpro font-[500px] text-[13px] leading-[16.74px] text-[#6D6B6B]">
                    Keep your mind and body in sync for a happy life.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[154px] min-h-[214px] border-2 rounded-lg  flex items-center justify-center">
              <div className="min-w-[136px] min-h-[180px]  flex flex-col items-center gap-[4px]">
                <div className="w-[63px] h-[59px]  flex items-center ">
                  <div className="w-[60px] h-[60px] bg-[#F5F3FC] rounded-full flex items-center justify-center">
                    <img
                      className="w-[42px] h-[42px]"
                      src={doctorsign}
                      alt="doctorsignlogo"
                    />
                  </div>
                </div>
                <div className="w-[136px] h-[111px]  flex flex-col items-center justify-center text-center gap-[12px]">
                  <p className="font-dinpro font-bold text-[15px] leading-[19.32px]">
                    Holistic Healing
                  </p>
                  <p className="font-dinpro font-[500px] text-[13px] leading-[16.74px] text-[#6D6B6B]">
                    Fix the root problem for long-lasting health.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[154px] min-h-[214px] border-2 rounded-lg  flex items-center justify-center">
              <div className="min-w-[136px] min-h-[180px]  flex flex-col items-center gap-[4px]">
                <div className="w-[63px] h-[59px]  flex items-center ">
                  <div className="w-[60px] h-[60px] bg-[#FEF6ED] rounded-full flex items-center justify-center">
                    <img
                      className="w-[42px] h-[42px]"
                      src={ayurvedacup}
                      alt="ayurvedacup"
                    />
                  </div>
                </div>
                <div className="w-[136px] h-[111px]  flex flex-col items-center justify-center text-center gap-[12px]">
                  <p className="font-dinpro font-bold text-[15px] leading-[19.32px]">
                    Natural Remedies
                  </p>
                  <p className="font-dinpro font-[500px] text-[13px] leading-[16.74px] text-[#6D6B6B]">
                    Using herbs and natural therapies for healing.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[154px] min-h-[214px] border-2 rounded-lg flex items-center justify-center">
              <div className="min-w-[136px] min-h-[180px] flex flex-col items-center gap-[4px]">
                <div className="w-[63px] h-[59px]  flex items-center ">
                  <div className="w-[60px] h-[60px] bg-[#EAF2EA] rounded-full flex items-center justify-center">
                    <img
                      className="w-[42px] h-[42px]"
                      src={strongmuscel}
                      alt="strongmuscel"
                    />
                  </div>
                </div>
                <div className="w-[136px] h-[111px] flex flex-col items-center justify-center text-center gap-[12px]">
                  <p className="font-dinpro font-bold text-[15px] leading-[19.32px]">
                    Boosting immunity
                  </p>
                  <p className="font-dinpro font-[500px] text-[13px] leading-[16.74px] text-[#6D6B6B]">
                    Stay strong and healthy for life, not just for today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block h-auto">
          <div className="flex items-center justify-center mt-16">
            <div className="w-[90%] md:w-[820px] text-center">
              <h1 className="font-dinpro font-bold text-2xl md:text-4xl text-[#3A643B] underline decoration-[#C3D0C4]">
                Discover Ayurveda's Magic With Us
              </h1>
              <p className="mx-auto font-dinpro font-normal text-sm md:text-base text-[#666666] mt-4 md:mt-6 max-w-[90%] md:max-w-[671px]">
                Ayurvedic treatment aims to balance your body and mind, bringing
                harmony and vitality. It's like a journey to better health using
                ancient wisdom, a totally effective approach for a better life.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between w-[90%] mx-auto mt-8 gap-8 md:gap-4">
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-4 justify-between">
                <div className="text-left">
                  <p className="font-dinpro font-bold text-lg">
                    Personalized Wellness
                  </p>
                  <p className="font-dinpro text-sm text-[#6D6B6B]">
                    Treatments made just for you based on your individual doshas
                    (body type).
                  </p>
                </div>
                <div className="w-[80px] h-[80px] bg-[#EAF2EA] rounded-full flex items-center justify-center">
                  <img
                    className="w-[65px] h-[55px]"
                    src={strongmuscel}
                    alt="strongmuscel"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4 justify-between">
                <div className="text-left">
                  <p className="font-dinpro font-bold text-lg">
                    Holistic Healing
                  </p>
                  <p className="font-dinpro text-sm text-[#6D6B6B]">
                    A complete approach to health, focusing on the mind, body,
                    and spirit.
                  </p>
                </div>
                <div className="w-[80px] h-[80px]  bg-[#EAF2EA] rounded-full flex items-center justify-center">
                  <img
                    className="w-[65px] h-[55px]"
                    src={strongmuscel}
                    alt="strongmuscel"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4 justify-between">
                <div className="text-left">
                  <p className="font-dinpro font-bold text-lg">
                    Holistic Healing
                  </p>
                  <p className="font-dinpro text-sm text-[#6D6B6B]">
                    A complete approach to health, focusing on the mind, body,
                    and spirit.
                  </p>
                </div>
                <div className="w-[80px] h-[80px] bg-[#EAF2EA] rounded-full flex items-center justify-center">
                  <img
                    className="w-[65px] h-[55px]"
                    src={strongmuscel}
                    alt="strongmuscel"
                  />
                </div>
              </div>
            </div>

            <div className="relative flex justify-center items-center">
              <img
                className="w-[80%] md:w-[550px]"
                src={artimage}
                alt="artimage"
              />
              <img
                className="absolute w-[70%] md:w-[485px]"
                src={yogagirl}
                alt="yogagirl"
              />
            </div>

            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-4">
                <div className="w-[80px] h-[80px] bg-[#EAF2EA] rounded-full flex items-center justify-center">
                  <img
                    className="w-[65px] h-[55px]"
                    src={strongmuscel}
                    alt="strongmuscel"
                  />
                </div>
                <div className="text-left">
                  <p className="font-dinpro font-bold text-lg">
                    Natural Therapies
                  </p>
                  <p className="font-dinpro text-sm text-[#6D6B6B]">
                    Experience therapies using natural and herbal remedies.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[80px] h-[80px] bg-[#EAF2EA] rounded-full flex items-center justify-center">
                  <img
                    className="w-[65px] h-[55px]"
                    src={strongmuscel}
                    alt="strongmuscel"
                  />
                </div>
                <div className="text-left">
                  <p className="font-dinpro font-bold text-lg">
                    Ayurvedic Diet
                  </p>
                  <p className="font-dinpro text-sm text-[#6D6B6B]">
                    Follow a diet that supports your unique Ayurvedic
                    constitution.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[80px] h-[80px] bg-[#EAF2EA] rounded-full flex items-center justify-center">
                  <img
                    className="w-[65px] h-[55px]"
                    src={strongmuscel}
                    alt="strongmuscel"
                  />
                </div>
                <div className="text-left">
                  <p className="font-dinpro font-bold text-lg">
                    Ayurvedic Diet
                  </p>
                  <p className="font-dinpro text-sm text-[#6D6B6B]">
                    Follow a diet that supports your unique Ayurvedic
                    constitution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Desktop25;
