import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import actTableImg from "../../../assets/P2-ACT.jpg"; // Import useNavigate

const ActTestPrep = () => {
  // State management
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate(); // For navigation

  // API Call
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Backend URL
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}api/user/act-test`
        );

        if (response.data) {
          const apiData = response.data.data || response.data;
          // Handle Array vs Object
          if (Array.isArray(apiData) && apiData.length > 0) {
            setData(apiData[0]);
          } else {
            setData(apiData);
          }
        } else {
          setData(null);
        }
      } catch (err) {
        console.error("Error fetching ACT data:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 1. Loading State
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  // 2. Error State
  if (error) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-gray-50 text-red-500">
        <p>Unable to load content. Please refresh or try again later.</p>
      </div>
    );
  }

  // Safe Data Object
  const safeData = data || {};

  return (
    <div className="w-full  text-gray-800" id="act">
      {/* ================= HERO SECTION ================= */}
      <section className="pt-20 px-4 pb-16">
        <div className="max-w-7xl mx-auto text-center">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-6 drop-shadow-sm uppercase">
            {safeData.heroTitle}
          </h1>

          {/* Description */}
          {safeData.heroDescription && (
            <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-blue-500 max-w-4xl mx-auto mb-8">
              <p className="text-lg md:text-xl text-gray-700 whitespace-pre-wrap leading-relaxed">
                {safeData.heroDescription}
              </p>
            </div>
          )}

          {/* Top CTA */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">
              So why wait? To avail a Free Trial Class for ACT Test Prep Online
              {/* {safeData.herosubtitle} */}
            </h3>
            <button
              onClick={() => navigate("/contact")} // Change route if needed
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg shadow-lg transition transform hover:bg-blue-700"
            >
              CLICK HERE FOR FREE TRIAL
            </button>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION (With List) ================= */}
      {(safeData.aboutHeading || safeData.aboutDescription) && (
        <section className="py-16 px-4 ">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            {safeData.aboutHeading && (
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 border-l-8 border-blue-600 pl-4">
                {safeData.aboutHeading}
              </h2>
            )}

            {/* Description */}
            {safeData.aboutDescription && (
              <div className="text-lg text-gray-700 mb-10 whitespace-pre-wrap leading-relaxed">
                {safeData.aboutDescription}
              </div>
            )}

            {/* Dynamic About List (Cards) */}
            {safeData.aboutList && safeData.aboutList.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {safeData.aboutList.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#F0F8FF] p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
                  >
                    {item.title && (
                      <h3 className="text-xl font-bold text-blue-800 mb-3 border-b pb-2">
                        {item.title}
                      </h3>
                    )}
                    {item.description && (
                      <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}
      <section className="py-12 px-4 ">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
            ACT Structure (2025-26)
          </h2>

          <div className="flex justify-center">
            {/* Image styling: Shadow, Rounded corners, aur Responsive width */}
            <img
              src={actTableImg}
              alt="ACT 2025-26 Format Table"
              className="w-full max-w-lg md:max-w-xl h-auto shadow-2xl rounded-lg border-2 border-gray-200 hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* ================= ACT SECTIONS (With List) ================= */}
      {(safeData.actHeading ||
        (safeData.actList && safeData.actList.length > 0)) && (
        <section className="bg-gray-100 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            {safeData.actHeading && (
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900">
                {safeData.actHeading}
              </h2>
            )}

            {/* Dynamic ACT List (Cards) */}
            {safeData.actList && safeData.actList.length > 0 ? (
              <div className="space-y-6">
                {safeData.actList.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-indigo-500"
                  >
                    {item.title && (
                      <h3 className="text-2xl font-bold text-indigo-900 mb-4">
                        {item.title}
                      </h3>
                    )}
                    {item.description && (
                      <div className="text-gray-700 whitespace-pre-wrap leading-relaxed text-lg">
                        {item.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 italic">
                No sections added yet.
              </p>
            )}
          </div>
        </section>
      )}

      {/* ================= BOTTOM CTA SECTION ================= */}
      <section className=" py-8 bg-gray-100 px-4 text-center mt-auto">
        <div className="max-w-4xl mx-auto ">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your ACT Prep Today!
          </h2>
          <p className="mb-8 text-lg ">
            Take a Free Trial Online Tutoring class for ACT or SAT test
            preparation and boost your confidence.
          </p>
          <div className="text-center mt-8">
            <button
              onClick={() => navigate("/contact")}
              className="bg-blue-600 cursor-pointer text-white  px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Click here for Free Trial Class
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ActTestPrep;
