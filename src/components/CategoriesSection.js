import React from "react";
import categories from "../data/categoriesData"; // Adjust the import path as needed

const CategoriesSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
          Find Your Perfect Fit: Dive into Our Diverse Categories
        </h2>
        <p className="text-gray-600 mb-8">
          Explore a variety of categories covering diverse topics, empowering
          you to expand your skills and knowledge base effectively.
        </p>

        {/* Categories Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={category.icon}
                alt={category.title}
                className="mx-auto mb-4 h-12"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <div className="flex justify-center items-center space-x-4">
          <button className="text-black text-2xl font-bold px-4 py-2 rounded-full hover:bg-gray-200">
            &larr;
          </button>
          <div className="h-2 w-40 bg-gray-300 rounded-full">
            <div
              className="h-2 bg-black rounded-full"
              style={{ width: "20%" }}
            ></div>{" "}
            {/* Adjust width for active slide */}
          </div>
          <button className="text-black text-2xl font-bold px-4 py-2 rounded-full hover:bg-gray-200">
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;
