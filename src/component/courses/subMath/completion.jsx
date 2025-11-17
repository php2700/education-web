import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import aboutImage from "../../../assets/about-bg-2.png";
import amcImg from "../../../assets/amc.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const Completion = () => {
  const [completionData, setCompletionData] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const [completionRes] = await Promise.all([
        axios.get(`${import.meta.env.VITE_APP_URL}api/user/competition`),
      ]);

      setCompletionData(completionRes?.data?.data);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong",
        { position: "top-right" }
      );
    }
  };

  useEffect(() => {
    if (!completionData?.competition) return;

    const total = completionData.competition.length;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000);

    return () => clearInterval(timer);
  }, [completionData]);
  return (
    <div>
      <div
        className="relative bg-[#F0F8FF] py-16 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url(${aboutImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className="relative container mx-auto  p-8 mt-12 overflow-hidden">
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
      </div>
      <div className="bg-[#F0F8FF]">
        <div className="container mx-auto ">
          <div className="text-center flex-col md:flex-row bg-[#F0F8FF]  flex justify-between mb-10">
            <h2 className="text-2xl sm:text-3xl font-semibold flex items-center justify-center gap-2">
              What are the different MAA AMC competitions?
            </h2>

            <div className=" flex gap-3 justify-between px-2">
              <button className="bg-white border border-gray-300 shadow-sm rounded-full p-2 hover:bg-blue-50 transition">
                <FaArrowLeft className="text-blue-600" />
              </button>
              <button className="bg-white border border-gray-300 shadow-sm rounded-full p-2 hover:bg-blue-50 transition">
                <FaArrowRight className="text-blue-600" />
              </button>
            </div>
          </div>

          <div className="relative  mx-auto bg-[#D7E9FF] shadow-md rounded-2xl p-6 sm:p-10 text-gray-700 border border-blue-100">
            <h3 className="text-xl sm:text-2xl font-bold  mb-3"> AMC 8</h3>

            <p className="mb-4 text-gray-600 text-[16px] font-semibold leading-relaxed">
              {completionData?.competition?.[current]?.amc}
            </p>

            <p className="text-sm sm:text-base text-gray-700 mb-2">
              <span className="font-semibold text-gray-800">Description:</span>{" "}
              {completionData?.competition?.[current]?.description}
            </p>

            <p className="text-sm sm:text-base text-gray-700 mb-2">
              <span className="font-semibold text-gray-800">For:</span>
              {completionData?.competition?.[current]?.for}
            </p>

            <p className="text-sm sm:text-base text-gray-700">
              <span className="font-semibold text-gray-800">When:</span>
              {completionData?.competition?.[current]?.when}
            </p>
          </div>

          <div className="flex justify-center items-center gap-2 mt-8">
            {completionData?.competition?.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  current === index ? "bg-blue-600 w-8" : "bg-gray-300 w-3"
                }`}
              ></button>
            ))}
          </div>

          <div className="bg-[#F0F8FF]">{/* Header */}</div>
          <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 ">
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-center">
              WHY TO TAKE IT?
            </h1>
            <section className="text-gray-600 text-[16px] font-semibold">
              {completionData?.whyTake?.map((ele) => (
                <p className=" leading-relaxed mb-6">{ele}</p>
              ))}
              <div className="text-center">
                <h3 className="text-2xl font-bold my-4">
                  So why wait? To avail a Free Trial Class for AMC Test Prep
                  Online Tutoring
                </h3>
              </div>
              <div className="text-center my-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 ">
                  Start Free Trial
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
