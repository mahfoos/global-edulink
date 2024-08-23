import React from "react";
import { trustedByLogos } from "../data/trustedByData"; // Adjust the import path as needed

const TrustedBySection = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-lg text-gray-700 mb-6">
          We are Trusted by over 900+ companies and millions of learners around
          the world
        </h2>
        <div className="flex flex-wrap justify-center items-center space-x-8">
          {trustedByLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-12 grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBySection;
