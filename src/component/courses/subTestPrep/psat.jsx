// import React from "react";

// const PsatTestPrep = () => {
//   return (
//     <div className="w-full bg-white py-12 px-4 md:px-16" id='psat'>
//    <div className="max-w-7xl mx-auto">
//       {/* ===== HEADER ===== */}
//       <div className="text-center mb-10">
//         <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
//           PSAT TEST PREP
//         </h1>
//         <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
//           At GGES, we have the best teachers with years of experience in PSAT test
//           tutoring and excellent results.
//         </p>
//       </div>

//       {/* ===== MAIN CONTENT ===== */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

//         {/* LEFT CONTENT */}
//         <div className="text-left space-y-4">
//           <p className="text-gray-700 leading-relaxed">
//             Our tutoring plan is designed with maximum flexibility to meet your
//             schedule while preparing for PSAT test prep. Our tutors are caring,
//             committed, and experienced instructors who work with the latest PSAT
//             practice tests.
//           </p>

//           <p className="text-gray-700 leading-relaxed">
//             Regular PSAT practice exams with detailed score analysis help students
//             identify weak areas and focus on improvement. We teach proven strategies
//             for the PSAT/NMSQT to ensure the best outcomes.
//           </p>

//           <p className="text-gray-700 leading-relaxed font-semibold">
//             Prepare with the best. Boost your confidence. Achieve higher scores.
//           </p>

//           <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
//             Click here for Free Trial Class
//           </button>
//         </div>

//         {/* RIGHT CARD */}
//         <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
//           <h3 className="text-2xl font-bold mb-4 text-gray-800">
//             Why Choose GGES for PSAT?
//           </h3>

//           <ul className="space-y-3 text-gray-700">
//             <li>✅ Certified Expert Tutors</li>
//             <li>✅ Latest PSAT Practice Tests</li>
//             <li>✅ Result-Oriented Learning</li>
//             <li>✅ Flexible Timings</li>
//             <li>✅ Detailed Performance Analysis</li>
//           </ul>
//         </div>

//       </div>

//       {/* ===== ALL ABOUT PSAT ===== */}
//       <div className="mt-16 bg-gray-50 p-8 rounded-xl shadow-inner">
//         <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
//           ALL ABOUT PSAT
//         </h2>

//         <p className="text-gray-700 mb-8 text-center max-w-4xl mx-auto">
//           The PSAT/NMSQT (Preliminary SAT/National Merit Scholarship Qualifying Test)
//           is a preparatory exam for the SAT and ACT. High scores can also qualify students
//           for National Merit Scholarships and other awards — over $180 million in scholarships
//           are awarded each year.
//         </p>

//         <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
//           PSAT TEST STRUCTURE
//         </h3>

//         {/* TABLE */}
//         <div className="overflow-x-auto">
//           <table className="w-full border border-gray-300 text-left">
//             <thead className="bg-blue-600 text-white">
//               <tr>
//                 <th className="p-3 border">Section</th>
//                 <th className="p-3 border">Time</th>
//                 <th className="p-3 border">Question Type</th>
//               </tr>
//             </thead>

//             <tbody>
//               <tr className="bg-white">
//                 <td className="p-3 border font-semibold">Reading & Writing</td>
//                 <td className="p-3 border">64 Minutes</td>
//                 <td className="p-3 border">Mostly Multiple Choice</td>
//               </tr>

//               <tr className="bg-gray-100">
//                 <td className="p-3 border font-semibold">Math</td>
//                 <td className="p-3 border">70 Minutes</td>
//                 <td className="p-3 border">
//                   Multiple Choice + Write-in Answers
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>

//         {/* CTA AGAIN */}
//         <div className="text-center mt-10">
//           <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition">
//             Click here for Free Trial Class
//           </button>
//         </div>
//       </div>
// </div>
//     </div>
//   );
// };

// export default PsatTestPrep;

import React, { useEffect, useState } from "react";
import axios from "axios";

const PsatTestPrep = () => {
  // --- State Management ---
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // --- API Call ---
  useEffect(() => {
    const fetchPsatData = async () => {
      try {
        // Using the endpoint pattern /api/psat-test based on your admin file
        const response = await axios.get(`${import.meta.env.VITE_APP_URL}api/user/psat-test`);
        
        // Validation: Check if data exists in response
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

  // --- 3. Main Content ---
  return (
    <div className="w-full bg-white py-12 px-4 md:px-16" id='psat'>
      <div className="max-w-7xl mx-auto">
        
        {/* ===== HEADER ===== */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            {data?.heroTitle || "PSAT TEST PREP"}
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
            {data?.heroSubtitle || "At GGES, we have the best teachers with years of experience in PSAT test tutoring and excellent results."}
          </p>
        </div>

        {/* ===== MAIN CONTENT ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="text-left space-y-4">
            {/* Using whitespace-pre-wrap to handle paragraphs from Admin Textarea */}
            <div className="text-gray-700 leading-relaxed whitespace-pre-wrap break-all">
              {data?.heroDescription || (
                <>
                  <p className="mb-4">
                    Our tutoring plan is designed with maximum flexibility to meet your
                    schedule while preparing for PSAT test prep.
                  </p>
                  <p>
                    Regular PSAT practice exams with detailed score analysis help students
                    identify weak areas and focus on improvement.
                  </p>
                </>
              )}
            </div>

            <p className="text-gray-700 leading-relaxed font-semibold">
              Prepare with the best. Boost your confidence. Achieve higher scores.
            </p>

            <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
              Click here for Free Trial Class
            </button>
          </div>

          {/* RIGHT CARD (Dynamic Features) */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Why Choose GGES for PSAT?
            </h3>

            <ul className="space-y-3 text-gray-700 break-all">
              {data?.features?.length > 0 ? (
                data.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 break-all">
                    {/* Hardcoding checkmark as per style */}
                    <span>✅</span> 
                    {feature}
                  </li>
                ))
              ) : (
                // Fallback
                <>
                  <li>✅ Certified Expert Tutors</li>
                  <li>✅ Latest PSAT Practice Tests</li>
                  <li>✅ Result-Oriented Learning</li>
                </>
              )}
            </ul>
          </div>

        </div>

        {/* ===== ALL ABOUT PSAT ===== */}
        <div className="mt-16 bg-gray-50 p-8 rounded-xl shadow-inner">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            {data?.aboutHeading || "ALL ABOUT PSAT"}
          </h2>

          <p className="text-gray-700 mb-8 text-center max-w-4xl mx-auto whitespace-pre-wrap break-all">
            {data?.aboutDescription || "The PSAT/NMSQT is a preparatory exam for the SAT and ACT..."}
          </p>

          <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
            PSAT TEST STRUCTURE
          </h3>

          {/* TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-3 border">Section</th>
                  <th className="p-3 border">Time</th>
                  <th className="p-3 border">Question Type / Modules</th>
                </tr>
              </thead>

              <tbody>
                {data?.tableData?.length > 0 ? (
                  data.tableData.map((row, index) => (
                    <tr 
                      key={index} 
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                    >
                      <td className="p-3 border font-semibold">{row.section}</td>
                      <td className="p-3 border">{row.time}</td>
                      <td className="p-3 border">{row.modules}</td>
                    </tr>
                  ))
                ) : (
                  // Fallback Static Data
                  <>
                    <tr className="bg-white">
                      <td className="p-3 border font-semibold">Reading & Writing</td>
                      <td className="p-3 border">64 Minutes</td>
                      <td className="p-3 border">Mostly Multiple Choice</td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="p-3 border font-semibold">Math</td>
                      <td className="p-3 border">70 Minutes</td>
                      <td className="p-3 border">Multiple Choice + Write-in Answers</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>

          {/* Optional Footer Note from Admin */}
          {data?.tableFooter && (
             <p className="text-sm text-gray-500 mt-4 text-center italic">
               {data.tableFooter}
             </p>
          )}

          {/* CTA AGAIN */}
          <div className="text-center mt-10">
            <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition">
              Click here for Free Trial Class
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PsatTestPrep;