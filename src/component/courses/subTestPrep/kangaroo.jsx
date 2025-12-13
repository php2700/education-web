
import React, { useEffect, useState } from "react";
import axios from "axios";
import bgImage from "../../../assets/Elaback.png"; 
import { useNavigate } from "react-router-dom";


const MathKangarooTestPrep = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // --- API Call ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_URL}api/user/math-kangaroo-test`);
        
        // Data Validation
        if (response.data && response.data.data) {
          setData(response.data.data);
        } else {
          setData(null);
        }
      } catch (err) {
        console.error("Error fetching Math Kangaroo data:", err);
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
    <div  
        style={{ backgroundImage: `url(${bgImage})` }} 
        className="w-full bg-white text-gray-800" 
        id='kangaroo'
    >

      {/* HERO SECTION */}
      {/* Background color aur Button hamesha rahenge */}
      <section className=" pt-12 px-4">
        <div className="max-w-7xl mx-auto ">
          
          {/* Title: Sirf tab dikhega jab data ho */}
          {safeData.heroTitle && (
              <h1 className="text-4xl text-center md:text-5xl font-bold mb-6">
                {safeData.heroTitle}
              </h1>
          )}

          {/* Description: Sirf tab dikhega jab data ho */}
          {safeData.heroDescription && (
              <p className="text-lg md:text-xl max-w-7xl mx-auto mb-8 whitespace-pre-wrap">
                {safeData.heroDescription}
              </p>
          )}

         <section className="mt-4  p-4 rounded-xl text-center">
            <h3 className="text-xl font-semibold mb-3">
            So why wait? To avail a Free Trial Class for Math Kangaroo Test 
            </h3>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold transition"
              >
                CLICK HERE
              </button>
            </div>
          </section>
        </div>
      </section>

      {/* TEST STRUCTURE */}
      {(safeData.structureHeading || safeData.structureDescription) && (
        <section className="py-6 px-4">
            <div className="max-w-7xl mx-auto">
            {safeData.structureHeading && (
                <h2 className="text-3xl font-bold mb-6">
                    {safeData.structureHeading}
                </h2>
            )}
            
            {safeData.structureDescription && (
                <div className="text-lg mb-4 whitespace-pre-wrap">
                    {safeData.structureDescription}
                </div>
            )}
            </div>
        </section>
      )}

      {/* FEATURES */}
      {(safeData.featuresHeading || (safeData.featuresList && safeData.featuresList.length > 0)) && (
        <section className="bg-[#F0F8FF] py-16 px-4">
            <div className="max-w-7xl mx-auto">
            
            {safeData.featuresHeading && (
                <h2 className="text-3xl font-bold mb-6">
                    {safeData.featuresHeading}
                </h2>
            )}

            {safeData.featuresList && safeData.featuresList.length > 0 && (
                <ul className="list-disc pl-6 space-y-3 text-lg">
                    {safeData.featuresList.map((item, index) => (
                        item ? <li key={index}>{item}</li> : null
                    ))}
                </ul>
            )}
            </div>
        </section>
      )}

      {/* GENERAL RULES */}
      {(safeData.rulesHeading || (safeData.rulesList && safeData.rulesList.length > 0)) && (
        <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
            
            {safeData.rulesHeading && (
                <h2 className="text-3xl font-bold mb-6">
                    {safeData.rulesHeading}
                </h2>
            )}

         {safeData?.rulesList && safeData.rulesList.length > 0 && (
  <ul className="list-disc pl-6 space-y-2 text-lg">
    {safeData.rulesList.map((item, index) => (
      <li key={index}>
        <div className="font-semibold">{item.type}</div>

        {item.subpoints?.length > 0 && (
          <ul className="list-circle pl-6 mt-1 space-y-1">
            {item.subpoints.map((ele, i) => (
              <li key={i}>{ele}</li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
)}

            </div>
        </section>
      )}

      {/* SCORING */}
      {(safeData.scoringHeading || safeData.scoringDescription) && (
        <section className="bg-[#F0F8FF] py-16 px-4">
            <div className="max-w-7xl mx-auto">
            
            {safeData.scoringHeading && (
                <h2 className="text-3xl font-bold mb-6">
                    {safeData.scoringHeading}
                </h2>
            )}

            {safeData.scoringDescription && (
                <div className="text-lg mb-4 whitespace-pre-wrap">
                    {safeData.scoringDescription}
                </div>
            )}
            </div>
        </section>
      )}
    <section className="mt-4  p-4 rounded-xl text-center">
            <h3 className="text-xl font-semibold mb-3">
            So why wait? To avail a Free Trial Class for Math Kangaroo Test 
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

export default MathKangarooTestPrep;