import React, { useEffect, useState } from "react";
import axios from "axios";

const ActTestPrep = () => {
  // State management
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // API Call
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Backend URL: Adjust base URL if needed
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}api/user/act-test`
        );

        // Validation: Check if data object exists
        if (response.data && response.data.data) {
          setData(response.data.data);
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

  // 3. Main Content
  return (
    <div className="w-full bg-white text-gray-800" id="act">
      {/* HERO SECTION */}
      {/* Background and Button always visible */}
      <section className=" pt-20 px-4">
        <div className="max-w-7xl mx-auto ">
          {/* Title: Only visible if data exists */}
          {safeData.heroTitle && (
            <h1 className="text-4xl text-center md:text-5xl font-bold mb-6">
              {safeData.heroTitle}
            </h1>
          )}

          {/* Description: Only visible if data exists */}
          {safeData.heroDescription && (
            <p className="text-lg md:text-xl mx-auto mb-8 whitespace-pre-wrap">
              {safeData.heroDescription}
            </p>
          )}

          <section className="mt-4  p-4 rounded-xl text-center">
            <h3 className="text-xl font-semibold mb-3">
              So why wait? To avail a Free Trial Class for ACT Test Prep Online
            </h3>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => navigate("/free-trial")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                CLICK HERE
              </button>
            </div>
          </section>
        </div>
      </section>

      {/* ABOUT ACT */}
      {/* Section renders only if Heading or Description exists */}
      {(safeData.aboutHeading || safeData.aboutDescription) && (
        <section className="py-4 px-4">
          <div className="max-w-7xl mx-auto">
            {safeData.aboutHeading && (
              <h2 className="text-3xl font-bold mb-6">
                {safeData.aboutHeading}
              </h2>
            )}

            {safeData.aboutDescription && (
              <div className="text-lg mb-4 whitespace-pre-wrap">
                {safeData.aboutDescription}
              </div>
            )}
          </div>
        </section>
      )}

      {/* TEST STRUCTURE */}
      {/* Section renders only if Heading or Points exist */}
      {(safeData.structureHeading ||
        (safeData.structurePoints && safeData.structurePoints.length > 0)) && (
        <section className="bg-gray-100 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {safeData.structureHeading && (
              <h2 className="text-3xl font-bold mb-6">
                {safeData.structureHeading}
              </h2>
            )}

            {safeData.structurePoints &&
              safeData.structurePoints.length > 0 && (
                <ul className="list-disc pl-6 space-y-3 text-lg">
                  {safeData.structurePoints.map((point, index) =>
                    point ? <li key={index}>{point}</li> : null
                  )}
                </ul>
              )}
          </div>
        </section>
      )}

      {/* NEW ACT 2025 */}
      {/* Section renders only if Heading or Points exist */}
      {(safeData.changesHeading ||
        (safeData.changesPoints && safeData.changesPoints.length > 0)) && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {safeData.changesHeading && (
              <h2 className="text-3xl font-bold mb-6">
                {safeData.changesHeading}
              </h2>
            )}

            {safeData.changesPoints && safeData.changesPoints.length > 0 && (
              <ol className="list-decimal pl-6 space-y-4 text-lg">
                {safeData.changesPoints.map((point, index) =>
                  point ? <li key={index}>{point}</li> : null
                )}
              </ol>
            )}
          </div>
        </section>
      )}

      {/* CTA SECTION - Always Visible (Default) */}
      <section className="bg-[#0f172a] py-16 px-4 text-center">
        <div className="max-w-7xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your ACT Prep Today!
          </h2>
          <p className="mb-8 text-lg">
            Take a Free Trial Online Tutoring class for ACT or SAT test
            preparation and boost your confidence.
          </p>
          <a
            href="/free-trial"
            className="inline-block bg-yellow-400 text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition"
          >
            Get Free Trial Class
          </a>
        </div>
      </section>
    </div>
  );
};

export default ActTestPrep;
