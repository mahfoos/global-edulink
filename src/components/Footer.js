import React from "react";
import {
  resourcesLinks,
  quickLinks,
  supportLinks,
  socialMediaIcons,
} from "../data/footerData"; // Adjust the import path as needed

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">GlobalEdulink</h3>
          <p className="text-gray-600 mb-4">
            Global Edulink offers accessible, high-quality online education for
            all, with flexible programs tailored to fit into daily life,
            empowering learners worldwide to achieve personal and professional
            goals.
          </p>
          <div className="flex space-x-4 mb-4">
            {socialMediaIcons.map((social) => (
              <a key={social.name} href={social.url}>
                <img src={social.icon} alt={social.name} className="h-8 w-8" />
              </a>
            ))}
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-full">
            Verify your certificate
          </button>
        </div>

        {/* Resources Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul>
            {resourcesLinks.map((link) => (
              <li key={link.name} className="mb-2">
                <a
                  href={link.url}
                  className="text-gray-600 hover:text-gray-800"
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
          <ul>
            {quickLinks.map((link) => (
              <li key={link.name} className="mb-2">
                <a
                  href={link.url}
                  className="text-gray-600 hover:text-gray-800"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>{" "}
          {/* Corrected the closing tag */}
          <ul>
            {supportLinks.map((link) => (
              <li key={link.name} className="mb-2">
                <a
                  href={link.url}
                  className="text-gray-600 hover:text-gray-800"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-300 mt-10 pt-6 text-center text-gray-600">
        <div className="mb-4">
          <select className="border border-gray-300 rounded px-3 py-2 mr-4">
            <option>English</option>
            <option>Español</option>
            <option>Français</option>
          </select>
          <button className="bg-black text-white px-4 py-2 rounded-full">
            Apply
          </button>
        </div>
        <p className="mb-4">
          Copyright © 2015 - 2024 - Global Edulink All rights reserved
        </p>
        <div className="flex justify-center space-x-4">
          <img src="/path-to-images/paypal.png" alt="PayPal" className="h-8" />
          <img src="/path-to-images/visa.png" alt="Visa" className="h-8" />
          <img
            src="/path-to-images/mastercard.png"
            alt="MasterCard"
            className="h-8"
          />
          <img
            src="/path-to-images/apple-pay.png"
            alt="Apple Pay"
            className="h-8"
          />
          <img
            src="/path-to-images/google-pay.png"
            alt="Google Pay"
            className="h-8"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
