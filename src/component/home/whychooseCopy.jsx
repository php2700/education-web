// import icon1 from "../../assets/icon-container.png";
// import icon2 from "../../assets/icon-container-2.png";
// import icon3 from "../../assets/icon-container-3.png";
// import icon4 from "../../assets/icon-container-4.png";
// import icon5 from "../../assets/icon-container-5.png";
// import backgroundImage from "../../assets/work-bg.png";
// import editImg from "../../assets/editImg.png";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// const WhyChooseUs = () => {
//   const [whychooseData, setWhyChooseData] = useState([]);

//   const getWhyChooseData = async () => {
//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_APP_URL}api/user/why-choose`
//       );
//       setWhyChooseData(res?.data?.data);
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
//     getWhyChooseData();
//   }, []);

//   return (
//     <section
//       className="bg-[#F0F8FF] py-16 px-6 sm:px-10 lg:px-12 relative"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "contain",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="absolute top-0 left-40 ">
//         <img src={editImg} />
//       </div>
//       {/* Heading */}
//       <div className="text-center mb-12">
//         <h2 className="font-[Poppins] font-semibold text-[48px] leading-[40px] tracking-[0px] text-[#1A202C] text-center">
//           Why Choose Us?
//         </h2>
//         <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//           We provide a learning experience that is effective, convenient, and
//           tailored to you.
//         </p>
//       </div>

//       {/* Flex layout for perfect centering */}
//       <div className="flex flex-wrap justify-center gap-6 container mx-auto">
//         {whychooseData?.map((item, index) => (
//           <div
//             key={index}
//             className="
//               flex 
//               items-start 
//               bg-white 
//               transition-all 
//               p-5 
//               w-full 
//               sm:w-[45%] 
//               lg:w-[30%] 
//               max-w-md
//             "
//           >
//             <div className="mr-4 flex-shrink-0">
//               <img
//                 src={`${import.meta.env.VITE_APP_URL}${item.image}`}
//                 alt={item.title}
//                 className="w-12 h-12"
//               />
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold text-gray-900">
//                 {item.title}
//               </h3>
//               <p className="mt-1 text-lg text-gray-600 ">{item.description}</p>
              
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;


// animation




import icon1 from "../../assets/icon-container.png";
import icon2 from "../../assets/icon-container-2.png";
import icon3 from "../../assets/icon-container-3.png";
import icon4 from "../../assets/icon-container-4.png";
import icon5 from "../../assets/icon-container-5.png";
import backgroundImage from "../../assets/work-bg.png";
import editImg from "../../assets/editImg.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

// 1. Framer Motion Import करें
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const [whychooseData, setWhyChooseData] = useState([]);

  const getWhyChooseData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/why-choose`
      );
      setWhyChooseData(res?.data?.data);
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
    getWhyChooseData();
  }, []);

  // Animation Variants (Settings)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // कार्ड्स एक के बाद एक आएंगे
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // नीचे से शुरू होगा
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      className="bg-[#F0F8FF] py-20 px-6 sm:px-10 lg:px-12 relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover", // Changed to cover for better look
        backgroundPosition: "center",
      }}
    >
      {/* Floating 3D Image Animation */}
      <motion.div 
        className="absolute top-10 left-10 lg:left-40 hidden sm:block opacity-80"
        animate={{ y: [0, -20, 0] }} // ऊपर-नीचे तैरेगा
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src={editImg} alt="Decoration" className="w-24 md:w-32 drop-shadow-xl" />
      </motion.div>

      {/* Heading Animation */}
      <div className="text-center mb-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-[Poppins] font-bold text-[40px] md:text-[48px] leading-tight text-[#1A202C]"
        >
          Why Choose Us?
        </motion.h2>
        <motion.div 
          initial={{ width: 0 }} 
          whileInView={{ width: 100 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-blue-500 mx-auto mt-2 mb-4 rounded-full"
        />
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          We provide a learning experience that is effective, convenient, and
          tailored to you.
        </motion.p>
      </div>

      {/* Cards Container with Stagger Effect */}
      <motion.div 
        className="flex flex-wrap justify-center gap-8 container mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {whychooseData?.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              y: -10, // Hover करने पर कार्ड ऊपर उठेगा
              scale: 1.02, // थोड़ा बड़ा होगा
              boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.15)" // 3D Shadow
            }}
            className="
              flex 
              items-start 
              bg-white 
              p-6 md:p-8
              rounded-2xl
              w-full 
              sm:w-[45%] 
              lg:w-[30%] 
              max-w-md
              shadow-md
              border border-gray-100
              cursor-pointer
              transition-colors duration-300
            "
          >
            {/* Animated Icon */}
            <motion.div 
              className="mr-5 flex-shrink-0"
              whileHover={{ rotate: 15, scale: 1.1 }} // Icon थोड़ा घूमेगा
            >
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center shadow-inner">
                <img
                  src={`${import.meta.env.VITE_APP_URL}${item.image}`}
                  alt={item.title}
                  className="w-10 h-10 object-contain"
                />
              </div>
            </motion.div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
