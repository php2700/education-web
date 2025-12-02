import React from "react";

const PsatTestPrep = () => {
  return (
    <div className="w-full bg-white py-12 px-4 md:px-16" id='psat'>
   <div className="max-w-7xl mx-auto">
      {/* ===== HEADER ===== */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          PSAT TEST PREP
        </h1>
        <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
          At GGES, we have the best teachers with years of experience in PSAT test
          tutoring and excellent results.
        </p>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="text-left space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Our tutoring plan is designed with maximum flexibility to meet your
            schedule while preparing for PSAT test prep. Our tutors are caring,
            committed, and experienced instructors who work with the latest PSAT
            practice tests.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Regular PSAT practice exams with detailed score analysis help students
            identify weak areas and focus on improvement. We teach proven strategies
            for the PSAT/NMSQT to ensure the best outcomes.
          </p>

          <p className="text-gray-700 leading-relaxed font-semibold">
            Prepare with the best. Boost your confidence. Achieve higher scores.
          </p>

          <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            Click here for Free Trial Class
          </button>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Why Choose GGES for PSAT?
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li>✅ Certified Expert Tutors</li>
            <li>✅ Latest PSAT Practice Tests</li>
            <li>✅ Result-Oriented Learning</li>
            <li>✅ Flexible Timings</li>
            <li>✅ Detailed Performance Analysis</li>
          </ul>
        </div>

      </div>

      {/* ===== ALL ABOUT PSAT ===== */}
      <div className="mt-16 bg-gray-50 p-8 rounded-xl shadow-inner">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          ALL ABOUT PSAT
        </h2>

        <p className="text-gray-700 mb-8 text-center max-w-4xl mx-auto">
          The PSAT/NMSQT (Preliminary SAT/National Merit Scholarship Qualifying Test)
          is a preparatory exam for the SAT and ACT. High scores can also qualify students
          for National Merit Scholarships and other awards — over $180 million in scholarships
          are awarded each year.
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
                <th className="p-3 border">Question Type</th>
              </tr>
            </thead>

            <tbody>
              <tr className="bg-white">
                <td className="p-3 border font-semibold">Reading & Writing</td>
                <td className="p-3 border">64 Minutes</td>
                <td className="p-3 border">Mostly Multiple Choice</td>
              </tr>

              <tr className="bg-gray-100">
                <td className="p-3 border font-semibold">Math</td>
                <td className="p-3 border">70 Minutes</td>
                <td className="p-3 border">
                  Multiple Choice + Write-in Answers
                </td>
              </tr>
            </tbody>
          </table>
        </div>

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
