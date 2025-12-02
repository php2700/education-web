import React from "react";

const AmcTestPrep = () => {
  return (
    <div className="w-full bg-white text-gray-800" id='amc'>
      
      {/* HERO SECTION */}
      <section className="bg-[#0f172a] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AMC TEST PREP
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8">
            At GGES, we have expert AMC tutors who are well-qualified and experienced in AMC Test online tutoring.
          </p>
          <a
            href="/free-trial"
            className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Book Free Trial Class
          </a>
        </div>
      </section>

      {/* ABOUT AMC */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About AMC Test</h2>
          <p className="text-lg mb-6">
            The AMC contests engage students in effective mathematical problem solving consistent with curricular goals,
            preparing students for success in mathematics in postsecondary education and careers. It prepares students
            to solve tomorrow's mathematical challenges.
          </p>
        </div>
      </section>

      {/* PARTICIPANTS */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Who Can Participate?</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg">
            <li>
              <strong>Students:</strong> Middle and high school students can participate in AMC 8, AMC 10, or AMC 12
              depending on their grade.
            </li>
            <li>
              <strong>Educators:</strong> Teachers, math circles, and learning centers can act as competition managers
              to administer the AMC exams.
            </li>
          </ul>
        </div>
      </section>

      {/* AMC COMPETITIONS */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Different AMC Competitions</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-2xl font-semibold mb-4">AMC 8</h3>
              <p className="mb-2">
                25-question, 40-minute competition for grades 8 and below focusing on middle school math topics.
              </p>
              <p className="mb-2"><strong>When:</strong> January annually</p>
              <p className="mb-2"><strong>Who:</strong> Middle school students under 15.5 years old</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-2xl font-semibold mb-4">AMC 10</h3>
              <p className="mb-2">
                25-question, 75-minute multiple-choice for grades 10 and below. Covers algebra, geometry, number theory, probability.
              </p>
              <p className="mb-2"><strong>When:</strong> November annually</p>
              <p className="mb-2"><strong>Who:</strong> High school students under 17.5 years old</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-2xl font-semibold mb-4">AMC 12</h3>
              <p className="mb-2">
                25-question, 75-minute multiple-choice for grades 12 and below. Covers full high school math curriculum (excluding calculus).
              </p>
              <p className="mb-2"><strong>When:</strong> November annually</p>
              <p className="mb-2"><strong>Who:</strong> High school students under 19.5 years old</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY TAKE AMC */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Why Take AMC?</h2>
          <p className="text-lg mb-4">
            AMC 10/12 aims to spark interest in mathematics and develop talent through challenging timed multiple-choice problems.
          </p>
          <p className="text-lg mb-4">
            The contests are designed for students of all levels, from average learners to the very best, helping identify exceptional talent.
          </p>
          <p className="text-lg">
            AMC is the first step toward prestigious competitions like the American Invitational Examination and the International Mathematical Olympiad.
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#0f172a] py-16 px-4 text-center">
        <div className="max-w-7xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready To Start AMC Preparation?
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

export default AmcTestPrep;
