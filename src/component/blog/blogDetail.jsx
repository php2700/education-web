import React from "react";
import blogImg from "../../assets/slide-3.jpg";
import backgroundImage from "../../assets/work-bg.png";

export const BlogDetail = () => {
  // Static blog data (education-related)
  const blog = {
    title: "The Importance of Early Childhood Education",
    description: [
      "At GGES, our SHSAT online tutoring programs are research-based and specifically designed to help students score higher on the SHSAT test. For SHSAT Test prep focus on teaching students strategies while also reviewing the content on the test.",
      "Beginning with the fall 2025 SHSAT, the test will be administered digitally except for those who require special accommodations. In fall 2026, it becomes a computer-adaptive test (CAT).",
      "SHSAT test dates are offered in late October for school day testing, mid-November for 8th graders, and early December for 9th graders.",
      "At GGES, ISEE test prep is imparted by expert tutors. We emphasize understanding concepts deeply rather than rote learning.",
      "The SHSAT test has two main sections: English Language Arts (ELA) and Math, each with 57 items, with a total test time of 180 minutes.",
    ],
    sections: [
      {
        heading: "Four Levels of Learning",
        content: [
          "Early education helps children build problem-solving, memory, and attention skills.",
          "Play-based learning stimulates creativity and cognitive development.",
        ],
      },
      {
        heading: "Social and Emotional Skills",
        content: [
          "Children learn empathy, cooperation, and communication.",
          "Group interactions help build confidence and teamwork abilities.",
        ],
      },
      {
        heading: "Parental Involvement",
        content: [
          "Parents play a crucial role in reinforcing learning at home.",
          "Storytelling, reading, and daily conversations boost cognitive growth.",
        ],
      },
    ],
    author: "Jane Smith",
    createdAt: "2025-12-11T10:00:00Z",
    tags: ["Education", "Early Learning", "Child Development", "Parenting"],
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
      <div className="max-w-7xl mx-auto p-4 md:p-10 bg-gray-100 rounded-2xl shadow-2xl">
        
        {/* Main Blog Image */}
        <img
          src={blogImg}
          alt={blog.title}
          className="w-full h-64 sm:h-80 md:h-[500px] object-cover rounded-2xl mb-6 md:mb-8 shadow-xl"
        />

        {/* Blog Title */}
        <h1 className="text-2xl md:text-5xl font-extrabold mb-4 md:mb-6 text-gray-900">
          {blog.title}
        </h1>

        {/* Tags */}
        <div className="mb-6 flex flex-wrap gap-2">
          {blog.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Main Description */}
        <div className="space-y-6 text-lg text-gray-800 leading-relaxed mb-10">
          {blog.description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>

        {/* Sections — WITHOUT images */}
        {blog.sections.map((section, idx) => (
          <div key={idx} className="mb-10">
            <h2 className="text-3xl font-bold mb-4">{section.heading}</h2>
            <div className="space-y-4 text-gray-700 text-lg">
              {section.content.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>
        ))}

        {/* Author and Date */}
        <div className="mt-10 text-lg text-gray-600 border-t pt-6 flex justify-between">
          <p className="font-semibold">By {blog.author}</p>
          <p>Published on {new Date(blog.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};
