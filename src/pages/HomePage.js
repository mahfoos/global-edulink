import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import TrustedBySection from "../components/TrustedBySection";
import CoursesSection from "../components/CoursesSection";
import FeaturesSection from "../components/FeaturesSection";
import CategoriesSection from "../components/CategoriesSection";
import TailoredCoursesSection from "../components/TailoredCoursesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TrustedBySection />
      <CoursesSection />
      <FeaturesSection />
      <CategoriesSection />
      <TailoredCoursesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default HomePage;
