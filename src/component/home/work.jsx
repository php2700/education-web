// import React, { useEffect, useState } from "react";
// import arrow from "../../assets/work-arrow.png";
// import backgroundImage from "../../assets/work-bg.png";
// import subject from "../../assets/subject.png";
// import rightImg from "../../assets/right-tutorial.png";
// import session from "../../assets/session.png";
// import progress from "../../assets/progress.png";
// import { useLocation } from "react-router-dom";


// const steps = [
//   { id: 1, img: subject, text: "Choose a subject" },
//   { id: 2, img: rightImg, text: "Match with the right tutor" },
//   { id: 3, img: session, text: "Learn through interactive online sessions" },
//   { id: 4, img: progress, text: "Track progress" },
// ];

// const HowItWorks = () => {

//   return (
//     <section
//     id='howitwork'
//       className="relative bg-[#F0F8FF] py-20"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "contain",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-4" >
//         {/* Heading */}
//         <h2  className="font-[Poppins] font-semibold text-[48px] leading-[40px] tracking-[0px] text-[#000000] text-center mb-3">
//           How It Works
//         </h2>
//         <p className=" text-center text-[#4B5563] mb-16 max-w-3xl text-lg mx-auto">
//           Getting started with your personalized learning journey is simple.
//           Follow these four easy steps.
//         </p>

//         {/* Steps Container */}
//         <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start">
//           {/* Connecting Line (Desktop Only) */}
//           <div className="hidden md:block absolute top-16 left-0 w-full h-[2px] bg-gray-300 -z-10"></div>

//          {steps.map((step, index) => (
//   <div
//     key={step.id}
//     // CHANGE 1: 'md:items-start' aur 'md:text-left' hata diya.
//     // Ab mobile aur desktop dono par 'items-center' aur 'text-center' rahega.
//     className="relative flex flex-col items-center text-center w-full md:w-1/4 mb-16 lg:mb-12 md:mb-0 px-2"
//   >
//     {/* Step Number */}
//     {/* CHANGE 2: Number ko bilkul center (left-1/2) kar diya */}
//     <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white border-2 border-blue-600 text-[#000000] font-bold rounded-full w-9 h-9 flex items-center justify-center text-sm shadow-md z-10">
//       {step.id}
//     </div>

//     {/* Icon Container */}
//     {/* CHANGE 3: 'relative' add kiya taaki arrow ko absolute kar sakein */}
//     <div className="flex items-center justify-center relative w-full mb-1 lg:mb-4">
//       <img
//         src={step.img}
//         alt={step.text}
//         className="object-contain z-10"
//       />

//       {/* Arrow */}
//       {/* CHANGE 4: Arrow ko 'absolute' kar diya. Ab ye icon ko dhakka nahi maarega */}
//       {index < steps.length - 1 && (
//         <img
//           src={arrow}
//           alt="arrow"
//           // Arrow ko right side me fix kar diya
//           className="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2 z-0"
//         />
//       )}
//     </div>

//     {/* Text */}
//     {/* CHANGE 5: Text ko center align rakha aur thoda margin (mt-2) diya */}
//     <p className="text-black font-semibold text-lg md:text-xl leading-tight text-center mt-2 px-1">
//       {step.text}
//     </p>
//   </div>
// ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;


import React, { useEffect, useState } from "react";
import arrow from "../../assets/work-arrow.png";
import backgroundImage from "../../assets/work-bg.png";
import subject from "../../assets/subject.png";
import rightImg from "../../assets/right-tutorial.png";
import session from "../../assets/session.png";
import progress from "../../assets/progress.png";
import { useLocation } from "react-router-dom";

// 1. Framer Motion Import
import { motion } from "framer-motion";

const steps = [
  { id: 1, img: subject, text: "Choose a subject" },
  { id: 2, img: rightImg, text: "Match with the right tutor" },
  { id: 3, img: session, text: "Learn through interactive online sessions" },
  { id: 4, img: progress, text: "Track progress" },
];

const HowItWorks = () => {

  // 🔥 Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Ek ke baad ek aayenge (0.3s delay)
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Niche se shuru hoga
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 12 } // Bounce effect
    },
  };

  return (
    <section
      id='howitwork'
      className="relative bg-[#F0F8FF] py-20 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-[Poppins] font-semibold text-[48px] leading-[40px] tracking-[0px] text-[#000000] text-center mb-3">
            How It Works
          </h2>
          <p className="text-center text-[#4B5563] mb-16 max-w-3xl text-lg mx-auto">
            Getting started with your personalized learning journey is simple.
            Follow these four easy steps.
          </p>
        </motion.div>

        {/* Steps Container with Staggered Animation */}
        <motion.div 
          className="relative flex flex-col md:flex-row justify-between items-center md:items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          {/* ❌ Connecting Line Removed Here */}

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              variants={itemVariants} // Child animation trigger
              className="relative flex flex-col items-center text-center w-full md:w-1/4 mb-16 lg:mb-12 md:mb-0 px-2"
            >
              {/* Step Number with Pop Animation */}
              <motion.div 
                className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white border-2 border-blue-600 text-[#000000] font-bold rounded-full w-9 h-9 flex items-center justify-center text-sm shadow-md z-10"
                whileHover={{ scale: 1.2, backgroundColor: "#EBF8FF" }}
              >
                {step.id}
              </motion.div>

              {/* Icon Container with Hover Lift */}
              <motion.div 
                className="flex items-center justify-center relative w-full mb-1 lg:mb-4"
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={step.img}
                  alt={step.text}
                  className="object-contain z-10 drop-shadow-md"
                />

                {/* Arrow */}
                {index < steps.length - 1 && (
                  <img
                    src={arrow}
                    alt="arrow"
                    className="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2 z-0"
                  />
                )}
              </motion.div>

              {/* Text */}
              <p className="text-black font-semibold text-lg md:text-xl leading-tight text-center mt-2 px-1">
                {step.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;