// // import React, { useEffect, useState, useRef } from "react";
// // import backgroundImage from "../../assets/price-bg.png";
// // import aboutImg from "../../assets/about.jpg";
// // import { useLocation } from "react-router-dom";

// // // Sample images (remove if not needed)
// // import team1 from "../../assets/michel.png";
// // import team2 from "../../assets/michel.png";
// // import team3 from "../../assets/michel.png";
// // import axios from "axios";
// // import { toast } from "react-toastify";
// // import { FaRegLightbulb, FaShieldAlt, FaStar } from "react-icons/fa";
// // import { ShieldCheck, Sparkles, User } from "lucide-react";

// // export const About = () => {
// //   const [aboutData, setAboutData] = useState([]);
// //   const headingRef = useRef(null); // Reference create kiya
// //   const { pathname } = useLocation(); // URL track karne ke liye

// //   const getData = async () => {
// //     try {
// //       const res = await axios.get(
// //         `${import.meta.env.VITE_APP_URL}api/user/about`
// //       );
// //       setAboutData(res?.data?.data);
// //     } catch (error) {
// //       toast.error(
// //         error.response?.data?.message ||
// //           error?.message ||
// //           "something went wrong",
// //         { position: "top-right" }
// //       );
// //     }
// //   };

// //   useEffect(() => {
// //     getData();
// //   }, []);
// //   useEffect(() => {
// //     if (headingRef.current) {
// //       // Ye function page ko scroll karke heading par le aayega
// //       headingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
// //     } else {
// //       window.scrollTo(0, 0);
// //     }
// //   }, [pathname]); // Jab bhi URL badlega ye chalega
// //   return (
// //     <>
// //       {/* HERO SECTION */}
// //       <div
// //         className="relative bg-[#F0F8FF] py-20 px-6 sm:px-12 lg:px-20"
// //         style={{
// //           backgroundImage: `url(${backgroundImage})`,
// //           backgroundSize: "cover",
// //           backgroundPosition: "center",
// //         }}
// //       >
// //         <p
// //           ref={headingRef}
// //           className="text-3xl md:text-4xl font-bold  text-center mb-16"
// //         >
// //           About Us
// //         </p>
// //         <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
// //           {/* LEFT IMAGE */}
// //           <div className="flex justify-center">
// //             <img
// //               src={`${import.meta.env.VITE_APP_URL}${aboutData?.image}`}
// //               alt="Tutoring"
// //               className="rounded-3xl shadow-2xl w-full max-w-xl hover:scale-[1.07] transition-all duration-700"
// //             />
// //           </div>

// //           {/* ABOUT CONTENT */}
// //           <div className="space-y-6">
// //             <h1 className="text-3xl lg:text-4xl font-extrabold text-[#0E1D3E] leading-tight">
// //               Personalized Online <br />
// //               <span className="text-[#0572E6]">Tutoring Anytime, Anywhere</span>
// //             </h1>
// //             {aboutData?.description?.slice(0, 2)?.map((ele) => (
// //               <p className="text-gray-700 text-lg leading-relaxed">{ele}</p>
// //             ))}
// //           </div>
// //         </div>
// //         <div className="relative max-w-7xl mx-auto  mt-10 items-center">
// //           {aboutData?.description?.slice(2).map((ele) => (
// //             <p className="text-gray-700 text-lg leading-relaxed mb-2">{ele}</p>
// //           ))}
// //         </div>
// //       </div>

// //       {/* WHY US SECTION */}
// //       <section className="py-10 bg-[#F0F8FF] px-6 sm:px-12 lg:px-20">
// //         <div className="max-w-7xl mx-auto">
// //           {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
// //             Why Us?
// //           </h2> */}
// //           <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3">
// //             <ShieldCheck className="w-12 h-12 text-indigo-600" />
// //             Why Us?
// //           </h2>
// //           {aboutData?.whyUsDescription?.map((ele) => (
// //             <p className="text-gray-700 text-lg my-4 leading-relaxed">{ele}</p>
// //           ))}
// //         </div>
// //       </section>

// //       {/* HOW ARE WE DIFFERENT */}
// //       {/* <section className="py-24 bg-[#F0F8FF]  px-6 sm:px-12 lg:px-20">
// //         <div className="max-w-6xl mx-auto">
// //           <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3">
// //             <Sparkles className="w-12 h-12 text-yellow-500" />
// //             How Are We Different?
// //           </h2>

// //           <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg leading-relaxed">
// //             {aboutData?.howDiffrentDescription?.map((ele) => (
// //               <div className="p-6 bg-white shadow-lg rounded-xl">• {ele}</div>
// //             ))}
// //           </div>

// //           <div className="mt-20">
// //             <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3">
// //               <FaShieldAlt className="text-blue-600 text-4xl" />
// //               Safety
// //             </h3>

// //             <div className="grid md:grid-cols-2 gap-10">
// //               {aboutData?.safetyDescription?.map((ele) => (
// //                 <div className="p-6 bg-white shadow-lg rounded-xl text-gray-700 text-lg leading-relaxed">
// //                   {ele}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           <div className="mt-20">
// //             <h3 className="text-3xl md:text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3">
// //               <User className="w-12 h-12 text-blue-500" />
// //               Tutors
// //             </h3>

// //             <div className="bg-white p-6 shadow-lg rounded-xl text-gray-700 text-lg leading-relaxed">
// //               {aboutData?.tutorDescription}
// //             </div>
// //           </div>
// //         </div>
// //       </section> */}
// //       <section className="py-10 md:py-24 bg-[#F0F8FF] px-4 sm:px-12 lg:px-20">
// //         <div className="max-w-6xl mx-auto">
// //           {/* How Are We Different Header */}
// //           <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16 flex items-center justify-center gap-2 md:gap-3">
// //             <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-yellow-500" />
// //             How Are We Different?
// //           </h2>
// //            {aboutData?.howDiffrentHeader && (
// //             <p className="text-base md:text-xl text-gray-800 font-semibold mb-8 text-center px-4">
// //               {aboutData.howDiffrentHeader}
// //             </p>
// //           )}

// //           <div className="grid md:grid-cols-2 gap-6 md:gap-10 text-gray-700 text-base md:text-lg leading-relaxed">
// //             {aboutData?.howDiffrentDescription?.map((ele, i) => (
// //               <div key={i} className="p-6 bg-white shadow-lg rounded-xl">
// //                 • {ele}
// //               </div>
// //             ))}
// //           </div>

// //           {/* Safety Section */}
// //           <div className="mt-12 md:mt-20">
// //             <h3 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16 flex items-center justify-center gap-2 md:gap-3">
// //               <FaShieldAlt className="text-blue-600 text-2xl md:text-4xl" />
// //               Safety
// //             </h3>

// //             <div className="grid md:grid-cols-2 gap-6 md:gap-10">
// //               {aboutData?.safetyDescription?.map((ele, i) => (
// //                 <div key={i} className="p-6 bg-white shadow-lg rounded-xl text-gray-700 text-base md:text-lg leading-relaxed">
// //                   {ele}
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Tutors Section */}
// //           <div className="mt-12 md:mt-20">
// //             <h3 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16 flex items-center justify-center gap-2 md:gap-3">
// //               <User className="w-8 h-8 md:w-12 md:h-12 text-blue-500" />
// //               Tutors
// //             </h3>

// //             <div className="bg-white p-6 shadow-lg rounded-xl text-gray-700 text-base md:text-lg leading-relaxed">
// //               {aboutData?.tutorDescription}
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // };

// import React, { useEffect, useState, useRef } from "react";
// import backgroundImage from "../../assets/price-bg.png";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { FaRegLightbulb, FaShieldAlt, FaLinkedinIn } from "react-icons/fa"; // FaLinkedinIn add kiya
// import { ShieldCheck, Sparkles, User } from "lucide-react";
// import { useLocation } from "react-router-dom";

// export const About = () => {
//   const { hash } = useLocation();

//   const [aboutData, setAboutData] = useState([]);
//   const [members, setMembers] = useState([]); // Management members ke liye state
//   const headingRef = useRef(null);
//   const { pathname } = useLocation();

//   // API URL helper
//   const API_URL = import.meta.env.VITE_APP_URL;

//   const getData = async () => {
//     try {
//       // Dono API ek sath call kar rahe hain (Promise.all se fast hoga)
//       const [aboutRes, managementRes] = await Promise.all([
//         axios.get(`${API_URL}api/user/about`),
//         axios.get(`${API_URL}api/user/management`),
//       ]);

//       setAboutData(aboutRes?.data?.data);

//       if (managementRes?.data?.success) {
//         setMembers(managementRes?.data?.data);
//       }
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

//   useEffect(() => {
//     if (headingRef.current) {
//       headingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
//     } else {
//       window.scrollTo(0, 0);
//     }
//   }, [pathname]);


// useEffect(() => {
//   if (!hash) return;

//   const timer = setTimeout(() => {
//     const el = document.querySelector(hash);
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   }, 300);

//   return () => clearTimeout(timer);
// }, [hash]);


//   return (
//     <>
//       {/* --- HERO SECTION --- */}
//       <div
//         ref={headingRef}
//         className="relative bg-[#F0F8FF] py-20 px-6 sm:px-12 lg:px-20"
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <p className="text-3xl md:text-4xl font-bold text-center mb-16">
//           About Us
//         </p>
//         <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
//           {/* LEFT IMAGE */}
//           <div className="flex justify-center">
//             <img
//               src={`${API_URL}${aboutData?.image}`}
//               alt="Tutoring"
//               className="rounded-3xl shadow-2xl w-full max-w-xl hover:scale-[1.07] transition-all duration-700"
//             />
//           </div>

//           {/* ABOUT CONTENT */}
//           <div className="space-y-6">
//             {/* <h1 className="text-3xl lg:text-4xl font-extrabold text-[#0E1D3E] leading-tight">
//               Personalized Online <br />
//               <span className="text-[#0572E6]">Tutoring Anytime, Anywhere</span>
//             </h1> */}
//             {aboutData?.description?.slice(0, 2)?.map((ele, i) => (
//               <p key={i} className="text-gray-700 text-lg leading-relaxed">
//                 {ele}
//               </p>
//             ))}
//           </div>
//         </div>
//         <div className="relative max-w-7xl mx-auto mt-10 items-center">
//           {aboutData?.description?.slice(2).map((ele, i) => (
//             <p key={i} className="text-gray-700 text-lg leading-relaxed mb-2">
//               {ele}
//             </p>
//           ))}
//         </div>
//       </div>

//       {/* 🟢 NEW: MANAGEMENT TEAM SECTION (Why Us ke Upar) */}
//       {members && members.length > 0 && (
//         <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
//           <div className="max-w-7xl mx-auto text-center mb-20">
//             <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm">
//               Our Leadership
//             </h2>
//             <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
//               Meet the Management Team
//             </h1>
//             <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
//               Visionaries guiding our path to excellence.
//             </p>
//           </div>

//           {/* Management Grid */}
//           <div className="max-w-7xl mx-auto grid gap-y-24 gap-x-12 md:grid-cols-2 lg:gap-16 mt-10">
//             {members.map((member) => (
//               <div
//                 key={member._id}
//                 className="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-8 pt-24 hover:shadow-2xl transition-shadow duration-300 text-center group"
//               >
//                 {/* Image Avatar */}
//                 <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 md:w-40 md:h-40">
//                   <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md bg-gray-200">
//                     <img
//                       className="w-full h-full object-cover"
//                       src={
//                         member.image
//                           ? `${API_URL}${member.image}`
//                           : "https://via.placeholder.com/150"
//                       }
//                       alt={member.name}
//                       style={{ objectPosition: "top center" }}
//                       onError={(e) => {
//                         e.target.src = "https://via.placeholder.com/150";
//                       }}
//                     />
//                   </div>
//                   {/* LinkedIn Icon */}
//                   <div className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 text-white shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
//                     <FaLinkedinIn size={14} />
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="mt-4">
//                   <h3 className="text-2xl font-bold text-gray-900">
//                     {member.name}
//                   </h3>
//                   <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4">
//                     {member.role}
//                   </p>
//                   <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify whitespace-pre-line break-words">
//                     {member.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>
//       )}


//       <section className="py-10 bg-[#F0F8FF] px-6 sm:px-12 lg:px-20">
//         <div id='whyus' className="max-w-7xl mx-auto">
//           <h2  className="text-3xl md:text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3">
//             <ShieldCheck className="w-12 h-12 text-indigo-600" />
//             Why Us?
//           </h2>
//           {aboutData?.whyUsDescription?.map((ele, i) => (
//             <p key={i} className="text-gray-700 text-lg my-4 leading-relaxed">
//               {ele}
//             </p>
//           ))}
//         </div>
//       </section>

//       {/* --- HOW ARE WE DIFFERENT / SAFETY / TUTORS --- */}
//       <section className="py-10 md:py-24 bg-[#F0F8FF] px-4 sm:px-12 lg:px-20">
//         <div className="max-w-6xl mx-auto">
//           {/* How Are We Different Header */}
//           <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16 flex items-center justify-center gap-2 md:gap-3">
//             <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-yellow-500" />
//             How Are We Different?
//           </h2>
//           {aboutData?.howDiffrentHeader && (
//             <p className="text-base md:text-xl text-gray-800 font-semibold mb-8 text-center px-4">
//               {aboutData.howDiffrentHeader}
//             </p>
//           )}

//           <div className="grid md:grid-cols-2 gap-6 md:gap-10 text-gray-700 text-base md:text-lg leading-relaxed">
//             {aboutData?.howDiffrentDescription?.map((ele, i) => (
//               <div key={i} className="p-6 bg-white shadow-lg rounded-xl">
//                 • {ele}
//               </div>
//             ))}
//           </div>

//           {/* Safety Section */}
//           <div className="mt-12 md:mt-20">
//             <h3 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16 flex items-center justify-center gap-2 md:gap-3">
//               <FaShieldAlt className="text-blue-600 text-2xl md:text-4xl" />
//               Safety
//             </h3>

//             <div className="grid md:grid-cols-2 gap-6 md:gap-10">
//               {aboutData?.safetyDescription?.map((ele, i) => (
//                 <div
//                   key={i}
//                   className="p-6 bg-white shadow-lg rounded-xl text-gray-700 text-base md:text-lg leading-relaxed"
//                 >
//                   {ele}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Tutors Section */}
//           <div className="mt-12 md:mt-20">
//             <h3 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16 flex items-center justify-center gap-2 md:gap-3">
//               <User className="w-8 h-8 md:w-12 md:h-12 text-blue-500" />
//               Tutors
//             </h3>

//             <div className="bg-white p-6 shadow-lg rounded-xl text-gray-700 text-base md:text-lg leading-relaxed">
//               {aboutData?.tutorDescription}
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };


// import React, { useEffect, useState, useRef } from "react";
// import backgroundImage from "../../assets/price-bg.png";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { FaRegLightbulb, FaShieldAlt, FaLinkedinIn } from "react-icons/fa";
// import { ShieldCheck, Sparkles, User } from "lucide-react";
// import { useLocation } from "react-router-dom";

// // 1. Framer Motion Import (Animation ke liye)
// import { motion } from "framer-motion";

// export const About = () => {
//   const { hash } = useLocation();
//   const [aboutData, setAboutData] = useState([]);
//   const [members, setMembers] = useState([]);
//   const headingRef = useRef(null);
//   const { pathname } = useLocation();
  

//   const API_URL = import.meta.env.VITE_APP_URL;

//   const getData = async () => {
//     try {
//       const [aboutRes, managementRes] = await Promise.all([
//         axios.get(`${API_URL}api/user/about`),
//         axios.get(`${API_URL}api/user/management`),
//       ]);

//       setAboutData(aboutRes?.data?.data);

//       if (managementRes?.data?.success) {
//         setMembers(managementRes?.data?.data);
//       }
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

//   useEffect(() => {
//     if (headingRef.current) {
//       headingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
//     } else {
//       window.scrollTo(0, 0);
//     }
//   }, [pathname]);

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

//   // 🔥 Animation Variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 },
//     },
//   };

//   return (
//     <>
//       {/* --- HERO SECTION --- */}
//       <div
//         ref={headingRef}
//         className="relative bg-[#F0F8FF] py-20 px-6 sm:px-12 lg:px-20 overflow-hidden"
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <motion.p 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-3xl md:text-4xl font-bold text-center mb-16"
//         >
//           About Us
//         </motion.p>

//         <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
//           {/* LEFT IMAGE (Floating 3D Animation) */}
//           <div className="flex justify-center">
//             <motion.img
//               src={`${API_URL}${aboutData?.image}`}
//               alt="Tutoring"
//               className="rounded-3xl shadow-2xl w-full max-w-xl"
//               initial={{ y: 0 }}
//               animate={{ y: [-15, 15, -15] }} // Floating Effect
//               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//               whileHover={{ scale: 1.05, rotate: 1 }} // Interaction
//             />
//           </div>

//           {/* ABOUT CONTENT */}
//           <motion.div 
//             className="space-y-6"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerContainer}
//           >
//             {aboutData?.description?.slice(0, 2)?.map((ele, i) => (
//               <motion.p 
//                 key={i} 
//                 variants={fadeInUp} 
//                 className="text-gray-700 text-lg leading-relaxed"
//               >
//                 {ele}
//               </motion.p>
//             ))}
//           </motion.div>
//         </div>

//         <motion.div 
//           className="relative max-w-7xl mx-auto mt-10 items-center"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 1 }}
//           viewport={{ once: true }}
//         >
//           {aboutData?.description?.slice(2).map((ele, i) => (
//             <p key={i} className="text-gray-700 text-lg leading-relaxed mb-2">
//               {ele}
//             </p>
//           ))}
//         </motion.div>
//       </div>

//       {/* 🟢 NEW: MANAGEMENT TEAM SECTION (Why Us ke Upar) */}
//       {members && members.length > 0 && (
//         <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
//           <div className="max-w-7xl mx-auto text-center mb-20">
//             <motion.h2 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               className="text-blue-600 font-bold tracking-wide uppercase text-sm"
//             >
//               Our Leadership
//             </motion.h2>
//             <motion.h1 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 }}
//               className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl"
//             >
//               Meet the Management Team
//             </motion.h1>
//             <motion.p 
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.2 }}
//               className="mt-4 max-w-2xl text-xl  text-gray-700 text-lg mx-auto"
//             >
//               Visionaries guiding our path to excellence.
//             </motion.p>
//           </div>

//           {/* Management Grid with 3D Cards */}
//           <motion.div 
//             className="max-w-7xl mx-auto grid gap-y-24 gap-x-12 md:grid-cols-2 lg:gap-16 mt-10"
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.1 }}
//           >
//             {members.map((member) => (
//               <motion.div
//                 key={member._id}
//                 variants={fadeInUp}
//                 whileHover={{ 
//                   y: -15, // 3D Lift
//                   scale: 1.02, 
//                   boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)" // Deep Shadow
//                 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//                 className="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-8 pt-24 transition-all duration-300 text-center group"
//               >
//                 {/* Image Avatar */}
//                 <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 md:w-40 md:h-40">
//                   <motion.div 
//                     whileHover={{ scale: 1.1, rotate: 2 }}
//                     className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md bg-gray-200"
//                   >
//                     <img
//                       className="w-full h-full object-cover"
//                       src={
//                         member.image
//                           ? `${API_URL}${member.image}`
//                           : "https://via.placeholder.com/150"
//                       }
//                       alt={member.name}
//                       style={{ objectPosition: "top center" }}
//                       onError={(e) => {
//                         e.target.src = "https://via.placeholder.com/150";
//                       }}
//                     />
//                   </motion.div>
//                   {/* LinkedIn Icon */}
//                   <div className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 text-white shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:scale-110">
//                     <FaLinkedinIn size={14} />
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="mt-4">
//                   <h3 className="text-2xl font-bold text-gray-700 text-lg">
//                     {member.name}
//                   </h3>
//                   <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4">
//                     {member.role}
//                   </p>
//                   <p className="text-gray-700 text-lg leading-relaxed text-sm md:text-base text-justify whitespace-pre-line break-words">
//                     {member.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </section>
//       )}

//       {/* WHY US SECTION */}
//       <section className="py-10 bg-[#F0F8FF] px-6 sm:px-12 lg:px-20">
//         <div id='whyus' className="max-w-7xl mx-auto">
//           <motion.h2 
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3"
//           >
//             <ShieldCheck className="w-12 h-12 text-indigo-600" />
//             Why Us?
//           </motion.h2>
          
//           <motion.div 
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {aboutData?.whyUsDescription?.map((ele, i) => (
//               <motion.p 
//                 key={i} 
//                 variants={fadeInUp}
//                 className="text-gray-700 text-lg my-4 leading-relaxed"
//               >
//                 {ele}
//               </motion.p>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* --- HOW ARE WE DIFFERENT / SAFETY / TUTORS --- */}
//       <section className="py-10 md:py-24 bg-[#F0F8FF] px-4 sm:px-12 lg:px-20">
//         <div className="max-w-6xl mx-auto">
//           {/* How Are We Different Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16 flex items-center justify-center gap-2 md:gap-3">
//               <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-yellow-500" />
//               How Are We Different?
//             </h2>
//             {aboutData?.howDiffrentHeader && (
//               <p className="text-base md:text-xl text-gray-800 font-semibold mb-8 text-center px-4">
//                 {aboutData.howDiffrentHeader}
//               </p>
//             )}
//           </motion.div>

//           {/* Cards Grid */}
//           <motion.div 
//             className="grid md:grid-cols-2 gap-6 md:gap-10 text-gray-700 text-base md:text-lg leading-relaxed"
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {aboutData?.howDiffrentDescription?.map((ele, i) => (
//               <motion.div 
//                 key={i} 
//                 variants={fadeInUp}
//                 whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
//                 className="p-6 bg-white shadow-lg rounded-xl transition-all"
//               >
//                 • {ele}
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Safety Section */}
//           <div className="mt-12 md:mt-20">
//             <motion.h3 
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16 flex items-center justify-center gap-2 md:gap-3"
//             >
//               <FaShieldAlt className="text-blue-600 text-2xl md:text-4xl" />
//               Safety
//             </motion.h3>

//             <motion.div 
//               className="grid md:grid-cols-2 gap-6 md:gap-10"
//               variants={staggerContainer}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//             >
//               {aboutData?.safetyDescription?.map((ele, i) => (
//                 <motion.div 
//                   key={i} 
//                   variants={fadeInUp}
//                   whileHover={{ scale: 1.02 }}
//                   className="p-6 bg-white shadow-lg rounded-xl text-gray-700 text-base md:text-lg leading-relaxed transition-transform"
//                 >
//                   {ele}
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>

//           {/* Tutors Section */}
//           <div className="mt-12 md:mt-20">
//             <motion.h3 
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               viewport={{ once: true }}
//               className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16 flex items-center justify-center gap-2 md:gap-3"
//             >
//               <User className="w-8 h-8 md:w-12 md:h-12 text-blue-500" />
//               Tutors
//             </motion.h3>

//             <motion.div 
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               whileHover={{ boxShadow: "0px 15px 30px rgba(0,0,0,0.15)" }}
//               className="bg-white p-6 shadow-lg rounded-xl text-gray-700 text-base md:text-lg leading-relaxed"
//             >
//               {aboutData?.tutorDescription}
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };


// import React, { useEffect, useState, useRef } from "react";
// import backgroundImage from "../../assets/price-bg.png";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { FaRegLightbulb, FaShieldAlt, FaLinkedinIn } from "react-icons/fa";
// import { ShieldCheck, Sparkles, User } from "lucide-react";
// import { useLocation } from "react-router-dom";

// // 1. Framer Motion Import
// import { motion } from "framer-motion";

// export const About = () => {
//   const { hash } = useLocation();
//   const [aboutData, setAboutData] = useState(null); // Initial null for check
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true); // Animation trigger state
//   const headingRef = useRef(null);
//   const { pathname } = useLocation();

//   const API_URL = import.meta.env.VITE_APP_URL;

//   const getData = async () => {
//     try {
//       setLoading(true);
//       const [aboutRes, managementRes] = await Promise.all([
//         axios.get(`${API_URL}api/user/about`),
//         axios.get(`${API_URL}api/user/management`),
//       ]);

//       setAboutData(aboutRes?.data?.data);

//       if (managementRes?.data?.success) {
//         setMembers(managementRes?.data?.data);
//       }
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           error?.message ||
//           "something went wrong",
//         { position: "top-right" }
//       );
//     } finally {
//       setLoading(false); // Data load hone ke baad false
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

//   useEffect(() => {
//     if (!hash || loading) return; // Wait for loading to finish before scrolling to hash
//     const timer = setTimeout(() => {
//       const el = document.querySelector(hash);
//       if (el) {
//         el.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     }, 500);
//     return () => clearTimeout(timer);
//   }, [hash, loading]);

//   // 🔥 Animation Variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 },
//     },
//   };

//   // Jab tak data load na ho, loader dikhayein taaki animation miss na ho
//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-[#F0F8FF]">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* --- HERO SECTION --- */}
//       <div
//         ref={headingRef}
//         className="relative bg-[#F0F8FF] py-20 px-6 sm:px-12 lg:px-20 overflow-hidden"
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <motion.p 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-3xl md:text-4xl font-bold text-center mb-16"
//         >
//           About Us
//         </motion.p>

//         <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
//           {/* LEFT IMAGE (Floating 3D Animation) */}
//           <div className="flex justify-center">
//             {aboutData?.image && (
//               <motion.img
//                 src={`${API_URL}${aboutData?.image}`}
//                 alt="Tutoring"
//                 className="rounded-3xl shadow-2xl w-full max-w-xl"
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ 
//                   opacity: 1, 
//                   scale: 1,
//                   y: [-15, 15, -15] 
//                 }}
//                 transition={{ 
//                   opacity: { duration: 1 },
//                   scale: { duration: 1 },
//                   y: { duration: 6, repeat: Infinity, ease: "easeInOut" } 
//                 }}
//                 whileHover={{ scale: 1.05, rotate: 1 }}
//               />
//             )}
//           </div>

//           {/* ABOUT CONTENT */}
//           <motion.div 
//             key="about-hero"
//             className="space-y-6"
//             initial="hidden"
//             animate="visible"
//             variants={staggerContainer}
//           >
//             {aboutData?.description?.slice(0, 2)?.map((ele, i) => (
//               <motion.p 
//                 key={i} 
//                 variants={fadeInUp} 
//                 className="text-gray-700 text-lg leading-relaxed"
//               >
//                 {ele}
//               </motion.p>
//             ))}
//           </motion.div>
//         </div>

//         <motion.div 
//           className="relative max-w-7xl mx-auto mt-10 items-center"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 1 }}
//         >
//           {aboutData?.description?.slice(2).map((ele, i) => (
//             <p key={i} className="text-gray-700 text-lg leading-relaxed mb-2">
//               {ele}
//             </p>
//           ))}
//         </motion.div>
//       </div>

//       {/* 🟢 MANAGEMENT TEAM SECTION */}
//       {members && members.length > 0 && (
//         <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
//           <div className="max-w-7xl mx-auto text-center mb-20">
//             <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-blue-600 font-bold tracking-wide uppercase text-sm">
//               Our Leadership
//             </motion.h2>
//             <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
//               Meet the Management Team
//             </motion.h1>
//           </div>

//           <motion.div 
//             key={members.length}
//             className="max-w-7xl mx-auto grid gap-y-24 gap-x-12 md:grid-cols-2 lg:gap-16 mt-10"
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.1 }}
//           >
//             {members.map((member) => (
//               <motion.div
//                 key={member._id}
//                 variants={fadeInUp}
//                 whileHover={{ y: -15, scale: 1.02, boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
//                 className="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-8 pt-24 text-center group"
//               >
//                 <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 md:w-40 md:h-40">
//                   <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md bg-gray-200">
//                     <img
//                       className="w-full h-full object-cover"
//                       src={member.image ? `${API_URL}${member.image}` : "https://via.placeholder.com/150"}
//                       alt={member.name}
//                       style={{ objectPosition: "top center" }}
//                     />
//                   </div>
//                 </div>
//                 <div className="mt-4">
//                   <h3 className="text-2xl font-bold text-gray-700 text-lg">{member.name}</h3>
//                   <p className="text-sm font-bold text-blue-600 uppercase mb-4">{member.role}</p>
//                   <p className="text-gray-700 text-lg leading-relaxed text-sm md:text-base text-justify whitespace-pre-line break-words">
//                     {member.description}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </section>
//       )}

//       {/* WHY US SECTION */}
//       <section className="py-10 bg-[#F0F8FF] px-6 sm:px-12 lg:px-20">
//         <div id='whyus' className="max-w-7xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3">
//             <ShieldCheck className="w-12 h-12 text-indigo-600" /> Why Us?
//           </h2>
//           <motion.div variants={staggerContainer} initial="hidden" whileInView="visible">
//             {aboutData?.whyUsDescription?.map((ele, i) => (
//               <motion.p key={i} variants={fadeInUp} className="text-gray-700 text-lg my-4 leading-relaxed">
//                 {ele}
//               </motion.p>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* HOW ARE WE DIFFERENT / SAFETY / TUTORS */}
//       <section className="py-10 md:py-24 bg-[#F0F8FF] px-4 sm:px-12 lg:px-20">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 flex items-center justify-center gap-2">
//             <Sparkles className="w-8 h-8 text-yellow-500" /> How Are We Different?
//           </h2>
//           <motion.div 
//             className="grid md:grid-cols-2 gap-6"
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="visible"
//           >
//             {aboutData?.howDiffrentDescription?.map((ele, i) => (
//               <motion.div key={i} variants={fadeInUp} className="p-6 bg-white shadow-lg rounded-xl">
//                 • {ele}
//               </motion.div>
//             ))}
//           </motion.div>

//           <div className="mt-20">
//             <h3 className="text-2xl md:text-4xl font-bold text-center mb-10 flex items-center justify-center gap-2">
//               <FaShieldAlt className="text-blue-600" /> Safety
//             </h3>
//             <motion.div className="grid md:grid-cols-2 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible">
//               {aboutData?.safetyDescription?.map((ele, i) => (
//                 <motion.div key={i} variants={fadeInUp} className="p-6 bg-white shadow-lg rounded-xl text-gray-700">
//                   {ele}
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>

//           <div className="mt-20">
//             <h3 className="text-2xl md:text-4xl font-bold text-center mb-10 flex items-center justify-center gap-2">
//               <User className="w-8 h-8 text-blue-500" /> Tutors
//             </h3>
//             <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-white p-6 shadow-lg rounded-xl text-gray-700 text-lg">
//               {aboutData?.tutorDescription}
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

import React, { useEffect, useState, useRef } from "react";
import backgroundImage from "../../assets/price-bg.png";
import axios from "axios";
import { toast } from "react-toastify";
import { FaRegLightbulb, FaShieldAlt, FaLinkedinIn } from "react-icons/fa";
import { ShieldCheck, Sparkles, User } from "lucide-react";
import { useLocation } from "react-router-dom";

// 1. Framer Motion Import
import { motion } from "framer-motion";

export const About = () => {
  const { hash, pathname } = useLocation(); // Destructured hash and pathname
  const [aboutData, setAboutData] = useState(null); 
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true); 
  const headingRef = useRef(null);

  const API_URL = import.meta.env.VITE_APP_URL;

  const getData = async () => {
    try {
      setLoading(true);
      const [aboutRes, managementRes] = await Promise.all([
        axios.get(`${API_URL}api/user/about`),
        axios.get(`${API_URL}api/user/management`),
      ]);

      setAboutData(aboutRes?.data?.data);

      if (managementRes?.data?.success) {
        setMembers(managementRes?.data?.data);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error?.message ||
          "something went wrong",
        { position: "top-right" }
      );
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // 🔥 UPDATED SCROLL LOGIC: Loader khatam hone ke baad hi scroll trigger hoga
  useEffect(() => {
    if (loading) return; // Wait until data is loaded and DOM is ready

    const timer = setTimeout(() => {
      if (hash) {
        // Agar URL mein # (hash) hai toh wahan scroll karein
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else if (headingRef.current) {
        // Agar hash nahi hai (Header click), toh About Us heading par scroll karein
        headingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 500); // 500ms delay ensures render is complete

    return () => clearTimeout(timer);
  }, [loading, pathname, hash]); // Depends on loading finishing or route changing

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F0F8FF]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      {/* --- HERO SECTION --- */}
      <div
        ref={headingRef}
        className="relative bg-[#F0F8FF] py-20 px-6 sm:px-12 lg:px-20 overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          About Us
        </motion.p>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="flex justify-center">
            {aboutData?.image && (
              <motion.img
                src={`${API_URL}${aboutData?.image}`}
                alt="Tutoring"
                className="rounded-3xl shadow-2xl w-full max-w-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [-15, 15, -15] 
                }}
                transition={{ 
                  opacity: { duration: 1 },
                  scale: { duration: 1 },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" } 
                }}
                whileHover={{ scale: 1.05, rotate: 1 }}
              />
            )}
          </div>

          <motion.div 
            key="about-hero"
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {aboutData?.description?.slice(0, 2)?.map((ele, i) => (
              <motion.p 
                key={i} 
                variants={fadeInUp} 
                className="text-gray-700 text-lg leading-relaxed"
              >
                {ele}
              </motion.p>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="relative max-w-7xl mx-auto mt-10 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {aboutData?.description?.slice(2).map((ele, i) => (
            <p key={i} className="text-gray-700 text-lg leading-relaxed mb-2">
              {ele}
            </p>
          ))}
        </motion.div>
      </div>

      {members && members.length > 0 && (
        <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
          <div className="max-w-7xl mx-auto text-center mb-20">
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-blue-600 font-bold tracking-wide uppercase text-sm">
              Our Leadership
            </motion.h2>
            <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet the Management Team
            </motion.h1>
          </div>

          <motion.div 
            key={members.length}
            className="max-w-7xl mx-auto grid gap-y-24 gap-x-12 md:grid-cols-2 lg:gap-16 mt-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {members.map((member) => (
              <motion.div
                key={member._id}
                variants={fadeInUp}
                whileHover={{ y: -15, scale: 1.02, boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                className="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-8 pt-24 text-center group"
              >
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 md:w-40 md:h-40">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md bg-gray-200">
                    <img
                      className="w-full h-full object-cover"
                      src={member.image ? `${API_URL}${member.image}` : "https://via.placeholder.com/150"}
                      alt={member.name}
                      style={{ objectPosition: "top center" }}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl font-bold text-gray-700 text-lg">{member.name}</h3>
                  <p className="text-sm font-bold text-blue-600 uppercase mb-4">{member.role}</p>
                  <p className="text-gray-700 text-lg leading-relaxed text-sm md:text-base text-justify whitespace-pre-line break-words">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      <section className="py-10 bg-[#F0F8FF] px-6 sm:px-12 lg:px-20">
        <div id='whyus' className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3">
            <ShieldCheck className="w-12 h-12 text-indigo-600" /> Why Us?
          </h2>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible">
            {aboutData?.whyUsDescription?.map((ele, i) => (
              <motion.p key={i} variants={fadeInUp} className="text-gray-700 text-lg my-4 leading-relaxed">
                {ele}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-10 md:py-24 bg-[#F0F8FF] px-4 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 flex items-center justify-center gap-2">
            <Sparkles className="w-8 h-8 text-yellow-500" /> How Are We Different?
          </h2>
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
          >
            {aboutData?.howDiffrentDescription?.map((ele, i) => (
              <motion.div key={i} variants={fadeInUp} className="p-6 bg-white shadow-lg rounded-xl">
                • {ele}
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-20">
            <h3 className="text-2xl md:text-4xl font-bold text-center mb-10 flex items-center justify-center gap-2">
              <FaShieldAlt className="text-blue-600" /> Safety
            </h3>
            <motion.div className="grid md:grid-cols-2 gap-6" variants={staggerContainer} initial="hidden" whileInView="visible">
              {aboutData?.safetyDescription?.map((ele, i) => (
                <motion.div key={i} variants={fadeInUp} className="p-6 bg-white shadow-lg rounded-xl text-gray-700">
                  {ele}
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="mt-20">
            <h3 className="text-2xl md:text-4xl font-bold text-center mb-10 flex items-center justify-center gap-2">
              <User className="w-8 h-8 text-blue-500" /> Tutors
            </h3>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-white p-6 shadow-lg rounded-xl text-gray-700 text-lg">
              {aboutData?.tutorDescription}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};