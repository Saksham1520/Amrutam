import React, { useState } from "react";
import Desktop21Card from "./Desktop21Card";

function Desktop21() {
  const cards = [
    {
      number: "1",
      heading: "Make Apponitment",
      description:
        "You must make an appointment in advance, to choose the service and date.",
    },
    {
      number: "2",
      heading: "Consultations",
      description:
        "You must make an appointment in advance, to choose the service and date.",
    },
    {
      number: "3",
      heading: "Treatment Planning",
      description:
        "The Ayurvedic practitioner creates a personalized treatment plan for you.",
    },
    {
      number: "4",
      heading: "Maintenance",
      description:
        "These visits allow for assessment of progress,to the treatment.",
    },
    {
      number: "5",
      heading: "Make Apponitment",
      description:
        "You must make an appointment in advance, to choose the service and date.",
    },
    {
      number: "6",
      heading: "Make Apponitment",
      description:
        "You must make an appointment in advance, to choose the service and date.",
    },
  ];

  //   const prevSlide = () => {
  //     setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  //   };

  //   const nextSlide = () => {
  //     setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  //   };

  return (
    <div className="max-w-screen-2xl h-[590px] flex flex-col gap-[40px] items-center justify-center container mx-auto ">
      <div className="w-full max-w-screen-xl h-auto flex flex-col items-center justify-center px-4 md:px-8">
        <div className="w-full max-w-[525px] h-auto">
          <h1 className="font-dinpro text-[32px] sm:text-[48px] leading-[40px] sm:leading-[61.82px] text-[#3A643B] text-center">
            Our ayurvedic approach
          </h1>
        </div>
        <div className="w-full max-w-[772px] h-auto">
          <p className="font-dinprolight text-[16px] sm:text-[20px] leading-[24px] sm:leading-[25.67px] text-[#323232] text-center">
            At Amrutam we follow a unique and personalized approach to healing.
            Our expert practitioners begin each treatment process by conducting
            a thorough analysis of the patient’s body type, medical history, and
            current health conditions.
          </p>
        </div>
      </div>
      <div className="w-full max-w-[1255px] h-[315px] flex overflow-x-auto overflow-y-hidden gap-6">
        {cards.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full max-w-[328px] md:max-w-[295px] h-[315px]"
          >
            <Desktop21Card items={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Desktop21;
