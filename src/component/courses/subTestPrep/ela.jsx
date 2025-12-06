// // ElaPage.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AccordionItem = ({ title, children }) => {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="border-b last:border-b-0">
//       <button
//         onClick={() => setOpen((s) => !s)}
//         className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50"
//         aria-expanded={open}
//       >
//         <span className="font-semibold text-gray-800">{title}</span>
//         <span className="text-gray-500">{open ? "−" : "+"}</span>
//       </button>

//       {open && <div className="p-4 bg-gray-50 text-gray-700">{children}</div>}
//     </div>
//   );
// };

// const ElaPage = () => {
//   const navigate = useNavigate();

//   return (
//     <main className="bg-white min-h-screen py-12 px-4" id='ela'>
//       <div className="max-w-7xl mx-auto">

//         {/* Hero */}
//         <header className="text-center mb-12">
//           <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
//             ALL YOU NEED TO KNOW ABOUT ELA
//           </h1>
//           <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
//             At GGES, ELA is tutored by expert teachers who have extensive experience in
//             ELA test preparation. We build a strong language foundation so students can
//             read, write and think critically with confidence.
//           </p>

//           <div className="mt-6 flex justify-center">
//             <button
//               onClick={() => navigate("/free-trial")}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
//             >
//               Get Free Trial Class
//             </button>
//           </div>
//         </header>

//         {/* Main grid */}
//         <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">

//           {/* Left column - primary content */}
//           <article className="lg:col-span-2 space-y-8">

//             {/* Who takes this test */}
//             <section className="prose prose-lg max-w-none">
//               <h2>Who takes this test?</h2>
//               <p>
//                 Students in grades <strong>3–10</strong> take the State English Language Arts (ELA) test every
//                 spring. These assessments measure the <strong>Common Core Learning Standards (CCLS)</strong>.
//               </p>

//               <p>
//                 An ELA test is a standardized assessment measuring proficiency in reading,
//                 writing, listening, speaking and language skills. Tests typically include passages
//                 followed by multiple-choice, short-answer and essay prompts to evaluate comprehension,
//                 analysis, and writing ability. Results help teachers identify strengths and gaps for
//                 targeted instruction and college/career readiness.
//               </p>
//             </section>

//             {/* What is on the test */}
//             <section className="bg-white p-6 rounded-xl shadow-sm">
//               <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is on the test?</h2>

//               <h3 className="font-medium text-gray-800 mb-2">Core components & formats</h3>
//               <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
//                 <li>
//                   <strong>Question types:</strong> Multiple-choice (selected-response), short-answer,
//                   and long-form essays that require textual analysis and evidence.
//                 </li>
//                 <li>
//                   <strong>Passage analysis:</strong> Fiction, nonfiction, and sometimes multimedia
//                   (video/audio). Students must draw evidence from passages to support answers.
//                 </li>
//                 <li>
//                   <strong>Skills assessed:</strong> Reading comprehension, literary analysis, vocabulary,
//                   grammar, and evidence-based writing.
//                 </li>
//               </ul>

//               <h3 className="font-medium text-gray-800 mb-2">Test administration</h3>
//               <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                 <li>
//                   <strong>Structure:</strong> Tests may be divided into parts or units and administered
//                   in one session or across multiple days.
//                 </li>
//                 <li>
//                   <strong>Format:</strong> Paper-based or computer-based. Some online administrations
//                   can be adaptive (difficulty adjusts based on responses).
//                 </li>
//                 <li>
//                   <strong>Scoring:</strong> Combined scoring across sections; written responses are
//                   often evaluated with specific rubrics.
//                 </li>
//               </ul>
//             </section>

//             {/* Preparation */}
//             <section className="bg-white p-6 rounded-xl shadow-sm">
//               <h2 className="text-2xl font-semibold text-gray-900 mb-4">Preparation</h2>

//               <div className="grid gap-4 md:grid-cols-3">
//                 <div>
//                   <h4 className="font-semibold text-gray-800">Reading practice</h4>
//                   <p className="text-gray-700 text-sm">
//                     Read a variety of genres to improve comprehension and exposure to devices.
//                   </p>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold text-gray-800">Writing practice</h4>
//                   <p className="text-gray-700 text-sm">
//                     Practice well-structured essays using evidence from passages to support claims.
//                   </p>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold text-gray-800">Grammar & vocabulary</h4>
//                   <p className="text-gray-700 text-sm">
//                     Build grammar fundamentals and vocabulary to perform strongly on conventions sections.
//                   </p>
//                 </div>
//               </div>
//             </section>

//             {/* More details & small FAQ accordion */}
//             <section className="bg-white p-6 rounded-xl shadow-sm">
//               <h2 className="text-2xl font-semibold text-gray-900 mb-4">More details</h2>

//               <p className="text-gray-700 mb-4">
//                 The ELA is designed to assess a student’s ability to analyze texts and write
//                 evidence-based responses. Teachers use ELA results to tailor instruction and track
//                 growth over time.
//               </p>

//               <div className="mt-4">
//                 <h3 className="font-semibold mb-3 text-gray-800">Frequently asked</h3>

//                 <div className="border rounded-lg overflow-hidden">
//                   <AccordionItem title="How should I prepare my child for ELA?">
//                     Focus on daily reading, writing practice, reviewing rubrics, and timed essay practice.
//                   </AccordionItem>

//                   <AccordionItem title="What types of passages appear on the test?">
//                     Passages include fiction, nonfiction, informational, and sometimes multimedia sources.
//                   </AccordionItem>

//                   <AccordionItem title="Is the test adaptive?">
//                     Some computer-based versions can use adaptive technology. Check your district's administration.
//                   </AccordionItem>
//                 </div>
//               </div>
//             </section>

//           </article>

//           {/* Right column - quick facts card */}
//           <aside className="space-y-6">
//             <div className="sticky top-24">
//               <div className="bg-blue-50 p-6 rounded-xl shadow-sm border">
//                 <h3 className="text-lg font-bold text-blue-800 mb-3">Quick Facts</h3>
//                 <ul className="text-gray-700 space-y-2">
//                   <li><strong>Grades:</strong> 3–10</li>
//                   <li><strong>Standards:</strong> Common Core (CCLS)</li>
//                   <li><strong>Question types:</strong> MCQ, short answer, essay</li>
//                   <li><strong>Format:</strong> Paper or computer</li>
//                 </ul>
//               </div>

//               <div className="bg-white p-6 rounded-xl shadow-sm border mt-6">
//                 <h4 className="font-semibold text-gray-800 mb-3">Scoring & Rubrics</h4>
//                 <p className="text-gray-700 text-sm">
//                   Essays and short responses are scored with rubrics; combined scores inform instruction.
//                 </p>
//               </div>

//               <div className="mt-6 text-center">
//                 <button
//                   onClick={() => navigate("/free-trial")}
//                   className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition"
//                 >
//                   Book Free Trial Class
//                 </button>
//               </div>
//             </div>
//           </aside>
//         </section>

//         {/* Footer CTA */}
//         <section className="mt-12 bg-gray-50 p-8 rounded-xl text-center">
//           <h3 className="text-xl font-bold mb-3">Ready to improve ELA skills?</h3>
//           <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
//             Sign up for a free trial class and let our expert tutors build your child's reading and writing confidence.
//           </p>

//           <div className="flex justify-center gap-4">
//             <button
//               onClick={() => navigate("/free-trial")}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
//             >
//               Free Trial Class
//             </button>

//             <a
//               href="/contact"
//               className="inline-flex items-center justify-center px-6 py-3 border rounded-lg text-gray-800 hover:bg-gray-100 transition"
//             >
//               Contact Us
//             </a>
//           </div>
//         </section>

//       </div>
//     </main>
//   );
// };

// export default ElaPage;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bgImage from "../../../assets/Elaback.png"; 

// Accordion Component (Same as before)
const AccordionItem = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b last:border-b-0">
      <button
        onClick={() => setOpen((s) => !s)}
        className="w-full flex justify-between items-center p-4 text-left bg-white hover:bg-gray-50"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-800">{title}</span>
        <span className="text-gray-500">{open ? "−" : "+"}</span>
      </button>

      {open && <div className="p-4 bg-gray-50 text-gray-700 whitespace-pre-line">{children}</div>}
    </div>
  );
};

const ElaPage = () => {
  const navigate = useNavigate();

  // --- State Management ---
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- API Call ---
  useEffect(() => {
    const fetchElaData = async () => {
      try {
        // Construct URL: VITE_APP_URL ends with '/' so add 'api/user/ela-test'
        const response = await axios.get(`${import.meta.env.VITE_APP_URL}api/user/ela-test`);
        
        console.log("ELA API Data:", response.data);

        if (response.data) {
          // Admin panel usually wraps data in 'data' key
          let apiData = response.data.data || response.data;

          // If array, take first item, else take object
          if (Array.isArray(apiData)) {
            setData(apiData[0]);
          } else {
            setData(apiData);
          }
        }
        setLoading(false);
      } catch (err) {
        console.error("Error fetching ELA data:", err);
        setError("Failed to load content.");
        setLoading(false);
      }
    };

    fetchElaData();
  }, []);

  // --- Loading & Error Handling ---
  if (loading) return <div className="text-center py-20 font-bold text-gray-500">Loading ELA Prep...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

  // --- Safe Data (Validation) ---
  const safeData = data || {};

  // Helper to render points that might contain HTML (like <strong>) from admin
  const renderHTMLPoint = (text) => {
    if (!text) return null;
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

  return (
    <main  className="min-h-screen py-12 px-4 relative bg-cover bg-center bg-fixed" 
  id='ela'
  style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="max-w-7xl mx-auto">

        {/* ===== 1. HERO SECTION ===== */}
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 uppercase">
            {/* Key: heroTitle */}
            {safeData.heroTitle || "ALL YOU NEED TO KNOW ABOUT ELA"}
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto whitespace-pre-line">
            {/* Key: heroDescription */}
            {safeData.heroDescription || 
              "At GGES, ELA is tutored by expert teachers who have extensive experience in ELA test preparation."}
          </p>

          <div className="mt-6 flex justify-center">
            <button
              onClick={() => navigate("/free-trial")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Get Free Trial Class
            </button>
          </div>
        </header>

        {/* Main Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left column - primary content */}
          <article className="lg:col-span-2 space-y-8">

            {/* ===== 2. INTRO SECTION ("Who takes this test?") ===== */}
            <section className="prose prose-lg max-w-none">
              <h2>
                {/* Key: introHeading */}
                {safeData.introHeading || "Who takes this test?"}
              </h2>
              
              {/* Key: introDescription */}
              {safeData.introDescription ? (
                  <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                      {safeData.introDescription}
                  </div>
              ) : (
                  // Fallback
                  <>
                    <p>
                        Students in grades <strong>3–10</strong> take the State English Language Arts (ELA) test.
                    </p>
                    <p>
                        An ELA test is a standardized assessment measuring proficiency in reading, writing, listening, speaking and language skills.
                    </p>
                  </>
              )}
            </section>

            {/* ===== 3. WHAT IS ON THE TEST ===== */}
            <section className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {/* Key: testSectionHeading */}
                {safeData.testSectionHeading || "What is on the test?"}
              </h2>

              {/* Sub-section: Core components */}
              <h3 className="font-medium text-gray-800 mb-2">
                {/* Key: componentsHeading */}
                {safeData.componentsHeading || "Core components & formats"}
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                {/* Key: componentsPoints */}
                {safeData.componentsPoints && safeData.componentsPoints.length > 0 ? (
                    safeData.componentsPoints.map((pt, i) => (
                        pt && <li key={i}>{renderHTMLPoint(pt)}</li>
                    ))
                ) : (
                    <li><strong>Question types:</strong> Multiple-choice, short-answer, and essays.</li>
                )}
              </ul>

              {/* Sub-section: Administration */}
              <h3 className="font-medium text-gray-800 mb-2">
                 {/* Key: administrationHeading */}
                 {safeData.administrationHeading || "Test administration"}
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {/* Key: administrationPoints */}
                {safeData.administrationPoints && safeData.administrationPoints.length > 0 ? (
                    safeData.administrationPoints.map((pt, i) => (
                        pt && <li key={i}>{renderHTMLPoint(pt)}</li>
                    ))
                ) : (
                    <li><strong>Structure:</strong> Tests may be administered in one session or across multiple days.</li>
                )}
              </ul>
            </section>

            {/* ===== 4. PREPARATION ===== */}
            <section className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                 {/* Key: preparationHeading */}
                 {safeData.preparationHeading || "Preparation"}
              </h2>

              <div className="grid gap-4 md:grid-cols-3">
                {/* Key: preparationCards */}
                {safeData.preparationCards && safeData.preparationCards.length > 0 ? (
                    safeData.preparationCards.map((card, i) => (
                        <div key={i}>
                            <h4 className="font-semibold text-gray-800">{card.title}</h4>
                            <p className="text-gray-700 text-sm whitespace-pre-line">
                                {card.description}
                            </p>
                        </div>
                    ))
                ) : (
                    // Fallback
                    <div>
                        <h4 className="font-semibold text-gray-800">Reading practice</h4>
                        <p className="text-gray-700 text-sm">Read a variety of genres.</p>
                    </div>
                )}
              </div>
            </section>

            {/* ===== 5. MORE DETAILS & FAQ ===== */}
            <section className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                 {/* Key: moreDetailsHeading */}
                 {safeData.moreDetailsHeading || "More details"}
              </h2>

              <p className="text-gray-700 mb-4 whitespace-pre-line">
                 {/* Key: moreDetailsDescription */}
                 {safeData.moreDetailsDescription || "The ELA is designed to assess a student’s ability to analyze texts."}
              </p>

              <div className="mt-4">
                <h3 className="font-semibold mb-3 text-gray-800">
                     {/* Key: faqHeading */}
                     {safeData.faqHeading || "Frequently asked"}
                </h3>

                <div className="border rounded-lg overflow-hidden">
                  {/* Key: faqList */}
                  {safeData.faqList && safeData.faqList.length > 0 ? (
                      safeData.faqList.map((faq, index) => (
                        <AccordionItem key={index} title={faq.question}>
                            {faq.answer}
                        </AccordionItem>
                      ))
                  ) : (
                      <AccordionItem title="How should I prepare?">
                        Focus on daily reading and writing practice.
                      </AccordionItem>
                  )}
                </div>
              </div>
            </section>

          </article>

          {/* ===== SIDEBAR (Right Column) ===== */}
          <aside className="space-y-6">
            <div className="sticky top-24">
              
              {/* Quick Facts */}
              <div className="bg-blue-50 p-6 rounded-xl shadow-sm border">
                <h3 className="text-lg font-bold text-blue-800 mb-3">
                     {/* Key: quickFactsHeading */}
                     {safeData.quickFactsHeading || "Quick Facts"}
                </h3>
                <ul className="text-gray-700 space-y-2">
                  {/* Key: quickFactsList */}
                  {safeData.quickFactsList && safeData.quickFactsList.length > 0 ? (
                      safeData.quickFactsList.map((fact, i) => (
                          fact && <li key={i} dangerouslySetInnerHTML={{ __html: fact }} />
                      ))
                  ) : (
                      <li><strong>Grades:</strong> 3–10</li>
                  )}
                </ul>
              </div>

              {/* Scoring */}
              <div className="bg-white p-6 rounded-xl shadow-sm border mt-6">
                <h4 className="font-semibold text-gray-800 mb-3">
                     {/* Key: scoringHeading */}
                     {safeData.scoringHeading || "Scoring & Rubrics"}
                </h4>
                <p className="text-gray-700 text-sm whitespace-pre-line">
                     {/* Key: scoringDescription */}
                     {safeData.scoringDescription || "Essays and short responses are scored with rubrics."}
                </p>
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={() => navigate("/free-trial")}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition"
                >
                  Book Free Trial Class
                </button>
              </div>
            </div>
          </aside>
        </section>

        {/* Footer CTA */}
        <section className="mt-12 bg-gray-50 p-8 rounded-xl text-center">
          <h3 className="text-xl font-bold mb-3">Ready to improve ELA skills?</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Sign up for a free trial class and let our expert tutors build your child's reading and writing confidence.
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate("/free-trial")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Free Trial Class
            </button>

            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border rounded-lg text-gray-800 hover:bg-gray-100 transition"
            >
              Contact Us
            </a>
          </div>
        </section>

      </div>
    </main>
  );
};

export default ElaPage;