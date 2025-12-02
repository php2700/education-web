import React from "react";

const SsatTestPrep = () => {
  return (
    <div className="w-full bg-white py-12 px-4 md:px-16" id='ssat'>
       <div className="max-w-7xl mx-auto">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          SSAT TEST PREP
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-4xl mx-auto">
          At GGES, we have specialized tutors for SSAT test preparation. Our expert
          strategies and in-depth knowledge help students achieve the best possible results.
        </p>

        <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Click here for Free Trial Class
        </button>
      </div>


      {/* ===== ABOUT SSAT ===== */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center">ABOUT SSAT</h2>

        <p className="text-gray-700 leading-relaxed max-w-5xl mx-auto mb-6 text-center">
          Developed to standardize admissions for grades 3–11, the SSAT measures a
          student’s verbal, math, and reading skills and provides a reliable, objective
          insight into academic potential for private school admission.
        </p>

        <p className="text-gray-700 leading-relaxed max-w-5xl mx-auto text-center">
          It plays an important role in a holistic assessment process by helping schools
          fairly evaluate applicants based on cognitive skills.
        </p>
      </div>


      {/* ===== LEVELS SECTION ===== */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-3 text-blue-700">Elementary Level</h3>
          <p className="text-gray-700">
            For applicants in grades 3 and 4. Includes one Quantitative section,
            Reading Comprehension, and Verbal Reasoning.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-3 text-blue-700">Middle Level</h3>
          <p className="text-gray-700">
            For grades 5–7. Includes two Quantitative sections, Reading Comprehension,
            Verbal Reasoning, an essay, and an experimental section.
          </p>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-3 text-blue-700">Upper Level</h3>
          <p className="text-gray-700">
            For grades 8–11. Same sections as Middle Level but with increased difficulty.
          </p>
        </div>
      </div>


      {/* ===== ISEE vs SSAT ===== */}
      <div className="mt-16 bg-gray-50 p-8 rounded-xl shadow-inner">
        <h2 className="text-3xl font-bold text-center mb-6">
          SSAT vs ISEE – What’s the Difference?
        </h2>

        <ul className="list-disc list-inside text-gray-700 max-w-5xl mx-auto space-y-2">
          <li>SSAT uses synonyms and analogies in vocabulary testing</li>
          <li>ISEE uses synonyms and sentence completion</li>
          <li>ISEE has longer reading passages</li>
          <li>SSAT includes a wider variety of genres (including poetry)</li>
          <li>ISEE places a higher emphasis on mathematical reasoning</li>
        </ul>
      </div>


      {/* ===== SCORING SECTION ===== */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          How is the SSAT Scored?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="border p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-3 text-blue-700">Quantitative</h3>
            <p>Upper: 500 – 800</p>
            <p>Middle: 440 – 704</p>
            <p>Elementary: 300 – 600</p>
          </div>

          <div className="border p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-3 text-blue-700">Reading</h3>
            <p>Upper: 500 – 800</p>
            <p>Middle: 440 – 710</p>
            <p>Elementary: 300 – 600</p>
          </div>

          <div className="border p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-3 text-blue-700">Verbal</h3>
            <p>Upper: 500 – 800</p>
            <p>Middle: 410 – 710</p>
            <p>Elementary: 300 – 600</p>
          </div>

        </div>

        <p className="text-center text-gray-600 mt-6 max-w-4xl mx-auto">
          Essay is not scored, but a copy is sent to schools. All scores are converted
          into grade-appropriate percentile ranks.
        </p>
      </div>


      {/* ===== SSAT TEST STRUCTURE TABLES ===== */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-6">SSAT TEST STRUCTURE</h2>

        <h3 className="text-2xl font-bold mb-3 mt-8">Middle Level (5th – 7th)</h3>
        <div className="overflow-x-auto mb-10">
          <table className="w-full border text-left">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-3 border">Section</th>
                <th className="p-3 border">Time</th>
                <th className="p-3 border">Questions</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border">Essay</td><td className="p-3 border">25 min</td><td className="p-3 border">1 Prompt</td></tr>
              <tr><td className="p-3 border">Quantitative #1</td><td className="p-3 border">30 min</td><td className="p-3 border">25</td></tr>
              <tr><td className="p-3 border">Reading</td><td className="p-3 border">40 min</td><td className="p-3 border">40</td></tr>
              <tr><td className="p-3 border">Verbal</td><td className="p-3 border">30 min</td><td className="p-3 border">60</td></tr>
              <tr><td className="p-3 border">Quantitative #2</td><td className="p-3 border">30 min</td><td className="p-3 border">25</td></tr>
            </tbody>
          </table>
        </div>


        <h3 className="text-2xl font-bold mb-3 mt-8">Upper Level (8th – 11th)</h3>
        <div className="overflow-x-auto">
          <table className="w-full border text-left">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="p-3 border">Section</th>
                <th className="p-3 border">Time</th>
                <th className="p-3 border">Questions</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border">Essay</td><td className="p-3 border">25 min</td><td className="p-3 border">1 Prompt</td></tr>
              <tr><td className="p-3 border">Quantitative #1</td><td className="p-3 border">30 min</td><td className="p-3 border">25</td></tr>
              <tr><td className="p-3 border">Reading</td><td className="p-3 border">40 min</td><td className="p-3 border">40</td></tr>
              <tr><td className="p-3 border">Verbal</td><td className="p-3 border">30 min</td><td className="p-3 border">60</td></tr>
              <tr><td className="p-3 border">Quantitative #2</td><td className="p-3 border">30 min</td><td className="p-3 border">25</td></tr>
            </tbody>
          </table>
        </div>
      </div>


      {/* ===== FINAL CTA ===== */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold mb-4">
          Ready to start your SSAT preparation?
        </h2>
        <button className="bg-red-600 text-white px-10 py-4 rounded-full text-lg hover:bg-red-700 transition">
          Click here for Free Trial Class
        </button>
      </div>
  </div>
    </div>
  );
};

export default SsatTestPrep;
