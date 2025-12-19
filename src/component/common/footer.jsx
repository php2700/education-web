// import React, { useEffect, useState } from "react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaWhatsapp,
//   FaYoutube,
//   FaLinkedin,
// } from "react-icons/fa";
// import arrow from "../../assets/arrownext.png";
// import { IoIosArrowForward } from "react-icons/io";
// import footerImg from "../../assets/footer.png";
// import logo from "../../assets/logo.png";
// import callImg from "../../assets/call.png";
// import mail from "../../assets/mail.png";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Footer = () => {
//   const navigate = useNavigate();
//   const [bannerData, setBannerData] = useState([]);

//   const getBannerData = async () => {
//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_APP_URL}api/user/footer-banner`
//       );
//       setBannerData(res?.data?.data);
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
//     getBannerData();
//   }, []);

//   const handleUrl = (url) => {
//     navigate(url);
//   };

//   const handleWhatsApp = (e) => {
//     const phoneNumber = "+918860296060";
//     const url = `https://wa.me/${phoneNumber}`;
//     window.open(url, "_blank");
//   };

//   const handleFacebook = () => {
//     window.open(`${import.meta.env.VITE_APP_FACEBOOk}`, "_blank");
//   };

//   const handleInst = () => {
//     window.open(`${import.meta.env.VITE_APP_INSTA}`, "_blank");
//   };

//   const handleYoutube = () => {
//     window.open(`${import.meta.env.VITE_APP_YOUTUBE}`, "_blank");
//   };

//   const handleLinkedIn = () => {
//     window.open(`${import.meta.env.VITE_APP_LINKEDIN}`, "_blank");
//   };

//   const handleHome = () => {
//     navigate("/");
//   };

//   const handleGmail = () => {
//     const to = "info@mygges.com";
//     const subject = "Inquiry";
//     const body = "Hello Team,";

//     // const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${encodeURIComponent(
//     //   subject
//     // )}&body=${encodeURIComponent(body)}`;

//     // window.open(gmailUrl, "_blank");
//     const gmailUrl = `https://mail.google.com`;

//     window.open(gmailUrl, "_blank");
//   };

//   const handleCall = () => {
//     window.location.href = "tel:+918860296060";
//   };
//   return (
//     <footer className="bg-[#305CDE] text-gray-900">
//       {/* CTA Section with Background Image */}
//       {/* <section
//         className="relative py-24 px-6 text-center bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `url(${import.meta.env.VITE_APP_URL}${
//             bannerData?.image
//           })`,
//         }}
//       >
//         <div className="absolute inset-0 bg-black/40"></div>{" "}
//         <div className="relative max-w-4xl mx-auto z-10">
//           <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
//             {bannerData?.title}
//           </h2>
//           <p className="text-gray-200 mb-8">{bannerData?.description}</p>

//           <div className="flex flex-col md:flex-row justify-center items-center gap-4">
//             <button
//               onClick={() => handleUrl("/contact")}
//               className="cursor-pointer bg-white text-[#305CDE] px-6 py-3 rounded-lg font-medium flex items-center gap-3  transition"
//             >
//               Get Started
//               <img src={arrow} alt="Get Started Arrow" className="w-3 h-3  " />
//             </button>
//             <button
//               onClick={handleWhatsApp}
//               className="cursor-pointer border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-700 transition"
//             >
//               Talk to an Advisor
//             </button>
//           </div>
//         </div>
//       </section> */}
//       {/* CTA Section - Fixed for Responsive */}
//       <section className="relative w-full">
//         {/* 1. MOBILE IMAGE (Sirf Mobile pe dikhega) */}
//         {/* Isse image puri dikhegi, kategi nahi */}
//         <div className="block md:hidden w-full">
//           <img
//             src={`${import.meta.env.VITE_APP_URL}${bannerData?.image}`}
//             alt="Learning Journey"
//             className="w-full h-auto object-cover"
//           />
//         </div>

//         {/* 2. DESKTOP BACKGROUND IMAGE (Sirf Desktop pe dikhega) */}
//         <div
//           className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: `url(${import.meta.env.VITE_APP_URL}${
//               bannerData?.image
//             })`,
//           }}
//         >
//           {/* Black Overlay only for Desktop */}
//           <div className="absolute inset-0 bg-black/40"></div>
//         </div>

//         {/* 3. TEXT CONTENT AREA */}
//         {/* Mobile pe Blue Background, Desktop pe Transparent */}
//         <div className="relative z-10 py-12 px-6 text-center md:py-24 bg-[#305CDE] md:bg-transparent">
//           <div className="max-w-4xl mx-auto">
//             <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
//               {bannerData?.title}
//             </h2>
//             <p className="text-gray-200 mb-8">{bannerData?.description}</p>

//             <div className="flex flex-col md:flex-row justify-center items-center gap-4">
//               <button
//                 onClick={() => handleUrl("/contact")}
//                 className="cursor-pointer bg-white text-[#305CDE] px-6 py-3 rounded-lg font-medium flex items-center gap-3 transition"
//               >
//                 Get Started
//                 <img src={arrow} alt="Get Started Arrow" className="w-3 h-3" />
//               </button>
//               <button
//                 onClick={handleWhatsApp}
//                 className="cursor-pointer border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-700 transition"
//               >
//                 Talk to an Advisor
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <section className="bg-blue-700 text-white py-12 px-6 md:px-10">
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
//           {/* Left About Section */}
//           <div>
//             <div className="flex justify-center cursor-pointer md:justify-start">
//               <img onClick={() => handleHome()} src={logo} />
//             </div>
//             <p className="text-md leading-relaxed my-5">
//               Personalized online tutoring to help students achieve their
//               academic goals.
//             </p>
//             <div className="flex justify-center md:justify-start gap-3">
//               <div
//                 onClick={() => handleFacebook()}
//                 className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition"
//               >
//                 <FaFacebookF />
//               </div>
//               <div
//                 onClick={() => handleYoutube()}
//                 className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition"
//               >
//                 <FaYoutube />
//               </div>
//               <div
//                 onClick={() => handleInst()}
//                 className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition"
//               >
//                 <FaInstagram />
//               </div>
//               <div
//                 onClick={() => handleLinkedIn()}
//                 className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition"
//               >
//                 <FaLinkedin />
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
//             <ul className="space-y-2 text-md">
//               <li>
//                 <div
//                   onClick={() => {
//                     handleUrl("/about");
//                   }}
//                   className="hover:underline cursor-pointer cursor-pointer"
//                 >
//                   About
//                 </div>
//               </li>
//               {/* <li>
//                 <a href="#" className="hover:underline cursor-pointer">
//                   Subjects
//                 </a>
//               </li> */}
//               <li>
//                 <div
//                   onClick={() => {
//                     handleUrl("/pricing");
//                   }}
//                   className="hover:underline cursor-pointer"
//                 >
//                   Pricing
//                 </div>
//               </li>
//               <li>
//                 <div
//                   onClick={() => {
//                     handleUrl("/blog");
//                   }}
//                   className="hover:underline cursor-pointer"
//                 >
//                   Blog
//                 </div>
//               </li>
//               <li>
//                 <div
//                   onClick={() => {
//                     handleUrl("/faq");
//                   }}
//                   className="hover:underline cursor-pointer"
//                 >
//                   FAQ
//                 </div>
//               </li>
//             </ul>
//           </div>

//           {/* Support Links */}
//           <div>
//             <h4 className="font-semibold text-lg mb-4">Support</h4>
//             <ul className="space-y-2 text-md">
//               {/* <li>
//                 <div
//                   onClick={() => {
//                     // handleUrl("/help");
//                     handleUrl("/faq");
//                   }}
//                   className="hover:underline cursor-pointer"
//                 >
//                   Help Center
//                 </div>
//               </li> */}
//               <li>
//                 <div
//                   onClick={() => {
//                     handleUrl("/privacy-policy");
//                   }}
//                   className="hover:underline cursor-pointer"
//                 >
//                   Privacy Policy
//                 </div>
//               </li>
//               <li>
//                 <div
//                   onClick={() => {
//                     handleUrl("/term-condition");
//                   }}
//                   className="hover:underline cursor-pointer"
//                 >
//                   Term & Condition
//                 </div>
//               </li>
//               <li>
//                 <div
//                   onClick={() => handleUrl("/contact")}
//                   className="hover:underline cursor-pointer"
//                 >
//                   Contact Support
//                 </div>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Section */}
//           <div>
//             <h4 className="font-semibold text-lg mb-4">Contact</h4>
//             <ul className="space-y-2 text-md">
//               <li
//                 onClick={handleGmail}
//                 className="flex items-center gap-2 justify-center md:justify-start"
//               >
//                 <img src={mail} alt="Mail" className="w-4 h-4" />
//                 <span onClick={handleGmail} className="cursor-pointer hover:underline">
//                   info@mygges.com
//                 </span>
//               </li>
//               <li className="flex items-center gap-2  cursor-pointer justify-center md:justify-start">
//                 <img src={callImg} alt="Call" className="w-4 h-4" />
//                 <span onClick={handleCall} className="hover:underline">+91-886-029-6060</span>
//               </li>
//               <li className="flex justify-center md:justify-start">
//                 <button
//                   onClick={handleWhatsApp}
//                   className="cursor-pointer bg-white text-blue-700  font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition flex items-center gap-2"
//                 >
//                   <FaWhatsapp className="text-green-500 text-xl " />
//                   Live Chat
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//         {/* Bottom Footer */}
//         <div className="mt-10 text-center text-md text-blue-100 pt-6">
//           © 2026 <span className="font-semibold">Grace Global Education Services ,</span> All rights reserved
//         </div>
//       </section>
//     </footer>
//   );
// };

// export default Footer;




import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import arrow from "../../assets/arrownext.png";
import { IoIosArrowForward } from "react-icons/io";
import footerImg from "../../assets/footer.png";
import logo from "../../assets/logo.png";
import callImg from "../../assets/call.png";
import mail from "../../assets/mail.png";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// 1. Framer Motion Import
import { motion } from "framer-motion";

const Footer = () => {
  const navigate = useNavigate();
  const [bannerData, setBannerData] = useState([]);

  const getBannerData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/footer-banner`
      );
      setBannerData(res?.data?.data);
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
    getBannerData();
  }, []);

  const handleUrl = (url) => {
    navigate(url);
  };

  const handleWhatsApp = (e) => {
    const phoneNumber = "+918860296060";
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  const handleFacebook = () => {
    window.open(`${import.meta.env.VITE_APP_FACEBOOk}`, "_blank");
  };

  const handleInst = () => {
    window.open(`${import.meta.env.VITE_APP_INSTA}`, "_blank");
  };

  const handleYoutube = () => {
    window.open(`${import.meta.env.VITE_APP_YOUTUBE}`, "_blank");
  };

  const handleLinkedIn = () => {
    window.open(`${import.meta.env.VITE_APP_LINKEDIN}`, "_blank");
  };

  const handleHome = () => {
    navigate("/");
  };

   const handleGmail = () => { window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=info@mygges.com`, "_blank"); };

  const handleCall = () => {
    window.location.href = "tel:+918860296060";
  };

  // 🔥 Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Columns ek ke baad ek aayenge
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer className="bg-[#305CDE] text-gray-900 overflow-hidden">
      
      {/* CTA Section */}
      <section className="relative w-full">
        {/* Mobile Image */}
        <div className="block md:hidden w-full">
          <img
            src={`${import.meta.env.VITE_APP_URL}${bannerData?.image}`}
            alt="Learning Journey"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Desktop Image */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${import.meta.env.VITE_APP_URL}${
              bannerData?.image
            })`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Text Content with Animation */}
        <div className="relative z-10 py-12 px-6 text-center md:py-24 bg-[#305CDE] md:bg-transparent">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
              {bannerData?.title}
            </h2>
            <p className="text-gray-200 mb-8 text-lg">{bannerData?.description}</p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <motion.button
                onClick={() => handleUrl("/contact")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer bg-white text-[#305CDE] px-6 py-3 rounded-lg font-medium flex items-center gap-3 transition shadow-lg"
              >
                Get Started
                <img src={arrow} alt="Get Started Arrow" className="w-3 h-3" />
              </motion.button>
              
              <motion.button
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer border border-white text-white px-6 py-3 rounded-lg font-medium hover:text-blue-200 transition"
              >
                Talk to an Advisor
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section with Staggered Animation */}
      <section className="bg-blue-700 text-white py-12 px-6 md:px-10">
        <motion.div 
          className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left About Section */}
          <motion.div variants={itemVariants}>
            <div className="flex justify-center cursor-pointer md:justify-start">
              <img onClick={() => handleHome()} src={logo} alt="Logo" className="h-10 w-auto" />
            </div>
            <p className="text-md leading-relaxed my-5 text-blue-100">
              Personalized online tutoring to help students achieve their
              academic goals.
            </p>
            <div className="flex justify-center md:justify-start gap-3">
              {[
                { icon: <FaFacebookF />, action: handleFacebook },
                { icon: <FaYoutube />, action: handleYoutube },
                { icon: <FaInstagram />, action: handleInst },
                { icon: <FaLinkedin />, action: handleLinkedIn },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  onClick={item.action}
                  whileHover={{ y: -5, backgroundColor: "#2563EB" }} // Float effect
                  className="bg-blue-500 p-2 rounded-full cursor-pointer transition shadow-md"
                >
                  {item.icon}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-4 text-blue-200">Quick Links</h4>
            <ul className="space-y-2 text-md">
              {[
                { name: "About", url: "/about" },
                { name: "Pricing", url: "/pricing" },
                { name: "Blog", url: "/blog" },
                { name: "FAQ", url: "/faq" },
              ].map((link, index) => (
                <motion.li 
                  key={index} 
                  whileHover={{ x: 5, color: "#93c5fd" }} // Slide right on hover
                  className="transition-colors w-fit mx-auto md:mx-0"
                >
                  <div onClick={() => handleUrl(link.url)} className="cursor-pointer">
                    {link.name}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-4 text-blue-200">Support</h4>
            <ul className="space-y-2 text-md">
              {[
                { name: "Privacy Policy", url: "/privacy-policy" },
                { name: "Terms & Conditions", url: "/term-condition" },
                { name: "Contact Support", url: "/contact" },
              ].map((link, index) => (
                <motion.li 
                  key={index} 
                  whileHover={{ x: 5, color: "#93c5fd" }} // Slide right on hover
                  className="transition-colors w-fit mx-auto md:mx-0"
                >
                  <div onClick={() => handleUrl(link.url)} className="cursor-pointer">
                    {link.name}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-lg mb-4 text-blue-200">Contact</h4>
            <ul className="space-y-3 text-md">
              <motion.li 
                whileHover={{ x: 5 }}
                onClick={handleGmail}
                className="flex items-center gap-2 justify-center md:justify-start cursor-pointer group"
              >
                <img src={mail} alt="Mail" className="w-4 h-4 opacity-80 group-hover:opacity-100" />
                <span onClick={handleGmail} className="hover:text-blue-200 transition">info@mygges.com</span>
              </motion.li>
              
              <motion.li 
                whileHover={{ x: 5 }}
                onClick={handleCall}
                className="flex items-center gap-2 justify-center md:justify-start cursor-pointer group"
              >
                <img src={callImg} alt="Call" className="w-4 h-4 opacity-80 group-hover:opacity-100" />
                <span className="hover:text-blue-200 transition">+91-886-029-6060</span>
              </motion.li>
              
              <li className="flex justify-center md:justify-start mt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWhatsApp}
                  className="cursor-pointer bg-white text-blue-700 font-bold px-5 py-2 rounded-full hover:bg-gray-100 transition flex items-center gap-2 shadow-lg"
                >
                  <FaWhatsapp className="text-green-500 text-xl" />
                  Live Chat
                </motion.button>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 border-t border-blue-500/30 pt-6 text-center text-sm text-blue-200"
        >
          © 2026 <span className="font-semibold text-white">Grace Global Education Services,</span> All rights reserved
        </motion.div>
      </section>
    </footer>
  );
};

export default Footer;