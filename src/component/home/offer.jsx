// import React, { useEffect, useState } from "react";
// import {
//   FaUserGraduate,
//   FaUserTie,
//   FaRegSmile,
//   FaChalkboardTeacher,
// } from "react-icons/fa";
// import { BsStars } from "react-icons/bs";

// import sarah from "../../assets/sarah.png";
// import michel from "../../assets/michel.png";
// import david from "../../assets/david.png";
// import latestImg from "../../assets/latest.png";
// import star from "../../assets/starimg.png";
// import backgroundImage from "../../assets/work-bg.png";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import DOMPurify from "dompurify";


// export const OfferAndTrust = () => {
//   const navigate=useNavigate();
//   const [offerData, setOfferData] = useState([]);
//   const [successData, setSuccessData] = useState([]);

//   const getOfferData = async () => {
//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_APP_URL}api/user/offers`
//       );
//       setOfferData(res?.data?.data);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           error?.message ||
//           "something went wrong",
//         { position: "top-right" }
//       );
//     }
//   };

//   const getSuccessData = async () => {
//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_APP_URL}api/user/story`
//       );
//       setSuccessData(res?.data?.data);
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
//     getOfferData();
//     getSuccessData();
//   }, []);


//   const handleUpdate=()=>{
//     navigate('/offer-list#offer-list')
//   }

//   const handleLearnMore=(id)=>{
//     navigate(`/offer-detail/${id}#offer-detail`)
//   }
//   const getShortText = (html, limit = 80) => {
//       const cleanHtml = DOMPurify.sanitize(html || "");
//       const tempDiv = document.createElement("div");
//       tempDiv.innerHTML = cleanHtml;
  
//       const text = tempDiv.textContent || tempDiv.innerText || "";
//       return text.length > limit ? text?.slice(0, limit) + "..." : text;
//     };

//   return (
//     <div className="bg-[#F0F8FF] text-gray-900">
//       {/* Offers Section */}
//       <section className="py-16 px-4">
//         <div className="container max-w-7xl mx-auto text-center">
//           <button className="px-4 py-1 bg-white rounded-full flex mx-auto gap-2  text-gray-700 text-sm  mb-3 shadow-sm">
//             <img src={latestImg} />
//             Latest Updates
//           </button>
//           <h2 className="text-3xl md:text-4xl font-bold mb-2">Offers & News</h2>
//           <p className="text-gray-600 text-lg mb-10">
//             Stay updated with our latest promotions, new courses, and exciting
//             announcements
//           </p>

//           <div className="grid md:grid-cols-3 gap-6">
//             {offerData?.slice(0,3)?.map((offer, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-left"
//               >
//                 <div className="flex justify-between items-center mb-3 text-sm">
//                   <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
//                     {offer.type}
//                   </span>
//                   <span className="text-gray-500">
//                     {offer.expireDate
//                       ? new Date(offer.expireDate).toLocaleDateString("en-GB")
//                       : ""}
//                   </span>
//                 </div>
//                 <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>
//                 <p className="text-gray-600 text-lg mb-4">
//                    {getShortText(offer?.description, 80)}
//                 </p>
//                 <button onClick={()=>{handleLearnMore(offer._id)}} className=" font-medium bg-[#F0F8FF]  text-sm   w-full p-2 rounded-lg">
//                   Learn More →
//                 </button>
//               </div>
//             ))}
//           </div>

//           <button onClick={handleUpdate} className="mt-10 cursor-pointer bg-[#305CDE] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
//             View All Updates →
//           </button>
//         </div>
//       </section>

//       {/* Reviews Section */}
//       <section className="py-16 px-4">
//         <div className="max-w-7xl container mx-auto text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-2">
//             Success Stories
//           </h2>
//           <p className="text-gray-600 text-lg mb-10">
//             Hear what parents and students have to say about their experience
//             with us.
//           </p>

//           <div className="grid md:grid-cols-3 gap-6">
//             {successData?.map((review, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-left"
//               >
//                 <div className="text-yellow-400 mb-3">
//                   {"★".repeat(review.rating)}
//                 </div>
//                 <p className="text-gray-700 text-lg italic mb-4">
//                   “{review.description}”
//                 </p>
//                 <div className="flex items-center gap-3 mt-4">
//                   <div className="w-10 h-10 rounded-full bg-gray-200">
//                     <img
//                       src={`${import.meta.env.VITE_APP_URL}${review?.image}`}
//                     />
//                   </div>
//                   <div>
//                     <p className="font-semibold">{review.name}</p>
//                     <p className="text-sm text-gray-500">
//                       {review.designation}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Trust & Credibility Section */}
//     </div>
//   );
// };


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

// 1. Framer Motion Import
import { motion } from "framer-motion";

export const OfferAndTrust = () => {
  const navigate = useNavigate();
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

  const handleUpdate = () => {
    navigate('/offer-list#offer-list');
  };

  const handleLearnMore = (id) => {
    navigate(`/offer-detail/${id}#offer-detail`);
  };

  const getShortText = (html, limit = 80) => {
    const cleanHtml = DOMPurify.sanitize(html || "");
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = cleanHtml;

    const text = tempDiv.textContent || tempDiv.innerText || "";
    return text.length > limit ? text?.slice(0, limit) + "..." : text;
  };

  // 🔥 Animation Variants (Settings)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }, // Cards one by one load honge
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Niche se upar aayega
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 50, damping: 20 } 
    },
  };

  return (
    <div className="bg-[#F0F8FF] text-gray-900 overflow-hidden">
      
      {/* Offers Section */}
      <section className="py-20 px-4">
        <div className="container max-w-7xl mx-auto text-center">
          
          {/* Animated Badge */}
          <motion.button 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            animate={{ y: [0, -5, 0] }} // Floating effect
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="px-4 py-1 bg-white rounded-full flex mx-auto gap-2 text-gray-700 text-sm mb-4 shadow-sm border border-gray-100"
          >
            <img src={latestImg} alt="latest" />
            Latest Updates
          </motion.button>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-3"
          >
            Offers & News
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 text-lg mb-12"
          >
            Stay updated with our latest promotions, new courses, and exciting announcements
          </motion.p>

          {/* Animated Grid for Offers */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {offerData?.slice(0, 3)?.map((offer, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02, 
                  boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.15)" 
                }}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 transition-all text-left cursor-pointer flex flex-col h-full"
              >
                <div className="flex justify-between items-center mb-4 text-sm">
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-semibold text-xs uppercase tracking-wide">
                    {offer.type}
                  </span>
                  <span className="text-gray-400 font-medium">
                    {offer.expireDate
                      ? new Date(offer.expireDate).toLocaleDateString("en-GB")
                      : ""}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{offer.title}</h3>
                <p className="text-gray-600 text-base mb-6 flex-grow">
                   {getShortText(offer?.description, 80)}
                </p>
                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: "#EBF8FF" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => { handleLearnMore(offer._id) }} 
                  className="font-semibold bg-gray-50 text-blue-600 text-sm w-full p-3 rounded-xl transition-colors"
                >
                  Learn More →
                </motion.button>
              </motion.div>
            ))}
          </motion.div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleUpdate} 
            className="mt-12 cursor-pointer bg-[#305CDE] text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/30"
          >
            View All Updates →
          </motion.button>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4 bg-white relative">
        <div className="max-w-7xl container mx-auto text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-3"
          >
            Success Stories
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg mb-12"
          >
            Hear what parents and students have to say about their experience with us.
          </motion.p>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {successData?.map((review, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)" 
                }}
                className="bg-[#F0F8FF] rounded-2xl p-8 shadow-sm border border-blue-50 transition-all text-left flex flex-col h-full"
              >
                <div className="text-yellow-400 mb-4 text-lg">
                  {"★".repeat(review.rating)}
                </div>
                <p className="text-gray-700 text-lg italic mb-6 leading-relaxed flex-grow">
                  “{review.description}”
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm">
                    <img
                      src={`${import.meta.env.VITE_APP_URL}${review?.image}`}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{review.name}</p>
                    <p className="text-sm text-blue-500 font-medium">
                      {review.designation}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust & Credibility Section */}
    </div>
  );
};
