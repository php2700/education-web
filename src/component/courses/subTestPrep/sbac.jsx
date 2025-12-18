// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const SBACPrep = () => {
//   // --- State Management ---
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const navigate = useNavigate();

//   // --- API Call ---
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // API Endpoint: /api/sbac-test
//         const response = await axios.get(
//           `${import.meta.env.VITE_APP_URL}api/user/sbac-test`
//         );

//         // Validation: Check if data exists
//         if (response.data && response.data.data) {
//           setData(response.data.data);
//         } else {
//           setData(null);
//         }
//       } catch (err) {
//         console.error("Error fetching SBAC data:", err);
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // --- 1. Loading View ---
//   if (loading) {
//     return (
//       <div className="w-full h-screen flex justify-center items-center ">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
//       </div>
//     );
//   }

//   // --- 2. Error View ---
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
//     <div className="w-full  text-gray-800" id="sbac">
//       {/* HERO SECTION */}
//       {/* Background and Button always visible */}
//       <section className=" pt-20 px-4">
//         <div className="max-w-7xl mx-auto ">
//           {/* Title: Only visible if data exists */}
//           {safeData.heroTitle && (
//             <h1 className="text-4xl text-center md:text-5xl font-bold mb-6">
//               {safeData.heroTitle}
//             </h1>
//           )}

//           {/* Description: Only visible if data exists */}
//           {safeData.heroDescription && (
//             <p
//               className="text-lg md:text-xl max-w-7xl mx-auto mb-8 whitespace-pre-wrap"
//               dangerouslySetInnerHTML={{ __html: safeData.heroDescription }}
//             ></p>
//           )}

//           <section className="mt-4  p-4 rounded-xl text-center">
//             <h3 className="text-xl font-semibold mb-3">
//               So why not take a Free Trial Class for SBAC tutoring with us, To
//               avail.
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

//       {safeData?.aboutDescription && (
//         <section className="py-4 px-4">
//           <div className="max-w-7xl mx-auto">
//             {safeData?.aboutHeading && (
//               <h2 className="text-2xl font-bold mb-2">
//                 {safeData.aboutHeading}
//               </h2>
//             )}

//             <div className="text-lg mb-4 whitespace-pre-wrap">
//               {safeData.aboutDescription}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* ASSESSMENT DETAILS */}
//       {/* Render only if content exists */}
//       {safeData.assessmentPoints && safeData.assessmentPoints.length > 0 && (
//         <section className="bg-[#F0F8FF] py-6 px-4">
//           <div className="max-w-7xl mx-auto">
//             {safeData?.assessmentDescription && (
//               <section className="py-4 ">
//                 <div className="max-w-7xl mx-auto">
//                   {/* Heading */}
//                   {safeData.assessmentHeading && (
//                     <h2 className="text-3xl text-center font-bold mb-4">
//                       {safeData.assessmentHeading}
//                     </h2>
//                   )}

//                   {/* Description */}
//                   <p className="text-lg whitespace-pre-wrap">
//                     {safeData.assessmentDescription}
//                   </p>
//                 </div>
//               </section>
//             )}
//             {safeData.assessmentPoints?.map((ele) => (
//               <div className="mb-4">
//                 <h2 className="text-xl font-bold ">{ele?.title}</h2>
//                 <div className="whitespace-pre-wrap text-lg">{ele?.description}</div>
//               </div>
//             ))}
//           </div>
//         </section>
//       )}

//       <section className="mt-4  p-4 rounded-xl text-center">
//         <h3 className="text-xl font-semibold mb-3">
//           So why not take a Free Trial Class for SBAC tutoring with us, 
//         </h3>

//         <div className="flex justify-center gap-4">
//           <button
//             onClick={() => navigate("/contact")}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
//           >
//             CLICK HERE
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SBACPrep;



import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Animation Import

const SBACPrep = () => {
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
          `${import.meta.env.VITE_APP_URL}api/user/sbac-test`
        );

        if (response.data && response.data.data) {
          setData(response.data.data);
        } else {
          setData(null);
        }
      } catch (err) {
        console.error("Error fetching SBAC data:", err);
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
    overflowX: "hidden", // Prevents scrollbar during 3D rotation
  };

  const fadeInUp3D = {
    hidden: { opacity: 0, y: 60, rotateX: -20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
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
    hover: {
      scale: 1.02,
      rotateY: 2,
      y: -5,
      boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
      transition: { duration: 0.3 },
    },
  };

  // --- 1. Loading View ---
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  // --- 2. Error View ---
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
      id="sbac"
    >
      {/* HERO SECTION */}
      <section className="pt-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          {safeData.heroTitle && (
            <motion.h1
              variants={fadeInUp3D}
              className="text-4xl text-center md:text-5xl font-bold mb-6 drop-shadow-lg"
            >
              {safeData.heroTitle}
            </motion.h1>
          )}

          {/* Description */}
          {safeData.heroDescription && (
            <motion.div
              variants={fadeInUp3D}
              className="text-lg md:text-xl max-w-7xl mx-auto mb-8 whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: safeData.heroDescription }}
            ></motion.div>
          )}

          <motion.section
            variants={fadeInUp3D}
            className="mt-4 p-4 rounded-xl text-center"
          >
            <h3 className="text-xl font-semibold mb-3">
              So why not take a Free Trial Class for SBAC tutoring with us, To
              avail.
            </h3>

            <div className="flex justify-center gap-4">
              <motion.button
                variants={button3D}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
                onClick={() => navigate("/contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
              >
                CLICK HERE
              </motion.button>
            </div>
          </motion.section>
        </div>
      </section>

      {/* ABOUT DESCRIPTION */}
      {safeData?.aboutDescription && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp3D}
          className="py-4 px-4"
        >
          <div className="max-w-7xl mx-auto">
            {safeData?.aboutHeading && (
              <h2 className="text-2xl font-bold mb-2">
                {safeData.aboutHeading}
              </h2>
            )}

            <div className="text-lg mb-4 whitespace-pre-wrap">
              {safeData.aboutDescription}
            </div>
          </div>
        </motion.section>
      )}

      {/* ASSESSMENT DETAILS */}
      {safeData.assessmentPoints && safeData.assessmentPoints.length > 0 && (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-[#F0F8FF] py-6 px-4 perspective-1000"
        >
          <div className="max-w-7xl mx-auto">
            {safeData?.assessmentDescription && (
              <motion.section
                variants={fadeInUp3D}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="py-4"
              >
                <div className="max-w-7xl mx-auto">
                  {/* Heading */}
                  {safeData.assessmentHeading && (
                    <h2 className="text-3xl text-center font-bold mb-4">
                      {safeData.assessmentHeading}
                    </h2>
                  )}

                  {/* Description */}
                  <p className="text-lg whitespace-pre-wrap">
                    {safeData.assessmentDescription}
                  </p>
                </div>
              </motion.section>
            )}

            {/* Assessment Cards with 3D Hover */}
            {safeData.assessmentPoints?.map((ele, index) => (
              <motion.div
                key={index}
                variants={fadeInUp3D}
                initial="hidden"
                whileInView="visible"
                whileHover={cardHover3D} // 3D Tilt on Hover
                viewport={{ once: true }}
                className="mb-4 bg-white p-6 rounded-xl shadow-sm border border-transparent hover:border-blue-200"
                style={{ transformStyle: "preserve-3d" }}
              >
                <h2 className="text-xl font-bold text-blue-900 mb-2">
                  {ele?.title}
                </h2>
                <div className="whitespace-pre-wrap text-lg text-gray-700">
                  {ele?.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* FOOTER CTA */}
      <motion.section
        initial={{ opacity: 0, y: 50, rotateX: 20 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-4 p-4 rounded-xl text-center pb-12"
      >
        <h3 className="text-xl font-semibold mb-3">
          So why not take a Free Trial Class for SBAC tutoring with us,
        </h3>

        <div className="flex justify-center gap-4">
          <motion.button
            variants={button3D}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            onClick={() => navigate("/contact")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition shadow-xl"
          >
            CLICK HERE
          </motion.button>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default SBACPrep;