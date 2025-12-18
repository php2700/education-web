
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import bgImage from "../../../assets/Elaback.png"; 
// import { useNavigate } from "react-router-dom";


// const MathKangarooTestPrep = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const navigate = useNavigate();

//   // --- API Call ---
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_APP_URL}api/user/math-kangaroo-test`);
        
//         // Data Validation
//         if (response.data && response.data.data) {
//           setData(response.data.data);
//         } else {
//           setData(null);
//         }
//       } catch (err) {
//         console.error("Error fetching Math Kangaroo data:", err);
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // --- 1. Loading State ---
//   if (loading) {
//     return (
//       <div className="w-full h-screen flex justify-center items-center bg-white">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
//       </div>
//     );
//   }

//   // --- 2. Error State ---
//   if (error) {
//     return (
//       <div className="w-full h-screen flex justify-center items-center bg-gray-50 text-red-500">
//         <p>Unable to load content. Please try again later.</p>
//       </div>
//     );
//   }

//   // Safe Data Object
//   const safeData = data || {};

//   // --- 3. Main Content ---
//   return (
//     <div  
//         style={{ backgroundImage: `url(${bgImage})` }} 
//         className="w-full bg-white text-gray-800" 
//         id='kangaroo'
//     >

//       {/* HERO SECTION */}
//       {/* Background color aur Button hamesha rahenge */}
//       <section className=" pt-12 px-4">
//         <div className="max-w-7xl mx-auto ">
          
//           {/* Title: Sirf tab dikhega jab data ho */}
//           {safeData.heroTitle && (
//               <h1 className="text-4xl text-center md:text-5xl font-bold mb-6">
//                 {safeData.heroTitle}
//               </h1>
//           )}

//           {/* Description: Sirf tab dikhega jab data ho */}
//           {safeData.heroDescription && (
//               <p className="text-lg md:text-xl max-w-7xl mx-auto mb-8 whitespace-pre-wrap">
//                 {safeData.heroDescription}
//               </p>
//           )}

//          <section className="mt-4  p-4 rounded-xl text-center">
//             <h3 className="text-xl font-semibold mb-3">
//             So why wait? To avail a Free Trial Class for Math Kangaroo Test 
//             </h3>

//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={() => navigate("/contact")}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
//               >
//                 CLICK HERE
//               </button>
//             </div>
//           </section>
//         </div>
//       </section>

//       {/* TEST STRUCTURE */}
//       {(safeData.structureHeading || safeData.structureDescription) && (
//         <section className="py-6 px-4">
//             <div className="max-w-7xl mx-auto">
//             {safeData.structureHeading && (
//                 <h2 className="text-3xl font-bold mb-6">
//                     {safeData.structureHeading}
//                 </h2>
//             )}
            
//             {safeData.structureDescription && (
//                 <div className="text-lg mb-4 whitespace-pre-wrap">
//                     {safeData.structureDescription}
//                 </div>
//             )}
//             </div>
//         </section>
//       )}

//       {/* FEATURES */}
//       {(safeData.featuresHeading || (safeData.featuresList && safeData.featuresList.length > 0)) && (
//         <section className="bg-[#F0F8FF] py-16 px-4">
//             <div className="max-w-7xl mx-auto">
            
//             {safeData.featuresHeading && (
//                 <h2 className="text-3xl font-bold mb-6">
//                     {safeData.featuresHeading}
//                 </h2>
//             )}

//             {safeData.featuresList && safeData.featuresList.length > 0 && (
//                 <ul className="list-disc pl-6 space-y-3 text-lg">
//                     {safeData.featuresList.map((item, index) => (
//                         item ? <li key={index}>{item}</li> : null
//                     ))}
//                 </ul>
//             )}
//             </div>
//         </section>
//       )}

//       {/* GENERAL RULES */}
//       {(safeData.rulesHeading || (safeData.rulesList && safeData.rulesList.length > 0)) && (
//         <section className="py-16 px-4">
//             <div className="max-w-7xl mx-auto">
            
//             {safeData.rulesHeading && (
//                 <h2 className="text-3xl font-bold mb-6">
//                     {safeData.rulesHeading}
//                 </h2>
//             )}

//          {safeData?.rulesList && safeData.rulesList.length > 0 && (
//   <ul className="list-disc pl-6 space-y-2 text-lg">
//     {safeData.rulesList.map((item, index) => (
//       <li key={index}>
//         <div className="font-semibold">{item.type}</div>

//         {item.subpoints?.length > 0 && (
//           <ul className="list-circle pl-6 mt-1 space-y-1">
//             {item.subpoints.map((ele, i) => (
//               <li key={i}>{ele}</li>
//             ))}
//           </ul>
//         )}
//       </li>
//     ))}
//   </ul>
// )}

//             </div>
//         </section>
//       )}

//       {/* SCORING */}
//       {(safeData.scoringHeading || safeData.scoringDescription) && (
//         <section className="bg-[#F0F8FF] py-16 px-4">
//             <div className="max-w-7xl mx-auto">
            
//             {safeData.scoringHeading && (
//                 <h2 className="text-3xl font-bold mb-6">
//                     {safeData.scoringHeading}
//                 </h2>
//             )}

//             {safeData.scoringDescription && (
//                 <div className="text-lg mb-4 whitespace-pre-wrap">
//                     {safeData.scoringDescription}
//                 </div>
//             )}
//             </div>
//         </section>
//       )}
//     <section className="mt-4  p-4 rounded-xl text-center">
//             <h3 className="text-xl font-semibold mb-3">
//             So why wait? To avail a Free Trial Class for Math Kangaroo Test 
//             </h3>

//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={() => navigate("/contact")}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-lg transition"
//               >
//                 CLICK HERE
//               </button>
//             </div>
//           </section>
   

//     </div>
//   );
// };

// export default MathKangarooTestPrep;


import React, { useEffect, useState } from "react";
import axios from "axios";
import bgImage from "../../../assets/Elaback.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import Animation Library

const MathKangarooTestPrep = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // --- API Call (Same as before) ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}api/user/math-kangaroo-test`
        );

        if (response.data && response.data.data) {
          setData(response.data.data);
        } else {
          setData(null);
        }
      } catch (err) {
        console.error("Error fetching Math Kangaroo data:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // --- 3D Animation Variants ---
  // Ye settings page ko "Premium 3D" feel dengi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const item3D = {
    hidden: { opacity: 0, y: 50, rotateX: -10, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

  const hover3D = {
    scale: 1.02,
    rotateX: 2,
    rotateY: 2,
    boxShadow: "0px 20px 40px rgba(0,0,0,0.2)",
    transition: { duration: 0.3 },
  };

  // --- 1. Loading State ---
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  // --- 2. Error State ---
  if (error) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-gray-50 text-red-500">
        <p>Unable to load content. Please try again later.</p>
      </div>
    );
  }

  // Safe Data Object
  const safeData = data || {};

  // --- 3. Main Content ---
  return (
    <motion.div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="w-full bg-white text-gray-800 overflow-x-hidden perspective-1000" // perspective added for 3D
      id="kangaroo"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* HERO SECTION */}
      <motion.section 
        variants={item3D} 
        className="pt-12 px-4"
      >
        <div className="max-w-7xl mx-auto">
          {/* Title with 3D Pop */}
          {safeData.heroTitle && (
            <motion.h1
              initial={{ opacity: 0, z: -100 }}
              animate={{ opacity: 1, z: 0 }}
              transition={{ duration: 1, type: "spring" }}
              className="text-4xl text-center md:text-5xl font-bold mb-6 drop-shadow-lg"
            >
              {safeData.heroTitle}
            </motion.h1>
          )}

          {/* Description */}
          {safeData.heroDescription && (
            <motion.p 
              variants={item3D}
              className="text-lg md:text-xl max-w-7xl mx-auto mb-8 whitespace-pre-wrap"
            >
              {safeData.heroDescription}
            </motion.p>
          )}

          <motion.section 
            variants={item3D}
            whileHover={hover3D}
            className="mt-4 p-4 rounded-xl text-center bg-white/80 backdrop-blur-sm border border-gray-100 shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-3">
              So why wait? To avail a Free Trial Class for Math Kangaroo Test
            </h3>

            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(37, 99, 235, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
              >
                CLICK HERE
              </motion.button>
            </div>
          </motion.section>
        </div>
      </motion.section>

      {/* TEST STRUCTURE - 3D Card Style */}
      {(safeData.structureHeading || safeData.structureDescription) && (
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={item3D}
          className="py-6 px-4"
        >
          <motion.div 
            whileHover={hover3D}
            className="max-w-7xl mx-auto bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
          >
            {safeData.structureHeading && (
              <h2 className="text-3xl font-bold mb-6 text-blue-900">
                {safeData.structureHeading}
              </h2>
            )}

            {safeData.structureDescription && (
              <div className="text-lg mb-4 whitespace-pre-wrap">
                {safeData.structureDescription}
              </div>
            )}
          </motion.div>
        </motion.section>
      )}

      {/* FEATURES - Floating 3D Effect */}
      {(safeData.featuresHeading || (safeData.featuresList && safeData.featuresList.length > 0)) && (
        <motion.section 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#F0F8FF] py-16 px-4"
        >
          <motion.div 
            whileHover={{ scale: 1.01, translateY: -5 }}
            className="max-w-7xl mx-auto"
          >
            {safeData.featuresHeading && (
              <h2 className="text-3xl font-bold mb-6 text-blue-900 drop-shadow-md">
                {safeData.featuresHeading}
              </h2>
            )}

            {safeData.featuresList && safeData.featuresList.length > 0 && (
              <ul className="list-disc pl-6 space-y-3 text-lg">
                {safeData.featuresList.map((item, index) => (
                  item ? (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item}
                    </motion.li>
                  ) : null
                ))}
              </ul>
            )}
          </motion.div>
        </motion.section>
      )}

      {/* GENERAL RULES - 3D List Reveal */}
      {(safeData.rulesHeading || (safeData.rulesList && safeData.rulesList.length > 0)) && (
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={item3D}
          className="py-16 px-4"
        >
          <div className="max-w-7xl mx-auto">
            {safeData.rulesHeading && (
              <h2 className="text-3xl font-bold mb-6 text-blue-900">
                {safeData.rulesHeading}
              </h2>
            )}

            {safeData?.rulesList && safeData.rulesList.length > 0 && (
              <ul className="list-disc pl-6 space-y-2 text-lg">
                {safeData.rulesList.map((item, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ scale: 1.02, originX: 0, color: "#1e3a8a" }} // Text pops on hover
                    className="transition-colors"
                  >
                    <div className="font-semibold">{item.type}</div>

                    {item.subpoints?.length > 0 && (
                      <ul className="list-circle pl-6 mt-1 space-y-1">
                        {item.subpoints.map((ele, i) => (
                          <li key={i}>{ele}</li>
                        ))}
                      </ul>
                    )}
                  </motion.li>
                ))}
              </ul>
            )}
          </div>
        </motion.section>
      )}

      {/* SCORING - Final 3D Section */}
      {(safeData.scoringHeading || safeData.scoringDescription) && (
        <motion.section 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F0F8FF] py-16 px-4"
        >
          <motion.div 
             whileHover={hover3D}
             className="max-w-7xl mx-auto p-4"
          >
            {safeData.scoringHeading && (
              <h2 className="text-3xl font-bold mb-6 text-blue-900">
                {safeData.scoringHeading}
              </h2>
            )}

            {safeData.scoringDescription && (
              <div className="text-lg mb-4 whitespace-pre-wrap">
                {safeData.scoringDescription}
              </div>
            )}
          </motion.div>
        </motion.section>
      )}

      {/* Footer Call to Action - Bouncing 3D Effect */}
      <motion.section 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="mt-4 p-4 rounded-xl text-center pb-12"
      >
        <h3 className="text-xl font-semibold mb-3">
          So why wait? To avail a Free Trial Class for Math Kangaroo Test
        </h3>

        <div className="flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1, rotateZ: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate("/contact")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-lg transition shadow-2xl"
          >
            CLICK HERE
          </motion.button>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default MathKangarooTestPrep;