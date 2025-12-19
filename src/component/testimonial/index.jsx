// import React, { useEffect, useState, useRef } from "react";
// import { motion } from "framer-motion";
// import michel from "../../assets/michel.png";
// import image2 from "../../assets/client2.png";
// import image3 from "../../assets/client3.png";
// import image4 from "../../assets/client4.png";
// import image5 from "../../assets/client5.png";
// import image7 from "../../assets/client7.avif";
// import image8 from "../../assets/client8.avif";
// import image9 from "../../assets/client9.avif";
// import image10 from "../../assets/client10.avif";
// import { useLocation } from "react-router-dom";

// import backgroundImage from "../../assets/work-bg.png";
// import axios from "axios";
// import { toast } from "react-toastify";

// const testimonials = [
//   {
//     text: "GGES made SCAT experience a cakewalk for my son. He qualified his test with an excellent percentile. Kudos GGES. Tons of thanks.",
//     name: "Catherine Jenner",
//     role: "OHIO",
//     icon: michel,
//   },
//   {
//     text: "Thank you guys. I want to share with you that Emily has got selected in one of the best colleges. A big thank to Hitaishi who made this possible with her best tutoring. Thanks again.",
//     name: "Kyle Madgen",
//     role: "New York",
//     icon: image10,
//   },
//   {
//     text: "I've had many great experiences with GGES. My tutor was very intelligent and helped me by adopting a flexible approach which helped me in understanding concepts very easily. I was very impressed and recommend GGES to all those who need perfection. Thanks Raj for being such a support.",
//     name: "Gary Lawson",
//     role: "California.",
//     icon: image3,
//   },
//   {
//     text: "GGES helped me complete my homework and understand them as well. Just by using their services my grades went up. I really thank GGES for everything.",
//     name: "Agasthya",
//     role: "Singapore.",
//     icon: image4,
//   },
//   {
//     text: "I feel more confident at school after taking tutoring from GGES and my grades have drastically improved and are still improving.",
//     name: "Tuen Ki Mun",
//     role: "Hongkong.",
//     icon: image5,
//   },
//   {
//     text: "Raj is probably the best turor I've gotten so far.  He explained thing to me in a way I understood and he didnt give me the answer he made me work for it, It helped to me understand the problem a lot better. Really liked his approach Thank you Raj !",
//     name: "Richard May",
//     role: "Sydney.",
//     icon: image7,
//   },
//   {
//     text: "PSAT qualification could not have been possible for me without GGES. They were at best in all my sessions with them. Work sheets and practice modules helped me in measuring myself which helped my qualifying my test with great grades. Raj and Hitaishi  thanks a lot for your guidance and help.",
//     name: "Craig Simpson",
//     role: "California.",
//     icon: image8,
//   },
//   {
//     text: "Hitaishi thank you so much for helping Mysha in qualifying for Maths Kanagaroo. She has secured top grades and is really happy with you guys. She specially wanted to thank you for your guidance. I wish you guys prosper to new heights.",
//     name: "Asha Sharma",
//     role: "New Jersy.",
//     icon: image9,
//   },
// ];

// export const Testimonial = () => {
//   const [testImonialData, setTestImonialData] = useState([]);
//   const headingRef = useRef(null); // Reference create kiya
//   const { pathname } = useLocation(); // URL track karne ke liye

//   const [index, setIndex] = useState(0);

//   // Auto-slide every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % testimonials.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     getData();
//   }, []);

//   // --- YE CODE ADD KAREIN ---
//   useEffect(() => {
//     if (headingRef.current) {
//       // Ye function page ko scroll karke heading par le aayega
//       headingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
//     } else {
//       window.scrollTo(0, 0);
//     }
//   }, [pathname]);

//   const getData = async () => {
//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_APP_URL}api/user/testImonial`
//       );
//       setTestImonialData(res?.data?.data);
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
//     getData();
//   }, []);

//   return (
//     <div
//       className="bg-[#F0F8FF] text-gray-900"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "contain",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="max-w-6xl mx-auto py-16 px-6 text-center">
//         <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold mb-4">
//           What Our Clients Say
//         </h2>

//         {/* Card */}
//         {/* <motion.div
//         key={index}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0 }}
//         transition={{ duration: 0.7 }}
//         className="bg-white p-8 shadow-xl rounded-2xl border border-gray-100"
//       >
//         <p className="text-gray-600 italic text-lg">
//           "{testimonials[index].text}"
//         </p>

//         <h6 className="mt-6 font-semibold text-gray-900 text-lg">
//           — {testimonials[index].name}
//         </h6>
//         <small className="text-gray-500">{testimonials[index].role}</small>
//       </motion.div> */}

//         {/* Dots */}
//         {/* <div className="flex justify-center mt-6 gap-3">
//         {testimonials.map((_, i) => (
//           <div
//             key={i}
//             onClick={() => setIndex(i)}
//             className={`h-3 w-3 rounded-full cursor-pointer transition-all 
//             ${
//               i === index
//                 ? "bg-blue-600 scale-110"
//                 : "bg-gray-300 hover:bg-gray-400"
//             }`}
//           ></div>
//         ))}
//       </div> */}
//         <section className="py-6 px-4">
//           <div className="max-w-7xl container mx-auto text-center">
//             <div className="grid md:grid-cols-3 gap-6">
//               {testImonialData?.map((review, i) => (
//                 <div
//                   key={i}
//                   className="bg-[#F0F8FF] rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-left flex flex-col h-full"
//                 >
//                   {/* <div className="text-yellow-400 mb-3">
//                   {"★".repeat(review.rating)}
//                 </div> */}
//                   <p className="text-gray-700 italic mb-4 flex-1">
//                     “{review.description}”
//                   </p>
//                   <div className="flex items-center gap-3 mt-4">
//                     <div>
//                       <img
//                         className="rounded-full h-16 w-16"
//                         src={`${import.meta.env.VITE_APP_URL}${review?.image}`}
//                       />
//                     </div>
//                     <div>
//                       <p className="font-semibold">{review.title}</p>
//                       <p className="text-sm text-gray-500">{review.address}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;


// import React, { useEffect, useState, useRef } from "react";
// import backgroundImage from "../../assets/work-bg.png";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useLocation } from "react-router-dom";

// // 1. Framer Motion Import
// import { motion, AnimatePresence } from "framer-motion";

// export const Testimonial = () => {
//   const [testImonialData, setTestImonialData] = useState([]);
//   const [loading, setLoading] = useState(true); // Animation trigger ke liye loading state
//   const headingRef = useRef(null);
//   const { pathname } = useLocation();

//   const getData = async () => {
//     try {
//       setLoading(true); // Data mangne se pehle loading true
//       const res = await axios.get(
//         `${import.meta.env.VITE_APP_URL}api/user/testImonial`
//       );
//       setTestImonialData(res?.data?.data || []);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           error?.message ||
//           "something went wrong",
//         { position: "top-right" }
//       );
//     } finally {
//       setLoading(false); // Data milne ke baad loading false
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   useEffect(() => {
//     if (headingRef.current) {
//       headingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
//     } else {
//       window.scrollTo(0, 0);
//     }
//   }, [pathname]);

//   // 🔥 Animation Variants (Card Deck Effect)
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15, // Cards tezi se ek ke baad ek aayenge
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: 100, // Niche se aayega
//       scale: 0.5, // Chota hoga
//       rotateX: -45, // 3D Tilt
//     },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       scale: 1,
//       rotateX: 0,
//       transition: { 
//         type: "spring", 
//         stiffness: 60, 
//         damping: 12,
//         mass: 0.8
//       } 
//     },
//   };

//   return (
//     <div
//       className="bg-[#F0F8FF] text-gray-900 overflow-hidden"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "contain",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="max-w-7xl mx-auto py-16 px-6 text-center">
        
//         {/* Heading Animation */}
//         <motion.h2 
//           ref={headingRef} 
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-4xl font-bold mb-10"
//         >
//           What Our Clients Say
//         </motion.h2>

//         <section className="py-2 px-4">
//           <div className="max-w-7xl container mx-auto text-center perspective-1000">
            
//             {/* Logic: Sirf tabhi render karein jab data load ho chuka ho */}
//             {!loading && testImonialData.length > 0 ? (
//               <motion.div 
//                 key="testimonial-grid" // Key change hone se animation restart hota hai
//                 className="grid md:grid-cols-3 gap-8"
//                 variants={containerVariants}
//                 initial="hidden"
//                 animate="visible" // immediate animation jab data aaye
//                 style={{ perspective: "1000px" }}
//               >
//                 {testImonialData.map((review, i) => (
//                   <motion.div
//                     key={i}
//                     variants={cardVariants}
//                     whileHover={{ 
//                       scale: 1.05, 
//                       y: -10,
//                       boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
//                       zIndex: 10
//                     }}
//                     className="bg-[#F0F8FF] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all text-left flex flex-col h-full border border-white/50"
//                   >
//                     <div className="text-4xl text-blue-200 font-serif mb-[-20px]">“</div>
                    
//                     <p className="text-gray-700 italic mb-6 flex-1 text-lg leading-relaxed z-10">
//                       {review.description}
//                     </p>
                    
//                     <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-200/50">
//                       <motion.div 
//                         whileHover={{ scale: 1.1, rotate: 5 }}
//                         className="rounded-full p-1 bg-white shadow-sm"
//                       >
//                         <img
//                           className="rounded-full h-14 w-14 object-cover"
//                           src={`${import.meta.env.VITE_APP_URL}${review?.image}`}
//                           alt={review.title}
//                           onError={(e) => { e.target.src = "https://via.placeholder.com/150" }}
//                         />
//                       </motion.div>
//                       <div>
//                         <p className="font-bold text-gray-900 text-lg">{review.title}</p>
//                         <p className="text-sm text-blue-600 font-medium">{review.address}</p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </motion.div>
//             ) : (
//               // Loader ke waqt placeholder space (optional)
//               <div className="h-64 flex items-center justify-center">
//                  {/* Aapka loader component yaha aa sakta hai */}
//               </div>
//             )}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Testimonial;

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

  // 🔥 Animation Variants (Card Deck Effect) - YE SAME HAI
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
            
            {!loading && testImonialData.length > 0 ? (
              <motion.div 
                key="testimonial-grid" 
                className="grid md:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible" 
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
                      
                      {/* 🔥 ONLY THIS PART IS UPDATED: PREMIUM ICON WITH MOTION BORDER */}
                      <div className="relative h-16 w-16 flex items-center justify-center flex-shrink-0">
                        {/* 1. Rotating High-Visibility Ring (Conic Gradient) */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                          className="absolute inset-[-0.1px] rounded-full bg-[conic-gradient(from_0deg,#2563eb_0%,#06b6d4_25%,#fbbf24_50%,#8b5cf6_75%,#2563eb_100%)] shadow-[0_0_10px_rgba(37,99,235,0.4)]"
                        />
                        
                        {/* 2. Image Container */}
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="relative z-10 rounded-full p-[2px] bg-white shadow-sm overflow-hidden"
                        >
                          <img
                            className="rounded-full h-12 w-12 object-cover"
                            src={`${import.meta.env.VITE_APP_URL}${review?.image}`}
                            alt={review.title}
                            onError={(e) => { e.target.src = "https://via.placeholder.com/150" }}
                          />
                        </motion.div>
                      </div>

                      <div>
                        <p className="font-bold text-gray-900 text-lg">{review.title}</p>
                        <p className="text-sm text-blue-600 font-medium">{review.address}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="h-64 flex items-center justify-center">
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonial;