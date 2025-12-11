import React, { useEffect, useState } from "react";
import {
  BookOpen,
  Calculator,
  Microscope,
  TrendingUp,
  Users,
  Layers,
  CheckCircle,
  ClipboardList,
  Smile,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/math-bg.png";
import axios from "axios";
import { toast } from "react-toastify";

const K12Page = () => {
  const navigate = useNavigate();
  const [serviceData, setServiceData] = useState();
  const [methodologyData, setMethodologyData] = useState([]);

  const getData = async () => {
    try {
      const [serviceRes, methRes] = await Promise.all([
        axios.get(`${import.meta.env.VITE_APP_URL}api/user/k-12service`),
        axios.get(`${import.meta.env.VITE_APP_URL}api/user/methodology`),
      ]);

      if (serviceRes?.data) {
        setServiceData(serviceRes?.data?.data);
        setMethodologyData(methRes?.data?.data);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error?.message ||
          "something went wrong",
        { position: "top-right" }
      );
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* --- HERO SECTION --- */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-3/5">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Our <span className="text-yellow-400">K-12 Services</span>
            </h1>
            <p className="text-lg text-blue-100 mb-6 leading-relaxed">
              {serviceData?.description}
            </p>

            <button className="bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition duration-300 shadow-lg flex items-center gap-2">
              Book a Session <ArrowRight size={20} />
            </button>
          </div>

          {/* Hero Image / Illustration */}
          <div className="md:w-2/5 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 rounded-full"></div>
              <img
                src={`${import.meta.env.VITE_APP_URL}${serviceData?.image}`}
                alt="Student Tutoring"
                className="relative rounded-2xl shadow-2xl border-4 border-white/20 z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR APPROACH SECTION --- */}
      <section
        id="methodology"
        className="bg-[#F0F8FF] py-20 px-6 bg-white"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Methodology
            </h2>
            <p className="text-gray-600 mt-4">
              At GGES we work with the following approach:
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Step 1 */}
            {methodologyData?.map((ele) => (
              <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition border border-blue-100 h-full">
                <div className="w-14 h-14 bg-white text-blue-600 rounded-full flex items-center justify-center mb-4 shadow-sm">
                  <img
                    src={`${import.meta.env.VITE_APP_URL}${ele?.image}`}
                    size={28}
                  />
                </div>

                <h3 className="font-bold text-gray-800 mb-2 relative z-10">
                  {ele?.title}
                </h3>
                <p className="text-sm text-gray-600 relative z-10">
                  {ele?.description}
                </p>
              </div>
            ))}

            {/* <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition border border-blue-100 h-full">
              <div className="w-14 h-14 bg-white text-blue-600 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Users size={28} />
              </div>
              <div className="text-5xl font-bold text-blue-100 absolute -mt-4 ml-16 opacity-50 select-none">
                1
              </div>
              <h3 className="font-bold text-gray-800 mb-2 relative z-10">
                Understanding Needs
              </h3>
              <p className="text-sm text-gray-600 relative z-10">
                Understanding the need of each student.
              </p>
            </div> */}
            {/* Step 2 */}
            {/* <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition border border-blue-100 h-full">
              <div className="w-14 h-14 bg-white text-blue-600 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Layers size={28} />
              </div>
              <div className="text-5xl font-bold text-blue-100 absolute -mt-4 ml-16 opacity-50 select-none">
                2
              </div>
              <h3 className="font-bold text-gray-800 mb-2 relative z-10">
                Build Foundation
              </h3>
              <p className="text-sm text-gray-600 relative z-10">
                Build foundation and conceptual framework.
              </p>
            </div> */}

            {/* Step 3 */}
            {/* <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition border border-blue-100 h-full">
              <div className="w-14 h-14 bg-white text-blue-600 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <ClipboardList size={28} />
              </div>
              <div className="text-5xl font-bold text-blue-100 absolute -mt-4 ml-16 opacity-50 select-none">
                3
              </div>
              <h3 className="font-bold text-gray-800 mb-2 relative z-10">
                Reinforce
              </h3>
              <p className="text-sm text-gray-600 relative z-10">
                Reinforce through practice using best materials & testing.
              </p>
            </div> */}

            {/* Step 4 */}
            {/* <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition border border-blue-100 h-full">
              <div className="w-14 h-14 bg-white text-blue-600 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Smile size={28} />
              </div>
              <div className="text-5xl font-bold text-blue-100 absolute -mt-4 ml-16 opacity-50 select-none">
                4
              </div>
              <h3 className="font-bold text-gray-800 mb-2 relative z-10">
                Build Confidence
              </h3>
              <p className="text-sm text-gray-600 relative z-10">
                Instilling belief in their own abilities.
              </p>
            </div> */}

            {/* Step 5 */}
            {/* <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition border border-blue-100 h-full">
              <div className="w-14 h-14 bg-white text-blue-600 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <TrendingUp size={28} />
              </div>
              <div className="text-5xl font-bold text-blue-100 absolute -mt-4 ml-16 opacity-50 select-none">
                5
              </div>
              <h3 className="font-bold text-gray-800 mb-2 relative z-10">
                Improved Grades
              </h3>
              <p className="text-sm text-gray-600 relative z-10">
                Accomplishing improved academic results.
              </p>
            </div> */}
          </div>
        </div>
      </section>

      {/* --- SUBJECTS DETAIL SECTION --- */}
      <section id="expertise" className=" py-20 bg-[#F0F8FF] px-6 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Subject Expertise
            </h2>
            <p className="text-gray-600 mt-2">
              We are the best when it comes to:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Math Column */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-blue-600 hover:-translate-y-1 transition duration-300">
              <div className="bg-blue-50 p-6 flex items-center gap-4">
                <div className="bg-blue-600 p-3 rounded-lg text-white shadow-xl">
                  <Calculator size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {serviceData?.title1}
                </h3>
              </div>
              <div className="p-8">
                <ul className="space-y-3">
                  {serviceData?.description1?.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <CheckCircle
                        size={18}
                        className="text-blue-500 flex-shrink-0"
                      />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Science Column */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-teal-600 hover:-translate-y-1 transition duration-300">
              <div className="bg-teal-50 p-6 flex items-center gap-4">
                <div className="bg-teal-600 p-3 rounded-lg text-white shadow-xl">
                  <Microscope size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {serviceData?.title2}
                </h3>
              </div>
              <div className="p-8">
                <ul className="space-y-3">
                  {serviceData?.description2?.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <CheckCircle
                        size={18}
                        className="text-teal-500 flex-shrink-0"
                      />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* English Column */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-indigo-600 hover:-translate-y-1 transition duration-300">
              <div className="bg-indigo-50 p-6 flex items-center gap-4">
                <div className="bg-indigo-600 p-3 rounded-lg text-white shadow-xl">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {serviceData?.title3}
                </h3>
              </div>
              <div className="p-8">
                <ul className="space-y-3">
                  {serviceData?.description3?.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <CheckCircle
                        size={18}
                        className="text-indigo-500 flex-shrink-0"
                      />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-16 bg-blue-900 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Learning Journey with GGES
        </h2>
        <p className="text-blue-200 mb-8 max-w-xl mx-auto">
          Contact us today to discuss how we can help achieve your academic
          goals.
        </p>
        <button
          onClick={() => {
            navigate("/contact");
          }}
          className="cursor-pointer bg-white text-blue-900 font-bold py-3 px-10 rounded-full hover:bg-gray-100 transition shadow-lg"
        >
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default K12Page;
