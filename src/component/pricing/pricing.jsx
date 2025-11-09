import React from "react";
import backgroundImage from "../../assets/price-bg.png";
import female1 from "../../assets/pricing1.png";
import female12 from "../../assets/student2.png";
import female13 from "../../assets/student3.png";
import dotted from "../../assets/dotted.png";

const PricingPage = () => {
  return (
    <div
      className="bg-[#F0F8FF] py-16 px-6 sm:px-10 lg:px-12 h-full"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        // width:'100%'
        //  height: "100%"
      }}
    >
      <main className="container max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-center text-4xl font-bold mb-16 text-gray-900">
          OUR PRICING
        </h1>

        {/* ===== SECTION 1 ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10  items-center">
          <div className="flex justify-center">
            <img
              src={female1}
              alt="Student 1"
              className="rounded-lg shadow-xl w-full"
            />
          </div>

          {/* Card Right */}
          <div className="bg-white rounded-lg  border border-gray-200 w-full   mx-auto">
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg text-sm">
                <thead>
                  <tr>
                    <th className="py-3 px-4">
                      <h3 className="text-xl font-bold text-gray-800">
                        Compare plans{" "}
                        <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100">
                          40% Off
                        </span>
                      </h3>
                      <p className="text-gray-500 my-4">
                        Choose your plan according to you
                      </p>
                    </th>
                    <th className="py-3 px-4 text-center font-semibold text-gray-700">
                      1 CLASS
                      <div className="mt-2">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-xs">
                          Choose This Plan
                        </button>
                      </div>
                    </th>
                    <th className="py-3 px-4 text-center font-semibold text-gray-700">
                      5 CLASS
                      <div className="mt-2">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-xs">
                          Choose This Plan
                        </button>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t border-gray-200">
                    <td className="py-3 px-4 text-gray-700 font-medium">
                      Fees
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600">$25</td>
                    <td className="py-3 px-4 text-center text-gray-600">
                      $115
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-3 px-4 text-gray-700 font-medium">
                      Fees Per Hour
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600">
                      PER HOUR – $25
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600">
                      PER HOUR – $23
                    </td>
                  </tr>
                  <tr className="border-t border-gray-200">
                    <td className="py-3 px-4 text-gray-700 font-medium">
                      Saving In Offers
                    </td>
                    <td className="py-3 px-4 text-center text-gray-600">-</td>
                    <td className="py-3 px-4 text-center text-gray-600">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ===== SECTION 2 ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="bg-white rounded-lg  border border-gray-200 w-full  mx-auto order-2 lg:order-1">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg">
                <thead>
                  <tr>
                    <th className="py-3 px-4">
                      <h3 className="text-xl font-bold text-gray-800">
                        Compare plans{" "}
                        <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100">
                          45% Off
                        </span>
                      </h3>
                      <p className="text-gray-500 my-4">
                        Choose your plan according to you
                      </p>
                    </th>
                    <th className="py-3 px-4 text-center font-semibold text-gray-700">
                      10 CLASS
                      <div className="mt-2">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-xs">
                          Choose This Plan
                        </button>
                      </div>
                    </th>
                    <th className="py-3 px-4 text-center font-semibold text-gray-700">
                      15 CLASS
                      <div className="mt-2">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-xs">
                          Choose This Plan
                        </button>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-sm text-gray-700 font-medium">
                      Fees
                    </td>
                    <td className="py-3 px-4 text-center text-sm text-gray-600">
                      $210
                    </td>
                    <td className="py-3 px-4 text-center text-sm text-gray-600">
                      $285
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-sm text-gray-700 font-medium">
                      Per Hour
                    </td>
                    <td className="py-3 px-4 text-center text-sm text-gray-600">
                      PER HOUR - $21
                    </td>
                    <td className="py-3 px-4 text-center text-sm text-gray-600">
                      PER HOUR - $19
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-700 font-medium">
                      Savings in Offers
                    </td>
                    <td className="py-3 px-4 text-center text-sm text-gray-600">
                      SAVINGS - $40
                    </td>
                    <td className="py-3 px-4 text-center text-sm text-gray-600">
                      SAVINGS - $90
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Image Right */}
          <div className="flex justify-center order-1 lg:order-2">
            <img
              src={female12}
              alt="Student 2"
              className="rounded-lg shadow-xl w-full "
            />
          </div>
        </div>

        {/* ===== SECTION 3 ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image Left */}
          <div className="flex justify-center">
            <img
              src={female13}
              alt="Student 3"
              className="rounded-lg shadow-xl w-full"
            />
          </div>

          {/* Card Right */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 w-full mx-auto">
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg">
                <thead>
                  <tr>
                    <th className="py-3 px-4">
                      <h3 className="text-xl font-bold text-gray-800">
                        Compare plans{" "}
                        <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100">
                          45% Off
                        </span>
                      </h3>
                      <p className="text-gray-500 my-4">
                        Choose your plan according to you
                      </p>
                    </th>
                    <th className="py-3 px-4 text-center font-semibold text-gray-700">
                      20 CLASS
                      <div className="mt-2">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-xs">
                          Choose This Plan
                        </button>
                      </div>
                    </th>
                    <th className="py-3 px-4 text-center font-semibold text-gray-700">
                      PRECALCULUS
                      <div className="mt-2">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-xs">
                          Choose This Plan
                        </button>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-2 text-sm text-gray-700 font-medium">
                      Fees
                    </td>
                    <td className="py-3 px-2 text-center text-sm text-gray-600">
                      $350
                    </td>
                    <td className="py-3 px-2 text-center text-sm text-gray-600">
                      5 CLASSES - $150
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-2 text-sm text-gray-700 font-medium">
                      Per Hour
                    </td>
                    <td className="py-3 px-2 text-center text-sm text-gray-600">
                      PER HOUR - $17.5
                    </td>
                    <td className="py-3 px-2 text-center text-sm text-gray-600">
                      10 CLASSES - $270
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-2 text-sm text-gray-700 font-medium">
                      Saving in Offers
                    </td>
                    <td className="py-3 px-2 text-center text-sm text-gray-600">
                      SAVINGS - $150
                    </td>
                    <td className="py-3 px-2 text-center text-sm text-gray-600">
                      15 CLASSES - $375
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="my-4">
          {" "}
          <img src={dotted} />
        </div>

        <div className="flex justify-center mt-10">
          <button className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300 text-lg">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
};

export default PricingPage;
