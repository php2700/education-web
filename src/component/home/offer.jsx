import React, { useEffect, useState } from "react";
import {
  FaUserGraduate,
  FaUserTie,
  FaRegSmile,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { BsStars } from "react-icons/bs";

import sarah from "../../assets/sarah.png";
import michel from "../../assets/michel.png";
import david from "../../assets/david.png";
import latestImg from "../../assets/latest.png";
import star from "../../assets/starimg.png";
import backgroundImage from "../../assets/work-bg.png";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";


export const OfferAndTrust = () => {
  const navigate=useNavigate();
  const [offerData, setOfferData] = useState([]);
  const [successData, setSuccessData] = useState([]);

  const getOfferData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/offers`
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

  const getSuccessData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/story`
      );
      setSuccessData(res?.data?.data);
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
    getOfferData();
    getSuccessData();
  }, []);


  const handleUpdate=()=>{
    navigate('/offer-list#offer-list')
  }

  const handleLearnMore=(id)=>{
    navigate(`/offer-detail/${id}#offer-detail`)
  }
  const getShortText = (html, limit = 80) => {
      const cleanHtml = DOMPurify.sanitize(html || "");
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = cleanHtml;
  
      const text = tempDiv.textContent || tempDiv.innerText || "";
      return text.length > limit ? text?.slice(0, limit) + "..." : text;
    };

  return (
    <div className="bg-[#F0F8FF] text-gray-900">
      {/* Offers Section */}
      <section className="py-16 px-4">
        <div className="container max-w-7xl mx-auto text-center">
          <button className="px-4 py-1 bg-white rounded-full flex mx-auto gap-2  text-gray-700 text-sm  mb-3 shadow-sm">
            <img src={latestImg} />
            Latest Updates
          </button>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Offers & News</h2>
          <p className="text-gray-600 mb-10">
            Stay updated with our latest promotions, new courses, and exciting
            announcements
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {offerData?.slice(0,3)?.map((offer, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-left"
              >
                <div className="flex justify-between items-center mb-3 text-sm">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
                    {offer.type}
                  </span>
                  <span className="text-gray-500">
                    {offer.expireDate
                      ? new Date(offer.expireDate).toLocaleDateString("en-GB")
                      : ""}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                   {getShortText(offer?.description, 80)}
                </p>
                <button onClick={()=>{handleLearnMore(offer._id)}} className=" font-medium bg-[#F0F8FF]  text-sm   w-full p-2 rounded-lg">
                  Learn More →
                </button>
              </div>
            ))}
          </div>

          <button onClick={handleUpdate} className="mt-10 cursor-pointer bg-[#305CDE] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            View All Updates →
          </button>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Success Stories
          </h2>
          <p className="text-gray-600 mb-10">
            Hear what parents and students have to say about their experience
            with us.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {successData?.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-left"
              >
                <div className="text-yellow-400 mb-3">
                  {"★".repeat(review.rating)}
                </div>
                <p className="text-gray-700 italic mb-4">
                  “{review.description}”
                </p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200">
                    <img
                      src={`${import.meta.env.VITE_APP_URL}${review?.image}`}
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-gray-500">
                      {review.designation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Credibility Section */}
    </div>
  );
};
