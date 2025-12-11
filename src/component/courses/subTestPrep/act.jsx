import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

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
    <div className="w-full bg-white text-gray-800" id="act">
      
      {/* ================= HERO SECTION ================= */}
      <section className="pt-20 px-4 bg-gray-50 pb-16">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-6 drop-shadow-sm uppercase">
            {safeData.heroTitle }
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
              className="bg-[#00C4CC] hover:bg-[#00aeb5] text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg transition transform hover:scale-105"
            >
              CLICK HERE FOR FREE TRIAL
            </button>
          </div>
        </div>
      </section>


      {/* ================= ABOUT SECTION (With List) ================= */}
      {(safeData.aboutHeading || safeData.aboutDescription) && (
        <section className="py-16 px-4 bg-white">
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
                  <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
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


      {/* ================= ACT SECTIONS (With List) ================= */}
      {(safeData.actHeading || (safeData.actList && safeData.actList.length > 0)) && (
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {safeData.actList.map((item, index) => (
                  <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-indigo-500">
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
              <p className="text-center text-gray-500 italic">No sections added yet.</p>
            )}
          </div>
        </section>
      )}


      {/* ================= BOTTOM CTA SECTION ================= */}
      <section className="bg-[#0f172a] py-16 px-4 text-center mt-auto">
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your ACT Prep Today!
          </h2>
          <p className="mb-8 text-lg text-gray-300">
            Take a Free Trial Online Tutoring class for ACT or SAT test
            preparation and boost your confidence.
          </p>
          <button
            onClick={() => navigate("/contact-us")}
            className="inline-block bg-yellow-400 text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition transform hover:-translate-y-1 shadow-xl"
          >
            Get Free Trial Class
          </button>
        </div>
      </section>
      
    </div>
  );
};

export default ActTestPrep;