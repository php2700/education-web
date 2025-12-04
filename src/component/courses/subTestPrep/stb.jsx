// import React from "react";

// const STBPrep = () => {
//   return (
//     <div className="w-full bg-white text-gray-800" id='stb'>

//       {/* HERO SECTION */}
//       <section className="bg-[#0f172a] text-white py-20 px-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">
//             STB TEST PREP
//           </h1>
//           <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8">
//             At GGES, we provide expert STB Test Prep tutoring with a skill-based approach to help students excel in visual-spatial reasoning and cognitive challenges.
//           </p>
//           <a
//             href="/free-trial"
//             className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
//           >
//             Book Free Trial Class
//           </a>
//         </div>
//       </section>

//       {/* ABOUT STB */}
//       <section className="py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">About the STB</h2>
//           <p className="text-lg mb-4">
//             The Spatial Test Battery (STB) measures visual-spatial ability and is used in conjunction with other tests for admission to Johns Hopkins University Center for Talented Youth (CTY). It assesses abilities such as shape rotation, mental imagery, and spatial reasoning.
//           </p>
//           <p className="text-lg mb-4">
//             STB helps identify potential talents in visual-spatial learning, assists in career or academic decisions, and offers opportunities for high scoring students to join CTY programs.
//           </p>
//         </div>
//       </section>

//       {/* STB SUBTESTS */}
//       <section className="bg-gray-100 py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">STB Subtests</h2>

//           <h3 className="text-2xl font-semibold mb-3">Visual Memory</h3>
//           <p className="text-lg mb-4">
//             <strong>Learning:</strong> Memorize irregular shapes with black inked parts. 5th and 6th graders memorize 15 shapes; older students memorize 22 shapes.<br/>
//             <strong>Recall:</strong> Occurs after Surface Development and Block Rotation subtests, testing memory of previously memorized shapes.
//           </p>

//           <h3 className="text-2xl font-semibold mb-3">Surface Development</h3>
//           <p className="text-lg mb-4">
//             Identify which flat shapes correspond to folded boxes. Solid lines show edges; dotted lines show fold lines.
//           </p>

//           <h3 className="text-2xl font-semibold mb-3">Block Rotation</h3>
//           <p className="text-lg mb-4">
//             Mentally rotate 3D shapes (cubes, cylinders, prisms) to match a given orientation.
//           </p>

//           <h3 className="text-2xl font-semibold mb-3">Perspectives</h3>
//           <p className="text-lg mb-4">
//             Available for 7th graders and above. Determine the perspective from which objects are viewed in different images.
//           </p>

//           {/* IMPORTANT TEST INFORMATION */}
//           <h3 className="text-2xl font-bold mb-3">Important Testing Information</h3>
//           <p className="text-lg mb-4">
//             Each subtest is timed separately. Some questions may be experimental and do not count toward final scores. Total test time ranges from 83 minutes for 5th/6th graders to 109 minutes for 7th graders and above.
//           </p>

//           <table className="w-full text-left border-collapse border border-gray-300 mb-6">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="border border-gray-300 px-4 py-2">Subtest + Tutorial</th>
//                 <th className="border border-gray-300 px-4 py-2">5th/6th Graders: Time Allowed</th>
//                 <th className="border border-gray-300 px-4 py-2">7th Graders and Older: Time Allowed</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="border border-gray-300 px-4 py-2">General Tutorial</td>
//                 <td className="border border-gray-300 px-4 py-2">15 min</td>
//                 <td className="border border-gray-300 px-4 py-2">15 min</td>
//               </tr>
//               <tr className="bg-gray-50">
//                 <td className="border border-gray-300 px-4 py-2">Questionnaire</td>
//                 <td className="border border-gray-300 px-4 py-2">4 min</td>
//                 <td className="border border-gray-300 px-4 py-2">4 min</td>
//               </tr>
//               <tr>
//                 <td className="border border-gray-300 px-4 py-2">Visual Memory: Learning Instructions</td>
//                 <td className="border border-gray-300 px-4 py-2">3 min</td>
//                 <td className="border border-gray-300 px-4 py-2">3 min</td>
//               </tr>
//               <tr className="bg-gray-50">
//                 <td className="border border-gray-300 px-4 py-2">Visual Memory: Viewing Shapes</td>
//                 <td className="border border-gray-300 px-4 py-2">8 min</td>
//                 <td className="border border-gray-300 px-4 py-2">8 min</td>
//               </tr>
//               <tr>
//                 <td className="border border-gray-300 px-4 py-2">Surface Development: Tutorial</td>
//                 <td className="border border-gray-300 px-4 py-2">4 min</td>
//                 <td className="border border-gray-300 px-4 py-2">4 min</td>
//               </tr>
//               <tr className="bg-gray-50">
//                 <td className="border border-gray-300 px-4 py-2">Surface Development: Exam</td>
//                 <td className="border border-gray-300 px-4 py-2">12 min</td>
//                 <td className="border border-gray-300 px-4 py-2">12 min</td>
//               </tr>
//               <tr>
//                 <td className="border border-gray-300 px-4 py-2">Block Rotation: Tutorial</td>
//                 <td className="border border-gray-300 px-4 py-2">5 min</td>
//                 <td className="border border-gray-300 px-4 py-2">5 min</td>
//               </tr>
//               <tr className="bg-gray-50">
//                 <td className="border border-gray-300 px-4 py-2">Block Rotation: Exam</td>
//                 <td className="border border-gray-300 px-4 py-2">12 min</td>
//                 <td className="border border-gray-300 px-4 py-2">12 min</td>
//               </tr>
//               <tr>
//                 <td className="border border-gray-300 px-4 py-2">Visual Memory Recall Instructions</td>
//                 <td className="border border-gray-300 px-4 py-2">2 min</td>
//                 <td className="border border-gray-300 px-4 py-2">2 min</td>
//               </tr>
//               <tr className="bg-gray-50">
//                 <td className="border border-gray-300 px-4 py-2">Visual Memory Recall Exam</td>
//                 <td className="border border-gray-300 px-4 py-2">8 min</td>
//                 <td className="border border-gray-300 px-4 py-2">8 min</td>
//               </tr>
//               <tr>
//                 <td className="border border-gray-300 px-4 py-2">Perspectives: Tutorial</td>
//                 <td className="border border-gray-300 px-4 py-2">Not given</td>
//                 <td className="border border-gray-300 px-4 py-2">6 min</td>
//               </tr>
//               <tr className="bg-gray-50">
//                 <td className="border border-gray-300 px-4 py-2">Perspectives: Exam</td>
//                 <td className="border border-gray-300 px-4 py-2">Not given</td>
//                 <td className="border border-gray-300 px-4 py-2">19 min</td>
//               </tr>
//               <tr>
//                 <td className="border border-gray-300 px-4 py-2">Survey / Comments</td>
//                 <td className="border border-gray-300 px-4 py-2">10 min</td>
//                 <td className="border border-gray-300 px-4 py-2">10 min</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="bg-[#0f172a] py-16 px-4 text-center">
//         <div className="max-w-7xl mx-auto text-white">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Start Your STB Test Prep Today!
//           </h2>
//           <p className="mb-8 text-lg">
//             Take a Free Trial Online Tutoring class for STB Test Prep and enhance your visual-spatial skills.
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

// export default STBPrep;

import React, { useEffect, useState } from "react";
import axios from "axios";

const STBPrep = () => {
  // --- State Management ---
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // --- API Call ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        // API Endpoint: /api/stb-test
        const response = await axios.get(`${import.meta.env.VITE_APP_URL}api/user/stb-test`);
        
        // Validation: Check if data exists
        if (response.data && response.data.data) {
          setData(response.data.data);
        } else {
          setData(null);
        }
      } catch (err) {
        console.error("Error fetching STB data:", err);
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

  // --- 3. Main Content ---
  return (
    <div className="w-full bg-white text-gray-800" id='stb'>

      {/* HERO SECTION */}
      <section className="bg-[#0f172a] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {data?.heroTitle || "STB TEST PREP"}
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8 whitespace-pre-wrap">
            {data?.heroDescription || "At GGES, we provide expert STB Test Prep tutoring..."}
          </p>
          <a
            href="/free-trial"
            className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Book Free Trial Class
          </a>
        </div>
      </section>

      {/* ABOUT STB */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 break-all">
            {data?.aboutHeading || "About the STB"}
          </h2>
          {/* whitespace-pre-wrap ensures paragraphs from admin textarea are preserved */}
          <div className="text-lg mb-4 whitespace-pre-wrap break-all">
            {data?.aboutDescription}
          </div>
        </div>
      </section>

      {/* STB SUBTESTS & TABLE SECTION */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            {data?.subtestHeading || "STB Subtests"}
          </h2>

          {/* Dynamic Subtests List */}
          {data?.subtests?.length > 0 ? (
            data.subtests.map((subtest, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-2xl font-semibold mb-3">{subtest.title}</h3>
                <p className="text-lg mb-4 whitespace-pre-wrap">
                  {subtest.content}
                </p>
              </div>
            ))
          ) : (
            <p className="text-lg mb-4">Subtest information coming soon.</p>
          )}

          {/* IMPORTANT TEST INFORMATION */}
          <h3 className="text-2xl font-bold mb-3 mt-8">
            {data?.infoHeading || "Important Testing Information"}
          </h3>
          <p className="text-lg mb-4 whitespace-pre-wrap">
            {data?.infoDescription}
          </p>

          {/* Dynamic Timing Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-gray-300 mb-6">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">Subtest + Tutorial</th>
                  <th className="border border-gray-300 px-4 py-2">5th/6th Graders: Time Allowed</th>
                  <th className="border border-gray-300 px-4 py-2">7th Graders and Older: Time Allowed</th>
                </tr>
              </thead>
              <tbody>
                {/* Validation: Check if table data exists */}
                {data?.timeTable?.length > 0 ? (
                  data.timeTable.map((row, index) => (
                    <tr 
                      key={index} 
                      // Zebra Striping Logic: Odd indexes get gray background
                      className={index % 2 !== 0 ? "bg-gray-50" : ""}
                    >
                      <td className="border border-gray-300 px-4 py-2">{row.activity}</td>
                      <td className="border border-gray-300 px-4 py-2">{row.time5th6th}</td>
                      <td className="border border-gray-300 px-4 py-2">{row.time7thPlus}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="border border-gray-300 px-4 py-2 text-center">
                      No timing data available.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA (Static) */}
      <section className="bg-[#0f172a] py-16 px-4 text-center">
        <div className="max-w-7xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your STB Test Prep Today!
          </h2>
          <p className="mb-8 text-lg">
            Take a Free Trial Online Tutoring class for STB Test Prep and enhance your visual-spatial skills.
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

export default STBPrep;