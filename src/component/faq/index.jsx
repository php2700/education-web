import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export const Faqs = () => {
    const headingRef=useRef()
  const location=useLocation()

  const faqs = [
    {
      question: "Why should we choose you?",
      answer: (
        <>
          <p>
           We are one to one tutoring company which provides best and innovative education. Specializing in Test Preps and Subject tutoring like English, Mathematics and Science we have a safe and secure environment to work with. Apart from aforesaid following are advantages in choosing us:
          </p>

          <ul className="list-disc ml-6 mt-3 space-y-1">
            <li>You will build confidence in communicating with a real person.</li>
            <li>You will be paced in a way that is appropriate for you.</li>
            <li>⦁	You will be accountable to a skilled professional.</li>
            <li>You will always have a consistent mentor to clarify doubts.</li>
          </ul>
          <p className="mt-3">
            For more details{" "}
            <Link to="/about" className="text-blue-600 font-semibold underline">
              click here
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      question: "How different is Online Tutoring from Regular Tutoring?",
      answer: (
        <>
          <p>
           With the growing need of online services Online Tutoring is coming out as a better option than a regular one. It is no less than a regular tutoring where in you are tutored in relatively easy and safe environment without any hassles of reaching your regular tutoring destinations. This saves your time as well as money. Also our interactive applications makes the experience no less than a regular one with the comfort of taking lessons from home or any place with ease of your suitable timing with a dedicated tutor.

          </p>
        </>
      ),
    },
    {
      question: "What do I need to take sessions from you?",
      answer: (
        <>
          <p>
         Only what you need is just an internet connection and a laptop. Having a Pen tablet is an added advantage.
          </p>
          <p className="mt-3">
            For more details{" "}
            <Link to="/" className="text-blue-600 font-semibold underline">
              click here
            </Link>
            .
          </p>
        </>
      ),
    },
    {
      question: "How to schedule a Free Demo Session?",
      answer: (
        <>
          <p>
            You can call or WhatsApp us at{" "}
            <span className="font-semibold">+91-886-029-6060</span>.  
            Or fill out the{" "}
            <Link to="/contact" className="text-blue-600 font-semibold underline">
              Contact Form
            </Link>{" "}
            and we will connect with you quickly.
          </p>
        </>
      ),
    },
    {
      question: "How to pay?",
      answer: (
        <>
          <p>
            We send you a secure payment link once your requested slots are
            confirmed.
          </p>
          <p className="mt-2">
            You can also contact us on WhatsApp at{" "}
            <span className="font-semibold">+91-886-029-6060</span> or email us at{" "}
            <span className="font-semibold">info@mygges.com</span>.
          </p>
        </>
      ),
    },
  ];
  const [faqData, setFaqData] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/faq`
      );
      setFaqData(res?.data?.data);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error?.message ||
          "something went wrong",
        { position: "top-right" }
      );
    }
  };

  useEffect(()=>{
    getData()
  },[])


useEffect(()=>{
  if(headingRef?.current){
    headingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }
},[location?.pathname])

  return (
    <div className="bg-[#F8FBFF] min-h-screen py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 ref={headingRef} className="text-3xl md:text-4xl font-bold text-center text-[#0E1D3E] mb-12">
          Frequently Asked Questions
        </h1>

        {/* FAQ Accordion */}
      <div className="space-y-6">
  {faqData.map((faq, index) => (
    <details
      key={faq._id || index}
      className="group bg-white shadow-md rounded-xl p-6 cursor-pointer"
    >
      {/* Title */}
      <summary className="flex justify-between items-center text-xl font-semibold text-[#0572E6]">
        {faq.title}
        <span className="transition-transform duration-300 group-open:rotate-180">
          ▼
        </span>
      </summary>

      {/* Description */}
      {faq.description && (
        <div className="mt-4 text-gray-700 text-lg leading-relaxed" dangerouslySetInnerHTML={{__html:faq?.description}}>
        </div>
      )}

      {/* Points List */}
      {faq.points?.length > 0 && (
        <ul className="mt-3 list-disc ml-6 text-gray-700 text-lg space-y-1">
          {faq.points.map((ele, i) => (
            <li key={i}>{ele}</li>
          ))}
        </ul>
      )}
    </details>
  ))}
</div>


        {/* More Queries Section */}
        <p className="text-center text-lg mt-10 text-gray-600">
          For more queries{" "}
          <Link
            to="/contact"
            className="text-blue-600 font-semibold underline"
          >
            click here
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

