import React from "react";

const CogatTestPrep = () => {
  return (
    <div className="w-full bg-white text-gray-800" id='cogat'>

      {/* HERO SECTION */}
      <section className="bg-[#0f172a] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            COGAT TEST PREP
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8">
            The Cognitive Abilities Test (CogAT) measures reasoning skills through verbal, quantitative, and non-verbal questions. GGES provides expert tutoring for CogAT test prep tailored to your child’s needs.
          </p>
          <a
            href="/free-trial"
            className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Book Free Trial Class
          </a>
        </div>
      </section>

      {/* ABOUT COGAT */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About the CogAT Test</h2>
          <p className="text-lg mb-4">
            CogAT is a K-12 multiple-choice assessment measuring verbal, quantitative, and non-verbal reasoning. It is commonly used for admission into gifted programs and evaluates cognitive abilities rather than learned knowledge.
          </p>
          <p className="text-lg mb-4">
            Our tutoring program includes hundreds of practice questions, interactive games, parent resources, and a customizable program based on your child’s grade level to maximize improvement.
          </p>
        </div>
      </section>

      {/* TEST SECTIONS */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">CogAT Test Structure</h2>
          <p className="text-lg mb-4">
            The CogAT consists of three batteries: Verbal, Quantitative, and Non-Verbal. Each battery has three types of questions:
          </p>
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse border border-gray-300 w-full text-left mb-6">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">Verbal Battery</th>
                  <th className="border border-gray-300 px-4 py-2">Quantitative Battery</th>
                  <th className="border border-gray-300 px-4 py-2">Non-Verbal Battery</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Picture Analogies</td>
                  <td className="border border-gray-300 px-4 py-2">Number Analogies</td>
                  <td className="border border-gray-300 px-4 py-2">Figure Matrices</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Sentence Completion</td>
                  <td className="border border-gray-300 px-4 py-2">Number Puzzles</td>
                  <td className="border border-gray-300 px-4 py-2">Paper Folding</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Picture Classification</td>
                  <td className="border border-gray-300 px-4 py-2">Number Series</td>
                  <td className="border border-gray-300 px-4 py-2">Figure Classification</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* LEVELS AND TIMING */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">CogAT Levels & Timing</h2>
          <p className="text-lg mb-4">
            CogAT levels vary by grade, number of questions, and test duration. Common levels:
          </p>
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse border border-gray-300 w-full text-left mb-6">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">Grade</th>
                  <th className="border border-gray-300 px-4 py-2">CogAT Level</th>
                  <th className="border border-gray-300 px-4 py-2">Questions</th>
                  <th className="border border-gray-300 px-4 py-2">Test Time</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border px-4 py-2">Kindergarten</td><td className="border px-4 py-2">Level 5/6</td><td className="border px-4 py-2">118</td><td className="border px-4 py-2">112 min</td></tr>
                <tr><td className="border px-4 py-2">1st Grade</td><td className="border px-4 py-2">Level 7</td><td className="border px-4 py-2">136</td><td className="border px-4 py-2">112 min</td></tr>
                <tr><td className="border px-4 py-2">2nd Grade</td><td className="border px-4 py-2">Level 8</td><td className="border px-4 py-2">154</td><td className="border px-4 py-2">122 min</td></tr>
                <tr><td className="border px-4 py-2">3rd Grade</td><td className="border px-4 py-2">Level 9</td><td className="border px-4 py-2">170</td><td className="border px-4 py-2">90 min</td></tr>
                <tr><td className="border px-4 py-2">4th Grade</td><td className="border px-4 py-2">Level 10</td><td className="border px-4 py-2">176</td><td className="border px-4 py-2">90 min</td></tr>
                <tr><td className="border px-4 py-2">5th Grade</td><td className="border px-4 py-2">Level 11</td><td className="border px-4 py-2">176</td><td className="border px-4 py-2">90 min</td></tr>
                <tr><td className="border px-4 py-2">6th Grade</td><td className="border px-4 py-2">Level 12</td><td className="border px-4 py-2">176</td><td className="border px-4 py-2">90 min</td></tr>
                <tr><td className="border px-4 py-2">7th–8th Grade</td><td className="border px-4 py-2">Level 13/14</td><td className="border px-4 py-2">176</td><td className="border px-4 py-2">90 min</td></tr>
                <tr><td className="border px-4 py-2">9th–10th Grade</td><td className="border px-4 py-2">Level 15/16</td><td className="border px-4 py-2">176</td><td className="border px-4 py-2">90 min</td></tr>
                <tr><td className="border px-4 py-2">11th–12th Grade</td><td className="border px-4 py-2">Level 17/18</td><td className="border px-4 py-2">176</td><td className="border px-4 py-2">90 min</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SCORING */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">How CogAT is Scored</h2>
          <p className="text-lg mb-4">
            CogAT uses age and grade norms. Raw scores are converted to Universal Scale Scores (USS) for each battery, which are then used to calculate Standard Age Score (SAS), percentile rank, and stanine scores. These provide a score profile highlighting strengths and areas for improvement.
          </p>
          <p className="text-lg mb-4">
            Age norms are more precise for students who are younger or older than typical grade-level peers.
          </p>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Where is the CogAT Given?</h2>
          <p className="text-lg mb-4">
            CogAT is administered across the United States. Major areas include Seattle, Dallas-Fort Worth, Baltimore, Atlanta, North Carolina, South Carolina, Washington DC, Chicago, Minneapolis, Houston, and San Antonio.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f172a] py-16 px-4 text-center">
        <div className="max-w-7xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your CogAT Prep Today!
          </h2>
          <p className="mb-8 text-lg">
            Take a Free Trial Online Tutoring class for CogAT Test Prep and give your child the edge in reasoning skills.
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

export default CogatTestPrep;
