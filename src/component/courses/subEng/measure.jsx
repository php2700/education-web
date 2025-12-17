"use client";

import React, { useEffect, useState } from "react";
import {
  Brain,
  Calculator,
  BookOpen,
  MessageSquare,
  PenTool,
} from "lucide-react";
import verbal from "../../../assets/verbal.png";
import quantitative from "../../../assets/quantitative.png";
import reading from "../../../assets/reading.png";
import mathematics from "../../../assets/mathmatics.png";
import essay from "../../../assets/essay.png";
import axios from "axios";
import { toast } from "react-toastify";


export const Measure = () => {
  const [aboutData,setAboutData]=useState();
   const getAboutData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/measure`
      );
      setAboutData(res?.data?.data);
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
    getAboutData();
  }, []);
  return (
    <>
      <div className="bg-[#F0F8FF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Header */}
          <div className="flex items-center gap-3 mb-12">
            <h1 className="text-2xl font-semibold text-gray-800">
              What the sections measure
            </h1>
          </div>

          {/* First Row - Three Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Verbal Reasoning */}
            <div className="bg-white rounded-2xl text-center shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="bg-blue-100 p-3 rounded-xl ">
                  <img src={verbal} className="w-6 h-6 " />
                </div>
              </div>
              <h3 className="text-lg  font-semibold text-gray-900 mb-2" dangerouslySetInnerHTML={{__html:aboutData?.title1}}>
               
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
              
                {aboutData?.description1}
              </p>
            </div>

            {/* Quantitative Reasoning */}
            <div className="bg-white text-center rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex  justify-center items-center gap-3 mb-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <img src={quantitative} className="w-6 h-6 " />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2" dangerouslySetInnerHTML={{__html:aboutData?.title2}}>
               
              </h3>
              <p className="text-gray-600  text-lg leading-relaxed">
              {aboutData?.description2}
              </p>
            </div>

            {/* Reading Comprehension */}
            <div className="bg-white rounded-2xl text-center shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow relative">
              <div className="flex  justify-center items-center gap-3 mb-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <img src={reading} className="w-6 h-6 " />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2" dangerouslySetInnerHTML={{__html:aboutData?.title3}}>
              
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {aboutData?.description3}
              </p>
              <div className="absolute top-6 right-6 w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          {/* Second Row - Two Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 text-center gap-6 max-w-4xl mx-auto">
            {/* Mathematics Achievement */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex  justify-center items-center gap-3 mb-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <img src={mathematics} className="w-6 h-6 " />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2" dangerouslySetInnerHTML={{__html:aboutData?.title4}}>
              
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
               {aboutData?.description4}
              </p>
            </div>

            {/* Essay */}
            <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex  justify-center items-center gap-3 mb-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <img src={essay} className="w-6 h-6 " />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2" dangerouslySetInnerHTML={{__html:aboutData?.title5}}>
            
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {aboutData?.description5}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
