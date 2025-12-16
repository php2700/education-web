import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import michel from "../../assets/michel.png";
import image2 from "../../assets/client2.png";
import image3 from "../../assets/client3.png";
import image4 from "../../assets/client4.png";
import image5 from "../../assets/client5.png";
import image7 from "../../assets/client7.avif";
import image8 from "../../assets/client8.avif";
import image9 from "../../assets/client9.avif";
import image10 from "../../assets/client10.avif";
import { useLocation } from "react-router-dom";

import backgroundImage from "../../assets/work-bg.png";
import axios from "axios";
import { toast } from "react-toastify";

const testimonials = [
  {
    text: "GGES made SCAT experience a cakewalk for my son. He qualified his test with an excellent percentile. Kudos GGES. Tons of thanks.",
    name: "Catherine Jenner",
    role: "OHIO",
    icon: michel,
  },
  {
    text: "Thank you guys. I want to share with you that Emily has got selected in one of the best colleges. A big thank to Hitaishi who made this possible with her best tutoring. Thanks again.",
    name: "Kyle Madgen",
    role: "New York",
    icon: image10,
  },
  {
    text: "I've had many great experiences with GGES. My tutor was very intelligent and helped me by adopting a flexible approach which helped me in understanding concepts very easily. I was very impressed and recommend GGES to all those who need perfection. Thanks Raj for being such a support.",
    name: "Gary Lawson",
    role: "California.",
    icon: image3,
  },
  {
    text: "GGES helped me complete my homework and understand them as well. Just by using their services my grades went up. I really thank GGES for everything.",
    name: "Agasthya",
    role: "Singapore.",
    icon: image4,
  },
  {
    text: "I feel more confident at school after taking tutoring from GGES and my grades have drastically improved and are still improving.",
    name: "Tuen Ki Mun",
    role: "Hongkong.",
    icon: image5,
  },
  {
    text: "Raj is probably the best turor I've gotten so far.  He explained thing to me in a way I understood and he didnt give me the answer he made me work for it, It helped to me understand the problem a lot better. Really liked his approach Thank you Raj !",
    name: "Richard May",
    role: "Sydney.",
    icon: image7,
  },
  {
    text: "PSAT qualification could not have been possible for me without GGES. They were at best in all my sessions with them. Work sheets and practice modules helped me in measuring myself which helped my qualifying my test with great grades. Raj and Hitaishi  thanks a lot for your guidance and help.",
    name: "Craig Simpson",
    role: "California.",
    icon: image8,
  },
  {
    text: "Hitaishi thank you so much for helping Mysha in qualifying for Maths Kanagaroo. She has secured top grades and is really happy with you guys. She specially wanted to thank you for your guidance. I wish you guys prosper to new heights.",
    name: "Asha Sharma",
    role: "New Jersy.",
    icon: image9,
  },
];

export const Testimonial = () => {
  const [testImonialData, setTestImonialData] = useState([]);
  const headingRef = useRef(null); // Reference create kiya
  const { pathname } = useLocation(); // URL track karne ke liye

  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  // --- YE CODE ADD KAREIN ---
  useEffect(() => {
    if (headingRef.current) {
      // Ye function page ko scroll karke heading par le aayega
      headingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  const getData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/testImonial`
      );
      setTestImonialData(res?.data?.data);
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
    getData();
  }, []);

  return (
    <div
      className="bg-[#F0F8FF] text-gray-900"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 ref={headingRef} className="text-3xl md:text-4xl font-bold mb-4">
          What Our Clients Say
        </h2>

        {/* Card */}
        {/* <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white p-8 shadow-xl rounded-2xl border border-gray-100"
      >
        <p className="text-gray-600 italic text-lg">
          "{testimonials[index].text}"
        </p>

        <h6 className="mt-6 font-semibold text-gray-900 text-lg">
          — {testimonials[index].name}
        </h6>
        <small className="text-gray-500">{testimonials[index].role}</small>
      </motion.div> */}

        {/* Dots */}
        {/* <div className="flex justify-center mt-6 gap-3">
        {testimonials.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all 
            ${
              i === index
                ? "bg-blue-600 scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          ></div>
        ))}
      </div> */}
        <section className="py-6 px-4">
          <div className="max-w-7xl container mx-auto text-center">
            <div className="grid md:grid-cols-3 gap-6">
              {testImonialData?.map((review, i) => (
                <div
                  key={i}
                  className="bg-[#F0F8FF] rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-left flex flex-col h-full"
                >
                  {/* <div className="text-yellow-400 mb-3">
                  {"★".repeat(review.rating)}
                </div> */}
                  <p className="text-gray-700 italic mb-4 flex-1">
                    “{review.description}”
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <div>
                      <img
                        className="rounded-full h-16 w-16"
                        src={`${import.meta.env.VITE_APP_URL}${review?.image}`}
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{review.title}</p>
                      <p className="text-sm text-gray-500">{review.address}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonial;
