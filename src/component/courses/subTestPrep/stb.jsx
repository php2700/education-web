import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const STBPrep = () => {
  // --- State Management ---
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // --- API Call ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        // API Endpoint: /api/stb-test
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}api/user/stb-test`
        );

        // Validation: Check if data exists
        if (response.data && response.data.data) {
          setData(response.data.data);
        } else {
          setData(null);
        }
      } catch (err) {
        console.error("Error fetching STB data:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // --- 1. Loading State ---
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  // --- 2. Error State ---
  if (error) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-gray-50 text-red-500">
        <p>Unable to load content. Please try again later.</p>
      </div>
    );
  }

  // Safe Data Object
  const safeData = data || {};

  // --- 3. Main Content ---
  return (
    <div className="w-full  text-gray-800" id="stb">
      {/* HERO SECTION */}
      {/* Background and Button always visible */}
      <section className=" py-10 px-4">
        <div className="max-w-7xl mx-auto ">
          {/* Title: Visible only if data exists */}
          {safeData.heroTitle && (
            <h1 className="text-4xl text-center md:text-5xl font-bold mb-6">
              {safeData.heroTitle}
            </h1>
          )}

          {/* Description: Visible only if data exists */}
          {safeData.heroDescription && (
            <p className="text-lg md:text-xl max-w-7xl mx-auto mb-8 whitespace-pre-wrap">
              {safeData.heroDescription}
            </p>
          )}

          <section className="mt-4  p-4 rounded-xl text-center">
            <h3 className="text-xl font-semibold mb-3">
              Why not take a FREE TRIAL CLASS for STB Test online tutoring
            </h3>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-lg font-semibold transition"
              >
                CLICK HERE
              </button>
            </div>
          </section>
        </div>
      </section>

      {/* ABOUT STB */}
      {/* Section renders only if content exists */}
      {(safeData.aboutHeading || safeData.aboutDescription) && (
        <section className="pt-4 px-4">
          <div className="max-w-7xl mx-auto">
            {safeData.aboutHeading && (
              <h2 className="text-3xl font-bold mb-4 break-all">
                {safeData.aboutHeading}
              </h2>
            )}

            {safeData.aboutDescription && (
              <div
                className="text-lg mb-4 whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: safeData?.aboutDescription }}
              ></div>
            )}
          </div>
        </section>
      )}
      {safeData.stbUsedDescription && (
        <section className="py-2 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 ">
              What is the STB Used For?
            </h2>

            {safeData.stbUsedDescription && (
              <div className="text-lg mb-4 whitespace-pre-wrap ">
                {safeData.stbUsedDescription}
              </div>
            )}
          </div>
        </section>
      )}

      {safeData?.stbSubsetPoints?.length > 0 && (
        <section className="py-2 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 break-all">
              What are the STB Subtests?
            </h2>

            <ul className="list-disc pl-6 space-y-2 text-lg">
              {safeData.stbSubsetPoints.map((ele, index) => (
                <li key={index}>{ele}</li>
              ))}
            </ul>

            {safeData.stbSubsetDescription && (
              <p className="text-lg mt-4 whitespace-pre-wrap ">
                {safeData.stbSubsetDescription}
              </p>
            )}
          </div>
        </section>
      )}

      {/* STB SUBTESTS & TABLE SECTION */}
      {/* Section renders if Heading, Subtests, Info, or Table exists */}
      {(safeData.subtestHeading ||
        (safeData.subtests && safeData.subtests.length > 0) ||
        safeData.infoHeading ||
        (safeData.timeTable && safeData.timeTable.length > 0)) && (
        <section className="bg-[#F0F8FF] py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl text-center font-bold mb-6">
              What Material is on the STB Subtests?
            </h1>
            <p className="text-lg">
              The following is a description of the four subtests that the
              student will complete on the STB test:
            </p>
            {safeData.subtestHeading && (
              <h2 className="text-3xl font-bold mb-6">
                {safeData.subtestHeading}
              </h2>
            )}

            {/* Dynamic Subtests List */}
            {safeData.subtests && safeData.subtests.length > 0 && (
              <div>
                {safeData.subtests.map((subtest, index) => (
                  <div key={index} className="mb-4">
                    {subtest.title && (
                      <h3 className="text-2xl font-semibold mb-3">
                        {subtest.title}
                      </h3>
                    )}
                    {subtest.content && (
                      <p className="text-lg mb-4 whitespace-pre-wrap">
                        {subtest.content}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* IMPORTANT TEST INFORMATION */}
            {safeData.infoHeading && (
              <h3 className="text-2xl font-bold mb-3 mt-8">
                {safeData.infoHeading}
              </h3>
            )}

            {safeData.infoDescription && (
              <p className="text-lg mb-4 whitespace-pre-wrap">
                {safeData.infoDescription}
              </p>
            )}

            {/* Dynamic Timing Table */}
            {safeData.timeTable && safeData.timeTable.length > 0 && (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse border border-gray-300 mb-6">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="border border-gray-300 px-4 py-2">
                        Subtest + Tutorial
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        5th/6th Graders: Time Allowed
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        7th Graders and Older: Time Allowed
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {safeData.timeTable.map((row, index) => (
                      <tr
                        key={index}
                        className={index % 2 !== 0 ? "bg-gray-50" : ""}
                      >
                        <td className="border border-gray-300 px-4 py-2">
                          {row.activity}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {row.time5th6th}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {row.time7thPlus}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="mt-4  p-4 rounded-xl text-center">
        <h3 className="text-xl font-semibold mb-3">
          Why not take a FREE TRIAL CLASS for STB Test online tutoring. 
        </h3>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/contact")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-lg transition"
          >
            CLICK HERE
          </button>
        </div>
      </section>
    </div>
  );
};

export default STBPrep;
