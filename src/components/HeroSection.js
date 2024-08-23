import React from "react";
import heroImage from "../assets/images/hero-image.png";
import eclipseImage from "../assets/images/eclipse.png";

const HeroSection = () => {
  return (
    <div className="relative bg-[#fef9f5] py-16 overflow-hidden">
      {/* Curved Background Shape */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 w-[200%] h-[400px] bg-[#fef9f5] rounded-t-[50%] z-0"></div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center relative z-10">
        {/* Text Section */}
        <div className="lg:w-1/2 px-6 lg:px-12 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Upskill from Anywhere with{" "}
            <span className="text-[#F97F4E]">Industry-Recognized</span> Learning
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Flexible, accredited courses to help you learn and advance from
            anywhere in the world.
          </p>
          <div className="mt-8 flex items-center justify-center lg:justify-start">
            <input
              type="text"
              placeholder="what will you be learning today?"
              className="px-4 py-2 border border-gray-300 rounded-l-md w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="px-6 py-2 bg-green-500 text-white rounded-r-md hover:bg-green-600">
              Explore
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center relative">
          <img
            src={heroImage}
            alt="Hero"
            className="relative z-20 max-w-full h-auto"
          />
          <img
            src={eclipseImage}
            alt="Eclipse"
            className="absolute top-0 lg:top-[60%] lg:right-[-5%] transform lg:-translate-y-1/2 lg:w-[300px] lg:h-[300px] "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
