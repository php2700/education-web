import React from "react";
import {
  BookOpen,
  Users,
  FileText,
  CheckCircle,
  Target,
  Lightbulb,
  PenTool,
} from "lucide-react";
import backgroundImage from "../../../assets/about-bg.png";

export const AboutInfoPage = () => {
  return (
    <div
      className="bg-[#F0F8FF] py-16 px-6 sm:px-10 lg:px-12 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-3xl font-extrabold text-center  flex items-center justify-center gap-3">
          ALL YOU NEED TO KNOW ABOUT ELA
        </h1>
      </div>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Intro Paragraph */}

        <p className="text-sm text-gray-800 leading-relaxed ">
          At GOES, ELA is tutored by expert teachers who have tons of experience
          in ELA test prep tutoring. As a language it becomes important to
          provide a strong base to students through ELA, so we are determined to
          do so.
        </p>

        {/* Test Title */}
        <div className="text-start">
          <h2 className="text-3xl font-bold text-gray-900">
            (New York State English Language Arts (ELA) Test)
          </h2>
        </div>

        {/* Who Takes This Test? */}
        <section className=" py-4 ">
          <h3 className="text-2xl font-bold mb-6  text-center ">
            Who takes this test?
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            Students in grades 3–10 take the State English Language Arts (ELA)
            test each spring. These assessments measure the Common Core Learning
            Standards (CCLS).
          </p>
          <p className="text-gray-500 font-semibold leading-relaxed">
            An ELA (English Language Arts) test is a standardized assessment
            that measures a student's proficiency in reading, writing,
            listening, speaking, and language skills, often aligned with
            academic standards like the Common Core. These tests typically
            involve reading passages and answering multiple-choice,
            short-answer, or essay questions to evaluate comprehension,
            analytical thinking, and the ability to construct wellorganized
            written responses. ELA tests help identify a student's strengths and
            weaknesses in literacy, providing crucial data for guiding
            instruction and evaluating college and career readiness.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-bold  mb-4 text-center gap-2">
            What is on the test?
          </h3>
          <h4 className="text-xl font-semibold  mb-4 flex items-center gap-2">
            Core components and formats
          </h4>
          <div className="bg-[#F0F8FF] rounded-2xl  p-8 md:p-12 relative ">
            <div className="relative z-10 max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
                QUESTION TYPES:
              </h3>

              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Left: Icon + Text */}
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                    Tests feature a mix of selected-response (multiple-choice),{" "}
                    short-answer, and long-form essay prompts that require
                    students to analyze texts and use evidence.
                  </p>
                </div>

                {/* Right: Student Image */}
                {/* <div className="flex-1 flex justify-center">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1497638578946-5d31c97a1b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Student holding books"
                      className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-2xl shadow-lg border-4 border-white"
                    />
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
                  </div>
                </div> */}
              </div>

              {/* Decorative Progress Bar */}
              <div className="mt-10 flex justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-200 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center font-bold my-2">
            So why wait? To avail a Free Trial Class for Science Online Tutoring
          </div>
        </section>
      </main>
    </div>
  );
};
