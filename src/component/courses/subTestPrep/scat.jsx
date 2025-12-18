// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const ScatTestPrep = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchScatData = async () => {
//       try {
//         const res = await axios.get(
//           `${import.meta.env.VITE_APP_URL}api/user/scat-test`
//         );

//         let apiData = res?.data?.data || res.data;

//         if (Array.isArray(apiData)) {
//           setData(apiData[0] || null);
//         } else {
//           setData(apiData || null);
//         }

//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load SCAT content.");
//         setLoading(false);
//       }
//     };

//     fetchScatData();
//   }, []);

//   if (loading) return <div className="text-center py-20">Loading...</div>;
//   if (error)
//     return <div className="text-center py-20 text-red-500">{error}</div>;

//   const safe = data || {};

//   // Convert registerContactList (string → array)
//   const contactListArray =
//     typeof safe.registerContactList === "string"
//       ? safe.registerContactList?.split("\n").filter(Boolean)
//       : [];

//   return (
//     <div className="w-full  text-gray-800" id="scat">
//       {/* ================= HERO ================= */}
//       <section className=" py-4 px-4  ">
//         <div className="max-w-7xl mx-auto">
//           {safe.heroTitle && (
//             <h1 className="text-4xl text-center md:text-5xl font-bold mb-4 uppercase">
//               {safe.heroTitle}
//             </h1>
//           )}

//           {safe.heroDescription && (
//             <p className="text-lg  mb-6 whitespace-pre-line">
//               {safe.heroDescription}
//             </p>
//           )}

//           {/* <div className="text-gray-700 text-lg leading-7 mb-6 whitespace-pre-line">
//             So why wait? To avail a Free Trial Class for SCAT Test Prep Online
//             Tutoring
//           </div>

//           <div className="text-center">
//             <button
//               onClick={() => navigate("/contact")}
//               className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg  hover:bg-blue-700 transition"
//             >
//               Click Here for Free Trial Class
//             </button>
//           </div> */}

//            <div className="text-center font-semibold text-lg mb-2">So why wait? To avail a Free Trial Class for SCAT Test Prep Online Tutoring, &nbsp; 
//    <span
//                 onClick={() => navigate("/contact")}
//                 className="mt-4  cursor-pointer  py-3 font-semibold text-lg underline text-blue-600  transition"
//               >
//                CLICK HERE
//               </span>
//   </div>
//         </div>
//       </section>

//       {/* ================= ABOUT SCAT ================= */}
//       {(safe.aboutHeading ||
//         safe.aboutDescription ||
//         safe.versionsHeading ||
//         safe.versionsList?.length > 0) && (
//         <section className="py-2 px-4">
//           <div className="max-w-7xl mx-auto space-y-2">
//             {safe.aboutHeading && (
//               <h2 className="text-3xl font-bold">{safe.aboutHeading}</h2>
//             )}

//             {safe.aboutDescription && (
//               <p className="text-lg whitespace-pre-line ">
//                 {safe.aboutDescription}
//               </p>
//             )}

//             {safe.versionsHeading && (
//               <h3 className="text-3xl font-bold">{safe.versionsHeading}</h3>
//             )}

//             {safe.versionsList?.length > 0 && (
//               <ul className="list-disc pl-6  text-lg">
//                 {safe.versionsList.map((v, i) =>
//                   v ? <li key={i}>{v}</li> : null
//                 )}
//               </ul>
//             )}
//           </div>
//         </section>
//       )}

//       {/* ================= FORMAT SECTION ================= */}
//       {(safe.formatHeading ||
//         safe.formatDescription ||
//         safe.formatSections?.length > 0) && (
//         <section className="py-4 px-4">
//           <div className="max-w-7xl mx-auto space-y-4">
//             {safe.formatHeading && (
//               <h2 className="text-3xl font-bold">{safe.formatHeading}</h2>
//             )}

//             {safe.formatDescription && (
//               <p className="text-lg whitespace-pre-line">
//                 {safe.formatDescription}
//               </p>
//             )}

//             {safe.formatSections?.length > 0 && (
//               <div className="grid md:grid-cols-2 gap-4">
//                 {safe.formatSections.map((sec, i) => (
//                   <div
//                     className="border p-6 rounded-xl shadow-sm bg-white"
//                     key={i}
//                   >
//                     <h3 className="text-xl font-bold mb-1">{sec.title}</h3>
//                     <p className="whitespace-pre-line text-lg">{sec.description}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </section>
//       )}

//       {/* ================= SCORING SECTION ================= */}
//       {(safe.scoringHeading || safe.scoringLevels?.length > 0) && (
//         <section className="py-4 px-4">
//           <div className="max-w-7xl mx-auto space-y-10">
//             <div className="text-3xl font-bold">Scoring and Timing</div>
//             {safe.scoringHeading && (
//               <h2 className="text-xl" dangerouslySetInnerHTML={{__html:safe.scoringHeading}}></h2>
//             )}

//             {safe.scoringLevels?.length > 0 && (
//               <div className="grid md:grid-cols-2 gap-6">
//                 {safe.scoringLevels.map((lvl, i) => (
//                   <div
//                     key={i}
//                     className="border p-6 rounded-xl shadow-sm bg-white"
//                   >
//                     <h3 className="text-xl font-bold mb-3">{lvl.title}</h3>
//                     <p className="whitespace-pre-line text-lg">{lvl.details}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//             <p className="text-lg">
//               This scaled score is based on the number of questions the student
//               answers correctly out of the 50 scored questions in each section.
//             </p>
//           </div>
//         </section>
//       )}

//       {/* ================= TIPS SECTION ================= */}
//       {(safe.tipsHeading || safe.tipsList?.length > 0) && (
//         <section className="py-4 px-4 ">
//           <div className="max-w-7xl mx-auto">
//             {safe.tipsHeading && (
//               <h2 className="text-3xl font-bold mb-2">{safe.tipsHeading}</h2>
//             )}
//             <div className="mb-4 text-lg">
//               However, during our sessions on the SCAT test preparations, we
//               equip our students by giving Tips and Tricks to answer SCAT test
//               questions quickly and accurately. Still here are general tips for
//               taking the SCAT test:
//             </div>
//             {safe.tipsList?.length > 0 && (
//               <ul className="list-disc pl-6 text-lg space-y-3">
//                 {safe.tipsList.map((tip, i) =>
//                   tip ? <li key={i}>{tip}</li> : null
//                 )}
//               </ul>
//             )}
//           </div>
//         </section>
//       )}

//       {/* ================= REGISTRATION ================= */}
//       {(safe.registerHeading ||
//         safe.registerSubHeading ||
//         contactListArray.length > 0 ||
//         safe.authHeading ||
//         safe.authDescription) && (
//         <section className="py-4 px-4">
//           <div className="max-w-7xl mx-auto space-y-2">
//             {safe.registerHeading && (
//               <h2 className="text-3xl font-bold">{safe.registerHeading}</h2>
//             )}

//             {safe.registerSubHeading && (
//               <p className="text-2xl font-bold">{safe.registerSubHeading}</p>
//             )}

//             {contactListArray.length > 0 && (
//               <ul className="list-disc pl-2 text-lg space-y-1">
//                 {contactListArray.map((item, i) => (
//                   <div key={i} dangerouslySetInnerHTML={{ __html: item }}></div>
//                 ))}
//               </ul>
//             )}

//             {safe.authHeading && (
//               <h3 className="text-2xl font-bold">{safe.authHeading}</h3>
//             )}

//             {safe.authDescription && (
//               <p
//                 className="text-lg pl-2 whitespace-pre-line"
//                 dangerouslySetInnerHTML={{ __html: safe.authDescription }}
//               />
//             )}
//           </div>
//         </section>
//       )}

//       <section className="mt-12  p-8 rounded-xl text-center">
//         <h3 className="text-xl font-semibold mb-3">
//           So why wait? To avail a Free Trial Class for SCAT Test Prep
//         </h3>

//         <div className="flex justify-center gap-4">
//           <button
//             onClick={() => navigate("/contact")}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
//           >
//             CLICK HERE
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ScatTestPrep;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// 1. Framer Motion Import
import { motion } from "framer-motion";

const ScatTestPrep = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchScatData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_APP_URL}api/user/scat-test`
        );

        let apiData = res?.data?.data || res.data;

        if (Array.isArray(apiData)) {
          setData(apiData[0] || null);
        } else {
          setData(apiData || null);
        }

        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load SCAT content.");
        setLoading(false);
      }
    };

    fetchScatData();
  }, []);

  if (loading) return <div className="text-center py-20 font-bold text-gray-500">Loading...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

  const safe = data || {};

  const contactListArray =
    typeof safe.registerContactList === "string"
      ? safe.registerContactList?.split("\n").filter(Boolean)
      : [];

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
    <div className="w-full text-gray-800" id="scat">
      
      {/* ================= HERO (Animated) ================= */}
      <motion.section 
        className="py-4 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          {safe.heroTitle && (
            <motion.h1 variants={fadeInUp} className="text-4xl text-center md:text-5xl font-bold mb-4 uppercase">
              {safe.heroTitle}
            </motion.h1>
          )}

          {safe.heroDescription && (
            <motion.p variants={fadeInUp} className="text-lg mb-6 whitespace-pre-line">
              {safe.heroDescription}
            </motion.p>
          )}

          <motion.div variants={fadeInUp} className="text-center font-semibold text-lg mb-2">
            So why wait? To avail a Free Trial Class for SCAT Test Prep Online Tutoring, &nbsp;
            <motion.span
              onClick={() => navigate("/contact")}
              whileHover={{ scale: 1.1, color: "#2563EB" }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 cursor-pointer py-3 font-semibold text-lg underline text-blue-600 transition inline-block"
            >
              CLICK HERE
            </motion.span>
          </motion.div>
        </div>
      </motion.section>

      {/* ================= ABOUT SCAT (3D Lift) ================= */}
      {(safe.aboutHeading || safe.aboutDescription || safe.versionsHeading || safe.versionsList?.length > 0) && (
        <motion.section 
          className="py-2 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.div 
            className="max-w-7xl mx-auto space-y-2 p-6 rounded-2xl transition-shadow duration-300"
            whileHover={{ boxShadow: "0px 10px 30px rgba(0,0,0,0.05)", y: -5 }}
          >
            {safe.aboutHeading && (
              <h2 className="text-3xl font-bold">{safe.aboutHeading}</h2>
            )}

            {safe.aboutDescription && (
              <p className="text-lg whitespace-pre-line">{safe.aboutDescription}</p>
            )}

            {safe.versionsHeading && (
              <h3 className="text-3xl font-bold">{safe.versionsHeading}</h3>
            )}

            {safe.versionsList?.length > 0 && (
              <ul className="list-disc pl-6 text-lg">
                {safe.versionsList.map((v, i) =>
                  v ? <motion.li key={i} variants={fadeInUp}>{v}</motion.li> : null
                )}
              </ul>
            )}
          </motion.div>
        </motion.section>
      )}

      {/* ================= FORMAT SECTION (Staggered Cards) ================= */}
      {(safe.formatHeading || safe.formatDescription || safe.formatSections?.length > 0) && (
        <section className="py-4 px-4">
          <motion.div 
            className="max-w-7xl mx-auto space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {safe.formatHeading && (
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold">{safe.formatHeading}</motion.h2>
            )}

            {safe.formatDescription && (
              <motion.p variants={fadeInUp} className="text-lg whitespace-pre-line">{safe.formatDescription}</motion.p>
            )}

            {safe.formatSections?.length > 0 && (
              <div className="grid md:grid-cols-2 gap-4">
                {safe.formatSections.map((sec, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ y: -10, boxShadow: "0px 15px 30px rgba(0,0,0,0.1)" }}
                    className="border p-6 rounded-xl shadow-sm bg-white transition-all cursor-default"
                  >
                    <h3 className="text-xl font-bold mb-1">{sec.title}</h3>
                    <p className="whitespace-pre-line text-lg">{sec.description}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </section>
      )}

      {/* ================= SCORING SECTION ================= */}
      {(safe.scoringHeading || safe.scoringLevels?.length > 0) && (
        <section className="py-4 px-4">
          <motion.div 
            className="max-w-7xl mx-auto space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-3xl font-bold">Scoring and Timing</motion.div>
            {safe.scoringHeading && (
              <motion.h2 variants={fadeInUp} className="text-xl" dangerouslySetInnerHTML={{__html:safe.scoringHeading}}></motion.h2>
            )}

            {safe.scoringLevels?.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6">
                {safe.scoringLevels.map((lvl, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                    className="border p-6 rounded-xl shadow-sm bg-white"
                  >
                    <h3 className="text-xl font-bold mb-3">{lvl.title}</h3>
                    <p className="whitespace-pre-line text-lg">{lvl.details}</p>
                  </motion.div>
                ))}
              </div>
            )}
            <motion.p variants={fadeInUp} className="text-lg">
              This scaled score is based on the number of questions the student
              answers correctly out of the 50 scored questions in each section.
            </motion.p>
          </motion.div>
        </section>
      )}

      {/* ================= TIPS SECTION ================= */}
      {(safe.tipsHeading || safe.tipsList?.length > 0) && (
        <motion.section 
          className="py-4 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="max-w-7xl mx-auto">
            {safe.tipsHeading && (
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-2">{safe.tipsHeading}</motion.h2>
            )}
            <motion.div variants={fadeInUp} className="mb-4 text-lg">
              However, during our sessions on the SCAT test preparations, we
              equip our students by giving Tips and Tricks to answer SCAT test
              questions quickly and accurately. Still here are general tips for
              taking the SCAT test:
            </motion.div>
            {safe.tipsList?.length > 0 && (
              <ul className="list-disc pl-6 text-lg space-y-3">
                {safe.tipsList.map((tip, i) =>
                  tip ? <motion.li key={i} variants={fadeInUp}>{tip}</motion.li> : null
                )}
              </ul>
            )}
          </div>
        </motion.section>
      )}

      {/* ================= REGISTRATION (Smooth Fade) ================= */}
      {(safe.registerHeading || safe.registerSubHeading || contactListArray.length > 0 || safe.authHeading || safe.authDescription) && (
        <motion.section 
          className="py-4 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto space-y-2">
            {safe.registerHeading && <h2 className="text-3xl font-bold">{safe.registerHeading}</h2>}
            {safe.registerSubHeading && <p className="text-2xl font-bold">{safe.registerSubHeading}</p>}
            {contactListArray.length > 0 && (
              <ul className="list-disc pl-2 text-lg space-y-1">
                {contactListArray.map((item, i) => (
                  <div key={i} dangerouslySetInnerHTML={{ __html: item }}></div>
                ))}
              </ul>
            )}
            {safe.authHeading && <h3 className="text-2xl font-bold">{safe.authHeading}</h3>}
            {safe.authDescription && (
              <p className="text-lg pl-2 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: safe.authDescription }} />
            )}
          </div>
        </motion.section>
      )}

      {/* ================= CTA (Pop Up) ================= */}
      <motion.section 
        className="mt-12 p-8 rounded-xl text-center"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold mb-3">
          So why wait? To avail a Free Trial Class for SCAT Test Prep
        </h3>

        <div className="flex justify-center gap-4">
          <motion.button
            onClick={() => navigate("/contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition shadow-lg"
          >
            CLICK HERE
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default ScatTestPrep;