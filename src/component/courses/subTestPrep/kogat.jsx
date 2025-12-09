// import React from "react";

// const CogatTestPrep = () => {
//   return (
//     <div className="w-full bg-white text-gray-800" id='cogat'>

//       {/* HERO SECTION */}
//       <section className="bg-[#0f172a] text-white py-20 px-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">
//             COGAT TEST PREP
//           </h1>
//           <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8">
//             The Cognitive Abilities Test (CogAT) measures reasoning skills through verbal, quantitative, and non-verbal questions. GGES provides expert tutoring for CogAT test prep tailored to your child’s needs.
//           </p>
//           <a
//             href="/free-trial"
//             className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
//           >
//             Book Free Trial Class
//           </a>
//         </div>
//       </section>

//       {/* ABOUT COGAT */}
//       <section className="py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">About the CogAT Test</h2>
//           <p className="text-lg mb-4">
//             CogAT is a K-12 multiple-choice assessment measuring verbal, quantitative, and non-verbal reasoning. It is commonly used for admission into gifted programs and evaluates cognitive abilities rather than learned knowledge.
//           </p>
//           <p className="text-lg mb-4">
//             Our tutoring program includes hundreds of practice questions, interactive games, parent resources, and a customizable program based on your child’s grade level to maximize improvement.
//           </p>
//         </div>
//       </section>

//       {/* TEST SECTIONS */}
//       <section className="bg-gray-100 py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">CogAT Test Structure</h2>
//           <p className="text-lg mb-4">
//             The CogAT consists of three batteries: Verbal, Quantitative, and Non-Verbal. Each battery has three types of questions:
//           </p>
//           <div className="overflow-x-auto">
//             <table className="table-auto border-collapse border border-gray-300 w-full text-left mb-6">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="border border-gray-300 px-4 py-2">Verbal Battery</th>
//                   <th className="border border-gray-300 px-4 py-2">Quantitative Battery</th>
//                   <th className="border border-gray-300 px-4 py-2">Non-Verbal Battery</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="border border-gray-300 px-4 py-2">Picture Analogies</td>
//                   <td className="border border-gray-300 px-4 py-2">Number Analogies</td>
//                   <td className="border border-gray-300 px-4 py-2">Figure Matrices</td>
//                 </tr>
//                 <tr>
//                   <td className="border border-gray-300 px-4 py-2">Sentence Completion</td>
//                   <td className="border border-gray-300 px-4 py-2">Number Puzzles</td>
//                   <td className="border border-gray-300 px-4 py-2">Paper Folding</td>
//                 </tr>
//                 <tr>
//                   <td className="border border-gray-300 px-4 py-2">Picture Classification</td>
//                   <td className="border border-gray-300 px-4 py-2">Number Series</td>
//                   <td className="border border-gray-300 px-4 py-2">Figure Classification</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>

//       {/* LEVELS AND TIMING */}
//       <section className="py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">CogAT Levels & Timing</h2>
//           <p className="text-lg mb-4">
//             CogAT levels vary by grade, number of questions, and test duration. Common levels:
//           </p>
//           <div className="overflow-x-auto">
//             <table className="table-auto border-collapse border border-gray-300 w-full text-left mb-6">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="border border-gray-300 px-4 py-2">Grade</th>
//                   <th className="border border-gray-300 px-4 py-2">CogAT Level</th>
//                   <th className="border border-gray-300 px-4 py-2">Questions</th>
//                   <th className="border border-gray-300 px-4 py-2">Test Time</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr><td className="border px-4 py-2">Kindergarten</td><td className="border px-4 py-2">Level 5/6</td><td className="border px-4 py-2">118</td><td className="border px-4 py-2">112 min</td></tr>
//                 <tr><td className="border px-4 py-2">1st Grade</td><td className="border px-4 py-2">Level 7</td><td className="border px-4 py-2">136</td><td className="border px-4 py-2">112 min</td></tr>
//                 <tr><td className="border px-4 py-2">2nd Grade</td><td className="border px-4 py-2">Level 8</td><td className="border px-4 py-2">154</td><td className="border px-4 py-2">122 min</td></tr>
//                 <tr><td className="border px-4 py-2">3rd Grade</td><td className="border px-4 py-2">Level 9</td><td className="border px-4 py-2">170</td><td className="border px-4 py-2">90 min</td></tr>
//                 <tr><td className="border px-4 py-2">4th Grade</td><td className="border px-4 py-2">Level 10</td><td className="border px-4 py-2">176</td><td className="border px-4 py-2">90 min</td></tr>
//                 <tr><td className="border px-4 py-2">5th Grade</td><td className="border px-4 py-2">Level 11</td><td className="border px-4 py-2">176</td><td className="border px-4 py-2">90 min</td></tr>
//                 <tr><td className="border px-4 py-2">6th Grade</td><td className="border px-4 py-2">Level 12</td><td className="border px-4 py-2">176</td><td className="border px-4 py-2">90 min</td></tr>
//                 <tr><td className="border px-4 py-2">7th–8th Grade</td><td className="border px-4 py-2">Level 13/14</td><td className="border px-4 py-2">176</td><td className="border px-4 py-2">90 min</td></tr>
//                 <tr><td className="border px-4 py-2">9th–10th Grade</td><td className="border px-4 py-2">Level 15/16</td><td className="border px-4 py-2">176</td><td className="border px-4 py-2">90 min</td></tr>
//                 <tr><td className="border px-4 py-2">11th–12th Grade</td><td className="border px-4 py-2">Level 17/18</td><td className="border px-4 py-2">176</td><td className="border px-4 py-2">90 min</td></tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>

//       {/* SCORING */}
//       <section className="bg-gray-100 py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">How CogAT is Scored</h2>
//           <p className="text-lg mb-4">
//             CogAT uses age and grade norms. Raw scores are converted to Universal Scale Scores (USS) for each battery, which are then used to calculate Standard Age Score (SAS), percentile rank, and stanine scores. These provide a score profile highlighting strengths and areas for improvement.
//           </p>
//           <p className="text-lg mb-4">
//             Age norms are more precise for students who are younger or older than typical grade-level peers.
//           </p>
//         </div>
//       </section>

//       {/* LOCATIONS */}
//       <section className="py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">Where is the CogAT Given?</h2>
//           <p className="text-lg mb-4">
//             CogAT is administered across the United States. Major areas include Seattle, Dallas-Fort Worth, Baltimore, Atlanta, North Carolina, South Carolina, Washington DC, Chicago, Minneapolis, Houston, and San Antonio.
//           </p>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="bg-[#0f172a] py-16 px-4 text-center">
//         <div className="max-w-7xl mx-auto text-white">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Start Your CogAT Prep Today!
//           </h2>
//           <p className="mb-8 text-lg">
//             Take a Free Trial Online Tutoring class for CogAT Test Prep and give your child the edge in reasoning skills.
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

// export default CogatTestPrep;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const CogatTestPrep = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   // --- API Call ---
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // API Endpoint: /api/cogat-test
//         const response = await axios.get(`${import.meta.env.VITE_APP_URL}api/user/cogat-test`);
        
//         // Validation: Check if data exists
//         if (response.data && response.data.data) {
//           setData(response.data.data);
//         } else {
//           setData(null);
//         }
//       } catch (err) {
//         console.error("Error fetching CogAT data:", err);
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

//   // --- 3. Main Content ---
//   return (
//     <div className="w-full bg-white text-gray-800" id='cogat'>

//       {/* HERO SECTION */}
//       <section className="bg-[#0f172a] text-white py-20 px-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">
//             {data?.heroTitle || "COGAT TEST PREP"}
//           </h1>
//           <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8 whitespace-pre-wrap">
//             {data?.heroDescription || "The Cognitive Abilities Test (CogAT) measures reasoning skills..."}
//           </p>
//           <a
//             href="/free-trial"
//             className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
//           >
//             Book Free Trial Class
//           </a>
//         </div>
//       </section>

//       {/* ABOUT COGAT */}
//       <section className="py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">
//             {data?.aboutHeading || "About the CogAT Test"}
//           </h2>
//           <div className="text-lg mb-4 whitespace-pre-wrap">
//             {data?.aboutDescription}
//           </div>
//         </div>
//       </section>

//       {/* TEST SECTIONS (STRUCTURE TABLE) */}
//       <section className="bg-gray-100 py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">
//             {data?.structureHeading || "CogAT Test Structure"}
//           </h2>
//           <p className="text-lg mb-4 whitespace-pre-wrap">
//             {data?.structureDescription}
//           </p>
          
//           <div className="overflow-x-auto">
//             <table className="table-auto border-collapse border border-gray-300 w-full text-left mb-6">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="border border-gray-300 px-4 py-2">Verbal Battery</th>
//                   <th className="border border-gray-300 px-4 py-2">Quantitative Battery</th>
//                   <th className="border border-gray-300 px-4 py-2">Non-Verbal Battery</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* Validation: Check if table data exists and is not empty */}
//                 {data?.structureTable?.length > 0 ? (
//                   data.structureTable.map((row, index) => (
//                     <tr key={index}>
//                       <td className="border border-gray-300 px-4 py-2">{row.verbal}</td>
//                       <td className="border border-gray-300 px-4 py-2">{row.quantitative}</td>
//                       <td className="border border-gray-300 px-4 py-2">{row.nonVerbal}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="3" className="border border-gray-300 px-4 py-2 text-center">
//                       No structure data available.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>

//       {/* LEVELS AND TIMING (LEVELS TABLE) */}
//       <section className="py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">
//             {data?.levelsHeading || "CogAT Levels & Timing"}
//           </h2>
//           <p className="text-lg mb-4 whitespace-pre-wrap">
//             {data?.levelsDescription}
//           </p>

//           <div className="overflow-x-auto">
//             <table className="table-auto border-collapse border border-gray-300 w-full text-left mb-6">
//               <thead>
//                 <tr className="bg-gray-200">
//                   <th className="border border-gray-300 px-4 py-2">Grade</th>
//                   <th className="border border-gray-300 px-4 py-2">CogAT Level</th>
//                   <th className="border border-gray-300 px-4 py-2">Questions</th>
//                   <th className="border border-gray-300 px-4 py-2">Test Time</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {/* Validation for Levels Table */}
//                 {data?.levelsTable?.length > 0 ? (
//                   data.levelsTable.map((row, index) => (
//                     <tr key={index}>
//                       <td className="border border-gray-300 px-4 py-2">{row.grade}</td>
//                       <td className="border border-gray-300 px-4 py-2">{row.level}</td>
//                       <td className="border border-gray-300 px-4 py-2">{row.questions}</td>
//                       <td className="border border-gray-300 px-4 py-2">{row.testTime}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="4" className="border border-gray-300 px-4 py-2 text-center">
//                       No levels data available.
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>

//       {/* SCORING */}
//       <section className="bg-gray-100 py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">
//             {data?.scoringHeading || "How CogAT is Scored"}
//           </h2>
//           <div className="text-lg mb-4 whitespace-pre-wrap">
//             {data?.scoringDescription}
//           </div>
//         </div>
//       </section>

//       {/* LOCATIONS */}
//       <section className="py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">
//             {data?.locationHeading || "Where is the CogAT Given?"}
//           </h2>
//           <div className="text-lg mb-4 whitespace-pre-wrap">
//             {data?.locationDescription}
//           </div>
//         </div>
//       </section>

//       {/* CTA (Static - Keeping style consistent) */}
//       <section className="bg-[#0f172a] py-16 px-4 text-center">
//         <div className="max-w-7xl mx-auto text-white">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Start Your CogAT Prep Today!
//           </h2>
//           <p className="mb-8 text-lg">
//             Take a Free Trial Online Tutoring class for CogAT Test Prep and give your child the edge in reasoning skills.
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

// export default CogatTestPrep;

import React, { useEffect, useState } from "react";
import axios from "axios";

const CogatTestPrep = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // --- API Call ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_URL}api/user/cogat-test`);
        
        // Validation
        if (response.data && response.data.data) {
          setData(response.data.data);
        } else {
          setData(null);
        }
      } catch (err) {
        console.error("Error fetching CogAT data:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
    <div className="w-full bg-white text-gray-800" id='cogat'>

      {/* HERO SECTION */}
      {/* Background and Button always visible */}
      <section className="bg-[#0f172a] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Title: Visible only if data exists */}
          {safeData.heroTitle && (
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {safeData.heroTitle}
              </h1>
          )}

          {/* Description: Visible only if data exists */}
          {safeData.heroDescription && (
              <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8 whitespace-pre-wrap">
                {safeData.heroDescription}
              </p>
          )}

          {/* BUTTON: Always Visible (Default) */}
          <a
            href="/free-trial"
            className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Book Free Trial Class
          </a>
        </div>
      </section>

      {/* ABOUT COGAT */}
      {/* Section renders only if Heading or Description exists */}
      {(safeData.aboutHeading || safeData.aboutDescription) && (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
            {safeData.aboutHeading && (
                <h2 className="text-3xl font-bold mb-6">
                    {safeData.aboutHeading}
                </h2>
            )}
            
            {safeData.aboutDescription && (
                <div className="text-lg mb-4 whitespace-pre-wrap">
                    {safeData.aboutDescription}
                </div>
            )}
            </div>
        </section>
      )}

      {/* TEST SECTIONS (STRUCTURE TABLE) */}
      {/* Section renders only if Heading, Desc or Table Data exists */}
      {(safeData.structureHeading || safeData.structureDescription || (safeData.structureTable && safeData.structureTable.length > 0)) && (
        <section className="bg-gray-100 py-16 px-4">
            <div className="max-w-7xl mx-auto">
            
            {safeData.structureHeading && (
                <h2 className="text-3xl font-bold mb-6">
                    {safeData.structureHeading}
                </h2>
            )}

            {safeData.structureDescription && (
                <p className="text-lg mb-4 whitespace-pre-wrap">
                    {safeData.structureDescription}
                </p>
            )}
            
            {safeData.structureTable && safeData.structureTable.length > 0 && (
                <div className="overflow-x-auto">
                    <table className="table-auto border-collapse border border-gray-300 w-full text-left mb-6">
                    <thead>
                        <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2">Verbal Battery</th>
                        <th className="border border-gray-300 px-4 py-2">Quantitative Battery</th>
                        <th className="border border-gray-300 px-4 py-2">Non-Verbal Battery</th>
                        </tr>
                    </thead>
                    <tbody>
                        {safeData.structureTable.map((row, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 px-4 py-2">{row.verbal}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.quantitative}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.nonVerbal}</td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            )}
            </div>
        </section>
      )}

      {/* LEVELS AND TIMING (LEVELS TABLE) */}
      {(safeData.levelsHeading || safeData.levelsDescription || (safeData.levelsTable && safeData.levelsTable.length > 0)) && (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
            
            {safeData.levelsHeading && (
                <h2 className="text-3xl font-bold mb-6">
                    {safeData.levelsHeading}
                </h2>
            )}

            {safeData.levelsDescription && (
                <p className="text-lg mb-4 whitespace-pre-wrap">
                    {safeData.levelsDescription}
                </p>
            )}

            {safeData.levelsTable && safeData.levelsTable.length > 0 && (
                <div className="overflow-x-auto">
                    <table className="table-auto border-collapse border border-gray-300 w-full text-left mb-6">
                    <thead>
                        <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2">Grade</th>
                        <th className="border border-gray-300 px-4 py-2">CogAT Level</th>
                        <th className="border border-gray-300 px-4 py-2">Questions</th>
                        <th className="border border-gray-300 px-4 py-2">Test Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {safeData.levelsTable.map((row, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 px-4 py-2">{row.grade}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.level}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.questions}</td>
                                <td className="border border-gray-300 px-4 py-2">{row.testTime}</td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            )}
            </div>
        </section>
      )}

      {/* SCORING */}
      {(safeData.scoringHeading || safeData.scoringDescription) && (
        <section className="bg-gray-100 py-16 px-4">
            <div className="max-w-7xl mx-auto">
            {safeData.scoringHeading && (
                <h2 className="text-3xl font-bold mb-6">
                    {safeData.scoringHeading}
                </h2>
            )}
            
            {safeData.scoringDescription && (
                <div className="text-lg mb-4 whitespace-pre-wrap">
                    {safeData.scoringDescription}
                </div>
            )}
            </div>
        </section>
      )}

      {/* LOCATIONS */}
      {(safeData.locationHeading || safeData.locationDescription) && (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
            {safeData.locationHeading && (
                <h2 className="text-3xl font-bold mb-6">
                    {safeData.locationHeading}
                </h2>
            )}
            
            {safeData.locationDescription && (
                <div className="text-lg mb-4 whitespace-pre-wrap">
                    {safeData.locationDescription}
                </div>
            )}
            </div>
        </section>
      )}

      {/* CTA (Always Visible - Default) */}
      <section className="bg-[#0f172a] py-16 px-4 text-center">
        <div className="max-w-7xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your CogAT Prep Today!
          </h2>
          <p className="mb-8 text-lg">
            Take a Free Trial Online Tutoring class for CogAT Test Prep and give your child the edge in reasoning skills.
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

export default CogatTestPrep;