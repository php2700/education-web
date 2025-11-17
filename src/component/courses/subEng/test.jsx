import React, { useEffect, useState } from "react";
import {
  Book,
  Pencil,
  CheckSquare,
  Globe,
  FileText,
  Laptop,
} from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

export const TestPage = () => {
  const [measureData, setMeasureData] = useState([]);

  const getMeasureData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/about-isee-test`
      );
      setMeasureData(res?.data?.data);
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
    getMeasureData();
  }, []);
  return (
    <div className="bg-[#F0F8FF]">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
            ALL ABOUT ISEE TEST
          </h1>
        </div>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {measureData?.title?.map((ele) => (
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              {ele}
            </p>
          ))}

          {/* Purpose of the ISEE */}
          <section className="my-4">
            <h2 className="text-3xl font-semibold text-gray-900 mb-10 ">
              Purpose of the ISEE
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {measureData?.purpose?.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center   transform hover:scale-105 transition duration-300"
                >
                  <div className="text-2xl text-left font-bold">{idx + 1}</div>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
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
              {measureData?.testStructure?.map((item) => (
                <div className="bg-white rounded-2xl shadow-md p-6 border border-blue-100">
                  <h3 className="text-xl font-bold  mb-3">{item?.heading}:</h3>
                  <p className="text-gray-700">{item?.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
