import React, { useEffect, useState } from "react";
import axios from "axios";
import backgroundImage from "../../../assets/math-bg.png";

const SsatTestPrep = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSsatData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_URL}api/user/ssat-test`);
        
        if (response.data) {
          let apiData = response.data.data || response.data;
          
          if (apiData && Object.keys(apiData).length > 0) {
            if (Array.isArray(apiData)) {
              setData(apiData[0]);
            } else {
              setData(apiData);
            }
          } else {
            setData(null);
          }
        } else {
          setData(null);
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching SSAT data:", err);
        setError("Failed to load SSAT Data.");
        setLoading(false);
      }
    };

    fetchSsatData();
  }, []);

  if (loading) return <div className="text-center py-20 font-bold text-gray-500">Loading...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

  // Agar data null hai toh empty object use karein taaki crash na ho, 
  // lekin page render hoga taaki buttons dikh sakein.
  const safeData = data || {};

  return (
    <div className="w-full bg-[#F0F8FF] py-12 px-4 md:px-16" id='ssat'
      style={{
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                }}
    >
       <div className="max-w-7xl mx-auto">
      
      {/* ===== HEADER SECTION ===== */}
      <div className=" mb-10">
        {/* Title aur Description sirf tab dikhenge agar data hai */}
        {safeData.heroTitle && (
            <h1 className="text-3xl text-center md:text-5xl font-bold text-gray-800 mb-4">
              {safeData.heroTitle}
            </h1>
        )}
        
        {safeData.heroDescription && (
            <p className="text-gray-600 text-sm md:text-base max-w-7xl mx-auto whitespace-pre-line">
              {safeData.heroDescription}
            </p>
        )}

        {/* BUTTON: Ye hamesha dikhega chahe data ho ya na ho */}
        <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Click here for Free Trial Class
        </button>
      </div>


      {/* ===== ABOUT SSAT ===== */}
      {(safeData.aboutHeading || safeData.aboutDescription) && (
        <div className="mt-16">
          {safeData.aboutHeading && (
            <h2 className="text-3xl font-bold mb-6 text-center">
                {safeData.aboutHeading}
            </h2>
          )}

          {safeData.aboutDescription && (
            <p className="text-gray-700 leading-relaxed max-w-7xl mx-auto mb-6  whitespace-pre-line">
              {safeData.aboutDescription}
            </p>
          )}
        </div>
      )}


      {/* ===== LEVELS SECTION ===== */}
      {/* Sirf tab dikhega agar levels array me data hai */}
      {safeData.levels && safeData.levels.length > 0 && (
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {safeData.levels.map((level, index) => (
                <div key={index} className="bg-[#F0F8FF] p-6 rounded-xl shadow-xl">
                    {level.title && (
                        <h3 className="text-xl font-bold mb-3 text-blue-700">{level.title}</h3>
                    )}
                    {level.description && (
                        <p className="text-gray-700 whitespace-pre-line">
                            {level.description}
                        </p>
                    )}
                </div>
            ))}
        </div>
      )}


      {/* ===== ISEE vs SSAT ===== */}
      {(safeData.comparisonHeading || (safeData.comparisonPoints && safeData.comparisonPoints.length > 0)) && (
        <div className="mt-16 bg-[#F0F8FF] p-8 rounded-xl shadow-xl">
            {safeData.comparisonHeading && (
                <h2 className="text-3xl font-bold text-center mb-6">
                {safeData.comparisonHeading}
                </h2>
            )}

            {safeData.comparisonPoints && safeData.comparisonPoints.length > 0 && (
                <ul className="list-disc list-inside text-gray-700 max-w-5xl mx-auto space-y-2">
                {safeData.comparisonPoints.map((point, index) => (
                    point ? <li key={index}>{point}</li> : null
                ))}
                </ul>
            )}
        </div>
      )}


      {/* ===== SCORING SECTION ===== */}
      {(safeData.scoringHeading || safeData.scoringFooter || (safeData.scoringCards && safeData.scoringCards.length > 0)) && (
        <div className="mt-16">
            {safeData.scoringHeading && (
                <h2 className="text-3xl font-bold text-center mb-8">
                {safeData.scoringHeading}
                </h2>
            )}

            {safeData.scoringCards && safeData.scoringCards.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {safeData.scoringCards.map((card, index) => (
                    <div key={index} className="border p-6 rounded-lg shadow">
                        {card.title && <h3 className="text-xl font-bold mb-3 text-blue-700">{card.title}</h3>}
                        {card.content && <p className="whitespace-pre-line">{card.content}</p>}
                    </div>
                ))}
                </div>
            )}

            {safeData.scoringFooter && (
                <p className="text-center text-gray-600 mt-6 max-w-4xl mx-auto">
                {safeData.scoringFooter}
                </p>
            )}
        </div>
      )}


      {/* ===== SSAT TEST STRUCTURE TABLES ===== */}
      {(safeData.structureHeading || (safeData.middleTable && safeData.middleTable.length > 0) || (safeData.upperTable && safeData.upperTable.length > 0)) && (
        <div className="mt-16">
            {safeData.structureHeading && (
                <h2 className="text-3xl font-bold text-center mb-6">
                    {safeData.structureHeading}
                </h2>
            )}

            {/* Middle Level Table */}
            {safeData.middleTable && safeData.middleTable.length > 0 && (
                <>
                    <h3 className="text-2xl font-bold mb-3 mt-8">Middle Level (5th – 7th)</h3>
                    <div className="overflow-x-auto mb-10">
                    <table className="w-full border text-left">
                        <thead className="bg-blue-600 text-white">
                        <tr>
                            <th className="p-3 border">Section</th>
                            <th className="p-3 border">Time</th>
                            <th className="p-3 border">Questions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {safeData.middleTable.map((row, index) => (
                                <tr key={index}>
                                    <td className="p-3 border">{row.section}</td>
                                    <td className="p-3 border">{row.time}</td>
                                    <td className="p-3 border">{row.questions}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </>
            )}

            {/* Upper Level Table */}
            {safeData.upperTable && safeData.upperTable.length > 0 && (
                <>
                    <h3 className="text-2xl font-bold mb-3 mt-8">Upper Level (8th – 11th)</h3>
                    <div className="overflow-x-auto">
                    <table className="w-full border text-left">
                        <thead className="bg-green-600 text-white">
                        <tr>
                            <th className="p-3 border">Section</th>
                            <th className="p-3 border">Time</th>
                            <th className="p-3 border">Questions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {safeData.upperTable.map((row, index) => (
                                <tr key={index}>
                                    <td className="p-3 border">{row.section}</td>
                                    <td className="p-3 border">{row.time}</td>
                                    <td className="p-3 border">{row.questions}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                </>
            )}
        </div>
      )}

      {/* ===== FINAL CTA SECTION ===== */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold mb-4">
          Ready to start your SSAT preparation?
        </h2>
        {/* BUTTON: Ye bhi hamesha dikhega */}
        <button className="bg-red-600 text-white px-10 py-4 rounded-full text-lg hover:bg-red-700 transition">
          Click here for Free Trial Class
        </button>
      </div>
  </div>
    </div>
  );
};

export default SsatTestPrep;