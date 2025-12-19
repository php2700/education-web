// import React, { useEffect, useState } from "react";
// import {
//   Book,
//   Pencil,
//   CheckSquare,
//   Globe,
//   FileText,
//   Laptop,
// } from "lucide-react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// export const TestPage = () => {
//   const navigate = useNavigate();
//   const [measureData, setMeasureData] = useState([]);

//   const getMeasureData = async () => {
//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_APP_URL}api/user/about-isee-test`
//       );
//       setMeasureData(res?.data?.data);
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
//     getMeasureData();
//   }, []);

//   const handlecontact = () => {
//     navigate("/contact");
//   };
//   return (
//     <div className="bg-[#F0F8FF]">
//       <div className="container mx-auto">
//         <div className="text-3xl font-bold text-center">ISEE TEST PREP</div>
//         {measureData?.title?.slice(0, 1)?.map((ele) => (
//           <p className="text-lg mt-2 leading-relaxed ">{ele}</p>
//         ))}

//         <div className="text-center text-lg mt-4">
//           So why wait? To avail a Free Trial Class for ISEE Test Prep Online
//           Tutoring, &nbsp;
//           <span
//             onClick={() => navigate("/contact")}
//             className="mt-4  cursor-pointer  py-3 font-semibold text-lg underline text-blue-600  transition"
//           >
//             CLICK HERE
//           </span>
//         </div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
//           <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
//             ALL ABOUT ISEE TEST
//           </h1>
//         </div>

//         <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           {measureData?.title?.slice(1)?.map((ele) => (
//             <p className="text-lg mb-1 leading-relaxed ">{ele}</p>
//           ))}

//           {/* Purpose of the ISEE */}
//           <section className="my-4">
//             <h2 className="text-3xl font-semibold text-gray-900 mb-10 ">
//               Purpose of the ISEE
//             </h2>
//             <div className="grid md:grid-cols-3 gap-8">
//               {measureData?.purpose?.map((item, idx) => (
//                 <div
//                   key={idx}
//                   className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center   transform hover:scale-105 transition duration-300"
//                 >
//                   <div className="text-2xl text-left font-bold">{idx + 1}</div>
//                   <p className="text-gray-700 text-lg leading-relaxed">{item}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Test Structure and Levels */}
//           <section>
//             <h2 className="text-3xl font-semibold text-gray-900 mb-10">
//               Test structure and levels
//             </h2>
//             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {/* Four Levels */}
//               {measureData?.testStructure?.map((item) => (
//                 <div className="bg-white rounded-2xl shadow-md p-6 border border-blue-100">
//                   <h3 className="text-xl font-bold  mb-3">{item?.heading}:</h3>
//                   <p className="text-lg text-gray-700">{item?.description}</p>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </main>
//       </div>
//     </div>
//   );
// };


import React, { useEffect, useState } from "react";
import {
  Book,
  Pencil,
  CheckSquare,
  Globe,
  FileText,
  Laptop,
} from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// 1. Framer Motion Import
import { motion } from "framer-motion";

export const TestPage = () => {
  const navigate = useNavigate();
  const [measureData, setMeasureData] = useState([]);

  const getMeasureData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/about-isee-test`
      );
      setMeasureData(res?.data?.data);
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
    getMeasureData();
  }, []);

  const handlecontact = () => {
    navigate("/contact");
  };

  // 🔥 Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardHover3D = {
    rest: { scale: 1, y: 0, boxShadow: "0px 10px 15px -3px rgba(0, 0, 0, 0.1)" },
    hover: { 
      scale: 1.03, 
      y: -10, 
      boxShadow: "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 300 }
    }
  };

  return (
    <div className="bg-[#F0F8FF]">
      <div className="container mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center pt-6"
        >
          <motion.div variants={fadeInUp} className="text-3xl font-bold text-center">
            ISEE TEST PREP
          </motion.div>
          
          {measureData?.title?.slice(0, 1)?.map((ele, index) => (
            <motion.p key={index} variants={fadeInUp} className="text-lg mt-2 text-gray-600 leading-relaxed">
              {ele}
            </motion.p>
          ))}

          <motion.div variants={fadeInUp} className="text-center text-lg mt-4">
            So why wait? To avail a Free Trial Class for ISEE Test Prep Online
            Tutoring, &nbsp;
            <motion.span
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.1, color: "#2563EB" }} // Bounce effect
              whileTap={{ scale: 0.95 }}
              className="mt-4 cursor-pointer py-3 font-semibold text-lg underline text-blue-600 transition inline-block"
            >
              CLICK HERE
            </motion.span>
          </motion.div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-gray-900"
          >
            ALL ABOUT ISEE TEST
          </motion.h1>
        </div>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          
          {/* Intro Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {measureData?.title?.slice(1)?.map((ele, index) => (
              <motion.p key={index} variants={fadeInUp} className="text-lg mb-1 text-gray-600 leading-relaxed">
                {ele}
              </motion.p>
            ))}
          </motion.div>

          {/* Purpose of the ISEE */}
          <section className="my-4">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-semibold text-gray-900 mb-10"
            >
              Purpose of the ISEE
            </motion.h2>

            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {measureData?.purpose?.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp} // Entry Animation
                  initial="rest"
                  whileHover="hover" // 3D Hover Effect
                  animate="rest"
                  custom={idx}
                  className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
                  style={{
                    transformStyle: "preserve-3d", // For better 3D feel
                  }}
                >
                  <motion.div 
                    variants={cardHover3D} // Apply Hover Variant
                    className="w-full h-full flex flex-col items-center"
                  >
                    <div className="text-2xl text-left font-bold mb-2">{idx + 1}</div>
                    <p className="text-gray-700 text-lg leading-relaxed text-center">{item}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Test Structure and Levels */}
          <section className="mt-12 mb-10">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-semibold text-gray-900 mb-10"
            >
              Test structure and levels
            </motion.h2>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {/* Four Levels */}
              {measureData?.testStructure?.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    boxShadow: "0px 15px 30px rgba(37, 99, 235, 0.2)" // Blue tint shadow
                  }}
                  className="bg-white rounded-2xl shadow-md p-6 border border-blue-100 cursor-default"
                >
                  <h3 className="text-xl font-bold mb-3">{item?.heading}:</h3>
                  <p className="text-lg text-gray-600">{item?.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  );
};