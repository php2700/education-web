// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const AccuplacerPrep = () => {
//   // --- State Management ---
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const navigate = useNavigate();

//   // --- API Call ---
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // API Endpoint based on router: /api/accuplacer-test
//         const response = await axios.get(
//           `${import.meta.env.VITE_APP_URL}api/user/accuplacer-test`
//         );

//         // Validation: Check if data exists in response
//         if (response.data && response.data.data) {
//           setData(response.data.data);
//         } else {
//           setData(null);
//         }
//       } catch (err) {
//         console.error("Error fetching Accuplacer data:", err);
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
//     <div className="w-full text-gray-800" id="lacer">
//       {/* HERO SECTION */}
//       {/* Background and Button always visible */}
//       <section className=" pt-20 px-4">
//         <div className="max-w-7xl mx-auto ">
//           {/* Title: Visible only if data exists */}
//           {safeData.heroTitle && (
//             <h1 className="text-4xl text-center md:text-5xl font-bold mb-6">
//               {safeData.heroTitle}
//             </h1>
//           )}

//           {/* Description: Visible only if data exists */}
//           {safeData.heroDescription && (
//             <p className="text-lg md:text-xl  mx-auto mb-8 whitespace-pre-wrap">
//               {safeData.heroDescription}
//             </p>
//           )}

//           <div className="text-center font-semibold text-lg mb-2">
//             So why wait? To avail a Free Trial Class for Accuplacer Test Prep
//             Online Tutoring, &nbsp;
//             <span
//               onClick={() => navigate("/contact")}
//               className="mt-4  cursor-pointer  py-3 font-semibold text-lg underline text-blue-600  transition"
//             >
//               CLICK HERE
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* ABOUT ACCUPLACER */}
//       {/* Section renders only if content exists */}
//       {(safeData.aboutHeading || safeData.aboutDescription) && (
//         <section className="py-8 px-4">
//           <div className="max-w-7xl mx-auto">
//             {safeData.aboutHeading && (
//               <h2 className="text-3xl font-bold mb-2">
//                 {safeData.aboutHeading}
//               </h2>
//             )}

//             {safeData.aboutDescription && (
//               <div className="text-lg mb-4 whitespace-pre-wrap">
//                 {safeData.aboutDescription}
//               </div>
//             )}
//           </div>
//         </section>
//       )}
//       {(safeData.whatsHeading || safeData.whatsDescription) && (
//         <section className="py-8 px-4">
//           <div className="max-w-7xl mx-auto">
//             {safeData.whatsHeading && (
//               <h2 className="text-3xl font-bold mb-2">
//                 {safeData.whatsHeading}
//               </h2>
//             )}

//             {safeData.whatsDescription && (
//               <div className="text-lg mb-4 whitespace-pre-wrap">
//                 {safeData.whatsDescription}
//               </div>
//             )}
//           </div>
//         </section>
//       )}

//       {/* TEST CONTENT (Dynamic List) */}
//       {/* Section renders only if content exists */}
//       {(safeData.testSectionHeading ||
//         (safeData.testList && safeData.testList.length > 0)) && (
//         <section className=" py-16 px-4">
//           <div className="max-w-7xl mx-auto">
//             {/* Section Heading */}
//             <h2 className="text-4xl md:text-5xl text-center font-extrabold mb-12">
//               Inside the Tests
//             </h2>

//             {/* List Items */}
//             {safeData.testList && safeData.testList.length > 0 && (
//               <div className="flex flex-col gap-8">
//                 {safeData.testList.map((test, index) => (
//                   <div
//                     key={index}
//                     className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 border-l-4 border-blue-700 w-full"
//                   >
//                     {test.title && (
//                       <h3 className="text-2xl font-bold text-blue-700 mb-3">
//                         {test.title}
//                       </h3>
//                     )}
//                     {test.description && (
//                       <p className="text-gray-700 text-base md:text-lg whitespace-pre-wrap leading-relaxed">
//                         {test.description}
//                       </p>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </section>
//       )}

//       {(safeData.writePlacerDescription ||
//         (safeData.writePlacerList && safeData.writePlacerList.length > 0)) && (
//         <section className="bg-gradient-to-r from-blue-50 to-white py-16 px-4">
//           <div className="max-w-7xl mx-auto">
//             {/* Section Heading */}
//             <h2 className="text-4xl md:text-5xl text-center font-extrabold  mb-12">
//               WritePlacer Essay
//             </h2>

//             {/* Description */}
//             {safeData.writePlacerDescription && (
//               <div className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed px-4 md:px-0">
//                 {safeData.writePlacerDescription}
//               </div>
//             )}

//             {/* List Items */}
//             {safeData.writePlacerList &&
//               safeData.writePlacerList.length > 0 && (
//                 <div className="grid md:grid-cols-2 gap-8">
//                   {safeData.writePlacerList.map((test, index) => (
//                     <div
//                       key={index}
//                       className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 border-l-4 border-blue-600"
//                     >
//                       {test.title && (
//                         <div className="text-2xl font-bold text-blue-700 mb-3">
//                           {test.title}
//                         </div>
//                       )}
//                       {test.description && (
//                         <p className="text-gray-700 text-base md:text-lg whitespace-pre-wrap leading-relaxed">
//                           {test.description}
//                         </p>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               )}
//           </div>
//         </section>
//       )}

//       {(safeData.accuplacerDescription ||
//         (safeData.accuplacerList && safeData.accuplacerList.length > 0)) && (
//         <section className="bg-gradient-to-r from-blue-50 to-white py-16 px-4">
//           <div className="max-w-7xl mx-auto">
//             {/* Section Heading */}
//             <h2 className="text-4xl md:text-5xl text-center font-extrabold  mb-12">
//               ACCUPLACER for English Language Learners
//             </h2>

//             {/* Description */}
//             {safeData.accuplacerDescription && (
//               <div className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed px-4 md:px-0">
//                 {safeData.accuplacerDescription}
//               </div>
//             )}

//             {/* List Items */}
//             {safeData.accuplacerList && safeData.accuplacerList?.length > 0 && (
//               <div className="grid md:grid-cols-2 gap-8">
//                 {safeData.accuplacerList?.map((test, index) => (
//                   <div
//                     key={index}
//                     className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 border-l-4 border-blue-600"
//                   >
//                     {test.title && (
//                       <div className="text-2xl font-bold text-blue-700 mb-3">
//                         {test.title}
//                       </div>
//                     )}
//                     {test.description && (
//                       <p className="text-gray-700 text-base md:text-lg whitespace-pre-wrap leading-relaxed">
//                         {test.description}
//                       </p>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </section>
//       )}

//       <section className="mt-4  p-4 rounded-xl text-center">
//         <h3 className="text-xl font-semibold mb-3">
//           So why wait? To avail a Free Trial Class for Accuplacer Test Prep
//           Online Tutoring
//         </h3>

//         <div className="flex justify-center gap-4">
//           <button
//             onClick={() => navigate("/contact")}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-lg transition"
//           >
//             CLICK HERE
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AccuplacerPrep;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion"; // Animation Import

const AccuplacerPrep = () => {
  // --- State Management ---
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // --- API Call ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}api/user/accuplacer-test`
        );

        if (response.data && response.data.data) {
          setData(response.data.data);
        } else {
          setData(null);
        }
      } catch (err) {
        console.error("Error fetching Accuplacer data:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // --- Premium 3D Variants ---
  const pagePerspective = {
    perspective: "1200px",
    overflowX: "hidden", // Prevents scrollbar during rotations
  };

  const fadeInUp3D = {
    hidden: { opacity: 0, y: 60, rotateX: -15, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8,
      },
    },
  };

  const cardHover3D = {
    rest: { scale: 1, rotateX: 0, rotateY: 0, z: 0 },
    hover: {
      scale: 1.02,
      rotateX: 5,
      rotateY: 2,
      y: -5,
      zIndex: 10,
      boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: { type: "spring", stiffness: 300 },
    },
  };

  const containerStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
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
      initial="hidden"
      animate="visible"
      style={pagePerspective}
      className="w-full text-gray-800"
      id="lacer"
    >
      {/* HERO SECTION */}
      <section className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title with 3D Pop */}
          {safeData.heroTitle && (
            <motion.h1
              initial={{ opacity: 0, z: -100, rotateX: 20 }}
              animate={{ opacity: 1, z: 0, rotateX: 0 }}
              transition={{ duration: 1, type: "spring" }}
              className="text-4xl text-center md:text-5xl font-bold mb-6 drop-shadow-md"
            >
              {safeData.heroTitle}
            </motion.h1>
          )}

          {/* Description */}
          {safeData.heroDescription && (
            <motion.p
              variants={fadeInUp3D}
              className="text-lg md:text-xl mx-auto mb-8 whitespace-pre-wrap"
            >
              {safeData.heroDescription}
            </motion.p>
          )}

          <motion.div
            variants={fadeInUp3D}
            className="text-center font-semibold text-lg mb-2"
          >
            So why wait? To avail a Free Trial Class for Accuplacer Test Prep
            Online Tutoring, &nbsp;
            <motion.span
              whileHover={{ scale: 1.1, color: "#1d4ed8" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact")}
              className="mt-4 cursor-pointer py-3 font-semibold text-lg underline text-blue-600 transition inline-block"
            >
              CLICK HERE
            </motion.span>
          </motion.div>
        </div>
      </section>

      {/* ABOUT ACCUPLACER */}
      {(safeData.aboutHeading || safeData.aboutDescription) && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp3D}
          className="py-8 px-4"
        >
          <div className="max-w-7xl mx-auto">
            {safeData.aboutHeading && (
              <h2 className="text-3xl font-bold mb-2">
                {safeData.aboutHeading}
              </h2>
            )}

            {safeData.aboutDescription && (
              <div className="text-lg mb-4 whitespace-pre-wrap">
                {safeData.aboutDescription}
              </div>
            )}
          </div>
        </motion.section>
      )}

      {(safeData.whatsHeading || safeData.whatsDescription) && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp3D}
          className="py-8 px-4"
        >
          <div className="max-w-7xl mx-auto">
            {safeData.whatsHeading && (
              <h2 className="text-3xl font-bold mb-2">
                {safeData.whatsHeading}
              </h2>
            )}

            {safeData.whatsDescription && (
              <div className="text-lg mb-4 whitespace-pre-wrap">
                {safeData.whatsDescription}
              </div>
            )}
          </div>
        </motion.section>
      )}

      {/* TEST CONTENT (Dynamic List) - 3D Cards */}
      {(safeData.testSectionHeading ||
        (safeData.testList && safeData.testList.length > 0)) && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl text-center font-extrabold mb-12"
            >
              Inside the Tests
            </motion.h2>

            {safeData.testList && safeData.testList.length > 0 && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={containerStagger}
                className="flex flex-col gap-8"
              >
                {safeData.testList.map((test, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp3D}
                    whileHover={cardHover3D} // 3D Tilt Effect
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 border-l-4 border-blue-700 w-full"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {test.title && (
                      <h3 className="text-2xl font-bold text-blue-700 mb-3">
                        {test.title}
                      </h3>
                    )}
                    {test.description && (
                      <p className="text-gray-700 text-base md:text-lg whitespace-pre-wrap leading-relaxed">
                        {test.description}
                      </p>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* WritePlacer Essay - Grid 3D */}
      {(safeData.writePlacerDescription ||
        (safeData.writePlacerList && safeData.writePlacerList.length > 0)) && (
        <section className="bg-gradient-to-r from-blue-50 to-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl text-center font-extrabold mb-12"
            >
              WritePlacer Essay
            </motion.h2>

            {safeData.writePlacerDescription && (
              <motion.div
                variants={fadeInUp3D}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed px-4 md:px-0"
              >
                {safeData.writePlacerDescription}
              </motion.div>
            )}

            {safeData.writePlacerList &&
              safeData.writePlacerList.length > 0 && (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={containerStagger}
                  className="grid md:grid-cols-2 gap-8"
                >
                  {safeData.writePlacerList.map((test, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp3D}
                      whileHover={cardHover3D} // 3D Hover
                      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 border-l-4 border-blue-600"
                    >
                      {test.title && (
                        <div className="text-2xl font-bold text-blue-700 mb-3">
                          {test.title}
                        </div>
                      )}
                      {test.description && (
                        <p className="text-gray-700 text-base md:text-lg whitespace-pre-wrap leading-relaxed">
                          {test.description}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              )}
          </div>
        </section>
      )}

      {/* ACCUPLACER for ELL - Grid 3D */}
      {(safeData.accuplacerDescription ||
        (safeData.accuplacerList && safeData.accuplacerList.length > 0)) && (
        <section className="bg-gradient-to-r from-blue-50 to-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl text-center font-extrabold mb-12"
            >
              ACCUPLACER for English Language Learners
            </motion.h2>

            {safeData.accuplacerDescription && (
              <motion.div
                variants={fadeInUp3D}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed px-4 md:px-0"
              >
                {safeData.accuplacerDescription}
              </motion.div>
            )}

            {safeData.accuplacerList && safeData.accuplacerList?.length > 0 && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerStagger}
                className="grid md:grid-cols-2 gap-8"
              >
                {safeData.accuplacerList?.map((test, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp3D}
                    whileHover={cardHover3D} // 3D Hover
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 border-l-4 border-blue-600"
                  >
                    {test.title && (
                      <div className="text-2xl font-bold text-blue-700 mb-3">
                        {test.title}
                      </div>
                    )}
                    {test.description && (
                      <p className="text-gray-700 text-base md:text-lg whitespace-pre-wrap leading-relaxed">
                        {test.description}
                      </p>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-4 p-4 rounded-xl text-center pb-12"
      >
        <h3 className="text-xl font-semibold mb-3">
          So why wait? To avail a Free Trial Class for Accuplacer Test Prep
          Online Tutoring
        </h3>

        <div className="flex justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1, rotateX: 5, boxShadow: "0px 10px 20px rgba(37, 99, 235, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-lg transition shadow-xl"
          >
            CLICK HERE
          </motion.button>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default AccuplacerPrep;