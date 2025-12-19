import React, { useEffect, useState, useRef } from "react";
import backgroundImage from "../../assets/work-bg.png";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

// 1. Framer Motion Import
import { motion, AnimatePresence } from "framer-motion";

export const Testimonial = () => {
  const [testImonialData, setTestImonialData] = useState([]);
  const [loading, setLoading] = useState(true); // Animation trigger ke liye loading state
  const headingRef = useRef(null);
  const { pathname } = useLocation();

  const getData = async () => {
    try {
      setLoading(true); // Data mangne se pehle loading true
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/testImonial`
      );
      setTestImonialData(res?.data?.data || []);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error?.message ||
          "something went wrong",
        { position: "top-right" }
      );
    } finally {
      setLoading(false); // Data milne ke baad loading false
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  // 🔥 Animation Variants (Card Deck Effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Cards tezi se ek ke baad ek aayenge
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 100, // Niche se aayega
      scale: 0.5, // Chota hoga
      rotateX: -45, // 3D Tilt
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: { 
        type: "spring", 
        stiffness: 60, 
        damping: 12,
        mass: 0.8
      } 
    },
  };

  return (
    <div
      className="bg-[#F0F8FF] text-gray-900 overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto py-16 px-6 text-center">
        
        {/* Heading Animation */}
        <motion.h2 
          ref={headingRef} 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          What Our Clients Say
        </motion.h2>

        <section className="py-2 px-4">
          <div className="max-w-7xl container mx-auto text-center perspective-1000">
            
            {/* Logic: Sirf tabhi render karein jab data load ho chuka ho */}
            {!loading && testImonialData.length > 0 ? (
              <motion.div 
                key="testimonial-grid" // Key change hone se animation restart hota hai
                className="grid md:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible" // immediate animation jab data aaye
                style={{ perspective: "1000px" }}
              >
                {testImonialData.map((review, i) => (
                  <motion.div
                    key={i}
                    variants={cardVariants}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
                      zIndex: 10
                    }}
                    className="bg-[#F0F8FF] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all text-left flex flex-col h-full border border-white/50"
                  >
                    <div className="text-4xl text-blue-200 font-serif mb-[-20px]">“</div>
                    
                    <p className="text-gray-700 italic mb-6 flex-1 text-lg leading-relaxed z-10">
                      {review.description}
                    </p>
                    
                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-200/50">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="rounded-full p-1 bg-white shadow-sm"
                      >
                        <img
                          className="rounded-full h-14 w-14 object-cover"
                          src={`${import.meta.env.VITE_APP_URL}${review?.image}`}
                          alt={review.title}
                          onError={(e) => { e.target.src = "https://via.placeholder.com/150" }}
                        />
                      </motion.div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg">{review.title}</p>
                        <p className="text-sm text-blue-600 font-medium">{review.address}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              // Loader ke waqt placeholder space (optional)
              <div className="h-64 flex items-center justify-center">
                 {/* Aapka loader component yaha aa sakta hai */}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonial;