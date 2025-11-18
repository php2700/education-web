import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { toast } from "react-toastify";

export const TestStructure = () => {
  const [mathData, setMathData] = useState([]);
  const [mathDetailData, setMathDetailData] = useState([]);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const [mathRes, detailRes] = await Promise.all([
        axios.get(`${import.meta.env.VITE_APP_URL}api/user/kangaroo-test`),
        axios.get(`${import.meta.env.VITE_APP_URL}api/user/detail-kangaroo`),
      ]);

      setMathData(mathRes?.data?.data);
      setMathDetailData(detailRes?.data?.data);
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
              {mathData?.testPrepDescription}
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
        <div className=" py-4">
          <h1 className="text-3xl font-bold text-center">TEST STRUCTURE</h1>
          {mathData?.testStructureDescription?.map((ele) => (
            <p className="my-4 font-semibold text-[16px] text-gray-500">
              {ele}
            </p>
          ))}
        </div>

        <main className=" py-8 space-y-12">
         {mathDetailData?.map((ele, index) => (
  <section key={index}>
    <div className="grid md:grid-cols-2 gap-8">

      <div className={`${index % 2 !== 0 ? "lg:order-2" : "lg:order-1"}`}>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          {ele?.title}
        </h2>
        <ul className="space-y-4 text-gray-700">
          {ele?.description.map((item, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="font-bold">{idx + 1}.</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* IMAGE COLUMN */}
      <div className={`${index % 2 !== 0 ? "lg:order-1" : "lg:order-2"}`}>
        <img
          src={`${import.meta.env.VITE_APP_URL}${ele.image}`}
          alt="Student studying"
          className="w-full"
        />
      </div>

    </div>
  </section>
))}


          <div className="mt-4 text-[16px] font-semibold text-gray-600">
            We have the best content and specialized tutors available for Math
            Kangaroo.
          </div>
        </main>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold my-2">
          So why wait? To avail a Free Trial Class for AMC Test Prep Online
          Tutoring
        </h3>
      </div>
      <div className="text-center my-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 ">
          Start Free Trial
        </button>
      </div>
    </div>
  );
};
