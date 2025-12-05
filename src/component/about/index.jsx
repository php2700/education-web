import React, { useEffect, useState ,useRef } from "react";
import backgroundImage from "../../assets/price-bg.png";
import aboutImg from "../../assets/about.jpg";
import { useLocation } from "react-router-dom";

// Sample images (remove if not needed)
import team1 from "../../assets/michel.png";
import team2 from "../../assets/michel.png";
import team3 from "../../assets/michel.png";
import axios from "axios";
import { toast } from "react-toastify";

export const About = () => {
  
  const [aboutData, setAboutData] = useState([]);
    const headingRef = useRef(null); // Reference create kiya
  const { pathname } = useLocation(); // URL track karne ke liye

  const getData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/about`
      );
      setAboutData(res?.data?.data);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error?.message ||
          "something went wrong",
        { position: "top-right" }
      );
    }
  };

  useEffect(() => {
    getData();
  }, []);
   useEffect(() => {
    if (headingRef.current) {
      // Ye function page ko scroll karke heading par le aayega
      headingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]); // Jab bhi URL badlega ye chalega
  return (
    <>
      {/* HERO SECTION */}
      <div
        className="relative bg-[#F0F8FF] py-20 px-6 sm:px-12 lg:px-20"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p  ref={headingRef} className="text-3xl md:text-4xl font-bold  text-center mb-16">
          About Us
        </p>
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src={`${import.meta.env.VITE_APP_URL}${aboutData?.image}`}
              alt="Tutoring"
              className="rounded-3xl shadow-2xl w-full max-w-xl hover:scale-[1.07] transition-all duration-700"
            />
          </div>

          {/* ABOUT CONTENT */}
          <div className="space-y-6">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-[#0E1D3E] leading-tight">
              Personalized Online <br />
              <span className="text-[#0572E6]">Tutoring Anytime, Anywhere</span>
            </h1>
            {aboutData?.description?.slice(0, 2)?.map((ele) => (
              <p className="text-gray-700 text-lg leading-relaxed">{ele}</p>
            ))}
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto  mt-10 items-center">
          {aboutData?.description?.slice(2).map((ele) => (
            <p className="text-gray-700 text-lg leading-relaxed mb-2">{ele}</p>
          ))}
        </div>
      </div>

      {/* WHY US SECTION */}
      <section className="py-10 bg-white px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Us?
          </h2>
          {aboutData?.whyUsDescription?.map((ele) => (
            <p className="text-gray-700 text-lg my-4 leading-relaxed">{ele}</p>
          ))}
        </div>
      </section>

      {/* HOW ARE WE DIFFERENT */}
      <section className="py-24 bg-[#F8FBFF] px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How Are We Diffrent?
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg leading-relaxed">
            {aboutData?.howDiffrentDescription?.map((ele) => (
              <div className="p-6 bg-white shadow-lg rounded-xl">• {ele}</div>
            ))}
          </div>

          {/* SAFETY SECTION */}
          <div className="mt-20">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Safety
            </h3>

            <div className="grid md:grid-cols-2 gap-10">
              {aboutData?.safetyDescription?.map((ele) => (
                <div className="p-6 bg-white shadow-lg rounded-xl text-gray-700 text-lg leading-relaxed">
                  {ele}
                </div>
              ))}
            </div>
          </div>

          {/* TUTORS SECTION */}
          <div className="mt-20">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Tutors
            </h3>

            <div className="bg-white p-6 shadow-lg rounded-xl text-gray-700 text-lg leading-relaxed">
              {aboutData?.tutorDescription}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

{
  /* <div className="relative max-w-7xl mx-auto mt-20 py-10 px-6 bg-white rounded-3xl shadow-lg border border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-10">
          <div>
            <p className="text-sm text-gray-500 mb-1">Years Experience</p>
            <h2 className="text-3xl font-bold text-[#0E1D3E]">10+ Years</h2>
          </div>

          <div className="border-l border-gray-300 pl-6 md:pl-4">
            <p className="text-sm text-gray-500 mb-1">Expert Tutors</p>
            <h2 className="text-3xl font-bold text-[#0E1D3E]">250+</h2>
          </div>

          <div className="border-l border-gray-300 pl-6 md:pl-4">
            <p className="text-sm text-gray-500 mb-1">Awards & Achievements</p>
            <h2 className="text-3xl font-bold text-[#0E1D3E]">50+</h2>
          </div>

          <div className="border-l border-gray-300 pl-6 md:pl-4">
            <p className="text-sm text-gray-500 mb-1">Happy Students</p>
            <h2 className="text-3xl font-bold text-[#0E1D3E]">10,000+</h2>
          </div>
        </div>
      </div> */
}
