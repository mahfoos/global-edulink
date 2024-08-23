import React from "react";
// import heroImage from "/path-to-your-image/hero-image.png"; // Update this with the correct path to your image

const HeroSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 px-6 lg:px-12 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Upskill from Anywhere with{" "}
            <span className="text-orange-500">Industry-Recognized</span>{" "}
            Learning
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
            // src={heroImage}
            alt="Hero"
            className="relative z-10 max-w-full h-auto"
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col space-y-4 z-20">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-sm font-semibold">Expert Instructors</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-sm font-semibold">Accredited Programs</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-sm font-semibold">Interactive Learning</p>
            </div>
          </div>
          <div className="absolute bg-orange-500 w-64 h-64 rounded-full opacity-50 -right-12 -bottom-12 z-0"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
