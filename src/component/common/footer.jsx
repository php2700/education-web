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

    const handleGmail = () => {
    const to = "info@mygges.com";
    const subject = "Inquiry";
    const body = "Hello Team,";

    // const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${encodeURIComponent(
    //   subject
    // )}&body=${encodeURIComponent(body)}`;

    // window.open(gmailUrl, "_blank");
    const gmailUrl = `https://mail.google.com`

    window.open(gmailUrl, "_blank");
  };
  return (
    <footer className="bg-[#305CDE] text-gray-900">
      {/* CTA Section with Background Image */}
      <section
        className="relative py-24 px-6 text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${import.meta.env.VITE_APP_URL}${
            bannerData?.image
          })`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>{" "}
        <div className="relative max-w-4xl mx-auto z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            {bannerData?.title}
          </h2>
          <p className="text-gray-200 mb-8">{bannerData?.description}</p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <button
              onClick={() => handleUrl("/contact")}
              className="cursor-pointer bg-white text-[#305CDE] px-6 py-3 rounded-lg font-medium flex items-center gap-3  transition"
            >
              Get Started
              <img src={arrow} alt="Get Started Arrow" className="w-3 h-3  " />
            </button>
            <button
              onClick={handleWhatsApp}
              className="cursor-pointer border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-700 transition"
            >
              Talk to an Advisor
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="bg-blue-700 text-white py-12 px-6 md:px-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          {/* Left About Section */}
          <div>
            <div className="flex justify-center cursor-pointer md:justify-start">
              <img onClick={() => handleHome()} src={logo} />
            </div>
            <p className="text-md leading-relaxed my-5">
              Personalized online tutoring to help students achieve their
              academic goals.
            </p>
            <div className="flex justify-center md:justify-start gap-3">
              <div
                onClick={() => handleFacebook()}
                className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition"
              >
                <FaFacebookF />
              </div>
              <div
                onClick={() => handleYoutube()}
                className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition"
              >
                <FaYoutube />
              </div>
              <div
                onClick={() => handleInst()}
                className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition"
              >
                <FaInstagram />
              </div>
              <div
                onClick={() => handleLinkedIn()}
                className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition"
              >
                <FaLinkedin />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-md">
              <li>
                <div
                  onClick={() => {
                    handleUrl("/about");
                  }}
                  className="hover:underline cursor-pointer cursor-pointer"
                >
                  About
                </div>
              </li>
              {/* <li>
                <a href="#" className="hover:underline cursor-pointer">
                  Subjects
                </a>
              </li> */}
              <li>
                <div
                  onClick={() => {
                    handleUrl("/pricing");
                  }}
                  className="hover:underline cursor-pointer"
                >
                  Pricing
                </div>
              </li>
              <li>
                <div
                  onClick={() => {
                    handleUrl("/blog");
                  }}
                  className="hover:underline cursor-pointer"
                >
                  Blog
                </div>
              </li>
              <li>
                <div
                  onClick={() => {
                    handleUrl("/faq");
                  }}
                  className="hover:underline cursor-pointer"
                >
                  FAQ
                </div>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-md">
              <li>
                <div
                  onClick={() => {
                    // handleUrl("/help");
                    handleUrl("/faq");
                  }}
                  className="hover:underline cursor-pointer"
                >
                  Help Center
                </div>
              </li>
              <li>
                <div
                  onClick={() => {
                    handleUrl("/privacy-policy");
                  }}
                  className="hover:underline cursor-pointer"
                >
                  Privacy Policy
                </div>
              </li>
              <li>
                <div
                  onClick={() => {
                    handleUrl("/term-condition");
                  }}
                  className="hover:underline cursor-pointer"
                >
                  Term & Condition
                </div>
              </li>
              <li>
                <div
                  onClick={() => handleUrl("/contact")}
                  className="hover:underline cursor-pointer"
                >
                  Contact Support
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-md">
              <li     onClick={handleGmail} className="flex items-center gap-2 justify-center md:justify-start">
                <img src={mail} alt="Mail" className="w-4 h-4" />
                <span onClick={handleGmail} className="cursor-pointer"  >info@mygges.com</span>
              </li>
              <li className="flex items-center gap-2  cursor-pointer justify-center md:justify-start">
                <img src={callImg} alt="Call" className="w-4 h-4" />
                <span>+91-886-029-6060</span>
              </li>
              <li className="flex justify-center md:justify-start">
                <button
                  onClick={handleWhatsApp}
                  className="cursor-pointer bg-white text-blue-700  font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition flex items-center gap-2"
                >
                  <FaWhatsapp className="text-green-500 text-xl " />
                  Live Chat
                </button>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Footer */}
        <div className="mt-10 text-center text-md text-blue-100 pt-6">
          © 2025 <span className="font-semibold">GGES</span>. All rights
          reserved.
        </div>
      </section>
    </footer>
  );
};

export default Footer;
