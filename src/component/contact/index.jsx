import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="bg-[#F0F8FF] min-h-screen py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE — Info */}
        <div>
          <h3 className="text-blue-600 font-semibold tracking-widest mb-2">
            CONTACT US
          </h3>

          <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0E1D3E] leading-tight">
            Get In Touch With Us
          </h1>

          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Have questions about our tutoring services, demo sessions, or
            pricing? We’d love to help you. Fill out the form or reach us
            directly through phone or email.
          </p>

          {/* Contact Details */}
          <div className="mt-10 space-y-6">
            <div className="flex items-center gap-4">
              <FaPhone className="text-blue-600 text-2xl" />
              <p className="text-lg text-gray-700 font-medium">
                +91-886-029-6060
              </p>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-600 text-2xl" />
              <p className="text-lg text-gray-700 font-medium">
                info@mygges.com
              </p>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              <p className="text-lg text-gray-700 font-medium">
                Global Growing Education Services (GGES)
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — Form */}
        <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
          <form className="space-y-6">
            <div>
              <label classname="block text-gray-700 font-medium">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                Phone Number
              </label>
              <input
                type="text"
                placeholder="Your phone number"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
