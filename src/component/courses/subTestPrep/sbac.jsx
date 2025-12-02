import React from "react";

const SBACPrep = () => {
  return (
    <div className="w-full bg-white text-gray-800" id='sbac'>

      {/* HERO SECTION */}
      <section className="bg-[#0f172a] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            SBAC TEST PREP
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8">
            Our expert tutors provide the best online SBAC tutoring. We tailor pedagogy to each student’s needs, track progress with periodic assessments, and provide high-quality materials and support.
          </p>
          <a
            href="/free-trial"
            className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Book Free Trial Class
          </a>
        </div>
      </section>

      {/* ABOUT SBAC */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About SBAC</h2>
          <p className="text-lg mb-4">
            The Smarter Balanced Assessment Consortium (SBAC) provides Common Core-aligned tests, including computer-adaptive tests and performance tasks, to assess students in grades 3–8 and 11. SBAC evaluates English Language Arts (ELA) and Mathematics to measure college and career readiness.
          </p>
          <p className="text-lg mb-4">
            Member states include California, Connecticut, Delaware, Hawaii, Idaho, Maine, Michigan, Missouri, Montana, Nevada, New Hampshire, North Dakota, Oregon, South Dakota, Vermont, Washington, West Virginia, and Wisconsin, with affiliate members Iowa, North Carolina, and Wyoming.
          </p>
        </div>
      </section>

      {/* ASSESSMENT DETAILS */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">SBAC Assessment Details</h2>
          <ul className="list-disc pl-5 space-y-3 text-lg">
            <li><strong>Grades Assessed:</strong> 3–8 and 11</li>
            <li><strong>Content Areas:</strong> English Language Arts (ELA) and Mathematics</li>
            <li><strong>Assessment Format:</strong> Computer-Adaptive Test (CAT) and Performance Task (PT)</li>
            <li><strong>Testing Time:</strong> Approximately 4 hours per assessment; combined ELA and Math around 7 hours</li>
            <li><strong>Mode of Testing:</strong> CAT adjusts difficulty based on student responses</li>
          </ul>
        </div>
      </section>

      {/* ACCESSIBILITY */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Accessibility Resources</h2>
          <ul className="list-disc pl-5 space-y-3 text-lg">
            <li>Universal tools: digital notepad, scratch paper, accessible calculators</li>
            <li>Designated supports: translated glossary for students with identified needs</li>
            <li>Accommodations for documented needs: Braille, closed captioning, and more via IEP or 504 plan</li>
            <li>ISAAP tool supports educators in selecting resources matching student access needs</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f172a] py-16 px-4 text-center">
        <div className="max-w-7xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your SBAC Prep Today!
          </h2>
          <p className="mb-8 text-lg">
            Take a Free Trial Online Tutoring class for SBAC Test Prep and give your child the edge in academic readiness.
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

export default SBACPrep;
