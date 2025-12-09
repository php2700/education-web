// import React from "react";

// const SsatTestPrep = () => {
//   return (
//     <div className="w-full bg-white py-12 px-4 md:px-16" id='ssat'>
//        <div className="max-w-7xl mx-auto">
//       {/* ===== HEADER ===== */}
//       <div className="text-center mb-10">
//         <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
//           SSAT TEST PREP
//         </h1>
//         <p className="text-gray-600 text-sm md:text-base max-w-4xl mx-auto">
//           At GGES, we have specialized tutors for SSAT test preparation. Our expert
//           strategies and in-depth knowledge help students achieve the best possible results.
//         </p>

//         <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
//           Click here for Free Trial Class
//         </button>
//       </div>


//       {/* ===== ABOUT SSAT ===== */}
//       <div className="mt-16">
//         <h2 className="text-3xl font-bold mb-6 text-center">ABOUT SSAT</h2>

//         <p className="text-gray-700 leading-relaxed max-w-5xl mx-auto mb-6 text-center">
//           Developed to standardize admissions for grades 3–11, the SSAT measures a
//           student’s verbal, math, and reading skills and provides a reliable, objective
//           insight into academic potential for private school admission.
//         </p>

//         <p className="text-gray-700 leading-relaxed max-w-5xl mx-auto text-center">
//           It plays an important role in a holistic assessment process by helping schools
//           fairly evaluate applicants based on cognitive skills.
//         </p>
//       </div>


//       {/* ===== LEVELS SECTION ===== */}
//       <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">

//         <div className="bg-gray-100 p-6 rounded-xl shadow">
//           <h3 className="text-xl font-bold mb-3 text-blue-700">Elementary Level</h3>
//           <p className="text-gray-700">
//             For applicants in grades 3 and 4. Includes one Quantitative section,
//             Reading Comprehension, and Verbal Reasoning.
//           </p>
//         </div>

//         <div className="bg-gray-100 p-6 rounded-xl shadow">
//           <h3 className="text-xl font-bold mb-3 text-blue-700">Middle Level</h3>
//           <p className="text-gray-700">
//             For grades 5–7. Includes two Quantitative sections, Reading Comprehension,
//             Verbal Reasoning, an essay, and an experimental section.
//           </p>
//         </div>

//         <div className="bg-gray-100 p-6 rounded-xl shadow">
//           <h3 className="text-xl font-bold mb-3 text-blue-700">Upper Level</h3>
//           <p className="text-gray-700">
//             For grades 8–11. Same sections as Middle Level but with increased difficulty.
//           </p>
//         </div>
//       </div>


//       {/* ===== ISEE vs SSAT ===== */}
//       <div className="mt-16 bg-gray-50 p-8 rounded-xl shadow-inner">
//         <h2 className="text-3xl font-bold text-center mb-6">
//           SSAT vs ISEE – What’s the Difference?
//         </h2>

//         <ul className="list-disc list-inside text-gray-700 max-w-5xl mx-auto space-y-2">
//           <li>SSAT uses synonyms and analogies in vocabulary testing</li>
//           <li>ISEE uses synonyms and sentence completion</li>
//           <li>ISEE has longer reading passages</li>
//           <li>SSAT includes a wider variety of genres (including poetry)</li>
//           <li>ISEE places a higher emphasis on mathematical reasoning</li>
//         </ul>
//       </div>


//       {/* ===== SCORING SECTION ===== */}
//       <div className="mt-16">
//         <h2 className="text-3xl font-bold text-center mb-8">
//           How is the SSAT Scored?
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//           <div className="border p-6 rounded-lg shadow">
//             <h3 className="text-xl font-bold mb-3 text-blue-700">Quantitative</h3>
//             <p>Upper: 500 – 800</p>
//             <p>Middle: 440 – 704</p>
//             <p>Elementary: 300 – 600</p>
//           </div>

//           <div className="border p-6 rounded-lg shadow">
//             <h3 className="text-xl font-bold mb-3 text-blue-700">Reading</h3>
//             <p>Upper: 500 – 800</p>
//             <p>Middle: 440 – 710</p>
//             <p>Elementary: 300 – 600</p>
//           </div>

//           <div className="border p-6 rounded-lg shadow">
//             <h3 className="text-xl font-bold mb-3 text-blue-700">Verbal</h3>
//             <p>Upper: 500 – 800</p>
//             <p>Middle: 410 – 710</p>
//             <p>Elementary: 300 – 600</p>
//           </div>

//         </div>

//         <p className="text-center text-gray-600 mt-6 max-w-4xl mx-auto">
//           Essay is not scored, but a copy is sent to schools. All scores are converted
//           into grade-appropriate percentile ranks.
//         </p>
//       </div>


//       {/* ===== SSAT TEST STRUCTURE TABLES ===== */}
//       <div className="mt-16">
//         <h2 className="text-3xl font-bold text-center mb-6">SSAT TEST STRUCTURE</h2>

//         <h3 className="text-2xl font-bold mb-3 mt-8">Middle Level (5th – 7th)</h3>
//         <div className="overflow-x-auto mb-10">
//           <table className="w-full border text-left">
//             <thead className="bg-blue-600 text-white">
//               <tr>
//                 <th className="p-3 border">Section</th>
//                 <th className="p-3 border">Time</th>
//                 <th className="p-3 border">Questions</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr><td className="p-3 border">Essay</td><td className="p-3 border">25 min</td><td className="p-3 border">1 Prompt</td></tr>
//               <tr><td className="p-3 border">Quantitative #1</td><td className="p-3 border">30 min</td><td className="p-3 border">25</td></tr>
//               <tr><td className="p-3 border">Reading</td><td className="p-3 border">40 min</td><td className="p-3 border">40</td></tr>
//               <tr><td className="p-3 border">Verbal</td><td className="p-3 border">30 min</td><td className="p-3 border">60</td></tr>
//               <tr><td className="p-3 border">Quantitative #2</td><td className="p-3 border">30 min</td><td className="p-3 border">25</td></tr>
//             </tbody>
//           </table>
//         </div>


//         <h3 className="text-2xl font-bold mb-3 mt-8">Upper Level (8th – 11th)</h3>
//         <div className="overflow-x-auto">
//           <table className="w-full border text-left">
//             <thead className="bg-green-600 text-white">
//               <tr>
//                 <th className="p-3 border">Section</th>
//                 <th className="p-3 border">Time</th>
//                 <th className="p-3 border">Questions</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr><td className="p-3 border">Essay</td><td className="p-3 border">25 min</td><td className="p-3 border">1 Prompt</td></tr>
//               <tr><td className="p-3 border">Quantitative #1</td><td className="p-3 border">30 min</td><td className="p-3 border">25</td></tr>
//               <tr><td className="p-3 border">Reading</td><td className="p-3 border">40 min</td><td className="p-3 border">40</td></tr>
//               <tr><td className="p-3 border">Verbal</td><td className="p-3 border">30 min</td><td className="p-3 border">60</td></tr>
//               <tr><td className="p-3 border">Quantitative #2</td><td className="p-3 border">30 min</td><td className="p-3 border">25</td></tr>
//             </tbody>
//           </table>
//         </div>
//       </div>


//       {/* ===== FINAL CTA ===== */}
//       <div className="text-center mt-16">
//         <h2 className="text-2xl font-bold mb-4">
//           Ready to start your SSAT preparation?
//         </h2>
//         <button className="bg-red-600 text-white px-10 py-4 rounded-full text-lg hover:bg-red-700 transition">
//           Click here for Free Trial Class
//         </button>
//       </div>
//   </div>
//     </div>
//   );
// };

// export default SsatTestPrep;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const SsatTestPrep = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchSsatData = async () => {
//       try {
//         // API Call
//         const response = await axios.get(`${import.meta.env.VITE_APP_URL}api/user/ssat-test`);
        
//         console.log("SSAT Data Response:", response.data);

//         if (response.data) {
//           let apiData = response.data.data || response.data;
//           // Agar array hai to first object lein, nahi to direct object
//           if (Array.isArray(apiData)) {
//             setData(apiData[0]);
//           } else {
//             setData(apiData);
//           }
//         }
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching SSAT data:", err);
//         setError("Failed to load SSAT Data.");
//         setLoading(false);
//       }
//     };

//     fetchSsatData();
//   }, []);

//   if (loading) return <div className="text-center py-20 font-bold text-gray-500">Loading...</div>;
//   if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

//   // Safe Data Object to avoid crash
//   const safeData = data || {};

//   return (
//     <div className="w-full bg-white py-12 px-4 md:px-16" id='ssat'>
//        <div className="max-w-7xl mx-auto">
//       {/* ===== HEADER ===== */}
//       <div className="text-center mb-10">
//         <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
//           {safeData.heroTitle || "SSAT TEST PREP"}
//         </h1>
//         <p className="text-gray-600 text-sm md:text-base max-w-4xl mx-auto whitespace-pre-line">
//           {safeData.heroDescription || 
//             "At GGES, we have specialized tutors for SSAT test preparation. Our expert strategies and in-depth knowledge help students achieve the best possible results."}
//         </p>

//         <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
//           Click here for Free Trial Class
//         </button>
//       </div>


//       {/* ===== ABOUT SSAT ===== */}
//       <div className="mt-16">
//         <h2 className="text-3xl font-bold mb-6 text-center">
//             {safeData.aboutHeading || "ABOUT SSAT"}
//         </h2>

//         <p className="text-gray-700 leading-relaxed max-w-5xl mx-auto mb-6 text-center whitespace-pre-line">
//           {safeData.aboutDescription || 
//             "Developed to standardize admissions for grades 3–11, the SSAT measures a student’s verbal, math, and reading skills and provides a reliable, objective insight into academic potential for private school admission."}
//         </p>
//       </div>


//       {/* ===== LEVELS SECTION ===== */}
//       <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
//         {safeData.levels && safeData.levels.length > 0 ? (
//             // Dynamic Data from API
//             safeData.levels.map((level, index) => (
//                 <div key={index} className="bg-gray-100 p-6 rounded-xl shadow">
//                     <h3 className="text-xl font-bold mb-3 text-blue-700">{level.title}</h3>
//                     <p className="text-gray-700 whitespace-pre-line">
//                         {level.description}
//                     </p>
//                 </div>
//             ))
//         ) : (
//             // Fallback (Original Static Content) if API has no levels
//             <>
//                 <div className="bg-gray-100 p-6 rounded-xl shadow">
//                 <h3 className="text-xl font-bold mb-3 text-blue-700">Elementary Level</h3>
//                 <p className="text-gray-700">
//                     For applicants in grades 3 and 4. Includes one Quantitative section,
//                     Reading Comprehension, and Verbal Reasoning.
//                 </p>
//                 </div>

//                 <div className="bg-gray-100 p-6 rounded-xl shadow">
//                 <h3 className="text-xl font-bold mb-3 text-blue-700">Middle Level</h3>
//                 <p className="text-gray-700">
//                     For grades 5–7. Includes two Quantitative sections, Reading Comprehension,
//                     Verbal Reasoning, an essay, and an experimental section.
//                 </p>
//                 </div>

//                 <div className="bg-gray-100 p-6 rounded-xl shadow">
//                 <h3 className="text-xl font-bold mb-3 text-blue-700">Upper Level</h3>
//                 <p className="text-gray-700">
//                     For grades 8–11. Same sections as Middle Level but with increased difficulty.
//                 </p>
//                 </div>
//             </>
//         )}
//       </div>


//       {/* ===== ISEE vs SSAT ===== */}
//       <div className="mt-16 bg-gray-50 p-8 rounded-xl shadow-inner">
//         <h2 className="text-3xl font-bold text-center mb-6">
//           {safeData.comparisonHeading || "SSAT vs ISEE – What’s the Difference?"}
//         </h2>

//         <ul className="list-disc list-inside text-gray-700 max-w-5xl mx-auto space-y-2">
//           {safeData.comparisonPoints && safeData.comparisonPoints.length > 0 ? (
//              safeData.comparisonPoints.map((point, index) => (
//                  point && <li key={index}>{point}</li>
//              ))
//           ) : (
//              // Fallback Static
//              <>
//                 <li>SSAT uses synonyms and analogies in vocabulary testing</li>
//                 <li>ISEE uses synonyms and sentence completion</li>
//                 <li>ISEE has longer reading passages</li>
//                 <li>SSAT includes a wider variety of genres (including poetry)</li>
//                 <li>ISEE places a higher emphasis on mathematical reasoning</li>
//              </>
//           )}
//         </ul>
//       </div>


//       {/* ===== SCORING SECTION ===== */}
//       <div className="mt-16">
//         <h2 className="text-3xl font-bold text-center mb-8">
//           {safeData.scoringHeading || "How is the SSAT Scored?"}
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//            {safeData.scoringCards && safeData.scoringCards.length > 0 ? (
//                safeData.scoringCards.map((card, index) => (
//                 <div key={index} className="border p-6 rounded-lg shadow">
//                     <h3 className="text-xl font-bold mb-3 text-blue-700">{card.title}</h3>
//                     {/* Admin panel uses 'content' for the body text */}
//                     <p className="whitespace-pre-line">{card.content}</p>
//                 </div>
//                ))
//            ) : (
//                // Fallback Static
//                <>
//                 <div className="border p-6 rounded-lg shadow">
//                     <h3 className="text-xl font-bold mb-3 text-blue-700">Quantitative</h3>
//                     <p>Upper: 500 – 800</p>
//                     <p>Middle: 440 – 704</p>
//                     <p>Elementary: 300 – 600</p>
//                 </div>
//                 {/* ... other fallback cards ... */}
//                 <div className="col-span-2 text-center text-gray-400">Loading other default cards...</div>
//                </>
//            )}
//         </div>

//         <p className="text-center text-gray-600 mt-6 max-w-4xl mx-auto">
//           {safeData.scoringFooter || "Essay is not scored, but a copy is sent to schools. All scores are converted into grade-appropriate percentile ranks."}
//         </p>
//       </div>


//       {/* ===== SSAT TEST STRUCTURE TABLES ===== */}
//       <div className="mt-16">
//         <h2 className="text-3xl font-bold text-center mb-6">
//             {safeData.structureHeading || "SSAT TEST STRUCTURE"}
//         </h2>

//         <h3 className="text-2xl font-bold mb-3 mt-8">Middle Level (5th – 7th)</h3>
//         <div className="overflow-x-auto mb-10">
//           <table className="w-full border text-left">
//             <thead className="bg-blue-600 text-white">
//               <tr>
//                 <th className="p-3 border">Section</th>
//                 <th className="p-3 border">Time</th>
//                 <th className="p-3 border">Questions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {safeData.middleTable && safeData.middleTable.length > 0 ? (
//                   safeData.middleTable.map((row, index) => (
//                     <tr key={index}>
//                         <td className="p-3 border">{row.section}</td>
//                         <td className="p-3 border">{row.time}</td>
//                         <td className="p-3 border">{row.questions}</td>
//                     </tr>
//                   ))
//               ) : (
//                   // Fallback Static
//                   <>
//                     <tr><td className="p-3 border">Essay</td><td className="p-3 border">25 min</td><td className="p-3 border">1 Prompt</td></tr>
//                     <tr><td className="p-3 border">Quantitative #1</td><td className="p-3 border">30 min</td><td className="p-3 border">25</td></tr>
//                     <tr><td className="p-3 border">Reading</td><td className="p-3 border">40 min</td><td className="p-3 border">40</td></tr>
//                     <tr><td className="p-3 border">Verbal</td><td className="p-3 border">30 min</td><td className="p-3 border">60</td></tr>
//                     <tr><td className="p-3 border">Quantitative #2</td><td className="p-3 border">30 min</td><td className="p-3 border">25</td></tr>
//                   </>
//               )}
//             </tbody>
//           </table>
//         </div>


//         <h3 className="text-2xl font-bold mb-3 mt-8">Upper Level (8th – 11th)</h3>
//         <div className="overflow-x-auto">
//           <table className="w-full border text-left">
//             <thead className="bg-green-600 text-white">
//               <tr>
//                 <th className="p-3 border">Section</th>
//                 <th className="p-3 border">Time</th>
//                 <th className="p-3 border">Questions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {safeData.upperTable && safeData.upperTable.length > 0 ? (
//                   safeData.upperTable.map((row, index) => (
//                     <tr key={index}>
//                         <td className="p-3 border">{row.section}</td>
//                         <td className="p-3 border">{row.time}</td>
//                         <td className="p-3 border">{row.questions}</td>
//                     </tr>
//                   ))
//               ) : (
//                   // Fallback Static
//                   <>
//                     <tr><td className="p-3 border">Essay</td><td className="p-3 border">25 min</td><td className="p-3 border">1 Prompt</td></tr>
//                     <tr><td className="p-3 border">Quantitative #1</td><td className="p-3 border">30 min</td><td className="p-3 border">25</td></tr>
//                     <tr><td className="p-3 border">Reading</td><td className="p-3 border">40 min</td><td className="p-3 border">40</td></tr>
//                     <tr><td className="p-3 border">Verbal</td><td className="p-3 border">30 min</td><td className="p-3 border">60</td></tr>
//                     <tr><td className="p-3 border">Quantitative #2</td><td className="p-3 border">30 min</td><td className="p-3 border">25</td></tr>
//                   </>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>


//       {/* ===== FINAL CTA ===== */}
//       <div className="text-center mt-16">
//         <h2 className="text-2xl font-bold mb-4">
//           Ready to start your SSAT preparation?
//         </h2>
//         <button className="bg-red-600 text-white px-10 py-4 rounded-full text-lg hover:bg-red-700 transition">
//           Click here for Free Trial Class
//         </button>
//       </div>
//   </div>
//     </div>
//   );
// };

// export default SsatTestPrep;

import React, { useEffect, useState } from "react";
import axios from "axios";

const SsatTestPrep = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSsatData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_URL}api/user/ssat-test`);
        
        if (response.data) {
          let apiData = response.data.data || response.data;
          
          if (apiData && Object.keys(apiData).length > 0) {
            if (Array.isArray(apiData)) {
              setData(apiData[0]);
            } else {
              setData(apiData);
            }
          } else {
            setData(null);
          }
        } else {
          setData(null);
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching SSAT data:", err);
        setError("Failed to load SSAT Data.");
        setLoading(false);
      }
    };

    fetchSsatData();
  }, []);

  if (loading) return <div className="text-center py-20 font-bold text-gray-500">Loading...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

  // Agar data null hai toh empty object use karein taaki crash na ho, 
  // lekin page render hoga taaki buttons dikh sakein.
  const safeData = data || {};

  return (
    <div className="w-full bg-white py-12 px-4 md:px-16" id='ssat'>
       <div className="max-w-7xl mx-auto">
      
      {/* ===== HEADER SECTION ===== */}
      <div className="text-center mb-10">
        {/* Title aur Description sirf tab dikhenge agar data hai */}
        {safeData.heroTitle && (
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              {safeData.heroTitle}
            </h1>
        )}
        
        {safeData.heroDescription && (
            <p className="text-gray-600 text-sm md:text-base max-w-4xl mx-auto whitespace-pre-line">
              {safeData.heroDescription}
            </p>
        )}

        {/* BUTTON: Ye hamesha dikhega chahe data ho ya na ho */}
        <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Click here for Free Trial Class
        </button>
      </div>


      {/* ===== ABOUT SSAT ===== */}
      {(safeData.aboutHeading || safeData.aboutDescription) && (
        <div className="mt-16">
          {safeData.aboutHeading && (
            <h2 className="text-3xl font-bold mb-6 text-center">
                {safeData.aboutHeading}
            </h2>
          )}

          {safeData.aboutDescription && (
            <p className="text-gray-700 leading-relaxed max-w-5xl mx-auto mb-6 text-center whitespace-pre-line">
              {safeData.aboutDescription}
            </p>
          )}
        </div>
      )}


      {/* ===== LEVELS SECTION ===== */}
      {/* Sirf tab dikhega agar levels array me data hai */}
      {safeData.levels && safeData.levels.length > 0 && (
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {safeData.levels.map((level, index) => (
                <div key={index} className="bg-gray-100 p-6 rounded-xl shadow">
                    {level.title && (
                        <h3 className="text-xl font-bold mb-3 text-blue-700">{level.title}</h3>
                    )}
                    {level.description && (
                        <p className="text-gray-700 whitespace-pre-line">
                            {level.description}
                        </p>
                    )}
                </div>
            ))}
        </div>
      )}


      {/* ===== ISEE vs SSAT ===== */}
      {(safeData.comparisonHeading || (safeData.comparisonPoints && safeData.comparisonPoints.length > 0)) && (
        <div className="mt-16 bg-gray-50 p-8 rounded-xl shadow-inner">
            {safeData.comparisonHeading && (
                <h2 className="text-3xl font-bold text-center mb-6">
                {safeData.comparisonHeading}
                </h2>
            )}

            {safeData.comparisonPoints && safeData.comparisonPoints.length > 0 && (
                <ul className="list-disc list-inside text-gray-700 max-w-5xl mx-auto space-y-2">
                {safeData.comparisonPoints.map((point, index) => (
                    point ? <li key={index}>{point}</li> : null
                ))}
                </ul>
            )}
        </div>
      )}


      {/* ===== SCORING SECTION ===== */}
      {(safeData.scoringHeading || safeData.scoringFooter || (safeData.scoringCards && safeData.scoringCards.length > 0)) && (
        <div className="mt-16">
            {safeData.scoringHeading && (
                <h2 className="text-3xl font-bold text-center mb-8">
                {safeData.scoringHeading}
                </h2>
            )}

            {safeData.scoringCards && safeData.scoringCards.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {safeData.scoringCards.map((card, index) => (
                    <div key={index} className="border p-6 rounded-lg shadow">
                        {card.title && <h3 className="text-xl font-bold mb-3 text-blue-700">{card.title}</h3>}
                        {card.content && <p className="whitespace-pre-line">{card.content}</p>}
                    </div>
                ))}
                </div>
            )}

            {safeData.scoringFooter && (
                <p className="text-center text-gray-600 mt-6 max-w-4xl mx-auto">
                {safeData.scoringFooter}
                </p>
            )}
        </div>
      )}


      {/* ===== SSAT TEST STRUCTURE TABLES ===== */}
      {(safeData.structureHeading || (safeData.middleTable && safeData.middleTable.length > 0) || (safeData.upperTable && safeData.upperTable.length > 0)) && (
        <div className="mt-16">
            {safeData.structureHeading && (
                <h2 className="text-3xl font-bold text-center mb-6">
                    {safeData.structureHeading}
                </h2>
            )}

            {/* Middle Level Table */}
            {safeData.middleTable && safeData.middleTable.length > 0 && (
                <>
                    <h3 className="text-2xl font-bold mb-3 mt-8">Middle Level (5th – 7th)</h3>
                    <div className="overflow-x-auto mb-10">
                    <table className="w-full border text-left">
                        <thead className="bg-blue-600 text-white">
                        <tr>
                            <th className="p-3 border">Section</th>
                            <th className="p-3 border">Time</th>
                            <th className="p-3 border">Questions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {safeData.middleTable.map((row, index) => (
                                <tr key={index}>
                                    <td className="p-3 border">{row.section}</td>
                                    <td className="p-3 border">{row.time}</td>
                                    <td className="p-3 border">{row.questions}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </>
            )}

            {/* Upper Level Table */}
            {safeData.upperTable && safeData.upperTable.length > 0 && (
                <>
                    <h3 className="text-2xl font-bold mb-3 mt-8">Upper Level (8th – 11th)</h3>
                    <div className="overflow-x-auto">
                    <table className="w-full border text-left">
                        <thead className="bg-green-600 text-white">
                        <tr>
                            <th className="p-3 border">Section</th>
                            <th className="p-3 border">Time</th>
                            <th className="p-3 border">Questions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {safeData.upperTable.map((row, index) => (
                                <tr key={index}>
                                    <td className="p-3 border">{row.section}</td>
                                    <td className="p-3 border">{row.time}</td>
                                    <td className="p-3 border">{row.questions}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </>
            )}
        </div>
      )}

      {/* ===== FINAL CTA SECTION ===== */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold mb-4">
          Ready to start your SSAT preparation?
        </h2>
        {/* BUTTON: Ye bhi hamesha dikhega */}
        <button className="bg-red-600 text-white px-10 py-4 rounded-full text-lg hover:bg-red-700 transition">
          Click here for Free Trial Class
        </button>
      </div>
  </div>
    </div>
  );
};

export default SsatTestPrep;