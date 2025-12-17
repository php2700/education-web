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

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const CogatTestPrep = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_APP_URL}api/user/cogat-test`);
//         if (response.data) {
//           const apiData = response.data.data || response.data;
//           if (Array.isArray(apiData) && apiData.length > 0) {
//             setData(apiData[0]);
//           } else {
//             setData(apiData);
//           }
//         }
//       } catch (err) {
//         console.error("Error fetching CogAT data:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleNavigate = () => navigate("/contact-us");

//   if (loading) return <div className="h-screen flex justify-center items-center"><div className="animate-spin h-10 w-10 border-4 border-blue-600 rounded-full border-t-transparent"></div></div>;

//   const safeData = data || {};

//   return (
//     <div className="w-full bg-white text-gray-800" id='cogat'>

//       {/* 1. HERO SECTION */}
//       <section className="bg-[#0f172a] text-white py-20 px-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">{safeData.heroTitle || "COGAT TEST PREP"}</h1>
//           <div className="text-lg md:text-xl max-w-4xl mx-auto mb-8 whitespace-pre-wrap text-left">
//             {safeData.heroDescription}
//             {/* Hero List (Bullet Points) */}
//             {safeData.heroList && (
//               <ul className="list-disc pl-6 mt-4 space-y-2">
//                 {safeData.heroList.map((item, idx) => (
//                   <li key={idx}>{item}</li>
//                 ))}
//               </ul>
//             )}
//           </div>
//           <button onClick={handleNavigate} className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition">
//             Book Free Trial Class
//           </button>
//         </div>
//       </section>

//       {/* 2. INTRO (What is on the CogAT?) */}
//       {(safeData.introHeading || safeData.introDescription) && (
//         <section className="py-16 px-4 bg-gray-50">
//           <div className="max-w-7xl mx-auto text-center">
//             <h2 className="text-3xl font-bold mb-4">{safeData.introHeading}</h2>
//             <p className="text-lg text-gray-700 max-w-4xl mx-auto">{safeData.introDescription}</p>
//           </div>
//         </section>
//       )}

//       {/* 3. TEST STRUCTURE TABLE */}
//       {safeData.structureTable && safeData.structureTable.length > 0 && (
//         <section className="py-16 px-4">
//           <div className="max-w-7xl mx-auto">
//             {/* <h2 className="text-3xl font-bold mb-6 text-center">{safeData.structureHeading}</h2> */}
//             <div className="overflow-x-auto shadow-lg rounded-lg">
//               <table className="w-full text-left border-collapse">
//                 <thead className="bg-blue-600 text-white">
//                   <tr>
//                     <th className="px-6 py-4 border">Verbal Battery</th>
//                     <th className="px-6 py-4 border">Quantitative Battery</th>
//                     <th className="px-6 py-4 border">Non-Verbal Battery</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {safeData.structureTable.map((row, index) => (
//                     <tr key={index} className="hover:bg-blue-50">
//                       <td className="px-6 py-4 border">{row.verbal}</td>
//                       <td className="px-6 py-4 border">{row.quantitative}</td>
//                       <td className="px-6 py-4 border">{row.nonVerbal}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* 4. MEASURE & ADMINISTER */}
//       <section className="py-16 px-4 bg-gray-50">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
//           {/* Measure */}
//           <div>
//             <h2 className="text-3xl font-bold mb-4">{safeData.measureHeading}</h2>
//             <p className="text-lg text-gray-700">{safeData.measureDescription}</p>
//           </div>
//           {/* Administer */}
//           <div>
//             <h2 className="text-3xl font-bold mb-4">{safeData.administerHeading}</h2>
//             <p className="text-lg text-gray-700 mb-4">{safeData.administerDescription}</p>
//             {safeData.administerList && (
//               <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                 {safeData.administerList.map((item, i) => <li key={i}>{item}</li>)}
//               </ul>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* 5. LEVELS TABLE */}
//       {safeData.levelsTable && safeData.levelsTable.length > 0 && (
//         <section className="py-16 px-4">
//           <div className="max-w-7xl mx-auto">
//             <h2 className="text-3xl font-bold mb-6 text-center">{safeData.levelsHeading}</h2>
//             <p className="text-center text-lg mb-8 max-w-4xl mx-auto">{safeData.levelsDescription}</p>

//             <div className="overflow-x-auto shadow-lg rounded-lg">
//               <table className="w-full text-left border-collapse">
//                 <thead className="bg-green-600 text-white">
//                   <tr>
//                     <th className="px-6 py-4 border">Grade</th>
//                     <th className="px-6 py-4 border">Level</th>
//                     <th className="px-6 py-4 border">Questions</th>
//                     <th className="px-6 py-4 border">Time</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {safeData.levelsTable.map((row, index) => (
//                     <tr key={index} className="hover:bg-green-50">
//                       <td className="px-6 py-4 border">{row.grade}</td>
//                       <td className="px-6 py-4 border">{row.level}</td>
//                       <td className="px-6 py-4 border">{row.questions}</td>
//                       <td className="px-6 py-4 border">{row.testTime}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* Question Count Section */}
//             {(safeData.questionCountHeading || safeData.questionCountDescription) && (
//                 <div className="mt-10 text-center bg-green-50 p-6 rounded-xl">
//                     <h3 className="text-2xl font-bold text-green-900 mb-2">{safeData.questionCountHeading}</h3>
//                     <p className="text-lg text-green-800">{safeData.questionCountDescription}</p>
//                 </div>
//             )}
//           </div>
//         </section>
//       )}

//       {/* 6. BATTERY DETAILS (Verbal, Non-Verbal, Quant) */}
//       <section className="py-16 px-4 bg-white">
//         <div className="max-w-7xl mx-auto space-y-12">
//             {/* Verbal */}
//             {safeData.verbalBatteryList && safeData.verbalBatteryList.length > 0 && (
//                 <div>
//                     <h2 className="text-3xl font-bold mb-6 text-blue-800 border-b-4 border-blue-600 inline-block">
//                         {safeData.verbalBatteryHeading || "VERBAL BATTERY"}
//                     </h2>
//                     <div className="grid gap-6">
//                         {safeData.verbalBatteryList.map((item, i) => (
//                             <div key={i} className="bg-blue-50 p-6 rounded-lg">
//                                 <h3 className="font-bold text-xl mb-2">{item.title}</h3>
//                                 <p className="text-gray-700 whitespace-pre-wrap">{item.content}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}

//             {/* Non-Verbal */}
//             {safeData.nonVerbalBatteryList && safeData.nonVerbalBatteryList.length > 0 && (
//                 <div>
//                     <h2 className="text-3xl font-bold mb-6 text-green-800 border-b-4 border-green-600 inline-block">
//                         {safeData.nonVerbalBatteryHeading || "NON-VERBAL BATTERY"}
//                     </h2>
//                     <div className="grid gap-6">
//                         {safeData.nonVerbalBatteryList.map((item, i) => (
//                             <div key={i} className="bg-green-50 p-6 rounded-lg">
//                                 <h3 className="font-bold text-xl mb-2">{item.title}</h3>
//                                 <p className="text-gray-700 whitespace-pre-wrap">{item.content}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}

//             {/* Quant */}
//             {safeData.quantBatteryList && safeData.quantBatteryList.length > 0 && (
//                 <div>
//                     <h2 className="text-3xl font-bold mb-6 text-yellow-800 border-b-4 border-yellow-600 inline-block">
//                         {safeData.quantBatteryHeading || "QUANTITATIVE BATTERY"}
//                     </h2>
//                     <div className="grid gap-6">
//                         {safeData.quantBatteryList.map((item, i) => (
//                             <div key={i} className="bg-yellow-50 p-6 rounded-lg">
//                                 <h3 className="font-bold text-xl mb-2">{item.title}</h3>
//                                 <p className="text-gray-700 whitespace-pre-wrap">{item.content}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//       </section>

//       {/* 7. SCORING & LOCATION */}
//       <section className="py-16 px-4 bg-gray-50">
//         <div className="max-w-7xl mx-auto space-y-12">
//             {/* Scoring */}
//             <div>
//                 <h2 className="text-3xl font-bold mb-4 text-center">{safeData.scoringHeading}</h2>
//                 <div className="text-lg text-gray-700 whitespace-pre-wrap bg-white p-8 rounded-xl shadow-sm">
//                     {safeData.scoringDescription}
//                 </div>
//             </div>

//             {/* Location */}
//             <div>
//                 <h2 className="text-3xl font-bold mb-4 text-center">{safeData.locationHeading}</h2>
//                 <div className="text-lg text-gray-700 whitespace-pre-wrap bg-white p-8 rounded-xl shadow-sm">
//                     {safeData.locationDescription}
//                 </div>
//             </div>
//         </div>
//       </section>

//       {/* CTA Footer */}
//       <section className="bg-[#0f172a] py-16 px-4 text-center text-white">
//         <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your CogAT Prep Today!</h2>
//         <button onClick={handleNavigate} className="bg-yellow-400 text-black px-10 py-4 rounded-full font-bold hover:bg-yellow-300 transition shadow-lg">
//           Get Free Trial Class
//         </button>
//       </section>

//     </div>
//   );
// };

// export default CogatTestPrep;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CogatTestPrep = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}api/user/cogat-test`
        );
        if (response.data) {
          const apiData = response.data.data || response.data;
          if (Array.isArray(apiData) && apiData.length > 0) {
            setData(apiData[0]);
          } else {
            setData(apiData);
          }
        }
      } catch (err) {
        console.error("Error fetching CogAT data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleNavigate = () => navigate("/contact");

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="animate-spin h-10 w-10 border-4 border-blue-600 rounded-full border-t-transparent"></div>
      </div>
    );

  const safeData = data || {};

  return (
    <div className="w-full text-gray-800" id="cogat">
      {/* 1. HERO SECTION */}
      {/* Yahan sirf Title aur Main Hero Description rahega */}
      <section className="bg-[#0f172a] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {safeData.heroTitle || "COGAT TEST PREP"}
          </h1>
          <div className="text-lg md:text-xl max-w-4xl mx-auto mb-8 whitespace-pre-wrap text-left">
            {safeData.heroDescription}
          </div>
          <button
            onClick={handleNavigate}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Book Free Trial Class
          </button>
        </div>
      </section>

      {/* 2. WHY CHOOSE / BULLET POINTS SECTION */}
      {/* Sub Description yahan move kar diya gaya hai, bullet points ke upar */}
      {(safeData.heroSubDescription ||
        (safeData.heroList && safeData.heroList.length > 0)) && (
        <section className="py-12 px-4 ">
          <div className="max-w-7xl mx-auto text-gray-800">
            {/* Sub Description (Ab ye bullet points ke just upar hai) */}
            {safeData.heroSubDescription && (
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                {safeData.heroSubDescription}
              </p>
            )}

            {/* Bullet Points */}
            {safeData.heroList && (
              <ul className="list-disc pl-6 space-y-3 text-lg leading-relaxed text-gray-700">
                {safeData.heroList.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
              </ul>
            )}

            {/* Link below bullets */}
            {/* <div className="mt-8 text-center md:text-left">
                <span className="font-bold text-xl block md:inline">To avail a free Trial Class with us for COGAT Test Online tutoring, </span>
                <button onClick={handleNavigate} className="text-[#00C4CC] font-bold text-xl underline hover:text-blue-600 uppercase ml-2">
                    CLICK HERE
                </button>
             </div> */}
          </div>
        </section>
      )}

      {/* 3. INTRO (What is on the CogAT?) */}
      {(safeData.introHeading || safeData.introDescription) && (
        <section className="py-4 px-4 ">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{safeData.introHeading}</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              {safeData.introDescription}
            </p>
          </div>
        </section>
      )}

      {/* 4. TEST STRUCTURE TABLE */}
      {safeData.structureTable && safeData.structureTable.length > 0 && (
        <section className="py-4 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="overflow-x-auto shadow-lg rounded-lg">
              <table className="w-full text-left border-collapse">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 border">Verbal Battery</th>
                    <th className="px-6 py-4 border">Quantitative Battery</th>
                    <th className="px-6 py-4 border">Non-Verbal Battery</th>
                  </tr>
                </thead>
                <tbody>
                  {safeData.structureTable.map((row, index) => (
                    <tr key={index} className="hover:bg-blue-50">
                      <td className="px-6 py-4 border">{row.verbal}</td>
                      <td className="px-6 py-4 border">{row.quantitative}</td>
                      <td className="px-6 py-4 border">{row.nonVerbal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* 5. MEASURE & ADMINISTER */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Measure */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              {safeData.measureHeading}
            </h2>
            <p className="text-lg text-gray-700">
              {safeData.measureDescription}
            </p>
          </div>
          {/* Administer */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              {safeData.administerHeading}
            </h2>
            {/* <p className="text-lg text-gray-700 mb-4" dangerouslySetInnerHTML={{__html:safeData?.administerDescription}}>
            </p> */}
            <div
  className="
    text-lg text-gray-700 mb-4
    [&_ul]:list-disc [&_ul]:pl-6
    [&_ol]:list-decimal [&_ol]:pl-6
    [&_li]:mb-0
  "
  dangerouslySetInnerHTML={{
    __html: safeData?.administerDescription,
  }}
/>
            {/* {safeData.administerList && (
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {safeData.administerList.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )} */}
          </div>
        </div>
      </section>

      {/* 6. LEVELS TABLE */}
      {safeData.levelsTable && safeData.levelsTable.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              {safeData.levelsHeading}
            </h2>
            <p className="text-center text-lg mb-8 max-w-7xl mx-auto">
              {safeData.levelsDescription}
            </p>

            <div className="overflow-x-auto shadow-lg rounded-lg">
              <table className="w-full text-left border-collapse">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 border">Grade</th>
                    <th className="px-6 py-4 border">Level</th>
                    <th className="px-6 py-4 border">Questions</th>
                    <th className="px-6 py-4 border">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {safeData.levelsTable.map((row, index) => (
                    <tr key={index} className="hover:bg-green-50">
                      <td className="px-6 py-4 border">{row.grade}</td>
                      <td className="px-6 py-4 border">{row.level}</td>
                      <td className="px-6 py-4 border">{row.questions}</td>
                      <td className="px-6 py-4 border">{row.testTime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Question Count Section */}
            {(safeData.questionCountHeading ||
              safeData.questionCountDescription) && (
              <div className="mt-10 text-center bg-green-50 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-green-900 mb-2">
                  {safeData.questionCountHeading}
                </h3>
                <p className="text-lg text-green-800">
                  {safeData.questionCountDescription}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 7. BATTERY DETAILS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Verbal */}
          {safeData.verbalBatteryList &&
            safeData.verbalBatteryList.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-blue-800 border-b-4 border-blue-600 inline-block">
                  {safeData.verbalBatteryHeading || "VERBAL BATTERY"}
                </h2>
                <div className="grid gap-6">
                  {safeData.verbalBatteryList.map((item, i) => (
                    <div key={i} className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                      <p className="text-gray-700 text-lg whitespace-pre-wrap">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* Non-Verbal */}
          {safeData.nonVerbalBatteryList &&
            safeData.nonVerbalBatteryList.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-green-800 border-b-4 border-green-600 inline-block">
                  {safeData.nonVerbalBatteryHeading || "NON-VERBAL BATTERY"}
                </h2>
                <div className="grid gap-6">
                  {safeData.nonVerbalBatteryList.map((item, i) => (
                    <div key={i} className="bg-green-50 p-6 rounded-lg">
                      <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                      <p className="text-gray-700 text-lg whitespace-pre-wrap">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* Quant */}
          {safeData.quantBatteryList &&
            safeData.quantBatteryList.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-yellow-800 border-b-4 border-yellow-600 inline-block">
                  {safeData.quantBatteryHeading || "QUANTITATIVE BATTERY"}
                </h2>
                <div className="grid gap-6">
                  {safeData.quantBatteryList.map((item, i) => (
                    <div key={i} className="bg-yellow-50 p-6 rounded-lg">
                      <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                      <p className="text-gray-700 text-lg whitespace-pre-wrap">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
        </div>
      </section>

      {/* 8. SCORING & LOCATION */}
      <section className="py-16 px-4 bg-[#F0F8FF]">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Scoring */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-center">
              {safeData.scoringHeading}
            </h2>
            <div className="text-lg text-gray-700 whitespace-pre-wrap bg-white p-8 rounded-xl shadow-sm">
              {safeData.scoringDescription}
            </div>
          </div>

          {/* Location */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-center">
              {safeData.locationHeading}
            </h2>
            <div className="text-lg text-gray-700 whitespace-pre-wrap bg-white p-8 rounded-xl shadow-sm">
              {safeData.locationDescription}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-[#0f172a] py-16 px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Start Your CogAT Prep Today!
        </h2>
        <button
          onClick={handleNavigate}
          className="bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg shadow-lg"
        >
          Get Free Trial Class
        </button>
      </section>
    </div>
  );
};

export default CogatTestPrep;
