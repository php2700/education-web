// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import iseeImg from "../../../assets/isee.jpg";

// const ISEE = () => {
//   const navigate = useNavigate();
  

//   // State Management
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchIseeData = async () => {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_APP_URL}api/user/isee-test`
//         );

//         if (response.data) {
//           let apiData = response.data.data || response.data;

//           // If array, take first item, else take object
//           if (Array.isArray(apiData)) {
//             // Check if array has data
//             if (apiData.length > 0) setData(apiData[0]);
//             else setData(null);
//           } else {
//             // Check if object is not empty
//             if (apiData && Object.keys(apiData).length > 0) setData(apiData);
//             else setData(null);
//           }
//         }
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching ISEE data:", err);
//         setError("Failed to load content.");
//         setLoading(false);
//       }
//     };

//     fetchIseeData();
//   }, []);

//   // Loading & Error States
//   if (loading)
//     return (
//       <div className="text-center py-20 font-bold text-gray-500">
//         Loading ISEE Prep...
//       </div>
//     );
//   if (error)
//     return <div className="text-center py-20 text-red-500">{error}</div>;

//   // Safe Data Object
//   const safeData = data || {};

//   return (
//     <div className=" py-14 px-4" id="isee">
//       <div className="max-w-7xl mx-auto">
//         {/* ===== 1. HERO SECTION ===== */}
//         {/* Title sirf tab dikhega jab data ho */}
//         {safeData.heroTitle && (
//           <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">
//             {safeData.heroTitle}
//           </h1>
//         )}

//         {/* Intro Box & Button - Ye Box hamesha rahega for Button */}
//         <div className="bg-[#F0F8FF] p-8 md:p-10 rounded-2xl shadow-xl mb-12">
//           {safeData.heroDescription && (
//             <div className="text-gray-700 text-lg leading-7 mb-6 whitespace-pre-line">
//               {safeData.heroDescription}
//             </div>
//           )}

//           {/* BUTTON: Always Visible */}
//           <div className="text-center">
//           <button
//             onClick={() => navigate("/contact")}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-lg transition"
//           >
//             Click Here for Free Trial Class
//           </button></div>
//         </div>

//         {/* ===== 2. ABOUT ISEE ===== */}
//         {/* Section sirf tab dikhega jab Heading, Description ya Points ho */}
//         {(safeData.aboutHeading ||
//           safeData.aboutDescription ||
//           (safeData.aboutPoints && safeData.aboutPoints.length > 0) ||
//           safeData.aboutFooter) && (
//           <div className="bg-[#F0F8FF] p-8 md:p-10 rounded-2xl shadow-xl mb-12">
//             {safeData.aboutHeading && (
//               <h2 className="text-2xl font-semibold mb-4 ">
//                 {safeData.aboutHeading}
//               </h2>
//             )}

//             {safeData.aboutDescription && (
//               <div className="text-gray-700 text-lg leading-7 mb-4 whitespace-pre-line">
//                 {safeData.aboutDescription}
//               </div>
//             )}
//           </div>
//         )}

//         {/* ===== 3. PURPOSE ===== */}
//         {(safeData.purposeHeading ||
//           (safeData.purposePoints && safeData.purposePoints.length > 0)) && (
//           <div className="bg-[#F0F8FF] p-8 md:p-10 rounded-2xl shadow-xl mb-12">
//             {safeData.purposeHeading && (
//               <h2 className="text-2xl font-semibold mb-4 text-blue-800">
//                 {safeData.purposeHeading}
//               </h2>
//             )}

//             {safeData.purposePoints && safeData.purposePoints.length > 0 && (
//               <ul className="list-disc ml-6 text-lg text-gray-700 space-y-2">
//                 {safeData.purposePoints.map((pt, i) =>
//                   pt ? <li key={i}>{pt}</li> : null
//                 )}
//               </ul>
//             )}
//           </div>
//         )}

//         {/* ===== 4. TEST STRUCTURE & LEVELS ===== */}
//         {(safeData.structureHeading ||
//           safeData.structureLevelIntro ||
//           safeData.structureSectionIntro) && (
//           <div className="bg-[#F0F8FF] p-8 md:p-10 rounded-2xl shadow-lg mb-12">
//             {safeData.structureHeading && (
//               <h2 className="text-2xl font-semibold mb-4 text-blue-800">
//                 {safeData.structureHeading}
//               </h2>
//             )}

//             {safeData.structureList && safeData.structureList.length > 0 && (
//               <ul className="ml-6 space-y-4">
//                 {safeData.structureList.map((pt, i) => (
//                   <li key={i} className="text-gray-700">
//                     {pt.title && (
//                       <h3 className="text-lg font-semibold  ">{pt.title}</h3>
//                     )}

//                     {pt.description && (
//                       <p className="text-base whitespace-pre-wrap text-lg leading-relaxed">
//                         {pt.description}
//                       </p>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         )}

//         {/* ===== 5. SECTION DETAILS (Measures) ===== */}
//         {(safeData.measureHeading ||
//           (safeData.measureList && safeData.measureList.length > 0)) && (
//           <div className="bg-[#F0F8FF] p-8 md:p-10 rounded-2xl shadow-xl mb-12">
//             {safeData.measureHeading && (
//               <h2 className="text-2xl font-semibold mb-4 text-blue-800">
//                 {safeData.measureHeading}
//               </h2>
//             )}
//             {safeData.measureList && safeData.measureList.length > 0 && (
//               <ul className="ml-6 space-y-4">
//                 {safeData.measureList?.map((pt, i) => (
//                   <li key={i} className="text-gray-700">
//                     {pt.title && (
//                       <h3 className="text-lg font-semibold  "  dangerouslySetInnerHTML={{ __html: pt.title }} >
//                       </h3>
//                     )}

//                     {pt.description && (
//                       <p className="text-lg whitespace-pre-wrap leading-relaxed"
                       
//                       >
//                      {pt.description}
//                       </p>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         )}
//         <h2 className="font-bold text-3xl text-center mb-2">TEST STRUCTURE</h2>
//         <div>
//           <img src={iseeImg} />
//         </div>

//         {/* ===== 6. REGISTRATION ===== */}
//         {(safeData.registrationHeading || safeData.registrationDescription) && (
//           <div className="bg-[#F0F8FF]  p-8 md:p-10 rounded-2xl shadow-xl mb-12">
//             {safeData.registrationHeading && (
//               <h2 className="text-2xl font-semibold mb-4 text-blue-800">
//                 {safeData.registrationHeading}
//               </h2>
//             )}

//             {safeData.registrationDescription && (
//               <div className="text-gray-700 leading-7 text-lg mb-6 whitespace-pre-line">
//                 {safeData.registrationDescription}
//               </div>
//             )}
//           </div>
//         )}

//         {/* ===== CTA - ALWAYS VISIBLE ===== */}
//         <section className="mt-4  p-4 rounded-xl text-center">
//           <h3 className="text-xl font-semibold mb-3">
//             So why wait? To avail a Free Trial Class for ISEE Test Prep Online
//             Tutoring, 
//           </h3>

//           <div className="flex justify-center gap-4">
//             <button
//               onClick={() => navigate("/contact")}
//               className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-6 py-3 rounded-lg font-semibold transition"
//             >
//               CLICK HERE
//             </button>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default ISEE;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import iseeImg from "../../../assets/isee.jpg";

// 1. Framer Motion Import
import { motion } from "framer-motion";

const ISEE = () => {
  const navigate = useNavigate();
  
  // State Management
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIseeData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}api/user/isee-test`
        );

        if (response.data) {
          let apiData = response.data.data || response.data;

          if (Array.isArray(apiData)) {
            if (apiData.length > 0) setData(apiData[0]);
            else setData(null);
          } else {
            if (apiData && Object.keys(apiData).length > 0) setData(apiData);
            else setData(null);
          }
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching ISEE data:", err);
        setError("Failed to load content.");
        setLoading(false);
      }
    };

    fetchIseeData();
  }, []);

  // Loading & Error States
  if (loading)
    return (
      <div className="text-center py-20 font-bold text-gray-500">
        Loading ISEE Prep...
      </div>
    );
  if (error)
    return <div className="text-center py-20 text-red-500">{error}</div>;

  // Safe Data Object
  const safeData = data || {};

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
    <div className="py-14 px-4" id="isee">
      <div className="max-w-7xl mx-auto">
        
        {/* ===== 1. HERO SECTION ===== */}
        {safeData.heroTitle && (
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-blue-900 mb-12"
          >
            {safeData.heroTitle}
          </motion.h1>
        )}

        {/* Intro Box & Button (3D Hover) */}
        <motion.div 
          className="bg-[#F0F8FF] p-8 md:p-10 rounded-2xl shadow-xl mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          whileHover={{ 
            y: -10, 
            boxShadow: "0px 20px 40px rgba(59, 130, 246, 0.2)" 
          }}
        >
          {safeData.heroDescription && (
            <div className="text-gray-700 text-lg leading-7 mb-6 whitespace-pre-line">
              {safeData.heroDescription}
            </div>
          )}

          {/* BUTTON: Always Visible */}
          <div className="text-center">
            <motion.button
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-lg transition shadow-lg"
            >
              Click Here for Free Trial Class
            </motion.button>
          </div>
        </motion.div>

        {/* ===== 2. ABOUT ISEE ===== */}
        {(safeData.aboutHeading || safeData.aboutDescription || (safeData.aboutPoints && safeData.aboutPoints.length > 0) || safeData.aboutFooter) && (
          <motion.div 
            className="bg-[#F0F8FF] p-8 md:p-10 rounded-2xl shadow-xl mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            whileHover={{ y: -5, boxShadow: "0px 15px 30px rgba(0,0,0,0.1)" }}
          >
            {safeData.aboutHeading && (
              <h2 className="text-2xl font-semibold mb-4">{safeData.aboutHeading}</h2>
            )}

            {safeData.aboutDescription && (
              <div className="text-gray-700 text-lg leading-7 mb-4 whitespace-pre-line">
                {safeData.aboutDescription}
              </div>
            )}
          </motion.div>
        )}

        {/* ===== 3. PURPOSE (Staggered List) ===== */}
        {(safeData.purposeHeading || (safeData.purposePoints && safeData.purposePoints.length > 0)) && (
          <motion.div 
            className="bg-[#F0F8FF] p-8 md:p-10 rounded-2xl shadow-xl mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            whileHover={{ y: -5, boxShadow: "0px 15px 30px rgba(0,0,0,0.1)" }}
          >
            {safeData.purposeHeading && (
              <motion.h2 variants={fadeInUp} className="text-2xl font-semibold mb-4 text-blue-800">
                {safeData.purposeHeading}
              </motion.h2>
            )}

            {safeData.purposePoints && safeData.purposePoints.length > 0 && (
              <ul className="list-disc ml-6 text-lg text-gray-700 space-y-2">
                {safeData.purposePoints.map((pt, i) =>
                  pt ? (
                    <motion.li key={i} variants={fadeInUp}>
                      {pt}
                    </motion.li>
                  ) : null
                )}
              </ul>
            )}
          </motion.div>
        )}

        {/* ===== 4. TEST STRUCTURE & LEVELS ===== */}
        {(safeData.structureHeading || safeData.structureLevelIntro || safeData.structureSectionIntro) && (
          <motion.div 
            className="bg-[#F0F8FF] p-8 md:p-10 rounded-2xl shadow-lg mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            whileHover={{ y: -5, boxShadow: "0px 15px 30px rgba(0,0,0,0.1)" }}
          >
            {safeData.structureHeading && (
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                {safeData.structureHeading}
              </h2>
            )}

            {safeData.structureList && safeData.structureList.length > 0 && (
              <ul className="ml-6 space-y-4">
                {safeData.structureList.map((pt, i) => (
                  <motion.li key={i} variants={fadeInUp} className="text-gray-700">
                    {pt.title && (
                      <h3 className="text-lg font-semibold">{pt.title}</h3>
                    )}
                    {pt.description && (
                      <p className="text-base whitespace-pre-wrap text-lg leading-relaxed">
                        {pt.description}
                      </p>
                    )}
                  </motion.li>
                ))}
              </ul>
            )}
          </motion.div>
        )}

        {/* ===== 5. SECTION DETAILS (Measures) ===== */}
        {(safeData.measureHeading || (safeData.measureList && safeData.measureList.length > 0)) && (
          <motion.div 
            className="bg-[#F0F8FF] p-8 md:p-10 rounded-2xl shadow-xl mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            whileHover={{ y: -5, boxShadow: "0px 15px 30px rgba(0,0,0,0.1)" }}
          >
            {safeData.measureHeading && (
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                {safeData.measureHeading}
              </h2>
            )}
            {safeData.measureList && safeData.measureList.length > 0 && (
              <ul className="ml-6 space-y-4">
                {safeData.measureList?.map((pt, i) => (
                  <motion.li key={i} variants={fadeInUp} className="text-gray-700">
                    {pt.title && (
                      <h3 className="text-lg font-semibold" dangerouslySetInnerHTML={{ __html: pt.title }}></h3>
                    )}
                    {pt.description && (
                      <p className="text-lg whitespace-pre-wrap leading-relaxed">
                        {pt.description}
                      </p>
                    )}
                  </motion.li>
                ))}
              </ul>
            )}
          </motion.div>
        )}

        {/* TEST STRUCTURE IMAGE (Floating) */}
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-bold text-3xl text-center mb-2"
        >
          TEST STRUCTURE
        </motion.h2>
        
        <motion.div 
          className="flex justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img 
            src={iseeImg} 
            alt="Test Structure"
            animate={{ y: [0, -10, 0] }} // Floating Animation
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-xl shadow-lg"
          />
        </motion.div>

        {/* ===== 6. REGISTRATION ===== */}
        {(safeData.registrationHeading || safeData.registrationDescription) && (
          <motion.div 
            className="bg-[#F0F8FF] p-8 md:p-10 rounded-2xl shadow-xl mb-12 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            whileHover={{ y: -5, boxShadow: "0px 15px 30px rgba(0,0,0,0.1)" }}
          >
            {safeData.registrationHeading && (
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">
                {safeData.registrationHeading}
              </h2>
            )}

            {safeData.registrationDescription && (
              <div className="text-gray-700 leading-7 text-lg mb-6 whitespace-pre-line">
                {safeData.registrationDescription}
              </div>
            )}
          </motion.div>
        )}

        {/* ===== CTA - ALWAYS VISIBLE ===== */}
        <section className="mt-4 p-4 rounded-xl text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xl font-semibold mb-3"
          >
            So why wait? To avail a Free Trial Class for ISEE Test Prep Online
            Tutoring, 
          </motion.h3>

          <div className="flex justify-center gap-4">
            <motion.button
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg"
            >
              CLICK HERE
            </motion.button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ISEE;
