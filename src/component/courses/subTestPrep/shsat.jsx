import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SHSAT = () => {
  const navigate = useNavigate();

  // State Management
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShsatData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}api/user/shsat-test`
        );

        if (response.data) {
          let apiData = response.data.data || response.data;

          // Agar data array hai to first object lein, nahi to direct object
          if (Array.isArray(apiData)) {
            // Check valid object
            if (apiData.length > 0) setData(apiData[0]);
            else setData(null);
          } else {
            // Check valid object keys
            if (apiData && Object.keys(apiData).length > 0) setData(apiData);
            else setData(null);
          }
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching SHSAT data:", err);
        setError("Failed to load content.");
        setLoading(false);
      }
    };

    fetchShsatData();
  }, []);

  // Loading State
  if (loading)
    return (
      <div className="text-center py-20 font-bold text-gray-500">
        Loading SHSAT Prep...
      </div>
    );
  if (error)
    return <div className="text-center py-20 text-red-500">{error}</div>;

  // Safe Data Object
  // Agar data null hai tab bhi hum empty object dete hain taaki buttons render ho sakein
  const safeData = data || {};

  return (
    <div className="py-14 px-4 md:px-20" id="shsat">
      <div className="max-w-7xl mx-auto">
        {/* ===== HERO TITLE ===== */}
        {/* Sirf tab dikhega jab title backend se aayega */}
        {safeData.heroTitle && (
          <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">
            {safeData.heroTitle}
          </h1>
        )}

        {/* ===== HERO SECTION & BUTTON ===== */}
        {/* Ye box hamesha rahega taaki Button dikh sake */}
        <div className="bg-[#F0F8FF]  p-8 rounded-2xl shadow-xl mb-10">
          {/* Description Text - Sirf tab dikhega jab data ho */}
          {safeData.heroDescription && (
            <div className="text-gray-700 leading-7 mb-6 whitespace-pre-line">
              {safeData.heroDescription}
            </div>
          )}

          {/* BUTTON: Ye hamesha dikhega (Default) */}
      <div className="text-center text-lg mb-2">So why wait? To avail a Free Trial Class for SHSAT Test Prep Online Tutoring, &nbsp; 
   <span
                onClick={() => navigate("/contact")}
                className="mt-4  cursor-pointer  py-3 font-semibold text-lg underline text-blue-600  transition"
              >
               CLICK HERE
              </span>
  </div>
        </div>

        {/* ===== ALL ABOUT SHSAT (Dynamic Section) ===== */}
        {/* Ye pura section tabhi dikhega jab Heading ya Items exist karte hon */}
        {(safeData.aboutMainHeading ||
          (safeData.aboutItems && safeData.aboutItems.length > 0)) && (
          <div className="bg-[#F0F8FF] p-8 rounded-2xl shadow-xl mb-10">
            {safeData.aboutMainHeading && (
              <h2 className="text-2xl font-bold mb-4 text-blue-800">
                {safeData.aboutMainHeading}
              </h2>
            )}

            {/* Dynamic Mapping for About Items */}
            {safeData.aboutItems &&
              safeData.aboutItems.length > 0 &&
              safeData.aboutItems.map((item, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  {item.title && (
                    <h3 className="text-xl font-bold mt-6 mb-2 text-blue-700">
                      {item.title}
                    </h3>
                  )}
                  {item.content && (
                    <p
                      className="text-gray-700 leading-7 whitespace-pre-line"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    ></p>
                  )}
                </div>
              ))}
          </div>
        )}

        {/* ===== SHSAT STRUCTURE ===== */}
        {/* Ye section bhi tabhi dikhega jab Heading ya Points hon */}
        {(safeData.structureHeading ||
          (safeData.structurePoints &&
            safeData.structurePoints.length > 0)) && (
          <div className="bg-[#F0F8FF] p-8 rounded-2xl shadow-xl mb-10">
            {safeData.structureHeading && (
              <h2 className="text-2xl font-bold mb-6 text-blue-800">
                {safeData.structureHeading}
              </h2>
            )}

            {safeData.structurePoints &&
              safeData.structurePoints.length > 0 && (
                <ul className="list-disc ml-6 text-gray-700 space-y-2">
                  {safeData.structurePoints.map((point, index) =>
                    point ? <li key={index}>{point}</li> : null
                  )}
                </ul>
              )}

            {/* External Link */}
            <div className="mt-6">
              <a
                href="https://www.princetonreview.com/k12/shsat-format?ceid=article-about-shsat"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                Refer official SHSAT Format
              </a>
            </div>
          </div>
        )}

        {/* ===== CTA (Static / Default Button) ===== */}
        {/* Ye section kabhi gayab nahi hoga - Always Visible */}
        <div className="bg-blue-900 text-white p-10 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">
            Get started with GGES SHSAT Test Prep
          </h2>
          <p className="mb-6">
            Our expert tutors and strategic plan help you score higher and
            secure admission to top specialized high schools.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white cursor-pointer text-blue-900 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Book Free Trial Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default SHSAT;
