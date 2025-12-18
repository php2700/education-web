// "use client";

// import React, { useEffect, useState } from "react";
// import { Rocket, Sun, Pencil } from "lucide-react";
// import backgroundImage from "../../../assets/work-bg.png";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import iseeImg from '../../../assets/isee.jpg'

// export const Structure = () => {
//   const navigate = useNavigate();
//   const [structureData, setStructureData] = useState([]);

//   const getStructureData = async () => {
//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_APP_URL}api/user/registration`
//       );
//       setStructureData(res?.data?.data);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           error?.message ||
//           "something went wrong",
//         { position: "top-right" }
//       );
//     }
//   };

//   useEffect(() => {
//     getStructureData();
//   }, []);
//   const handlecontact = () => {
//     navigate("/contact");
//   };
//   return (
//     <>
//       <div
//         className="bg-[#F0F8FF] py-16 px-6 sm:px-10 lg:px-12 relative"
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: "contain",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="container mx-auto px-6 py-12 ">
//           {/* Main Title */}
//           <div className="text-center mb-8">
//             <h1 className="text-4xl font-semibold  uppercase mb-2">
//               Test Structure
//             </h1>
// <div><img src={iseeImg} /></div>

//             <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
//               {structureData?.title}
//             </h2>
//           </div>

//           {/* Description Paragraph */}
//           <div className="mb-12">
//             <p className=" text-lg leading-relaxed  mx-auto">
//               {structureData?.description}
//             </p>
//           </div>

//           <div className="text-center mt-10">
//             <div className="font-bold text-lg my-2">
//               So why wait? To avail a Free Trial Class for Science Online
//               Tutoring
//             </div>

//             <div className="flex justify-center my-6">
//               <button
//                 onClick={handlecontact}
//                 className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
//               >
//                 Start Free Trial
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };


"use client";

import React, { useEffect, useState } from "react";
import backgroundImage from "../../../assets/work-bg.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import iseeImg from '../../../assets/isee.jpg';
import { toast } from "react-toastify";

// 1. Framer Motion Import
import { motion } from "framer-motion";

export const Structure = () => {
  const navigate = useNavigate();
  const [structureData, setStructureData] = useState([]);

  const getStructureData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/registration`
      );
      setStructureData(res?.data?.data);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error?.message ||
          "something went wrong",
        { position: "top-right" }
      );
    }
  };

  useEffect(() => {
    getStructureData();
  }, []);

  const handlecontact = () => {
    navigate("/contact");
  };

  // 🔥 Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      <div
        className="bg-[#F0F8FF] py-16 px-6 sm:px-10 lg:px-12 relative overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 py-12 relative z-10">
          
          {/* Main Title Animation */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-semibold uppercase mb-6 tracking-wide text-gray-800">
              Test Structure
            </h1>

            {/* 🔥 3D Floating Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative inline-block"
            >
              {/* Image Glow Effect */}
              <div className="absolute -inset-1 bg-blue-500 rounded-2xl blur-xl opacity-20 animate-pulse"></div>
              
              <motion.img 
                src={iseeImg} 
                alt="Test Structure"
                // Floating Animation
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.02 }} // Gentle Zoom on Hover
                className="relative z-10 rounded-2xl shadow-2xl border border-white/50 w-full max-w-4xl mx-auto"
              />
            </motion.div>

            <motion.h2 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              className="text-4xl md:text-5xl font-semibold text-gray-900 mt-12"
            >
              {structureData?.title}
            </motion.h2>
          </motion.div>

          {/* Description Paragraph with FadeUp */}
          <motion.div 
            className="mb-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed mx-auto text-center text-gray-700 max-w-4xl">
              {structureData?.description}
            </p>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="text-center mt-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="font-bold text-lg my-2 text-gray-800">
              So why wait? To avail a Free Trial Class for Science Online
              Tutoring
            </div>

            <div className="flex justify-center my-6">
              <motion.button
                onClick={handlecontact}
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(37, 99, 235, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};