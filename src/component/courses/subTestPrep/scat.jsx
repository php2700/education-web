import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ScatTestPrep = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
       const navigate = useNavigate();

  useEffect(() => {
    const fetchScatData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_APP_URL}api/user/scat-test`
        );

        let apiData = res?.data?.data || res.data;

        if (Array.isArray(apiData)) {
          setData(apiData[0] || null);
        } else {
          setData(apiData || null);
        }

        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to load SCAT content.");
        setLoading(false);
      }
    };

    fetchScatData();
  }, []);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error)
    return <div className="text-center py-20 text-red-500">{error}</div>;

  const safe = data || {};

  // Convert registerContactList (string → array)
  const contactListArray =
    typeof safe.registerContactList === "string"
      ? safe.registerContactList?.split("\n").filter(Boolean)
      : [];

  return (
    <div className="w-full bg-white text-gray-800" id="scat">
      {/* ================= HERO ================= */}
      <section className=" py-4 px-4  ">
        <div className="max-w-7xl mx-auto">
          {safe.heroTitle && (
            <h1 className="text-4xl text-center md:text-5xl font-bold mb-4 uppercase">
              {safe.heroTitle}
            </h1>
          )}

          {safe.heroDescription && (
            <p className="text-lg md:text-xl mb-6 whitespace-pre-line">
              {safe.heroDescription}
            </p>
          )}

          <div className="text-gray-700 leading-7 mb-6 whitespace-pre-line">
            So why wait? To avail a Free Trial Class for SCAT Test Prep Online
            Tutoring
          </div>

          <button
            onClick={() => navigate("/free-trial")}
            className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Click Here for Free Trial Class
          </button>
        </div>
      </section>

      {/* ================= ABOUT SCAT ================= */}
      {(safe.aboutHeading ||
        safe.aboutDescription ||
        safe.versionsHeading ||
        safe.versionsList?.length > 0) && (
        <section className="py-2 px-4">
          <div className="max-w-7xl mx-auto space-y-2">
            {safe.aboutHeading && (
              <h2 className="text-3xl font-bold">{safe.aboutHeading}</h2>
            )}

            {safe.aboutDescription && (
              <p className="text-lg whitespace-pre-line">
                {safe.aboutDescription}
              </p>
            )}

            {safe.versionsHeading && (
              <h3 className="text-3xl font-bold">{safe.versionsHeading}</h3>
            )}

            {safe.versionsList?.length > 0 && (
              <ul className="list-disc pl-6  text-lg">
                {safe.versionsList.map((v, i) =>
                  v ? <li key={i}>{v}</li> : null
                )}
              </ul>
            )}
          </div>
        </section>
      )}

      {/* ================= FORMAT SECTION ================= */}
      {(safe.formatHeading ||
        safe.formatDescription ||
        safe.formatSections?.length > 0) && (
        <section className="py-4 px-4">
          <div className="max-w-7xl mx-auto space-y-4">
            {safe.formatHeading && (
              <h2 className="text-3xl font-bold">{safe.formatHeading}</h2>
            )}

            {safe.formatDescription && (
              <p className="text-lg whitespace-pre-line">
                {safe.formatDescription}
              </p>
            )}

            {safe.formatSections?.length > 0 && (
              <div className="grid md:grid-cols-2 gap-4">
                {safe.formatSections.map((sec, i) => (
                  <div
                    className="border p-6 rounded-xl shadow-sm bg-white"
                    key={i}
                  >
                    <h3 className="text-xl font-bold mb-1">{sec.title}</h3>
                    <p className="whitespace-pre-line">{sec.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ================= SCORING SECTION ================= */}
      {(safe.scoringHeading || safe.scoringLevels?.length > 0) && (
        <section className="py-4 px-4">
          <div className="max-w-7xl mx-auto space-y-10">
            {safe.scoringHeading && (
              <h2 className="text-3xl font-bold">{safe.scoringHeading}</h2>
            )}

            {safe.scoringLevels?.length > 0 && (
              <div className="grid md:grid-cols-2 gap-6">
                {safe.scoringLevels.map((lvl, i) => (
                  <div
                    key={i}
                    className="border p-6 rounded-xl shadow-sm bg-white"
                  >
                    <h3 className="text-xl font-bold mb-3">{lvl.title}</h3>
                    <p className="whitespace-pre-line">{lvl.details}</p>
                  </div>
                ))}
              </div>
            )}
            <p>
              This scaled score is based on the number of questions the student
              answers correctly out of the 50 scored questions in each section.
            </p>
          </div>
        </section>
      )}

      {/* ================= TIPS SECTION ================= */}
      {(safe.tipsHeading || safe.tipsList?.length > 0) && (
        <section className="py-4 px-4 ">
          <div className="max-w-7xl mx-auto">
            {safe.tipsHeading && (
              <h2 className="text-3xl font-bold mb-2">{safe.tipsHeading}</h2>
            )}
            <div className="mb-4">
              However, during our sessions on the SCAT test preparations, we
              equip our students by giving Tips and Tricks to answer SCAT test
              questions quickly and accurately. Still here are general tips for
              taking the SCAT test:
            </div>
            {safe.tipsList?.length > 0 && (
              <ul className="list-disc pl-6 text-lg space-y-3">
                {safe.tipsList.map((tip, i) =>
                  tip ? <li key={i}>{tip}</li> : null
                )}
              </ul>
            )}
          </div>
        </section>
      )}

      {/* ================= REGISTRATION ================= */}
      {(safe.registerHeading ||
        safe.registerSubHeading ||
        contactListArray.length > 0 ||
        safe.authHeading ||
        safe.authDescription) && (
        <section className="py-4 px-4">
          <div className="max-w-7xl mx-auto space-y-2">
            {safe.registerHeading && (
              <h2 className="text-3xl font-bold">{safe.registerHeading}</h2>
            )}

            {safe.registerSubHeading && (
              <p className="text-2xl font-bold">{safe.registerSubHeading}</p>
            )}

            {contactListArray.length > 0 && (
              <ul className="list-disc pl-2 text-lg space-y-1">
                {contactListArray.map((item, i) => (
                  <div key={i}  dangerouslySetInnerHTML={{ __html: item }}></div>
                ))}
              </ul>
            )}

            {safe.authHeading && (
              <h3 className="text-2xl font-bold">{safe.authHeading}</h3>
            )}

           {safe.authDescription && (
  <p
    className="text-lg pl-2 whitespace-pre-line"
    dangerouslySetInnerHTML={{ __html: safe.authDescription }}
  />
)}

          </div>
        </section>
      )}

   <section className="mt-12  p-8 rounded-xl text-center">
          <h3 className="text-xl font-semibold mb-3">
            So why wait? To avail a Free Trial Class for SCAT Test Prep 
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

export default ScatTestPrep;
