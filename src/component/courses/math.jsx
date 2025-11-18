import React, { useEffect, useState } from "react";
import backgroundImage from "../../assets/math-bg.png";
import aboutImage from "../../assets/about-bg-2.png";

import algebra from "../../assets/algebra.png";
import algebra2 from "../../assets/algebra2.png";
import amcImg from "../../assets/amc.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { TestStructure } from "./subMath/test";
import { TopicPage } from "./subMath/topic";
import { Prep } from "./subMath/prep";
import { Completion } from "./subMath/completion";
import { toast } from "react-toastify";
import axios from "axios";

const Courses = () => {
  const [mathAboutData, setMathAboutData] = useState();
  const [tutoringData, setTutoringData] = useState();
  const [chapterData, setChapterData] = useState();

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const [mathRes, tutoringRes, chapterRes] = await Promise.all([
        axios.get(`${import.meta.env.VITE_APP_URL}api/user/math-test`),
        axios.get(`${import.meta.env.VITE_APP_URL}api/user/tutoring`),
        axios.get(`${import.meta.env.VITE_APP_URL}api/user/chapter`),
      ]);

      setMathAboutData(mathRes?.data?.data);
      setTutoringData(tutoringRes?.data?.data);
      setChapterData(chapterRes?.data?.data);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong",
        { position: "top-right" }
      );
    }
  };

  return (
    <>
      <section
        className="relative bg-[#F0F8FF] py-16 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto ">
          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
            {mathAboutData?.title}
          </h1>
          <div className=" space-y-8 text-lg text-gray-700">
            {mathAboutData?.description?.map((ele) => (
              <p> {ele}</p>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-xl font-semibold  text-gray-800 mb-4">
              Click here to schedule a Free Trial Class for any subject
            </p>
            <button className="inline-flex  items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out">
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
            {tutoringData?.heading}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {tutoringData?.headingDescription}
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
        {tutoringData?.chapter?.map((ele, index) => (
          <div
            className={`relative rounded-lg shadow-xl p-6 sm:p-8 md:p-10 mb-12 ${
              index % 2 === 0 ? "bg-[#AEA4DE]" : "bg-[#F0B6C2]"
            }`}
          >
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 text-white ">
              <div className="w-full lg:w-1/2 text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                  {ele?.title}
                </h3>

                <p className="font-semibold text-base sm:text-lg md:text-xl mb-4 leading-relaxed">
                  {ele?.description}
                </p>

                <ul className="font-semibold text-sm sm:text-base md:text-lg list-disc list-inside space-y-2 pl-2">
                  {ele?.chapterName?.map((ele, index) => (
                    <li>
                      Chapter {index}: {ele}
                    </li>
                  ))}
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
        ))}
      </section>

      <section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F0F8FF]"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl container mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            {chapterData?.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {chapterData?.description}
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
            <div className="relative w-full px-4 sm:px-6 lg:px-10 py-6">
              {/* Chapters Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 text-center">
                {chapterData?.chapterName?.map((chapter, index) => (
                  <div
                    key={index}
                    className="flex flex-row justify-start sm:justify-center items-center gap-3 sm:gap-4"
                  >
                    <div
                      className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full text-white font-bold text-base sm:text-lg bg-blue-500`}
                    >
                      {index + 1}
                    </div>

                    <div className="flex flex-col text-left">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                        Chapter {index + 1}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-700">
                        {chapter}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Left Arrow */}
              <div className="absolute inset-y-0 left-2 sm:left-4 flex items-center">
                <button
                  className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 text-gray-500 hover:text-gray-700 focus:outline-none"
                  aria-label="Previous"
                >
                  <svg
                    className="h-6 w-6 sm:h-8 sm:w-8"
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

              {/* Right Arrow */}
              <div className="absolute inset-y-0 right-2 sm:right-4 flex items-center">
                <button
                  className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 text-gray-500 hover:text-gray-700 focus:outline-none"
                  aria-label="Next"
                >
                  <svg
                    className="h-6 w-6 sm:h-8 sm:w-8"
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
              {chapterData?.subjectDescription}
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F0F8FF]">
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
      </section>

      <Completion />

      {/* <Prep /> */}

      <TestStructure />
      <TopicPage />
    </>
  );
};

export default Courses;
