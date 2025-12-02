import React from "react";
import { useNavigate } from "react-router-dom";

const SHSAT = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50  py-14 px-4 md:px-20" id='shsat'>
       <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">
        SHSAT Test Prep
      </h1>

      {/* Intro Section */}
      <div className="bg-white p-8 rounded-2xl shadow-md mb-10">
        <p className="text-gray-700 leading-7 mb-4">
          At <strong>GGES</strong>, our SHSAT online tutoring programs are
          research-based and specifically designed to help students score
          higher on the SHSAT test. For SHSAT Test prep we focus on teaching
          students effective strategies while also reviewing the core content
          on the test.
        </p>

        <p className="text-gray-700 leading-7 mb-4">
          For SHSAT prep, we emphasize maximizing a student’s available study
          time with the right strategies and methods — not laboring on rote
          memorization. We understand that a high SHSAT score can change the
          trajectory of a student’s education.
        </p>

        <p className="text-gray-700 leading-7 mb-6">
          We are dedicated to helping every student achieve their goal — we
          succeed when our student succeeds.
        </p>

        <button
          onClick={() => navigate("/free-trial")}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Click Here for Free Trial Class
        </button>
      </div>

      {/* About SHSAT */}
      <div className="bg-white p-8 rounded-2xl shadow-md mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">
          All About SHSAT
        </h2>

        <p className="text-gray-700 leading-7 mb-4">
          The <strong>Specialized High Schools Admissions Test (SHSAT)</strong> is
          an exam that 8th and 9th graders take for admission to Specialized
          High Schools in New York City. For eight out of nine of these schools,
          your performance on the SHSAT is the only admission factor.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2 text-blue-700">
          Where do you take the SHSAT?
        </h3>
        <p className="text-gray-700 leading-7">
          The test is administered at students’ home schools on specific school
          days or at testing sites on pre-determined weekends.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2 text-blue-700">
          Digital format update
        </h3>
        <p className="text-gray-700 leading-7">
          Beginning with fall 2025, the SHSAT will be administered digitally,
          except for students who need accommodations. From fall 2026, the
          SHSAT will become a computer-adaptive test (CAT) that adjusts
          difficulty based on student performance.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2 text-blue-700">
          When do you take the SHSAT?
        </h3>
        <p className="text-gray-700 leading-7">
          SHSAT test dates are usually in late October for school day testing,
          mid-November for 8th graders, and early December for 9th graders.
        </p>
      </div>

      {/* SHSAT Structure */}
      <div className="bg-white p-8 rounded-2xl shadow-md mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-blue-800">
          SHSAT Test Structure
        </h2>

        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>2 Sections: English Language Arts (ELA) & Math</li>
          <li>57 questions in each section</li>
          <li>Total duration: 3 hours (180 minutes)</li>
          <li>Only score from these sections is used for admission</li>
        </ul>

        <div className="mt-6">
          <a
            href="https://www.princetonreview.com/k12/shsat-format?ceid=article-about-shsat"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Refer official SHSAT Format
          </a>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-900 text-white p-10 rounded-2xl text-center">
        <h2 className="text-2xl font-bold mb-4">
          Get started with GGES SHSAT Test Prep
        </h2>
        <p className="mb-6">
          Our expert tutors and strategic plan help you score higher and
          secure admission to top specialized high schools.
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

export default SHSAT;
