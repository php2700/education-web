// import React from "react";

// const AccuplacerPrep = () => {
//   return (
//     <div className="w-full bg-white text-gray-800" id='lacer'>

//       {/* HERO SECTION */}
//       <section className="bg-[#0f172a] text-white py-20 px-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">
//             ACCUPLACER TEST PREP
//           </h1>
//           <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8">
//             At GGES, we provide expert Accuplacer Test Prep tutoring. Our strategies have helped students achieve high scores, preparing them for college placement and success.
//           </p>
//           <a
//             href="/free-trial"
//             className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
//           >
//             Book Free Trial Class
//           </a>
//         </div>
//       </section>

//       {/* ABOUT ACCUPLACER */}
//       <section className="py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">About Accuplacer</h2>
//           <p className="text-lg mb-4">
//             Colleges use Accuplacer to assess your skill levels in reading, writing, and math to determine readiness for credit-bearing courses. If you demonstrate proficiency, developmental courses may be bypassed, allowing you to start earning credits immediately.
//           </p>
//           <p className="text-lg mb-4">
//             Accuplacer uses computer-adaptive technology. Each question adapts to your skill level, so thoughtful responses are essential. No one passes or fails; the goal is accurate placement in courses.
//           </p>
//         </div>
//       </section>

//       {/* TEST CONTENT */}
//       <section className="bg-gray-100 py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">What’s on the Tests</h2>
          
//           {/* Reading */}
//           <h3 className="text-2xl font-semibold mb-3">Reading Test</h3>
//           <p className="text-lg mb-4">
//             Assesses the ability to derive meaning from texts and determine the meaning of words/phrases in short and extended contexts. Includes single and paired passages.
//           </p>

//           {/* Writing */}
//           <h3 className="text-2xl font-semibold mb-3">Writing Test</h3>
//           <p className="text-lg mb-4">
//             Evaluates your ability to revise and edit multi-paragraph text.
//           </p>

//           {/* Math */}
//           <h3 className="text-2xl font-semibold mb-3">Math Tests</h3>
//           <p className="text-lg mb-4">
//             <strong>Arithmetic Test:</strong> Whole numbers, fractions, decimals, percent, comparisons, and equivalents.<br/>
//             <strong>Quantitative Reasoning, Algebra, and Statistics (QAS):</strong> Rational numbers, ratios, exponents, algebraic expressions, linear equations, probability, statistics, and geometry.<br/>
//             <strong>Advanced Algebra and Functions (AAF):</strong> Linear equations, factoring, quadratics, functions, radicals, polynomials, exponents, logarithms, and trigonometry.
//           </p>

//           {/* WritePlacer Essay */}
//           <h3 className="text-2xl font-semibold mb-3">WritePlacer Essay</h3>
//           <p className="text-lg mb-4">
//             Measures writing ability including purpose & focus, organization & structure, development & support, sentence variety & style, mechanical conventions, and critical thinking.
//           </p>

//           {/* ESL */}
//           <h3 className="text-2xl font-semibold mb-3">Accuplacer for English Language Learners</h3>
//           <p className="text-lg mb-4">
//             ESL tests assess grammar, listening, reading skills, and sentence meaning for non-native English speakers.
//           </p>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="bg-[#0f172a] py-16 px-4 text-center">
//         <div className="max-w-7xl mx-auto text-white">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Start Your Accuplacer Prep Today!
//           </h2>
//           <p className="mb-8 text-lg">
//             Take a Free Trial Online Tutoring class for Accuplacer Test Prep and maximize your college readiness.
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

// export default AccuplacerPrep;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const AccuplacerPrep = () => {
//   // --- State Management ---
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   // --- API Call ---
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // API Endpoint based on router: /api/accuplacer-test
//         const response = await axios.get(`${import.meta.env.VITE_APP_URL}api/user/accuplacer-test`);
        
//         // Validation: Check if data exists in response
//         if (response.data && response.data.data) {
//           setData(response.data.data);
//         } else {
//           setData(null);
//         }
//       } catch (err) {
//         console.error("Error fetching Accuplacer data:", err);
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
//     <div className="w-full bg-white text-gray-800" id='lacer'>

//       {/* HERO SECTION */}
//       <section className="bg-[#0f172a] text-white py-20 px-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">
//             {data?.heroTitle || "ACCUPLACER TEST PREP"}
//           </h1>
//           <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8 whitespace-pre-wrap">
//             {data?.heroDescription || "At GGES, we provide expert Accuplacer Test Prep tutoring..."}
//           </p>
//           <a
//             href="/free-trial"
//             className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
//           >
//             Book Free Trial Class
//           </a>
//         </div>
//       </section>

//       {/* ABOUT ACCUPLACER */}
//       <section className="py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">
//             {data?.aboutHeading || "About Accuplacer"}
//           </h2>
//           {/* whitespace-pre-wrap ensures paragraphs from admin textarea are preserved */}
//           <div className="text-lg mb-4 whitespace-pre-wrap">
//             {data?.aboutDescription}
//           </div>
//         </div>
//       </section>

//       {/* TEST CONTENT (Dynamic List) */}
//       <section className="bg-gray-100 py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">
//             {data?.testSectionHeading || "What’s on the Tests"}
//           </h2>
          
//           {/* Validation: Check if testList array exists and has items */}
//           {data?.testList?.length > 0 ? (
//             data.testList.map((test, index) => (
//               <div key={index} className="mb-6">
//                 <h3 className="text-2xl font-semibold mb-3">{test.title}</h3>
//                 <p className="text-lg mb-4 whitespace-pre-wrap">
//                   {test.description}
//                 </p>
//               </div>
//             ))
//           ) : (
//             // Fallback content if no data from API
//             <p className="text-lg">Test details will be updated soon.</p>
//           )}

//         </div>
//       </section>

//       {/* CTA (Static - Keeping specific style) */}
//       <section className="bg-[#0f172a] py-16 px-4 text-center">
//         <div className="max-w-7xl mx-auto text-white">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Start Your Accuplacer Prep Today!
//           </h2>
//           <p className="mb-8 text-lg">
//             Take a Free Trial Online Tutoring class for Accuplacer Test Prep and maximize your college readiness.
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

// export default AccuplacerPrep;

import React, { useEffect, useState } from "react";
import axios from "axios";

const AccuplacerPrep = () => {
  // --- State Management ---
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // --- API Call ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        // API Endpoint based on router: /api/accuplacer-test
        const response = await axios.get(`${import.meta.env.VITE_APP_URL}api/user/accuplacer-test`);
        
        // Validation: Check if data exists in response
        if (response.data && response.data.data) {
          setData(response.data.data);
        } else {
          setData(null);
        }
      } catch (err) {
        console.error("Error fetching Accuplacer data:", err);
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
    <div className="w-full bg-white text-gray-800" id='lacer'>

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

      {/* ABOUT ACCUPLACER */}
      {/* Section renders only if content exists */}
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

      {/* TEST CONTENT (Dynamic List) */}
      {/* Section renders only if content exists */}
      {(safeData.testSectionHeading || (safeData.testList && safeData.testList.length > 0)) && (
        <section className="bg-gray-100 py-16 px-4">
            <div className="max-w-7xl mx-auto">
            {safeData.testSectionHeading && (
                <h2 className="text-3xl font-bold mb-6">
                    {safeData.testSectionHeading}
                </h2>
            )}
            
            {safeData.testList && safeData.testList.length > 0 && (
                <div>
                    {safeData.testList.map((test, index) => (
                        <div key={index} className="mb-6">
                            {test.title && <h3 className="text-2xl font-semibold mb-3">{test.title}</h3>}
                            {test.description && (
                                <p className="text-lg mb-4 whitespace-pre-wrap">
                                    {test.description}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            )}
            </div>
        </section>
      )}

      {/* CTA (Static - Always Visible - Default) */}
      <section className="bg-[#0f172a] py-16 px-4 text-center">
        <div className="max-w-7xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Accuplacer Prep Today!
          </h2>
          <p className="mb-8 text-lg">
            Take a Free Trial Online Tutoring class for Accuplacer Test Prep and maximize your college readiness.
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

export default AccuplacerPrep;