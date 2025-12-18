// import { useEffect, useState } from "react";
// import trust1 from "../../assets/trust-1.png";
// import trust2 from "../../assets/trust-2.png";
// import trust3 from "../../assets/trust-3.png";
// import trust4 from "../../assets/trust-4.png";
// import backgroundImage from "../../assets/work-bg.png";
// import { toast } from "react-toastify";
// import axios from "axios";

// export const Trust = () => {
//   const [trustData, setTrustData] = useState([]);

//   const stats = [
//     {
//       icon: trust1,
//       value: "500+",
//       label: "Active Students",
//     },
//     {
//       icon: trust2,
//       value: "100+",
//       label: "Expert Tutors",
//     },
//     {
//       icon: trust3,
//       value: "50,000+",
//       label: "Sessions Completed",
//     },
//     {
//       icon: trust4,
//       value: "99%",
//       label: "Satisfaction Rate",
//     },
//   ];

//   const getTrustData = async () => {
//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_APP_URL}api/user/trust`
//       );
//       setTrustData(res?.data?.data);
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
//     getTrustData();
//   }, []);
//   return (
//     <section
//       className="py-16 bg-[#F0F8FF] px-4 relative"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "contain",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="max-w-7xl container mx-auto text-center relative z-10">
//         <h2 className="text-3xl md:text-4xl font-bold mb-2">
//           Trust & Credibility
//         </h2>
//         <p className="text-gray-600 text-lg mb-10">
//           Join Our Growing Community of Successful Learners
//         </p>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {trustData.map((stat, i) => (
//             <div key={i} className="flex flex-col items-center">
//               <div className="text-blue-600 mb-2  border border-gray-200 rounded-xl shadow-xl">
//                 <img
//                   src={`${import.meta.env.VITE_APP_URL}${stat.image}`}
//                   className="p-2"
//                 />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900">{stat.title}</h3>
//               <p className="text-gray-600 text-sm">{stat.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

import { useEffect, useState } from "react";
import trust1 from "../../assets/trust-1.png";
import trust2 from "../../assets/trust-2.png";
import trust3 from "../../assets/trust-3.png";
import trust4 from "../../assets/trust-4.png";
import backgroundImage from "../../assets/work-bg.png";
import { toast } from "react-toastify";
import axios from "axios";

// 1. Framer Motion Import
import { motion } from "framer-motion";

export const Trust = () => {
  const [trustData, setTrustData] = useState([]);

  // Stats array (kept as reference/fallback)
  const stats = [
    {
      icon: trust1,
      value: "500+",
      label: "Active Students",
    },
    {
      icon: trust2,
      value: "100+",
      label: "Expert Tutors",
    },
    {
      icon: trust3,
      value: "50,000+",
      label: "Sessions Completed",
    },
    {
      icon: trust4,
      value: "99%",
      label: "Satisfaction Rate",
    },
  ];

  const getTrustData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/trust`
      );
      setTrustData(res?.data?.data);
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
    getTrustData();
  }, []);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section
      className="py-16 bg-[#F0F8FF] px-4 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl container mx-auto text-center relative z-10">
        
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Trust & Credibility
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Join Our Growing Community of Successful Learners
          </p>
        </motion.div>

        {/* Animated Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {trustData.map((stat, i) => (
            <motion.div 
              key={i} 
              className="flex flex-col items-center"
              variants={cardVariants}
              whileHover={{ 
                y: -10, // Card lifts up
                transition: { type: "spring", stiffness: 300 } 
              }}
            >
              {/* 
                 ✅ UPDATED: Icon Circular Rotation Animation 
                 - rotateY: 360 (Gives a 3D coin spin effect)
                 - duration: 0.8s (Smooth spin)
              */}
              <motion.div 
                className="text-blue-600 mb-2 border border-gray-200 rounded-xl shadow-xl bg-white"
                whileHover={{ 
                  rotateY: 360, // 360 degree spin on Y-axis
                  scale: 1.1    // Slight zoom
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <img
                  src={`${import.meta.env.VITE_APP_URL}${stat.image}`}
                  className="p-2"
                  alt={stat.title}
                />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-gray-900">{stat.title}</h3>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
