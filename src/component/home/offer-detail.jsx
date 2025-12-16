import React, { useEffect, useState } from "react";
import blogImg from "../../assets/slide-3.jpg";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import backgroundImage from "../../assets/work-bg.png";
import axios from "axios";
import { toast } from "react-toastify";

export const OfferDetail = () => {
  const [offerData, setOfferData] = useState();
  const { hash } = useLocation();

  // Updated educational offer data
  const { id } = useParams();
  const navigate = useNavigate();
  const offer = {
    title: "SHSAT & ISEE Premium Tutoring Program",
    description: [
      "GGES offers one of the most comprehensive and effective SHSAT and ISEE tutoring programs for students aiming for top results. Our curriculum is research-based and designed to build both foundational skills and advanced test-taking strategies.",
      "The SHSAT is transitioning into a fully digital Computer Adaptive Test (CAT) format by 2026. With this change, students now need deeper conceptual understanding and strong analytical reasoning to excel. Our updated program ensures students are fully prepared for these changes.",
      "Our expert tutors teach smart strategies, time-management techniques, and problem-solving methods that significantly improve accuracy. We help students focus on what matters most—understanding patterns, applying logic, and mastering questions under pressure.",
      "ISEE preparation at GGES is tailored for students applying to top private and independent schools. Our approach includes vocabulary strengthening, reading comprehension mastery, math concept building, and personalized feedback on essay writing.",
      "We offer structured weekly plans, diagnostic tests, full-length mock exams, performance evaluations, and customized study schedules for each student. This helps them stay on track and gain confidence step by step.",
      "Whether your child is preparing for SHSAT or ISEE, our tutoring ensures they receive the right guidance at the right time with a focus on long-term academic success.",
    ],

    sections: [
      {
        heading: "Program Highlights",
        content: [
          "✔ Complete coverage of SHSAT ELA & Math with updated 2026 CAT model.",
          "✔ ISEE preparation for all levels—Lower, Middle & Upper.",
          "✔ 1-on-1 live tutoring with certified and experienced instructors.",
          "✔ Weekly homework, concept quizzes, and study plans.",
          "✔ Full-length mock exams with performance breakdown.",
          "✔ Personalized improvement roadmap for each student.",
        ],
      },
      {
        heading: "What Students Will Learn",
        content: [
          "• Strong analytical reading and problem-solving skills.",
          "• Advanced grammar, vocabulary, and comprehension techniques.",
          "• Mastery over arithmetic, algebra, geometry, and data analysis.",
          "• Critical thinking strategies for tricky questions.",
          "• Smart guessing techniques and time-management methods.",
          "• Techniques to handle digital CAT-style question changes.",
        ],
      },
      {
        heading: "Why Parents Trust GGES?",
        content: [
          "• Proven track record of high-scoring students.",
          "• Transparent reporting and weekly parent updates.",
          "• Student-friendly learning environment with flexible scheduling.",
          "• Study material updated annually based on test patterns.",
          "• Focus on skill-building rather than memorization.",
          "• Guaranteed academic growth with consistent support.",
        ],
      },
    ],

    author: "GGES Tutoring Team",
    createdAt: "2025-12-11T10:00:00Z",
    tags: ["SHSAT", "ISEE", "Education", "Tutoring", "Online Learning"],
  };

  useEffect(() => {
    if (hash) return;
    const timer = setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [hash]);

  const getBlogDetail = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/offer-detail/${id}`
      );
      setOfferData(res?.data?.data);
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
    getBlogDetail();
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div
      className="bg-[#F0F8FF]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto p-10  rounded-2xl shadow-2xl ">
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 px-4 py-2 text-blue-700 font-semibold rounded-lg hover:text-blue-900 transition"
        >
          <svg
            className="w-5 h-5 stroke-[3]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </button>

        <div id="offer-detail" className="flex justify-between">
          <h1 className="text-5xl font-extrabold mb-6 text-gray-900">
            {offerData?.title}
          </h1>
          <div>
            <div className="text-xl font-semibold text-blue-400 text-end">
              Offer
            </div>

            <div className="text-xl font-semibold text-end">
              {offerData?.type}
            </div>
          </div>
        </div>

        <div
          className="mb-6 flex flex-wrap gap-2"
          dangerouslySetInnerHTML={{ __html: offerData?.description }}
        ></div>
        <div className="mt-10 text-lg text-gray-600 border-t pt-6 flex justify-between">
          <p>
            Published on {new Date(offerData?.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};
