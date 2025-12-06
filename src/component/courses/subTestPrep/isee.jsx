// import React from "react";
// import { useNavigate } from "react-router-dom";

// const ISEE = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="bg-gray-50 py-14 px-4" id='isee'>
//       <div className="max-w-7xl mx-auto">

//         {/* Page Title */}
//         <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">
//           ISEE Test Prep
//         </h1>

//         {/* Intro Section */}
//         <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md mb-12">
//           <p className="text-gray-700 leading-7 mb-4">
//             At <strong>GGES</strong>, ISEE test prep is imparted by the most
//             expert tutors. ISEE test tutoring requires a strong understanding
//             of the subject matter. Our tutors are well-experienced and adapt
//             their pedagogy to suit every student.
//           </p>

//           <p className="text-gray-700 leading-7 mb-6">
//             Do take a Free Trial Class with us to experience our teaching
//             excellence and see the difference in your preparation.
//           </p>

//           <button
//             onClick={() => navigate("/free-trial")}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition"
//           >
//             Click Here for Free Trial Class
//           </button>
//         </div>

//         {/* About ISEE */}
//         <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md mb-12">
//           <h2 className="text-2xl font-semibold mb-4 text-blue-800">
//             All About ISEE Test
//           </h2>

//           <p className="text-gray-700 leading-7 mb-4">
//             As the premier provider of admission assessments for independent
//             schools, the <strong>ISEE</strong> is accepted by over 1,200
//             independent schools worldwide. It is available both online and in
//             paper format.
//           </p>

//           <p className="text-gray-700 leading-7 mb-4">
//             The <strong>Independent School Entrance Examination (ISEE)</strong>
//             is an admissions test used by private schools for grades 2–12. It
//             consists of five sections:
//           </p>

//           <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-6">
//             <li>Verbal Reasoning</li>
//             <li>Quantitative Reasoning</li>
//             <li>Reading Comprehension</li>
//             <li>Mathematics Achievement</li>
//             <li>Unscored Essay</li>
//           </ul>

//           <p className="text-gray-700">
//             Different levels are offered based on grades:
//             <strong> Primary (2–4), Lower (5–6), Middle (7–8), Upper (9–12)</strong>.
//           </p>
//         </div>

//         {/* Purpose */}
//         <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md mb-12">
//           <h2 className="text-2xl font-semibold mb-4 text-blue-800">
//             Purpose of the ISEE
//           </h2>

//           <ul className="list-disc ml-6 text-gray-700 space-y-2">
//             <li>
//               Used by private and magnet schools in the U.S. and
//               internationally to evaluate applicants
//             </li>
//             <li>
//               Provides a standardized way for admissions to compare students
//             </li>
//             <li>
//               Helps predict a student's potential for academic success
//             </li>
//           </ul>
//         </div>

//         {/* Test Structure */}
//         <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md mb-12">
//           <h2 className="text-2xl font-semibold mb-4 text-blue-800">
//             Test Structure & Levels
//           </h2>

//           <p className="text-gray-700 mb-4">
//             The ISEE has <strong>four levels</strong>:
//           </p>

//           <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-6">
//             <li>Primary</li>
//             <li>Lower</li>
//             <li>Middle</li>
//             <li>Upper</li>
//           </ul>

//           <p className="text-gray-700 mb-4">
//             The test includes <strong>five sections</strong>:
//           </p>

//           <ul className="list-disc ml-6 text-gray-700 space-y-1">
//             <li>Verbal Reasoning</li>
//             <li>Quantitative Reasoning</li>
//             <li>Reading Comprehension</li>
//             <li>Mathematics Achievement</li>
//             <li>Essay (Unscored)</li>
//           </ul>
//         </div>

//         {/* Section Details */}
//         <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md mb-12">
//           <h2 className="text-2xl font-semibold mb-4 text-blue-800">
//             What the Sections Measure
//           </h2>

//           <ul className="list-disc ml-6 text-gray-700 space-y-2">
//             <li>
//               <strong>Verbal Reasoning:</strong> Vocabulary and verbal skills
//             </li>
//             <li>
//               <strong>Quantitative Reasoning:</strong> Logic and problem-solving
//             </li>
//             <li>
//               <strong>Reading Comprehension:</strong> Understanding passages
//             </li>
//             <li>
//               <strong>Mathematics Achievement:</strong> Math concepts knowledge
//             </li>
//             <li>
//               <strong>Essay:</strong> Written communication skills
//             </li>
//           </ul>
//         </div>

//         {/* Registration */}
//         <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md mb-12">
//           <h2 className="text-2xl font-semibold mb-4 text-blue-800">
//             Registration Details
//           </h2>

//           <p className="text-gray-700 leading-7 mb-6">
//             Students may take the ISEE at approved ERB member school test
//             sites, Prometric locations, or ERB’s New York City office.
//             Registration is available online, by mail, or by phone.
//           </p>

//           <p className="text-gray-700">
//             Prometric sites offer online testing for students entering grades
//             5–12. Registration fees may vary based on test location and format.
//           </p>
//         </div>

//         {/* CTA */}
//         <div className="bg-blue-900 text-white p-10 rounded-2xl text-center">
//           <h2 className="text-2xl font-bold mb-4">
//             Start Your ISEE Preparation with GGES Today
//           </h2>

//           <p className="mb-6">
//             Expert tutors • Personalized strategy • High success rate
//           </p>

//           <button
//             onClick={() => navigate("/free-trial")}
//             className="bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
//           >
//             Book Free Trial Class
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ISEE;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ISEE = () => {
  const navigate = useNavigate();

  // State Management
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIseeData = async () => {
      try {
        // API URL Construction
        // import.meta.env.VITE_APP_URL ends with '/', so add 'api/user/isee-test'
        const response = await axios.get(`${import.meta.env.VITE_APP_URL}api/user/isee-test`);
        
        console.log("ISEE API Data:", response.data);

        if (response.data) {
          // Admin panel logic: res.data.data
          let apiData = response.data.data || response.data;

          // If array, take first item, else take object
          if (Array.isArray(apiData)) {
            setData(apiData[0]);
          } else {
            setData(apiData);
          }
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching ISEE data:", err);
        setError("Failed to load content.");
        setLoading(false);
      }
    };

    fetchIseeData();
  }, []);

  // Loading & Error States
  if (loading) return <div className="text-center py-20 font-bold text-gray-500">Loading ISEE Prep...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

  // Safe Data Object (Validation to prevent crash)
  const safeData = data || {};

  return (
    <div className="bg-[#F0F8FF] py-14 px-4" id='isee'>
      <div className="max-w-7xl mx-auto">

        {/* ===== 1. HERO SECTION ===== */}
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-12">
           {/* Admin Key: heroTitle */}
           {safeData.heroTitle || "ISEE Test Prep"}
        </h1>

        {/* Intro Section */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md mb-12">
            <div className="text-gray-700 leading-7 mb-6 whitespace-pre-line">
                {/* Admin Key: heroDescription */}
                {safeData.heroDescription || (
                    <>
                    <p className="mb-4">
                        At <strong>GGES</strong>, ISEE test prep is imparted by the most expert tutors.
                        ISEE test tutoring requires a strong understanding of the subject matter.
                    </p>
                    <p>
                        Do take a Free Trial Class with us to experience our teaching excellence.
                    </p>
                    </>
                )}
            </div>

            <button
                onClick={() => navigate("/free-trial")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition"
            >
                Click Here for Free Trial Class
            </button>
        </div>

        {/* ===== 2. ABOUT ISEE ===== */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
             {/* Admin Key: aboutHeading */}
             {safeData.aboutHeading || "All About ISEE Test"}
          </h2>

          <div className="text-gray-700 leading-7 mb-4 whitespace-pre-line">
             {/* Admin Key: aboutDescription */}
             {safeData.aboutDescription || "As the premier provider of admission assessments..."}
          </div>

          <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-6">
            {/* Admin Key: aboutPoints */}
            {safeData.aboutPoints && safeData.aboutPoints.length > 0 ? (
                safeData.aboutPoints.map((pt, i) => pt && <li key={i}>{pt}</li>)
            ) : (
                // Fallback
                <>
                <li>Verbal Reasoning</li>
                <li>Quantitative Reasoning</li>
                <li>Reading Comprehension</li>
                </>
            )}
          </ul>

          <p className="text-gray-700 whitespace-pre-line">
             {/* Admin Key: aboutFooter */}
             {safeData.aboutFooter || "Different levels are offered based on grades: Primary, Lower, Middle, Upper."}
          </p>
        </div>

        {/* ===== 3. PURPOSE ===== */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
             {/* Admin Key: purposeHeading */}
             {safeData.purposeHeading || "Purpose of the ISEE"}
          </h2>

          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            {/* Admin Key: purposePoints */}
            {safeData.purposePoints && safeData.purposePoints.length > 0 ? (
                safeData.purposePoints.map((pt, i) => pt && <li key={i}>{pt}</li>)
            ) : (
                // Fallback
                <li>Used by private and magnet schools in the U.S.</li>
            )}
          </ul>
        </div>

        {/* ===== 4. TEST STRUCTURE & LEVELS ===== */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
             {/* Admin Key: structureHeading */}
             {safeData.structureHeading || "Test Structure & Levels"}
          </h2>

          <p className="text-gray-700 mb-4">
             {/* Admin Key: structureLevelIntro */}
             {safeData.structureLevelIntro || "The ISEE has four levels:"}
          </p>

          <ul className="list-disc ml-6 text-gray-700 space-y-1 mb-6">
             {/* Admin Key: structureLevels */}
             {safeData.structureLevels && safeData.structureLevels.length > 0 ? (
                 safeData.structureLevels.map((pt, i) => pt && <li key={i}>{pt}</li>)
             ) : (
                 <>
                 <li>Primary</li>
                 <li>Lower</li>
                 <li>Middle</li>
                 <li>Upper</li>
                 </>
             )}
          </ul>

          <p className="text-gray-700 mb-4">
             {/* Admin Key: structureSectionIntro */}
             {safeData.structureSectionIntro || "The test includes five sections:"}
          </p>

          <ul className="list-disc ml-6 text-gray-700 space-y-1">
             {/* Admin Key: structureSections */}
             {safeData.structureSections && safeData.structureSections.length > 0 ? (
                 safeData.structureSections.map((pt, i) => pt && <li key={i}>{pt}</li>)
             ) : (
                 <>
                 <li>Verbal Reasoning</li>
                 <li>Quantitative Reasoning</li>
                 </>
             )}
          </ul>
        </div>

        {/* ===== 5. SECTION DETAILS (Measures) ===== */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
             {/* Admin Key: measureHeading */}
             {safeData.measureHeading || "What the Sections Measure"}
          </h2>

          <ul className="list-disc ml-6 text-gray-700 space-y-2">
             {/* Admin Key: measurePoints */}
             {safeData.measurePoints && safeData.measurePoints.length > 0 ? (
                 safeData.measurePoints.map((pt, i) => (
                    // Logic to make text before ':' bold if present (Simple parsing)
                    pt && <li key={i} dangerouslySetInnerHTML={{ 
                        __html: pt.includes(":") 
                        ? pt.replace(":", "</strong>:").replace(/^/, "<strong>") 
                        : pt 
                    }} />
                 ))
             ) : (
                 // Fallback
                 <li><strong>Verbal Reasoning:</strong> Vocabulary and verbal skills</li>
             )}
          </ul>
        </div>

        {/* ===== 6. REGISTRATION ===== */}
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">
             {/* Admin Key: registrationHeading */}
             {safeData.registrationHeading || "Registration Details"}
          </h2>

          <div className="text-gray-700 leading-7 mb-6 whitespace-pre-line">
             {/* Admin Key: registrationDescription */}
             {safeData.registrationDescription || "Students may take the ISEE at approved ERB member school test sites..."}
          </div>
        </div>

        {/* ===== CTA ===== */}
        <div className="bg-blue-900 text-white p-10 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">
            Start Your ISEE Preparation with GGES Today
          </h2>

          <p className="mb-6">
            Expert tutors • Personalized strategy • High success rate
          </p>

          <button
            onClick={() => navigate("/free-trial")}
            className="bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Book Free Trial Class
          </button>
        </div>

      </div>
    </div>
  );
};

export default ISEE;