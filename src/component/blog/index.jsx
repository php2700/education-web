import React, { useEffect, useState } from "react";
import backgroundImage from "../../assets/work-bg.png";
import slide2 from "../../assets/slide-2.jpg";
import slide3 from "../../assets/slide-3.jpg";
import slide4 from "../../assets/slide-4.jpg";
import axios from "axios";
import { toast } from "react-toastify";

export const Blog = () => {
  const [blogData, setBlogData] = useState([]);

  const getBlogData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/blog`
      );
      setBlogData(res?.data?.data);
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
    getBlogData();
  }, []);

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
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            {blog.type === "image" && blog.image ? (
              <img
                src={`${import.meta.env.VITE_APP_URL}${blog.image}`}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />
            ) : blog.type === "video" && blog.video ? (
              <video
                src={`${import.meta.env.VITE_APP_URL}${blog.video}`}
                className="w-full h-52 object-cover"
                controls
              />
            ) : (
              <div className="w-full h-52 flex items-center justify-center bg-gray-200 text-gray-500">
                No Media
              </div>
            )}

            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                Date:{new Date(blog.createdAt).toLocaleDateString()}
              </p>
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
