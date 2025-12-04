// import React from "react";

// const ActTestPrep = () => {
//   return (
//     <div className="w-full bg-white text-gray-800" id='act'>

//       {/* HERO SECTION */}
//       <section className="bg-[#0f172a] text-white py-20 px-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">
//             ACT TEST PREP
//           </h1>
//           <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8">
//             At GGES, we have the best tutors to provide expert ACT Test Prep tutoring. Our tutors ensure you are fully prepared to tackle the ACT challenges with confidence.
//           </p>
//           <a
//             href="/free-trial"
//             className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
//           >
//             Book Free Trial Class
//           </a>
//         </div>
//       </section>

//       {/* ABOUT ACT */}
//       <section className="py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">All About ACT</h2>
//           <p className="text-lg mb-4">
//             The ACT (American College Testing) is a standardized test for college admissions in the United States, assessing high school students' readiness for college. It includes English, Math, Reading, Science, and an optional Writing section. Scores range from 1–36 and are reported individually and as a composite.
//           </p>
//           <p className="text-lg mb-4">
//             ACT evaluates your skills in English, Math, Reading, and Science. The optional Writing and Science sections provide additional score reports.
//           </p>
//           <p className="text-lg mb-4">
//             ACT is widely used by colleges to compare applicants from different backgrounds and assess their academic readiness.
//           </p>
//         </div>
//       </section>

//       {/* TEST STRUCTURE */}
//       <section className="bg-gray-100 py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">ACT Test Structure</h2>
//           <ul className="list-disc pl-6 space-y-3 text-lg">
//             <li>Core Sections: English, Math, Reading (mandatory for composite score)</li>
//             <li>Optional Sections: Science and Writing (separate score reports)</li>
//             <li>Content: High school curriculum up to grade 12</li>
//             <li>Skills Measured: Revision, editing, mathematical reasoning, close reading, logical reasoning, and scientific problem-solving</li>
//             <li>Composite Score: Average of English, Math, Reading (scale 1–36)</li>
//             <li>Subscores: Highlight strengths and areas for improvement</li>
//           </ul>
//         </div>
//       </section>

//       {/* NEW ACT 2025 */}
//       <section className="py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">New ACT Changes in 2025</h2>
//           <ol className="list-decimal pl-6 space-y-4 text-lg">
//             <li><strong>Optional Science Section:</strong> Only English, Math, and Reading required for composite score. Science and Writing are optional.</li>
//             <li><strong>Composite Score:</strong> Will no longer include Science; optional sections have separate scores.</li>
//             <li><strong>Fewer Questions:</strong> Core sections reduced to 131 questions (English: 50, Math: 45, Reading: 36)</li>
//             <li><strong>Shorter Testing Time:</strong> 120 mins for three sections only; 2h40 for one optional section; 3h20 for both optional sections</li>
//             <li><strong>More Time Per Question:</strong> Average increases from ~49s/question to ~55s/question</li>
//             <li><strong>Shorter Passages:</strong> English and Reading passages are reduced in length</li>
//             <li><strong>Experimental Questions:</strong> Embedded in sections; students answer all without knowing which count</li>
//           </ol>
//         </div>
//       </section>

//       {/* CTA SECTION */}
//       <section className="bg-[#0f172a] py-16 px-4 text-center">
//         <div className="max-w-7xl mx-auto text-white">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Start Your ACT Prep Today!
//           </h2>
//           <p className="mb-8 text-lg">
//             Take a Free Trial Online Tutoring class for ACT or SAT test preparation and boost your confidence.
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

// export default ActTestPrep;


import React, { useEffect, useState } from "react";
import axios from "axios";

const ActTestPrep = () => {
  // State management
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // API Call
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Backend URL: Adjust base URL if needed
        const response = await axios.get(`${import.meta.env.VITE_APP_URL}api/user/act-test`);
        
        // Validation: Check if data object exists
        if (response.data && response.data.data) {
          setData(response.data.data);
        } else {
          setData(null);
        }
      } catch (err) {
        console.error("Error fetching ACT data:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 1. Loading State
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  // 2. Error State
  if (error) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-gray-50 text-red-500">
        <p>Unable to load content. Please refresh or try again later.</p>
      </div>
    );
  }

  // 3. Main Content
  return (
    <div className="w-full bg-white text-gray-800" id='act'>

      {/* HERO SECTION */}
      <section className="bg-[#0f172a] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {data?.heroTitle || "ACT TEST PREP"}
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8 whitespace-pre-wrap">
            {data?.heroDescription || "At GGES, we have the best tutors..."}
          </p>
          <a
            href="/free-trial"
            className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Book Free Trial Class
          </a>
        </div>
      </section>

      {/* ABOUT ACT */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            {data?.aboutHeading || "All About ACT"}
          </h2>
          {/* whitespace-pre-wrap ensures new lines from admin textarea are shown */}
          <div className="text-lg mb-4 whitespace-pre-wrap">
            {data?.aboutDescription}
          </div>
        </div>
      </section>

      {/* TEST STRUCTURE */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            {data?.structureHeading || "ACT Test Structure"}
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            {/* Validation: Check array length */}
            {data?.structurePoints?.length > 0 ? (
              data.structurePoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))
            ) : (
              <li>Structure details coming soon.</li>
            )}
          </ul>
        </div>
      </section>

      {/* NEW ACT 2025 */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            {data?.changesHeading || "New ACT Changes in 2025"}
          </h2>
          <ol className="list-decimal pl-6 space-y-4 text-lg">
             {/* Validation: Check array length */}
            {data?.changesPoints?.length > 0 ? (
              data.changesPoints.map((point, index) => (
                <li key={index}>
                   {/* DangerouslySetInnerHTML can be used if Admin allows bold tags, 
                       otherwise plain text is safer */}
                   {point}
                </li>
              ))
            ) : (
              <li>Updates regarding ACT 2025 will be listed here.</li>
            )}
          </ol>
        </div>
      </section>

      {/* CTA SECTION - Static (Best for consistency) */}
      <section className="bg-[#0f172a] py-16 px-4 text-center">
        <div className="max-w-7xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your ACT Prep Today!
          </h2>
          <p className="mb-8 text-lg">
            Take a Free Trial Online Tutoring class for ACT or SAT test preparation and boost your confidence.
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

export default ActTestPrep;