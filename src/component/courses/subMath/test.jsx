// import React, { useEffect, useState } from "react";
// import {
//   BookOpen,
//   Users,
//   Award,
//   Calculator,
//   Clock,
//   FileText,
//   Phone,
//   PenTool,
// } from "lucide-react";
// import featureImg from "../../../assets/feature.png";
// import generalImg from "../../../assets/general.png";
// import scoringImg from "../../../assets/scoring.png";
// import testBgImg from "../../../assets/test-bg.png";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// export const TestStructure = () => {
//   const navigate = useNavigate();
//   const [mathData, setMathData] = useState([]);
//   const [mathDetailData, setMathDetailData] = useState([]);

//   useEffect(() => {
//     fetchAllData();
//   }, []);

//   const fetchAllData = async () => {
//     try {
//       const [mathRes, detailRes] = await Promise.all([
//         axios.get(`${import.meta.env.VITE_APP_URL}api/user/kangaroo-test`),
//         axios.get(`${import.meta.env.VITE_APP_URL}api/user/detail-kangaroo`),
//       ]);

//       setMathData(mathRes?.data?.data);
//       setMathDetailData(detailRes?.data?.data);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           error.message ||
//           "Something went wrong",
//         { position: "top-right" }
//       );
//     }
//   };

//   const handleContact = () => {
//     navigate("/contact");
//   };

//   return (
//     <div
//       className="relative bg-[#F0F8FF] py-16 px-4 sm:px-6 lg:px-8"
//       style={{
//         backgroundImage: `url(${testBgImg})`,
//         backgroundSize: "contain",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 ">
//         <section>
//           {/* Left: Text */}
//           <div>
//             <h2 className="text-2xl sm:text-3xl font-bold text-center my-2 text-gray-800">
//               MATH KANGAROO TEST PREP
//             </h2>
//             <p className="text-lg text-gray-500 leading-relaxed">
//               {mathData?.testPrepDescription}
//             </p>
//             <p className="text-xl text-center font-bold text-gray-700 leading-relaxed mt-4">
//               So why wait? To avail a Free Trial Class for Math Kangaroo Test
//               Prep Online Tutoring
//             </p>
//           </div>

//           <div className="text-center my-4">
//             <button
//               onClick={handleContact}
//               className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 "
//             >
//               Start Free Trial
//             </button>
//           </div>
//         </section>
//         <div className=" py-4">
//           <h1 className="text-3xl font-bold text-center">TEST STRUCTURE</h1>
//           {mathData?.testStructureDescription?.map((ele) => (
//             <p className="my-4  text-[18px] ">
//               {ele}
//             </p>
//           ))}
//         </div>

//         <main className=" py-8 space-y-12">
//           {mathDetailData?.map((ele, index) => (
//             <section key={index}>
//               <div className="grid md:grid-cols-2 gap-8">
//                 <div
//                   className={`${index % 2 !== 0 ? "lg:order-2" : "lg:order-1"}`}
//                 >
//                   <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
//                     {ele?.title}
//                   </h2>
//                   <ul className="space-y-4 text-lg text-gray-700">
//                     {ele?.description.map((item, idx) => (
//                       <li key={idx} className="flex gap-2">
//                         <span className="font-bold">{idx + 1}.</span>
//                         <span className="whitespace-pre-line">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 {/* IMAGE COLUMN */}
//                 <div
//                   className={`${index % 2 !== 0 ? "lg:order-1" : "lg:order-2"}`}
//                 >
//                   <img
//                     src={`${import.meta.env.VITE_APP_URL}${ele.image}`}
//                     alt="Student studying"
//                     className="w-full"
//                   />
//                 </div>
//               </div>
//             </section>
//           ))}
//         </main>
//         <div className="mt-2 text-[18px] font-semibold text-center ">
//           We have the best content and specialized tutors available for Math
//           Kangaroo.
//         </div>
//       </div>

//       <div className="text-center">
//         <h3 className="text-xl font-semibold my-2">
//           So why wait? To avail a Free Trial Class for AMC Test Prep Online
//           Tutoring
//         </h3>
//       </div>
//       <div className="text-center my-4">
//         <button
//           onClick={handleContact}
//           className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 "
//         >
//           Start Free Trial
//         </button>
//       </div>
//     </div>
//   );
// };


import React, { useEffect, useState } from "react";
import {
  BookOpen,
  Users,
  Award,
  Calculator,
  Clock,
  FileText,
  Phone,
  PenTool,
} from "lucide-react";
import featureImg from "../../../assets/feature.png";
import generalImg from "../../../assets/general.png";
import scoringImg from "../../../assets/scoring.png";
import testBgImg from "../../../assets/test-bg.png";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// 1. Framer Motion Import
import { motion } from "framer-motion";

export const TestStructure = () => {
  const navigate = useNavigate();
  const [mathData, setMathData] = useState([]);
  const [mathDetailData, setMathDetailData] = useState([]);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const [mathRes, detailRes] = await Promise.all([
        axios.get(`${import.meta.env.VITE_APP_URL}api/user/kangaroo-test`),
        axios.get(`${import.meta.env.VITE_APP_URL}api/user/detail-kangaroo`),
      ]);

      setMathData(mathRes?.data?.data);
      setMathDetailData(detailRes?.data?.data);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong",
        { position: "top-right" }
      );
    }
  };

  const handleContact = () => {
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

  return (
    <div
      className="relative bg-[#F0F8FF] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        backgroundImage: `url(${testBgImg})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 ">
        
        {/* Top Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Left: Text */}
          <div>
            <motion.h2 
              variants={fadeInUp} 
              className="text-2xl sm:text-3xl font-bold text-center my-2 text-gray-800"
            >
              MATH KANGAROO TEST PREP
            </motion.h2>
            <motion.p 
              variants={fadeInUp} 
              className="text-lg text-gray-500 leading-relaxed"
            >
              {mathData?.testPrepDescription}
            </motion.p>
            <motion.p 
              variants={fadeInUp} 
              className="text-xl text-center font-bold text-gray-700 leading-relaxed mt-4"
            >
              So why wait? To avail a Free Trial Class for Math Kangaroo Test
              Prep Online Tutoring
            </motion.p>
          </div>

          <motion.div 
            variants={fadeInUp} 
            className="text-center my-4"
          >
            <motion.button
              onClick={handleContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
            >
              Start Free Trial
            </motion.button>
          </motion.div>
        </motion.section>

        {/* Test Structure Section */}
        <motion.div 
          className="py-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp} className="text-3xl font-bold text-center">TEST STRUCTURE</motion.h1>
          {mathData?.testStructureDescription?.map((ele, index) => (
            <motion.p 
              key={index} 
              variants={fadeInUp} 
              className="my-4 text-[18px]"
            >
              {ele}
            </motion.p>
          ))}
        </motion.div>

        {/* Main Content Loop */}
        <main className="py-8 space-y-12">
          {mathDetailData?.map((ele, index) => (
            <motion.section 
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                
                {/* TEXT COLUMN */}
                <motion.div
                  className={`${index % 2 !== 0 ? "lg:order-2" : "lg:order-1"}`}
                  // Slide from Left or Right based on index
                  variants={{
                    hidden: { opacity: 0, x: index % 2 !== 0 ? 50 : -50 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                  }}
                >
                  <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                    {ele?.title}
                  </h2>
                  <ul className="space-y-4 text-lg text-gray-700">
                    {ele?.description.map((item, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="font-bold">{idx + 1}.</span>
                        <span className="whitespace-pre-line">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* IMAGE COLUMN (3D Floating Effect) */}
                <motion.div
                  className={`${index % 2 !== 0 ? "lg:order-1" : "lg:order-2"}`}
                  // Slide from Opposite side
                  variants={{
                    hidden: { opacity: 0, x: index % 2 !== 0 ? -50 : 50 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                  }}
                >
                  {/* Floating Animation Wrapper */}
                  <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.02, rotate: 1 }}
                  >
                    <img
                      src={`${import.meta.env.VITE_APP_URL}${ele.image}`}
                      alt="Student studying"
                      className="w-full rounded-xl shadow-lg"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.section>
          ))}
        </main>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-2 text-[18px] font-semibold text-center"
        >
          We have the best content and specialized tutors available for Math
          Kangaroo.
        </motion.div>
      </div>

      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold my-2">
          So why wait? To avail a Free Trial Class for AMC Test Prep Online
          Tutoring
        </h3>
      </motion.div>

      <motion.div 
        className="text-center my-4"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <motion.button
          onClick={handleContact}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
        >
          Start Free Trial
        </motion.button>
      </motion.div>
    </div>
  );
};