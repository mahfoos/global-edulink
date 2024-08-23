import React, { useState } from "react";
import {
  topNotification,
  mainNavLinks,
  authButtons,
  logo,
} from "../data/navbarData";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Top Notification Bar */}
      <div className="bg-yellow-200 py-2 flex justify-center items-center px-4 space-x-20">
        <div className="text-sm text-gray-800 flex items-center">
          <span className="text-red-600 font-semibold mr-2">
            {topNotification.message.split("|")[0]}
          </span>
          <span className="mr-2">|</span>
          <span>{topNotification.message.split("|")[1]}</span>
        </div>
        <div className="flex space-x-20">
          <button className="bg-black text-white text-sm px-4 py-1 rounded hover:bg-gray-800 transition duration-300">
            {topNotification.offer}
          </button>
          <button className="text-black font-bold text-lg">
            {topNotification.close}
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center space-x-8">
            <img src={logo.src} alt={logo.alt} className="h-8" />
            <nav className="hidden lg:flex space-x-6 text-gray-800 mx-auto">
              <a
                href="#"
                className="hover:text-gray-600 transition duration-300"
              >
                Explore Courses
              </a>
            </nav>
          </div>

          <div className="hidden lg:flex items-center space-x-4 ml-auto">
            <nav className="hidden lg:flex space-x-6 text-gray-800 mx-auto">
              {mainNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="hover:text-gray-600 transition duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <a
              href={authButtons.login.url}
              className="text-gray-800 hover:text-gray-600 transition duration-300"
            >
              {authButtons.login.name} ➔
            </a>
            <button className="border border-gray-800 text-gray-800 px-4 py-2 rounded hover:bg-gray-100 transition duration-300">
              {authButtons.register}
            </button>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white shadow-sm">
            <nav className="flex flex-col space-y-2 px-6 py-4 text-gray-800">
              {mainNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="hover:text-gray-600 transition duration-300"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={authButtons.login.url}
                className="text-gray-800 hover:text-gray-600 transition duration-300"
              >
                {authButtons.login.name} ➔
              </a>
              <button className="border border-gray-800 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-100 transition duration-300">
                {authButtons.register}
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
