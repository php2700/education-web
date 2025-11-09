"use client";

import React from "react";
import { Rocket, Sun, Pencil } from "lucide-react";
import backgroundImage from "../../../assets/work-bg.png";

export const Structure = () => {
  return (
    <>
      <div
        className="bg-[#F0F8FF] py-16 px-6 sm:px-10 lg:px-12 relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 py-12 ">
          {/* Main Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-semibold  uppercase mb-2">
              Test Structure
            </h1>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
              REGISTRATION DETAILS
            </h2>
          </div>

          {/* Description Paragraph */}
          <div className="mb-12">
            <p className="text-gray-700 text-base leading-relaxed  mx-auto">
              Students may take the ISEE at approved ERB member school test
              sites, Prometric locations, or ERB's New York City office. Note
              that Prometric sites offer online administration and are available
              only for students entering grades 5-12. Registration is available
              online, by mail, and by phone. ISEE test dates vary by year and
              location. The registration fee varies depending on the methods for
              registration and testing.
            </p>
          </div>

          <div className="text-center mt-10">
            <div className="text-center font-bold my-2">
              So why wait? To avail a Free Trial Class for Science Online
              Tutoring
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
