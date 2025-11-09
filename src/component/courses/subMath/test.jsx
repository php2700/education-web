import React from "react";
import {
  BookOpen,
  Users,
  Award,
  Calculator,
  Clock,
  FileText,
  Phone,
  PenTool,
} from "lucide-react";
import featureImg from "../../../assets/feature.png";
import generalImg from "../../../assets/general.png";
import scoringImg from "../../../assets/scoring.png";
import testBgImg from "../../../assets/test-bg.png";

export const TestStructure = () => {
  return (
    <div
      className="relative bg-[#F0F8FF] py-16 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${testBgImg})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 ">
        <section>
          {/* Left: Text */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-center my-2 text-gray-800">
              MATH KANGAROO TEST PREP
            </h2>
            <p className="text-md font-semibold text-gray-500 leading-relaxed">
              Mathematical Kangaroo is an international mathematical competition
              with more than 50 countries that take an active part in it. There
              are twelve levels of participation from grade 1 to grade 12. We
              take pride in organizing this event. We have specialized
              mathematics tutors who prepare students for this competition. We
              provide past year papers, mock tests, and topic-wise prep .
            </p>
            <p className="text-xl text-center font-bold text-gray-700 leading-relaxed mt-4">
              So why wait? To avail a Free Trial Class for Math Kangaroo Test
              Prep Online Tutoring
            </p>
          </div>

          <div className="text-center my-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 ">
              Start Free Trial
            </button>
          </div>
        </section>
 

      {/* Header */}
      <div className=" py-4">
        <h1 className="text-3xl font-bold text-center">TEST STRUCTURE</h1>
        <p className="my-4 font-semibold text-[16px] text-gray-500">
          The competition is executed as a 75 minutes multiple-choice test,
          consisting of 30 questions (up to 4th grade, only 24 questions)
          equally divided among the categories of 3-point-, 4- point- and
          5-point-questions. 5 solutions are given, exactly one of them being
          correct.
        </p>
        <p className="my-4 font-semibold text-[16px] text-gray-500">
          One is given the respective points for choosing the correct answer, 0
          points for not answering, and a quarter of the respective points are
          taken off for choosing a wrong answer.
        </p>
        <p className="my-4 font-semibold text-[16px] text-gray-500">
          Each participant is given 30 base points at the beginning (up to 4th
          grade, 24) so that the minimum number of points at the end is 0. The
          maximum number is 150 (up to 4th grade, 120) points.
        </p>
      </div>

      <main className=" py-8 space-y-12">
        {/* Features Section */}
        <section >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ul className="space-y-4 text-gray-700">
              {[
                "Math Kangaroo Competition is an international, once a year event, always on the third Thursday in March.",
                "Any student in grades 1 through 12 qualifies if he or she can work independently: read and answer a multiple choice test.",
                "Each student receives a t-shirt, a certificate of participation, and a gift in addition to a competition booklet and a pencil on the test day.",
                "Pictures are taken and placed on our web pages and in other media.",
                "The competition questions and appropriate for the students age are interesting and challenging.",
                "Questions are chosen by the International Math Kangaroo Committee.",
                "In May students who earned at least ten top scores at each level of participation are awarded with gold, silver, bronze medals and with gifts. International Summer Camp in Europe, Mathematics Games in UK, and college grants are among the top awards. Also, in each participating state 1st, 2nd, 3rd in the state are recognized at each level. More awards may be granted in states where there are larger numbers.",
                "Wolfram Research is offering Mathematics license for all 8th-grade and up participants after they take an on-demand webcast on getting started with Mathematica — annually since 2008.",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="font-bold">{idx + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <img
                src={featureImg}
                alt="Student studying"
                className=" w-full"
              />
            </div>
          </div>
        </section>

        {/* General Rules Section */}
        <section>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img src={generalImg} alt="Students reading" className="w-full" />
            </div>
            <div className="space-y-4 text-gray-700">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                General Rules
              </h2>
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  1. Levels correspond with school grades:
                </h3>
                <ul className="list-disc list-inside ml-4 space-y-1 text-sm">
                  <li>1st Grade → Level 1</li>
                  <li>2nd Grade → Level 2</li>
                  <li>3rd Grade → Level 3</li>
                  <li>12th Grade (Senior Class in High School) → Level 12</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  2. 75 Minutes multiple choice test
                </h3>
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  3. 24 Questions for students in grades 1, 2, 3 and 4
                </h3>
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  4. 30 Questions for students in grades 5 and up
                </h3>
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  5. Each participant receives a competition booklet, an answer
                  form, scratch paper and pencil.
                </h3>
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  6. No aids other than writing instruments and paper will be
                  allowed. In particular, no calculators will be allowed on any
                  part of the competition, and any cell phones must be turned
                  off.
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            Scoring
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ul className="space-y-4 text-gray-700">
              {[
                "Each question has point value: 1/3 of questions are 3 points each, 1/3 – 4 points each, 1/3 – 5 points each. The sum of earned points is the student’s result.",
                "The maximum number of points possible is 96. The maximum score of points earned by a student in the competition. Each question has its point value displayed on the questions paper. A student earns the points when he/she marks answers properly. There are no negative markings or fee.",
                "The students are compared with other students who participate on National List on places 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 – at each level nationwide.",
                "The maximum possible score is 96 points at levels: 1, 2, 3, 4 and 120 points at levels 5, 6, 7, 8, 9, 10, 11, 12.",
                "If several students' score is 100% or 96 points at level 4, for example, they all receive the rank of national 1st place. If the greatest number of points is not 100% at some level of participation, that number qualifies for the first place, at this time. That may change and at final place maybe awarded. The second highest score is the student who earned second highest.",
                "Percentile is the percent of students whose scores are lower than your child’s score at that level of participation.",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className=" font-bold">{idx + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center">
              <img
                src={scoringImg}
                alt="Student with books"
                className=" w-full "
              />
            </div>
          </div>
        </section>
        <div className="mt-4 text-[16px] font-semibold text-gray-600">
          We have the best content and specialized tutors available for Math
          Kangaroo.
        </div>
      </main>
           </div>
    </div>
  );
};
