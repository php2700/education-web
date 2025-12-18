// import React, { useEffect, useState, useRef } from "react";
// import backgroundImage from "../../assets/price-bg.png";
// import female1 from "../../assets/pricing1.png";
// import female12 from "../../assets/student2.png";
// import female13 from "../../assets/student3.png";
// import dotted from "../../assets/dotted.png";
// import line from "../../assets/divider-line.png";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useLocation, useNavigate } from "react-router-dom";

// const PricingPage = () => {
//   const navigate = useNavigate();
//   const [pricingData, setPricingData] = useState();
//   const headingRef = useRef(null); // Reference create kiya
//   const { pathname } = useLocation(); // URL track karne ke liye

//   useEffect(() => {
//     fetchAllData();
//   }, []);
//   useEffect(() => {
//     if (headingRef.current) {
//       // Ye function page ko scroll karke heading par le aayega
//       headingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
//     } else {
//       window.scrollTo(0, 0);
//     }
//   }, [pathname]); // Jab bhi URL badlega ye chalega

//   const fetchAllData = async () => {
//     try {
//       const [pricingRes] = await Promise.all([
//         axios.get(`${import.meta.env.VITE_APP_URL}api/user/pricing`),
//       ]);
//       setPricingData(pricingRes?.data?.data);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           error.message ||
//           "Something went wrong",
//         { position: "top-right" }
//       );
//     }
//   };

//   // const handleUrl=()=>{
//   //   navigate('/contact')
//   // }
//   const handleUrl = () => {
//     navigate("/contact");
//   };
//   return (
//     <div
//       className="bg-[#F0F8FF] py-16 px-6 sm:px-10 lg:px-12 h-full"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "contain",
//         backgroundPosition: "center",
//       }}
//     >
//       <main className="container max-w-7xl mx-auto px-4 py-12 relative">
//         <h1
//           ref={headingRef}
//           className="text-center text-4xl font-bold mb-16 text-gray-900"
//         >
//           OUR PRICING
//         </h1>

//         <div className="hidden lg:block absolute left-1/2 top-40 bottom-40 transform -translate-x-1/2 z-0">
//           <img src={line} alt="Vertical Line" className="h-full w-auto" />
//         </div>
//         {pricingData?.map((ele, index) => (
//           <div
//             key={ele.id}
//             className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10 py-10"
//           >
//             {/* IMAGE SECTION */}
//             <div
//               className={`flex justify-center ${
//                 index % 2 !== 0 ? "lg:order-2" : "lg:order-1"
//               }`}
//             >
//               <img
//                 src={`${import.meta.env.VITE_APP_URL}${ele.image}`}
//                 alt="Plan"
//                 className="
//           rounded-xl shadow-lg 
//           w-full max-w-xs sm:max-w-sm md:max-w-md 
//           object-cover
//         "
//               />
//             </div>

//             {/* TABLE SECTION */}
//             <div
//               className={`
//         bg-white rounded-xl p-6 border border-gray-200 
//         w-full mx-auto shadow-md
//         ${index % 2 !== 0 ? "lg:order-1" : "lg:order-2"}
//       `}
//             >
//               <div className="overflow-x-auto">
//                 <table className="min-w-full border border-gray-200 rounded-lg text-sm sm:text-base">
//                   <thead>
//                     <tr>
//                       <th className="py-3 px-4 text-left">
//                         <h3 className="text-lg sm:text-xl font-bold text-gray-800">
//                           Plan Name
//                         </h3>
//                         {/* <p className="text-gray-600 mt-2 sm:mt-3 text-base sm:text-lg">
//                   {ele?.planName}
//                 </p> */}
//                         <p className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold bg-rose-100 text-rose-700 px-3 py-1 rounded-lg inline-block shadow-sm">
//                           {ele?.planName}
//                         </p>
//                       </th>

//                       <th className="py-3 px-4 text-center font-semibold text-gray-700">
//                         <span className="text-base sm:text-lg">Classes</span>
//                         <div className="mt-2">
//                           <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-xs sm:text-sm">
//                             {ele.className}
//                           </button>
//                         </div>
//                       </th>
//                     </tr>
//                   </thead>

//                   <tbody>
//                     {ele?.fees?.map((feeItem, i) => (
//                       <tr key={i} className="border-t border-gray-200">
//                         <td className="py-3 px-4 text-gray-700 font-medium text-base sm:text-lg">
//                           {feeItem?.label}
//                         </td>
//                         <td className="py-3 px-4 text-center text-gray-600 text-base sm:text-lg">
//                           {feeItem?.price}
//                         </td>
//                       </tr>
//                     ))}

//                     <tr className="border-t border-gray-200">
//                       <td className="py-3 px-4 text-gray-700 font-medium text-base sm:text-lg">
//                         Fees Per Hour
//                       </td>
//                       <td className="py-3 px-4 text-center text-gray-600 text-base sm:text-lg">
//                         {ele?.feesPerHour || "-"}
//                       </td>
//                     </tr>

//                     <tr className="border-t border-gray-200">
//                       <td className="py-3 px-4 text-gray-700 font-medium text-base sm:text-lg">
//                         Saving In Offers
//                       </td>
//                       <td className="py-3 px-4 text-center text-gray-600 text-base sm:text-lg">
//                         {ele?.off || "-"}
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         ))}

//         <div className="my-8">
//           <img src={dotted} alt="Dotted Line" />
//         </div>

//         <div className="flex justify-center mt-10">
//           <button
//             onClick={handleUrl}
//             className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 text-lg"
//           >
//             Get Started
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="ml-3 h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M14 5l7 7m0 0l-7 7m7-7H3"
//               />
//             </svg>
//           </button>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default PricingPage;


import React, { useEffect, useState, useRef } from "react";
import backgroundImage from "../../assets/price-bg.png";
import female1 from "../../assets/pricing1.png";
import female12 from "../../assets/student2.png";
import female13 from "../../assets/student3.png";
import dotted from "../../assets/dotted.png";
import line from "../../assets/divider-line.png";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

// 1. Framer Motion Import
import { motion } from "framer-motion";

const PricingPage = () => {
  const navigate = useNavigate();
  const [pricingData, setPricingData] = useState();
  const headingRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    fetchAllData();
  }, []);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  const fetchAllData = async () => {
    try {
      const [pricingRes] = await Promise.all([
        axios.get(`${import.meta.env.VITE_APP_URL}api/user/pricing`),
      ]);
      setPricingData(pricingRes?.data?.data);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong",
        { position: "top-right" }
      );
    }
  };

  const handleUrl = () => {
    navigate("/contact");
  };

  return (
    <div
      className="bg-[#F0F8FF] py-16 px-6 sm:px-10 lg:px-12 h-full overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <main className="container max-w-7xl mx-auto px-4 py-12 relative">
        {/* Animated Heading */}
        <motion.h1
          ref={headingRef}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold mb-16 text-gray-900"
        >
          OUR PRICING
        </motion.h1>

        {/* Animated Vertical Line (Draws from top to bottom) */}
        <motion.div 
          className="hidden lg:block absolute left-1/2 top-40 bottom-40 transform -translate-x-1/2 z-0 origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <img src={line} alt="Vertical Line" className="h-full w-auto" />
        </motion.div>

        {pricingData?.map((ele, index) => (
          <div
            key={ele.id}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10 py-10"
          >
            {/* IMAGE SECTION (Floating Animation) */}
            <motion.div
              className={`flex justify-center ${
                index % 2 !== 0 ? "lg:order-2" : "lg:order-1"
              }`}
              initial={{ opacity: 0, x: index % 2 !== 0 ? 100 : -100 }} // Side slide
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.img
                src={`${import.meta.env.VITE_APP_URL}${ele.image}`}
                alt="Plan"
                // 🔥 Continuous Floating Effect
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="
                  rounded-xl shadow-lg 
                  w-full max-w-xs sm:max-w-sm md:max-w-md 
                  object-cover cursor-pointer
                "
              />
            </motion.div>

            {/* TABLE SECTION (3D Hover Lift) */}
            <motion.div
              className={`
                bg-white rounded-xl p-6 border border-gray-200 
                w-full mx-auto shadow-md
                ${index % 2 !== 0 ? "lg:order-1" : "lg:order-2"}
              `}
              initial={{ opacity: 0, x: index % 2 !== 0 ? -100 : 100 }} // Slide from opposite side
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              // 🔥 3D Lift Effect on Hover
              whileHover={{ 
                y: -10, 
                scale: 1.02, 
                boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.25)" 
              }}
            >
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded-lg text-sm sm:text-base">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 text-left">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                          Plan Name
                        </h3>
                        <p className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold bg-rose-100 text-rose-700 px-3 py-1 rounded-lg inline-block shadow-sm">
                          {ele?.planName}
                        </p>
                      </th>

                      <th className="py-3 px-4 text-center font-semibold text-gray-700">
                        <span className="text-base sm:text-lg">Classes</span>
                        <div className="mt-2">
                          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-xs sm:text-sm shadow-md transition-transform active:scale-95">
                            {ele.className}
                          </button>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {ele?.fees?.map((feeItem, i) => (
                      <tr key={i} className="border-t border-gray-200 hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 text-gray-700 font-medium text-base sm:text-lg">
                          {feeItem?.label}
                        </td>
                        <td className="py-3 px-4 text-center text-gray-600 text-base sm:text-lg">
                          {feeItem?.price}
                        </td>
                      </tr>
                    ))}

                    <tr className="border-t border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 text-gray-700 font-medium text-base sm:text-lg">
                        Fees Per Hour
                      </td>
                      <td className="py-3 px-4 text-center text-gray-600 text-base sm:text-lg">
                        {ele?.feesPerHour || "-"}
                      </td>
                    </tr>

                    <tr className="border-t border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 text-gray-700 font-medium text-base sm:text-lg">
                        Saving In Offers
                      </td>
                      <td className="py-3 px-4 text-center text-gray-600 text-base sm:text-lg">
                        {ele?.off || "-"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        ))}

        <div className="my-8 flex justify-center">
          <motion.img 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src={dotted} 
            alt="Dotted Line" 
          />
        </div>

        <div className="flex justify-center mt-10">
          <motion.button
            onClick={handleUrl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 text-lg"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.button>
        </div>
      </main>
    </div>
  );
};

export default PricingPage;