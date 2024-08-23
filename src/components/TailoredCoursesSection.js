import React from "react";
import tailoredCourses from "../data/tailoredCoursesData";

const TailoredCoursesSection = () => {
  return (
    <div className="bg-[#fef9f5] py-16 relative overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl lg:text-3xl font-bold text-gray-800 mb-8">
          Our experts design tailored courses to solve workforce challenges and
          drive business success.
        </h2>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tailoredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg p-6 relative"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {course.title}
              </h3>
              <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                <span className="px-2 py-1 bg-gray-100 rounded">
                  {course.modules}
                </span>
                <span className="px-2 py-1 bg-gray-100 rounded">
                  {course.certificate}
                </span>
              </div>
              <div className="text-lg font-bold text-gray-900 mb-2">
                {course.price}
                {course.oldPrice && (
                  <span className="text-gray-400 line-through text-sm ml-2">
                    {course.oldPrice}
                  </span>
                )}
              </div>
              <a
                href="#"
                className="text-green-600 font-semibold hover:text-green-800"
              >
                View details →
              </a>
            </div>
          ))}
        </div>

        {/* Show More */}
        <div className="mt-12 text-center">
          <button className="px-6 py-2 border border-gray-700 text-gray-700 rounded hover:bg-gray-100">
            Show more →
          </button>
          <button className="ml-4 px-6 py-2 border border-gray-700 text-gray-700 rounded hover:bg-gray-100">
            View all
          </button>
        </div>
      </div>
    </div>
  );
};

export default TailoredCoursesSection;
