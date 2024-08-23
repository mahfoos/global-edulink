import React from "react";
import {
  topNotification,
  mainNavLinks,
  authButtons,
  logo,
} from "../data/navbarData"; // Adjust the import path as needed

const Navbar = () => {
  return (
    <div>
      {/* Top Notification Bar */}
      <div className="bg-yellow-200 py-2 flex justify-between items-center px-4">
        <div className="text-sm text-gray-800">
          <span className="text-red-600 font-semibold">
            {topNotification.message.split("|")[0]}
          </span>{" "}
          | {topNotification.message.split("|")[1]}
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-black text-white text-sm px-4 py-1 rounded-full">
            {topNotification.offer}
          </button>
          <button className="text-black font-bold text-lg">
            {topNotification.close}
          </button>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center py-3 px-6">
          <div className="flex items-center space-x-6">
            <img src={logo.src} alt={logo.alt} className="h-8" />
            <nav className="flex space-x-6 text-gray-800">
              {mainNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="hover:text-gray-600"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={authButtons.login.url}
              className="text-gray-800 hover:text-gray-600"
            >
              {authButtons.login.name}
            </a>
            <button className="border border-gray-800 text-gray-800 px-4 py-1 rounded-full hover:bg-gray-100">
              {authButtons.register}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
