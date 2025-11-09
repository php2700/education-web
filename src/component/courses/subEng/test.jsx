import React from "react";
import {
  Book,
  Pencil,
  CheckSquare,
  Globe,
  FileText,
  Laptop,
} from "lucide-react";

export const TestPage = () => {
  return (
    <div className="bg-[#F0F8FF]">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
            ALL ABOUT ISEE TEST
          </h1>
        </div>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            As the premier provider of admission assessments for independent
            schools, the ISEE is accepted by over 1,200 independent schools
            around the world. Available in both online and paper modalities and
            in both open and closed (invitation only) administrations, the ISEE
            is the most advanced tool available to find your future students.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            The ISEE test is the Independent School Entrance Examination, an
            admissions test used by private schools for grades 2–12. It assesses
            a student’s academic skills and consists of five sections: Verbal
            Reasoning, Quantitative Reasoning, Reading Comprehension,
            Mathematics Achievement, and an unscored essay . Different levels of
            the test are offered for different grade levels: Primary (2–4),
            Lower (5–6), Middle (7–8), and Upper (9–12) .
          </p>

          {/* Purpose of the ISEE */}
          <section className="my-4">
            <h2 className="text-3xl font-semibold text-gray-900 mb-10 ">
              Purpose of the ISEE
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  number: "01",
                  icon: <Globe className="w-6 h-6" />,
                  title:
                    "Used by private and some magnet schools in the U.S. and internationally to evaluate applicants.",
                },
                {
                  number: "02",
                  icon: <CheckSquare className="w-6 h-6" />,
                  title:
                    "Provides a standardized measure for admissions committees to compare students from different schools.",
                },
                {
                  number: "03",
                  icon: <FileText className="w-6 h-6" />,
                  title:
                    "The results help predict a student’s potential for academic success at their school.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center   transform hover:scale-105 transition duration-300"
                >
                  <div className="text-2xl text-left font-bold">
                    {item.number}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item.title}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Test Structure and Levels */}
          <section>
            <h2 className="text-3xl font-semibold text-gray-900 mb-10">
              Test structure and levels
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Four Levels */}
              <div className="bg-white rounded-2xl shadow-md p-6 border border-blue-100">
                <h3 className="text-xl font-bold  mb-3">Four levels:</h3>
                <p className="text-gray-700">
                  Primary, Lower, Middle, and Upper, based on the grade a
                  student is applying for.
                </p>
              </div>

              {/* Five Sections */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-md p-6 border-2 border-indigo-200">
                <h3 className="text-xl font-bold  mb-3">Five sections:</h3>
                <p className="text-gray-700">
                  Verbal Reasoning, Quantitative Reasoning, Reading
                  Comprehension, Mathematics Achievement, an Essay
                </p>
              </div>

              {/* Essay */}
              <div className="bg-white rounded-2xl shadow-md p-6 border border-purple-100">
                <h3 className="text-xl font-bold mb-3">Essay:</h3>
                <p className="text-gray-700">
                  The essay is unscored but is sent to the schools along with
                  the student’s score report.
                </p>
              </div>

              {/* Online or Paper */}
              <div className="bg-white rounded-2xl shadow-md p-6 border border-teal-100">
                <h3 className="text-xl font-bold  mb-3 flex items-center gap-2">
                  Online or paper format:
                </h3>
                <p className="text-gray-700">
                  The test can be taken online at home or in a traditional
                  paper-based format.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
