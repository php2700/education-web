import React from "react";
import {
  FaUserGraduate,
  FaUserTie,
  FaRegSmile,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import trust1 from "../../assets/trust-1.png";
import trust2 from "../../assets/trust-2.png";
import trust3 from "../../assets/trust-3.png";
import trust4 from "../../assets/trust-4.png";
import sarah from "../../assets/sarah.png";
import michel from "../../assets/michel.png";
import david from "../../assets/david.png";
import latestImg from "../../assets/latest.png";
import star from "../../assets/starImg.png";
import backgroundImage from "../../assets/work-bg.png";

export const OfferAndTrust = () => {
  const offers = [
    {
      tag: "Hot Deal",
      date: "Valid until Dec 31, 2025",
      title: "50% Off First Month",
      desc: "Start your learning journey with half-price tutoring for the first month. Limited time offer!",
    },
    {
      tag: "New",
      date: "Nov 1, 2025",
      title: "New Subjects Added",
      desc: "We've expanded our offerings with Advanced Chemistry, AP Physics, and SAT Prep courses.",
    },
    {
      tag: "Referral",
      date: "Ongoing",
      title: "Refer & Earn $50",
      desc: "Invite a friend and both of you get $50 credit when they complete their first session.",
    },
  ];

  const reviews = [
    {
      name: "Sarah L.",
      role: "Parent of a 7th Grader",
      text: "My daughter’s confidence in math has skyrocketed. The tutor was patient, knowledgeable, and made learning fun. We couldn’t be happier!",
      rating: 5,
      icon: sarah,
    },
    {
      name: "Michael P.",
      role: "High School Student",
      text: "I finally understood chemistry! The 1-on-1 sessions helped me tackle difficult topics at my own pace. I went from a C to an A-.",
      rating: 5,
      icon: michel,
    },
    {
      name: "David Chen",
      role: "Parent of two",
      text: "The scheduling flexibility is a lifesaver for our busy family. Setting up sessions is easy, and the progress reports are incredibly helpful.",
      rating: 5,
      icon: david,
    },
  ];

  const stats = [
    {
      icon: trust1,
      value: "500+",
      label: "Active Students",
    },
    {
      icon: trust2,
      value: "100+",
      label: "Expert Tutors",
    },
    {
      icon: trust3,
      value: "50,000+",
      label: "Sessions Completed",
    },
    {
      icon: trust4,
      value: "99%",
      label: "Satisfaction Rate",
    },
  ];

  return (
    <div className="bg-blue-50 text-gray-900">
      {/* Offers Section */}
      <section className="py-16 px-4">
        <div className="container max-w-7xl mx-auto text-center">
          <button className="px-4 py-1 bg-white rounded-full flex mx-auto gap-2  text-gray-700 text-sm  mb-3 shadow-sm">
            <img src={latestImg} />
            Latest Updates
          </button>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Offers & News</h2>
          <p className="text-gray-600 mb-10">
            Stay updated with our latest promotions, new courses, and exciting
            announcements
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {offers.map((offer, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-left"
              >
                <div className="flex justify-between items-center mb-3 text-sm">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
                    {offer.tag}
                  </span>
                  <span className="text-gray-500">{offer.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{offer.desc}</p>
                <button className=" font-medium bg-blue-50  text-sm   w-full p-2 rounded-lg">
                  Learn More →
                </button>
              </div>
            ))}
          </div>

          <button className="mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            View All Updates →
          </button>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Success Stories
          </h2>
          <p className="text-gray-600 mb-10">
            Hear what parents and students have to say about their experience
            with us.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-left"
              >
                <div className="text-yellow-400 mb-3">
                  {"★".repeat(review.rating)}
                </div>
                <p className="text-gray-700 italic mb-4">“{review.text}”</p>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200">
                    <img src={review?.icon} />
                  </div>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section
        className="py-16 px-4 bg-white relative overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Trust & Credibility
          </h2>
          <p className="text-gray-600 mb-10">
            Join Our Growing Community of Successful Learners
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-blue-600 mb-2  border border-gray-200 rounded-xl shadow-xl">
                  <img src={stat.icon} className="p-2" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </h3>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
