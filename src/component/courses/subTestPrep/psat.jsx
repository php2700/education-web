// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import backgroundImage from "../../../assets/math-bg.png";
// import { useNavigate } from "react-router-dom";

// const PsatTestPrep = () => {
//   // --- State Management ---
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const navigate = useNavigate();

//   // --- API Call ---
//   useEffect(() => {
//     const fetchPsatData = async () => {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_APP_URL}api/user/psat-test`
//         );

//         // Agar data hai toh set karo, nahi toh null
//         if (response.data && response.data.data) {
//           setData(response.data.data);
//         } else {
//           setData(null);
//         }
//       } catch (err) {
//         console.error("Error fetching PSAT data:", err);
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPsatData();
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

//   // --- 3. Empty Data Handling (Agar Admin ne sab delete kar diya hai) ---
//   // Agar data null hai, toh kuch mat dikhao (Blank Page return karo ya Message)
//   if (!data) {
//     return null; // Ya return <div className="text-center py-20">No data available</div>;
//   }

//   // --- 4. Main Content ---
//   return (
//     <div
//       className="w-full bg-[#F0F8FF] py-12 px-4 md:px-16"
//       id="psat"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "contain",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* ===== HEADER ===== */}
//         {/* Sirf tab dikhega agar heroTitle ya subtitle admin me dala ho */}
//         {(data.heroTitle || data.heroSubtitle) && (
//           <div className=" mb-10">
//             {data.heroTitle && (
//               <h1 className="text-3xl text-center md:text-5xl font-bold text-gray-800 mb-4">
//                 {data.heroTitle}
//               </h1>
//             )}
//             {data.heroSubtitle && (
//               <p className="text-gray-600 text-lg  mx-auto">
//                 {data.heroSubtitle}
//               </p>
//             )}
//           </div>
//         )}
//         <div className="text-center font-semibold text-lg mb-2">
//           So why wait? To avail a Free Trial Class for PSAT Test Prep Online
//           Tutoring,
//           <span
//             onClick={() => navigate("/contact")}
//             className="mt-4  cursor-pointer  py-3 font-semibold text-lg underline text-blue-600  transition"
//           >
//             CLICK HERE
//           </span>
//         </div>
//         {/* ===== MAIN CONTENT ===== */}
//         <div className=" items-center">
//           {/* LEFT CONTENT (Description) */}
//           <div className="text-left space-y-4">
//             <div className="text-3xl font-bold  text-gray-800 ">
//               ALL ABOUT PSAT
//             </div>

//             {data.heroDescription && (
//               <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap ">
//                 {data.heroDescription}
//               </div>
//             )}

//             {/* <p className="text-gray-700 leading-relaxed font-semibold">
//               Prepare with the best. Boost your confidence. Achieve higher
//               scores.
//             </p> */}
//             {/* <div className="text-center">
//               <button
//                 onClick={() => navigate("/contact")}
//                 className="mt-4 bg-blue-600 text-white px-6 py-3 font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700 transition"
//               >
//                 Click here for Free Trial Class
//               </button>
//             </div> */}
//           </div>
//           {/* RIGHT CARD (Features) */}
//           {/* Agar features ki length 0 se zyada hai tabhi ye box dikhega */}
//           {/* {data.features &&
//             data.features.length > 0 &&
//             data.features[0] !== "" && (
//               <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
//                 <h3 className="text-2xl font-bold mb-4 text-gray-800">
//                   Why Choose GGES for PSAT?
//                 </h3>

//                 <ul className="space-y-3 text-gray-700 break-all">
//                   {data.features.map((feature, index) =>
//                     feature ? (
//                       <li
//                         key={index}
//                         className="flex items-center gap-2 break-all"
//                       >
//                         <span>✅</span>
//                         {feature}
//                       </li>
//                     ) : null
//                   )}
//                 </ul>
//               </div>
//             )} */}
//         </div>

//         {/* ===== ALL ABOUT PSAT SECTION ===== */}
//         {/* Ye pura section tabhi dikhega agar heading, description ya table data ho */}
//         {(data.aboutHeading ||
//           data.aboutDescription ||
//           (data.tableData && data.tableData.length > 0)) && (
//           <div className="mt-16 bg-[#F0F8FF] p-8 rounded-xl shadow-inner">
//             {data.aboutHeading && (
//               <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
//                 {data.aboutHeading}
//               </h2>
//             )}

//             {data.aboutDescription && (
//               <p className="text-gray-700 mb-8  mx-auto whitespace-pre-wrap text-lg">
//                 {data.aboutDescription}
//               </p>
//             )}

//             <h3 className="text-2xl font-bold mb-4  text-gray-800">
//               PSAT TEST STRUCTURE
//             </h3>

//             {data.tableData?.length > 0 && data.tableData[0].section !== "" && (
//               <table className="w-full table-fixed border border-gray-300 text-left mb-10">
//                 <thead className="bg-blue-600 text-white">
//                   <tr>
//                     <th className="w-1/3 p-3 border">Section</th>
//                     <th className="w-1/3 p-3 border">Length (minutes)</th>
//                     <th className="w-1/3 p-3 border">
//                       Number of Questions / Tasks
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {data.tableData.map((row, index) => (
//                     <tr
//                       key={index}
//                       className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
//                     >
//                       <td className="p-3 border font-semibold">
//                         {row.section}
//                       </td>
//                       <td className="p-3 border">{row.time}</td>
//                       <td className="p-3 border">{row.modules}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             )}

//             <h3 className="text-2xl font-bold my-4  text-gray-800">
//               EXAM PERIOD
//             </h3>

//             {data.examPeriod?.length > 0 &&
//               data.examPeriod[0].section !== "" && (
//                 <table className="w-full table-fixed border border-gray-300 text-left">
//                   <thead className="bg-blue-600 text-white">
//                     <tr>
//                       <th className="w-1/3 p-3 border">Grade Level</th>
//                       <th className="w-1/3 p-3 border">Season</th>
//                       <th className="w-1/3 p-3 border">Exam</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {data.examPeriod.map((row, index) => (
//                       <tr
//                         key={index}
//                         className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
//                       >
//                         <td className="p-3 border font-semibold">
//                           {row.section}
//                         </td>
//                         <td className="p-3 border">{row.time}</td>
//                         <td className="p-3 border">{row.modules}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               )}

//             {/* Footer Note */}
//             {/* {data.tableFooter && (
//               <p className="text-sm text-gray-500 mt-4 text-center italic">
//                 {data.tableFooter}
//               </p>
//             )} */}

//             {/* CTA AGAIN */}
//             <div className="text-center mt-10">
//               <button
//                 onClick={() => navigate("/contact")}
//                 className="bg-blue-600 text-white  px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
//               >
//                 Click here for Free Trial Class
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PsatTestPrep;


import React, { useEffect, useState } from "react";
import axios from "axios";
import backgroundImage from "../../../assets/math-bg.png";
import { useNavigate } from "react-router-dom";

// 1. Framer Motion Import
import { motion } from "framer-motion";

const PsatTestPrep = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPsatData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}api/user/psat-test`
        );

        if (response.data && response.data.data) {
          setData(response.data.data);
        } else {
          setData(null);
        }
      } catch (err) {
        console.error("Error fetching PSAT data:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPsatData();
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-gray-50 text-red-500">
        <p>Unable to load content. Please try again later.</p>
      </div>
    );
  }

  if (!data) return null;

  // 🔥 Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <div
      className="w-full bg-[#F0F8FF] py-12 px-4 md:px-16"
      id="psat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* ===== HEADER ===== */}
        {(data.heroTitle || data.heroSubtitle) && (
          <motion.div 
            className="mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {data.heroTitle && (
              <motion.h1 variants={fadeInUp} className="text-3xl text-center md:text-5xl font-bold text-gray-800 mb-4">
                {data.heroTitle}
              </motion.h1>
            )}
            {data.heroSubtitle && (
              <motion.p variants={fadeInUp} className="text-gray-600 text-lg mx-auto text-center">
                {data.heroSubtitle}
              </motion.p>
            )}
          </motion.div>
        )}

        <motion.div 
          className="text-center font-semibold text-lg mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          So why wait? To avail a Free Trial Class for PSAT Test Prep Online
          Tutoring,
          <motion.span
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.1, color: "#2563EB" }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 cursor-pointer py-3 font-semibold text-lg underline text-blue-600 transition inline-block"
          >
            CLICK HERE
          </motion.span>
        </motion.div>

        {/* ===== MAIN CONTENT ===== */}
        <motion.div 
          className="items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="text-left space-y-4">
            <div className="text-3xl font-bold text-gray-800">
              ALL ABOUT PSAT
            </div>

            {data.heroDescription && (
              <div className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
                {data.heroDescription}
              </div>
            )}
          </div>
        </motion.div>

        {/* ===== ALL ABOUT PSAT SECTION (3D Hover Effect) ===== */}
        {(data.aboutHeading || data.aboutDescription || (data.tableData && data.tableData.length > 0)) && (
          <motion.div 
            className="mt-16 bg-[#F0F8FF] p-8 rounded-xl shadow-inner border border-blue-100"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -5, 
              boxShadow: "0px 20px 40px -10px rgba(37, 99, 235, 0.2)" 
            }}
          >
            {data.aboutHeading && (
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
                {data.aboutHeading}
              </h2>
            )}

            {data.aboutDescription && (
              <p className="text-gray-700 mb-8 mx-auto whitespace-pre-wrap text-lg">
                {data.aboutDescription}
              </p>
            )}

            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              PSAT TEST STRUCTURE
            </h3>

            {/* Table 1 - Staggered Rows */}
            {data.tableData?.length > 0 && data.tableData[0].section !== "" && (
              <div className="overflow-x-auto rounded-lg shadow-sm">
                <table className="w-full table-fixed border border-gray-300 text-left mb-10">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="w-1/3 p-3 border">Section</th>
                      <th className="w-1/3 p-3 border">Length (minutes)</th>
                      <th className="w-1/3 p-3 border">Number of Questions / Tasks</th>
                    </tr>
                  </thead>
                  <motion.tbody
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                  >
                    {data.tableData.map((row, index) => (
                      <motion.tr
                        key={index}
                        variants={fadeInUp}
                        className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"} hover:bg-blue-50 transition-colors`}
                      >
                        <td className="p-3 border font-semibold">{row.section}</td>
                        <td className="p-3 border">{row.time}</td>
                        <td className="p-3 border">{row.modules}</td>
                      </motion.tr>
                    ))}
                  </motion.tbody>
                </table>
              </div>
            )}

            <h3 className="text-2xl font-bold my-4 text-gray-800">
              EXAM PERIOD
            </h3>

            {/* Table 2 - Staggered Rows */}
            {data.examPeriod?.length > 0 && data.examPeriod[0].section !== "" && (
              <div className="overflow-x-auto rounded-lg shadow-sm">
                <table className="w-full table-fixed border border-gray-300 text-left">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="w-1/3 p-3 border">Grade Level</th>
                      <th className="w-1/3 p-3 border">Season</th>
                      <th className="w-1/3 p-3 border">Exam</th>
                    </tr>
                  </thead>
                  <motion.tbody
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                  >
                    {data.examPeriod.map((row, index) => (
                      <motion.tr
                        key={index}
                        variants={fadeInUp}
                        className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"} hover:bg-blue-50 transition-colors`}
                      >
                        <td className="p-3 border font-semibold">{row.section}</td>
                        <td className="p-3 border">{row.time}</td>
                        <td className="p-3 border">{row.modules}</td>
                      </motion.tr>
                    ))}
                  </motion.tbody>
                </table>
              </div>
            )}

            {/* CTA Button */}
            <div className="text-center mt-10">
              <motion.button
                onClick={() => navigate("/contact")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-lg"
              >
                Click here for Free Trial Class
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PsatTestPrep;