// import React from "react";
// import math from "../../assets/math.png";
// import english from "../../assets/english.png";
// import lp from "../../assets/lp.png";
// import child from "../../assets/child.png";
// import mathIcon from "../../assets/math-icon.png";
// import engIcon from "../../assets/eng-icon.png";
// import kIcon from "../../assets/k-12.png";
// import lpIcon from "../../assets/lp-icon.png";
// // import boost from "../../assets/boost.png";
// import boost from "../../assets/plane3.png";
// import boost2 from "../../assets/leftplane3.png";

// import book from "../../assets/book.png";
// import editImg from "../../assets/editImg.png";
// import ideaImg from "../../assets/ideaImg.png";
// import { Link, useNavigate } from "react-router-dom";

// const SubjectsAndCourses = () => {
//   const navigate = useNavigate();
//   const subjects = [
//     {
//       title: "Math",
//       bgColor: "from-blue-500 to-blue-700",
//       bgImg: math,
//       icon: mathIcon,
//       pageUrl: "/courses/maths#math",
//     },
//     {
//       title: "English",
//       bgColor: "from-purple-500 to-pink-500",
//       bgImg: english,
//       icon: engIcon,
//       pageUrl: "/courses/english#common",
//     },
//     {
//       title: "K-12",
//       bgColor: "from-indigo-500 to-blue-700",
//       bgImg: lp,
//       icon: kIcon,
//       pageUrl: "/courses/k-12#methodology",
//     },
//     {
//       title: "Test Prep",
//       bgColor: "from-red-500 to-orange-500",
//       bgImg: child,
//       icon: lpIcon,
//       pageUrl: "/courses/test#sat",
//     },
//   ];

//   const handleUrl = (pageUrl) => {
//     navigate(`${pageUrl}`);
//   };

//   return (
//     <section className="bg-[#F0F8FF] py-16 relative">
 
  

//       <div className="max-w-7xl container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
//           Subjects & Courses
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//           {subjects.map((subject, index) => (
//             <div
//               key={index}
//               onClick={(e) => {
//                 handleUrl(subject.pageUrl);
//               }}
//               className={`relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-gradient-to-br ${subject.bgColor}`}
//             >
//               {/* Background image with overlay */}
//               <img
//                 src={subject.bgImg}
//                 alt={subject.title}
//                 className="absolute inset-0 w-full h-full object-cover opacity-20"
//               />
//               <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/20"></div>

//               {/* Text content */}
//               <div className="relative z-10 flex flex-col items-center justify-center h-40 md:h-48 text-white">
//                 <div>
//                   <img src={subject.icon} />
//                 </div>
//                 <h3 className="text-xl md:text-2xl font-semibold">
//                   {subject.title}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SubjectsAndCourses;

import React from "react";
import math from "../../assets/math.png";
import english from "../../assets/english.png";
import lp from "../../assets/lp.png";
import child from "../../assets/child.png";
import mathIcon from "../../assets/math-icon.png";
import engIcon from "../../assets/eng-icon.png";
import kIcon from "../../assets/k-12.png";
import lpIcon from "../../assets/lp-icon.png";
import boost from "../../assets/plane3.png";
import boost2 from "../../assets/leftplane3.png";

import book from "../../assets/book.png";
import editImg from "../../assets/editImg.png";
import ideaImg from "../../assets/ideaImg.png";
import { Link, useNavigate } from "react-router-dom";

// 1. Framer Motion Import
import { motion } from "framer-motion";

const SubjectsAndCourses = () => {
  const navigate = useNavigate();
  const subjects = [
    {
      title: "Math",
      bgColor: "from-blue-500 to-blue-700",
      bgImg: math,
      icon: mathIcon,
      pageUrl: "/courses/maths#math",
    },
    {
      title: "English",
      bgColor: "from-purple-500 to-pink-500",
      bgImg: english,
      icon: engIcon,
      pageUrl: "/courses/english#common",
    },
    {
      title: "K-12",
      bgColor: "from-indigo-500 to-blue-700",
      bgImg: lp,
      icon: kIcon,
      pageUrl: "/courses/k-12#methodology",
    },
    {
      title: "Test Prep",
      bgColor: "from-red-500 to-orange-500",
      bgImg: child,
      icon: lpIcon,
      pageUrl: "/courses/test#sat",
    },
  ];

  const handleUrl = (pageUrl) => {
    navigate(`${pageUrl}`);
  };

  // 🔥 Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Cards ek ke baad ek aayenge
      },
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
    <section className="bg-[#F0F8FF] py-16 relative overflow-hidden">
      
      {/* Floating Background Decorations (Optional - to match 3D feel) */}
      <motion.img 
        src={boost} 
        className="absolute top-10 right-10 w-24 opacity-50 hidden md:block" 
        animate={{ y: [0, -20, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
      />
      <motion.img 
        src={boost2} 
        className="absolute bottom-10 left-10 w-24 opacity-50 hidden md:block" 
        animate={{ y: [0, 20, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} 
      />

      <div className="max-w-7xl container mx-auto px-4 relative z-10">
        
        {/* Animated Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10"
        >
          Subjects & Courses
        </motion.h2>

        {/* Animated Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover" // Child animations trigger karega
              onClick={(e) => {
                handleUrl(subject.pageUrl);
              }}
              // 🔥 3D Hover Effect on Container
              className={`relative rounded-xl overflow-hidden shadow-md transition-all duration-300 cursor-pointer bg-gradient-to-br ${subject.bgColor}`}
              style={{ perspective: "1000px" }} // Adds 3D depth
            >
              <motion.div
                className="h-full w-full"
                whileHover={{ 
                  y: -10, // Card upar uthega
                  scale: 1.03, // Thoda bada hoga
                  boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.25)" // Gehri shadow
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Background image with Zoom effect on Hover */}
                <motion.img
                  variants={{ hover: { scale: 1.15 } }} // Image zoom in
                  transition={{ duration: 0.5 }}
                  src={subject.bgImg}
                  alt={subject.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/20"></div>

                {/* Text content & Icon */}
                <div className="relative z-10 flex flex-col items-center justify-center h-40 md:h-48 text-white">
                  {/* Icon Bounce on Hover */}
                  <motion.div
                    variants={{ hover: { scale: 1.2, rotate: 5 } }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <img src={subject.icon} alt="icon" className="w-16 h-16 object-contain" />
                  </motion.div>
                  
                  <h3 className="text-xl md:text-2xl font-semibold mt-4 drop-shadow-md">
                    {subject.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SubjectsAndCourses;
