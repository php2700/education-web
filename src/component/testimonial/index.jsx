import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import michel from "../../assets/michel.png"
import backgroundImage from "../../assets/work-bg.png";

const testimonials = [
  {
    text: "GGES made SCAT experience a cakewalk for my son. He qualified his test with an excellent percentile. Kudos GGES. Tons of thanks.",
    name: "Catherine Jenner",
    role: "OHIO",
    icon:michel
  },
  {
    text: "Thank you guys. I want to share with you that Emily has got selected in one of the best colleges. A big thank to Hitaishi who made this possible with her best tutoring. Thanks again.",
    name: "Kyle Madgen",
    role: "New York",
      icon:michel
  },
  {
    text: "I've had many great experiences with GGES. My tutor was very intelligent and helped me by adopting a flexible approach which helped me in understanding concepts very easily. I was very impressed and recommend GGES to all those who need perfection. Thanks Raj for being such a support.",
    name: "Gary Lawson",
    role: "California.",
      icon:michel
  },
    {
    text: "GGES helped me complete my homework and understand them as well. Just by using their services my grades went up. I really thank GGES for everything.",
    name: "Agasthya",
    role: "Singapore.",
      icon:michel
  },
  {
    text: "I feel more confident at school after taking tutoring from GGES and my grades have drastically improved and are still improving.",
    name: "Tuen Ki Mun",
    role: "Hongkong.",
      icon:michel
  },
  {
    text: "Raj is probably the best turor I've gotten so far.  He explained thing to me in a way I understood and he didnt give me the answer he made me work for it, It helped to me understand the problem a lot better. Really liked his approach Thank you Raj !",
    name: "Richard May",
    role: "Sydney.",
      icon:michel
  },
  {
    text: "PSAT qualification could not have been possible for me without GGES. They were at best in all my sessions with them. Work sheets and practice modules helped me in measuring myself which helped my qualifying my test with great grades. Raj and Hitaishi  thanks a lot for your guidance and help.",
    name: "Craig Simpson",
    role: "California.",
      icon:michel
  },
   {
    text: "Hitaishi thank you so much for helping Mysha in qualifying for Maths Kanagaroo. She has secured top grades and is really happy with you guys. She specially wanted to thank you for your guidance. I wish you guys prosper to new heights.",
    name: "Asha Sharma",
    role: "New Jersy.",
      icon:michel
  },
];

export const Testimonial = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#F0F8FF] text-gray-900"
     style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
     >
    <div className="max-w-6xl mx-auto py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">
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
          <section className="py-16 px-4">
        <div className="max-w-7xl container mx-auto text-center">


          <div className="grid md:grid-cols-3 gap-6">
            {testimonials?.map((review, i) => (
              <div
                key={i}
                className="bg-[#F0F8FF] rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-left"
              >
                {/* <div className="text-yellow-400 mb-3">
                  {"★".repeat(review.rating)}
                </div> */}
                <p className="text-gray-700 italic mb-4">
                  “{review.text}”
                </p>
                <div className="flex items-center gap-3 mt-4">
                  {/* <div className="w-10 h-10 rounded-full bg-gray-200">
                    <img
                      src={review?.icon}
                    />
                  </div> */}
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-gray-500">
                      {review.role}
                    </p>
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
