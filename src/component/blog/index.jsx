// import React, { useEffect, useRef, useState } from "react";
// import backgroundImage from "../../assets/work-bg.png";
// import slide2 from "../../assets/slide-2.jpg";
// import slide3 from "../../assets/slide-3.jpg";
// import slide4 from "../../assets/slide-4.jpg";
// import axios from "axios";
// import { toast } from "react-toastify";
// import DOMPurify from "dompurify";
// import { useLocation, useNavigate } from "react-router-dom";

// export const Blog = () => {
//   const navigate = useNavigate();
//   const headingRef = useRef();
//   const location = useLocation();

//   const [blogData, setBlogData] = useState([]);

//   const getBlogData = async () => {
//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_APP_URL}api/user/blog`
//       );
//       setBlogData(res?.data?.data);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           error?.message ||
//           "something went wrong",
//         { position: "top-right" }
//       );
//     }
//   };

//   useEffect(() => {
//     getBlogData();
//   }, []);

//   useEffect(() => {
//     if (headingRef.current) {
//       headingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   }, [location?.pathname]);

//   const handleMore = (id) => {
//     navigate(`/blog-detail/${id}#blog`);
//   };

//   const getShortText = (html, limit = 80) => {
//     const cleanHtml = DOMPurify.sanitize(html || "");
//     const tempDiv = document.createElement("div");
//     tempDiv.innerHTML = cleanHtml;

//     const text = tempDiv.textContent || tempDiv.innerText || "";
//     return text.length > limit ? text?.slice(0, limit) + "..." : text;
//   };

//   return (
//     <div
//       className="bg-[#F0F8FF] py-16 px-6 sm:px-10 lg:px-12 relative"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "contain",
//         backgroundPosition: "center",
//       }}
//     >
//       <h1
//         ref={headingRef}
//         className="text-3xl font-bold text-center mb-10 text-gray-800"
//       >
//         📰 Latest Blog
//       </h1>

//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {blogData.map((blog) => (
//           <div
//             key={blog.id}
//             className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
//           >
//             {blog.type === "image" && blog.image ? (
//               <img
//                 src={`${import.meta.env.VITE_APP_URL}${blog.image}`}
//                 alt={blog.title}
//                 className="w-full h-52 object-cover"
//               />
//             ) : blog.type === "video" && blog.video ? (
//               <video
//                 src={`${import.meta.env.VITE_APP_URL}${blog.video}`}
//                 className="w-full h-52 object-cover"
//                 controls
//               />
//             ) : (
//               <div className="w-full h-52 flex items-center justify-center bg-gray-200 text-gray-500">
//                 No Media
//               </div>
//             )}

//             <div className="p-6 flex flex-col flex-1">
//               <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                 {blog.title}
//               </h2>
//               <p className="text-gray-600 text-sm mb-4">
//                 Date:{new Date(blog.createdAt).toLocaleDateString()}
//               </p>
//               <p className="text-gray-700 text-md mb-4">
//                 {getShortText(blog?.description, 80)}
//               </p>
//               <button
//                 onClick={() => {
//                   handleMore(blog?._id);
//                 }}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mt-auto"
//               >
//                 Read More
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


import React, { useEffect, useRef, useState } from "react";
import backgroundImage from "../../assets/work-bg.png";
import axios from "axios";
import { toast } from "react-toastify";
import DOMPurify from "dompurify";
import { useLocation, useNavigate } from "react-router-dom";

// 1. Framer Motion Import
import { motion } from "framer-motion";

export const Blog = () => {
  const navigate = useNavigate();
  const headingRef = useRef();
  const location = useLocation();

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

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location?.pathname]);

  const handleMore = (id) => {
    navigate(`/blog-detail/${id}#blog`);
  };

  const getShortText = (html, limit = 80) => {
    const cleanHtml = DOMPurify.sanitize(html || "");
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = cleanHtml;

    const text = tempDiv.textContent || tempDiv.innerText || "";
    return text.length > limit ? text?.slice(0, limit) + "..." : text;
  };

  // 🔥 Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Cards sequence me aayenge
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div
      className="bg-[#F0F8FF] py-16 px-6 sm:px-10 lg:px-12 relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      {/* Animated Heading */}
      <motion.h1
        ref={headingRef}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-center mb-10 text-gray-800"
      >
        📰 Latest Blog
      </motion.h1>

      {/* Animated Grid */}
      <motion.div 
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {blogData.map((blog) => (
          <motion.div
            key={blog.id}
            variants={cardVariants}
            whileHover={{ 
              y: -10, // Lift Up
              scale: 1.02, 
              boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)" // Premium Deep Shadow
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col h-full cursor-pointer group"
          >
            {/* Media Section with Zoom Effect */}
            <div className="overflow-hidden h-52 relative">
              {blog.type === "image" && blog.image ? (
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={`${import.meta.env.VITE_APP_URL}${blog.image}`}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              ) : blog.type === "video" && blog.video ? (
                <video
                  src={`${import.meta.env.VITE_APP_URL}${blog.video}`}
                  className="w-full h-full object-cover"
                  controls
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                  No Media
                </div>
              )}
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {blog.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                Date: {new Date(blog.createdAt).toLocaleDateString()}
              </p>
              <p className="text-gray-700 text-md mb-4 flex-grow">
                {getShortText(blog?.description, 80)}
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  handleMore(blog?._id);
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mt-auto shadow-md"
              >
                Read More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};