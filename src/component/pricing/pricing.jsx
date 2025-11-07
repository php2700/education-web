import React from "react";
// Import HeaderBanner and Footer as needed.
// import HeaderBanner from "../common/header"; 
// import Footer from "../common/footer";       

// Import your background image if you have one
import backgroundImage from "../../assets/work-bg.png"; // Make sure this path is correct

import female1 from "../../assets/pricing1.png"; // Image for first section
import female12 from "../../assets/student2.png"; // Image for second section
import female13 from "../../assets/student3.png"; // Image for third section

const PricingPage = () => {
  return (
    <div
      className="min-h-screen font-sans text-gray-800"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundColor: "#F0F8FF",
      }}
    >
      {/* <HeaderBanner /> */}

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-center text-4xl font-bold mb-16 text-gray-900">
          OUR PRICING
        </h1>

        {/* Section 1: Image Left, Card Right (1 & 5 Class) */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mb-20">
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={female1}
              alt="Student 1"
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-start"> {/* Adjusted for card alignment */}
            {/* Pricing Card 1 (1 & 5 Class) */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 w-full max-w-4xl mx-auto">
  {/* Header */}
  <div className="flex justify-between items-center mb-4">
    <h3 className="text-xl font-bold text-gray-800">Compare plans</h3>
    <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full border border-blue-100">
      40% Off
    </span>
  </div>

  <p className="text-gray-500 mb-6">Choose your plan according to you</p>

  {/* Table */}
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-200 rounded-lg text-sm">
      <thead>
        <tr className="bg-gray-50">
          <th className="py-3 px-4"></th>
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
          <td className="py-3 px-4 text-gray-700 font-medium">Fees</td>
          <td className="py-3 px-4 text-center text-gray-600">$ 25</td>
          <td className="py-3 px-4 text-center text-gray-600">$ 115</td>
        </tr>

        <tr className="border-t border-gray-200">
          <td className="py-3 px-4 text-gray-700 font-medium">Fees Per Hour</td>
          <td className="py-3 px-4 text-center text-gray-600">PER HOUR – $ 25</td>
          <td className="py-3 px-4 text-center text-gray-600">PER HOUR – $ 23</td>
        </tr>

        <tr className="border-t border-gray-200">
          <td className="py-3 px-4 text-gray-700 font-medium">Saving In Offers</td>
          <td className="py-3 px-4 text-center text-gray-600">-</td>
          <td className="py-3 px-4 text-center text-gray-600">-</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

          </div>
        </div>

        {/* Section 2: Card Left, Image Right (10 & 15 Class) */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mb-20">
          <div className="lg:w-1/2 flex justify-center lg:justify-end"> {/* Adjusted for card alignment */}
            {/* Pricing Card 2 (10 & 15 Class) */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 w-full max-w-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-700">
                  Compare plans
                </h3>
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                  45% OFF
                </span>
              </div>
              <p className="text-gray-600 mb-5">
                Choose your plan according to you
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 px-2 text-left text-sm font-medium text-gray-500 uppercase"></th>
                      <th className="py-3 px-2 text-center text-sm font-medium text-gray-500 uppercase">
                        10 CLASS
                        <button className="ml-2 mt-2 lg:mt-0 text-xs bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-3 rounded-md transition-colors duration-200">
                          Choose This Plan
                        </button>
                      </th>
                      <th className="py-3 px-2 text-center text-sm font-medium text-gray-500 uppercase">
                        15 CLASS
                        <button className="ml-2 mt-2 lg:mt-0 text-xs bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-3 rounded-md transition-colors duration-200">
                          Choose This Plan
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-2 text-sm text-gray-700 font-medium">
                        Fees
                      </td>
                      <td className="py-3 px-2 text-center text-sm text-gray-600">
                        $ 210
                      </td>
                      <td className="py-3 px-2 text-center text-sm text-gray-600">
                        $ 285
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-2 text-sm text-gray-700 font-medium">
                        Per Hour
                      </td>
                      <td className="py-3 px-2 text-center text-sm text-gray-600">
                        PER HOUR - 21 $
                      </td>
                      <td className="py-3 px-2 text-center text-sm text-gray-600">
                        PER HOUR - 19 $
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 text-sm text-gray-700 font-medium">
                        Savings in Offers
                      </td>
                      <td className="py-3 px-2 text-center text-sm text-gray-600">
                        SAVINGS - $ 40
                      </td>
                      <td className="py-3 px-2 text-center text-sm text-gray-600">
                        SAVINGS - $ 90
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={female12}
              alt="Student 2"
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
        </div>

        {/* Section 3: Image Left, Card Right (20 Class & Precalculus) */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mb-20">
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={female13}
              alt="Student 3"
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-start"> {/* Adjusted for card alignment */}
            {/* Pricing Card 3 (20 Class & Precalculus) */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 w-full max-w-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-700">
                  Compare plans
                </h3>
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                  45% OFF
                </span>
              </div>
              <p className="text-gray-600 mb-5">
                Choose your plan according to you
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 px-2 text-left text-sm font-medium text-gray-500 uppercase"></th>
                      <th className="py-3 px-2 text-center text-sm font-medium text-gray-500 uppercase">
                        20 CLASS
                        <button className="ml-2 mt-2 lg:mt-0 text-xs bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-3 rounded-md transition-colors duration-200">
                          Choose This Plan
                        </button>
                      </th>
                      <th className="py-3 px-2 text-center text-sm font-medium text-gray-500 uppercase">
                        PRECALCULUS
                        <button className="ml-2 mt-2 lg:mt-0 text-xs bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-3 rounded-md transition-colors duration-200">
                          Choose This Plan
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-2 text-sm text-gray-700 font-medium">
                        Fees
                      </td>
                      <td className="py-3 px-2 text-center text-sm text-gray-600">
                        $ 350
                      </td>
                      <td className="py-3 px-2 text-center text-sm text-gray-600">
                        5 CLASSES - $ 150
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-2 text-sm text-gray-700 font-medium">
                        Per Hour
                      </td>
                      <td className="py-3 px-2 text-center text-sm text-gray-600">
                        PER HOUR - 17.5 $
                      </td>
                      <td className="py-3 px-2 text-center text-sm text-gray-600">
                        10 CLASSES - $ 270
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-2 text-sm text-gray-700 font-medium">
                        Saving in Offers
                      </td>
                      <td className="py-3 px-2 text-center text-sm text-gray-600">
                        SAVINGS - $ 150
                      </td>
                      <td className="py-3 px-2 text-center text-sm text-gray-600">
                        15 CLASSES - $ 375
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Global Get Started Button - Centered */}
        <div className="flex justify-center mt-10"> {/* Added margin-top for spacing */}
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
      {/* <Footer /> */}
    </div>
  );
};

export default PricingPage;