// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import actTableImg from "../../../assets/P2-ACT.jpg"; // Import useNavigate

// const ActTestPrep = () => {
//   // State management
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const navigate = useNavigate(); // For navigation

//   // API Call
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Backend URL
//         const response = await axios.get(
//           `${import.meta.env.VITE_APP_URL}api/user/act-test`
//         );

//         if (response.data) {
//           const apiData = response.data.data || response.data;
//           // Handle Array vs Object
//           if (Array.isArray(apiData) && apiData.length > 0) {
//             setData(apiData[0]);
//           } else {
//             setData(apiData);
//           }
//         } else {
//           setData(null);
//         }
//       } catch (err) {
//         console.error("Error fetching ACT data:", err);
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // 1. Loading State
//   if (loading) {
//     return (
//       <div className="w-full h-screen flex justify-center items-center bg-white">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
//       </div>
//     );
//   }

//   // 2. Error State
//   if (error) {
//     return (
//       <div className="w-full h-screen flex justify-center items-center bg-gray-50 text-red-500">
//         <p>Unable to load content. Please refresh or try again later.</p>
//       </div>
//     );
//   }

//   // Safe Data Object
//   const safeData = data || {};

//   return (
//     <div className="w-full  text-gray-800" id="act">
//       {/* ================= HERO SECTION ================= */}
//       <section className="pt-20 px-4 pb-16">
//         <div className="max-w-7xl mx-auto text-center">
//           {/* Title */}
//           <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-6 drop-shadow-sm uppercase">
//             {safeData.heroTitle}
//           </h1>

//           {/* Description */}
//           {safeData.heroDescription && (
//             <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-blue-500 max-w-4xl mx-auto mb-8">
//               <p className="text-lg md:text-xl text-gray-700 whitespace-pre-wrap leading-relaxed">
//                 {safeData.heroDescription}
//               </p>
//             </div>
//           )}

//           {/* Top CTA */}
//           <div className="mt-8">
//             <h3 className="text-xl font-semibold mb-4 text-blue-800">
//               So why wait? To avail a Free Trial Class for ACT Test Prep Online
//               {/* {safeData.herosubtitle} */}
//             </h3>
//             <button
//               onClick={() => navigate("/contact")} // Change route if needed
//               className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg transition transform hover:bg-blue-700"
//             >
//               CLICK HERE FOR FREE TRIAL
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* ================= ABOUT SECTION (With List) ================= */}
//       {(safeData.aboutHeading || safeData.aboutDescription) && (
//         <section className="py-16 px-4 ">
//           <div className="max-w-7xl mx-auto">
//             {/* Heading */}
//             {safeData.aboutHeading && (
//               <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 border-l-8 border-blue-600 pl-4">
//                 {safeData.aboutHeading}
//               </h2>
//             )}

//             {/* Description */}
//             {safeData.aboutDescription && (
//               <div className="text-lg text-gray-700 mb-10 whitespace-pre-wrap leading-relaxed">
//                 {safeData.aboutDescription}
//               </div>
//             )}

//             {/* Dynamic About List (Cards) */}
//             {safeData.aboutList && safeData.aboutList.length > 0 && (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {safeData.aboutList.map((item, index) => (
//                   <div
//                     key={index}
//                     className="bg-[#F0F8FF] p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
//                   >
//                     {item.title && (
//                       <h3 className="text-xl font-bold text-blue-800 mb-3 border-b pb-2">
//                         {item.title}
//                       </h3>
//                     )}
//                     {item.description && (
//                       <p className="text-gray-700 whitespace-pre-wrap text-lg leading-relaxed">
//                         {item.description}
//                       </p>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </section>
//       )}

// {(safeData?.additionalInfo || safeData.additionalInfoList) && (
//         <section className="py-4 px-4 ">
//           <div className="max-w-7xl mx-auto">
//             {/* Heading */}
//             {safeData?.additionalInfo && (
//               <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 border-l-8 border-blue-600 pl-4">
//                 {safeData?.additionalInfo}
//               </h2>
//             )}

    

//             {/* Dynamic About List (Cards) */}
//             {safeData.additionalInfoList && safeData.additionalInfoList.length > 0 && (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {safeData.additionalInfoList.map((item, index) => (
//                   <div
//                     key={index}
//                     className="bg-[#F0F8FF] p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
//                   >
//                     {item.title && (
//                       <h3 className="text-xl font-bold text-blue-800 mb-3 border-b pb-2">
//                         {item.title}
//                       </h3>
//                     )}
//                     {item.description && (
//                       <p className="text-gray-700 text-lg whitespace-pre-wrap leading-relaxed">
//                         {item.description}
//                       </p>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </section>
//       )}

//       <section className="py-12 px-4 ">
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
//             ACT TEST STRUCTURE
//           </h2>

//           <div className="flex justify-center">
//             {/* Image styling: Shadow, Rounded corners, aur Responsive width */}
//             <img
//               src={actTableImg}
//               alt="ACT 2025-26 Format Table"
//               className="w-full max-w-lg md:max-w-xl h-auto shadow-2xl rounded-lg border-2 border-gray-200 hover:scale-[1.02] transition-transform duration-300"
//             />
//           </div>
//         </div>
//       </section>

//       {/* ================= ACT SECTIONS (With List) ================= */}
//       {(safeData.actHeading ||
//         (safeData.actList && safeData.actList.length > 0)) && (
//         <section className="bg-gray-100 py-16 px-4">
//           <div className="max-w-7xl mx-auto">
//             {/* Heading */}
//             {safeData.actHeading && (
//               <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900">
//                 {safeData.actHeading}
//               </h2>
//             )}

//             {/* Dynamic ACT List (Cards) */}
//             {safeData.actList && safeData.actList.length > 0 ? (
//               <div className="space-y-6">
//                 {safeData.actList.map((item, index) => (
//                   <div
//                     key={index}
//                     className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-indigo-500"
//                   >
//                     {item.title && (
//                       <h3 className="text-2xl font-bold text-indigo-900 mb-4">
//                         {item.title}
//                       </h3>
//                     )}
//                     {item.description && (
//                       <div className="text-gray-700 whitespace-pre-wrap leading-relaxed text-lg" dangerouslySetInnerHTML={{__html:item?.description}}>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <p className="text-center text-gray-500 italic">
//                 No sections added yet.
//               </p>
//             )}
//           </div>
//         </section>
//       )}

//       {/* ================= BOTTOM CTA SECTION ================= */}
//       <section className=" py-8 bg-gray-100 px-4 text-center mt-auto">
//         <div className="max-w-4xl mx-auto ">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Start Your ACT Prep Today!
//           </h2>
//           <p className="mb-8 text-lg font-semibold ">
//            To know more or to take a Free Trial Online tutoring class for ACT or SAT test preparation tutoring, 
//           </p>
//           <div className="text-center mt-8">
//             <button
//               onClick={() => navigate("/contact")}
//               className="bg-blue-600 cursor-pointer text-white  px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
//             >
//               Click here for Free Trial Class
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ActTestPrep;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import actTableImg from "../../../assets/P2-ACT.jpg";
import { motion } from "framer-motion"; // Animation Library

const ActTestPrep = () => {
  // State management
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // API Call
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}api/user/act-test`
        );

        if (response.data) {
          const apiData = response.data.data || response.data;
          if (Array.isArray(apiData) && apiData.length > 0) {
            setData(apiData[0]);
          } else {
            setData(apiData);
          }
        } else {
          setData(null);
        }
      } catch (err) {
        console.error("Error fetching ACT data:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // --- Premium 3D Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const fadeInUp3D = {
    hidden: { opacity: 0, y: 60, rotateX: -15, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const cardHover3D = {
    scale: 1.03,
    rotateX: 4,
    rotateY: 2,
    y: -10,
    boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
    zIndex: 10,
    transition: { type: "spring", stiffness: 300 },
  };

  // 1. Loading State
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  // 2. Error State
  if (error) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-gray-50 text-red-500">
        <p>Unable to load content. Please refresh or try again later.</p>
      </div>
    );
  }

  // Safe Data Object
  const safeData = data || {};

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full text-gray-800"
      style={{ perspective: "1200px" }} // Adds 3D depth to the whole page
      id="act"
    >
      {/* ================= HERO SECTION ================= */}
      <motion.section 
        variants={fadeInUp3D}
        className="pt-20 px-4 pb-16"
      >
        <div className="max-w-7xl mx-auto text-center">
          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.5, z: -100 }}
            animate={{ opacity: 1, scale: 1, z: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-6 drop-shadow-sm uppercase"
          >
            {safeData.heroTitle}
          </motion.h1>

          {/* Description */}
          {safeData.heroDescription && (
            <motion.div 
              variants={fadeInUp3D}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-blue-500 max-w-4xl mx-auto mb-8"
            >
              <p className="text-lg md:text-xl text-gray-700 whitespace-pre-wrap leading-relaxed">
                {safeData.heroDescription}
              </p>
            </motion.div>
          )}

          {/* Top CTA */}
          <motion.div variants={fadeInUp3D} className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">
              So why wait? To avail a Free Trial Class for ACT Test Prep Online
            </h3>
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(37, 99, 235, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg transition transform"
            >
              CLICK HERE FOR FREE TRIAL
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* ================= ABOUT SECTION (With List) ================= */}
      {(safeData.aboutHeading || safeData.aboutDescription) && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            {safeData.aboutHeading && (
              <motion.h2 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 border-l-8 border-blue-600 pl-4"
              >
                {safeData.aboutHeading}
              </motion.h2>
            )}

            {/* Description */}
            {safeData.aboutDescription && (
              <motion.div 
                variants={fadeInUp3D}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-lg text-gray-700 mb-10 whitespace-pre-wrap leading-relaxed"
              >
                {safeData.aboutDescription}
              </motion.div>
            )}

            {/* Dynamic About List (Cards) */}
            {safeData.aboutList && safeData.aboutList.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {safeData.aboutList.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp3D}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={cardHover3D} // 3D Tilt Effect
                    className="bg-[#F0F8FF] p-6 rounded-xl border border-gray-200 shadow-sm transition"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {item.title && (
                      <h3 className="text-xl font-bold text-blue-800 mb-3 border-b pb-2">
                        {item.title}
                      </h3>
                    )}
                    {item.description && (
                      <p className="text-gray-700 whitespace-pre-wrap text-lg leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ================= ADDITIONAL INFO SECTION ================= */}
      {(safeData?.additionalInfo || safeData.additionalInfoList) && (
        <section className="py-4 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            {safeData?.additionalInfo && (
              <motion.h2 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 border-l-8 border-blue-600 pl-4"
              >
                {safeData?.additionalInfo}
              </motion.h2>
            )}

            {/* Dynamic Additional Info List (Cards) */}
            {safeData.additionalInfoList && safeData.additionalInfoList.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {safeData.additionalInfoList.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp3D}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={cardHover3D} // 3D Tilt Effect
                    className="bg-[#F0F8FF] p-6 rounded-xl border border-gray-200 shadow-sm transition"
                  >
                    {item.title && (
                      <h3 className="text-xl font-bold text-blue-800 mb-3 border-b pb-2">
                        {item.title}
                      </h3>
                    )}
                    {item.description && (
                      <p className="text-gray-700 text-lg whitespace-pre-wrap leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ================= IMAGE STRUCTURE SECTION ================= */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-12 px-4"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
            ACT TEST STRUCTURE
          </h2>

          <div className="flex justify-center">
            <motion.img
              whileHover={{ scale: 1.05, rotateZ: 1 }}
              src={actTableImg}
              alt="ACT 2025-26 Format Table"
              className="w-full max-w-lg md:max-w-xl h-auto shadow-2xl rounded-lg border-2 border-gray-200 transition-transform duration-300"
            />
          </div>
        </div>
      </motion.section>

      {/* ================= ACT SECTIONS (With List) ================= */}
      {(safeData.actHeading ||
        (safeData.actList && safeData.actList.length > 0)) && (
        <section className="bg-gray-100 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {safeData.actHeading && (
              <motion.h2 
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900"
              >
                {safeData.actHeading}
              </motion.h2>
            )}

            {safeData.actList && safeData.actList.length > 0 ? (
              <div className="space-y-6">
                {safeData.actList.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Alternate slide in
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    whileHover={cardHover3D}
                    transition={{ duration: 0.6 }}
                    className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-indigo-500"
                  >
                    {item.title && (
                      <h3 className="text-2xl font-bold text-indigo-900 mb-4">
                        {item.title}
                      </h3>
                    )}
                    {item.description && (
                      <div className="text-gray-700 whitespace-pre-wrap leading-relaxed text-lg" dangerouslySetInnerHTML={{__html:item?.description}}>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 italic">
                No sections added yet.
              </p>
            )}
          </div>
        </section>
      )}

      {/* ================= BOTTOM CTA SECTION ================= */}
      <motion.section 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-8 bg-gray-100 px-4 text-center mt-auto"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your ACT Prep Today!
          </h2>
          <p className="mb-8 text-lg font-semibold">
           To know more or to take a Free Trial Online tutoring class for ACT or SAT test preparation tutoring, 
          </p>
          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.1, skewX: -10 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate("/contact")}
              className="bg-blue-600 cursor-pointer text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-xl"
            >
              Click here for Free Trial Class
            </motion.button>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default ActTestPrep;