import React from "react";
import testimonials from "../data/testimonialsData";
import starImage from "../assets/images/star.png";

const TestimonialsSection = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-2xl lg:text-3xl font-bold mb-8">
          Client Testimonials
        </h2>
        <p className="mb-12">
          Hear Heart-warming Stories from Our Valued Customers Sharing Their
          Experience and Success with Our Services
        </p>

        {/* Testimonials Slider */}
        <div className="flex overflow-x-auto snap-x">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="snap-center bg-white text-gray-800 p-6 rounded-lg shadow-lg w-80 mx-2"
              style={{ minWidth: "300px" }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              <p className="mb-4">“{testimonial.testimonial}”</p>
              <div className="flex items-center">
                <img src={starImage} alt="Trustpilot" className="h-6 mr-2" />
              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <button className="text-white text-2xl font-bold px-4 py-2 rounded-full hover:bg-gray-700">
            &larr;
          </button>
          <div className="h-2 w-40 bg-gray-700 rounded-full">
            <div
              className="h-2 bg-white rounded-full"
              style={{ width: "20%" }}
            ></div>{" "}
          </div>
          <button className="text-white text-2xl font-bold px-4 py-2 rounded-full hover:bg-gray-700">
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
