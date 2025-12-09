import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

export const PrivacyPolicy = () => {
  const headingRef=useRef()
  const location=useLocation()

  const [terms, setTerms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_URL}api/user/terms`);
        if (response.data.success) {
          setTerms(response.data.data);
        }
      } catch (err) {
        console.error("Error fetching terms:", err);
        setError("Failed to load Terms & Services.");
      } finally {
        setLoading(false);
      }
    };
    fetchTerms();
  }, []);

  const renderTextWithLinks = (text) => {
    if (!text) return null;
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;
    const parts = text.split(emailRegex);
    return parts.map((part, index) => {
      if (part.match(emailRegex)) {
        return <a key={index} href={`mailto:${part}`} className="text-blue-600 underline">{part}</a>;
      }
      return part;
    });
  };

  useEffect(()=>{
    if(headingRef?.current){
      headingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  },[location?.pathname])

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-3xl shadow-xl">
        <header ref={headingRef} className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
          Privacy Policy
          </h1>
        </header>

        {loading ? (
          <div className="space-y-6 animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 py-10"><p>{error}</p></div>
        ) : (
          <section className="space-y-8 text-gray-700 leading-relaxed">
            
            {terms.length === 0 && (
              <p className="text-center text-gray-500">No terms available.</p>
            )}

            {terms.map((term) => (
              <div key={term._id} className="border-b border-gray-100 pb-6 last:border-0">
                
                {/* ---------- MAIN SECTION TITLE ---------- */}
                {term.title && (
                  <h3 className="text-xl font-semibold text-gray-800 uppercase mb-3">
                    {/* {term.title} */}
                  </h3>
                )}

                {/* ---------- MAIN SECTION DESCRIPTION ---------- */}
                {term.description && (
                  <div className="mb-4 text-gray-600 whitespace-pre-line">
                    {renderTextWithLinks(term.description)}
                  </div>
                )}

                {/* ---------- BULLET POINTS (Updated Logic) ---------- */}
                {term.points && term.points.length > 0 && (
                  <div className="space-y-5 mt-4"> 
                    {term.points.map((point, index) => (
                      <div key={index} className="flex flex-col">
                         
                         {/* 1. Subtitle (Heading) - Ab ye alag line me aayega */}
                         {point.subtitle && (
                           <span className="text-lg font-semibold text-gray-800 mb-2 block">
                             {point.subtitle}
                           </span>
                         )}

                         {/* 2. Description - Ye next line me aayega */}
                         <div className="text-gray-700 leading-relaxed">
                           {renderTextWithLinks(point.desc)}
                         </div>

                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        <footer className="text-sm text-gray-500 mt-12 border-t pt-6 text-center">
          <p>© {new Date().getFullYear()} GGES. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

