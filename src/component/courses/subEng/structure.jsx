"use client";

import React, { useEffect, useState } from "react";
import { Rocket, Sun, Pencil } from "lucide-react";
import backgroundImage from "../../../assets/work-bg.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Structure = () => {
  const navigate = useNavigate();
  const [structureData, setStructureData] = useState([]);

  const getStructureData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/registration`
      );
      setStructureData(res?.data?.data);
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
    getStructureData();
  }, []);
  const handlecontact = () => {
    navigate("/contact");
  };
  return (
    <>
      <div
        className="bg-[#F0F8FF] py-16 px-6 sm:px-10 lg:px-12 relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 py-12 ">
          {/* Main Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-semibold  uppercase mb-2">
              Test Structure
            </h1>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
              {structureData?.title}
            </h2>
          </div>

          {/* Description Paragraph */}
          <div className="mb-12">
            <p className="text-gray-700 text-base leading-relaxed  mx-auto">
              {structureData?.description}
            </p>
          </div>

          <div className="text-center mt-10">
            <div className="font-bold my-2">
              So why wait? To avail a Free Trial Class for Science Online
              Tutoring
            </div>

            <div className="flex justify-center my-6">
              <button
                onClick={handlecontact}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300"
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
