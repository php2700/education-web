

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import backgroundImage from "../../../assets/math-bg.png";
// import { useNavigate } from "react-router-dom";

// const SatTestPrep = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//      const navigate = useNavigate();

//   useEffect(() => {
//     const fetchSatData = async () => {
//       try {
//         // === EXACT PATTERN LIKE TERM PAGE ===
//         // VITE_APP_URL ke end me '/' hai, isliye 'api/user/sat-test' direct jod diya
//         const response = await axios.get(
//           `${import.meta.env.VITE_APP_URL}api/user/sat-test`
//         );

//         console.log("Sat Data Response:", response.data);

//         // Check success flag like TermPage
//         if (response.data) {
//           // Admin panel ke logic ke hisaab se data kabhi array me bhi aa sakta hai
//           let apiData = response.data.data;

//           // Agar array hai (e.g. [{...}]) to pehla item le lo, warna direct object
//           if (Array.isArray(apiData)) {
//             setData(apiData[0]);
//           } else {
//             setData(apiData);
//           }
//         }
//       } catch (err) {
//         console.error("Error fetching SAT data:", err);
//         setError("Failed to load SAT Data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSatData();
//   }, []);

//   if (loading)
//     return (
//       <div className="text-center py-20 font-bold text-gray-500">
//         Loading...
//       </div>
//     );
//   if (error)
//     return <div className="text-center py-20 text-red-500">{error}</div>;
//   if (!data)
//     return <div className="text-center py-20 text-red-500">No Data Found</div>;

//   return (
//     <div className="w-full bg-[#F0F8FF] py-12 px-4 md:px-16" id="sat"
//       style={{
//               backgroundImage: `url(${backgroundImage})`,
//               backgroundSize: "contain",
//               backgroundPosition: "center",
//             }}
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* ===== 1. HERO SECTION ===== */}
//         <div className=" mb-10">
//           <h1 className="text-3xl text-center text-5xl font-bold text-gray-800 mb-4 ">
//             {data.heroTitle || "SAT TEST PREP"}
//           </h1>
//           <p className="text-gray-600 text-lg  max-w-7xl mx-auto ">
//             {data.heroSubtitle}
//           </p>
//         </div>

//         {/* ===== 2. MAIN CONTENT ===== */}
//         <div className=" items-center">
//           {/* LEFT: Description */}
//           <div className="text-left space-y-4">
//             <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line ">
//               {data.heroDescription}
//             </p>

//             {/* <p className="text-gray-700 leading-relaxed font-semibold">
//               Looking for SAT preparation tutoring? You have reached the right
//               place.
//             </p> */}

// <div className="text-center">
//             <button  onClick={() => navigate("/contact")} className="mt-4 bg-blue-600 text-center font-semibold text-white px-6 py-3 text-lg rounded-lg shadow-md hover:bg-blue-700 ">
//               Click here for Free Trial Class
//             </button>
//           </div></div>

//           {/* RIGHT: Features Card */}
//           {/* <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
//             <h3 className="text-2xl font-bold mb-4 text-gray-800">
//               Why Choose GGES?
//             </h3>

//             <ul className="space-y-3 text-gray-700 ">
//               {data.features && data.features.length > 0 ? (
//                 data.features.map((feature, index) => (
//                   feature && <li key={index}>✅ {feature}</li>
//                 ))
//               ) : (
//                 <li>✅ Experienced Faculty</li> 
//               )}
//             </ul>
//           </div> */}
//         </div>

//         {/* ===== 3. ABOUT & TABLE SECTION ===== */}
//         <div className="mt-16 bg-[#F0F8FF] p-8 rounded-xl shadow-lg">
//           <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 uppercase ">
//             {data.aboutHeading || "ALL ABOUT SAT"}
//           </h2>

//           <p className="text-gray-700 mb-6 text-lg  max-w-7xl mx-auto whitespace-pre-line ">
//             {data.aboutDescription}
//           </p>

//           {/* TABLE */}
//           <div className="overflow-x-auto">
//             <table className="w-full border border-gray-300 text-left">
//               <thead className="bg-blue-600 text-white">
//                 <tr>
//                   <th className="p-3 border">Component</th>
//                   <th className="p-3 border">Time Allowed(minutes)</th>
//                   <th className="p-3 border">Number of Question/Tasks</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {data.tableData && data.tableData.length > 0 ? (
//                   data.tableData.map((row, index) => (
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
//                   ))
//                 ) : (
//                   <tr className="bg-white">
//                     <td colSpan="3" className="p-3 border text-center">
//                       No Data Available
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {/* <p className="text-gray-700 mt-6 text-center">{data.tableFooter}</p> */}

//           <div className="text-center mt-8">
//             <button onClick={() => navigate("/contact")} className="bg-blue-600 text-white  px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
//               Click here for Free Trial Class
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SatTestPrep;



import React, { useEffect, useState } from "react";
import axios from "axios";
import backgroundImage from "../../../assets/math-bg.png";
import { useNavigate } from "react-router-dom";

// 1. Framer Motion Import
import { motion } from "framer-motion";

const SatTestPrep = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSatData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}api/user/sat-test`
        );

        console.log("Sat Data Response:", response.data);

        if (response.data) {
          let apiData = response.data.data;
          if (Array.isArray(apiData)) {
            setData(apiData[0]);
          } else {
            setData(apiData);
          }
        }
      } catch (err) {
        console.error("Error fetching SAT data:", err);
        setError("Failed to load SAT Data.");
      } finally {
        setLoading(false);
      }
    };

    fetchSatData();
  }, []);

  if (loading)
    return (
      <div className="text-center py-20 font-bold text-gray-500">
        Loading...
      </div>
    );
  if (error)
    return <div className="text-center py-20 text-red-500">{error}</div>;
  if (!data)
    return <div className="text-center py-20 text-red-500">No Data Found</div>;

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
    <div 
      className="w-full bg-[#F0F8FF] py-12 px-4 md:px-16" 
      id="sat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* ===== 1. HERO SECTION (Animated) ===== */}
        <motion.div 
          className="mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-3xl text-center md:text-5xl font-bold text-gray-800 mb-4"
          >
            {data.heroTitle || "SAT TEST PREP"}
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-gray-600 text-lg max-w-7xl mx-auto text-center"
          >
            {data.heroSubtitle}
          </motion.p>
        </motion.div>

        {/* ===== 2. MAIN CONTENT ===== */}
        <motion.div 
          className="items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* LEFT: Description */}
          <div className="text-left space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
              {data.heroDescription}
            </p>

            <div className="text-center">
              <motion.button  
                onClick={() => navigate("/contact")} 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-blue-600 text-center font-semibold text-white px-6 py-3 text-lg rounded-lg shadow-md hover:bg-blue-700 transition-all"
              >
                Click here for Free Trial Class
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* ===== 3. ABOUT & TABLE SECTION (3D Hover Effect) ===== */}
        <motion.div 
          className="mt-16 bg-[#F0F8FF] p-8 rounded-xl shadow-lg border border-blue-100"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          // 🔥 3D Lift Effect on Hover
          whileHover={{ 
            y: -10, 
            boxShadow: "0px 25px 50px -12px rgba(37, 99, 235, 0.25)" 
          }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 uppercase">
            {data.aboutHeading || "ALL ABOUT SAT"}
          </h2>

          <p className="text-gray-700 mb-6 text-lg max-w-7xl mx-auto whitespace-pre-line text-center">
            {data.aboutDescription}
          </p>

          {/* TABLE (Rows Staggered Animation) */}
          <div className="overflow-x-auto rounded-lg shadow-sm">
            <table className="w-full border border-gray-300 text-left">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-3 border">Component</th>
                  <th className="p-3 border">Time Allowed(minutes)</th>
                  <th className="p-3 border">Number of Question/Tasks</th>
                </tr>
              </thead>

              <motion.tbody
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {data.tableData && data.tableData.length > 0 ? (
                  data.tableData.map((row, index) => (
                    <motion.tr
                      key={index}
                      variants={fadeInUp} // Rows slide in one by one
                      className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"} hover:bg-blue-50 transition-colors`}
                    >
                      <td className="p-3 border font-semibold">
                        {row.section}
                      </td>
                      <td className="p-3 border">{row.time}</td>
                      <td className="p-3 border">{row.modules}</td>
                    </motion.tr>
                  ))
                ) : (
                  <tr className="bg-white">
                    <td colSpan="3" className="p-3 border text-center">
                      No Data Available
                    </td>
                  </tr>
                )}
              </motion.tbody>
            </table>
          </div>

          <div className="text-center mt-8">
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
      </div>
    </div>
  );
};

export default SatTestPrep;
