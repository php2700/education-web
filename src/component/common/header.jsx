// import heroBanner from "../../assets/heroBanner.jpg";
// import heroBanner from "../../assets/homebanner.png";
// import heroBanner from "../../assets/home-1.jpg";
import heroBanner from "../../assets/home-2.jpg";

import arrow from "../../assets/arrow_forward.png";
import { Link, useNavigate } from "react-router-dom";

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

export const HeaderBanner = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [bannerData, setBannerData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prev) => (prev + 1) % slides.length);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, []);

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

  const handleHome=()=>{
    navigate('/')
  }
  return (
    <>
      <div className="relative w-full overflow-y-auto lg:overflow-hidden max-h-[100vh]">
        {/* Banner Section */}
        <div className="relative w-full max-h-[100vh] flex items-center justify-center overflow-visible lg:overflow-hidden ">
          <img
            src={`${import.meta.env.VITE_APP_URL}${bannerData.image}`}
            alt={slides[0].title}
            className="w-full max-h-full object-cover object-center  rounded-xl transition-all duration-700"
          />

          {/* <div className="absolute inset-0 bg-black/40"></div> */}

          <header className="absolute top-0 left-0 w-full flex flex-col px-4 sm:px-8 md:px-16 py-4 z-50 gap-3">
            {/* Top Contact & Social */}
            <div className="hidden sm:flex  flex-col  sm:flex-row justify-between items-center text-white text-xs sm:text-sm">
              {/* Left Side */}
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2">
                  <img src={callImg} className="text-blue-400" />
                  <a href="tel:+911234567890" className="hover:underline">
                    +91 12345 67890
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <img src={mail} className="text-blue-400" />
                  <a href="mailto:info@example.com" className="hover:underline">
                    info@example.com
                  </a>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex items-center gap-4 mt-2 sm:mt-0">
                <img src={instagram} className="cursor-pointer " />
                <img src={facebook} className="cursor-pointer" />
                <img src={whatsapp} className="cursor-pointer" />
                <img src={youtube} className="cursor-pointer" />
              </div>
            </div>

            {/* Navbar */}
            <div className="flex justify-between items-center w-full bg-white/90 rounded-xl px-4 sm:px-6 py-3 shadow-md">
              {/* Logo + Menu Toggle */}
              <div className="flex items-center justify-between w-full lg:w-auto">
                <div className="text-xl font-bold text-black flex items-center">
                  <img
                    src={logo}
                    alt="Logo"
                    onClick={()=>handleHome()}
                    className="h-8 sm:h-10 w-auto object-contain"
                  />
                </div>

                {/* Menu Icon (only visible below lg) */}
                <div className="lg:hidden">
                  <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                  </button>
                </div>
              </div>

              {/* Desktop Navigation (visible lg and above) */}
              {/* <div className="hidden lg:flex items-center gap-4 xl:gap-10  text-gray-700 font-medium">
              {[
                "Home",
                "About Us",
                <Link
                  to="/Courses"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Courses
                </Link>,
                <Link
                  to="/pricing"
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  Pricing
                </Link>,
                "Our Management",
                // "Test Imotional",
                "Blog",
              ].map((item) => (
                <a key={item} href="#" className="hover:text-blue-600">
                  {item}
                </a>
              ))}

              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition text-sm">
                Contact us
              </button>
            </div> */}
              <div className="hidden lg:flex items-center  gap-4 lg:gap-10 text-gray-700 font-medium relative">
                {headerData?.map((item) =>
                  item.dropdown ? (
                    <div key={item.name} className="relative group">
                      <button className="hover:text-blue-600 transition-colors text-lg duration-200 flex items-center gap-1">
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

                      <div className="absolute left-0  hidden group-hover:block bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100 z-50 w-48">
                        {[
                          { name: "Math", link: "/courses/maths" },
                          { name: "k-12", link: "/courses/k-12" },
                          { name: "English", link: "/courses/english" },
                          { name: "Test Prep", link: "/courses/test" },
                        ].map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.link}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.link}
                      className="hover:text-blue-600 text-lg transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  )
                )}

                <button
                  onClick={() => handleUrl("/contact")}
                  className="bg-blue-600 text-white text-md px-5 py-2 rounded-lg hover:bg-blue-700 transition "
                >
                  Contact us
                </button>
              </div>
            </div>

            {menuOpen && (
              <nav className="lg:hidden  bg-white rounded-xl mt-1 mx-3 mb-3  text-gray-700 font-medium shadow-md border border-gray-100">
                <ul className="flex flex-col text-center py-2">
                  {headerData.map((item) =>
                    item.dropdown ? (
                      <details
                        key={item.name}
                        className="group border-t last:border-b"
                      >
                        <summary className="py-2 cursor-pointer text-lg flex justify-center items-center gap-1 hover:text-blue-600">
                          {item.name}
                          <svg
                            className="w-4 h-4 transition-transform duration-300 group-open:rotate-180"
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
                        <div className="bg-gray-50 border-t">
                          {[
                            { name: "Math", link: "/courses/maths" },
                            { name: "K-12", link: "/courses/k-12" },
                            { name: "English", link: "/courses/english" },
                            { name: "Test Prep", link: "/courses/test" },
                          ].map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.link}
                              className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <li key={item.name} className="border-t last:border-b">
                        <Link
                          to={item.link}
                          className="block py-2 hover:bg-gray-100 hover:text-blue-600"
                          onClick={() => setMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    )
                  )}

                  {/* Contact Button */}
                  <li className="py-3">
                    <button className="bg-blue-600 text-white w-4/5 mx-auto py-2 rounded-lg hover:bg-blue-700">
                      Contact Us
                    </button>
                  </li>
                </ul>
              </nav>
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

        {/* 
      <div className=" flex bg-[#F0F8FF] justify-center items-center gap-3 ">
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`my-2 rounded-full  cursor-pointer  transition-all duration-300 ${
              currentIndex === index ? "bg-blue-500 scale-110 " : " opacity-60 "
            }`}
          >
            <img
              src={slideImg}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div> */}
      </div>
      <div className=" flex flex-col justify-center text-center px-4 sm:px-8 md:px-20 my-4 ">
        <div className="relative">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold  leading-tight ">
            Personalized <span className="relative inline-block">Online</span>
          </h1>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold  mb-3">
          Tutoring <span className="text-blue-500">Anytime,</span>
        </h1>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-blue-500 mb-5">
          Anywhere
        </h1>
        <p className=" text-sm sm:text-lg md:text-xl mb-6 mx-auto max-w-xl sm:max-w-2xl">
          Connect with expert tutors for math, science, languages, and more —
          tailored to your goals.
        </p>

        <div className="flex justify-center items-center gap-4">
          <button className="flex items-center justify-center gap-4 bg-[#305CDE] text-white px-7 py-4 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-700 transition text-base sm:text-lg font-semibold">
            Start Free Trial
            <img src={arrow} alt="arrow" className="w-2 h-2 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </>
  );
};
