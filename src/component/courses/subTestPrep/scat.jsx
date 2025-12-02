import React from "react";

const ScatTestPrep = () => {
  return (
    <div className="w-full bg-white text-gray-800" id='scat'>
      
      {/* HERO SECTION */}
      <section className="bg-[#0f172a] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            SCAT TEST PREP
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8">
            SCAT Test is one of the most sought-after tests for students. At GGES, we make SCAT test prep a cakewalk
            with expert strategies, updated curriculum, and proven results.
          </p>
          <a
            href="/free-trial"
            className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Book Free Trial Class
          </a>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            All You Need To Know About SCAT
          </h2>
          <p className="text-lg mb-6">
            SCAT is an above-grade-level test. It shows how your child’s score compares with both their own grade 
            and higher grades for which the test was originally designed.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Three Versions of SCAT</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Grades 2–3 → Elementary SCAT (designed for 3–6 graders)</li>
            <li>Grades 4–5 → Intermediate SCAT (designed for 6–9 graders)</li>
            <li>Grades 6+ → Advanced SCAT (designed for 9–12 graders)</li>
          </ul>
        </div>
      </section>

      {/* FORMAT SECTION */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Test Format</h2>

          <p className="text-lg mb-8">
            The SCAT test contains two sections. Each section has 55 questions (5 are experimental and not scored).
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-2xl font-semibold mb-4">Verbal Section</h3>
              <p>
                Tests understanding of words and verbal reasoning through
                multiple-choice analogies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-2xl font-semibold mb-4">Quantitative Section</h3>
              <p>
                Tests mathematical reasoning through
                multiple-choice comparisons between quantities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SCORING SECTION */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Scoring & Levels</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Elementary Level</h3>
              <p>Verbal: 401 – 471</p>
              <p>Quantitative: 412 – 475</p>
            </div>

            <div className="border p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Intermediate Level</h3>
              <p>Verbal: 405 – 482</p>
              <p>Quantitative: 419 – 506</p>
            </div>

            <div className="border p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Advanced Level</h3>
              <p>Verbal: 410 – 494</p>
              <p>Quantitative: 424 – 514</p>
            </div>
          </div>

          <p className="text-lg mt-6">
            Scores are based on the number of correct answers out of 50 scored questions.
          </p>
        </div>
      </section>

      {/* TIPS SECTION */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">SCAT Test Tips</h2>

          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>Don’t panic — this test is designed for older students.</li>
            <li>Relax if stressed. Focus on your breathing.</li>
            <li>Make your best guess and manage your time wisely.</li>
            <li>No negative marking – guessing is okay.</li>
            <li>Use the elimination method for multiple-choice questions.</li>
            <li>Only change answers if you are 100% certain.</li>
            <li>Be confident!</li>
          </ul>
        </div>
      </section>

      {/* REGISTRATION SECTION */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">How To Register</h2>

          <p className="text-lg mb-4">
            Schedule your test with Prometric by:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-lg mb-6">
            <li>Online: www.prometric.com/jhucty</li>
            <li>Phone: 800-688-5796 (8AM – 8PM EST)</li>
            <li>Fee: $60 (US only)</li>
          </ul>

          <p className="text-lg mb-4">
            You must have a 9-digit Authorization Number (from CTY) before booking.
          </p>

          <p className="text-lg">
            Get it from:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Mail registration packet</li>
            <li>Email received from CTY</li>
            <li>MyCTY portal: www.ctyjhu.org/mycty/</li>
          </ul>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#0f172a] py-16 px-4 text-center">
        <div className="max-w-7xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready To Start SCAT Preparation?
          </h2>
          <p className="mb-8 text-lg">
            Enroll now for our FREE trial class and experience the GGES difference.
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

export default ScatTestPrep;
