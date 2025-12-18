// import React, { useEffect, useState } from "react";
// import {
//   BookOpen,
//   Users,
//   FileText,
//   CheckCircle,
//   Target,
//   Lightbulb,
//   PenTool,
// } from "lucide-react";
// import backgroundImage from "../../../assets/about-bg.png";
// import axios from "axios";
// import { toast } from "react-toastify";

// export const AboutInfoPage = () => {
//   const [current, setCurrent] = useState(0);
//   const [aboutData, setAboutData] = useState([]);

//   const getAboutData = async () => {
//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_APP_URL}api/user/about-ela`
//       );
//       setAboutData(res?.data?.data);
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
//     getAboutData();
//   }, []);

//   useEffect(() => {
//     if (!aboutData?.questionType || aboutData.questionType.length === 0) return;

//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % aboutData.questionType.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [aboutData]);

//   return (
//     <div
//       className="bg-[#F0F8FF] py-16 px-6 sm:px-10 lg:px-12 relative"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "contain",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <h1 className="text-3xl font-extrabold text-center  flex items-center justify-center gap-3">
//           ALL YOU NEED TO KNOW ABOUT ELA
//         </h1>
//       </div>

//       <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
//         <p className="text-lg text-gray-800 leading-relaxed ">
//           {aboutData?.description}
//         </p>

//         <div className="text-start">
//           <h2 className="text-3xl font-bold text-gray-900">
//             {aboutData?.heading}
//           </h2>
//         </div>

//         {/* Who Takes This Test? */}
//         <section className=" py-4 ">
//           <h3 className="text-2xl font-bold mb-6  text-center ">
//             Who takes this test?
//           </h3>
//           {/* <p className=" text-lg leading-relaxed mb-2">
//             Students in grades 3–10 take the State English Language Arts (ELA)
//             test each spring. These assessments measure the Common Core Learning
//             Standards (CCLS).
//           </p> */}
//           <p className=" text-lg leading-relaxed" dangerouslySetInnerHTML={{__html:aboutData?.whoTake}}>

//           </p>
//         </section>

//         <section>
//           <h3 className="text-2xl font-bold  mb-4 text-center gap-2">
//             What is on the test?
//           </h3>
//           <h4 className="text-xl font-semibold  mb-4 flex items-center gap-2">
//             Core components and formats
//           </h4>
//           <div className="bg-[#F0F8FF] rounded-2xl  p-8 md:p-12 relative ">
//             <div className="relative z-10 max-w-4xl mx-auto">
//               <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
//                 {aboutData?.questionType?.[current]?.title}
//               </h3>

//               <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
//                 <div className="flex-1 text-center md:text-left">
//                   <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
//                     {aboutData?.questionType?.[current]?.description}
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-10 flex justify-center">
//                 <div className="flex items-center gap-3">
//                   {aboutData?.questionType?.map((_, index) => (
//                     <div
//                       key={index}
//                       onClick={() => setCurrent(index)}
//                       className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${
//                         current === index ? "bg-blue-600 w-8" : "bg-blue-300"
//                       }`}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* <div className="text-center font-bold my-2">
//             So why wait? To avail a Free Trial Class for Science Online Tutoring
//           </div> */}
//         </section>
//       </main>
//     </div>
//   );
// };


import React, { useEffect, useState } from "react";
import {
  BookOpen,
  Users,
  FileText,
  CheckCircle,
  Target,
  Lightbulb,
  PenTool,
} from "lucide-react";
import backgroundImage from "../../../assets/about-bg.png";
import axios from "axios";
import { toast } from "react-toastify";

// 1. Framer Motion Import
import { motion, AnimatePresence } from "framer-motion";

export const AboutInfoPage = () => {
  const [current, setCurrent] = useState(0);
  const [aboutData, setAboutData] = useState([]);

  const getAboutData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/about-ela`
      );
      setAboutData(res?.data?.data);
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
    getAboutData();
  }, []);

  useEffect(() => {
    if (!aboutData?.questionType || aboutData.questionType.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % aboutData.questionType.length);
    }, 4000); // Thoda time badhaya taaki animation feel ho

    return () => clearInterval(interval);
  }, [aboutData]);

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
    <div
      className="bg-[#F0F8FF] py-16 px-6 sm:px-10 lg:px-12 relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-extrabold text-center flex items-center justify-center gap-3"
        >
          ALL YOU NEED TO KNOW ABOUT ELA
        </motion.h1>
      </div>

      <motion.main 
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        <motion.p 
          variants={fadeInUp}
          className="text-lg text-gray-800 leading-relaxed"
        >
          {aboutData?.description}
        </motion.p>

        <motion.div variants={fadeInUp} className="text-start mt-4">
          <h2 className="text-3xl font-bold text-gray-900">
            {aboutData?.heading}
          </h2>
        </motion.div>

        {/* Who Takes This Test? */}
        <motion.section variants={fadeInUp} className="py-4">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Who takes this test?
          </h3>
          <div 
            className="text-lg leading-relaxed" 
            dangerouslySetInnerHTML={{__html:aboutData?.whoTake}}
          ></div>
        </motion.section>

        <motion.section variants={fadeInUp}>
          <h3 className="text-2xl font-bold mb-4 text-center gap-2">
            What is on the test?
          </h3>
          <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
            Core components and formats
          </h4>
          
          {/* 🔥 3D Animated Slider Card */}
          <motion.div 
            className="bg-[#F0F8FF] rounded-2xl p-8 md:p-12 relative border border-blue-100/50 shadow-sm"
            whileHover={{ 
              y: -10, // Lift Up
              boxShadow: "0px 20px 40px rgba(59, 130, 246, 0.15)" // 3D Shadow
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative z-10 max-w-4xl mx-auto min-h-[200px] flex flex-col justify-center">
              
              {/* Animated Text Change */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current} // Key change hone par animation chalega
                  variants={sliderVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
                    {aboutData?.questionType?.[current]?.title}
                  </h3>

                  <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="flex-1 text-center md:text-left">
                      <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                        {aboutData?.questionType?.[current]?.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-10 flex justify-center">
                <div className="flex items-center gap-3">
                  {aboutData?.questionType?.map((_, index) => (
                    <motion.div
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`h-3 rounded-full cursor-pointer transition-colors duration-300 ${
                        current === index ? "bg-blue-600" : "bg-blue-300"
                      }`}
                      // Dot Width Animation
                      animate={{ width: current === index ? 32 : 12 }} 
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </motion.main>
    </div>
  );
};