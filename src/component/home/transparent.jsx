import React from "react";
import {
  FaCheckCircle,
  FaBookOpen,
  FaUserFriends,
  FaChalkboard,
  FaChartLine,
  FaCheck,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PricingAndHowItWorks = () => {
  const navigate = useNavigate();
  const plans = [
    {
      name: "Starter",
      price: "$29",
      features: [
        "4 sessions per month",
        "30-minute sessions",
        "Basic progress reports",
        "Email support",
      ],
      highlight: false,
    },
    {
      name: "Professional",
      price: "$79",
      features: [
        "12 sessions per month",
        "60-minute sessions",
        "Detailed progress tracking",
        "Priority support",
        "Homework help",
      ],
      highlight: true,
      tag: "Most Popular",
    },
    {
      name: "Premium",
      price: "$149",
      features: [
        "Unlimited sessions",
        "60-minute sessions",
        "24/7 dedicated support",
        "Advanced analytics",
        "Custom learning path",
        "Multiple subjects",
      ],
      highlight: false,
    },
  ];

  const handleUrl = () => {
    navigate("/pricing");
  };

  return (
    <div className="bg-[#F0F8FF] text-gray-900">
      {/* Transparent Pricing Section */}
      <section className="py-20 px-5 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#1A202C]">
            Transparent Pricing
          </h2>
          <p className="text-[#4B5563] mb-10">
            Choose a plan that works for you. No hidden fees, ever. Get started
            with a free trial.
          </p>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border ${
                  plan.highlight ? "border-blue-500" : "border-transparent"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#305CDE] text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {plan.tag}
                  </span>
                )}
                <h3 className="text-xl font-bold mb-2 text-[#000000]">
                  {plan.name}
                </h3>
                <p className="text-4xl font-bold mb-1 flex items-center justify-center">
                  {plan.price}
                  <span className="text-[#4B5563] text-xl font-normal">
                    /month
                  </span>
                </p>
                {/* <p className="text-[#4B5563] mb-6">/month</p> */}

                <ul className="text-left mb-6 space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <FaCheck className="text-green-500" /> {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-medium transition ${
                    plan.highlight
                      ? "bg-[#305CDE] text-white hover:bg-blue-700"
                      : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                  }`}
                  onClick={() => handleUrl()}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>

          <p className="mt-8 text-gray-600 text-sm">
            All plans include a{" "}
            <span className="font-semibold">money-back guarantee</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default PricingAndHowItWorks;
