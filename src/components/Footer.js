import React from "react";
import {
  resourcesLinks,
  quickLinks,
  supportLinks,
  socialMediaIcons,
  paymentIcons,
  logo,
  awards,
} from "../data/footerData";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* About Section */}
        <div>
          <img src={logo.src} alt={logo.alt} className="h-10 mb-4" />
          <p className="text-gray-600 mb-4">
            Global Edulink offers accessible, high-quality online education for
            all, with flexible programs tailored to fit into daily life,
            empowering learners worldwide to achieve personal and professional
            goals.
          </p>
          <div className="flex space-x-4 mb-4">
            {socialMediaIcons.map((social) => (
              <a key={social.name} href={social.url}>
                <img
                  src={social.icon}
                  alt={social.name}
                  className="h-8 w-8 rounded-full hover:opacity-75 transition duration-300"
                />
              </a>
            ))}
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300">
            Verify your certificate
          </button>
        </div>

        {/* Resources Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul className="text-gray-600">
            {resourcesLinks.map((link) => (
              <li key={link.name} className="mb-2">
                <a
                  href={link.url}
                  className="hover:text-gray-800 transition duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="text-gray-600">
            {quickLinks.map((link) => (
              <li key={link.name} className="mb-2">
                <a
                  href={link.url}
                  className="hover:text-gray-800 transition duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="text-gray-600">
            {supportLinks.map((link) => (
              <li key={link.name} className="mb-2">
                <a
                  href={link.url}
                  className="hover:text-gray-800 transition duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <p className="text-gray-600 mb-2">+4420–3409–7966</p>
          <p className="text-gray-600 mb-4">
            CityPoint, 1 Ropemaker Street, London, EC2Y 9HU
          </p>
        </div>
      </div>

      {/* Awards and Language Selection */}
      <div className="container mx-auto mt-10 flex flex-wrap justify-between items-center">
        <div className="flex justify-start items-center space-x-4">
          <select className="border border-gray-300 rounded px-3 py-2">
            <option>English</option>
            <option>Español</option>
            <option>Français</option>
          </select>
          <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300">
            Apply
          </button>
        </div>
        <div className="flex justify-end space-x-8 mt-6 mb-6">
          {awards.map((award) => (
            <img
              key={award.name}
              src={award.icon}
              alt={award.name}
              className="h-12"
            />
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container mx-auto mt-10 flex flex-wrap justify-between items-center">
        <p className="mb-4">
          Copyright © 2015 - 2024 - Global Edulink All rights reserved
        </p>
        <div className="flex justify-center space-x-4">
          {paymentIcons.map((payment) => (
            <img
              key={payment.name}
              src={payment.icon}
              alt={payment.name}
              className="h-8"
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
