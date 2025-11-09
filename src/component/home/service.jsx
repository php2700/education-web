import React from "react";
import math from "../../assets/math.png";
import english from "../../assets/english.png";
import lp from "../../assets/lp.png";
import child from "../../assets/child.png";
import mathIcon from "../../assets/math-icon.png";
import engIcon from "../../assets/eng-icon.png";
import kIcon from "../../assets/k-12.png";
import lpIcon from "../../assets/lp-icon.png";
// import boost from "../../assets/boost.png";
import boost from "../../assets/plane3.png";
import boost2 from "../../assets/leftplane3.png";

import book from "../../assets/book.png";
import editImg from "../../assets/editImg.png";
import ideaImg from "../../assets/ideaImg.png";
import { Link, useNavigate } from "react-router-dom";

const SubjectsAndCourses = () => {
  const navigate = useNavigate();
  const subjects = [
    {
      title: "Math",
      bgColor: "from-blue-500 to-blue-700",
      bgImg: math,
      icon: mathIcon,
      pageUrl: "/courses/maths",
    },
    {
      title: "English",
      bgColor: "from-purple-500 to-pink-500",
      bgImg: english,
      icon: engIcon,
      pageUrl: "/courses/english",
    },
    {
      title: "K-12",
      bgColor: "from-indigo-500 to-blue-700",
      bgImg: lp,
      icon: kIcon,
      pageUrl: "/courses/k-12",
    },
    {
      title: "Test Prep",
      bgColor: "from-red-500 to-orange-500",
      bgImg: child,
      icon: lpIcon,
      pageUrl: "/courses/test",
    },
  ];

  const handleUrl = (pageUrl) => {
    console.log(handleUrl, "ghghghghghghghghghgh");
    navigate(`${pageUrl}`);
  };

  return (
    <section className="bg-[#F0F8FF] py-16 relative">
      <div className="absolute top-30 left-20">
        <img src={ideaImg} className="text-gray-200" />
      </div>
      <div className="absolute top-10 right-50">
        <img src={boost} className="bg-red-400" />
      </div>

      <div className="max-w-7xl container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Subjects & Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {subjects.map((subject, index) => (
            <div
              key={index}
              onClick={(e) => {
                handleUrl(subject.pageUrl);
              }}
              className={`relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-gradient-to-br ${subject.bgColor}`}
            >
              {/* Background image with overlay */}
              <img
                src={subject.bgImg}
                alt={subject.title}
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/20"></div>

              {/* Text content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-40 md:h-48 text-white">
                <div>
                  <img src={subject.icon} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold">
                  {subject.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectsAndCourses;
