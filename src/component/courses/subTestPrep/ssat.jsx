// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import backgroundImage from "../../../assets/math-bg.png";

// const SsatTestPrep = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchSsatData = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_APP_URL}api/user/ssat-test`);
        
//         if (response.data) {
//           let apiData = response.data.data || response.data;
          
//           if (apiData && Object.keys(apiData).length > 0) {
//             if (Array.isArray(apiData)) {
//               setData(apiData[0]);
//             } else {
//               setData(apiData);
//             }
//           } else {
//             setData(null);
//           }
//         } else {
//           setData(null);
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

//   // Agar data null hai toh empty object use karein taaki crash na ho, 
//   // lekin page render hoga taaki buttons dikh sakein.
//   const safeData = data || {};

//   return (
//     <div className="w-full bg-[#F0F8FF] py-12 px-4 md:px-16" id='ssat'
//       style={{
//                   backgroundImage: `url(${backgroundImage})`,
//                   backgroundSize: "contain",
//                   backgroundPosition: "center",
//                 }}
//     >
//        <div className="max-w-7xl mx-auto">
      
//       {/* ===== HEADER SECTION ===== */}
//       <div className=" mb-10">
//         {/* Title aur Description sirf tab dikhenge agar data hai */}
//         {safeData.heroTitle && (
//             <h1 className="text-3xl text-center md:text-5xl font-bold text-gray-800 mb-4">
//               {safeData.heroTitle}
//             </h1>
//         )}
        
//         {safeData.heroDescription && (
//             <p className="text-gray-600 text-sm md:text-base max-w-7xl mx-auto whitespace-pre-line">
//               {safeData.heroDescription}
//             </p>
//         )}

//         {/* BUTTON: Ye hamesha dikhega chahe data ho ya na ho */}
//         <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
//           Click here for Free Trial Class
//         </button>
//       </div>


//       {/* ===== ABOUT SSAT ===== */}
//       {(safeData.aboutHeading || safeData.aboutDescription) && (
//         <div className="mt-16">
//           {safeData.aboutHeading && (
//             <h2 className="text-3xl font-bold mb-6 text-center">
//                 {safeData.aboutHeading}
//             </h2>
//           )}

//           {safeData.aboutDescription && (
//             <p className="text-gray-700 leading-relaxed max-w-7xl mx-auto mb-6  whitespace-pre-line">
//               {safeData.aboutDescription}
//             </p>
//           )}
//         </div>
//       )}


//       {/* ===== LEVELS SECTION ===== */}
//       {/* Sirf tab dikhega agar levels array me data hai */}
//       {safeData.levels && safeData.levels.length > 0 && (
//         <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
//             {safeData.levels.map((level, index) => (
//                 <div key={index} className="bg-[#F0F8FF] p-6 rounded-xl shadow-xl">
//                     {level.title && (
//                         <h3 className="text-xl font-bold mb-3 text-blue-700">{level.title}</h3>
//                     )}
//                     {level.description && (
//                         <p className="text-gray-700 whitespace-pre-line">
//                             {level.description}
//                         </p>
//                     )}
//                 </div>
//             ))}
//         </div>
//       )}


//       {/* ===== ISEE vs SSAT ===== */}
//       {(safeData.comparisonHeading || (safeData.comparisonPoints && safeData.comparisonPoints.length > 0)) && (
//         <div className="mt-16 bg-[#F0F8FF] p-8 rounded-xl shadow-xl">
//             {safeData.comparisonHeading && (
//                 <h2 className="text-3xl font-bold text-center mb-6">
//                 {safeData.comparisonHeading}
//                 </h2>
//             )}

//             {safeData.comparisonPoints && safeData.comparisonPoints.length > 0 && (
//                 <ul className="list-disc list-inside text-gray-700 max-w-5xl mx-auto space-y-2">
//                 {safeData.comparisonPoints.map((point, index) => (
//                     point ? <li key={index}>{point}</li> : null
//                 ))}
//                 </ul>
//             )}
//         </div>
//       )}


//       {/* ===== SCORING SECTION ===== */}
//       {(safeData.scoringHeading || safeData.scoringFooter || (safeData.scoringCards && safeData.scoringCards.length > 0)) && (
//         <div className="mt-16">
//             {safeData.scoringHeading && (
//                 <h2 className="text-3xl font-bold text-center mb-8">
//                 {safeData.scoringHeading}
//                 </h2>
//             )}

//             {safeData.scoringCards && safeData.scoringCards.length > 0 && (
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {safeData.scoringCards.map((card, index) => (
//                     <div key={index} className="border p-6 rounded-lg shadow">
//                         {card.title && <h3 className="text-xl font-bold mb-3 text-blue-700">{card.title}</h3>}
//                         {card.content && <p className="whitespace-pre-line">{card.content}</p>}
//                     </div>
//                 ))}
//                 </div>
//             )}

//             {safeData.scoringFooter && (
//                 <p className="text-center text-gray-600 mt-6 max-w-4xl mx-auto">
//                 {safeData.scoringFooter}
//                 </p>
//             )}
//         </div>
//       )}


//       {/* ===== SSAT TEST STRUCTURE TABLES ===== */}
//       {(safeData.structureHeading || (safeData.middleTable && safeData.middleTable.length > 0) || (safeData.upperTable && safeData.upperTable.length > 0)) && (
//         <div className="mt-16">
//             {safeData.structureHeading && (
//                 <h2 className="text-3xl font-bold text-center mb-6">
//                     {safeData.structureHeading}
//                 </h2>
//             )}

//             {/* Middle Level Table */}
//             {safeData.middleTable && safeData.middleTable.length > 0 && (
//                 <>
//                     <h3 className="text-2xl font-bold mb-3 mt-8">Middle Level (5th – 7th)</h3>
//                     <div className="overflow-x-auto mb-10">
//                     <table className="w-full border text-left">
//                         <thead className="bg-blue-600 text-white">
//                         <tr>
//                             <th className="p-3 border">Section</th>
//                             <th className="p-3 border">Time</th>
//                             <th className="p-3 border">Questions</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                             {safeData.middleTable.map((row, index) => (
//                                 <tr key={index}>
//                                     <td className="p-3 border">{row.section}</td>
//                                     <td className="p-3 border">{row.time}</td>
//                                     <td className="p-3 border">{row.questions}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                     </div>
//                 </>
//             )}

//             {/* Upper Level Table */}
//             {safeData.upperTable && safeData.upperTable.length > 0 && (
//                 <>
//                     <h3 className="text-2xl font-bold mb-3 mt-8">Upper Level (8th – 11th)</h3>
//                     <div className="overflow-x-auto">
//                     <table className="w-full border text-left">
//                         <thead className="bg-green-600 text-white">
//                         <tr>
//                             <th className="p-3 border">Section</th>
//                             <th className="p-3 border">Time</th>
//                             <th className="p-3 border">Questions</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                             {safeData.upperTable.map((row, index) => (
//                                 <tr key={index}>
//                                     <td className="p-3 border">{row.section}</td>
//                                     <td className="p-3 border">{row.time}</td>
//                                     <td className="p-3 border">{row.questions}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                     </div>
//                 </>
//             )}
//         </div>
//       )}

//       {/* ===== FINAL CTA SECTION ===== */}
//       <div className="text-center mt-16">
//         <h2 className="text-2xl font-bold mb-4">
//           Ready to start your SSAT preparation?
//         </h2>
//         {/* BUTTON: Ye bhi hamesha dikhega */}
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
import backgroundImage from "../../../assets/math-bg.png";
import { useNavigate } from "react-router-dom"; // Verify path matches your project

const SsatTestPrep = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

  useEffect(() => {
    const fetchSsatData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_URL}api/user/ssat-test`);
        
        if (response.data) {
          const apiData = response.data.data || response.data;
          // Handle both array and object responses
          if (Array.isArray(apiData) && apiData.length > 0) {
            setData(apiData[0]);
          } else {
            setData(apiData);
          }
        }
      } catch (err) {
        console.error("Error fetching SSAT data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSsatData();
  }, []);
    const handleNavigate = () => {
    navigate("/contact"); // Yahan apna sahi route path dalein
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-[#F0F8FF]">
        <div className="text-xl font-bold text-blue-600 animate-pulse">Loading Content...</div>
    </div>
  );

  const safeData = data || {};

  return (
    <div 
      className="w-full min-h-screen " 
      id='ssat'
    //   style={{
    //     backgroundImage: `url(${backgroundImage})`,
    //     backgroundSize: "contain",
    //     backgroundRepeat: "repeat",
    //     backgroundPosition: "center",
    //     backgroundBlendMode: "overlay",
    //   }}
    >
       <div className="max-w-7xl mx-auto px-4 md:px-12 py-16 space-y-20">
      
      {/* ================= 1. HERO SECTION ================= */}
      <div className="text-center space-y-6">
        {safeData.heroTitle && (
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 drop-shadow-sm uppercase tracking-wider">
              {safeData.heroTitle}
            </h1>
        )}
        
        {safeData.heroDescription && (
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border-t-4 border-blue-500 max-w-4xl mx-auto">
                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap">
                    {safeData.heroDescription}
                </p>
            </div>
        )}

        <button className="bg-[#00C4CC] hover:bg-[#00aeb5] text-white text-lg font-bold py-1 px-10 rounded-full shadow-lg transition transform hover:scale-105 mt-6">
          {safeData.topCtaText || "Click here for Free Trial Class"}
        </button>
        
       
      </div>
      <div className="text-center">
       <button onClick={handleNavigate}  className="bg-blue-600 mx-auto  text-white text-lg font-semibold py-3 px-10 rounded-lg shadow-lg transition transform hover:scale-105 mt-2">
          Click here for Free Trial Class
        </button>
</div>
      {/* ================= 2. ABOUT & LEVELS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* About Box */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-blue-600 h-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 uppercase">
                  {safeData.aboutHeading || "ABOUT SSAT"}
              </h2>
              <div className="text-gray-600 leading-7 whitespace-pre-wrap">
                  {safeData.aboutDescription || "Description not available."}
              </div>
          </div>

          {/* Levels Box */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border-l-8 border-purple-600 h-full">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 uppercase">
                  Different Levels
              </h2>
              {safeData.levels && safeData.levels.length > 0 ? (
                  <div className="space-y-4">
                      {safeData.levels.map((level, idx) => (
                          <div key={idx} className="border-b pb-3 last:border-0">
                              <h3 className="font-bold text-blue-700">{level.title}</h3>
                              <p className="text-sm text-gray-600 whitespace-pre-wrap">{level.description}</p>
                          </div>
                      ))}
                  </div>
              ) : (
                  <p className="text-gray-500">No levels data added.</p>
              )}
          </div>
      </div>

      {/* ================= 3. REGISTRATION (If exists) ================= */}
      {/* {(safeData.registrationHeading || safeData.registrationContent) && (
        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-500">
             <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {safeData.registrationHeading || "Registration"}
            </h2>
            <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                {safeData.registrationContent}
            </p>
        </div>
      )} */}

      {/* ================= 4. COMPARISON (ISEE vs SSAT) ================= */}
      {(safeData.comparisonHeading || safeData.comparisonDescription || (safeData.comparisonPoints && safeData.comparisonPoints.length > 0)) && (
        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-orange-400">
            {safeData.comparisonHeading && (
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    {safeData.comparisonHeading}
                </h2>
            )}
            
            {/* Intro Description */}
            {safeData.comparisonDescription && (
                <div className="text-gray-700 mb-6 leading-relaxed whitespace-pre-wrap">
                    {safeData.comparisonDescription}
                </div>
            )}

            {/* Bullet Points */}
            <ul className="list-disc list-inside space-y-3 text-gray-700 bg-orange-50 p-6 rounded-lg">
                {safeData.comparisonPoints && safeData.comparisonPoints.map((point, index) => (
                    point ? <li key={index} className="leading-relaxed">{point}</li> : null
                ))}
            </ul>
        </div>
      )}

      {/* ================= 5. QUICK FACTS (NEW SECTION) ================= */}
      {(safeData.factsHeading || safeData.factsContent) && (
        <div className="bg-white p-8 rounded-2xl shadow-2xl border-l-8 border-teal-500">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6">
                {safeData.factsHeading || "SSAT Quick Facts"}
            </h2>
            
            {/* The pre-wrap class ensures new lines from admin text area show up as lines here */}
            <div className="text-gray-700 text-lg leading-8 whitespace-pre-wrap font-medium">
                {safeData.factsContent}
            </div>

            {safeData.disclaimer && (
                <p className="mt-6 text-xs text-gray-400 italic border-t pt-2">
                    {safeData.disclaimer}
                </p>
            )}
        </div>
      )}

      {/* ================= 6. SCORING ================= */}
      <div className="bg-white py-10 px-6 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-10">
              {safeData.scoringHeading || "How is the SSAT scored?"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {safeData.scoringCards && safeData.scoringCards.length > 0 ? (
                  safeData.scoringCards.map((card, index) => (
                      <div key={index} className="bg-blue-50 p-6 rounded-xl border border-blue-100 hover:shadow-xl transition">
                          <h3 className="font-bold text-lg text-blue-700 mb-3 uppercase border-b border-blue-200 pb-2">
                              {card.title}
                          </h3>
                          <p className="text-gray-700 whitespace-pre-wrap font-medium text-sm leading-6">
                              {card.content}
                          </p>
                      </div>
                  ))
              ) : (
                  <div className="col-span-3 text-center text-gray-500">Scoring info not added.</div>
              )}
          </div>

          <div className="mt-8 text-center text-gray-600 italic">
              {safeData.scoringFooter}
          </div>
      </div>

      {/* ================= 7. TEST STRUCTURE TABLES ================= */}
 {/* ================= 7. TEST STRUCTURE TABLES ================= */}
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12">
                {safeData.structureHeading || "SSAT TEST STRUCTURE"}
            </h2>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                {/* Middle Level */}
                <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-blue-700 mb-4 bg-blue-50 py-2 px-4 rounded-lg self-start">
                        Middle Level Test(5th-7th Grade)
                    </h3>
                    <div className="overflow-hidden border border-gray-200 rounded-xl shadow-sm flex-grow">
                        <table className="w-full text-left bg-white">
                            <thead className="bg-blue-600 text-white">
                                <tr>
                                    <th className="p-4 font-semibold">Section</th>
                                    <th className="p-4 font-semibold">Time</th>
                                    <th className="p-4 font-semibold">Questions</th>
                                    <th className="p-4 font-semibold">Downloads</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {safeData.middleTable && safeData.middleTable.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-blue-50">
                                        <td className="p-4 text-gray-700">{row.section}</td>
                                        <td className="p-4 text-gray-600 whitespace-nowrap">{row.time}</td>
                                        <td className="p-4 text-gray-600 whitespace-nowrap">{row.questions}</td>
                                        
                                        {/* ADDED DOWNLOAD CELL HERE */}
                                        <td className="p-4">
                                            {row.download ? (
                                                <a 
                                                    href={row.download} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 font-bold hover:underline"
                                                >
                                                    Download 
                                                </a>
                                            ) : (
                                                <span className="text-gray-400 text-sm">-</span>
                                            )}
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Upper Level */}
                <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-green-700 mb-4 bg-green-50 py-2 px-4 rounded-lg self-start">
                        Upper Level Test(8th-11th Grade)
                    </h3>
                    <div className="overflow-hidden border border-gray-200 rounded-xl shadow-sm flex-grow">
                        <table className="w-full text-left bg-white">
                            <thead className="bg-green-600 text-white">
                                <tr>
                                    <th className="p-4 font-semibold">Section</th>
                                    <th className="p-4 font-semibold">Time</th>
                                    <th className="p-4 font-semibold">Questions</th>
                                    <th className="p-4 font-semibold">Downloads</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {safeData.upperTable && safeData.upperTable.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-green-50">
                                        <td className="p-4 text-gray-700">{row.section}</td>
                                        <td className="p-4 text-gray-600 whitespace-nowrap">{row.time}</td>
                                        <td className="p-4 text-gray-600 whitespace-nowrap">{row.questions}</td>

                                        {/* ADDED DOWNLOAD CELL HERE */}
                                        <td className="p-4">
                                            {row.download ? (
                                                <a 
                                                    href={row.download} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="text-green-600 font-bold hover:underline"
                                                >
                                                    Download 
                                                </a>
                                            ) : (
                                                <span className="text-gray-400 text-sm">-</span>
                                            )}
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
      </div>

      {/* ================= 8. GOOD SCORE & FOOTER (Updated to show all data) ================= */}
      <div className="bg-white/90 backdrop-blur-md p-10 rounded-2xl shadow-lg text-center border-b-8 border-red-500 space-y-8">
        
        {/* Heading & Intro */}
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {safeData.goodScoreHeading || "Ready to start?"}
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed whitespace-pre-wrap">
                {safeData.goodScoreIntro}
            </p>
        </div>

        {/* Scaled Scores & Percentiles (PREVIOUSLY MISSING) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
            {safeData.scaledScoresContent && (
                <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                    <h3 className="font-bold text-red-800 mb-2">Scaled Scores</h3>
                    <p className="text-gray-700 whitespace-pre-wrap text-sm">{safeData.scaledScoresContent}</p>
                </div>
            )}
            
            {safeData.percentileRanksContent && (
                <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                    <h3 className="font-bold text-red-800 mb-2">Percentile Ranks</h3>
                    <p className="text-gray-700 whitespace-pre-wrap text-sm">{safeData.percentileRanksContent}</p>
                </div>
            )}
        </div>

        {/* CTA Button */}
        <button className="mt-4 bg-red-600 hover:bg-red-700 text-white text-xl font-bold py-1 px-12 rounded-full shadow-xl transition transform hover:scale-105">
          {safeData.footerCtaText || "Click here for Free Trial Class"}
        </button>

         <div className="mt-8 text-center">
        <h2 className="text-3xl md:text-3xl font-bold text-gray-900 mb-6 tracking-wide">
            Ready to start your SSAT preparation?
        </h2>
        <button onClick={handleNavigate}  className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-12 rounded-lg shadow-xl transition transform hover:scale-105">
          Click here for Free Trial Class
        </button>
      </div>
      </div>
      

  </div>
    </div>
  );
};

export default SsatTestPrep;