import React from "react";
import blogImg from "../../assets/slide-3.jpg";
import { useNavigate } from "react-router-dom";

export const OfferDetail = () => {
  // Updated educational offer data
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

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-7xl mx-auto p-10 bg-gray-100 rounded-2xl shadow-2xl">
      <div
        onClick={handleBack}
        className="text-blue-500 font-semibold mb-2 text-lg"
      >
        Back
      </div>

      <img
        src={blogImg}
        alt={offer.title}
        className="w-full h-[500px] object-cover rounded-2xl mb-8 shadow-xl"
      />

      <h1 className="text-5xl font-extrabold mb-6 text-gray-900">
        {offer.title}
      </h1>

      {/* Tags */}
      <div className="mb-6 flex flex-wrap gap-2">
        {offer.tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <div className="space-y-6 text-lg text-gray-800 leading-relaxed mb-10">
        {offer.description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>

      {/* Sections */}
      {offer.sections.map((section, idx) => (
        <div key={idx} className="mb-10">
          <h2 className="text-3xl font-bold mb-4">{section.heading}</h2>
          <div className="space-y-4 text-gray-700 text-lg">
            {section.content.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </div>
      ))}

      {/* Author & Date */}
      <div className="mt-10 text-lg text-gray-600 border-t pt-6 flex justify-between">
        <p className="font-semibold">By {offer.author}</p>
        <p>Published on {new Date(offer.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
};
