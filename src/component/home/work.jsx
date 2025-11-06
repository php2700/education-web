import React from "react";
import arrow from "../../assets/work-arrow.png";
import backgroundImage from "../../assets/work-bg.png";

const HowItWorks = () => {
  return (
    <section
      className="bg-blue-50 py-12 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          How It Works
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Getting started with your personalized learning
          journey is simple. Follow these four easy steps.
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 relative">
          {/* Step 1 */}
          <div
            className="flex flex-col items-center text-center relative"
            style={{ position: "relative", marginTop: "1.5rem" }}
          >
            <span className="absolute top-0 left-0 bg-blue-600 text-white font-bold text-xs md:text-sm rounded px-2 py-1 -mt-6 z-20">
              1
            </span>
            <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-4 shadow-md">
              <img
                src="path/to/book-icon.png"
                alt="book"
                className="w-10 h-10"
              /> {/* Replace with your book icon */}
            </div>
            <span className="text-gray-900 font-medium">Choose a subject</span>
          </div>
          <img
            src={arrow}
            alt="arrow"
            className="w-16 md:w-20 mx-auto transform rotate-90 md:rotate-0"
          />
          {/* Step 2 */}
          <div
            className="flex flex-col items-center text-center relative"
            style={{ position: "relative", marginTop: "1.5rem" }}
          >
            <span className="absolute top-0 left-0 bg-blue-600 text-white font-bold text-xs md:text-sm rounded px-2 py-1 -mt-6 z-20">
              2
            </span>
            <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-4 shadow-md">
              <img
                src="path/to/tutor-icon.png"
                alt="tutor"
                className="w-10 h-10"
              /> {/* Replace with your tutor icon */}
            </div>
            <span className="text-gray-900 font-medium">Match with the right tutor</span>
          </div>
          <img
            src={arrow}
            alt="arrow"
            className="w-16 md:w-20 mx-auto transform rotate-90 md:rotate-0"
          />
          {/* Step 3 */}
          <div
            className="flex flex-col items-center text-center relative"
            style={{ position: "relative", marginTop: "1.5rem" }}
          >
            <span className="absolute top-0 left-0 bg-blue-600 text-white font-bold text-xs md:text-sm rounded px-2 py-1 -mt-6 z-20">
              3
            </span>
            <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-4 shadow-md">
              <img
                src="path/to/video-icon.png"
                alt="video"
                className="w-10 h-10"
              /> {/* Replace with your video icon */}
            </div>
            <span className="text-gray-900 font-medium">
              Learn through interactive online sessions
            </span>
          </div>
          <img
            src={arrow}
            alt="arrow"
            className="w-16 md:w-20 mx-auto transform rotate-90 md:rotate-0"
          />
          {/* Step 4 */}
          <div
            className="flex flex-col items-center text-center relative"
            style={{ position: "relative", marginTop: "1.5rem" }}
          >
            <span className="absolute top-0 left-0 bg-blue-600 text-white font-bold text-xs md:text-sm rounded px-2 py-1 -mt-6 z-20">
              4
            </span>
            <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-4 shadow-md">
              <img
                src="path/to/progress-icon.png"
                alt="progress"
                className="w-10 h-10"
              /> {/* Replace with your progress icon */}
            </div>
            <span className="text-gray-900 font-medium">Track progress</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;