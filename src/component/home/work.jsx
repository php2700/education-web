import React from "react";
import arrow from "../../assets/work-arrow.png";
import backgroundImage from "../../assets/work-bg.png";
import subject from "../../assets/subject.png";
import rightImg from "../../assets/right-tutorial.png";
import session from "../../assets/session.png";
import progress from "../../assets/progress.png";

const steps = [
  { id: 1, img: subject, text: "Choose a subject" },
  { id: 2, img: rightImg, text: "Match with the right tutor" },
  { id: 3, img: session, text: "Learn through interactive online sessions" },
  { id: 4, img: progress, text: "Track progress" },
];

const HowItWorks = () => {
  return (
    <section
      className="relative bg-[#F0F8FF] py-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="font-[Poppins] font-semibold text-[48px] leading-[40px] tracking-[0px] text-[#000000] text-center mb-3">
          How It Works
        </h2>
        <p className=" text-center text-[#4B5563] mb-16 max-w-2xl mx-auto">
          Getting started with your personalized learning journey is simple.
          Follow these four easy steps.
        </p>

        {/* Steps Container */}
        <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-16 left-0 w-full h-[2px] bg-gray-300 -z-10"></div>

          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/4 mb-12 md:mb-0 px-4"
            >
              {/* Step Number */}
              <div className="absolute -top-8 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 bg-white border-2 border-blue-600 text-[#000000] font-bold rounded-full w-9 h-9 flex items-center justify-center text-sm shadow-md">
                {step.id}
              </div>

              {/* Icon */}
              <div className="flex items-center justify-center md:justify-start mb-5">
                <img
                  src={step.img}
                  alt={step.text}
                  className="object-contain"
                />
                {/* Arrow (only on desktop except last step) */}
                {index < steps.length - 1 && (
                  <img src={arrow} alt="arrow" className="hidden md:block " />
                )}
              </div>

              {/* Text */}
              {/* <p className="text-gray-900 font-semibold text-base md:text-lg leading-snug max-w-[180px] md:max-w-none mx-auto md:mx-0">
                {step.text}
              </p> */}
                         <p className="text-black font-semibold text-lg md:text-xl leading-tight text-center">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
