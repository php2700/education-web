import React from "react";

const ActTestPrep = () => {
  return (
    <div className="w-full bg-white text-gray-800" id='act'>

      {/* HERO SECTION */}
      <section className="bg-[#0f172a] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            ACT TEST PREP
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8">
            At GGES, we have the best tutors to provide expert ACT Test Prep tutoring. Our tutors ensure you are fully prepared to tackle the ACT challenges with confidence.
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
          <h2 className="text-3xl font-bold mb-6">All About ACT</h2>
          <p className="text-lg mb-4">
            The ACT (American College Testing) is a standardized test for college admissions in the United States, assessing high school students' readiness for college. It includes English, Math, Reading, Science, and an optional Writing section. Scores range from 1–36 and are reported individually and as a composite.
          </p>
          <p className="text-lg mb-4">
            ACT evaluates your skills in English, Math, Reading, and Science. The optional Writing and Science sections provide additional score reports.
          </p>
          <p className="text-lg mb-4">
            ACT is widely used by colleges to compare applicants from different backgrounds and assess their academic readiness.
          </p>
        </div>
      </section>

      {/* TEST STRUCTURE */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">ACT Test Structure</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Core Sections: English, Math, Reading (mandatory for composite score)</li>
            <li>Optional Sections: Science and Writing (separate score reports)</li>
            <li>Content: High school curriculum up to grade 12</li>
            <li>Skills Measured: Revision, editing, mathematical reasoning, close reading, logical reasoning, and scientific problem-solving</li>
            <li>Composite Score: Average of English, Math, Reading (scale 1–36)</li>
            <li>Subscores: Highlight strengths and areas for improvement</li>
          </ul>
        </div>
      </section>

      {/* NEW ACT 2025 */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">New ACT Changes in 2025</h2>
          <ol className="list-decimal pl-6 space-y-4 text-lg">
            <li><strong>Optional Science Section:</strong> Only English, Math, and Reading required for composite score. Science and Writing are optional.</li>
            <li><strong>Composite Score:</strong> Will no longer include Science; optional sections have separate scores.</li>
            <li><strong>Fewer Questions:</strong> Core sections reduced to 131 questions (English: 50, Math: 45, Reading: 36)</li>
            <li><strong>Shorter Testing Time:</strong> 120 mins for three sections only; 2h40 for one optional section; 3h20 for both optional sections</li>
            <li><strong>More Time Per Question:</strong> Average increases from ~49s/question to ~55s/question</li>
            <li><strong>Shorter Passages:</strong> English and Reading passages are reduced in length</li>
            <li><strong>Experimental Questions:</strong> Embedded in sections; students answer all without knowing which count</li>
          </ol>
        </div>
      </section>

      {/* CTA SECTION */}
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
