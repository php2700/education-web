// // import heroBanner from "../../assets/heroBanner.jpg";
// // import heroBanner from "../../assets/homebanner.png";
// // import heroBanner from "../../assets/home-1.jpg";
// import heroBanner from "../../assets/home-2.jpg";

// import arrow from "../../assets/arrow_forward.png";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaInstagram,
//   FaFacebookF,
//   FaWhatsapp,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import { useEffect, useState } from "react";
// import logo from "../../assets/logo.png";
// import slideImg from "../../assets/slide-1.png";
// import moneyImg from "../../assets/money.png";
// import instagram from "../../assets/inst.png";
// import whatsapp from "../../assets/whatsapp.png";
// import facebook from "../../assets/facebook.png";
// import youtube from "../../assets/youtube.png";
// import book from "../../assets/books.png";
// import rocket from "../../assets/rocketB.png";
// import cfl from "../../assets/cflB.png";
// import callImg from "../../assets/call.png";
// import mail from "../../assets/mail.png";
// import slide2 from "../../assets/slide-2.jpg";
// import slide3 from "../../assets/slide-3.jpg";
// import slide4 from "../../assets/slide-4.jpg";
// import slide5 from "../../assets/slide-5.jpg";
// import axios from "axios";
// import { toast } from "react-toastify";

// const slides = [
//   {
//     image: heroBanner,
//     title: "Welcome to Our Website",
//     description: "Discover amazing services and offers here.",
//   },
// ];

// const headerData = [
//   { name: "Home", link: "/" },
//   { name: "About Us", link: "/about" },
//   { name: "Courses", dropdown: true },
//   { name: "Pricing", link: "/pricing" },
//   { name: "Our Management", link: "/management" },
//   { name: "Testimonial", link: "/testimonial" },
//   { name: "Blog", link: "/blog" },
// ];

// const sections = [
//   {
//     name: "Math",
//     link: "/courses/maths",
//     courses: [
//       {
//         name: "Common Core Math",
//         link: "/courses/maths#math",
//       },
//       { name: "Math Algebra", link: "/courses/maths#algebra" },
//       {
//         name: "Geometry",
//         link: "/courses/maths#geometry",
//       },
//       {
//         name: "Math Amc",
//         link: "/courses/maths#amc",
//       },
//       {
//         name: "Math Kangaroo",
//         link: "/courses/maths#kangaroo",
//       },
//       {
//         name: "Common Core Science",
//         link: "/courses/maths#science",
//       },
//     ],
//   },
//   // { name: "k-12", link: "/courses/k-12" },
//   {
//     name: "k-12",
//     link: "/courses/k-12",
//     courses: [
//       {
//         name: "methodology",
//         link: "/courses/k-12#methodology",
//       },
//       { name: "Subject Expertise", link: "/courses/k-12#expertise" },
//     ],
//   },
//   {
//     name: "English",
//     link: "/courses/english",
//     courses: [
//       {
//         name: "Common Core English",
//         link: "/courses/english#common",
//       },
//       { name: "ELA Test Prep", link: "/courses/english#ela" },
//       {
//         name: "ISEE Test Prep",
//         link: "/courses/english#isee",
//       },
//     ],
//   },
//   {
//     name: "Test Prep",
//     link: "/courses/test",
//     courses: [
//       { name: "SAT Prep", link: "/courses/test#sat" },
//       { name: "PSAT Prep", link: "/courses/test#psat" },
//       { name: "SSAT  Prep", link: "/courses/test#ssat" },
//       { name: "SHSAT Prep", link: "/courses/test#shsat" },
//       { name: "ISEE Prep", link: "/courses/test#isee" },
//       { name: "ELA Prep", link: "/courses/test#ela" },
//       { name: "SCAT Prep", link: "/courses/test#scat" },
//       { name: "AMC Prep", link: "/courses/test#amc" },
//       { name: "KANGAROO Prep", link: "/courses/test#kangaroo" },
//       { name: "ACT Prep", link: "/courses/test#act" },
//       { name: "COGAT Prep", link: "/courses/test#cogat" },
//       { name: "SBAC Prep", link: "/courses/test#sbac" },
//       { name: "LACER Prep", link: "/courses/test#lacer" },
//       { name: "STB Prep", link: "/courses/test#stb" },
//     ],
//   },
// ];

// export const HeaderBanner = () => {
//   const { hash } = useLocation();
//   const { pathname } = useLocation();

//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [bannerData, setBannerData] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [openIndex, setOpenIndex] = useState(null);
//   const [openSection, setOpenSection] = useState(null);
//   const [selectedChild, setSelectedChild] = useState(null);

//   const handleToggle = (sectionName) => {
//     setOpenSection(openSection === sectionName ? null : sectionName);
//     localStorage.setItem("LAST_OPEN_SECTION", sectionName);
//   };

//   const isActiveHeader = (link) => pathname === link;

//   const isActiveParent = (section) => pathname.startsWith(section.link);

//   const toggleSubItem = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   useEffect(() => {
//     const savedParent = localStorage.getItem("LAST_OPEN_SECTION");
//     const savedChild = localStorage.getItem("LAST_SELECTED_CHILD");

//     if (savedParent) setOpenSection(savedParent);
//     if (savedChild) setSelectedChild(savedChild);
//   }, []);

//   useEffect(() => {
//     if (hash) {
//       const section = document.querySelector(hash);
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, [hash]);

//   const getBannerData = async () => {
//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_APP_URL}api/user/banner`
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

//   const handleUrl = () => {
//     navigate("/contact");
//   };

//   const handleHome = () => {
//     navigate("/");
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

//   return (
//     <>
//       {/* <div className="relative w-full overflow-y-auto lg:overflow-hidden max-h-[100vh]"> */}
//       <div className="relative w-full overflow-visible max-h-[100vh]">
//         {/* Banner Section */}
//         {/* <div className="relative w-full max-h-[80vh] flex items-center justify-center overflow-visible lg:overflow-hidden "> */}
//         <div className="relative w-full max-h-[80vh] flex items-center justify-center overflow-visible">
//           <img
//             src={`${import.meta.env.VITE_APP_URL}${bannerData.image}`}
//             alt={slides[0].title}
//             className="w-full max-h-[80vh] object-cover object-center   transition-all duration-700"
//           />

//           {/* <div className="absolute inset-0 bg-black/40"></div> */}

//           <header className="absolute top-0 left-0 w-full flex flex-col px-4 sm:px-8 md:px-16 py-4 z-50 gap-3">
//             {/* Top Contact & Social */}
//             <div className="hidden sm:flex  flex-col  sm:flex-row justify-between items-center text-white text-xs sm:text-sm">
//               {/* Left Side */}
//               <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6">
//                 <div className="flex items-center gap-2">
//                   <img src={callImg} className="text-blue-400" />
//                   <a href="tel:+911234567890" className="hover:underline">
//                     +91-886-029-6060
//                   </a>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <img src={mail} className="text-blue-400" />
//                   <a href="mailto:info@example.com" className="hover:underline">
//                     info@mygges.com
//                   </a>
//                 </div>
//               </div>

//               {/* Right Side */}
//               <div className="flex items-center gap-4 mt-2 sm:mt-0">
//                 <img
//                   onClick={() => handleInst()}
//                   src={instagram}
//                   className="cursor-pointer  transition-transform duration-300 hover:scale-110 "
//                 />
//                 <img
//                   onClick={() => handleFacebook()}
//                   src={facebook}
//                   className="cursor-pointer transition-transform duration-300 hover:scale-110"
//                 />
//                 <img
//                   onClick={() => handleWhatsApp()}
//                   src={whatsapp}
//                   className="cursor-pointer transition-transform duration-300 hover:scale-110"
//                 />
//                 <img
//                   onClick={() => handleYoutube()}
//                   src={youtube}
//                   className="cursor-pointer transition-transform duration-300 hover:scale-110"
//                 />
//               </div>
//             </div>

//             {/* Navbar */}
//             {/* <div className="flex justify-between items-center w-full bg-white/90 rounded-xl px-4 sm:px-6 py-3 shadow-md">

//               <div className="flex items-center justify-between w-full lg:w-auto">
//                 <div className="text-xl font-bold text-black flex items-center">
//                   <img
//                     src={logo}
//                     alt="Logo"
//                     onClick={() => handleHome()}
//                     className="h-8 sm:h-10 w-auto object-contain"
//                   />
//                 </div>

//                 <div className="lg:hidden">
//                   <button onClick={() => setMenuOpen(!menuOpen)}>
//                     {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//                   </button>
//                 </div>
//               </div>

//               <div className="hidden lg:flex items-center gap-4 lg:gap-10 text-gray-700 font-medium relative">
//                 {headerData?.map((item) =>
//                   item.dropdown ? (
//                     <div key={item.name} className="relative group">
//                       <button
//                         className={`hover:text-blue-600 transition-colors text-lg duration-200 flex items-center gap-1
//                           ${
//                             pathname === item.link
//                               ? "text-blue-500 font-bold  border-blue-600"
//                               : ""
//                           }
//                         `}
//                       >
//                         {item.name}
//                         <svg
//                           className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M19 9l-7 7-7-7"
//                           />
//                         </svg>
//                       </button>


//                       <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-lg overflow-visible border border-gray-100 z-[9999] w-48">
//                         {sections?.map((subItem) => (
//                           <div key={subItem.name} className="relative">
//                             <div className="flex items-center justify-between px-4 py-2">

//                               <Link
//                                 to={subItem.link}
//                                 onClick={() => handleToggle(subItem.name)}
//                                 className={` hover:text-blue-600 transition
//                                   ${
//                                     isActiveParent(subItem)
//                                       ? " text-blue-600 font-semibold"
//                                       : ""
//                                   }
//                                   `}
//                               >
//                                 {subItem.name}
//                               </Link>

//                               {subItem?.courses &&
//                                 subItem.courses.length > 0 && (
//                                   <button
//                                     onClick={() => handleToggle(subItem.name)}
//                                     className="text-gray-500 hover:text-blue-600 focus:outline-none"
//                                   >

//                                     {openSection === subItem.name ? (
//                                       <span>&#9650;</span> 
//                                     ) : (
//                                       <span>&#9660;</span> 
//                                     )}
//                                   </button>
//                                 )}
//                             </div>


//                             {subItem?.courses &&
//                               openSection === subItem.name && (
//                                 <div className="ml-6 bg-white border-l border-blue-200">
//                                   {subItem.courses.map((course) => (
//                                     <Link
//                                       key={course.name}
//                                       to={course.link}
//                                       onClick={() => {
//                                         setSelectedChild(course.name);
//                                         localStorage.setItem(
//                                           "LAST_SELECTED_CHILD",
//                                           course.name
//                                         );
//                                       }}
//                                       className={`block px-4 py-2  transition
//       ${
//         selectedChild === course.name
//           ? "text-blue-600  font-semibold"
//           : "hover:bg-blue-100 hover:text-blue-600"
//       }
//   `}
//                                     >
//                                       {course.name}
//                                     </Link>
//                                   ))}
//                                 </div>
//                               )}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   ) : (
//                     <Link
//                       key={item.name}
//                       to={item.link}
//                       className={`hover:text-blue-600 text-lg transition-colors duration-200
//                         ${
//                           pathname === item.link
//                             ? "text-blue-500 font-bold  border-blue-600"
//                             : ""
//                         }
//                         `}
//                     >
//                       {item.name}
//                     </Link>
//                   )
//                 )}

//                 <button
//                   onClick={() => handleUrl("/contact")}
//                   className="bg-blue-600 text-white text-md px-5 py-2 rounded-lg hover:bg-blue-700 transition"
//                 >
//                   Contact us
//                 </button>
//               </div>
//             </div> */}
//             <div className="flex justify-between items-center w-full bg-white/90 rounded-xl px-4 sm:px-6 py-2 shadow-md">
//               {/* Left: Logo */}
//               <div className="flex items-center">
//                 <img
//                   src={logo}
//                   alt="Logo"
//                   onClick={() => handleHome()}
//                   className="h-8 sm:h-10 w-auto object-contain cursor-pointer"
//                 />
//               </div>

//               {/* Right: Menu (Desktop & Mobile) */}
//               <div className="flex items-center gap-4">
//                 {/* Mobile menu toggle */}
//                 <div className="lg:hidden">
//                   <button onClick={() => setMenuOpen(!menuOpen)}>
//                     {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//                   </button>
//                 </div>

//                 {/* Desktop menu */}
//                 <div className="hidden lg:flex items-center gap-4 lg:gap-10 text-gray-700 font-medium relative">
//                   {headerData?.map((item) =>
//                     item.dropdown ? (
//                       <div key={item.name} className="relative group">
//                         {/* Dropdown button */}
//                         <button
//                           className={`hover:text-blue-600 transition-colors text-lg duration-200 flex items-center gap-1
//                 ${
//                   pathname === item.link
//                     ? "text-blue-500 font-bold border-blue-600"
//                     : ""
//                 }
//               `}
//                         >
//                           {item.name}
//                           <svg
//                             className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="M19 9l-7 7-7-7"
//                             />
//                           </svg>
//                         </button>

//                         {/* Dropdown menu */}
//                         <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-lg overflow-visible border border-gray-100 z-[9999] w-48">
//                           {sections?.map((subItem) => (
//                             <div key={subItem.name} className="relative">
//                               <div className="flex items-center justify-between px-4 py-2">
//                                 <Link
//                                   to={subItem.link}
//                                   onClick={() => handleToggle(subItem.name)}
//                                   className={`hover:text-blue-600 transition
//                         ${
//                           isActiveParent(subItem)
//                             ? "text-blue-600 font-semibold"
//                             : ""
//                         }`}
//                                 >
//                                   {subItem.name}
//                                 </Link>

//                                 {subItem?.courses?.length > 0 && (
//                                   <button
//                                     onClick={() => handleToggle(subItem.name)}
//                                     className="text-gray-500 hover:text-blue-600 focus:outline-none"
//                                   >
//                                     {openSection === subItem.name ? (
//                                       <span>&#9650;</span>
//                                     ) : (
//                                       <span>&#9660;</span>
//                                     )}
//                                   </button>
//                                 )}
//                               </div>

//                               {subItem?.courses &&
//                                 openSection === subItem.name && (
//                                   <div className="ml-6 bg-white border-l border-blue-200">
//                                     {subItem.courses.map((course) => (
//                                       <Link
//                                         key={course.name}
//                                         to={course.link}
//                                         onClick={() => {
//                                           setSelectedChild(course.name);
//                                           localStorage.setItem(
//                                             "LAST_SELECTED_CHILD",
//                                             course.name
//                                           );
//                                         }}
//                                         className={`block px-4 py-2 transition
//                             ${
//                               selectedChild === course.name
//                                 ? "text-blue-600 font-semibold"
//                                 : "hover:bg-blue-100 hover:text-blue-600"
//                             }`}
//                                       >
//                                         {course.name}
//                                       </Link>
//                                     ))}
//                                   </div>
//                                 )}
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     ) : (
//                       <Link
//                         key={item.name}
//                         to={item.link}
//                         className={`hover:text-blue-600 text-lg transition-colors duration-200
//               ${
//                 pathname === item.link
//                   ? "text-blue-500 font-bold border-blue-600"
//                   : ""
//               }`}
//                       >
//                         {item.name}
//                       </Link>
//                     )
//                   )}

//                   <button
//                     onClick={() => handleUrl("/contact")}
//                     className="bg-blue-600 text-white text-md px-5 py-2 rounded-lg hover:bg-blue-700 transition"
//                   >
//                     Contact us
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {menuOpen && (
//               <nav
//                 className="
//       lg:hidden
//       bg-white/95 backdrop-blur-md
//       rounded-2xl
//       mt-2 mx-3 mb-4
//       text-gray-700 font-medium
//       shadow-xl
//       border border-gray-200
//       animate-slideDown
//     "
//               >
//                 <ul className="flex flex-col text-center py-2">
//                   {headerData.map((item) =>
//                     item.dropdown ? (
//                       <details
//                         key={item.name}
//                         className="group border-t last:border-b"
//                       >
//                         <summary
//                           className="
//                 py-3 cursor-pointer
//                 text-lg font-semibold
//                 flex justify-center items-center gap-2
//                 text-gray-800
//                 hover:text-blue-600
//                 transition
//               "
//                         >
//                           {item.name}

//                           <svg
//                             className="w-5 h-5 transition-transform duration-300 group-open:rotate-180 text-blue-500"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="M19 9l-7 7-7-7"
//                             />
//                           </svg>
//                         </summary>

//                         <div className="bg-gray-50 border-t py-2">
//                           {sections?.map((subItem) => (
//                             <div
//                               key={subItem.name}
//                               className="
//                     mx-2 my-1
//                     rounded-xl
//                     bg-white
//                     border
//                     shadow-sm
//                     overflow-hidden
//                   "
//                             >
//                               <div
//                                 className="
//                       flex items-center justify-between
//                       px-4 py-3
//                       bg-white
//                       hover:bg-blue-50
//                       transition
//                       rounded-xl
//                     "
//                               >
//                                 <Link
//                                   to={subItem.link}
//                                   className="font-medium tracking-wide"
//                                   onClick={() => setMenuOpen(false)}
//                                 >
//                                   {subItem.name}
//                                 </Link>

//                                 {subItem?.courses &&
//                                   subItem.courses.length > 0 && (
//                                     <button
//                                       onClick={() => handleToggle(subItem.name)}
//                                       className="
//                           w-8 h-8
//                           flex items-center justify-center
//                           rounded-full
//                           bg-blue-100
//                           text-blue-600
//                           hover:bg-blue-600 hover:text-white
//                           transition
//                         "
//                                     >
//                                       {openSection === subItem.name ? "▲" : "▼"}
//                                     </button>
//                                   )}
//                               </div>

//                               {subItem?.courses &&
//                                 openSection === subItem.name && (
//                                   <div
//                                     className="
//                           mx-3 mb-3 mt-1
//                           rounded-xl
//                           bg-gradient-to-br from-white to-blue-50
//                           border border-blue-100
//                           shadow-inner
//                           overflow-hidden
//                           animate-slideDown
//                         "
//                                   >
//                                     {subItem.courses.map((course) => (
//                                       <Link
//                                         key={course.name}
//                                         to={course.link}
//                                         className="
//                               block
//                               px-4 py-2
//                               text-sm font-medium
//                               hover:bg-blue-600
//                               hover:text-white
//                               transition
//                             "
//                                         onClick={() => setMenuOpen(false)}
//                                       >
//                                         {course.name}
//                                       </Link>
//                                     ))}
//                                   </div>
//                                 )}
//                             </div>
//                           ))}
//                         </div>
//                       </details>
//                     ) : (
//                       <li key={item.name} className="border-t last:border-b">
//                         <Link
//                           to={item.link}
//                           className="
//                 block py-3
//                 hover:bg-gray-100
//                 hover:text-blue-600
//                 transition
//               "
//                           onClick={() => setMenuOpen(false)}
//                         >
//                           {item.name}
//                         </Link>
//                       </li>
//                     )
//                   )}

//                   <li className="py-3">
//                     <button
//                       className="
//             bg-blue-600 text-white
//             w-4/5 mx-auto
//             py-2 rounded-xl
//             hover:bg-blue-700
//             transition
//           "
//                     >
//                       Contact Us
//                     </button>
//                   </li>
//                 </ul>
//               </nav>
//             )}
//           </header>

//           <div className="absolute -bottom-4 md:-bottom-8 right-4 md:right-10 z-50 ">
//             <img
//               src={moneyImg}
//               alt="Money Icon"
//               className="w-24 md:w-40 lg:w-60 drop-shadow-lg"
//             />
//           </div>
//         </div>
//       </div>
//       <marquee
//         behavior="scroll"
//         direction="left"
//         scrollamount="6"
//         class="bg-blue-500 text-white py-2 text-lg font-semibold tracking-wide"
//       >
//         {bannerData?.title}
//       </marquee>
//       <div className=" flex flex-col justify-center text-center  my-4 ">
//         <div className="relative">
//           <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold  leading-tight ">
//             Personalized <span className="relative inline-block">Online</span>
//           </h1>
//         </div>
//         <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold  mb-3">
//           Tutoring <span className="text-blue-500">Anytime,</span>
//         </h1>
//         <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-blue-500 mb-5">
//           Anywhere
//         </h1>
//         <p className=" text-sm sm:text-lg md:text-xl mb-6 mx-auto max-w-xl sm:max-w-2xl">
//           Connect with expert tutors for math, science, languages, and more —
//           tailored to your goals.
//         </p>

//         <div className="flex justify-center mt-4 items-center gap-4">
//           <button
//             onClick={handleUrl}
//             className="flex cursor-pointer items-center justify-center gap-4 bg-[#305CDE] text-white px-7 py-4 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-700 transition text-base sm:text-lg font-semibold"
//           >
//             Start Free Trial
//             <img src={arrow} alt="arrow" className="w-2 h-2 sm:w-5 sm:h-5" />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };


// import heroBanner from "../../assets/heroBanner.jpg";
// import heroBanner from "../../assets/homebanner.png";
// import heroBanner from "../../assets/home-1.jpg";
// import heroBanner from "../../assets/home-2.jpg";

// import arrow from "../../assets/arrow_forward.png";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaInstagram,
//   FaFacebookF,
//   FaWhatsapp,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import { useEffect, useState } from "react";
// import logo from "../../assets/logo.png";
// import slideImg from "../../assets/slide-1.png";
// import moneyImg from "../../assets/money.png";
// import instagram from "../../assets/inst.png";
// import whatsapp from "../../assets/whatsapp.png";
// import facebook from "../../assets/facebook.png";
// import youtube from "../../assets/youtube.png";
// import book from "../../assets/books.png";
// import rocket from "../../assets/rocketB.png";
// import cfl from "../../assets/cflB.png";
// import callImg from "../../assets/call.png";
// import mail from "../../assets/mail.png";
// import slide2 from "../../assets/slide-2.jpg";
// import slide3 from "../../assets/slide-3.jpg";
// import slide4 from "../../assets/slide-4.jpg";
// import slide5 from "../../assets/slide-5.jpg";
// import axios from "axios";
// import { toast } from "react-toastify";

// const slides = [
//   {
//     image: heroBanner,
//     title: "Welcome to Our Website",
//     description: "Discover amazing services and offers here.",
//   },
// ];

// const headerData = [
//   { name: "Home", link: "/" },
//   { name: "About Us", link: "/about" },
//   { name: "Courses", dropdown: true },
//   { name: "Pricing", link: "/pricing" },
//   { name: "Our Management", link: "/management" },
//   { name: "Testimonial", link: "/testimonial" },
//   { name: "Blog", link: "/blog" },
// ];

// const sections = [
//   {
//     name: "Math",
//     link: "/courses/maths",
//     courses: [
//       {
//         name: "Common Core Math",
//         link: "/courses/maths#math",
//       },
//       { name: "Math Algebra", link: "/courses/maths#algebra" },
//       {
//         name: "Geometry",
//         link: "/courses/maths#geometry",
//       },
//       {
//         name: "Math Amc",
//         link: "/courses/maths#amc",
//       },
//       {
//         name: "Math Kangaroo",
//         link: "/courses/maths#kangaroo",
//       },
//       {
//         name: "Common Core Science",
//         link: "/courses/maths#science",
//       },
//     ],
//   },
//   // { name: "k-12", link: "/courses/k-12" },
//   {
//     name: "k-12",
//     link: "/courses/k-12",
//     courses: [
//       {
//         name: "methodology",
//         link: "/courses/k-12#methodology",
//       },
//       { name: "Subject Expertise", link: "/courses/k-12#expertise" },
//     ],
//   },
//   {
//     name: "English",
//     link: "/courses/english",
//     courses: [
//       {
//         name: "Common Core English",
//         link: "/courses/english#common",
//       },
//       { name: "ELA Test Prep", link: "/courses/english#ela" },
//       {
//         name: "ISEE Test Prep",
//         link: "/courses/english#isee",
//       },
//     ],
//   },
//   {
//     name: "Test Prep",
//     link: "/courses/test",
//     courses: [
//       { name: "SAT Prep", link: "/courses/test#sat" },
//       { name: "PSAT Prep", link: "/courses/test#psat" },
//       { name: "SSAT  Prep", link: "/courses/test#ssat" },
//       { name: "SHSAT Prep", link: "/courses/test#shsat" },
//       { name: "ISEE Prep", link: "/courses/test#isee" },
//       { name: "ELA Prep", link: "/courses/test#ela" },
//       { name: "SCAT Prep", link: "/courses/test#scat" },
//       { name: "AMC Prep", link: "/courses/test#amc" },
//       { name: "KANGAROO Prep", link: "/courses/test#kangaroo" },
//       { name: "ACT Prep", link: "/courses/test#act" },
//       { name: "COGAT Prep", link: "/courses/test#cogat" },
//       { name: "SBAC Prep", link: "/courses/test#sbac" },
//       { name: "LACER Prep", link: "/courses/test#lacer" },
//       { name: "STB Prep", link: "/courses/test#stb" },
//     ],
//   },
// ];

// export const HeaderBanner = () => {
//   const { hash } = useLocation();
//   const { pathname } = useLocation();

//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [bannerData, setBannerData] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [openIndex, setOpenIndex] = useState(null);
//   const [openSection, setOpenSection] = useState(null);
//   const [selectedChild, setSelectedChild] = useState(null);

//   const handleToggle = (sectionName) => {
//     setOpenSection(openSection === sectionName ? null : sectionName);
//     localStorage.setItem("LAST_OPEN_SECTION", sectionName);
//   };

//   const isActiveHeader = (link) => pathname === link;

//   const isActiveParent = (section) => pathname.startsWith(section.link);

//   const toggleSubItem = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   useEffect(() => {
//     const savedParent = localStorage.getItem("LAST_OPEN_SECTION");
//     const savedChild = localStorage.getItem("LAST_SELECTED_CHILD");

//     if (savedParent) setOpenSection(savedParent);
//     if (savedChild) setSelectedChild(savedChild);

//     // 🟢 UPDATED LOGIC: Sync with URL Hash (Active state remains on refresh)
//     if (hash) {
//       sections.forEach((section) => {
//         if (section.courses) {
//           const matchingCourse = section.courses.find((course) =>
//             course.link.endsWith(hash)
//           );
//           if (matchingCourse) {
//             setSelectedChild(matchingCourse.name);
//             setOpenSection(section.name);
//           }
//         }
//       });
//     }
//   }, [hash, pathname]); // Added hash and pathname dependency

//   useEffect(() => {
//     if (hash) {
//       const section = document.querySelector(hash);
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, [hash]);

//   const getBannerData = async () => {
//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_APP_URL}api/user/banner`
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

//   const handleUrl = () => {
//     navigate("/contact");
//   };

//   const handleHome = () => {
//     navigate("/");
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

//   return (
//     <>
//       <div className="relative w-full overflow-visible max-h-[100vh]">
//         <div className="relative w-full max-h-[80vh] flex items-center justify-center overflow-visible">
//           <img
//             src={`${import.meta.env.VITE_APP_URL}${bannerData.image}`}
//             alt={slides[0].title}
//             className="w-full max-h-[80vh] object-cover object-center transition-all duration-700"
//           />

//           <header className="absolute top-0 left-0 w-full flex flex-col px-4 sm:px-8 md:px-16 py-4 z-50 gap-3">
//             {/* Top Contact & Social */}
//             <div className="hidden sm:flex flex-col sm:flex-row justify-between items-center text-white text-xs sm:text-sm">
//               <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6">
//                 <div className="flex items-center gap-2">
//                   <img src={callImg} className="text-blue-400" />
//                   <a href="tel:+911234567890" className="hover:underline">
//                     +91-886-029-6060
//                   </a>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <img src={mail} className="text-blue-400" />
//                   <a href="mailto:info@example.com" className="hover:underline">
//                     info@mygges.com
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4 mt-2 sm:mt-0">
//                 <img
//                   onClick={() => handleInst()}
//                   src={instagram}
//                   className="cursor-pointer transition-transform duration-300 hover:scale-110"
//                 />
//                 <img
//                   onClick={() => handleFacebook()}
//                   src={facebook}
//                   className="cursor-pointer transition-transform duration-300 hover:scale-110"
//                 />
//                 <img
//                   onClick={() => handleWhatsApp()}
//                   src={whatsapp}
//                   className="cursor-pointer transition-transform duration-300 hover:scale-110"
//                 />
//                 <img
//                   onClick={() => handleYoutube()}
//                   src={youtube}
//                   className="cursor-pointer transition-transform duration-300 hover:scale-110"
//                 />
//               </div>
//             </div>

//             {/* Navbar */}
//             <div className="flex justify-between items-center w-full bg-white/90 rounded-xl px-4 sm:px-6 py-3 shadow-md">
//               <div className="flex items-center justify-between w-full lg:w-auto">
//                 <div className="text-xl font-bold text-black flex items-center">
//                   <img
//                     src={logo}
//                     alt="Logo"
//                     onClick={() => handleHome()}
//                     className="h-8 sm:h-10 w-auto object-contain"
//                   />
//                 </div>

//                 <div className="lg:hidden">
//                   <button onClick={() => setMenuOpen(!menuOpen)}>
//                     {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//                   </button>
//                 </div>
//               </div>

//               <div className="hidden lg:flex items-center gap-4 lg:gap-10 text-gray-700 font-medium relative">
//                 {headerData?.map((item) =>
//                   item.dropdown ? (
//                     <div key={item.name} className="relative group">
//                       <button
//                         className={`hover:text-blue-600 transition-colors text-lg duration-200 flex items-center gap-1
//                           ${
//                             pathname === item.link
//                               ? "text-blue-500 font-bold border-blue-600"
//                               : ""
//                           }
//                         `}
//                       >
//                         {item.name}
//                         <svg
//                           className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M19 9l-7 7-7-7"
//                           />
//                         </svg>
//                       </button>

//                       <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-lg overflow-visible border border-gray-100 z-[9999] w-48">
//                         {sections?.map((subItem) => (
//                           <div key={subItem.name} className="relative">
//                             <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition">
//                               <Link
//                                 to={subItem.link}
//                                 onClick={() => handleToggle(subItem.name)}
//                                 className={`hover:text-blue-600 transition
//                                   ${
//                                     isActiveParent(subItem)
//                                       ? "text-blue-600 font-semibold"
//                                       : ""
//                                   }
//                                   `}
//                               >
//                                 {subItem.name}
//                               </Link>

//                               {subItem?.courses &&
//                                 subItem.courses.length > 0 && (
//                                   <button
//                                     onClick={() => handleToggle(subItem.name)}
//                                     className="text-gray-500 hover:text-blue-600 focus:outline-none"
//                                   >
//                                     {openSection === subItem.name ? (
//                                       <span>&#9650;</span>
//                                     ) : (
//                                       <span>&#9660;</span>
//                                     )}
//                                   </button>
//                                 )}
//                             </div>

//                             {/* 🟢 UPDATED SECTION: Styling for Selected Items */}
//                             {subItem?.courses &&
//                               openSection === subItem.name && (
//                                 <div className="ml-6 bg-white border-l border-gray-200 my-1 rounded-r-md overflow-hidden shadow-sm">
//                                   {subItem.courses.map((course) => (
//                                     <Link
//                                       key={course.name}
//                                       to={course.link}
//                                       onClick={() => {
//                                         setSelectedChild(course.name);
//                                         localStorage.setItem(
//                                           "LAST_SELECTED_CHILD",
//                                           course.name
//                                         );
//                                       }}
//                                       // 👇 New Professional Styling Classes
//                                       className={`block px-4 py-2 text-sm transition-all duration-200 border-l-4 
//                                         ${
//                                           selectedChild === course.name
//                                             ? "bg-blue-50 border-blue-600 text-blue-700 font-bold shadow-inner" // Active Style
//                                             : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-blue-600 hover:border-blue-300" // Inactive Style
//                                         }
//                                       `}
//                                     >
//                                       {course.name}
//                                     </Link>
//                                   ))}
//                                 </div>
//                               )}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   ) : (
//                     <Link
//                       key={item.name}
//                       to={item.link}
//                       className={`hover:text-blue-600 text-lg transition-colors duration-200
//                         ${
//                           pathname === item.link
//                             ? "text-blue-500 font-bold border-blue-600"
//                             : ""
//                         }
//                         `}
//                     >
//                       {item.name}
//                     </Link>
//                   )
//                 )}

//                 <button
//                   onClick={() => handleUrl("/contact")}
//                   className="bg-blue-600 text-white text-md px-5 py-2 rounded-lg hover:bg-blue-700 transition"
//                 >
//                   Contact us
//                 </button>
//               </div>
//             </div>
//             {menuOpen && (
//               <nav
//                 className="
//       lg:hidden
//       bg-white/95 backdrop-blur-md
//       rounded-2xl
//       mt-2 mx-3 mb-4
//       text-gray-700 font-medium
//       shadow-xl
//       border border-gray-200
//       animate-slideDown
//     "
//               >
//                 <ul className="flex flex-col text-center py-2">
//                   {headerData.map((item) =>
//                     item.dropdown ? (
//                       <details
//                         key={item.name}
//                         className="group border-t last:border-b"
//                       >
//                         <summary
//                           className="
//                 py-3 cursor-pointer
//                 text-lg font-semibold
//                 flex justify-center items-center gap-2
//                 text-gray-800
//                 hover:text-blue-600
//                 transition
//               "
//                         >
//                           {item.name}

//                           <svg
//                             className="w-5 h-5 transition-transform duration-300 group-open:rotate-180 text-blue-500"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="M19 9l-7 7-7-7"
//                             />
//                           </svg>
//                         </summary>

//                         <div className="bg-gray-50 border-t py-2">
//                           {sections?.map((subItem) => (
//                             <div
//                               key={subItem.name}
//                               className="
//                     mx-2 my-1
//                     rounded-xl
//                     bg-white
//                     border
//                     shadow-sm
//                     overflow-hidden
//                   "
//                             >
//                               <div
//                                 className="
//                       flex items-center justify-between
//                       px-4 py-3
//                       bg-white
//                       hover:bg-blue-50
//                       transition
//                       rounded-xl
//                     "
//                               >
//                                 <Link
//                                   to={subItem.link}
//                                   className="font-medium tracking-wide"
//                                   onClick={() => setMenuOpen(false)}
//                                 >
//                                   {subItem.name}
//                                 </Link>

//                                 {subItem?.courses &&
//                                   subItem.courses.length > 0 && (
//                                     <button
//                                       onClick={() => handleToggle(subItem.name)}
//                                       className="
//                           w-8 h-8
//                           flex items-center justify-center
//                           rounded-full
//                           bg-blue-100
//                           text-blue-600
//                           hover:bg-blue-600 hover:text-white
//                           transition
//                         "
//                                     >
//                                       {openSection === subItem.name ? "▲" : "▼"}
//                                     </button>
//                                   )}
//                               </div>

//                               {subItem?.courses &&
//                                 openSection === subItem.name && (
//                                   <div
//                                     className="
//                           mx-3 mb-3 mt-1
//                           rounded-xl
//                           bg-gradient-to-br from-white to-blue-50
//                           border border-blue-100
//                           shadow-inner
//                           overflow-hidden
//                           animate-slideDown
//                         "
//                                   >
//                                     {subItem.courses.map((course) => (
//                                       <Link
//                                         key={course.name}
//                                         to={course.link}
//                                         // 🟢 Mobile View Styling Update (Optional but consistent)
//                                         className={`block px-4 py-2 text-sm font-medium transition
//                                             ${
//                                               selectedChild === course.name
//                                                 ? "bg-blue-600 text-white"
//                                                 : "hover:bg-blue-600 hover:text-white"
//                                             }
//                                           `}
//                                         onClick={() => setMenuOpen(false)}
//                                       >
//                                         {course.name}
//                                       </Link>
//                                     ))}
//                                   </div>
//                                 )}
//                             </div>
//                           ))}
//                         </div>
//                       </details>
//                     ) : (
//                       <li key={item.name} className="border-t last:border-b">
//                         <Link
//                           to={item.link}
//                           className="
//                 block py-3
//                 hover:bg-gray-100
//                 hover:text-blue-600
//                 transition
//               "
//                           onClick={() => setMenuOpen(false)}
//                         >
//                           {item.name}
//                         </Link>
//                       </li>
//                     )
//                   )}

//                   <li className="py-3">
//                     <button
//                       className="
//             bg-blue-600 text-white
//             w-4/5 mx-auto
//             py-2 rounded-xl
//             hover:bg-blue-700
//             transition
//           "
//                     >
//                       Contact Us
//                     </button>
//                   </li>
//                 </ul>
//               </nav>
//             )}
//           </header>

//           <div className="absolute -bottom-4 md:-bottom-8 right-4 md:right-10 z-50 ">
//             <img
//               src={moneyImg}
//               alt="Money Icon"
//               className="w-20 md:w-40 lg:w-60 drop-shadow-lg"
//             />
//           </div>
//         </div>
//       </div>
//       <div className=" flex flex-col justify-center text-center my-4 ">
//         <div className="relative">
//           <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight ">
//             Personalized <span className="relative inline-block">Online</span>
//           </h1>
//         </div>
//         <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3">
//           Tutoring <span className="text-blue-500">Anytime,</span>
//         </h1>
//         <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-blue-500 mb-5">
//           Anywhere
//         </h1>
//         <p className=" text-sm sm:text-lg md:text-xl mb-6 mx-auto max-w-xl sm:max-w-2xl">
//           Connect with expert tutors for math, science, languages, and more —
//           tailored to your goals.
//         </p>
//         <marquee
//           behavior="scroll"
//           direction="left"
//           scrollamount="6"
//           class="bg-blue-500 text-white py-2 text-lg font-semibold tracking-wide"
//         >
//           {bannerData?.title}
//         </marquee>

//         <div className="flex justify-center mt-4 items-center gap-4">
//           <button
//             onClick={handleUrl}
//             className="flex cursor-pointer items-center justify-center gap-4 bg-[#305CDE] text-white px-7 py-4 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-700 transition text-base sm:text-lg font-semibold"
//           >
//             Start Free Trial
//             <img src={arrow} alt="arrow" className="w-2 h-2 sm:w-5 sm:h-5" />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };
// import heroBanner from "../../assets/heroBanner.jpg";
// import heroBanner from "../../assets/homebanner.png";
// import heroBanner from "../../assets/home-1.jpg";
// import heroBanner from "../../assets/home-2.jpg";

// import arrow from "../../assets/arrow_forward.png";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaInstagram,
//   FaFacebookF,
//   FaWhatsapp,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import { useEffect, useState } from "react";
// import logo from "../../assets/logo.png";
// import slideImg from "../../assets/slide-1.png";
// import moneyImg from "../../assets/money.png";
// import instagram from "../../assets/inst.png";
// import whatsapp from "../../assets/whatsapp.png";
// import facebook from "../../assets/facebook.png";
// import youtube from "../../assets/youtube.png";
// import book from "../../assets/books.png";
// import rocket from "../../assets/rocketB.png";
// import cfl from "../../assets/cflB.png";
// import callImg from "../../assets/call.png";
// import mail from "../../assets/mail.png";
// import slide2 from "../../assets/slide-2.jpg";
// import slide3 from "../../assets/slide-3.jpg";
// import slide4 from "../../assets/slide-4.jpg";
// import slide5 from "../../assets/slide-5.jpg";
// import axios from "axios";
// import { toast } from "react-toastify";

// const slides = [
//   {
//     image: heroBanner,
//     title: "Welcome to Our Website",
//     description: "Discover amazing services and offers here.",
//   },
// ];

// const headerData = [
//   { name: "Home", link: "/" },
//   { name: "About Us", link: "/about" },
//   { name: "Courses", dropdown: true },
//   { name: "Pricing", link: "/pricing" },
//   { name: "Our Management", link: "/management" },
//   { name: "Testimonial", link: "/testimonial" },
//   { name: "Blog", link: "/blog" },
// ];

// const sections = [
//   {
//     name: "Math",
//     link: "/courses/maths",
//     courses: [
//       {
//         name: "Common Core Math",
//         link: "/courses/maths#math",
//       },
//       { name: "Math Algebra", link: "/courses/maths#algebra" },
//       {
//         name: "Geometry",
//         link: "/courses/maths#geometry",
//       },
//       {
//         name: "Math Amc",
//         link: "/courses/maths#amc",
//       },
//       {
//         name: "Math Kangaroo",
//         link: "/courses/maths#kangaroo",
//       },
//       {
//         name: "Common Core Science",
//         link: "/courses/maths#science",
//       },
//     ],
//   },
//   // { name: "k-12", link: "/courses/k-12" },
//   {
//     name: "k-12",
//     link: "/courses/k-12",
//     courses: [
//       {
//         name: "methodology",
//         link: "/courses/k-12#methodology",
//       },
//       { name: "Subject Expertise", link: "/courses/k-12#expertise" },
//     ],
//   },
//   {
//     name: "English",
//     link: "/courses/english",
//     courses: [
//       {
//         name: "Common Core English",
//         link: "/courses/english#common",
//       },
//       { name: "ELA Test Prep", link: "/courses/english#ela" },
//       {
//         name: "ISEE Test Prep",
//         link: "/courses/english#isee",
//       },
//     ],
//   },
//   {
//     name: "Test Prep",
//     link: "/courses/test",
//     courses: [
//       { name: "SAT Prep", link: "/courses/test#sat" },
//       { name: "PSAT Prep", link: "/courses/test#psat" },
//       { name: "SSAT  Prep", link: "/courses/test#ssat" },
//       { name: "SHSAT Prep", link: "/courses/test#shsat" },
//       { name: "ISEE Prep", link: "/courses/test#isee" },
//       { name: "ELA Prep", link: "/courses/test#ela" },
//       { name: "SCAT Prep", link: "/courses/test#scat" },
//       { name: "AMC Prep", link: "/courses/test#amc" },
//       { name: "KANGAROO Prep", link: "/courses/test#kangaroo" },
//       { name: "ACT Prep", link: "/courses/test#act" },
//       { name: "COGAT Prep", link: "/courses/test#cogat" },
//       { name: "SBAC Prep", link: "/courses/test#sbac" },
//       { name: "LACER Prep", link: "/courses/test#lacer" },
//       { name: "STB Prep", link: "/courses/test#stb" },
//     ],
//   },
// ];

// export const HeaderBanner = () => {
//   const { hash } = useLocation();
//   const { pathname } = useLocation();

//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [bannerData, setBannerData] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [openIndex, setOpenIndex] = useState(null);
//   const [openSection, setOpenSection] = useState(null);
//   const [selectedChild, setSelectedChild] = useState(null);

//   const handleToggle = (sectionName) => {
//     setOpenSection(openSection === sectionName ? null : sectionName);
//     localStorage.setItem("LAST_OPEN_SECTION", sectionName);
//   };

//   const isActiveHeader = (link) => pathname === link;

//   const isActiveParent = (section) => pathname.startsWith(section.link);

//   const toggleSubItem = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   useEffect(() => {
//     const savedParent = localStorage.getItem("LAST_OPEN_SECTION");
//     const savedChild = localStorage.getItem("LAST_SELECTED_CHILD");

//     if (savedParent) setOpenSection(savedParent);
//     if (savedChild) setSelectedChild(savedChild);

//     if (hash) {
//       sections.forEach((section) => {
//         if (section.courses) {
//           const matchingCourse = section.courses.find((course) =>
//             course.link.endsWith(hash)
//           );
//           if (matchingCourse) {
//             setSelectedChild(matchingCourse.name);
//             setOpenSection(section.name);
//           }
//         }
//       });
//     }
//   }, [hash, pathname]);

//   useEffect(() => {
//     if (hash) {
//       const section = document.querySelector(hash);
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, [hash]);

//   const getBannerData = async () => {
//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_APP_URL}api/user/banner`
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

//   const handleUrl = () => {
//     navigate("/contact");
//   };

//   const handleHome = () => {
//     navigate("/");
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

//   return (
//     <>
//       <div className="relative w-full overflow-visible max-h-[100vh]">
//         <div className="relative w-full max-h-[80vh] flex items-center justify-center overflow-visible">
//           <img
//             src={`${import.meta.env.VITE_APP_URL}${bannerData.image}`}
//             alt={slides[0].title}
//             className="w-full max-h-[80vh] object-cover object-center transition-all duration-700"
//           />

//           {/* 
//              🔴 CHANGE 1: Increased z-index to z-[1000] 
//              This ensures the header (and menu) stays above the Money Image (z-50) 
//           */}
//           <header className="absolute top-0 left-0 w-full flex flex-col px-4 sm:px-8 md:px-16 py-4 z-[1000] gap-3">
//             {/* Top Contact & Social */}
//             <div className="hidden sm:flex flex-col sm:flex-row justify-between items-center text-white text-xs sm:text-sm">
//               <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6">
//                 <div className="flex items-center gap-2">
//                   <img src={callImg} className="text-blue-400" />
//                   <a href="tel:+911234567890" className="hover:underline">
//                     +91-886-029-6060
//                   </a>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <img src={mail} className="text-blue-400" />
//                   <a href="mailto:info@example.com" className="hover:underline">
//                     info@mygges.com
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4 mt-2 sm:mt-0">
//                 <img
//                   onClick={() => handleInst()}
//                   src={instagram}
//                   className="cursor-pointer transition-transform duration-300 hover:scale-110"
//                 />
//                 <img
//                   onClick={() => handleFacebook()}
//                   src={facebook}
//                   className="cursor-pointer transition-transform duration-300 hover:scale-110"
//                 />
//                 <img
//                   onClick={() => handleWhatsApp()}
//                   src={whatsapp}
//                   className="cursor-pointer transition-transform duration-300 hover:scale-110"
//                 />
//                 <img
//                   onClick={() => handleYoutube()}
//                   src={youtube}
//                   className="cursor-pointer transition-transform duration-300 hover:scale-110"
//                 />
//               </div>
//             </div>

//             {/* Navbar */}
//             <div className="flex justify-between items-center w-full bg-white/90 rounded-xl px-4 sm:px-6 py-3 shadow-md">
//               <div className="flex items-center justify-between w-full lg:w-auto">
//                 <div className="text-xl font-bold text-black flex items-center">
//                   <img
//                     src={logo}
//                     alt="Logo"
//                     onClick={() => handleHome()}
//                     className="h-8 sm:h-10 w-auto object-contain"
//                   />
//                 </div>

//                 <div className="lg:hidden">
//                   <button onClick={() => setMenuOpen(!menuOpen)}>
//                     {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//                   </button>
//                 </div>
//               </div>

//               <div className="hidden lg:flex items-center gap-4 lg:gap-10 text-gray-700 font-medium relative">
//                 {headerData?.map((item) =>
//                   item.dropdown ? (
//                     <div key={item.name} className="relative group">
//                       <button
//                         className={`hover:text-blue-600 transition-colors text-lg duration-200 flex items-center gap-1
//                           ${
//                             pathname === item.link
//                               ? "text-blue-500 font-bold border-blue-600"
//                               : ""
//                           }
//                         `}
//                       >
//                         {item.name}
//                         <svg
//                           className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M19 9l-7 7-7-7"
//                           />
//                         </svg>
//                       </button>

//                       <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-lg overflow-visible border border-gray-100 z-[9999] w-48">
//                         {sections?.map((subItem) => (
//                           <div key={subItem.name} className="relative">
//                             <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition">
//                               <Link
//                                 to={subItem.link}
//                                 onClick={() => handleToggle(subItem.name)}
//                                 className={`hover:text-blue-600 transition
//                                   ${
//                                     isActiveParent(subItem)
//                                       ? "text-blue-600 font-semibold"
//                                       : ""
//                                   }
//                                   `}
//                               >
//                                 {subItem.name}
//                               </Link>

//                               {subItem?.courses &&
//                                 subItem.courses.length > 0 && (
//                                   <button
//                                     onClick={() => handleToggle(subItem.name)}
//                                     className="text-gray-500 hover:text-blue-600 focus:outline-none"
//                                   >
//                                     {openSection === subItem.name ? (
//                                       <span>&#9650;</span>
//                                     ) : (
//                                       <span>&#9660;</span>
//                                     )}
//                                   </button>
//                                 )}
//                             </div>

//                             {subItem?.courses &&
//                               openSection === subItem.name && (
//                                 <div className="ml-6 bg-white border-l border-gray-200 my-1 rounded-r-md overflow-hidden shadow-sm">
//                                   {subItem.courses.map((course) => (
//                                     <Link
//                                       key={course.name}
//                                       to={course.link}
//                                       onClick={() => {
//                                         setSelectedChild(course.name);
//                                         localStorage.setItem(
//                                           "LAST_SELECTED_CHILD",
//                                           course.name
//                                         );
//                                       }}
//                                       className={`block px-4 py-2 text-sm transition-all duration-200 border-l-4 
//                                         ${
//                                           selectedChild === course.name
//                                             ? "bg-blue-50 border-blue-600 text-blue-700 font-bold shadow-inner"
//                                             : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-blue-600 hover:border-blue-300"
//                                         }
//                                       `}
//                                     >
//                                       {course.name}
//                                     </Link>
//                                   ))}
//                                 </div>
//                               )}
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   ) : (
//                     <Link
//                       key={item.name}
//                       to={item.link}
//                       className={`hover:text-blue-600 text-lg transition-colors duration-200
//                         ${
//                           pathname === item.link
//                             ? "text-blue-500 font-bold border-blue-600"
//                             : ""
//                         }
//                         `}
//                     >
//                       {item.name}
//                     </Link>
//                   )
//                 )}

//                 <button
//                   onClick={() => handleUrl("/contact")}
//                   className="bg-blue-600 text-white text-md px-5 py-2 rounded-lg hover:bg-blue-700 transition"
//                 >
//                   Contact us
//                 </button>
//               </div>
//             </div>

//             {/* 🟢 CHANGE 2: Mobile Menu Logic + Click Outside + Light Borders */}
//             {menuOpen && (
//               <>
//                 {/* 
//                    Backdrop Layer: 
//                    1. Fixed position covering entire screen (inset-0).
//                    2. Transparent or slightly dark to show it's clickable.
//                    3. onClick closes the menu.
//                    4. z-40 ensures it's below the menu (z-50) but above everything else.
//                 */}
//                 <div
//                   className="fixed inset-0 z-40 bg-black/5" // Transparent click-outside layer
//                   onClick={() => setMenuOpen(false)}
//                 ></div>

//                 <nav
//                   className="
//                     relative z-50
//                     lg:hidden
//                     bg-white/95 backdrop-blur-md
//                     rounded-2xl
//                     mt-2 mx-3 mb-4
//                     text-gray-700 font-medium
//                     shadow-xl
//                     border border-gray-100
//                     animate-slideDown
//                   "
//                 >
//                   <ul className="flex flex-col text-center py-2">
//                     {headerData.map((item) =>
//                       item.dropdown ? (
//                         <details
//                           key={item.name}
//                           // 🟢 CHANGE 3: Used 'border-gray-100' for lighter lines
//                           className="group border-t border-gray-100 last:border-b last:border-gray-100"
//                         >
//                           <summary
//                             className="
//                               py-3 cursor-pointer
//                               text-lg font-semibold
//                               flex justify-center items-center gap-2
//                               text-gray-800
//                               hover:text-blue-600
//                               transition
//                             "
//                           >
//                             {item.name}

//                             <svg
//                               className="w-5 h-5 transition-transform duration-300 group-open:rotate-180 text-blue-500"
//                               fill="none"
//                               stroke="currentColor"
//                               strokeWidth="2"
//                               viewBox="0 0 24 24"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 d="M19 9l-7 7-7-7"
//                               />
//                             </svg>
//                           </summary>

//                           <div className="bg-gray-50 border-t border-gray-100 py-2">
//                             {sections?.map((subItem) => (
//                               <div
//                                 key={subItem.name}
//                                 className="
//                                   mx-2 my-1
//                                   rounded-xl
//                                   bg-white
//                                   border border-gray-100
//                                   shadow-sm
//                                   overflow-hidden
//                                 "
//                               >
//                                 <div
//                                   className="
//                                     flex items-center justify-between
//                                     px-4 py-3
//                                     bg-white
//                                     hover:bg-blue-50
//                                     transition
//                                     rounded-xl
//                                   "
//                                 >
//                                   <Link
//                                     to={subItem.link}
//                                     className="font-medium tracking-wide"
//                                     onClick={() => setMenuOpen(false)}
//                                   >
//                                     {subItem.name}
//                                   </Link>

//                                   {subItem?.courses &&
//                                     subItem.courses.length > 0 && (
//                                       <button
//                                         onClick={() =>
//                                           handleToggle(subItem.name)
//                                         }
//                                         className="
//                                           w-8 h-8
//                                           flex items-center justify-center
//                                           rounded-full
//                                           bg-blue-100
//                                           text-blue-600
//                                           hover:bg-blue-600 hover:text-white
//                                           transition
//                                         "
//                                       >
//                                         {openSection === subItem.name
//                                           ? "▲"
//                                           : "▼"}
//                                       </button>
//                                     )}
//                                 </div>

//                                 {subItem?.courses &&
//                                   openSection === subItem.name && (
//                                     <div
//                                       className="
//                                         mx-3 mb-3 mt-1
//                                         rounded-xl
//                                         bg-gradient-to-br from-white to-blue-50
//                                         border border-blue-100
//                                         shadow-inner
//                                         overflow-hidden
//                                         animate-slideDown
//                                       "
//                                     >
//                                       {subItem.courses.map((course) => (
//                                         <Link
//                                           key={course.name}
//                                           to={course.link}
//                                           className={`block px-4 py-2 text-sm font-medium transition
//                                             ${
//                                               selectedChild === course.name
//                                                 ? "bg-blue-600 text-white"
//                                                 : "hover:bg-blue-600 hover:text-white"
//                                             }
//                                           `}
//                                           onClick={() => setMenuOpen(false)}
//                                         >
//                                           {course.name}
//                                         </Link>
//                                       ))}
//                                     </div>
//                                   )}
//                               </div>
//                             ))}
//                           </div>
//                         </details>
//                       ) : (
//                         <li
//                           key={item.name}
//                           // 🟢 CHANGE 3: Used 'border-gray-100' for lighter lines
//                           className="border-t border-gray-100 last:border-b last:border-gray-100"
//                         >
//                           <Link
//                             to={item.link}
//                             className="
//                               block py-3
//                               hover:bg-gray-100
//                               hover:text-blue-600
//                               transition
//                             "
//                             onClick={() => setMenuOpen(false)}
//                           >
//                             {item.name}
//                           </Link>
//                         </li>
//                       )
//                     )}

//                     <li className="py-3">
//                       <button
//                         className="
//                           bg-blue-600 text-white
//                           w-4/5 mx-auto
//                           py-2 rounded-xl
//                           hover:bg-blue-700
//                           transition
//                         "
//                       >
//                         Contact Us
//                       </button>
//                     </li>
//                   </ul>
//                 </nav>
//               </>
//             )}
//           </header>

//           <div className="absolute -bottom-4 md:-bottom-8 right-4 md:right-10 z-50 ">
//             <img
//               src={moneyImg}
//               alt="Money Icon"
//               className="w-20 md:w-40 lg:w-60 drop-shadow-lg"
//             />
//           </div>
//         </div>
//       </div>
//       <div className=" flex flex-col justify-center text-center my-4 ">
//         <div className="relative">
//           <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight ">
//             Personalized <span className="relative inline-block">Online</span>
//           </h1>
//         </div>
//         <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3">
//           Tutoring <span className="text-blue-500">Anytime,</span>
//         </h1>
//         <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-blue-500 mb-5">
//           Anywhere
//         </h1>
//         <p className=" text-sm sm:text-lg md:text-xl mb-6 mx-auto max-w-xl sm:max-w-2xl">
//           Connect with expert tutors for math, science, languages, and more —
//           tailored to your goals.
//         </p>
//         <marquee
//           behavior="scroll"
//           direction="left"
//           scrollamount="6"
//           class="bg-blue-500 text-white py-2 text-lg font-semibold tracking-wide"
//         >
//           {bannerData?.title}
//         </marquee>

//         <div className="flex justify-center mt-4 items-center gap-4">
//           <button
//             onClick={handleUrl}
//             className="flex cursor-pointer items-center justify-center gap-4 bg-[#305CDE] text-white px-7 py-4 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-700 transition text-base sm:text-lg font-semibold"
//           >
//             Start Free Trial
//             <img src={arrow} alt="arrow" className="w-2 h-2 sm:w-5 sm:h-5" />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// import heroBanner from "../../assets/heroBanner.jpg";
// import heroBanner from "../../assets/homebanner.png";
// import heroBanner from "../../assets/home-1.jpg";
import heroBanner from "../../assets/home-2.jpg";

import arrow from "../../assets/arrow_forward.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import slideImg from "../../assets/slide-1.png";
import moneyImg from "../../assets/money.png";
import instagram from "../../assets/inst.png";
import whatsapp from "../../assets/whatsapp.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import book from "../../assets/books.png";
import rocket from "../../assets/rocketB.png";
import cfl from "../../assets/cflB.png";
import callImg from "../../assets/call.png";
import mail from "../../assets/mail.png";
import slide2 from "../../assets/slide-2.jpg";
import slide3 from "../../assets/slide-3.jpg";
import slide4 from "../../assets/slide-4.jpg";
import slide5 from "../../assets/slide-5.jpg";
import axios from "axios";
import { toast } from "react-toastify";

const slides = [
  {
    image: heroBanner,
    title: "Welcome to Our Website",
    description: "Discover amazing services and offers here.",
  },
];

const headerData = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Courses", dropdown: true },
  { name: "Pricing", link: "/pricing" },
  { name: "Our Management", link: "/management" },
  { name: "Testimonial", link: "/testimonial" },
  { name: "Blog", link: "/blog" },
];

const sections = [
  {
    name: "Math",
    link: "/courses/maths",
    courses: [
      {
        name: "MATH COMMON CORE ",
        link: "/courses/maths#math",
      },
      { name: "MATH ALGEBRA 1 & 2", link: "/courses/maths#algebra" },
      {
        name: "MATH GEOMETRY-MC3",
        link: "/courses/maths#geometry",
      },
      {
        name: "Math AMC ",
        link: "/courses/maths#amc",
      },
      {
        name: "MATH KANGAROO",
        link: "/courses/maths#kangaroo",
      },
      {
        name: "MATH PRE-CALCULUS",
        link: "/courses/maths#science",
      },
    ],
  },
  // { name: "k-12", link: "/courses/k-12" },
  {
    name: "k-12",
    link: "/courses/k-12",
    courses: [
      {
        name: "Methodology",
        link: "/courses/k-12#methodology",
      },
      { name: "Subject Expertise", link: "/courses/k-12#expertise" },
    ],
  },
  {
    name: "English",
    link: "/courses/english",
    courses: [
      {
        name: "COMMON CORE ENGLISH",
        link: "/courses/english#common",
      },
      { name: "ELA", link: "/courses/english#ela" },
      {
        name: "ISEE",
        link: "/courses/english#isee",
      },
    ],
  },
  {
    name: "Test Prep",
    link: "/courses/test",
    courses: [
      { name: "SAT", link: "/courses/test#sat" },
      { name: "PSAT", link: "/courses/test#psat" },
      { name: "SSAT", link: "/courses/test#ssat" },
      { name: "SHSAT", link: "/courses/test#shsat" },
      { name: "ISEE", link: "/courses/test#isee" },
      { name: "ELA", link: "/courses/test#ela" },
      { name: "SCAT", link: "/courses/test#scat" },
      { name: "AMC", link: "/courses/test#amc" },
      { name: "MATH KANGAROO", link: "/courses/test#kangaroo" },
      { name: "ACT", link: "/courses/test#act" },
      { name: "COGAT", link: "/courses/test#cogat" },
      { name: "SBAC", link: "/courses/test#sbac" },
      { name: "ACCUPLACER", link: "/courses/test#lacer" },
      { name: "STB", link: "/courses/test#stb" },
    ],
  },
];

export const  HeaderBanner = () => {
  const { hash } = useLocation();
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [bannerData, setBannerData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);
  const [openSection, setOpenSection] = useState(null);
  const [selectedChild, setSelectedChild] = useState(null);

  const handleToggle = (sectionName) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
    localStorage.setItem("LAST_OPEN_SECTION", sectionName);
  };

  const isActiveHeader = (link) => pathname === link;

  const isActiveParent = (section) => pathname.startsWith(section.link);

  const toggleSubItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // 🟢 Helper Function: Manual Scroll Logic
  const handleLinkClick = (courseName, link) => {
    setSelectedChild(courseName);
    localStorage.setItem("LAST_SELECTED_CHILD", courseName);
    setMenuOpen(false); // Close mobile menu if open

    // Agar link me # hai (matlab same page section navigation)
    if (link.includes("#")) {
      const targetId = link.split("#")[1];

      // Thoda wait karke scroll karein taki agar page change ho raha ho to DOM load ho jaye
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  useEffect(() => {
    const savedParent = localStorage.getItem("LAST_OPEN_SECTION");
    const savedChild = localStorage.getItem("LAST_SELECTED_CHILD");

    if (savedParent) setOpenSection(savedParent);
    if (savedChild) setSelectedChild(savedChild);

    if (hash) {
      sections.forEach((section) => {
        if (section.courses) {
          const matchingCourse = section.courses.find((course) =>
            course.link.endsWith(hash)
          );
          if (matchingCourse) {
            setSelectedChild(matchingCourse.name);
            setOpenSection(section.name);
          }
        }
      });
    }
  }, [hash, pathname]);

  useEffect(() => {
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  const getBannerData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/banner`
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

  const handleUrl = () => {
    navigate("/contact");

    
  };

  const handleHome = () => {
    navigate("/");
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

  const handleCall = () => {
    window.location.href = "tel:+918860296060";
  };

   const handleGmail = () => {
    const to = "info@mygges.com";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}`;
    window.open(gmailUrl, "_blank");
  };





  return (
    <>
      <div className="relative w-full overflow-visible max-h-[100vh]">
        <div className="relative w-full max-h-[80vh] flex items-center justify-center overflow-visible">
          <img
            src={`${import.meta.env.VITE_APP_URL}${bannerData.image}`}
            alt={slides[0].title}
            className="w-full max-h-[80vh] object-cover object-center transition-all duration-700"
          />

          <header className="absolute top-0 left-0 w-full flex flex-col px-4 sm:px-8 md:px-16 py-4 z-[1000] gap-3">
            {/* Top Contact & Social */}
            {/* <div className="hidden sm:flex flex-col sm:flex-row justify-between items-center text-white text-xs sm:text-sm">
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2">
                  <img src={callImg} className="text-blue-400" />
                  <a href="tel:+911234567890" className="hover:underline">
                    +91-886-029-6060
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <img src={mail} className="text-blue-400" />
                  <a href="mailto:info@example.com" className="hover:underline">
                    info@mygges.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-2 sm:mt-0">
                <img
                  onClick={() => handleInst()}
                  src={instagram}
                  className="cursor-pointer transition-transform duration-300 hover:scale-110"
                />
                <img
                  onClick={() => handleFacebook()}
                  src={facebook}
                  className="cursor-pointer transition-transform duration-300 hover:scale-110"
                />
                <img
                  onClick={() => handleWhatsApp()}
                  src={whatsapp}
                  className="cursor-pointer transition-transform duration-300 hover:scale-110"
                />
                <img
                  onClick={() => handleYoutube()}
                  src={youtube}
                  className="cursor-pointer transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div> */}

            <div className="hidden sm:flex flex-col sm:flex-row justify-between items-center text-white text-xs sm:text-sm">
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6">

                {/* Phone */}
                <a
                  href="tel:+918860296060"
                  className="flex items-center gap-2 cursor-pointer hover:underline"
                >
                  <img src={callImg} className="text-blue-400" />
                  <span       onClick={handleCall} >+91-886-029-6060</span>
                </a>

                {/* Email (Gmail only) */}
                <div
                  className="flex items-center gap-2 cursor-pointer hover:underline"
                  onClick={handleGmail}
                >
                  <img src={mail} className="text-blue-400" />
                  <span>info@mygges.com</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-2 sm:mt-0">
                <img
                  onClick={handleInst}
                  src={instagram}
                  className="cursor-pointer transition-transform duration-300 hover:scale-110"
                />
                <img
                  onClick={handleFacebook}
                  src={facebook}
                  className="cursor-pointer transition-transform duration-300 hover:scale-110"
                />
                <img
                  onClick={handleWhatsApp}
                  src={whatsapp}
                  className="cursor-pointer transition-transform duration-300 hover:scale-110"
                />
                <img
                  onClick={handleYoutube}
                  src={youtube}
                  className="cursor-pointer transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>




            {/* Navbar */}
            <div className="flex justify-between items-center w-full bg-white/90 rounded-xl px-4 sm:px-6 py-3 shadow-md">
              <div className="flex items-center justify-between w-full lg:w-auto">
                <div className="text-xl font-bold text-black flex items-center ">
                  <img
                    src={logo}
                    alt="Logo"
                    onClick={() => handleHome()}
                    className="h-8 sm:h-10 w-auto object-contain cursor-pointer"
                  />
                </div>

                <div className="lg:hidden">
                  <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                  </button>
                </div>
              </div>

              <div className="hidden lg:flex items-center gap-4 lg:gap-10 text-gray-700 font-medium relative">
                {headerData?.map((item) =>
                  item.dropdown ? (
                    <div key={item.name} className="relative group">
                      <button
                        className={`hover:text-blue-600 transition-colors text-lg duration-200 flex items-center gap-1
                          ${pathname === item.link
                            ? "text-blue-500 font-bold border-blue-600"
                            : ""
                          }
                        `}
                      >
                        {item.name}
                        <svg
                          className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-lg overflow-visible border border-gray-100 z-[9999] w-48">
                        {sections?.map((subItem) => (
                          <div key={subItem.name} className="relative">
                            {/* <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition">
                              <Link
                                to={subItem.link}
                                onClick={() => handleToggle(subItem.name)}
                                className={`hover:text-blue-600 transition
                                  ${isActiveParent(subItem)
                                    ? "text-blue-600 font-semibold"
                                    : ""
                                  }
                                  `}
                              >
                                {subItem.name}
                              </Link>

                              {subItem?.courses &&
                                subItem.courses.length > 0 && (
                                  <button
                                    onClick={() => handleToggle(subItem.name)}
                                    className="text-gray-500 hover:text-blue-600 focus:outline-none"
                                  >
                                    {openSection === subItem.name ? (
                                      <span>&#9650;</span>
                                    ) : (
                                      <span>&#9660;</span>
                                    )}
                                  </button>
                                )}
                            </div> */}
<div
  onClick={() => handleToggle(subItem.name)}
  className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-50 transition"
>
  <Link
    to={subItem.link}
    className={`hover:text-blue-600 transition
      ${isActiveParent(subItem)
        ? "text-blue-600 font-semibold"
        : "text-gray-700"
      }
    `}
  >
    {subItem.name}
  </Link>

  {subItem?.courses?.length > 0 && (
    <span className="text-gray-500 hover:text-blue-600">
      {openSection === subItem.name ? "▲" : "▼"}
    </span>
  )}
</div>


                            {/* DESKTOP SUB-MENU */}
                            {subItem?.courses &&
                              openSection === subItem.name && (
                                <div className="ml-6 bg-white border-l border-gray-200 my-1 rounded-r-md overflow-hidden shadow-sm">
                                  {subItem.courses.map((course) => (
                                    <Link
                                      key={course.name}
                                      to={course.link}
                                      // 🟢 UPDATE: Added Manual Scroll Logic
                                      onClick={() => handleLinkClick(course.name, course.link)}
                                      className={`block px-4 py-2 text-sm transition-all duration-200 border-l-4 
                                        ${selectedChild === course.name
                                          ? "bg-blue-50 border-blue-600 text-blue-700 font-bold shadow-inner"
                                          : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-blue-600 hover:border-blue-300"
                                        }
                                      `}
                                    >
                                      {course.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.link}
                      className={`hover:text-blue-600 text-lg transition-colors duration-200
                        ${pathname === item.link
                          ? "text-blue-500 font-bold border-blue-600"
                          : ""
                        }
                        `}
                    >
                      {item.name}
                    </Link>
                  )
                )}

                <button
                  onClick={() => handleUrl("/contact")}
                  className="bg-blue-600 text-white text-md px-5 py-2 cursor-pointer rounded-lg hover:bg-blue-700 transition"
                >
                  Contact us
                </button>
              </div>
            </div>

            {/* MOBILE MENU */}
            {menuOpen && (
              <>
                <div
                  className="fixed inset-0 z-40 bg-black/5"
                  onClick={() => setMenuOpen(false)}
                ></div>

                <nav
                  className="
                    relative z-50
                    lg:hidden
                    bg-white/95 backdrop-blur-md
                    rounded-2xl
                    mt-2 mx-3 mb-4
                    text-gray-700 font-medium
                    shadow-xl
                    border border-gray-100
                    animate-slideDown
                  "
                >
                  <ul className="flex flex-col text-center py-2">
                    {headerData.map((item) =>
                      item.dropdown ? (
                        <details
                          key={item.name}
                          className="group border-t border-gray-100 last:border-b last:border-gray-100"
                        >
                          <summary
                            className="
                              py-3 cursor-pointer
                              text-lg font-semibold
                              flex justify-center items-center gap-2
                              text-gray-800
                              hover:text-blue-600
                              transition
                            "
                          >
                            {item.name}

                            <svg
                              className="w-5 h-5 transition-transform duration-300 group-open:rotate-180 text-blue-500"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </summary>

                          <div className="bg-gray-50 border-t border-gray-100 py-2">
                            {sections?.map((subItem) => (
                              <div
                                key={subItem.name}
                                className="
                                  mx-2 my-1
                                  rounded-xl
                                  bg-white
                                  border border-gray-100
                                  shadow-sm
                                  overflow-hidden
                                "
                              >
                                <div
                                  className="
                                    flex items-center justify-between
                                    px-4 py-3
                                    bg-white
                                    hover:bg-blue-50
                                    transition
                                    rounded-xl
                                  "
                                >
                                  <Link
                                    to={subItem.link}
                                    className="font-medium tracking-wide"
                                    onClick={() => setMenuOpen(false)}
                                  >
                                    {subItem.name}
                                  </Link>

                                  {subItem?.courses &&
                                    subItem.courses.length > 0 && (
                                      <button
                                        onClick={() =>
                                          handleToggle(subItem.name)
                                        }
                                        className="
                                          w-8 h-8
                                          flex items-center justify-center
                                          rounded-full
                                          bg-blue-100
                                          text-blue-600
                                          hover:bg-blue-600 hover:text-white
                                          transition
                                        "
                                      >
                                        {openSection === subItem.name
                                          ? "▲"
                                          : "▼"}
                                      </button>
                                    )}
                                </div>

                                {subItem?.courses &&
                                  openSection === subItem.name && (
                                    <div
                                      className="
                                        mx-3 mb-3 mt-1
                                        rounded-xl
                                        bg-gradient-to-br from-white to-blue-50
                                        border border-blue-100
                                        shadow-inner
                                        overflow-hidden
                                        animate-slideDown
                                      "
                                    >
                                      {subItem.courses.map((course) => (
                                        <Link
                                          key={course.name}
                                          to={course.link}
                                          // 🟢 UPDATE: Added Manual Scroll Logic
                                          onClick={() => handleLinkClick(course.name, course.link)}
                                          className={`block px-4 py-2 text-sm font-medium transition
                                            ${selectedChild === course.name
                                              ? "bg-blue-600 text-white"
                                              : "hover:bg-blue-600 hover:text-white"
                                            }
                                          `}
                                        >
                                          {course.name}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                              </div>
                            ))}
                          </div>
                        </details>
                      ) : (
                        <li
                          key={item.name}
                          className="border-t border-gray-100 last:border-b last:border-gray-100"
                        >
                          <Link
                            to={item.link}
                            className="
                              block py-3
                              hover:bg-gray-100
                              hover:text-blue-600
                              transition
                            "
                            onClick={() => setMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      )
                    )}

                    <li className="py-3">
                      <button  onClick={() => {
                          handleUrl();       // Contact page par le jayega
                          setMenuOpen(false); // Menu ko band karega
                        }}
                        className="
                          bg-blue-600 text-white
                          w-4/5 mx-auto
                          py-2 rounded-xl
                          hover:bg-blue-700
                          transition
                        "
                      >
                        Contact Us
                      </button>
                    </li>
                  </ul>
                </nav>
              </>
            )}
          </header>

          <div className="absolute -bottom-4 md:-bottom-8 right-4 md:right-10 z-50 ">
            <img
              src={moneyImg}
              alt="Money Icon"
              className="w-20 md:w-40 lg:w-60 drop-shadow-lg"
            />
          </div>
        </div>
      </div>
          <marquee
          behavior="scroll"
          direction="left"
          scrollamount="6"
          class="bg-blue-500 text-white py-2 text-lg font-semibold tracking-wide"
        >
          {bannerData?.title}
        </marquee>

      <div className=" flex flex-col justify-center text-center my-4 ">
        
        <div className="relative">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight ">
            Personalized <span className="relative inline-block">Online</span>
          </h1>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3">
          Tutoring 
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-blue-500 mb-5">
          {/* Anywhere */}
          From Our Experienced tutors.
        </h1>
        <p className=" text-sm sm:text-lg md:text-xl mb-6 mx-auto max-w-xl sm:max-w-2xl">

           {bannerData?.description }
        </p>
    
        <div className="flex justify-center mt-4 items-center gap-4">
          <button
            onClick={handleUrl}
            className="flex cursor-pointer items-center justify-center gap-4 bg-[#305CDE] text-white px-7 py-4 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-700 transition text-base sm:text-lg font-semibold"
          >
            Start Free Trial
            <img src={arrow} alt="arrow" className="w-2 h-2 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </>
  );
};