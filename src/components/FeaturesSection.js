import React from "react";
import features from "../data/featuresData";

const FeaturesSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl lg:text-3xl font-bold text-gray-800 mb-12">
          Choose us for tailored transformation journeys that solve workforce
          challenges and deliver results.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="mx-auto mb-4 h-12"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <p className="text-black font-semibold">{feature.brand}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
