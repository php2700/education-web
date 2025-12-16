import React, { useEffect, useState } from "react";
import blogImg from "../../assets/slide-3.jpg";
import backgroundImage from "../../assets/work-bg.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const BlogDetail = () => {
  const navigate = useNavigate();
  const [blodDetailData, setBlogDetailData] = useState();

  const { id } = useParams();

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

  const handleBack = () => {
    navigate(-1);
  };

   const { hash } = useLocation();

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
        <button id='blog'
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

        {blodDetailData?.type === "image" ? (
          <img
            src={`${import.meta.env.VITE_APP_URL}${blodDetailData?.image}`}
            alt="Blog Media"
            className="w-full h-64 sm:h-80 md:h-[500px] object-cover rounded-2xl mb-6 md:mb-8 shadow-xl"
          />
        ) : blodDetailData?.type === "video" ? (
          <video
            src={`${import.meta.env.VITE_APP_URL}${blodDetailData?.video}`}
            controls
            className="w-full h-[500px] object-cover rounded-2xl mb-8 shadow-xl"
          />
        ) : null}

        {/* Blog Title */}
        <h1 className="text-2xl md:text-5xl font-extrabold mb-4 md:mb-6 text-gray-900">
          {blodDetailData?.title}
        </h1>

        <div
          className="mb-6 flex flex-wrap gap-2"
          dangerouslySetInnerHTML={{ __html: blodDetailData?.description }}
        ></div>

        <div className="mb-6 flex flex-wrap gap-2">

          {blodDetailData?.createdAt &&
            new Date(blodDetailData.createdAt).toLocaleString("en-IN")}
        </div>
      </div>
    </div>
  );
};
