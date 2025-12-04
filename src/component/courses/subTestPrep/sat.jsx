// import React from "react";

// const SatTestPrep = () => {
//   return (
//     <div className="w-full bg-white py-12 px-4 md:px-16" id='sat'>
//       <div className="max-w-7xl mx-auto">
//         {/* ===== HEADER ===== */}
//         <div className="text-center mb-10">
//           <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
//             SAT TEST PREP
//           </h1>
//           <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
//             At GGES, we have the best expertise for SAT Test preparation with
//             over 15 years of experience and proven pedagogy.
//           </p>
//         </div>

//         {/* ===== MAIN CONTENT ===== */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           {/* LEFT CONTENT */}
//           <div className="text-left space-y-4">
//             <p className="text-gray-700 leading-relaxed">
//               With past experience of 15 years, we know the best pedagogy for
//               SAT Test prep. This gives our students the best SAT scores. We
//               provide the best SAT practice tests with detailed solutions.
//             </p>

//             <p className="text-gray-700 leading-relaxed">
//               From SAT vocabulary, SAT words, to SAT essays, we make sure every
//               student gets complete guidance. Our online SAT tutoring is ideal
//               for students with busy schedules.
//             </p>

//             <p className="text-gray-700 leading-relaxed font-semibold">
//               Looking for SAT preparation tutoring? You have reached the right
//               place.
//             </p>

//             <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
//               Click here for Free Trial Class
//             </button>   
//           </div>

//           {/* RIGHT CARD */}
//           <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
//             <h3 className="text-2xl font-bold mb-4 text-gray-800">
//               Why Choose GGES?
//             </h3>

//             <ul className="space-y-3 text-gray-700">
//               <li>✅ 15+ Years Experience</li>
//               <li>✅ Best SAT Practice Tests</li>
//               <li>✅ Online & Flexible Learning</li>
//               <li>✅ High Score Guarantee</li>
//               <li>✅ Personal Attention</li>
//             </ul>
//           </div>
//         </div>

//         {/* ===== ALL ABOUT SAT SECTION ===== */}
//         <div className="mt-16 bg-gray-50 p-8 rounded-xl shadow-inner">
//           <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
//             ALL ABOUT SAT
//           </h2>

//           <p className="text-gray-700 mb-6 text-center max-w-4xl mx-auto">
//             The SAT is composed of two sections: (1) the Reading and Writing
//             section, and (2) the Math section. You have a total of 2 hours and
//             14 minutes.
//           </p>

//           {/* TABLE */}
//           <div className="overflow-x-auto">
//             <table className="w-full border border-gray-300 text-left">
//               <thead className="bg-blue-600 text-white">
//                 <tr>
//                   <th className="p-3 border">Section</th>
//                   <th className="p-3 border">Time</th>
//                   <th className="p-3 border">Modules</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 <tr className="bg-white">
//                   <td className="p-3 border font-semibold">
//                     Reading & Writing
//                   </td>
//                   <td className="p-3 border">64 Minutes</td>
//                   <td className="p-3 border">2 Modules</td>
//                 </tr>

//                 <tr className="bg-gray-100">
//                   <td className="p-3 border font-semibold">Math</td>
//                   <td className="p-3 border">70 Minutes</td>
//                   <td className="p-3 border">2 Modules</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           <p className="text-gray-700 mt-6 text-center">
//             The second module difficulty depends on your performance in the
//             first module.
//           </p>

//           {/* CTA AGAIN */}
//           <div className="text-center mt-8">
//             <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition">
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

const SatTestPrep = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSatData = async () => {
      try {
        // === EXACT PATTERN LIKE TERM PAGE ===
        // VITE_APP_URL ke end me '/' hai, isliye 'api/user/sat-test' direct jod diya
        const response = await axios.get(`${import.meta.env.VITE_APP_URL}api/user/sat-test`);
        
        console.log("Sat Data Response:", response.data);

        // Check success flag like TermPage
        if (response.data) {
          // Admin panel ke logic ke hisaab se data kabhi array me bhi aa sakta hai
          let apiData = response.data.data;

          // Agar array hai (e.g. [{...}]) to pehla item le lo, warna direct object
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

  if (loading) return <div className="text-center py-20 font-bold text-gray-500">Loading...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;
  if (!data) return <div className="text-center py-20 text-red-500">No Data Found</div>;

  return (
    <div className="w-full bg-white py-12 px-4 md:px-16" id="sat">
      <div className="max-w-7xl mx-auto">
        
        {/* ===== 1. HERO SECTION ===== */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            {data.heroTitle || "SAT TEST PREP"}
          </h1>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
            {data.heroSubtitle}
          </p>
        </div>

        {/* ===== 2. MAIN CONTENT ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT: Description */}
          <div className="text-left space-y-4">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {data.heroDescription}
            </p>

            <p className="text-gray-700 leading-relaxed font-semibold">
              Looking for SAT preparation tutoring? You have reached the right place.
            </p>

            <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
              Click here for Free Trial Class
            </button>
          </div>

          {/* RIGHT: Features Card */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Why Choose GGES?
            </h3>

            <ul className="space-y-3 text-gray-700">
              {data.features && data.features.length > 0 ? (
                data.features.map((feature, index) => (
                  feature && <li key={index}>✅ {feature}</li>
                ))
              ) : (
                <li>✅ Experienced Faculty</li> 
              )}
            </ul>
          </div>
        </div>

        {/* ===== 3. ABOUT & TABLE SECTION ===== */}
        <div className="mt-16 bg-gray-50 p-8 rounded-xl shadow-inner">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 uppercase">
            {data.aboutHeading || "ALL ABOUT SAT"}
          </h2>

          <p className="text-gray-700 mb-6 text-center max-w-4xl mx-auto whitespace-pre-line">
            {data.aboutDescription}
          </p>

          {/* TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-300 text-left">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-3 border">Section</th>
                  <th className="p-3 border">Time</th>
                  <th className="p-3 border">Modules</th>
                </tr>
              </thead>

              <tbody>
                {data.tableData && data.tableData.length > 0 ? (
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
                  <tr className="bg-white">
                    <td colSpan="3" className="p-3 border text-center">No Data Available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 mt-6 text-center">
            {data.tableFooter}
          </p>

          <div className="text-center mt-8">
            <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition">
              Click here for Free Trial Class
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatTestPrep;