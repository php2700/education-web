// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import bgImage from "../../../assets/Elaback.png";

// // Accordion Component (Same as before)
// const AccordionItem = ({ title, children }) => {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="border-b last:border-b-0">
//       <button
//         onClick={() => setOpen((s) => !s)}
//         className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50"
//         aria-expanded={open}
//       >
//         <span className="font-semibold text-gray-800">{title}</span>
//         <span className="text-gray-500">{open ? "−" : "+"}</span>
//       </button>

//       {open && (
//         <div className="p-4 bg-gray-50 text-gray-700 whitespace-pre-line">
//           {children}
//         </div>
//       )}
//     </div>
//   );
// };

// const ElaPage = () => {
//   const navigate = useNavigate();

//   // --- State Management ---
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // --- API Call ---
//   useEffect(() => {
//     const fetchElaData = async () => {
//       try {
//         const response = await axios.get(
//           `${import.meta.env.VITE_APP_URL}api/user/ela-test`
//         );

//         if (response.data) {
//           let apiData = response.data.data || response.data;

//           if (Array.isArray(apiData)) {
//             if (apiData.length > 0) setData(apiData[0]);
//             else setData(null);
//           } else {
//             if (apiData && Object.keys(apiData).length > 0) setData(apiData);
//             else setData(null);
//           }
//         }
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching ELA data:", err);
//         setError("Failed to load content.");
//         setLoading(false);
//       }
//     };

//     fetchElaData();
//   }, []);

//   // --- Loading & Error Handling ---
//   if (loading)
//     return (
//       <div className="text-center py-20 font-bold text-gray-500">
//         Loading ELA Prep...
//       </div>
//     );
//   if (error)
//     return <div className="text-center py-20 text-red-500">{error}</div>;

//   // --- Safe Data ---
//   const safeData = data || {};

//   // Helper to render points
//   const renderHTMLPoint = (text) => {
//     if (!text) return null;
//     return <span dangerouslySetInnerHTML={{ __html: text }} />;
//   };

//   return (
//     <main
//       className="min-h-screen py-12 px-4 relative bg-cover bg-center bg-fixed"
//       id="ela"
//       style={{ backgroundImage: `url(${bgImage})` }}
//     >
//       <div className="max-w-7xl mx-auto">
//         <header className=" mb-12">
//           {/* Title - Only visible if data exists */}
//           {safeData.heroTitle && (
//             <h1 className="text-3xl text-center md:text-4xl font-extrabold text-gray-900 uppercase">
//               {safeData.heroTitle}
//             </h1>
//           )}

//           {safeData.heroDescription && (
//             <p className="mt-4 text-gray-600 max-w-7xl text-lg mx-auto whitespace-pre-line">
//               {safeData.heroDescription}
//             </p>
//           )}
//         </header>
//         <h2 className="text-2xl text-center md:text-3xl font-bold text-gray-900">
//           {" "}
//           (New York State English Language Arts (ELA) Test)
//         </h2>
//         <section>
//           <article className="lg:col-span-2 space-y-8">
//             {(safeData.introHeading || safeData.introDescription) && (
//               <section className="prose prose-lg max-w-none">
//                 {safeData.introHeading && (
//                   <h2 className="text-xl mt-4 md:text-2xl font-bold text-gray-900">
//                     {safeData.introHeading}
//                   </h2>
//                 )}

//                 {safeData.introDescription && (
//                   <div
//                     className="text-gray-700 text-lg whitespace-pre-line leading-relaxed"
//                     dangerouslySetInnerHTML={{
//                       __html: safeData.introDescription,
//                     }}
//                   ></div>
//                 )}
//               </section>
//             )}
//           </article>
//         </section>

//         {safeData.administrationHeading && (
//           <div className="text-xl  md:text-2xl my-4 font-bold text-gray-900">
//             {safeData.administrationHeading}
//           </div>
//         )}
//         <div className="text-lg  md:text-xl font-bold text-gray-900">
//           Core components and formats
//         </div>
//         {safeData.administrationPoints &&
//           safeData.administrationPoints.length > 0 && (
//             <div>
//               {safeData.administrationPoints.map((pt, i) => (
//                 <div key={i} className="py-2  ">
//                   <h4 className="text-xl font-bold text-blue-600 mb-1">
//                     {pt.title}
//                   </h4>
//                   <p className="text-gray-700 text-lg leading-relaxed">
//                     {pt.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}
//         <section className="mt-12 bg-gray-50 p-8 rounded-xl text-center">
//           <h3 className="text-xl font-semibold mb-3">
//             So why wait? To avail of a Free Trial Class for ELA Tutoring
//           </h3>

//           <div className="flex justify-center gap-4">
//             <button
//               onClick={() => navigate("/contact")}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-lg transition"
//             >
//               Free Trial Class
//             </button>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// };

// export default ElaPage;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bgImage from "../../../assets/Elaback.png";

// 1. Framer Motion Import
import { motion } from "framer-motion";

// Accordion Component (Same as before)
const AccordionItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b last:border-b-0">
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-800">{title}</span>
        <span className="text-gray-500">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="p-4 bg-gray-50 text-gray-700 whitespace-pre-line">
          {children}
        </div>
      )}
    </div>
  );
};

const ElaPage = () => {
  const navigate = useNavigate();

  // --- State Management ---
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- API Call ---
  useEffect(() => {
    const fetchElaData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}api/user/ela-test`
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
        console.error("Error fetching ELA data:", err);
        setError("Failed to load content.");
        setLoading(false);
      }
    };

    fetchElaData();
  }, []);

  // --- Loading & Error Handling ---
  if (loading)
    return (
      <div className="text-center py-20 font-bold text-gray-500">
        Loading ELA Prep...
      </div>
    );
  if (error)
    return <div className="text-center py-20 text-red-500">{error}</div>;

  // --- Safe Data ---
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
    <main
      className="min-h-screen py-12 px-4 relative bg-cover bg-center bg-fixed overflow-hidden"
      id="ela"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <motion.header 
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Title - Only visible if data exists */}
          {safeData.heroTitle && (
            <motion.h1 
              variants={fadeInUp}
              className="text-3xl text-center md:text-4xl font-extrabold text-gray-900 uppercase"
            >
              {safeData.heroTitle}
            </motion.h1>
          )}

          {safeData.heroDescription && (
            <motion.p 
              variants={fadeInUp}
              className="mt-4 text-gray-600 max-w-7xl text-lg mx-auto whitespace-pre-line"
            >
              {safeData.heroDescription}
            </motion.p>
          )}
        </motion.header>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl text-center md:text-3xl font-bold text-gray-900"
        >
          (New York State English Language Arts (ELA) Test)
        </motion.h2>

        <section>
          <article className="lg:col-span-2 space-y-8">
            {(safeData.introHeading || safeData.introDescription) && (
              <motion.section 
                className="prose prose-lg max-w-none"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {safeData.introHeading && (
                  <motion.h2 variants={fadeInUp} className="text-xl mt-4 md:text-2xl font-bold text-gray-900">
                    {safeData.introHeading}
                  </motion.h2>
                )}

                {safeData.introDescription && (
                  <motion.div
                    variants={fadeInUp}
                    className="text-gray-700 text-lg whitespace-pre-line leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: safeData.introDescription,
                    }}
                  ></motion.div>
                )}
              </motion.section>
            )}
          </article>
        </section>

        {safeData.administrationHeading && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl my-4 font-bold text-gray-900"
          >
            {safeData.administrationHeading}
          </motion.div>
        )}

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl font-bold text-gray-900"
        >
          Core components and formats
        </motion.div>

        {/* LIST SECTION (Staggered Animation) */}
        {safeData.administrationPoints &&
          safeData.administrationPoints.length > 0 && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {safeData.administrationPoints.map((pt, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  whileHover={{ x: 10 }} // Slide Right on Hover
                  className="py-2 cursor-default"
                >
                  <h4 className="text-xl font-bold text-blue-600 mb-1">
                    {pt.title}
                  </h4>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {pt.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}

        {/* CTA SECTION (3D Pop Up) */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ y: -5, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
          className="mt-12 bg-gray-50 p-8 rounded-xl text-center shadow-md border border-gray-100"
        >
          <h3 className="text-xl font-semibold mb-3">
            So why wait? To avail of a Free Trial Class for ELA Tutoring
          </h3>

          <div className="flex justify-center gap-4">
            <motion.button
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-lg transition shadow-lg"
            >
              Free Trial Class
            </motion.button>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default ElaPage;