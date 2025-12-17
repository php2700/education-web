import React, { useEffect, useState } from "react";
import axios from "axios";
import bgImage from "../../../assets/Elaback.png";
import { useNavigate } from "react-router-dom";
const AmcTestPrep = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // API Call to fetch AMC Data
  useEffect(() => {
    const fetchAmcData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URL}api/user/amc-test`
        );

        // Validation: Check if data exists in response
        if (response.data && response.data.data) {
          setData(response.data.data);
        } else {
          setData(null);
        }
      } catch (err) {
        console.error("Error fetching AMC data:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchAmcData();
  }, []);

  // 1. LOADING STATE
  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  // 2. ERROR STATE (Only if API fails, not if data is empty)
  if (error) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-gray-50 text-red-500">
        <p>Something went wrong. Please try again later.</p>
      </div>
    );
  }

  // Safe Data Object (Taaki agar data null ho to crash na ho)
  const safeData = data || {};

  // 3. MAIN CONTENT (Dynamic)
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      className="w-full bg-white text-gray-800"
      id="amc"
    >
      {/* HERO SECTION */}
      <section className="  py-10 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Title: Sirf tab dikhega jab data ho */}
          {safeData.heroTitle && (
            <h1 className="text-4xl text-center md:text-5xl font-bold mb-6">
              {safeData.heroTitle}
            </h1>
          )}

          {/* Description: Sirf tab dikhega jab data ho */}
          {safeData.heroDescription && (
            <p className="text-lg md:text-xl max-w-7xl mx-auto mb-2 whitespace-pre-wrap">
              {safeData.heroDescription}
            </p>
          )}
          <section className="mt-4  p-4 rounded-xl text-center">
            <h3  className="text-xl font-semibold mb-3">
              So why wait? To avail a Free Trial Class for AMC Test Prep
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
      </section>

      {/* ABOUT AMC */}
      {(safeData.aboutHeading || safeData.aboutDescription) && (
        <section className="py-4 px-4">
          <div className="max-w-7xl mx-auto">
            {safeData.aboutHeading && (
              <h2 className="text-3xl font-bold mb-2">
                {safeData.aboutHeading}
              </h2>
            )}
            {safeData.aboutDescription && (
              <p className="text-lg mb-6 whitespace-pre-wrap">
                {safeData.aboutDescription}
              </p>
            )}
          </div>
        </section>
      )}

      {/* PARTICIPANTS */}
      {(safeData.participationHeading ||
        (safeData.participationPoints &&
          safeData.participationPoints.length > 0)) && (
        <section className="bg-gray-100 py-12 px-4">
          <div className="max-w-7xl mx-auto">
            {safeData.participationHeading && (
              <h2 className="text-3xl font-bold mb-4">
                {safeData.participationHeading}
              </h2>
            )}
            <div className="text-lg mb-4">
              The MAA AMC proudly engages with a dedicated group of
              participants, each crucial to the success of our mathematical
              community:
            </div>
            {safeData.participationPoints &&
              safeData.participationPoints.length > 0 && (
                <ul className="list-disc pl-6 space-y-3 text-lg">
                  {safeData.participationPoints.map((point, index) =>
                    point ? <li key={index}>{point}</li> : null
                  )}
                </ul>
              )}
          </div>
        </section>
      )}

      {/* AMC COMPETITIONS */}
      {(safeData.competitionsHeading ||
        (safeData.competitionCards &&
          safeData.competitionCards.length > 0)) && (
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {safeData.competitionsHeading && (
              <h2 className="text-3xl font-bold mb-6">
                {safeData.competitionsHeading}
              </h2>
            )}

            {safeData.competitionCards &&
              safeData.competitionCards.length > 0 && (
                <div className="space-y-4 ">
                  {safeData.competitionCards.map((card, index) => (
                    <div
                      key={index}
                      className="bg-[#F0F8FF] p-6 rounded-xl shadow h-full"
                    >
                      {card.title && (
                        <h3 className="text-2xl font-semibold mb-4">
                          {card.title}
                        </h3>
                      )}
                      {card.amcDescription && (
                        <p className="mb-2 text-lg whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: card.amcDescription }}>
                        </p>
                      )}
                      {card.description && (
                        <p className="mb-2 text-lg" >
                          <strong>Description:</strong> {card.description}
                        </p>
                      )}
                      {card.whenText && (
                        <p className="mb-2 text-lg">
                          <strong>When:</strong> {card.whenText}
                        </p>
                      )}
                      {card.whoText && (
                        <p className="mb-2 text-lg">
                          <strong>For:</strong> {card.whoText}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
          </div>
        </section>
      )}

      {/* WHY TAKE AMC */}
      {(safeData.whyHeading || safeData.whyDescription) && (
        <section className="bg-[#F0F8FF] py-16 px-4">
          <div className="max-w-7xl mx-auto">
            {safeData.whyHeading && (
              <h2 className="text-3xl font-bold mb-6">{safeData.whyHeading}</h2>
            )}

            {safeData.whyDescription && (
              <div className="text-lg mb-4 whitespace-pre-wrap">
                {safeData.whyDescription}
              </div>
            )}
          </div>
        </section>
      )}

      <section className="mt-4  p-4 rounded-xl text-center">
        <h3 className="text-xl font-semibold mb-3">
          So why wait? To avail a Free Trial Class for AMC Test Prep
        </h3>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-lg transition"
          >
            CLICK HERE
          </button>
        </div>
      </section>
    </div>
  );
};

export default AmcTestPrep;
