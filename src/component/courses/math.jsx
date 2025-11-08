import React, { useState } from "react";
import backgroundImage from "../../assets/work-bg.png";
import algebra from "../../assets/algebra.png";
import algebra2 from "../../assets/algebra2.png";
import amcImg from "../../assets/amc.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { TestStructure } from "./subMath/test";
import { TopicPage } from "./subMath/topic";
import { Prep } from "./subMath/prep";
import { Completion } from "./subMath/completion";

const Courses = () => {
  const chapters = [
    {
      num: "01",
      title: "Chapter 1",
      desc: "Basics of Geometry",
      color: "bg-blue-500",
    },
    {
      num: "02",
      title: "Chapter 2",
      desc: "Reasoning and Proofs",
      color: "bg-red-500",
    },
    {
      num: "03",
      title: "Chapter 3",
      desc: "Parallel and Perpendicular Lines",
      color: "bg-purple-500",
    },
    {
      num: "04",
      title: "Chapter 4",
      desc: "Transformations",
      color: "bg-pink-500",
    },
    {
      num: "05",
      title: "Chapter 5",
      desc: "Congruent Triangles",
      color: "bg-indigo-500",
    },
    {
      num: "06",
      title: "Chapter 6",
      desc: "Relationships within Triangles",
      color: "bg-cyan-500",
    },
  ];
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    if (startIndex + itemsPerPage < chapters.length)
      setStartIndex(startIndex + itemsPerPage);
  };

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - itemsPerPage);
  };

  return (
    <>
      <section
        className="relative bg-[#F0F8FF] py-16 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
            At GGES we offer online one to one tutoring for the following K-12
            Math courses and Math test preps:
          </h1>
          <div className="max-w-4xl mx-auto space-y-8 text-lg text-gray-700">
            <p>
              GGES Math tutoring works on math standards focus on learning math
              skills and concepts in the context of solving real-world problems.
              At each grade, students are expected to not only develop an
              understanding of content standards and we fulfill these
              expectations with help of expert tutors.
            </p>
            <p>
              Common Core mathematics asks students to justify why a particular
              mathematical statement is true or where a mathematical rule comes
              from. Mathematical understanding and procedural skills, At GGES,
              we build personalized learning plans for students that are
              tailored to their personality, learning style, and academic needs.
              Our talented tutors are fully versed in the common core
              curriculum, and we are happy that educational instruction is
              evolving to address individual student needs and learning styles.
            </p>
            <p>
              So be it common core or any other Math curriculum, all our tutors
              are fully experienced to impart the best tutoring for all types of
              curriculum. Be it Geometry, Algebra I, Algebra II or junior math
              topics, we are ready to teach all.
            </p>
          </div>
          <div className="mt-12">
            <p className="text-xl font-semibold text-gray-800 mb-4">
              Click here to schedule a Free Trial Class for any subject
            </p>
            <button className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out">
              Start Free Trial{" "}
              <svg
                className="ml-3 -mr-1 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F0F8FF]">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            K-12 TUTORING – ALGEBRA 1 AND ALGEBRA 2
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At GGES, our expert Math tutors are the best when it comes to
            Algebra 1 and Algebra 2. We understand these courses work as a
            foundation for a student’s career. So we don’t leave any stone
            unturned in online tutoring of Algebra 1 and Algebra 2. Why not
            avail a Free Trial Class, and evaluate. To schedule a Free Trial
            Class
          </p>
          <div className="mt-8">
            <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Get Started{" "}
              <svg
                className="ml-2 -mr-0.5 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className="relative bg-[#F0F8FF] rounded-lg shadow-xl p-6 sm:p-8 md:p-10 mb-12"
          style={{
            backgroundImage: `url(${algebra})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 text-white">
            <div className="w-full lg:w-1/2 text-left">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                ALGEBRA 1
              </h3>

              <p className="font-semibold text-base sm:text-lg md:text-xl mb-4 leading-relaxed">
                Algebra 1 is the second math course in high school and will
                guide you through, among other things — exponents, operations of
                polynomials, factoring, quadratic functions and equations,
                exponents, polynomials, radical and rational expressions. It has
                the following topics which we cover:
              </p>

              <ul className="font-semibold text-sm sm:text-base md:text-lg list-disc list-inside space-y-2 pl-2">
                <li>Chapter 1: Solving Linear Equations</li>
                <li>Chapter 2: Graphing and Writing Linear Equations</li>
                <li>Chapter 3: Solving Linear Inequalities</li>
                <li>Chapter 4: Solving Systems of Linear Equations</li>
                <li>Chapter 5: Linear Functions</li>
                <li>Chapter 6: Exponential Equations and Functions</li>
                <li>Chapter 7: Polynomial Functions and Factoring</li>
                <li>Chapter 8: Graphing Quadratic Functions</li>
                <li>Chapter 9: Solving Quadratic Equations</li>
                <li>Chapter 10: Square Root Functions and Geometry</li>
                <li>Chapter 11: Rational Equations and Functions</li>
                <li>Chapter 12: Data Analysis and Displays</li>
              </ul>

              <p className="font-semibold text-base sm:text-lg md:text-xl mt-6 leading-relaxed">
                GGES hopes that you will enjoy studying Algebra 1 online with
                us. To schedule a Free Trial Class!
              </p>

              <div className="mt-6">
                <button className="inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 border border-transparent text-sm sm:text-base md:text-lg font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition">
                  Start Free Trial{" "}
                  <svg
                    className="ml-2 h-4 w-4 sm:h-5 sm:w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative rounded-lg shadow-xl p-6 sm:p-8 md:p-10 overflow-hidden"
          style={{
            backgroundImage: `url(${algebra2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex flex-col lg:flex-row items-center lg:items-end gap-6 sm:gap-8 text-white">
            <div className="hidden lg:block w-1/2"></div>

            <div className="w-full lg:w-1/2 text-left  lg:bg-transparent rounded-lg p-4 sm:p-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                ALGEBRA 2
              </h3>

              <p className="font-semibold text-base sm:text-lg md:text-xl mb-4 leading-relaxed">
                Algebra 2 is the third math course in high school and will guide
                you through among other things — linear equations, inequalities,
                graphs, matrices, polynomials, radical expressions, exponential
                and logarithmic expressions, sequences, series, probability, and
                trigonometry.
              </p>

              <p className="font-semibold text-base sm:text-lg md:text-xl mb-4 leading-relaxed">
                This Algebra 2 math course is divided into 10 chapters and each
                chapter is divided into several lessons:
              </p>

              <ul className="font-semibold text-sm sm:text-base md:text-lg list-disc list-inside space-y-2 pl-2">
                <li>Chapter 1: Linear Functions</li>
                <li>Chapter 2: Quadratic Functions</li>
                <li>Chapter 3: Quadratic Equations and Complex Numbers</li>
                <li>Chapter 4: Polynomial Functions</li>
                <li>Chapter 5: Rational Exponents and Radical Functions</li>
                <li>Chapter 6: Exponential and Logarithmic Functions</li>
                <li>Chapter 7: Rational Functions</li>
                <li>Chapter 8: Sequences and Series</li>
                <li>Chapter 9: Trigonometric Ratios and Functions</li>
                <li>Chapter 10: Probability</li>
                <li>Chapter 11: Data Analysis and Statistics</li>
              </ul>

              <p className="font-semibold text-base sm:text-lg md:text-xl mt-6 leading-relaxed">
                GGES hopes that you will enjoy studying Algebra 2 online with
                us. To schedule a Free Trial Class!
              </p>

              <div className="mt-6">
                <button className="inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 border border-transparent text-sm sm:text-base md:text-lg font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition">
                  Start Free Trial{" "}
                  <svg
                    className="ml-2 h-4 w-4 sm:h-5 sm:w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F0F8FF]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl container mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            K-12 TUTORING – GEOMETRY
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At GGES, simplifying with the geometric terms, geometry formulas, or
            geometric sequence is made easy. Our tutors can help. We have expert
            geometry tutors to help with geometry homework or studying for a
            geometry test. Geometry class can be tough. We make getting geometry
            help easy. Why not avail a Free Trial Class, and evaluate. To
            schedule a Free Trial Class
          </p>
          <p className="my-4 font-semibold text-lg">
            Why not avail a Free Trial Class for online Geometry tutoring. To
            schedule a Free Trial Class
          </p>
          <div className="mt-8">
            <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Get Started{" "}
              <svg
                className="ml-2 -mr-0.5 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative container max-w-7xl mx-auto p-8">
          <div className="relative z-10">
            <h3 className=" text-gray-800 mb-6">
              Geometry Chapters Included in our Geometry tutoring are as
              follows:
            </h3>
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
                {chapters?.map((chapter) => (
                  <div
                    key={chapter.num}
                    className="flex flex-row justify-center gap-2  items-center"
                  >
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-lg ${chapter.color}`}
                    >
                      {chapter.num}
                    </div>
                    <div className="flex flex-col text-left">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {chapter.title}
                      </h4>
                      <p className="text-gray-700">{chapter.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute inset-y-0 left-0 flex items-center">
                <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center">
                <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <p className="text-gray-700 text-center mt-8">
              Our Geometry tutors are experts in their field and know the best
              way to present a tricky subject. With additional guesswork our
              tutors can also provide worksheets and recorded video lessons you
              can use to review what you've learned.
            </p>
            <p className="text-xl font-semibold text-gray-800 mb-4 text-center mt-6">
              Why not avail a Free Trial Class for online Geometry tutoring. To
              schedule a Free Trial Class
            </p>
            <div className="mt-6 text-center">
              <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Start Free Trial{" "}
                <svg
                  className="ml-2 -mr-0.5 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* End of K-12 Tutoring - Geometry section */}

      {/* New section: ALL YOU NEED TO KNOW ABOUT AMC (American Mathematics Competitions) Test */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F0F8FF]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto  mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
            ALL YOU NEED TO KNOW ABOUT AMC (American Mathematics Competitions)
            Test
          </h2>
          <p className="text-lg text-gray-600 mx-auto">
            At GGES, we have expert AMC tutors who are well qualified and
            experienced in AMC test online tutoring.
          </p>
          <p className="text-xl font-semibold text-gray-800 mb-4 text-center mt-6">
            So why wait? To avail a Free Trial Class for AMC Test Prep Online
            Tutoring
          </p>
          <div className="mt-8 text-center">
            <button className="inline-flex  items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Start Free Trial{" "}
              <svg
                className="ml-2 -mr-0.5 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* About AMC Preparations section */}
        <div className="relative max-w-7xl mx-auto  p-8 mt-12 overflow-hidden">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            ABOUT AMC TEST
          </h3>
          <p className="text-gray-700  mb-10  mx-auto">
            The AMC contests are designed to engage students and teachers in
            effective mathematical problem-solving that is consistent with
            curricular goals, and to promote excitement in learning. We motivate
            students to excel and further develop their interest in mathematics.
            It also recognizes outstanding students, schools, and teachers for
            succeeding in mathematics in postsecondary education and careers.
            We're truly preparing today's students to solve tomorrow's
            challenges.
          </p>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mt-12">
            <div className="lg:w-1/2 text-left">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                Who can participate in the MAA AMC?
              </h4>
              <p className="text-gray-700 mb-6">
                The MAA AMC proudly engages students with a dedicated group of
                participants, each crucial to the success of our mathematical
                community:
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 flex items-center justify-center  text-black font-bold text-lg">
                    01
                  </div>
                  <div>
                    <p className="text-gray-700">
                      Students: Calling all middle and high school students
                      looking to engage in an exciting problem-solving
                      experience! Challenge your peers and represent your school
                      by participating in the AMC 8, the AMC 10, and/or the AMC
                      12, depending on your grade level.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 flex items-center justify-center  text-black font-bold text-lg">
                    02
                  </div>
                  <div>
                    <p className="text-gray-700">
                      Educators: We seek teachers at accredited middle/high
                      schools, colleges/universities, math circles, and learning
                      centers to serve as competition managers administering the
                      AMC 8, AMC 10, and AMC 12 to interested students. A
                      competition manager enrolls students, administers the
                      contest, collects the solutions, and shares scores and
                      awards with participants after the competition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              {/* AMC student image */}
              <img
                src={amcImg}
                alt="Student studying for AMC"
                className="rounded-lg max-w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <Completion />
        <Prep />

        <TestStructure />

        <div className="container mx-auto max-w-7xl mx-auto">
          <div className="text-4xl font-semibold text-center my-4">
            ABOUT COMMON CORE – SCIENCE
          </div>
          <p className="my-2 ">
            GGES tutors science for all school grades. Our tutors are fully
            knowledgeable and well updated on the latest curriculum of science
            in US schools. So we at GGES provide the best science tutoring for
            all grades. Throughout middle school and high school, students will
            be introduced to a variety of science courses including earth
            science, biology, chemistry, anatomy & physiology, physics, and
            more. Keeping up with all this information can be daunting, however,
            the assistance of an experienced science tutor can help transform
            the subject into one that is approachable and fun. At GGES, we are
            committed to providing the support every student needs, in order to
            help them succeed in their science classes.
          </p>
          <div className="text-center font-bold my-2">
            So why wait? To avail a Free Trial Class for Science Online Tutoring
          </div>
          <div className="text-center my-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 ">
              Start Free Trial
            </button>
          </div>
        </div>
        <TopicPage />
      </section>
    </>
  );
};

export default Courses;
