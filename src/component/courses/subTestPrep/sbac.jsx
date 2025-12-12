import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SBACPrep = () => {
  // --- State Management ---
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
     const navigate = useNavigate();

  // --- API Call ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        // API Endpoint: /api/sbac-test
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}api/user/sbac-test`
        );

        // Validation: Check if data exists
        if (response.data && response.data.data) {
          setData(response.data.data);
        } else {
          setData(null);
        }
      } catch (err) {
        console.error("Error fetching SBAC data:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // --- 1. Loading View ---
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  // --- 2. Error View ---
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
    <div className="w-full bg-white text-gray-800" id="sbac">
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
            <p className="text-lg md:text-xl max-w-7xl mx-auto mb-8 whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: safeData.heroDescription }} >
              
            </p>
          )}

          <section className="mt-4  p-4 rounded-xl text-center">
            <h3 className="text-xl font-semibold mb-3">
              So why not take a Free Trial Class for SBAC tutoring with us, To
              avail.
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

      {safeData?.aboutDescription && (
        <section className="py-4 px-4">
          <div className="max-w-7xl mx-auto">
            {safeData?.aboutHeading && (
              <h2 className="text-2xl font-bold mb-2">
                {safeData.aboutHeading}
              </h2>
            )}

            <div className="text-lg mb-4 whitespace-pre-wrap">
              {safeData.aboutDescription}
            </div>
          </div>
        </section>
      )}

      {/* ASSESSMENT DETAILS */}
      {/* Render only if content exists */}
      {safeData.assessmentPoints && safeData.assessmentPoints.length > 0 && (
        <section className="bg-gray-100 py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {safeData?.assessmentDescription && (
              <section className="py-4 ">
                <div className="max-w-7xl mx-auto">
                  {/* Heading */}
                  {safeData.assessmentHeading && (
                    <h2 className="text-3xl text-center font-bold mb-4">
                      {safeData.assessmentHeading}
                    </h2>
                  )}

                  {/* Description */}
                  <p className="text-lg whitespace-pre-wrap">
                    {safeData.assessmentDescription}
                  </p>
                </div>
              </section>
            )}
            {safeData.assessmentPoints?.map((ele) => (
              <div className="mb-4">
                <h2 className="text-xl font-bold ">{ele?.title}</h2>
                <div className="whitespace-pre-wrap">{ele?.description}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mt-4  p-4 rounded-xl text-center">
        <h3 className="text-xl font-semibold mb-3">
          So why not take a Free Trial Class for SBAC tutoring with us, 
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
  );
};

export default SBACPrep;
