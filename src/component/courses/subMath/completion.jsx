// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import aboutImage from "../../../assets/about-bg-2.png";
// import amcImg from "../../../assets/amc.png";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// export const Completion = () => {
//   const navigate=useNavigate()
//   const [completionData, setCompletionData] = useState([]);
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     fetchAllData();
//   }, []);

//   const fetchAllData = async () => {
//     try {
//       const [completionRes] = await Promise.all([
//         axios.get(`${import.meta.env.VITE_APP_URL}api/user/competition`),
//       ]);

//       setCompletionData(completionRes?.data?.data);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           error.message ||
//           "Something went wrong",
//         { position: "top-right" }
//       );
//     }
//   };

//   useEffect(() => {
//     if (!completionData?.competition) return;

//     const total = completionData.competition.length;

//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % total);
//     }, 3000);

//     return () => clearInterval(timer);
//   }, [completionData]);

//   const handleNext = () => {
//     if (current < completionData?.competition?.length - 1) {
//       setCurrent(current + 1);
//     }
//   };

//   const handlePrev = () => {
//     if (current > 0) {
//       setCurrent(current - 1);
//     }
//   };

//      const handleContact=()=>{
//     navigate('/contact')
//   }
//   return (
//     <div>
//       <div
//         className="relative bg-[#F0F8FF] py-4 px-4 sm:px-6 lg:px-8"
//         style={{
//           backgroundImage: `url(${aboutImage})`,
//           backgroundSize: "contain",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="relative container mx-auto  p-8 mt-12 overflow-hidden">
//           <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
//             ABOUT AMC TEST
//           </h3>
//           <p className="text-gray-700 text-lg  mb-10  mx-auto">
//             {completionData?.description}
//           </p>

//           <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mt-12">
//             <div className="lg:w-1/2 text-left">
//               <h4 className="text-2xl font-bold text-gray-900 mb-6">
//                 {completionData?.title}
//               </h4>
//               <p className="text-gray-700 text-lg mb-6">
//                 The MAA AMC proudly engages students with a dedicated group of
//                 participants, each crucial to the success of our mathematical
//                 community:
//               </p>
//               <div className="space-y-6">
//                 {completionData?.condition?.map((ele, index) => (
//                   <div className="flex items-start space-x-4">
//                     <div className="flex-shrink-0 flex items-center justify-center  text-black font-bold text-lg">
//                       {index + 1}
//                     </div>
//                     <div>
//                       <p className="text-gray-700 text-lg">{ele}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="lg:w-1/2 flex justify-center lg:justify-end">
//               {/* AMC student image */}
//               <img
//                 src={amcImg}
//                 alt="Student studying for AMC"
//                 className="rounded-lg max-w-full h-auto object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="bg-[#F0F8FF]">
//         {/* <div className="container mx-auto ">
//           <div className="text-center flex-col md:flex-row bg-[#F0F8FF]  flex justify-between mb-10">
//             <h2 className="text-2xl sm:text-3xl font-semibold flex items-center justify-center gap-2">
//               What are the different MAA AMC competitions?
//             </h2>

//             <div className=" flex gap-3 justify-between px-2">
//               <button
//                 onClick={handlePrev}
//                 className="bg-white border border-gray-300 shadow-sm rounded-full p-2 hover:bg-blue-50 transition"
//               >
//                 <FaArrowLeft className="text-blue-600" />
//               </button>
//               <button
//                 onClick={handleNext}
//                 className="bg-white border border-gray-300 shadow-sm rounded-full p-2 hover:bg-blue-50 transition"
//               >
//                 <FaArrowRight className="text-blue-600" />
//               </button>
//             </div>
//           </div>

//           <div className="relative  mx-auto bg-[#D7E9FF] shadow-md rounded-2xl p-6 sm:p-10 text-gray-700 border border-blue-100">
//             <h3 className="text-xl sm:text-2xl font-bold  mb-3"> AMC 8</h3>

//             <p className="mb-4 text-gray-600 text-[16px] font-semibold leading-relaxed">
//               {completionData?.competition?.[current]?.amc}
//             </p>

//             <p className="text-sm sm:text-base text-gray-700 mb-2">
//               <span className="font-semibold text-gray-800">Description:</span>{" "}
//               {completionData?.competition?.[current]?.description}
//             </p>

//             <p className="text-sm sm:text-base text-gray-700 mb-2">
//               <span className="font-semibold text-gray-800">For:</span>
//               {completionData?.competition?.[current]?.for}
//             </p>

//             <p className="text-sm sm:text-base text-gray-700">
//               <span className="font-semibold text-gray-800">When:</span>
//               {completionData?.competition?.[current]?.when}
//             </p>
//           </div>

//           <div className="flex justify-center items-center gap-2 mt-8">
//             {completionData?.competition?.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrent(index)}
//                 className={`h-3 rounded-full transition-all duration-300 ${
//                   current === index ? "bg-blue-600 w-8" : "bg-gray-300 w-3"
//                 }`}
//               ></button>
//             ))}
//           </div>

//           <div className="bg-[#F0F8FF]"></div>
//           <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 ">
//             <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-center">
//               WHY TO TAKE IT?
//             </h1>
//             <section className="text-gray-600 text-[16px] font-semibold">
//               {completionData?.whyTake?.map((ele) => (
//                 <p className=" leading-relaxed mb-6">{ele}</p>
//               ))}
//               <div className="text-center">
//                 <h3 className="text-2xl font-bold my-4">
//                   So why wait? To avail a Free Trial Class for AMC Test Prep
//                   Online Tutoring
//                 </h3>
//               </div>
//               <div className="text-center my-4">
//                 <button onClick={handleContact} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 ">
//                   Start Free Trial
//                 </button>
//               </div>
//             </section>
//           </div>
//         </div> */}
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-10 mt-8">
//             <h2 className="text-2xl sm:text-3xl font-semibold flex items-center justify-center gap-2">
//               What are the different MAA AMC competitions?
//             </h2>
//           </div>

//           {/* Wrapper Div: Relative positioning for arrows, width controlled here */}
//           <div className="relative max-w-6xl mx-auto">
            
//             {/* 🟢 LEFT BUTTON */}
//             <button
//               onClick={handlePrev}
//               className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 z-10 bg-white border border-gray-200 shadow-lg rounded-full p-2 hover:bg-blue-50 transition hidden md:flex items-center justify-center text-blue-600"
//             >
//               <svg
//                 className="h-6 w-6 sm:h-8 sm:w-8"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>

//             {/* 🟢 MAIN CARD (Width remains same) */}
//             <div className="w-full bg-[#D7E9FF] shadow-md rounded-2xl p-6 sm:p-10 text-gray-700 border border-blue-100 min-h-[300px]">
//               <h3 className="text-xl sm:text-2xl font-bold mb-3">{completionData?.competition?.[current]?.title}</h3>

//               <p className="mb-4 text-gray-600 text-[16px] font-semibold leading-relaxed" dangerouslySetInnerHTML={{__html:completionData?.competition?.[current]?.amc}}>
//               </p>

//               <p className="text-sm sm:text-base text-gray-700 mb-2">
//                 <span className="font-semibold text-gray-800">
//                   Description:&nbsp;
//                 </span>{" "}
//                 {completionData?.competition?.[current]?.description}
//               </p>

//               <p className="text-sm sm:text-base text-gray-700 mb-2">
//                 <span className="font-semibold text-gray-800">For:&nbsp;</span>
//                 {completionData?.competition?.[current]?.for}
//               </p>

//               <p className="text-sm sm:text-base text-gray-700">
//                 <span className="font-semibold text-gray-800">When:&nbsp;</span>
//                 {completionData?.competition?.[current]?.when}
//               </p>
//             </div>

//             {/* 🟢 RIGHT BUTTON (Rotated Icon) */}
//             <button
//               onClick={handleNext}
//               className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 z-10 bg-white border border-gray-200 shadow-lg rounded-full p-2 hover:bg-blue-50 transition hidden md:flex items-center justify-center text-blue-600"
//             >
//               {/* Added 'rotate-180' class to flip the icon */}
//               <svg
//                 className="h-6 w-6 sm:h-8 sm:w-8 rotate-180" 
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Mobile Navigation (Only visible on small screens) */}
//           <div className="flex justify-center items-center gap-4 mt-8 md:hidden">
//             <button
//               onClick={handlePrev}
//               className="p-2 bg-white rounded-full shadow border text-blue-600"
//             >
//               <svg
//                 className="h-6 w-6"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//             <div className="flex gap-2">
//               {completionData?.competition?.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrent(index)}
//                   className={`h-3 rounded-full transition-all duration-300 ${
//                     current === index ? "bg-blue-600 w-8" : "bg-gray-300 w-3"
//                   }`}
//                 ></button>
//               ))}
//             </div>
//             <button
//               onClick={handleNext}
//               className="p-2 bg-white rounded-full shadow border text-blue-600"
//             >
//               <svg
//                 className="h-6 w-6 rotate-180"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Desktop Dots */}
//           <div className="hidden md:flex justify-center items-center gap-2 mt-8">
//             {completionData?.competition?.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrent(index)}
//                 className={`h-3 rounded-full transition-all duration-300 ${
//                   current === index ? "bg-blue-600 w-8" : "bg-gray-300 w-3"
//                 }`}
//               ></button>
//             ))}
//           </div>

//           <div className="bg-[#F0F8FF]">{/* Header */}</div>
//           <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 ">
//             <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-center">
//               WHY TO TAKE IT?
//             </h1>
//             <section className="text-gray-600 text-lg mt-4">
//               {completionData?.whyTake?.map((ele, i) => (
//                 <p key={i} className="leading-relaxed  mb-6">
//                   {ele}
//                 </p>
//               ))}
//               <div className="text-center">
//                 <h3 className="text-2xl font-bold my-4">
//                   So why wait? To avail a Free Trial Class for AMC Test Prep
//                   Online Tutoring
//                 </h3>
//               </div>
//               <div className="text-center my-4">
//                 <button
//                   onClick={handleContact}
//                   className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 "
//                 >
//                   Start Free Trial
//                 </button>
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import aboutImage from "../../../assets/about-bg-2.png";
import amcImg from "../../../assets/amc.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// 1. Framer Motion Import
import { motion, AnimatePresence } from "framer-motion";

export const Completion = () => {
  const navigate = useNavigate()
  const [completionData, setCompletionData] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const [completionRes] = await Promise.all([
        axios.get(`${import.meta.env.VITE_APP_URL}api/user/competition`),
      ]);

      setCompletionData(completionRes?.data?.data);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong",
        { position: "top-right" }
      );
    }
  };

  useEffect(() => {
    if (!completionData?.competition) return;

    const total = completionData.competition.length;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000); // 3000 -> 4000 for smoother feel

    return () => clearInterval(timer);
  }, [completionData]);

  const handleNext = () => {
    if (current < completionData?.competition?.length - 1) {
      setCurrent(current + 1);
    }
  };

  const handlePrev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const handleContact = () => {
    navigate('/contact')
  }

  // 🔥 Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const sliderVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <div>
      <div
        className="relative bg-[#F0F8FF] py-4 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: `url(${aboutImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className="relative container mx-auto p-8 mt-12">
          <motion.h3 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-6 text-center"
          >
            ABOUT AMC TEST
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-700 text-lg mb-10 mx-auto"
          >
            {completionData?.description}
          </motion.p>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mt-12">
            <motion.div 
              className="lg:w-1/2 text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                {completionData?.title}
              </h4>
              <p className="text-gray-700 text-lg mb-6">
                The MAA AMC proudly engages students with a dedicated group of
                participants, each crucial to the success of our mathematical
                community:
              </p>
              <div className="space-y-6">
                {completionData?.condition?.map((ele, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 flex items-center justify-center text-black font-bold text-lg">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-gray-700 text-lg">{ele}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating Image Animation */}
            <motion.div 
              className="lg:w-1/2 flex justify-center lg:justify-end"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={amcImg}
                alt="Student studying for AMC"
                className="rounded-lg max-w-full h-auto object-cover shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-[#F0F8FF]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-10 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-semibold flex items-center justify-center gap-2">
              What are the different MAA AMC competitions?
            </h2>
          </motion.div>

          {/* Wrapper Div: Relative positioning for arrows */}
          <div className="relative max-w-6xl mx-auto">
            
            {/* LEFT BUTTON */}
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 z-10 bg-white border border-gray-200 shadow-lg rounded-full p-2 hover:bg-blue-50 transition hidden md:flex items-center justify-center text-blue-600"
            >
              <svg className="h-6 w-6 sm:h-8 sm:w-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </motion.button>

            {/* MAIN CARD (With Smooth Transition) */}
            <motion.div 
              className="w-full bg-[#D7E9FF] shadow-md rounded-2xl p-6 sm:p-10 text-gray-700 border border-blue-100 min-h-[300px]"
              whileHover={{ y: -5, boxShadow: "0px 15px 30px rgba(59, 130, 246, 0.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  variants={sliderVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">{completionData?.competition?.[current]?.title}</h3>

                  <p className="mb-4 text-gray-600 text-[16px] font-semibold leading-relaxed" dangerouslySetInnerHTML={{__html:completionData?.competition?.[current]?.amc}}>
                  </p>

                  <p className="text-sm sm:text-base text-gray-700 mb-2">
                    <span className="font-semibold text-gray-800">
                      Description:&nbsp;
                    </span>{" "}
                    {completionData?.competition?.[current]?.description}
                  </p>

                  <p className="text-sm sm:text-base text-gray-700 mb-2">
                    <span className="font-semibold text-gray-800">For:&nbsp;</span>
                    {completionData?.competition?.[current]?.for}
                  </p>

                  <p className="text-sm sm:text-base text-gray-700">
                    <span className="font-semibold text-gray-800">When:&nbsp;</span>
                    {completionData?.competition?.[current]?.when}
                  </p>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* RIGHT BUTTON */}
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 z-10 bg-white border border-gray-200 shadow-lg rounded-full p-2 hover:bg-blue-50 transition hidden md:flex items-center justify-center text-blue-600"
            >
              <svg className="h-6 w-6 sm:h-8 sm:w-8 rotate-180" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8 md:hidden">
            <button onClick={handlePrev} className="p-2 bg-white rounded-full shadow border text-blue-600">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            </button>
            <div className="flex gap-2">
              {completionData?.competition?.map((_, index) => (
                <div
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    current === index ? "bg-blue-600 w-8" : "bg-gray-300 w-3"
                  }`}
                ></div>
              ))}
            </div>
            <button onClick={handleNext} className="p-2 bg-white rounded-full shadow border text-blue-600">
              <svg className="h-6 w-6 rotate-180" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            </button>
          </div>

          {/* Desktop Dots */}
          <div className="hidden md:flex justify-center items-center gap-2 mt-8">
            {completionData?.competition?.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 rounded-full transition-colors duration-300 ${
                  current === index ? "bg-blue-600" : "bg-gray-300"
                }`}
                animate={{ width: current === index ? 32 : 12 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            ))}
          </div>

          <div className="bg-[#F0F8FF]"></div>
          <motion.div 
            className="container mx-auto px-4 py-8 sm:px-6 lg:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <motion.h1 variants={fadeInUp} className="text-2xl sm:text-4xl font-bold tracking-tight text-center">
              WHY TO TAKE IT?
            </motion.h1>
            <section className="text-gray-600 text-lg mt-4">
              {completionData?.whyTake?.map((ele, i) => (
                <motion.p key={i} variants={fadeInUp} className="leading-relaxed mb-6">
                  {ele}
                </motion.p>
              ))}
              <div className="text-center">
                <motion.h3 variants={fadeInUp} className="text-2xl font-bold my-4">
                  So why wait? To avail a Free Trial Class for AMC Test Prep
                  Online Tutoring
                </motion.h3>
              </div>
              <div className="text-center my-4">
                <motion.button
                  onClick={handleContact}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 "
                >
                  Start Free Trial
                </motion.button>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
};