import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import arrow from "../../assets/arrownext.png";
import { IoIosArrowForward } from "react-icons/io";
import footerImg from "../../assets/footer.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#305CDE] text-gray-900">
      {/* CTA Section with Background Image */}
      <section
        className="relative py-24 px-6 text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${footerImg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>{" "}
        <div className="relative max-w-4xl mx-auto z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-gray-200 mb-8">
            Join thousands of students already achieving their academic goals
            with personalized online tutoring.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <button className="bg-white text-[#305CDE] px-6 py-3 rounded-lg font-medium flex items-center gap-3  transition">
              Get Started
               <img src={arrow} alt="Get Started Arrow" className="w-3 h-3  " />
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-700 transition">
              Talk to an Advisor
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="bg-blue-700 text-white py-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          {/* Left About Section */}
          <div>
            <div className="flex justify-center md:justify-start">
              <img src={logo} />
            </div>
            <p className="text-sm leading-relaxed my-5">
              Personalized online tutoring to help students achieve their
              academic goals.
            </p>
            <div className="flex justify-center md:justify-start gap-3">
              <a
                href="#"
                className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Subjects
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>📧 info@xyz.com</li>
              <li>📞 +91-1234 56 7890</li>
              <li>
                <button className="bg-white text-blue-700 font-medium px-4 py-2 rounded-lg hover:bg-gray-100 transition">
                  Live Chat
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 text-center text-sm text-blue-100 pt-6">
          © 2024 <span className="font-semibold">Name</span>. All rights
          reserved.
        </div>
      </section>
    </footer>
  );
};

export default Footer;
