import React from "react";
import backgroundImage from "../../assets/work-bg.png";
import slide2 from "../../assets/slide-2.jpg";
import slide3 from "../../assets/slide-3.jpg";
import slide4 from "../../assets/slide-4.jpg";

export const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "K-12 tutoring Geometry",
      image: slide2,
      date: "Nov 12, 2025",
      description:
        "At GGES, grappling with the geometric series, geometry formulas, or geometric sequence is made easy. Our tutors can help. We have expert geometry .",
    },
    {
      id: 2,
      title: "1-on-1 Personalized Sessionsd",
      image: slide3,
      date: "Nov 10, 2025",
      description:
        "Lessons are tailored to your unique pace and learning style.",
    },
    {
      id: 3,
      title: "Flexible Scheduling",
      image: slide4,
      date: "Nov 8, 2025",
      description: "Book sessions that fit perfectly into your busy schedule.",
    },
  ];

  return (
    <div
      className="bg-[#F0F8FF] py-16 px-6 sm:px-10 lg:px-12 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        📰 Latest Blog
      </h1>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{blog.date}</p>
              <p className="text-gray-700 text-sm mb-4">{blog.description}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
