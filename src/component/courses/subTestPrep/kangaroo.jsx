// import React from "react";

// const MathKangarooTestPrep = () => {
//   return (
//     <div className="w-full bg-white text-gray-800" id='kangaroo'>

//       {/* HERO SECTION */}
//       <section className="bg-[#0f172a] text-white py-20 px-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">
//             MATH KANGAROO TEST PREP
//           </h1>
//           <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8">
//             Mathematical Kangaroo is an international competition with more than 50 countries participating. GGES provides the best online Math Kangaroo tutoring with expert specialized tutors.
//           </p>
//           <a
//             href="/free-trial"
//             className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
//           >
//             Book Free Trial Class
//           </a>
//         </div>
//       </section>

//       {/* TEST STRUCTURE */}
//       <section className="py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">Test Structure</h2>
//           <p className="text-lg mb-4">
//             The competition is a 75-minute multiple-choice test consisting of 30 questions (24 for grades 1–4), divided among 3-point, 4-point, and 5-point questions. One point is awarded for correct answers, zero for unanswered, and a quarter is subtracted for wrong answers.
//           </p>
//           <p className="text-lg">
//             Each participant starts with 30 base points. Maximum possible score is 150 points (120 points for grades 1–4).
//           </p>
//         </div>
//       </section>

//       {/* FEATURES */}
//       <section className="bg-gray-100 py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">Features</h2>
//           <ul className="list-disc pl-6 space-y-3 text-lg">
//             <li>International annual competition on the third Thursday in March.</li>
//             <li>Open to students in grades 1–12 who can work independently.</li>
//             <li>Each participant receives a t-shirt, certificate, and gift.</li>
//             <li>Competition questions are age-appropriate, interesting, and challenging.</li>
//             <li>Top scorers receive gold, silver, and bronze medals, gifts, and awards like International Summer Camp or Mathematica Camp participation.</li>
//             <li>Wolfram Research offers Mathematica licenses for 6th grade and up participants.</li>
//           </ul>
//         </div>
//       </section>

//       {/* GENERAL RULES */}
//       <section className="py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">General Rules</h2>
//           <ul className="list-disc pl-6 space-y-3 text-lg">
//             <li>Levels correspond to grades 1–12.</li>
//             <li>75-minute multiple-choice test: 24 questions for grades 1–4, 30 questions for grades 5 and up.</li>
//             <li>Participants receive a booklet, answer form, scratch paper, and pencil. No calculators or other aids allowed.</li>
//           </ul>
//         </div>
//       </section>

//       {/* SCORING */}
//       <section className="bg-gray-100 py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">Scoring</h2>
//           <p className="text-lg mb-4">
//             Each question has a point value: 1/3 are 3 points, 1/3 are 4 points, and 1/3 are 5 points. The sum of points earned is the student’s score. There are no negative markings. 
//           </p>
//           <p className="text-lg mb-4">
//             Top 10 students at each level nationwide are listed on the National List. Percentile indicates the percentage of students scoring below a participant.
//           </p>
//           <p className="text-lg">
//             Maximum possible scores: 96 points for levels 1–4 and 120 points for levels 5–12.
//           </p>
//         </div>
//       </section>

//       {/* CTA SECTION */}
//       <section className="bg-[#0f172a] py-16 px-4 text-center">
//         <div className="max-w-7xl mx-auto text-white">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Start Your Math Kangaroo Preparation Today!
//           </h2>
//           <p className="mb-8 text-lg">
//             Enroll now for our FREE trial class and learn from our expert tutors.
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

// export default MathKangarooTestPrep;

import React, { useEffect, useState } from "react";
import axios from "axios";
import bgImage from "../../../assets/Elaback.png"; 


const MathKangarooTestPrep = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // --- API Call ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        // API Endpoint based on your router: /api/math-kangaroo-test
        const response = await axios.get(`${import.meta.env.VITE_APP_URL}api/user/math-kangaroo-test`);
        
        // Data Validation
        if (response.data && response.data.data) {
          setData(response.data.data);
        } else {
          setData(null);
        }
      } catch (err) {
        console.error("Error fetching Math Kangaroo data:", err);
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
    <div  style={{ backgroundImage: `url(${bgImage})` }} className="w-full bg-white text-gray-800" id='kangaroo'>

      {/* HERO SECTION */}
      <section className="bg-[#0f172a] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {data?.heroTitle || "MATH KANGAROO TEST PREP"}
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8 whitespace-pre-wrap">
            {data?.heroDescription || "Mathematical Kangaroo is an international competition..."}
          </p>
          <a
            href="/free-trial"
            className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Book Free Trial Class
          </a>
        </div>
      </section>

      {/* TEST STRUCTURE */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            {data?.structureHeading || "Test Structure"}
          </h2>
          {/* whitespace-pre-wrap preserves newlines from admin textarea */}
          <div className="text-lg mb-4 whitespace-pre-wrap">
            {data?.structureDescription || "The competition is a 75-minute multiple-choice test..."}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            {data?.featuresHeading || "Features"}
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            {/* Validation: Check if list exists and is not empty */}
            {data?.featuresList?.length > 0 ? (
              data.featuresList.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            ) : (
              // Fallback content if API returns empty list
              <>
                <li>International annual competition.</li>
                <li>Open to students in grades 1–12.</li>
              </>
            )}
          </ul>
        </div>
      </section>

      {/* GENERAL RULES */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            {data?.rulesHeading || "General Rules"}
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            {data?.rulesList?.length > 0 ? (
              data.rulesList.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            ) : (
              <>
                <li>Levels correspond to grades 1–12.</li>
                <li>75-minute multiple-choice test.</li>
              </>
            )}
          </ul>
        </div>
      </section>

      {/* SCORING */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            {data?.scoringHeading || "Scoring"}
          </h2>
          <div className="text-lg mb-4 whitespace-pre-wrap">
            {data?.scoringDescription || "Each question has a point value..."}
          </div>
        </div>
      </section>

      {/* CTA SECTION - Keeping Static as requested, easy to preserve style */}
      <section className="bg-[#0f172a] py-16 px-4 text-center">
        <div className="max-w-7xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Math Kangaroo Preparation Today!
          </h2>
          <p className="mb-8 text-lg">
            Enroll now for our FREE trial class and learn from our expert tutors.
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

export default MathKangarooTestPrep;