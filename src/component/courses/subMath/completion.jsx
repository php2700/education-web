import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const Completion = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <div className="text-center flex justify-between mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold flex items-center justify-center gap-2">
          What are the different MAA AMC competitions?
        </h2>

        <div className=" flex gap-3">
          <button className="bg-white border border-gray-300 shadow-sm rounded-full p-2 hover:bg-blue-50 transition">
            <FaArrowLeft className="text-blue-600" />
          </button>
          <button className="bg-white border border-gray-300 shadow-sm rounded-full p-2 hover:bg-blue-50 transition">
            <FaArrowRight className="text-blue-600" />
          </button>
        </div>
      </div>

      {/* Main Card */}
      <div className="relative max-w-7xl mx-auto bg-[#D7E9FF] shadow-md rounded-2xl p-6 sm:p-10 text-gray-700 border border-blue-100">
        <h3 className="text-xl sm:text-2xl font-bold  mb-3">AMC 8</h3>

        <p className="mb-4 text-gray-600 text-[16px] font-semibold leading-relaxed">
          The AMC 8 is a great way to introduce younger students to mathematical
          problem-solving beyond the standard school curriculum. Students who
          enjoy the AMC 8 may want to continue with the AMC 10 and AMC 12 in
          later years.
        </p>

        <p className="text-sm sm:text-base text-gray-700 mb-2">
          <span className="font-semibold text-gray-800">Description:</span> The
          AMC 8 is a 25-question, 40-minute competition designed for students in
          grade 8 and below. The competition focuses on middle school
          mathematics topics, including counting and probability, estimation,
          proportional reasoning, elementary geometry (including the Pythagorean
          Theorem), spatial visualization, and interpreting graphs and tables.
          Some of the later questions may touch on beginning algebra topics,
          such as linear or quadratic functions and coordinate geometry.
        </p>

        <p className="text-sm sm:text-base text-gray-700 mb-2">
          <span className="font-semibold text-gray-800">For:</span> Middle
          school students in grades 8 and below, with a maximum age of under
          14.5 years on the day of the competition.
        </p>

        <p className="text-sm sm:text-base text-gray-700">
          <span className="font-semibold text-gray-800">When:</span> Annually in
          January over the course of a week. Students may only take the AMC 8
          once each year.
        </p>
      </div>
      <div className="flex justify-center items-center gap-2 mt-8">
        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};
