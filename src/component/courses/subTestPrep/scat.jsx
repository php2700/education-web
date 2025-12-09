// import React from "react";

// const ScatTestPrep = () => {
//   return (
//     <div className="w-full bg-white text-gray-800" id='scat'>
      
//       {/* HERO SECTION */}
//       <section className="bg-[#0f172a] text-white py-20 px-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">
//             SCAT TEST PREP
//           </h1>
//           <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8">
//             SCAT Test is one of the most sought-after tests for students. At GGES, we make SCAT test prep a cakewalk
//             with expert strategies, updated curriculum, and proven results.
//           </p>
//           <a
//             href="/free-trial"
//             className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
//           >
//             Book Free Trial Class
//           </a>
//         </div>
//       </section>

//       {/* INTRO SECTION */}
//       <section className="py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">
//             All You Need To Know About SCAT
//           </h2>
//           <p className="text-lg mb-6">
//             SCAT is an above-grade-level test. It shows how your child’s score compares with both their own grade 
//             and higher grades for which the test was originally designed.
//           </p>

//           <h3 className="text-2xl font-semibold mb-4">Three Versions of SCAT</h3>
//           <ul className="list-disc pl-6 space-y-2 text-lg">
//             <li>Grades 2–3 → Elementary SCAT (designed for 3–6 graders)</li>
//             <li>Grades 4–5 → Intermediate SCAT (designed for 6–9 graders)</li>
//             <li>Grades 6+ → Advanced SCAT (designed for 9–12 graders)</li>
//           </ul>
//         </div>
//       </section>

//       {/* FORMAT SECTION */}
//       <section className="bg-gray-100 py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">Test Format</h2>

//           <p className="text-lg mb-8">
//             The SCAT test contains two sections. Each section has 55 questions (5 are experimental and not scored).
//           </p>

//           <div className="grid md:grid-cols-2 gap-10">
//             <div className="bg-white p-8 rounded-xl shadow">
//               <h3 className="text-2xl font-semibold mb-4">Verbal Section</h3>
//               <p>
//                 Tests understanding of words and verbal reasoning through
//                 multiple-choice analogies.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow">
//               <h3 className="text-2xl font-semibold mb-4">Quantitative Section</h3>
//               <p>
//                 Tests mathematical reasoning through
//                 multiple-choice comparisons between quantities.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SCORING SECTION */}
//       <section className="py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-8">Scoring & Levels</h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="border p-6 rounded-xl">
//               <h3 className="text-xl font-bold mb-4">Elementary Level</h3>
//               <p>Verbal: 401 – 471</p>
//               <p>Quantitative: 412 – 475</p>
//             </div>

//             <div className="border p-6 rounded-xl">
//               <h3 className="text-xl font-bold mb-4">Intermediate Level</h3>
//               <p>Verbal: 405 – 482</p>
//               <p>Quantitative: 419 – 506</p>
//             </div>

//             <div className="border p-6 rounded-xl">
//               <h3 className="text-xl font-bold mb-4">Advanced Level</h3>
//               <p>Verbal: 410 – 494</p>
//               <p>Quantitative: 424 – 514</p>
//             </div>
//           </div>

//           <p className="text-lg mt-6">
//             Scores are based on the number of correct answers out of 50 scored questions.
//           </p>
//         </div>
//       </section>

//       {/* TIPS SECTION */}
//       <section className="bg-gray-100 py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">SCAT Test Tips</h2>

//           <ul className="list-disc pl-6 space-y-3 text-lg">
//             <li>Don’t panic — this test is designed for older students.</li>
//             <li>Relax if stressed. Focus on your breathing.</li>
//             <li>Make your best guess and manage your time wisely.</li>
//             <li>No negative marking – guessing is okay.</li>
//             <li>Use the elimination method for multiple-choice questions.</li>
//             <li>Only change answers if you are 100% certain.</li>
//             <li>Be confident!</li>
//           </ul>
//         </div>
//       </section>

//       {/* REGISTRATION SECTION */}
//       <section className="py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">How To Register</h2>

//           <p className="text-lg mb-4">
//             Schedule your test with Prometric by:
//           </p>

//           <ul className="list-disc pl-6 space-y-2 text-lg mb-6">
//             <li>Online: www.prometric.com/jhucty</li>
//             <li>Phone: 800-688-5796 (8AM – 8PM EST)</li>
//             <li>Fee: $60 (US only)</li>
//           </ul>

//           <p className="text-lg mb-4">
//             You must have a 9-digit Authorization Number (from CTY) before booking.
//           </p>

//           <p className="text-lg">
//             Get it from:
//           </p>
//           <ul className="list-disc pl-6 space-y-2 text-lg">
//             <li>Mail registration packet</li>
//             <li>Email received from CTY</li>
//             <li>MyCTY portal: www.ctyjhu.org/mycty/</li>
//           </ul>
//         </div>
//       </section>

//       {/* CTA SECTION */}
//       <section className="bg-[#0f172a] py-16 px-4 text-center">
//         <div className="max-w-7xl mx-auto text-white">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Ready To Start SCAT Preparation?
//           </h2>
//           <p className="mb-8 text-lg">
//             Enroll now for our FREE trial class and experience the GGES difference.
//           </p>

//           <a
//             href="/free-trial"
//             className="inline-block bg-yellow-400 text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition"
//           >
//             Get Free Trial Class
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ScatTestPrep;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ScatTestPrep = () => {
//   // --- State Management ---
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchScatData = async () => {
//       try {
//         // API URL Construction
//         const response = await axios.get(`${import.meta.env.VITE_APP_URL}api/user/scat-test`);
        
//         console.log("SCAT API Data:", response.data);

//         if (response.data) {
//           // Admin panel usually wraps data in 'data' key
//           let apiData = response.data.data || response.data;

//           // If array, take first item, else take object
//           if (Array.isArray(apiData)) {
//             setData(apiData[0]);
//           } else {
//             setData(apiData);
//           }
//         }
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching SCAT data:", err);
//         setError("Failed to load content.");
//         setLoading(false);
//       }
//     };

//     fetchScatData();
//   }, []);

//   // Loading & Error Handling
//   if (loading) return <div className="text-center py-20 font-bold text-gray-500">Loading SCAT Prep...</div>;
//   if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

//   // Safe Data (Validation)
//   const safeData = data || {};

//   return (
//     <div className="w-full bg-white text-gray-800" id='scat'>
      
//       {/* ===== 1. HERO SECTION ===== */}
//       <section className="bg-[#0f172a] text-white py-20 px-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase">
//             {/* Key: heroTitle */}
//             {safeData.heroTitle || "SCAT  ghdghTEST PREP"}
//           </h1>
//           <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8 whitespace-pre-line">
//             {/* Key: heroDescription */}
//             {safeData.heroDescription || 
//               "SCAT Test is one of the most sought-after tests for students. At GGES, we make SCAT test prep a cakewalk."}
//           </p>
//           <a
//             href="/free-trial"
//             className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
//           >
//             Book Free Trial Class
//           </a>
//         </div>
//       </section>

//       {/* ===== 2. INTRO SECTION (About SCAT) ===== */}
//       <section className="py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">
//             {/* Key: aboutHeading */}
//             {safeData.aboutHeading || "All You Need To Know About SCAT"}
//           </h2>
//           <p className="text-lg mb-6 whitespace-pre-line">
//             {/* Key: aboutDescription */}
//             {safeData.aboutDescription || 
//               "SCAT is an above-grade-level test. It shows how your child’s score compares with both their own grade and higher grades."}
//           </p>

//           <h3 className="text-2xl font-semibold mb-4">
//              {/* Key: versionsHeading */}
//              {safeData.versionsHeading || "Three Versions of SCAT"}
//           </h3>
//           <ul className="list-disc pl-6 space-y-2 text-lg">
//              {/* Key: versionsList */}
//              {safeData.versionsList && safeData.versionsList.length > 0 ? (
//                  safeData.versionsList.map((ver, i) => (
//                     ver && <li key={i}>{ver}</li>
//                  ))
//              ) : (
//                  // Fallback
//                  <>
//                   <li>Grades 2–3 → Elementary SCAT</li>
//                   <li>Grades 4–5 → Intermediate SCAT</li>
//                   <li>Grades 6+ → Advanced SCAT</li>
//                  </>
//              )}
//           </ul>
//         </div>
//       </section>

//       {/* ===== 3. FORMAT SECTION ===== */}
//       <section className="bg-gray-100 py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">
//              {/* Key: formatHeading */}
//              {safeData.formatHeading || "Test Format"}
//           </h2>

//           <p className="text-lg mb-8 whitespace-pre-line">
//              {/* Key: formatDescription */}
//              {safeData.formatDescription || "The SCAT test contains two sections. Each section has 55 questions."}
//           </p>

//           <div className="grid md:grid-cols-2 gap-10">
//              {/* Key: formatSections */}
//              {safeData.formatSections && safeData.formatSections.length > 0 ? (
//                  safeData.formatSections.map((sec, i) => (
//                     <div key={i} className="bg-white p-8 rounded-xl shadow">
//                         <h3 className="text-2xl font-semibold mb-4">{sec.title}</h3>
//                         <p className="whitespace-pre-line">{sec.description}</p>
//                     </div>
//                  ))
//              ) : (
//                  // Fallback
//                  <>
//                   <div className="bg-white p-8 rounded-xl shadow">
//                     <h3 className="text-2xl font-semibold mb-4">Verbal Section</h3>
//                     <p>Tests understanding of words and verbal reasoning.</p>
//                   </div>
//                   <div className="bg-white p-8 rounded-xl shadow">
//                     <h3 className="text-2xl font-semibold mb-4">Quantitative Section</h3>
//                     <p>Tests mathematical reasoning.</p>
//                   </div>
//                  </>
//              )}
//           </div>
//         </div>
//       </section>

//       {/* ===== 4. SCORING SECTION ===== */}
//       <section className="py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-8">
//              {/* Key: scoringHeading */}
//              {safeData.scoringHeading || "Scoring & Levels"}
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8">
//              {/* Key: scoringLevels */}
//              {safeData.scoringLevels && safeData.scoringLevels.length > 0 ? (
//                  safeData.scoringLevels.map((lvl, i) => (
//                     <div key={i} className="border p-6 rounded-xl">
//                         <h3 className="text-xl font-bold mb-4">{lvl.title}</h3>
//                         <p className="whitespace-pre-line">{lvl.details}</p>
//                     </div>
//                  ))
//              ) : (
//                  // Fallback
//                  <div className="border p-6 rounded-xl col-span-3 text-center">
//                     No Scoring Data Available
//                  </div>
//              )}
//           </div>

//           <p className="text-lg mt-6 text-center md:text-left whitespace-pre-line">
//              {/* Key: scoringFooter */}
//              {safeData.scoringFooter || "Scores are based on the number of correct answers out of 50 scored questions."}
//           </p>
//         </div>
//       </section>

//       {/* ===== 5. TIPS SECTION ===== */}
//       <section className="bg-gray-100 py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">
//              {/* Key: tipsHeading */}
//              {safeData.tipsHeading || "SCAT Test Tips"}
//           </h2>

//           <ul className="list-disc pl-6 space-y-3 text-lg">
//              {/* Key: tipsList */}
//              {safeData.tipsList && safeData.tipsList.length > 0 ? (
//                  safeData.tipsList.map((tip, i) => (
//                     tip && <li key={i}>{tip}</li>
//                  ))
//              ) : (
//                  // Fallback
//                  <li>Don’t panic — this test is designed for older students.</li>
//              )}
//           </ul>
//         </div>
//       </section>

//       {/* ===== 6. REGISTRATION SECTION ===== */}
//       <section className="py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">
//              {/* Key: registerHeading */}
//              {safeData.registerHeading || "How To Register"}
//           </h2>

//           <p className="text-lg mb-4">
//              {/* Key: registerSubHeading */}
//              {safeData.registerSubHeading || "Schedule your test with Prometric by:"}
//           </p>

//           <ul className="list-disc pl-6 space-y-2 text-lg mb-6">
//              {/* Key: registerContactList */}
//              {safeData.registerContactList && safeData.registerContactList.length > 0 ? (
//                  safeData.registerContactList.map((item, i) => (
//                     item && <li key={i}>{item}</li>
//                  ))
//              ) : (
//                  <li>Online: www.prometric.com/jhucty</li>
//              )}
//           </ul>

//           <p className="text-lg mb-4 font-semibold">
//              {/* Key: registerAuthNote */}
//              {safeData.registerAuthNote || "You must have a 9-digit Authorization Number."}
//           </p>

//           <p className="text-lg">Get it from:</p>
//           <ul className="list-disc pl-6 space-y-2 text-lg">
//              {/* Key: registerGetFromList */}
//              {safeData.registerGetFromList && safeData.registerGetFromList.length > 0 ? (
//                  safeData.registerGetFromList.map((item, i) => (
//                     item && <li key={i}>{item}</li>
//                  ))
//              ) : (
//                  <li>MyCTY portal</li>
//              )}
//           </ul>
//         </div>
//       </section>

//       {/* ===== 7. CTA SECTION ===== */}
//       <section className="bg-[#0f172a] py-16 px-4 text-center">
//         <div className="max-w-7xl mx-auto text-white">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Ready To Start SCAT Preparation?
//           </h2>
//           <p className="mb-8 text-lg">
//             Enroll now for our FREE trial class and experience the GGES difference.
//           </p>

//           <a
//             href="/free-trial"
//             className="inline-block bg-yellow-400 text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition"
//           >
//             Get Free Trial Class
//           </a>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ScatTestPrep;

import React, { useEffect, useState } from "react";
import axios from "axios";

const ScatTestPrep = () => {
  // --- State Management ---
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScatData = async () => {
      try {
        // API URL Construction
        const response = await axios.get(`${import.meta.env.VITE_APP_URL}api/user/scat-test`);
        
        console.log("SCAT API Data:", response.data);

        if (response.data) {
          // Admin panel usually wraps data in 'data' key
          let apiData = response.data.data || response.data;

          // If array, take first item, else take object
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
        console.error("Error fetching SCAT data:", err);
        setError("Failed to load content.");
        setLoading(false);
      }
    };

    fetchScatData();
  }, []);

  // Loading & Error Handling
  if (loading) return <div className="text-center py-20 font-bold text-gray-500">Loading SCAT Prep...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

  // Safe Data (Validation)
  const safeData = data || {};

  return (
    <div className="w-full bg-white text-gray-800" id='scat'>
      
      {/* ===== 1. HERO SECTION ===== */}
      {/* Background color hamesha rahega taaki button dikh sake */}
      <section className="bg-[#0f172a] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Title: Sirf tab dikhega jab data ho */}
          {safeData.heroTitle && (
            <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase">
                {safeData.heroTitle}
            </h1>
          )}
          
          {/* Description: Sirf tab dikhega jab data ho */}
          {safeData.heroDescription && (
            <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8 whitespace-pre-line">
                {safeData.heroDescription}
            </p>
          )}

          {/* BUTTON: Ye Default rahega (Always Visible) */}
          <a
            href="/free-trial"
            className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Book Free Trial Class
          </a>
        </div>
      </section>

      {/* ===== 2. INTRO SECTION (About SCAT) ===== */}
      {/* Ye section tabhi render hoga jab iska content exist kare */}
      {(safeData.aboutHeading || safeData.aboutDescription || safeData.versionsHeading || (safeData.versionsList && safeData.versionsList.length > 0)) && (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
            
            {safeData.aboutHeading && (
                <h2 className="text-3xl font-bold mb-6">
                    {safeData.aboutHeading}
                </h2>
            )}

            {safeData.aboutDescription && (
                <p className="text-lg mb-6 whitespace-pre-line">
                    {safeData.aboutDescription}
                </p>
            )}

            {safeData.versionsHeading && (
                <h3 className="text-2xl font-semibold mb-4">
                    {safeData.versionsHeading}
                </h3>
            )}

            {safeData.versionsList && safeData.versionsList.length > 0 && (
                <ul className="list-disc pl-6 space-y-2 text-lg">
                    {safeData.versionsList.map((ver, i) => (
                        ver ? <li key={i}>{ver}</li> : null
                    ))}
                </ul>
            )}
            </div>
        </section>
      )}

      {/* ===== 3. FORMAT SECTION ===== */}
      {(safeData.formatHeading || safeData.formatDescription || (safeData.formatSections && safeData.formatSections.length > 0)) && (
        <section className="bg-gray-100 py-16 px-4">
            <div className="max-w-7xl mx-auto">
            
            {safeData.formatHeading && (
                <h2 className="text-3xl font-bold mb-6">
                    {safeData.formatHeading}
                </h2>
            )}

            {safeData.formatDescription && (
                <p className="text-lg mb-8 whitespace-pre-line">
                    {safeData.formatDescription}
                </p>
            )}

            {safeData.formatSections && safeData.formatSections.length > 0 && (
                <div className="grid md:grid-cols-2 gap-10">
                    {safeData.formatSections.map((sec, i) => (
                        <div key={i} className="bg-white p-8 rounded-xl shadow">
                            {sec.title && <h3 className="text-2xl font-semibold mb-4">{sec.title}</h3>}
                            {sec.description && <p className="whitespace-pre-line">{sec.description}</p>}
                        </div>
                    ))}
                </div>
            )}
            </div>
        </section>
      )}

      {/* ===== 4. SCORING SECTION ===== */}
      {(safeData.scoringHeading || safeData.scoringFooter || (safeData.scoringLevels && safeData.scoringLevels.length > 0)) && (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
            
            {safeData.scoringHeading && (
                <h2 className="text-3xl font-bold mb-8">
                    {safeData.scoringHeading}
                </h2>
            )}

            {safeData.scoringLevels && safeData.scoringLevels.length > 0 && (
                <div className="grid md:grid-cols-3 gap-8">
                    {safeData.scoringLevels.map((lvl, i) => (
                        <div key={i} className="border p-6 rounded-xl">
                            {lvl.title && <h3 className="text-xl font-bold mb-4">{lvl.title}</h3>}
                            {lvl.details && <p className="whitespace-pre-line">{lvl.details}</p>}
                        </div>
                    ))}
                </div>
            )}

            {safeData.scoringFooter && (
                <p className="text-lg mt-6 text-center md:text-left whitespace-pre-line">
                    {safeData.scoringFooter}
                </p>
            )}
            </div>
        </section>
      )}

      {/* ===== 5. TIPS SECTION ===== */}
      {(safeData.tipsHeading || (safeData.tipsList && safeData.tipsList.length > 0)) && (
        <section className="bg-gray-100 py-16 px-4">
            <div className="max-w-7xl mx-auto">
            
            {safeData.tipsHeading && (
                <h2 className="text-3xl font-bold mb-6">
                    {safeData.tipsHeading}
                </h2>
            )}

            {safeData.tipsList && safeData.tipsList.length > 0 && (
                <ul className="list-disc pl-6 space-y-3 text-lg">
                    {safeData.tipsList.map((tip, i) => (
                        tip ? <li key={i}>{tip}</li> : null
                    ))}
                </ul>
            )}
            </div>
        </section>
      )}

      {/* ===== 6. REGISTRATION SECTION ===== */}
      {(safeData.registerHeading || safeData.registerSubHeading || safeData.registerAuthNote || (safeData.registerContactList && safeData.registerContactList.length > 0) || (safeData.registerGetFromList && safeData.registerGetFromList.length > 0)) && (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
            
            {safeData.registerHeading && (
                <h2 className="text-3xl font-bold mb-6">
                    {safeData.registerHeading}
                </h2>
            )}

            {safeData.registerSubHeading && (
                <p className="text-lg mb-4">
                    {safeData.registerSubHeading}
                </p>
            )}

            {safeData.registerContactList && safeData.registerContactList.length > 0 && (
                <ul className="list-disc pl-6 space-y-2 text-lg mb-6">
                    {safeData.registerContactList.map((item, i) => (
                        item ? <li key={i}>{item}</li> : null
                    ))}
                </ul>
            )}

            {safeData.registerAuthNote && (
                <p className="text-lg mb-4 font-semibold">
                    {safeData.registerAuthNote}
                </p>
            )}

            {(safeData.registerGetFromList && safeData.registerGetFromList.length > 0) && (
                <>
                    <p className="text-lg">Get it from:</p>
                    <ul className="list-disc pl-6 space-y-2 text-lg">
                        {safeData.registerGetFromList.map((item, i) => (
                            item ? <li key={i}>{item}</li> : null
                        ))}
                    </ul>
                </>
            )}
            </div>
        </section>
      )}

      {/* ===== 7. CTA SECTION (Default) ===== */}
      {/* Ye Section hamesha dikhega, chahe data ho ya na ho */}
      <section className="bg-[#0f172a] py-16 px-4 text-center">
        <div className="max-w-7xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready To Start SCAT Preparation?
          </h2>
          <p className="mb-8 text-lg">
            Enroll now for our FREE trial class and experience the GGES difference.
          </p>

          <a
            href="/free-trial"
            className="inline-block bg-yellow-400 text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition"
          >
            Get Free Trial Class
          </a>
        </div>
      </section>
    </div>
  );
};

export default ScatTestPrep;