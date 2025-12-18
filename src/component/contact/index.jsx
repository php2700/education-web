// import axios from "axios";
// import React, { useEffect, useRef, useState } from "react";
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
// import { useLocation } from "react-router-dom";
// import { toast } from "react-toastify";

// export const Contact = () => {
//     const headingRef=useRef()
// const location=useLocation()
//   const [error, setError] = useState();
//   const [contactTextData, setContactTextData] = useState();
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     message: "",
//   });

//   const getData = async () => {
//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_APP_URL}api/user/contact`
//       );
//       setContactTextData(res?.data?.data);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           error?.message ||
//           "something went wrong",
//         { position: "top-right" }
//       );
//     }
//   };

//   const handleform = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         `${import.meta.env.VITE_APP_URL}api/user/contact`,
//         form
//       );
//       if (res?.data) {
//         setForm({
//           name: "",
//           email: "",
//           message: "",
//           mobile: "",
//         });
//         toast.success("Form submitted", {
//           position: "top-right",
//         });
//       }
//     } catch (error) {
//       toast.error(
//         error?.response?.data?.message ||
//           error?.message ||
//           "something went wrong"
//       );
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);



//    useEffect(()=>{
//       if(headingRef?.current){
//         headingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     },[location?.pathname])

//   return (
//     <div ref={headingRef} className=" bg-[#F0F8FF] min-h-screen py-20 px-6 sm:px-12 lg:px-20">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
//         {/* LEFT SIDE — Info */}
//         <div >
//           <h3  className="text-blue-600 font-semibold tracking-widest mb-2">
//             CONTACT US
//           </h3>

//           <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0E1D3E] leading-tight">
//             Get In Touch With Us
//           </h1>

//           <p className="text-gray-600 mt-4 text-lg leading-relaxed">
//             {contactTextData?.description}
           
//           </p>

//           {/* Contact Details */}
//           <div className="mt-10 space-y-6">
//             <div className="flex items-center gap-4">
//               <FaPhoneAlt  className="text-blue-600 text-2xl" />
//               <p className="text-lg text-gray-700 font-medium">
//                 {contactTextData?.mobile}
//               </p>
//             </div>

//             <div className="flex items-center gap-4">
//               <FaEnvelope className="text-blue-600 text-2xl" />
//               <p className="text-lg text-gray-700 font-medium">
//                 {contactTextData?.email}
//               </p>
//             </div>

//             <div className="flex   gap-4">
//               <FaMapMarkerAlt className="text-blue-600 text-2xl mt-1" />
//               <p className="text-lg text-gray-700 font-medium whitespace-pre-line">
//                 {contactTextData?.address}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE — Form */}
//         <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label classname="block text-gray-700 font-medium">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 onChange={handleform}
//                 value={form?.name}
//                 placeholder="Enter your name"
//                 className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 font-medium">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={form?.email}
//                 onChange={handleform}
//                 placeholder="Your email address"
//                 className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 font-medium">
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 name="mobile"
//                 value={form?.mobile}
//                 onChange={handleform}
//                 placeholder="Your phone number"
//                 className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
//               />
//             </div>

//             <div>
//               <label className="block text-gray-700 font-medium">Message</label>
//               <textarea
//                 rows="4"
//                 name="message"
//                 value={form?.message}
//                 onChange={handleform}
//                 placeholder="Write your message..."
//                 className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
//               ></textarea>
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };


import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

// 1. Framer Motion Import
import { motion } from "framer-motion";

export const Contact = () => {
  const headingRef = useRef();
  const location = useLocation();
  const [error, setError] = useState();
  const [contactTextData, setContactTextData] = useState();
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const getData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/contact`
      );
      setContactTextData(res?.data?.data);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error?.message ||
          "something went wrong",
        { position: "top-right" }
      );
    }
  };

  const handleform = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_APP_URL}api/user/contact`,
        form
      );
      if (res?.data) {
        setForm({
          name: "",
          email: "",
          message: "",
          mobile: "",
        });
        toast.success("Form submitted", {
          position: "top-right",
        });
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "something went wrong"
      );
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (headingRef?.current) {
      headingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location?.pathname]);

  // 🔥 Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div
      ref={headingRef}
      className="bg-[#F0F8FF] min-h-screen py-20 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE — Info (Slide In from Left) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3 
            variants={itemVariants}
            className="text-blue-600 font-semibold tracking-widest mb-2"
          >
            CONTACT US
          </motion.h3>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-extrabold text-[#0E1D3E] leading-tight"
          >
            Get In Touch With Us
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-gray-600 mt-4 text-lg leading-relaxed"
          >
            {contactTextData?.description}
          </motion.p>

          {/* Contact Details with Pop Animation */}
          <div className="mt-10 space-y-6">
            <motion.div 
              variants={itemVariants}
              whileHover={{ x: 10 }} // Slide right on hover
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="bg-white p-3 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                <FaPhoneAlt className="text-blue-600 text-2xl" />
              </div>
              <p className="text-lg text-gray-700 font-medium">
                {contactTextData?.mobile}
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="bg-white p-3 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope className="text-blue-600 text-2xl" />
              </div>
              <p className="text-lg text-gray-700 font-medium">
                {contactTextData?.email}
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="flex gap-4 group cursor-pointer"
            >
              <div className="bg-white p-3 rounded-full shadow-md h-fit group-hover:scale-110 transition-transform duration-300">
                <FaMapMarkerAlt className="text-blue-600 text-2xl" />
              </div>
              <p className="text-lg text-gray-700 font-medium whitespace-pre-line mt-1">
                {contactTextData?.address}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE — Form (3D Floating Animation) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          
          // 🔥 Continuous Floating Effect
          animate={{ y: [0, -10, 0] }}
          // transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          
          className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium">
                Your Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="name"
                onChange={handleform}
                value={form?.name}
                placeholder="Enter your name"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                name="email"
                value={form?.email}
                onChange={handleform}
                placeholder="Your email address"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                Phone Number
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                name="mobile"
                value={form?.mobile}
                onChange={handleform}
                placeholder="Your phone number"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                rows="4"
                name="message"
                value={form?.message}
                onChange={handleform}
                placeholder="Write your message..."
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all"
              ></motion.textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/40"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};