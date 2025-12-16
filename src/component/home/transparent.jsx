import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaBookOpen,
  FaUserFriends,
  FaChalkboard,
  FaChartLine,
  FaCheck,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PricingAndHowItWorks = () => {
  const navigate = useNavigate();
  const [transparentData, setTransparentData] = useState([]);

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

  const getTrsansparentData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/pricing`
      );
      setTransparentData(res?.data?.data);
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
    getTrsansparentData();
  }, []);

  const handleUrl = () => {
    navigate("/pricing");
  };

  return (
    <div className="bg-[#F0F8FF] text-gray-900">
      {/* Transparent Pricing Section */}
      <section className="py-10 px-5 text-center">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#1A202C]">
            Transparent Pricing
          </h2>
          <p className="text-[#4B5563] mb-10">
            Choose a plan that works for you. No hidden fees, ever. Get started
            with a free trial.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {transparentData?.slice(0, 3).map((ele, index) => (
              <div key={ele.id} className="z-10 py-10">
                <div className="bg-white rounded-xl  border border-gray-200 w-full mx-auto shadow-md">
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200 rounded-lg text-sm sm:text-base">
                      <thead>
                        <tr>
                          <th className="py-3 px-4 text-left">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                              Plan Name
                            </h3>
                            <p className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold bg-rose-100 text-rose-700 px-3 py-1 rounded-lg inline-block shadow-sm">
                              {ele?.planName}
                            </p>
                          </th>

                          <th className="py-3 px-4 text-center font-semibold text-gray-700">
                            <span className="text-base sm:text-lg">
                              Classes
                            </span>
                            <div className="mt-2">
                              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-xs sm:text-sm">
                                {ele.className}
                              </button>
                            </div>
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {ele?.fees?.map((feeItem, i) => (
                          <tr key={i} className="border-t border-gray-200">
                            <td className="py-3 text-left px-4 text-gray-700 font-medium">
                              {feeItem?.label}
                            </td>
                            <td className="py-3 px-4 text-center text-gray-600">
                              {feeItem?.price}
                            </td>
                          </tr>
                        ))}

                        <tr className="border-t border-gray-200">
                          <td className="py-3 text-left  px-4 font-medium">
                            Fees Per Hour
                          </td>
                          <td className="py-3 px-4 text-center">
                            {ele?.feesPerHour || "-"}
                          </td>
                        </tr>

                        <tr className="border-t border-gray-200">
                          <td className="py-3 text-left  px-4 font-medium">
                            Saving In Offers
                          </td>
                          <td className="py-3 px-4 text-center">
                            {ele?.off || "-"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <button
                    className={`w-full py-3 rounded-lg font-medium transition mt-auto cursor-pointer ${
                      // plan.highlight

                      "bg-[#305CDE] text-white hover:bg-blue-700"
                    }`}
                    onClick={() => handleUrl()}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => handleUrl()}
            className=" cursor-pointer bg-[#305CDE] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            View All plans →
          </button>
          <p className="mt-4 text-gray-600 text-sm">
            All plans include a{" "}
            <span className="font-semibold">money-back guarantee</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default PricingAndHowItWorks;
