import React from "react";
import bubbleimage from "../Images/bubbleimage.png";
import Sheild from "../Images/Sheild.png";
import Doctor from "../Images/Doctor.png";
import prescription from "../Images/prescription.png";

function HeroSection() {
  const features = [
    {
      img: bubbleimage,
      title: "Convenient Online &\nIn-Clinic Consultations",
    },
    {
      img: Sheild,
      title: "Safe And Effective Treatment",
    },
    {
      img: Doctor,
      title: "Experienced Ayurvedic Practitioners",
    },
    {
      img: prescription,
      title: "Personalized Treatment Plans & Guidance",
    },
  ];
  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="h-[540px] bg-cover bg-mobilebg flex justify-center items-center md:hidden">
        <div className="w-full px-4 space-y-5">
          <p className="font-nexa text-[#FFF7E2] text-[16px] font-thin leading-[26px] underline decoration-transparent">
            Namaste, Welcome to Amrutam
          </p>
          <div className="space-y-4">
            <p className="font-dinpro text-white text-[24px] font-bold">
              Step into Holistic Healing with{" "}
              <span className="text-[#FFF7E2] underline">Ayurveda</span>
              <br /> Book Consultation with certified Experts.
            </p>
            <p className="font-dinpro text-[14px] text-[#C9C9C9]">
              Dive into the world of ayurveda and experience personalized health
              solutions and holistic guidance from trusted Ayurvedic doctors.
            </p>
          </div>
          <button className="bg-[#3A643B] text-white rounded-md py-3 px-6">
            BOOK AN APPOINTMENT
          </button>
        </div>
      </div>

      <div className="hidden md:flex w-full h-[640px] bg-customgradient bg-[#951D1C] relative">
        <div className="w-[55%] h-full bg-desktopbg bg-cover absolute right-0"></div>

        <div className="w-full max-w-[950px] p-8 md:p-16 space-y-6 relative z-10">
          <p className="font-nexa text-[#FFF7E2] text-[28px] font-light underline decoration-transparent">
            Namaste, Welcome to Amrutam
          </p>
          <div className="space-y-6">
            <p className="font-dinpro text-white text-[48px] font-bold leading-tight">
              Step into Holistic Healing with{" "}
              <span className="text-[#FFF7E2] underline">Ayurveda</span>
              <br /> Book Consultation with certified Experts.
            </p>
            <p className="font-dinpro text-[20px] text-[#C9C9C9] leading-relaxed">
              Dive into the world of ayurveda and experience personalized health
              solutions and holistic guidance from trusted Ayurvedic doctors
              anytime, anywhere.
            </p>
          </div>
          <button className="bg-[#3A643B] text-white rounded-md py-4 px-8 text-[20px]">
            BOOK AN APPOINTMENT
          </button>
        </div>
      </div>
      <div className="w-full max-w-[1440px] flex flex-wrap items-center justify-center gap-8 bg-[#FFF7E2] p-4">
        <div className="w-full max-w-[318px] flex items-center justify-center">
          <div className="w-full max-w-[283px] flex items-center gap-4">
            <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center">
              <img
                className="w-[40px] h-[40px]"
                src={bubbleimage}
                alt="bubbleimage"
              />
            </div>
            <p className="font-dinpro text-[18px] leading-[25.2px] text-[#3A643B] text-center">
              Convenient Online & In-Clinic Consultations
            </p>
          </div>
        </div>

        <div className="w-full max-w-[318px] flex items-center justify-center">
          <div className="w-full max-w-[290px] flex items-center gap-4">
            <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center">
              <img className="w-[40px] h-[40px]" src={Sheild} alt="Sheild" />
            </div>
            <p className="font-dinpro text-[18px] leading-[25.2px] text-[#3A643B] text-center">
              Safe And Effective Treatment
            </p>
          </div>
        </div>

        <div className="w-full max-w-[318px] flex items-center justify-center">
          <div className="w-full max-w-[283px] flex items-center gap-4">
            <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center">
              <img className="w-[40px] h-[40px]" src={Doctor} alt="Doctor" />
            </div>
            <p className="font-dinpro text-[18px] leading-[25.2px] text-[#3A643B] text-center">
              Experienced Ayurvedic Practitioners
            </p>
          </div>
        </div>

        <div className="w-full max-w-[318px] flex items-center justify-center">
          <div className="w-full max-w-[283px] flex items-center gap-4">
            <div className="w-[70px] h-[70px] bg-white rounded-full flex items-center justify-center">
              <img
                className="w-[40px] h-[40px]"
                src={prescription}
                alt="prescription"
              />
            </div>
            <p className="font-dinpro text-[18px] leading-[25.2px] text-[#3A643B] text-center">
              Personalized Treatment Plans & Guidance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
