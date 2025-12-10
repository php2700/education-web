
import React, { useEffect, useState } from "react";
import axios from "axios";
import backgroundImage from "../../../assets/math-bg.png";

const PsatTestPrep = () => {
  // --- State Management ---
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // --- API Call ---
  useEffect(() => {
    const fetchPsatData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}api/user/psat-test`
        );

        // Agar data hai toh set karo, nahi toh null
        if (response.data && response.data.data) {
          setData(response.data.data);
        } else {
          setData(null);
        }
      } catch (err) {
        console.error("Error fetching PSAT data:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPsatData();
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

  // --- 3. Empty Data Handling (Agar Admin ne sab delete kar diya hai) ---
  // Agar data null hai, toh kuch mat dikhao (Blank Page return karo ya Message)
  if (!data) {
    return null; // Ya return <div className="text-center py-20">No data available</div>;
  }

  // --- 4. Main Content ---
  return (
    <div
      className="w-full bg-[#F0F8FF] py-12 px-4 md:px-16"
      id="psat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* ===== HEADER ===== */}
        {/* Sirf tab dikhega agar heroTitle ya subtitle admin me dala ho */}
        {(data.heroTitle || data.heroSubtitle) && (
          <div className=" mb-10">
            {data.heroTitle && (
              <h1 className="text-3xl text-center md:text-5xl font-bold text-gray-800 mb-4">
                {data.heroTitle}
              </h1>
            )}
            {data.heroSubtitle && (
              <p className="text-gray-600 text-sm md:text-base  mx-auto">
                {data.heroSubtitle}
              </p>
            )}
          </div>
        )}

        {/* ===== MAIN CONTENT ===== */}
        <div className=" items-center">
          {/* LEFT CONTENT (Description) */}
          <div className="text-left space-y-4">
            {data.heroDescription && (
              <div className="text-gray-700 leading-relaxed whitespace-pre-wrap break-all">
                {data.heroDescription}
              </div>
            )}

            <p className="text-gray-700 leading-relaxed font-semibold">
              Prepare with the best. Boost your confidence. Achieve higher
              scores.
            </p>

            <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
              Click here for Free Trial Class
            </button>
          </div>

          {/* RIGHT CARD (Features) */}
          {/* Agar features ki length 0 se zyada hai tabhi ye box dikhega */}
          {/* {data.features &&
            data.features.length > 0 &&
            data.features[0] !== "" && (
              <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Why Choose GGES for PSAT?
                </h3>

                <ul className="space-y-3 text-gray-700 break-all">
                  {data.features.map((feature, index) =>
                    feature ? (
                      <li
                        key={index}
                        className="flex items-center gap-2 break-all"
                      >
                        <span>✅</span>
                        {feature}
                      </li>
                    ) : null
                  )}
                </ul>
              </div>
            )} */}
        </div>

        {/* ===== ALL ABOUT PSAT SECTION ===== */}
        {/* Ye pura section tabhi dikhega agar heading, description ya table data ho */}
        {(data.aboutHeading ||
          data.aboutDescription ||
          (data.tableData && data.tableData.length > 0)) && (
          <div className="mt-16 bg-[#F0F8FF] p-8 rounded-xl shadow-inner">
            {data.aboutHeading && (
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
                {data.aboutHeading}
              </h2>
            )}

            {data.aboutDescription && (
              <p className="text-gray-700 mb-8  mx-auto whitespace-pre-wrap break-all">
                {data.aboutDescription}
              </p>
            )}

            <h3 className="text-2xl font-bold mb-4  text-gray-800">
              PSAT TEST STRUCTURE
            </h3>

            {/* TABLE */}
            {data.tableData &&
              data.tableData.length > 0 &&
              data.tableData[0].section !== "" && (
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-300 text-left">
                    <thead className="bg-blue-600 text-white">
                      <tr>
                        <th className="p-3 border">Section</th>
                        <th className="p-3 border">Length(minutes)</th>
                        <th className="p-3 border">Number of Questions/Tasks</th>
                      </tr>
                    </thead>

                    <tbody>
                      {data.tableData.map((row, index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-gray-100"
                          }
                        >
                          <td className="p-3 border font-semibold">
                            {row.section}
                          </td>
                          <td className="p-3 border">{row.time}</td>
                          <td className="p-3 border">{row.modules}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}


               <h3 className="text-2xl font-bold my-4  text-gray-800">
             EXAM PERIOD
            </h3>

            {/* TABLE */}
            {data.examPeriod &&
              data.examPeriod.length > 0 &&
              data.examPeriod[0].section !== "" && (
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-300 text-left">
                    <thead className="bg-blue-600 text-white">
                      <tr>
                        <th className="p-3 border">Grade Level </th>
                        <th className="p-3 border">Season</th>
                        <th className="p-3 border">Exam</th>
                      </tr>
                    </thead>

                    <tbody>
                      {data.examPeriod.map((row, index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-gray-100"
                          }
                        >
                          <td className="p-3 border font-semibold">
                            {row.section}
                          </td>
                          <td className="p-3 border">{row.time}</td>
                          <td className="p-3 border">{row.modules}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

            {/* Footer Note */}
            {data.tableFooter && (
              <p className="text-sm text-gray-500 mt-4 text-center italic">
                {data.tableFooter}
              </p>
            )}

            {/* CTA AGAIN */}
            <div className="text-center mt-10">
              <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition">
                Click here for Free Trial Class
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PsatTestPrep;
