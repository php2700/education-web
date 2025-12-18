// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const STBPrep = () => {
//   // --- State Management ---
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const navigate = useNavigate();

//   // --- API Call ---
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // API Endpoint: /api/stb-test
//         const response = await axios.get(
//           `${import.meta.env.VITE_APP_URL}api/user/stb-test`
//         );

//         // Validation: Check if data exists
//         if (response.data && response.data.data) {
//           setData(response.data.data);
//         } else {
//           setData(null);
//         }
//       } catch (err) {
//         console.error("Error fetching STB data:", err);
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
//     <div className="w-full  text-gray-800" id="stb">
//       {/* HERO SECTION */}
//       {/* Background and Button always visible */}
//       <section className=" py-10 px-4">
//         <div className="max-w-7xl mx-auto ">
//           {/* Title: Visible only if data exists */}
//           {safeData.heroTitle && (
//             <h1 className="text-4xl text-center md:text-5xl font-bold mb-6">
//               {safeData.heroTitle}
//             </h1>
//           )}

//           {/* Description: Visible only if data exists */}
//           {safeData.heroDescription && (
//             <p className="text-lg md:text-xl max-w-7xl mx-auto mb-8 whitespace-pre-wrap">
//               {safeData.heroDescription}
//             </p>
//           )}

//           <section className="mt-4  p-4 rounded-xl text-center">
//             <h3 className="text-xl font-semibold mb-3">
//               Why not take a FREE TRIAL CLASS for STB Test online tutoring
//             </h3>

//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={() => navigate("/contact")}
//                 className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-lg font-semibold transition"
//               >
//                 CLICK HERE
//               </button>
//             </div>
//           </section>
//         </div>
//       </section>

//       {/* ABOUT STB */}
//       {/* Section renders only if content exists */}
//       {(safeData.aboutHeading || safeData.aboutDescription) && (
//         <section className="pt-4 px-4">
//           <div className="max-w-7xl mx-auto">
//             {safeData.aboutHeading && (
//               <h2 className="text-3xl font-bold mb-4 break-all">
//                 {safeData.aboutHeading}
//               </h2>
//             )}

//             {safeData.aboutDescription && (
//               <div
//                 className="text-lg mb-4 whitespace-pre-wrap"
//                 dangerouslySetInnerHTML={{ __html: safeData?.aboutDescription }}
//               ></div>
//             )}
//           </div>
//         </section>
//       )}
//       {safeData.stbUsedDescription && (
//         <section className="py-2 px-4">
//           <div className="max-w-7xl mx-auto">
//             <h2 className="text-3xl font-bold mb-6 ">
//               What is the STB Used For?
//             </h2>

//             {safeData.stbUsedDescription && (
//               <div className="text-lg mb-4 whitespace-pre-wrap ">
//                 {safeData.stbUsedDescription}
//               </div>
//             )}
//           </div>
//         </section>
//       )}

//       {safeData?.stbSubsetPoints?.length > 0 && (
//         <section className="py-2 px-4">
//           <div className="max-w-7xl mx-auto">
//             <h2 className="text-3xl font-bold mb-6 break-all">
//               What are the STB Subtests?
//             </h2>

//             <ul className="list-disc pl-6 space-y-2 text-lg">
//               {safeData.stbSubsetPoints.map((ele, index) => (
//                 <li key={index}>{ele}</li>
//               ))}
//             </ul>

//             {safeData.stbSubsetDescription && (
//               <p className="text-lg mt-4 whitespace-pre-wrap ">
//                 {safeData.stbSubsetDescription}
//               </p>
//             )}
//           </div>
//         </section>
//       )}

//       {/* STB SUBTESTS & TABLE SECTION */}
//       {/* Section renders if Heading, Subtests, Info, or Table exists */}
//       {(safeData.subtestHeading ||
//         (safeData.subtests && safeData.subtests.length > 0) ||
//         safeData.infoHeading ||
//         (safeData.timeTable && safeData.timeTable.length > 0)) && (
//         <section className="bg-[#F0F8FF] py-16 px-4">
//           <div className="max-w-7xl mx-auto">
//             <h1 className="text-4xl text-center font-bold mb-6">
//               What Material is on the STB Subtests?
//             </h1>
//             <p className="text-lg">
//               The following is a description of the four subtests that the
//               student will complete on the STB test:
//             </p>
//             {safeData.subtestHeading && (
//               <h2 className="text-3xl font-bold mb-6">
//                 {safeData.subtestHeading}
//               </h2>
//             )}

//             {/* Dynamic Subtests List */}
//             {safeData.subtests && safeData.subtests.length > 0 && (
//               <div>
//                 {safeData.subtests.map((subtest, index) => (
//                   <div key={index} className="mb-4">
//                     {subtest.title && (
//                       <h3 className="text-2xl font-semibold mb-3">
//                         {subtest.title}
//                       </h3>
//                     )}
//                     {subtest.content && (
//                       <p className="text-lg mb-4 whitespace-pre-wrap">
//                         {subtest.content}
//                       </p>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* IMPORTANT TEST INFORMATION */}
//             {safeData.infoHeading && (
//               <h3 className="text-2xl font-bold mb-3 mt-8">
//                 {safeData.infoHeading}
//               </h3>
//             )}

//             {safeData.infoDescription && (
//               <p className="text-lg mb-4 whitespace-pre-wrap">
//                 {safeData.infoDescription}
//               </p>
//             )}

//             {/* Dynamic Timing Table */}
//             {safeData.timeTable && safeData.timeTable.length > 0 && (
//               <div className="overflow-x-auto">
//                 <table className="w-full text-left border-collapse border border-gray-300 mb-6">
//                   <thead>
//                     <tr className="bg-blue-600 text-white">
//                       <th className="border border-gray-300 px-4 py-2">
//                         Subtest + Tutorial
//                       </th>
//                       <th className="border border-gray-300 px-4 py-2">
//                         5th/6th Graders: Time Allowed
//                       </th>
//                       <th className="border border-gray-300 px-4 py-2">
//                         7th Graders and Older: Time Allowed
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {safeData.timeTable.map((row, index) => (
//                       <tr
//                         key={index}
//                         className={index % 2 !== 0 ? "bg-gray-50" : ""}
//                       >
//                         <td className="border border-gray-300 px-4 py-2">
//                           {row.activity}
//                         </td>
//                         <td className="border border-gray-300 px-4 py-2">
//                           {row.time5th6th}
//                         </td>
//                         <td className="border border-gray-300 px-4 py-2">
//                           {row.time7thPlus}
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         </section>
//       )}

//       <section className="mt-4  p-4 rounded-xl text-center">
//         <h3 className="text-xl font-semibold mb-3">
//           Why not take a FREE TRIAL CLASS for STB Test online tutoring. 
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

// export default STBPrep;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Animation Import

const STBPrep = () => {
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
          `${import.meta.env.VITE_APP_URL}api/user/stb-test`
        );

        if (response.data && response.data.data) {
          setData(response.data.data);
        } else {
          setData(null);
        }
      } catch (err) {
        console.error("Error fetching STB data:", err);
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
    overflowX: "hidden",
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

  const button3D = {
    rest: { scale: 1, rotateX: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
    hover: {
      scale: 1.1,
      rotateX: 5,
      zIndex: 10,
      boxShadow: "0px 15px 30px rgba(37, 99, 235, 0.4)",
      transition: { type: "spring", stiffness: 300 },
    },
    tap: { scale: 0.95, rotateX: -5 },
  };

  const cardHover3D = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: {
      scale: 1.02,
      rotateY: 2,
      y: -5,
      boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
      zIndex: 1,
      transition: { duration: 0.3 },
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
      id="stb"
    >
      {/* HERO SECTION */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title with 3D Pop */}
          {safeData.heroTitle && (
            <motion.h1
              initial={{ opacity: 0, z: -100, rotateX: 20 }}
              animate={{ opacity: 1, z: 0, rotateX: 0 }}
              transition={{ duration: 1, type: "spring" }}
              className="text-4xl text-center md:text-5xl font-bold mb-6 drop-shadow-lg"
            >
              {safeData.heroTitle}
            </motion.h1>
          )}

          {/* Description */}
          {safeData.heroDescription && (
            <motion.p
              variants={fadeInUp3D}
              className="text-lg md:text-xl max-w-7xl mx-auto mb-8 whitespace-pre-wrap"
            >
              {safeData.heroDescription}
            </motion.p>
          )}

          <motion.section
            variants={fadeInUp3D}
            className="mt-4 p-4 rounded-xl text-center"
          >
            <h3 className="text-xl font-semibold mb-3">
              Why not take a FREE TRIAL CLASS for STB Test online tutoring
            </h3>

            <div className="flex justify-center gap-4">
              <motion.button
                variants={button3D}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                onClick={() => navigate("/contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-lg font-semibold transition"
              >
                CLICK HERE
              </motion.button>
            </div>
          </motion.section>
        </div>
      </section>

      {/* ABOUT STB */}
      {(safeData.aboutHeading || safeData.aboutDescription) && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp3D}
          className="pt-4 px-4"
        >
          <div className="max-w-7xl mx-auto">
            {safeData.aboutHeading && (
              <h2 className="text-3xl font-bold mb-4 break-all">
                {safeData.aboutHeading}
              </h2>
            )}

            {safeData.aboutDescription && (
              <div
                className="text-lg mb-4 whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: safeData?.aboutDescription }}
              ></div>
            )}
          </div>
        </motion.section>
      )}

      {/* STB USED FOR */}
      {safeData.stbUsedDescription && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp3D}
          className="py-2 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              What is the STB Used For?
            </h2>

            <div className="text-lg mb-4 whitespace-pre-wrap">
              {safeData.stbUsedDescription}
            </div>
          </div>
        </motion.section>
      )}

      {/* STB SUBSETS LIST */}
      {safeData?.stbSubsetPoints?.length > 0 && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp3D}
          className="py-2 px-4"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 break-all">
              What are the STB Subtests?
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-lg">
              {safeData.stbSubsetPoints.map((ele, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {ele}
                </motion.li>
              ))}
            </ul>

            {safeData.stbSubsetDescription && (
              <p className="text-lg mt-4 whitespace-pre-wrap">
                {safeData.stbSubsetDescription}
              </p>
            )}
          </div>
        </motion.section>
      )}

      {/* STB SUBTESTS & TABLE SECTION */}
      {(safeData.subtestHeading ||
        (safeData.subtests && safeData.subtests.length > 0) ||
        safeData.infoHeading ||
        (safeData.timeTable && safeData.timeTable.length > 0)) && (
        <section className="bg-[#F0F8FF] py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl text-center font-bold mb-6"
            >
              What Material is on the STB Subtests?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg"
            >
              The following is a description of the four subtests that the
              student will complete on the STB test:
            </motion.p>
            {safeData.subtestHeading && (
              <h2 className="text-3xl font-bold mb-6">
                {safeData.subtestHeading}
              </h2>
            )}

            {/* Dynamic Subtests List - 3D Cards */}
            {safeData.subtests && safeData.subtests.length > 0 && (
              <div className="perspective-1000">
                {safeData.subtests.map((subtest, index) => (
                  <motion.div
                    key={index}
                    variants={cardHover3D}
                    initial="hidden"
                    whileInView="visible"
                    whileHover="hover"
                    viewport={{ once: true }}
                    className="mb-4 bg-white p-4 rounded-lg shadow-sm"
                  >
                    {subtest.title && (
                      <h3 className="text-2xl font-semibold mb-3 text-blue-900">
                        {subtest.title}
                      </h3>
                    )}
                    {subtest.content && (
                      <p className="text-lg mb-4 whitespace-pre-wrap">
                        {subtest.content}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            )}

            {/* IMPORTANT TEST INFORMATION */}
            {safeData.infoHeading && (
              <motion.h3
                variants={fadeInUp3D}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-2xl font-bold mb-3 mt-8"
              >
                {safeData.infoHeading}
              </motion.h3>
            )}

            {safeData.infoDescription && (
              <motion.p
                variants={fadeInUp3D}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-lg mb-4 whitespace-pre-wrap"
              >
                {safeData.infoDescription}
              </motion.p>
            )}

            {/* Dynamic Timing Table - 3D Tilt */}
            {safeData.timeTable && safeData.timeTable.length > 0 && (
              <motion.div
                initial={{ rotateX: 20, opacity: 0 }}
                whileInView={{ rotateX: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="overflow-x-auto shadow-xl rounded-lg mt-6"
                style={{ transformStyle: "preserve-3d" }}
              >
                <table className="w-full text-left border-collapse border border-gray-300 mb-0 bg-white">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="border border-gray-300 px-4 py-2">
                        Subtest + Tutorial
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        5th/6th Graders: Time Allowed
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        7th Graders and Older: Time Allowed
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {safeData.timeTable.map((row, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.01, backgroundColor: "#eff6ff" }}
                        className={index % 2 !== 0 ? "bg-gray-50" : ""}
                      >
                        <td className="border border-gray-300 px-4 py-2">
                          {row.activity}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {row.time5th6th}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {row.time7thPlus}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <motion.section
        initial={{ opacity: 0, y: 50, rotateX: 10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-4 p-4 rounded-xl text-center pb-12"
      >
        <h3 className="text-xl font-semibold mb-3">
          Why not take a FREE TRIAL CLASS for STB Test online tutoring.
        </h3>

        <div className="flex justify-center gap-4">
          <motion.button
            variants={button3D}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
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

export default STBPrep;