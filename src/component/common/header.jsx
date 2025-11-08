import heroBanner from "../../assets/heroBanner.jpg";
import arrow from "../../assets/arrow_forward.png";
import { Link } from "react-router-dom";

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

const slides = [
  {
    image: heroBanner,
    title: "Welcome to Our Website",
    description: "Discover amazing services and offers here.",
  },
  {
    image: heroBanner,
    title: "Your Next Adventure",
    description: "Explore our new destinations today.",
  },
  {
    image: heroBanner,
    title: "Join Our Community",
    description: "Connect with people and grow together.",
  },
];

export const HeaderBanner = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      {/* Banner Section */}
      <div className="relative w-full h-[90vh] sm:h-[80vh] md:h-screen ">
        {/* Background Image */}
        <img
          src={slides[currentIndex].image}
          alt={slides[currentIndex].title}
          className="w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        {/* HEADER */}
        <header className="absolute top-0 left-0 w-full flex flex-col px-4 sm:px-8 md:px-16 py-4 z-50 gap-3">
          {/* Top Contact & Social */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-white text-xs sm:text-sm">
            {/* Left Side */}
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-blue-400" />
                <a href="tel:+911234567890" className="hover:underline">
                  +91 12345 67890
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-blue-400" />
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
            <div className="hidden lg:flex items-center gap-4 xl:gap-10 text-gray-700 font-medium relative">
              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "/about" },
                { name: "Courses", dropdown: true },
                { name: "Pricing", link: "/pricing" },
                { name: "Our Management", link: "/management" },
                { name: "Blog", link: "/blog" },
              ].map((item) =>
                item.dropdown ? (
                  <div key={item.name} className="relative group">
                    <button className="hover:text-blue-600 transition-colors duration-200 flex items-center gap-1">
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
                        { name: "Mathematics", link: "/courses/maths" },
                        { name: "Science", link: "/courses/science" },
                        { name: "English", link: "/courses/english" },
                        { name: "Programming", link: "/courses/programming" },
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
                    className="hover:text-blue-600 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )
              )}

              <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition text-sm">
                Contact us
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Menu (only below lg) */}
          {menuOpen && (
            <nav className="lg:hidden bg-white rounded-xl mt-2 text-gray-700 font-medium shadow-md">
              <ul className="flex flex-col text-center py-2">
                {[
                  "Home",
                  "About Us",
                  "Courses",
                  "Pricing",
                  "Our Management",
                  "Test Imotional",
                  "Blog",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block py-2 hover:bg-gray-100 hover:text-blue-600"
                    >
                      {item}
                    </a>
                  </li>
                ))}
                <li>
                  <button className="bg-blue-600 text-white w-4/5 mx-auto mt-2 py-2 rounded-lg hover:bg-blue-700">
                    Contact us
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </header>

        {/* Banner Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-8 md:px-20 text-left z-20">
          {/* <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight mb-3">
            Personalized Online
          </h1> */}
          <div className="relative">
            {/* <img src={rocket} alt="rocket" className="absolute -left-12 sm:-left-16 top-0 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]" /> */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight mb-3">
              Personalized{" "}
              <span className="relative inline-block">
                Online
                {/* <img src={cfl} alt="bulb" className="absolute -top-12 sm:-top-10 -left-2 sm:-left-3 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]" /> */}
                <img
                  src={cfl}
                  alt="bulb"
                  className="absolute -top-12 sm:-top-14 left-2 sm:left-3 w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]"
                />
              </span>
            </h1>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-3">
            Tutoring <span className="text-blue-500">Anytime,</span>
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-blue-500 mb-5">
            Anywhere
          </h1>
          <p className="text-white text-sm sm:text-lg md:text-xl mb-6 max-w-xl sm:max-w-2xl">
            Connect with expert tutors for math, science, languages, and more —
            tailored to your goals.
          </p>

          {/* <button className="flex items-center justify-center gap-4 bg-[#305CDE] text-white px-7 py-4 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-700 transition text-base sm:text-lg font-semibold">
            Start Free Trial
            <img src={arrow} alt="arrow" className="w-2 h-2 sm:w-5 sm:h-5" />
          </button> */}
          <div className="flex items-center gap-4">
            <button className="flex items-center justify-center gap-4 bg-[#305CDE] text-white px-7 py-4 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-700 transition text-base sm:text-lg font-semibold">
              Start Free Trial
              <img src={arrow} alt="arrow" className="w-2 h-2 sm:w-5 sm:h-5" />
            </button>
            <img
              src={book}
              alt="book"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
        </div>

        <div className="absolute bottom-0 md:-bottom-24 right-4 md:right-10 z-30 ">
          <img
            src={moneyImg}
            alt="Money Icon"
            className="w-28 md:w-48 lg:w-60 drop-shadow-lg"
          />
        </div>
      </div>

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
      </div>
    </div>
  );
};
