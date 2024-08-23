import React from "react";
import courses from "../data/coursesData";

const CoursesSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl lg:text-3xl font-bold text-gray-800 mb-8">
          Master Your Career Growth with Our Top-Rated, Expert-Led Courses
        </h2>

        {/* Categories */}
        <div className="flex justify-center space-x-4 mb-8">
          <button className="px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-300">
            All courses
          </button>
          <button className="px-4 py-2 bg-green-100 rounded-full text-sm text-green-700 hover:bg-green-200">
            Project Management
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-300">
            Business Management
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-300">
            Employability Skills
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-300">
            Life Learning
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-700 hover:bg-gray-300">
            HR & Leadership
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
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
              <div className="text-sm text-gray-600 mb-4">
                <p>{course.modules}</p>
                <p>{course.certificate}</p>
              </div>
              <div className="text-lg font-bold text-gray-900 mb-2">
                {course.price}
              </div>
              <div className="text-sm text-gray-600 mb-4">
                {course.fullPrice}
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

export default CoursesSection;
