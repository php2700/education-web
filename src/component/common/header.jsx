import heroBanner from "../../assets/heroBanner.jpg";
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
      }, [slides.length]);

      return (
            <div className="relative w-full h-screen">
                  {/* Background Banner */}
                  <img
                        src={slides[currentIndex].image}
                        alt={slides[currentIndex].title}
                        className="w-full h-full object-cover transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>

                  {/* HEADER */}
                  <header className="absolute top-0 left-0 w-full flex flex-col md:flex-col px-6 md:px-16 py-4 z-50 gap-2">
                        {/* Top Contact & Social */}
                        <div className="flex justify-between w-full items-center text-white text-sm">
                              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-5">
                                    {/* <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                          {slides[currentIndex].title}
                                    </h1>
                                    <p className="text-lg md:text-2xl max-w-2xl">
                                          {slides[currentIndex].description}
                                    </p> */}
                              </div>


                              <div className="flex items-center gap-4">
                                    <FaInstagram className="hover:text-blue-400 cursor-pointer" />
                                    <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
                                    <FaWhatsapp className="hover:text-green-400 cursor-pointer" />
                              </div>
                        </div>

                        <div className="flex justify-between items-center w-full bg-white bg-opacity-90 rounded-xl px-6 py-3 shadow-md">
                              <div className="flex items-center gap-4">
                                    <div className="text-2xl font-bold text-black">
                                          <img src={logo} alt="Logo" />
                                    </div>
                                    <div className="md:hidden">
                                          <button
                                                onClick={() =>
                                                      setMenuOpen(!menuOpen)
                                                }
                                          >
                                                {menuOpen ? (
                                                      <FaTimes size={28} />
                                                ) : (
                                                      <FaBars size={28} />
                                                )}
                                          </button>
                                    </div>
                              </div>

                              <div className="flex items-center gap-6">
                                    <nav className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
                                          {[
                                                "Home",
                                                "About Us",
                                                "Courses",
                                                "Pricing",
                                                "Our Management",
                                                "Test Imotional",
                                                "Blog",
                                          ].map((item) => (
                                                <a
                                                      key={item}
                                                      href="#"
                                                      className="hover:text-blue-600"
                                                >
                                                      {item}
                                                </a>
                                          ))}
                                    </nav>
                                    <button className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                                          Contact us
                                    </button>
                              </div>
                        </div>
                  </header>

                  <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-24 text-left z-20">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
                              Personalized Online
                        </h1>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
                              Tutoring{" "}
                              <span className="text-blue-500">Anytime,</span>
                        </h1>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">
                              <span className="text-blue-500">Anywhere</span>
                        </h1>
                        <p className="text-white text-lg md:text-xl mb-6 max-w-2xl">
                              Connect with expert tutors for math, science,
                              languages, and more — tailored to your goals.
                        </p>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition text-lg">
                              Start Free Trial
                        </button>
                  </div>


  <div className="absolute -bottom-24 right-10">
    <img src={moneyImg} alt="Money Icon" className="w-40 md:w-60" />
  </div>

                  <div className=" flex justify-center items-center gap-3">
                        {slides.map((slide, index) => (
                              <div
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`my-2 rounded-full  cursor-pointer  transition-all duration-300 ${
                                          currentIndex === index
                                                ? "bg-blue-500 scale-110 "
                                                : " opacity-60 "
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
