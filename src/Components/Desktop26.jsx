import React from "react";
import mobiledesktop from "../Images/mobiledesktop.png";
import googleplaystore from "../Images/googleplaystore.png";
import applestore from "../Images/applestore.png";
import mobileimage2 from "../Images/mobileimage2.png";

function Desktop26() {
  return (
    <div className="max-w-screen-2xl h-auto md:h-[710px] bg-[#FFF7E2] flex flex-col md:flex-row gap-[40px] items-center justify-center container mx-auto px-4 py-8">
      <div className="w-full md:w-[40%] h-auto flex flex-col gap-[30px] text-center md:text-left">
        <div className="w-full md:w-[574px] h-auto flex flex-col gap-[25px]">
          <h1 className="font-dinpro text-[32px] md:text-[48px] leading-[40px] md:leading-[67.2px] text-[#3A643B]">
            Amrutham Home App
          </h1>
          <p className="font-dinprolight text-[14px] md:text-[16px] leading-[20px] md:leading-[20.61px] text-[#676767]">
            The Amrutam Home App is your one-stop app for all things Ayurveda!
            Apart from mimicking the significant characteristics of our website,
            this app offers a wide range of additional features.
          </p>
          <p className="font-dinprolight font-semibold text-[20px] md:text-[32px] leading-[30px] md:leading-[44.8px]">
            Get a diet & lifestyle consultation with ayurvedic experts across
            the globe
          </p>
        </div>

        <div className="block md:hidden w-full h-auto  justify-center">
          <img
            className="w-[300px] h-auto"
            src={mobileimage2}
            alt="mobileimage"
          />
        </div>

        <div className="w-full md:w-[559px] h-auto flex flex-col gap-[20px]">
          <h1 className="font-dinpro text-[24px] md:text-[36px] leading-[30px] md:leading-[50.4px] font-bold">
            Get The App Now
          </h1>
          <div className="flex justify-center md:justify-start gap-4">
            <img
              className="w-[120px] md:w-auto"
              src={googleplaystore}
              alt="googleplaystore"
            />
            <img
              className="w-[120px] md:w-auto"
              src={applestore}
              alt="applestore"
            />
          </div>
        </div>
      </div>

      <div className="hidden md:block w-[45%] h-auto">
        <img
          className="w-[734px] h-[565px]"
          src={mobiledesktop}
          alt="mobileimage"
        />
      </div>
    </div>
  );
}

export default Desktop26;
