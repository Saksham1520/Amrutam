import React from "react";
import facebook from "../Images/facebook.png";
import insta from "../Images/insta.png";
import linkdln from "../Images/linkdln.png";
import twitter from "../Images/twitter.png";
import youtube from "../Images/youtube.png";
import pintrest from "../Images/pintrest.png";

function Desktop76() {
  const infoArr = [
    "About Us",
    "Terms and Conditions",
    "Privacy Policy",
    "Privacy Policy for Mobile Apps",
    "Shipping and Returns Policy",
    "International Delivery",
    "For Businesses, Hotels and Resorts",
  ];
  return (
    <div className="max-w-screen-2xl h-auto md:h-[800px] flex flex-col items-center justify-center bg-[#3A643B2E] container mx-auto px-4 py-8">
      <div className="w-full md:w-[600px] h-auto flex flex-col md:flex-row gap-[20px] md:gap-[40px] items-start justify-center">
        <div className="w-full md:w-[285px] h-auto flex flex-col gap-[15px]">
          <h1 className="font-dinpro text-[18px] leading-[23.18px] text-[#3A643B]">
            Get In Touch
          </h1>
          <div className="flex flex-col gap-[5px]">
            <p className="font-dinpro text-[16px] md:text-[18px] leading-[23.18px] text-[#3A643B]">
              support@amrutham.co.in
            </p>
            <p className="font-dinpro text-[16px] md:text-[18px] leading-[23.18px] text-[#3A643B]">
              Amrutam Pharmaceuticals Pvt Ltd., Chitragupt Ganj, Nai Sadak,
              Lashkar, Gwalior - 474001
            </p>
            <p className="font-dinpro text-[16px] md:text-[18px] leading-[23.18px] text-[#3A643B]">
              +91 9713171999
            </p>
            <div className="flex gap-[10px] flex-wrap">
              <img
                className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] bg-[#3A643B] rounded-full"
                src={facebook}
                alt="facebook"
              />
              <img
                className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] bg-[#3A643B] rounded-full"
                src={insta}
                alt="insta"
              />
              <img
                className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] bg-[#3A643B] rounded-full"
                src={youtube}
                alt="youtube"
              />
              <img
                className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] bg-[#3A643B] rounded-full"
                src={twitter}
                alt="twitter"
              />
              <img
                className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] bg-[#3A643B] rounded-full"
                src={linkdln}
                alt="linkdln"
              />
              <img
                className="w-[30px] md:w-[40px] h-[30px] md:h-[40px] bg-[#3A643B] rounded-full"
                src={pintrest}
                alt="pintrest"
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-[285px] h-auto flex flex-col gap-[15px]">
          <h1 className="font-dinpro text-[18px] leading-[23.18px] text-[#3A643B]">
            Information
          </h1>
          <div>
            {infoArr.map((item, index) => (
              <p
                key={index}
                className="font-dinprolight text-[14px] md:text-[18px] text-[#474747] leading-[27px]"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full md:w-[750px] flex flex-col items-center justify-center gap-[20px] mt-8 md:mt-12">
        <p className="font-dinpro text-[18px] md:text-[28px] leading-[23.18px] text-[#3A643B] text-center px-4">
          Subscribe to our Newsletter and join Amrutam Family today!
        </p>
        <div className="flex flex-col md:flex-row w-full md:w-[80%] items-center gap-4">
          <input
            className="p-4 rounded-[50px] w-full md:w-[70%] border border-gray-300"
            placeholder="Your Email Address"
            type="text"
          />
          <button className="p-4 bg-black text-white rounded-[50px] w-full md:w-auto">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Desktop76;
