// import React, { useEffect, useState } from "react";
// import backgroundImage from "../../assets/math-bg.png";
// import aboutImage from "../../assets/about-bg-2.png";

// import algebra from "../../assets/algebra.png";
// import algebra2 from "../../assets/algebra2.png";
// import amcImg from "../../assets/amc.png";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { TestStructure } from "./subMath/test";
// import { TopicPage } from "./subMath/topic";
// import { Prep } from "./subMath/prep";
// import { Completion } from "./subMath/completion";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Courses = () => {
//   const navigate = useNavigate();
//   const [startIndex, setStartIndex] = useState(0);
//   const itemsPerPage = 3;
//   const [mathAboutData, setMathAboutData] = useState();
//   const [tutoringData, setTutoringData] = useState();
//   const [chapterData, setChapterData] = useState();

//   useEffect(() => {
//     fetchAllData();
//   }, []);

//   const fetchAllData = async () => {
//     try {
//       const [mathRes, tutoringRes, chapterRes] = await Promise.all([
//         axios.get(`${import.meta.env.VITE_APP_URL}api/user/math-test`),
//         axios.get(`${import.meta.env.VITE_APP_URL}api/user/tutoring`),
//         axios.get(`${import.meta.env.VITE_APP_URL}api/user/chapter`),
//       ]);

//       setMathAboutData(mathRes?.data?.data);
//       setTutoringData(tutoringRes?.data?.data);
//       setChapterData(chapterRes?.data?.data);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           error.message ||
//           "Something went wrong",
//         { position: "top-right" }
//       );
//     }
//   };

//   const visibleChapters = chapterData?.chapterName?.slice(
//     startIndex,
//     startIndex + itemsPerPage
//   );

//   const handleNext = () => {
//     if (startIndex + itemsPerPage < chapterData.chapterName.length) {
//       setStartIndex(startIndex + itemsPerPage);
//     }
//   };

//   const handlePrev = () => {
//     if (startIndex > 0) {
//       setStartIndex(startIndex - itemsPerPage);
//     }
//   };

//   const handleContact = () => {
//     navigate("/contact");
//   };

//   return (
//     <>
//       <section
//         className="relative bg-[#F0F8FF] py-16 px-4 sm:px-6 lg:px-8"
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: "contain",
//           backgroundPosition: "center",
//         }}
//       >
//         <div id="math" className="container mx-auto ">
//           <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
//             {mathAboutData?.title}
//           </h1>
//           <div className=" space-y-8 text-lg text-gray-700">
//             {mathAboutData?.description?.map((ele) => (
//               <p> {ele}</p>
//             ))}
//           </div>
//           <div className="mt-12 text-center">
//             <p className="text-xl font-semibold  text-gray-800 mb-4">
//               Click here to schedule a Free Trial Class for any subject
//             </p>
//             <button
//               onClick={handleContact}
//               className="inline-flex  items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out"
//             >
//               Start Free Trial{" "}
//               <svg
//                 className="ml-3 -mr-1 h-5 w-5"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </section>

//       <section id="algebra" className="py-8 px-4  sm:px-6 lg:px-8 bg-[#F0F8FF]">
//         <div className="max-w-7xl mx-auto text-center mb-12">
//           <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
//             {tutoringData?.heading}
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             {tutoringData?.headingDescription}
//           </p>
//           <div className="mt-8">
//             <button
//               onClick={handleContact}
//               className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               Get Started{" "}
//               <svg
//                 className="ml-2 -mr-0.5 h-4 w-4"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//         {tutoringData?.chapter?.map((ele, index) => (
//           <div
//             className={`relative rounded-lg container mx-auto shadow-xl p-6 sm:p-8 md:p-10 mb-12 ${
//               index % 2 === 0 ? "bg-[#AEA4DE]" : "bg-[#F0B6C2]"
//             }`}
//           >
//             <div className="  gap-6 sm:gap-8 text-white ">
//               <div className="w-full ">
//                 <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
//                   {ele?.title}
//                 </h3>

//                 <p className="font-semibold text-base sm:text-lg md:text-xl mb-4 leading-relaxed">
//                   {ele?.description}
//                 </p>

//                 <ul className="font-semibold text-sm sm:text-base md:text-lg list-disc list-inside space-y-2 pl-2">
//                   {ele?.chapterName?.map((ele, index) => (
//                     <li>
//                       Chapter {index+1}: {ele}
//                     </li>
//                   ))}
//                 </ul>

//                 <p className="font-semibold text-base sm:text-lg md:text-xl mt-6 leading-relaxed">
//                   GGES hopes that you will enjoy studying Algebra 1 online with
//                   us. To schedule a Free Trial Class!
//                 </p>

//                 <div className="mt-6">
//                   <button
//                     onClick={handleContact}
//                     className="inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 border border-transparent text-sm sm:text-base md:text-lg font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
//                   >
//                     Start Free Trial{" "}
//                     <svg
//                       className="ml-2 h-4 w-4 sm:h-5 sm:w-5"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>
//       <section
//         id="geometry"
//         className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F0F8FF]"
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: "contain",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="max-w-7xl container mx-auto text-center mb-12">
//           <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
//             {chapterData?.title}
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             {chapterData?.description}
//           </p>
//           <p className="my-4 font-semibold text-lg">
//             Why not avail a Free Trial Class for online Geometry tutoring. To
//             schedule a Free Trial Class
//           </p>
//           <div className="mt-8">
//             <button
//               onClick={handleContact}
//               className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               Get Started{" "}
//               <svg
//                 className="ml-2 -mr-0.5 h-4 w-4"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         <div className="relative container max-w-7xl mx-auto p-8">
//           <div className="relative z-10">
//             <h3 className=" text-gray-800 mb-6">
//               Geometry Chapters Included in our Geometry tutoring are as
//               follows:
//             </h3>
//             <div className="relative w-full px-4 sm:px-6 lg:px-10 py-6">
//               {/* Chapters Grid */}
//               <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full min-w-0">
//                 {visibleChapters?.map((chapter, index) => {
//                   const chapterNumber = startIndex + index + 1;
//                   return (
//                     <div
//                       key={index}
//                       className="flex items-start  px-4  sm:items-center gap-3 sm:gap-4 w-full min-w-0"
//                     >
//                       {/* Chapter Number */}
//                       <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full text-white font-bold text-base sm:text-lg bg-blue-500">
//                         {chapterNumber}
//                       </div>

//                       {/* Chapter Text */}
//                       <div className="flex flex-col text-left min-w-0">
//                         <h4 className="text-base sm:text-lg font-semibold text-gray-900 break-words">
//                           Chapter {chapterNumber}
//                         </h4>
//                         <p className="text-sm sm:text-base text-gray-700 break-words">
//                           {chapter}
//                         </p>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* Left Arrow - Sirf tab dikhega jab startIndex 0 se bada ho */}
//               {startIndex > 0 && (
//                 <div className="absolute inset-y-0 -left-2 sm:left-1 flex items-center">
//                   <button
//                     onClick={handlePrev}
//                     className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 focus:outline-none"
//                     aria-label="Previous"
//                   >
//                     <svg
//                       className="h-6 w-6 sm:h-8 sm:w-8"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               )}

//               {/* Right Arrow - Sirf tab dikhega jab aur items bache ho */}
//               {startIndex + itemsPerPage <
//                 (chapterData?.chapterName?.length || 0) && (
//                 <div className="absolute inset-y-0 right-1 sm:right-2 flex items-center">
//                   <button
//                     onClick={handleNext}
//                     className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 text-gray-500 hover:text-gray-700 focus:outline-none"
//                     aria-label="Next"
//                   >
//                     <svg
//                       className="h-6 w-6 sm:h-8 sm:w-8"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               )}
//             </div>

//             <p className="text-gray-700 text-center text-lg mt-8">
//               {chapterData?.subjectDescription}
//             </p>
//             <p className="text-xl font-semibold text-gray-800 mb-4 text-center mt-6">
//               Why not avail a Free Trial Class for online Geometry tutoring. To
//               schedule a Free Trial Class
//             </p>
//             <div className="mt-6 text-center">
//               <button
//                 onClick={handleContact}
//                 className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               >
//                 Start Free Trial{" "}
//                 <svg
//                   className="ml-2 -mr-0.5 h-4 w-4"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* End of K-12 Tutoring - Geometry section */}

//       {/* New section: ALL YOU NEED TO KNOW ABOUT AMC (American Mathematics Competitions) Test */}
//       <section id="mathamc" className="py-4 px-4 sm:px-6 lg:px-8 bg-[#F0F8FF]">
//         <div className="max-w-7xl mx-auto  mb-12">
//           <h2 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
//             ALL YOU NEED TO KNOW ABOUT AMC (American Mathematics Competitions)
//             Test
//           </h2>
//           <p className="text-lg text-gray-600 mx-auto">
//             At GGES, we have expert AMC tutors who are well qualified and
//             experienced in AMC test online tutoring.
//           </p>
//           <p className="text-xl font-semibold text-gray-800 mb-4 text-center mt-6">
//             So why wait? To avail a Free Trial Class for AMC Test Prep Online
//             Tutoring
//           </p>
//           <div className="mt-8 text-center">
//             <button
//               onClick={handleContact}
//               className="inline-flex  items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//             >
//               Start Free Trial{" "}
//               <svg
//                 className="ml-2 -mr-0.5 h-4 w-4"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </section>

//       <Completion />

//       {/* <Prep /> */}

//       <div id="kangaroo">
//         <TestStructure />
//       </div>
//       <div id="science">
//         <TopicPage />
//       </div>
//     </>
//   );
// };

// export default Courses;


import React, { useEffect, useState } from "react";
import backgroundImage from "../../assets/math-bg.png";
import aboutImage from "../../assets/about-bg-2.png";

import algebra from "../../assets/algebra.png";
import algebra2 from "../../assets/algebra2.png";
import amcImg from "../../assets/amc.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { TestStructure } from "./subMath/test";
import { TopicPage } from "./subMath/topic";
import { Prep } from "./subMath/prep";
import { Completion } from "./subMath/completion";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// 1. Framer Motion Import
import { motion } from "framer-motion";

const Courses = () => {
  const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;
  const [mathAboutData, setMathAboutData] = useState();
  const [tutoringData, setTutoringData] = useState();
  const [chapterData, setChapterData] = useState();

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const [mathRes, tutoringRes, chapterRes] = await Promise.all([
        axios.get(`${import.meta.env.VITE_APP_URL}api/user/math-test`),
        axios.get(`${import.meta.env.VITE_APP_URL}api/user/tutoring`),
        axios.get(`${import.meta.env.VITE_APP_URL}api/user/chapter`),
      ]);

      setMathAboutData(mathRes?.data?.data);
      setTutoringData(tutoringRes?.data?.data);
      setChapterData(chapterRes?.data?.data);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong",
        { position: "top-right" }
      );
    }
  };

  const visibleChapters = chapterData?.chapterName?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleNext = () => {
    if (startIndex + itemsPerPage < chapterData.chapterName.length) {
      setStartIndex(startIndex + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsPerPage);
    }
  };

  const handleContact = () => {
    navigate("/contact");
  };

  // 🔥 Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
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
    <>
      <section
        className="relative bg-[#F0F8FF] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <motion.div 
          id="math" 
          className="container mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-3xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8"
          >
            {mathAboutData?.title}
          </motion.h1>
          
          <motion.div variants={fadeInUp} className="space-y-8 text-lg text-gray-700">
            {mathAboutData?.description?.map((ele, index) => (
              <p key={index}> {ele}</p>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-12 text-center">
            <p className="text-xl font-semibold text-gray-800 mb-4">
              Click here to schedule a Free Trial Class for any subject
            </p>
            <motion.button
              onClick={handleContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            >
              Start Free Trial{" "}
              <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      <section id="algebra" className="py-8 px-4 sm:px-6 lg:px-8 bg-[#F0F8FF]">
        <motion.div 
          className="max-w-7xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            {tutoringData?.heading}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {tutoringData?.headingDescription}
          </p>
          <div className="mt-8">
            <motion.button
              onClick={handleContact}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Get Started{" "}
              <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {tutoringData?.chapter?.map((ele, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }}
            className={`relative rounded-lg container mx-auto shadow-xl p-6 sm:p-8 md:p-10 mb-12 ${
              index % 2 === 0 ? "bg-[#AEA4DE]" : "bg-[#F0B6C2]"
            }`}
          >
            <div className="gap-6 sm:gap-8 text-white">
              <div className="w-full">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  {ele?.title}
                </h3>

                <p className="font-semibold text-base sm:text-lg md:text-xl mb-4 leading-relaxed">
                  {ele?.description}
                </p>

                <ul className="font-semibold text-sm sm:text-base md:text-lg list-disc list-inside space-y-2 pl-2">
                  {ele?.chapterName?.map((ele, index) => (
                    <li key={index}>
                      Chapter {index+1}: {ele}
                    </li>
                  ))}
                </ul>

                <p className="font-semibold text-base sm:text-lg md:text-xl mt-6 leading-relaxed">
                  GGES hopes that you will enjoy studying Algebra 1 online with
                  us. To schedule a Free Trial Class!
                </p>

                <div className="mt-6">
                  <motion.button
                    onClick={handleContact}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 border border-transparent text-sm sm:text-base md:text-lg font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
                  >
                    Start Free Trial{" "}
                    <svg className="ml-2 h-4 w-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section
        id="geometry"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F0F8FF]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <motion.div 
          className="max-w-7xl container mx-auto text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl font-extrabold text-gray-900 mb-4">
            {chapterData?.title}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-gray-600 max-w-3xl mx-auto">
            {chapterData?.description}
          </motion.p>
          <motion.p variants={fadeInUp} className="my-4 font-semibold text-lg">
            Why not avail a Free Trial Class for online Geometry tutoring. To
            schedule a Free Trial Class
          </motion.p>
          <div className="mt-8">
            <motion.button
              onClick={handleContact}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Get Started{" "}
              <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        <div className="relative container max-w-7xl mx-auto p-8">
          <div className="relative z-10">
            <h3 className=" text-gray-800 mb-6">
              Geometry Chapters Included in our Geometry tutoring are as follows:
            </h3>
            <div className="relative w-full px-4 sm:px-6 lg:px-10 py-6">
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full min-w-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {visibleChapters?.map((chapter, index) => {
                  const chapterNumber = startIndex + index + 1;
                  return (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-start px-4 sm:items-center gap-3 sm:gap-4 w-full min-w-0 cursor-pointer"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full text-white font-bold text-base sm:text-lg bg-blue-500 shadow-md">
                        {chapterNumber}
                      </div>
                      <div className="flex flex-col text-left min-w-0">
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 break-words">
                          Chapter {chapterNumber}
                        </h4>
                        <p className="text-sm sm:text-base text-gray-700 break-words">
                          {chapter}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {startIndex > 0 && (
                <div className="absolute inset-y-0 -left-2 sm:left-1 flex items-center">
                  <motion.button
                    onClick={handlePrev}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    <svg className="h-6 w-6 sm:h-8 sm:w-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                </div>
              )}

              {startIndex + itemsPerPage < (chapterData?.chapterName?.length || 0) && (
                <div className="absolute inset-y-0 right-1 sm:right-2 flex items-center">
                  <motion.button
                    onClick={handleNext}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    <svg className="h-6 w-6 sm:h-8 sm:w-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                </div>
              )}
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-700 text-center text-lg mt-8"
            >
              {chapterData?.subjectDescription}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xl font-semibold text-gray-800 mb-4 text-center mt-6"
            >
              Why not avail a Free Trial Class for online Geometry tutoring. To
              schedule a Free Trial Class
            </motion.p>
            <div className="mt-6 text-center">
              <motion.button
                onClick={handleContact}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Start Free Trial{" "}
                <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* AMC Section */}
      <section id="mathamc" className="py-4 px-4 sm:px-6 lg:px-8 bg-[#F0F8FF]">
        <motion.div 
          className="max-w-7xl mx-auto mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
            ALL YOU NEED TO KNOW ABOUT AMC (American Mathematics Competitions) Test
          </h2>
          <p className="text-lg text-gray-600 mx-auto text-center">
            At GGES, we have expert AMC tutors who are well qualified and
            experienced in AMC test online tutoring.
          </p>
          <p className="text-xl font-semibold text-gray-800 mb-4 text-center mt-6">
            So why wait? To avail a Free Trial Class for AMC Test Prep Online
            Tutoring
          </p>
          <div className="mt-8 text-center">
            <motion.button
              onClick={handleContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Start Free Trial{" "}
              <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </section>

      <Completion />
      <div id="kangaroo">
        <TestStructure />
      </div>
      <div id="science">
        <TopicPage />
      </div>
    </>
  );
};

export default Courses;