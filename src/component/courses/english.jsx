import { BiBookContent, BiTargetLock } from "react-icons/bi";
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaLanguage,
  FaPenNib,
} from "react-icons/fa";
import studentImg from "../../assets/student.png";
import { AboutInfoPage } from "./subEng/about";
import { TestPage } from "./subEng/test";
import { Measure } from "./subEng/measure";
import { Structure } from "./subEng/structure";
import literature from "../../assets/literature.png";
import pen from "../../assets/pen.png";
import setting from "../../assets/settings.png";
import resume from "../../assets/resume.png";
import certificate from "../../assets/certificate.png";
import language from "../../assets/language.png";
import speak from "../../assets/speak.png";
import backgroundImage from "../../assets/work-bg.png";

export const EnglishCourse = () => {
  const coverData = [
    {
      icon: certificate,
      title: "Anchor Standards",
      color: "bg-[#D7909E]",
    },
    {
      icon: literature,
      title: "Literature",
      color: "bg-[#00BBFF]",
    },
    {
      icon: resume,
      title: "Informational Text",
      color: "bg-[#3174F1]",
    },
    {
      icon: setting,
      title: "Foundational Skills",
      color: "bg-[#A34EF4]",
    },
    {
      icon: pen,
      title: "Writing",
      color: "bg-[#E12E2E]",
    },
    {
      icon: speak,
      title: "Speaking & Listening",
      color: "bg-[#554FE8]",
    },
    {
      icon: language,
      title: "Speaking & Listening",
      color: "bg-[#E63C8D]",
    },
  ];
  return (
    <section>
      {/* <div
        className="bg-[#F0F8FF] py-16 px-6 sm:px-10 lg:px-12 relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 px-10 py-10 gap-10 items-center ">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-snug">
              COMMON CORE – ENGLISH LANGUAGE AND ARTS
            </h2>

            <p className="font-semibold text-[16px] text-gray-500  mb-4 leading-relaxed">
              At GGES, we have the best tutors for English Language and Arts.
              This acts as the base for all student’s language skills, so we
              leave no stone unturned to impart the best knowledge on this
              subject matter. Students love our approach because of a number of
              reasons:
            </p>

            <p className="text-gray-900 text-[16px] font-semibold mt-4">
              So why wait? To avail a Free Trial Class for English Online
              Tutoring
            </p>

            <div className="text-center my-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 ">
                Start Free Trial
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-sky-100 text-gray-800 p-4 rounded-xl text-sm font-medium shadow-sm">
              Clear, understandable, and consistent approach by the tutor.
            </div>

            <div className="bg-purple-100 text-gray-800 p-4 rounded-xl text-sm font-medium shadow-sm">
              Research- and evidence-based tutoring.
            </div>

            <div className="row-span-2 flex items-center justify-center">
              <img
                src={studentImg}
                alt="Students"
                className="rounded-xl w-full h-full object-contain"
              />
            </div>

            <div className="bg-pink-100 text-gray-800 p-4 rounded-xl text-sm font-medium shadow-sm">
              Tutoring is based on rigorous content and application of knowledge
              which comes by experience.
            </div>

            <div className="bg-green-100 text-gray-800 p-4 rounded-xl text-sm font-medium shadow-sm">
              Built upon the strengths and lessons of current state standards.
            </div>

            <div className="bg-cyan-100 text-gray-800 p-4 rounded-xl text-sm font-medium shadow-sm">
              Aligned approach with college and career expectations.
            </div>
          </div>
        </div>
      </div> */}

      <div
        className="bg-[#F0F8FF] py-16 px-6 sm:px-10 lg:px-12 relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left px-4 sm:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
              COMMON CORE – ENGLISH LANGUAGE AND ARTS
            </h2>

            <p className="font-medium text-[15px] sm:text-[16px] text-gray-600 mb-4 leading-relaxed">
              At GGES, we have the best tutors for English Language and Arts.
              This acts as the base for all student’s language skills, so we
              leave no stone unturned to impart the best knowledge on this
              subject matter. Students love our approach because of a number of
              reasons:
            </p>

            <p className="text-gray-900 text-[15px] sm:text-[16px] font-semibold mt-4">
              So why wait? To avail a Free Trial Class for English Online
              Tutoring
            </p>

            <div className="text-center lg:text-left my-6">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300">
                Start Free Trial
              </button>
            </div>
          </div>

          {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4 px-4">
            <div className="bg-sky-100 text-gray-800 p-4 rounded-xl text-sm font-medium shadow-sm">
              Clear, understandable, and consistent approach by the tutor.
            </div>

            <div className="bg-purple-100 text-gray-800 p-4 rounded-xl text-sm font-medium shadow-sm">
              Research- and evidence-based tutoring.
            </div>

            <div className="col-span-2 sm:col-span-3 lg:col-span-1 w-full  row-span-2 flex items-center justify-center">
              <img
                src={studentImg}
                alt="Students"
                className="rounded-xl w-full max-h-[250px]  object-contain"
              />
            </div>

            <div className="bg-pink-100 text-gray-800 p-4 rounded-xl text-sm font-medium shadow-sm">
              Tutoring is based on rigorous content and application of knowledge
              which comes by experience.
            </div>

            <div className="bg-green-100 text-gray-800 p-4 rounded-xl text-sm font-medium shadow-sm">
              Built upon the strengths and lessons of current state standards.
            </div>

            <div className="bg-cyan-100 text-gray-800 p-4 rounded-xl text-sm font-medium shadow-sm">
              Aligned approach with college and career expectations.
            </div>
          </div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-8 lg:px-12 items-stretch">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              <div className="bg-sky-100 text-gray-800 p-5 rounded-xl text-sm sm:text-base font-medium shadow-sm flex-1">
                Clear, understandable, and consistent approach by the tutor.
              </div>

              <div className="flex items-center justify-center flex-1 bg-white rounded-xl shadow-sm p-4">
                <img
                  src={studentImg}
                  alt="Students"
                  className="rounded-xl w-full max-h-[250px] object-cover"
                />
              </div>
              <div className="bg-cyan-100 text-gray-800 p-5 rounded-xl text-sm sm:text-base font-medium shadow-sm flex-1">
                Aligned approach with college and career expectations.
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
              <div className="bg-purple-100 text-gray-800 p-5 rounded-xl text-sm sm:text-base font-medium shadow-sm flex-1">
                Research- and evidence-based tutoring.
              </div>
              <div className="bg-pink-100 text-gray-800 p-5 rounded-xl text-sm sm:text-base font-medium shadow-sm flex-1">
                Tutoring is based on rigorous content and application of
                knowledge which comes by experience.
              </div>
              <div className="bg-green-100 text-gray-800 p-5 rounded-xl text-sm sm:text-base font-medium shadow-sm flex-1">
                Built upon the strengths and lessons of current state standards.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F0F8FF]">
        <div className="container mx-auto p-10   ">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center justify-center gap-2">
              ABOUT COMMON CORE – ELA
            </h2>
            <p className=" font-semibold text-[16px] text-gray-500  mx-auto text-justify leading-relaxed">
              Because students must learn to read, write, speak, listen, and use
              language effectively in a variety of content areas, the standards
              promote literacy skills and concepts required for college and
              career readiness in multiple disciplines. The College and Career
              Readiness Anchor Standards form the backbone of the ELA/literacy
              standards by articulating core knowledge and skills, while
              grade-specific standards provide additional specificity.
            </p>
            <p className="font-semibold text-[16px] text-gray-500   mx-auto mt-6 text-justify leading-relaxed">
              The skills and knowledge captured in the ELA/literacy standards
              are designed to prepare students for life outside the classroom.
              They include critical–thinking skills and the ability to closely
              and attentively read texts in a way that helps them understand and
              enjoy complex works of literature. Students learn to use reasoning
              and evidence collection skills essential for success in college,
              career, and life.
            </p>
          </div>

          {/* WHAT WE COVER */}

          {/* GRID SECTION */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
            <div className="mb-12 col-span-2 sm:col-span-3 md:col-span-3">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center  gap-2">
                WHAT WE COVER?
              </h3>
              <p className="text-gray-600  mx-auto text-sm sm:text-base">
                At GGES, we cover Reading Comprehension, Critical Reading,
                Analogies, Sentence Correction, Essay Writing, Creative Writing,
                Poetry, Vocabulary Building, and Grammar.
              </p>
            </div>

            {/* Grid Items */}
            {coverData?.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center gap-2 rounded-2xl shadow-lg border border-gray-300 p-4 bg-white transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className={`text-3xl p-3 rounded-full ${item.color}`}>
                  <img src={item.icon} />
                </div>
                <p className="font-medium text-md sm:text-lg">{item.title}</p>
              </div>
            ))}
          </div>

          {/* CTA BUTTON */}
          <div className="text-center mt-10">
            <div className="text-center font-bold my-2">
              So why wait? To avail a Free Trial Class for Science Online
              Tutoring
            </div>
          </div>
        </div>
      </div>
      <AboutInfoPage />
      <TestPage />
      <Measure />
      <Structure />
    </section>
  );
};
