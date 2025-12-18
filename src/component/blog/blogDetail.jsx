// import React, { useEffect, useState } from "react";
// import blogImg from "../../assets/slide-3.jpg";
// import backgroundImage from "../../assets/work-bg.png";
// import { useLocation, useNavigate, useParams } from "react-router-dom";
// import { toast } from "react-toastify";
// import axios from "axios";

// export const BlogDetail = () => {
//   const navigate = useNavigate();
//   const [blodDetailData, setBlogDetailData] = useState();

//   const { id } = useParams();

//   const getBlogDetail = async () => {
//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_APP_URL}api/user/blog-detail/${id}`
//       );
//       setBlogDetailData(res?.data?.data);
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
//     getBlogDetail();
//   }, [id]);

//   const handleBack = () => {
//     navigate(-1);
//   };

//    const { hash } = useLocation();

//   useEffect(() => {
//     if (!hash) return;

//     const timer = setTimeout(() => {
//       const el = document.querySelector(hash);
//       if (el) {
//         el.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     }, 300);

//     return () => clearTimeout(timer);
//   }, [hash]);
//   return (
//     <div
//       className="bg-[#F0F8FF]"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "contain",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="max-w-7xl mx-auto p-4 md:p-10 bg-gray-100 rounded-2xl shadow-2xl">
//         <button id='blog'
//           onClick={handleBack}
//           className="inline-flex items-center gap-2 px-4 py-2 text-blue-700 font-semibold rounded-lg hover:text-blue-900 transition"
//         >
//           <svg
//             className="w-5 h-5 stroke-[3]"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//           Back
//         </button>

//         {blodDetailData?.type === "image" ? (
//           <img
//             src={`${import.meta.env.VITE_APP_URL}${blodDetailData?.image}`}
//             alt="Blog Media"
//             className="w-full h-64 sm:h-80 md:h-[500px] object-cover rounded-2xl mb-6 md:mb-8 shadow-xl"
//           />
//         ) : blodDetailData?.type === "video" ? (
//           <video
//             src={`${import.meta.env.VITE_APP_URL}${blodDetailData?.video}`}
//             controls
//             className="w-full h-[500px] object-cover rounded-2xl mb-8 shadow-xl"
//           />
//         ) : null}

//         {/* Blog Title */}
//         <h1 className="text-2xl md:text-5xl font-extrabold mb-4 md:mb-6 text-gray-900">
//           {blodDetailData?.title}
//         </h1>

//         <div
//           className="mb-6 flex flex-wrap gap-2"
//           dangerouslySetInnerHTML={{ __html: blodDetailData?.description }}
//         ></div>

//         <div className="mb-6 flex flex-wrap gap-2">

//           {blodDetailData?.createdAt &&
//             new Date(blodDetailData.createdAt).toLocaleString("en-IN")}
//         </div>
//       </div>
//     </div>
//   );
// };


import React, { useEffect, useState } from "react";
import backgroundImage from "../../assets/work-bg.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

// 1. Framer Motion Import
import { motion } from "framer-motion";

export const BlogDetail = () => {
  const navigate = useNavigate();
  const [blodDetailData, setBlogDetailData] = useState();
  const { id } = useParams();
  const { hash } = useLocation();

  const getBlogDetail = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/blog-detail/${id}`
      );
      setBlogDetailData(res?.data?.data);
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

  useEffect(() => {
    if (!hash) return;
    const timer = setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [hash]);

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div
      className="bg-[#F0F8FF] min-h-screen py-10 px-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      {/* 3D Animated Container */}
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto p-6 md:p-10 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50"
      >
        
        {/* Back Button Slide In */}
        <motion.button 
          id='blog'
          onClick={handleBack}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ x: -5 }}
          className="inline-flex items-center gap-2 px-4 py-2 text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition mb-6"
        >
          <svg className="w-5 h-5 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </motion.button>

        {/* Media Section (Floating Effect) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.02 }} // Gentle zoom on hover
          className="overflow-hidden rounded-2xl shadow-xl mb-8"
        >
          {blodDetailData?.type === "image" ? (
            <img
              src={`${import.meta.env.VITE_APP_URL}${blodDetailData?.image}`}
              alt="Blog Media"
              className="w-full h-64 sm:h-80 md:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
            />
          ) : blodDetailData?.type === "video" ? (
            <video
              src={`${import.meta.env.VITE_APP_URL}${blodDetailData?.video}`}
              controls
              className="w-full h-[500px] object-cover"
            />
          ) : null}
        </motion.div>

        {/* Blog Content (Staggered Text Reveal) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          {/* Title */}
          <motion.h1 
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            className="text-2xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight"
          >
            {blodDetailData?.title}
          </motion.h1>

          {/* Description */}
          <motion.div
            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
            className="prose max-w-none text-gray-700 text-lg leading-relaxed mb-8"
            dangerouslySetInnerHTML={{ __html: blodDetailData?.description }}
          ></motion.div>

          {/* Date */}
          <motion.div 
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="text-sm text-gray-500 font-medium border-t border-gray-200 pt-4"
          >
            {blodDetailData?.createdAt &&
              new Date(blodDetailData.createdAt).toLocaleString("en-IN", {
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
              })}
          </motion.div>
        </motion.div>

      </motion.div>
    </div>
  );
};