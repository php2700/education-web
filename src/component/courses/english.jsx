// import { BiBookContent, BiTargetLock } from "react-icons/bi";
// import {
//   FaBookOpen,
//   FaChalkboardTeacher,
//   FaLanguage,
//   FaPenNib,
// } from "react-icons/fa";
// import studentImg from "../../assets/student.png";
// import { AboutInfoPage } from "./subEng/about";
// import { TestPage } from "./subEng/test";
// import { Measure } from "./subEng/measure";
// import { Structure } from "./subEng/structure";
// import literature from "../../assets/literature.png";
// import pen from "../../assets/pen.png";
// import setting from "../../assets/settings.png";
// import resume from "../../assets/resume.png";
// import certificate from "../../assets/certificate.png";
// import language from "../../assets/language.png";
// import speak from "../../assets/speak.png";
// import backgroundImage from "../../assets/work-bg.png";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// export const EnglishCourse = () => {
//   const navigate = useNavigate();
//   const [aboutCoreData, setAboutCoreData] = useState([]);
//   const [aboutCoreDetailData, setAboutCoreDetailData] = useState([]);
//   const [languageData, setLanguageData] = useState();

//   const getLanguageData = async () => {
//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_APP_URL}api/user/language`
//       );
//       setLanguageData(res?.data?.data);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           error?.message ||
//           "something went wrong",
//         { position: "top-right" }
//       );
//     }
//   };

//   const getAbouteCoreData = async () => {
//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_APP_URL}api/user/about-core-ela`
//       );
//       setAboutCoreData(res?.data?.data);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           error?.message ||
//           "something went wrong",
//         { position: "top-right" }
//       );
//     }
//   };

//   const getAboutCoreDetail = async () => {
//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_APP_URL}api/user/core-ela-detail`
//       );
//       setAboutCoreDetailData(res?.data?.data);
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
//     getLanguageData();
//     getAbouteCoreData();
//     getAboutCoreDetail();
//   }, []);

//   const handlecontact = () => {
//     navigate("/contact");
//   };

//   return (
//     <section>
//       <div
//         id="common"
//         className="bg-[#F0F8FF] py-16 px-6 sm:px-10 lg:px-12 relative"
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: "contain",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//           <div className="text-center lg:text-left px-4 sm:px-8">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
//               {languageData?.heading}
//             </h2>

//             <p className="text-lg  text-gray-600 mb-4 leading-relaxed">
//               {languageData?.description}
//             </p>

//             <p className="text-gray-900 text-[15px] sm:text-[16px] font-semibold mt-4">
//               So why wait? To avail a Free Trial Class for English Online
//               Tutoring
//             </p>

//             <div className="text-center lg:text-left my-6">
//               <button onClick={handlecontact} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300">
//                 Start Free Trial
//               </button>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-8 lg:px-12 items-stretch">
//             {/* Left Column */}
//             <div className="flex flex-col gap-4">
//               <div className="bg-sky-100 text-gray-800 p-5 rounded-xl text-sm sm:text-base font-medium shadow-sm flex-1">
//                 {languageData?.property1}
//               </div>

//               <div className="flex items-center justify-center flex-1 bg-white rounded-xl shadow-sm p-4">
//                 <img
//                   src={`${import.meta.env.VITE_APP_URL}${languageData?.image}`}
//                   alt="Students"
//                   className="rounded-xl w-full max-h-[250px] object-cover"
//                 />
//               </div>
//               <div className="bg-cyan-100 text-gray-800 p-5 rounded-xl text-sm sm:text-base font-medium shadow-sm flex-1">
//                 {languageData?.property2}
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="flex flex-col gap-4">
//               <div className="bg-purple-100 text-gray-800 p-5 rounded-xl text-sm sm:text-base font-medium shadow-sm flex-1">
//                 {languageData?.property3}
//               </div>
//               <div className="bg-pink-100 text-gray-800 p-5 rounded-xl text-sm sm:text-base font-medium shadow-sm flex-1">
//                 {languageData?.property4}
//               </div>
//               <div className="bg-green-100 text-gray-800 p-5 rounded-xl text-sm sm:text-base font-medium shadow-sm flex-1">
//                 {languageData?.property5}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div id="englishela" className="bg-[#F0F8FF] ">
//         <div className="container mx-auto p-10   ">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
//               ABOUT COMMON CORE – ELA
//             </h2>
//             {aboutCoreData?.coreDescription?.map((ele) => (
//               <p className=" text-lg   mx-auto text-justify leading-relaxed">
//                 {ele}
//               </p>
//             ))}
//           </div>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
//             <div className="mb-12 col-span-2 sm:col-span-3 md:col-span-3">
//               <h3 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center  gap-2">
//                 WHAT WE COVER?
//               </h3>
//               <p className="  mx-auto text-lg">
//                 {aboutCoreData?.coverDescription}
//               </p>
//             </div>

//             {/* Grid Items */}
//             {aboutCoreDetailData?.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="flex flex-col items-center justify-center gap-2 rounded-2xl shadow-lg border border-gray-300 p-4 bg-white transition-all hover:shadow-xl hover:-translate-y-1"
//               >
//                 <div className={`text-3xl p-3 rounded-full bg-[#554FE8] `}>
//                   <img src={`${import.meta.env.VITE_APP_URL}${item.image}`} />
//                 </div>
//                 <p className="font-medium text-lg ">{item.title}</p>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-10">
//             <div className="text-center text-lg font-bold my-2">
//               So why wait? To avail a Free Trial Class for Science Online
//               Tutoring
//             </div>
//          <div className="flex justify-center my-6">
//   <button
//     onClick={handlecontact}
//     className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
//   >
//     Start Free Trial
//   </button>
// </div>

//           </div>
          
//         </div>
//       </div>
//       <AboutInfoPage />
//       <div id="englishisee">
//         <TestPage />
//       </div>
//       <Measure />
//       <Structure />
//     </section>
//   );
// };


import { BiBookContent, BiTargetLock } from "react-icons/bi";
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaLanguage,
  FaPenNib,
} from "react-icons/fa";
import studentImg from "../../assets/student.png";
import { AboutInfoPage } from "./subEng/about";
import { TestPage } from "./subEng/test";
import { Measure } from "./subEng/measure";
import { Structure } from "./subEng/structure";
import literature from "../../assets/literature.png";
import pen from "../../assets/pen.png";
import setting from "../../assets/settings.png";
import resume from "../../assets/resume.png";
import certificate from "../../assets/certificate.png";
import language from "../../assets/language.png";
import speak from "../../assets/speak.png";
import backgroundImage from "../../assets/work-bg.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// 1. Framer Motion Import
import { motion } from "framer-motion";

export const EnglishCourse = () => {
  const navigate = useNavigate();
  const [aboutCoreData, setAboutCoreData] = useState([]);
  const [aboutCoreDetailData, setAboutCoreDetailData] = useState([]);
  const [languageData, setLanguageData] = useState();

  const getLanguageData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/language`
      );
      setLanguageData(res?.data?.data);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error?.message ||
          "something went wrong",
        { position: "top-right" }
      );
    }
  };

  const getAbouteCoreData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/about-core-ela`
      );
      setAboutCoreData(res?.data?.data);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error?.message ||
          "something went wrong",
        { position: "top-right" }
      );
    }
  };

  const getAboutCoreDetail = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/core-ela-detail`
      );
      setAboutCoreDetailData(res?.data?.data);
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
    getLanguageData();
    getAbouteCoreData();
    getAboutCoreDetail();
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

  return (
    <section className="overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <div
        id="common"
        className="bg-[#F0F8FF] py-16 px-6 sm:px-10 lg:px-12 relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Text Content */}
          <motion.div 
            className="text-center lg:text-left px-4 sm:px-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
              {languageData?.heading}
            </h2>

            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              {languageData?.description}
            </p>

            <p className="text-gray-900 text-[15px] sm:text-[16px] font-semibold mt-4">
              So why wait? To avail a Free Trial Class for English Online Tutoring
            </p>

            <motion.div 
              className="text-center lg:text-left my-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button onClick={handlecontact} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300">
                Start Free Trial
              </button>
            </motion.div>
          </motion.div>

          {/* Right Floating Elements */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-8 lg:px-12 items-stretch"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              <motion.div variants={fadeInUp} className="bg-sky-100 text-gray-800 p-5 rounded-xl text-sm sm:text-base font-medium shadow-sm flex-1 hover:shadow-md transition-shadow">
                {languageData?.property1}
              </motion.div>

              <motion.div 
                variants={fadeInUp} 
                className="flex items-center justify-center flex-1 bg-white rounded-xl shadow-sm p-4"
                animate={{ y: [0, -10, 0] }} // Floating Animation
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src={`${import.meta.env.VITE_APP_URL}${languageData?.image}`}
                  alt="Students"
                  className="rounded-xl w-full max-h-[250px] object-cover"
                />
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-cyan-100 text-gray-800 p-5 rounded-xl text-sm sm:text-base font-medium shadow-sm flex-1 hover:shadow-md transition-shadow">
                {languageData?.property2}
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
              <motion.div variants={fadeInUp} className="bg-purple-100 text-gray-800 p-5 rounded-xl text-sm sm:text-base font-medium shadow-sm flex-1 hover:shadow-md transition-shadow">
                {languageData?.property3}
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-pink-100 text-gray-800 p-5 rounded-xl text-sm sm:text-base font-medium shadow-sm flex-1 hover:shadow-md transition-shadow">
                {languageData?.property4}
              </motion.div>
              <motion.div variants={fadeInUp} className="bg-green-100 text-gray-800 p-5 rounded-xl text-sm sm:text-base font-medium shadow-sm flex-1 hover:shadow-md transition-shadow">
                {languageData?.property5}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- ABOUT CORE ELA SECTION --- */}
      <div id="englishela" className="bg-[#F0F8FF]">
        <div className="container mx-auto p-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
              ABOUT COMMON CORE – ELA
            </h2>
            {aboutCoreData?.coreDescription?.map((ele, i) => (
              <p key={i} className="text-lg mx-auto text-justify leading-relaxed text-gray-700">
                {ele}
              </p>
            ))}
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
            <motion.div 
              className="mb-12 col-span-2 sm:col-span-3 md:col-span-3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center gap-2">
                WHAT WE COVER?
              </h3>
              <p className="mx-auto text-lg text-gray-600">
                {aboutCoreData?.coverDescription}
              </p>
            </motion.div>

            {/* Animated Grid Items */}
            {aboutCoreDetailData?.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ 
                  y: -10, // Lift Up
                  scale: 1.05, 
                  boxShadow: "0px 15px 30px rgba(0,0,0,0.15)" // 3D Shadow
                }}
                className="flex flex-col items-center justify-center gap-2 rounded-2xl shadow-lg border border-gray-300 p-4 bg-white transition-all cursor-pointer"
              >
                <div className={`text-3xl p-3 rounded-full bg-[#554FE8]`}>
                  <img src={`${import.meta.env.VITE_APP_URL}${item.image}`} alt="icon" className="w-8 h-8 object-contain" />
                </div>
                <p className="font-medium text-lg text-center">{item.title}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <div className="text-center text-lg font-bold my-2 text-gray-800">
              So why wait? To avail a Free Trial Class for Science Online Tutoring
            </div>
            <div className="flex justify-center my-6">
              <motion.button
                onClick={handlecontact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
            </div>
          </div>
          
        </div>
      </div>

      <AboutInfoPage />
      <div id="englishisee">
        <TestPage />
      </div>
      <Measure />
      <Structure />
    </section>
  );
};