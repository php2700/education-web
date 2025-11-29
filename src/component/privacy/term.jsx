import React from "react";
import { FaCheckCircle, FaShieldAlt, FaHeadset } from "react-icons/fa";

export const TermPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12 px-4 md:px-12 lg:px-24">
      {/* Header */}
      <header className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-extrabold text-blue-600 leading-tight">
          Terms & Services
        </h1>
        <p className="mt-3 text-gray-600 text-base md:text-lg">
          Learn how we work, what we promise, and how we keep your learning journey secure and reliable.
        </p>
      </header>

      <main className="max-w-6xl mx-auto grid gap-10">
        {/* Top Info Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start gap-4">
            <div className="p-3 bg-blue-50 rounded-lg inline-flex">
              <FaCheckCircle className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Services & Specialties</h3>
            <p className="text-gray-600 text-sm">
              Test preps (SAT, ACT, ISEE, etc.), K-12 tutoring, language courses (French, German, Hindi...) and more.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start gap-4">
            <div className="p-3 bg-blue-50 rounded-lg inline-flex">
              <FaShieldAlt className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">Quality & Safety</h3>
            <p className="text-gray-600 text-sm">
              Our tutors are vetted and trained. We follow best practices in pedagogy and student safety.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-start gap-4">
            <div className="p-3 bg-blue-50 rounded-lg inline-flex">
              <FaHeadset className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">24/7 Support</h3>
            <p className="text-gray-600 text-sm">
              Our support team is available around the clock to help with scheduling, billing and technical issues.
            </p>
          </div>
        </section>

        {/* Core Terms Card */}
        <section className="bg-white rounded-3xl shadow-xl p-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Core Terms</h2>

          <div className="space-y-4 text-gray-700">
            <p>
              By using GGES services, you agree to our terms. These terms set out
              the contractual relationship between you and GGES (Global Group of Education Services).
            </p>

            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Service provision:</strong> We provide online and in-person educational services per agreement.</li>
              <li><strong>Payments & refunds:</strong> All fees are charged as per plan. Refunds follow our refund policy (see below).</li>
              <li><strong>Account responsibility:</strong> Keep your account credentials secure. You are responsible for activity under your account.</li>
              <li><strong>Cancellation:</strong> You may cancel according to the cancellation terms on your invoice/plan.</li>
            </ul>
          </div>

          {/* Accordion-like details for more terms */}
          <div className="mt-4 space-y-3">
            <details className="group bg-gray-50 rounded-xl p-4 open:shadow-md">
              <summary className="cursor-pointer font-medium text-gray-900">Refund & Cancellation</summary>
              <div className="mt-3 text-gray-700">
                Refunds are processed based on the plan and usage. For subscription cancellations, partial refunds may apply depending on time used.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-xl p-4 open:shadow-md">
              <summary className="cursor-pointer font-medium text-gray-900">Student Code of Conduct</summary>
              <div className="mt-3 text-gray-700">
                Students are expected to maintain respectful behavior. Disruptive behavior may lead to suspension of services.
              </div>
            </details>

            <details className="group bg-gray-50 rounded-xl p-4 open:shadow-md">
              <summary className="cursor-pointer font-medium text-gray-900">Intellectual Property</summary>
              <div className="mt-3 text-gray-700">
                Course materials and content are the intellectual property of GGES or its licensors. They are for your personal use only.
              </div>
            </details>
          </div>
        </section>

        {/* Vision & Support */}
        <section className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-blue-600">Our Commitment to Quality</h3>
            <p className="text-gray-700 mt-2">
              We combine modern pedagogy, experienced tutors and technology to provide results-oriented learning experiences.
            </p>
            <ul className="mt-4 list-none space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <span className="text-gray-700">Personalized learning plans</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">✓</span>
                <span className="text-gray-700">Trackable progress & reporting</span>
              </li>
            </ul>
          </div>

          <div className="flex-1 text-center md:text-right">
            <p className="text-gray-600">Need help or have questions?</p>
            <a href="/contact" className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition">
              Contact Support
            </a>
          </div>
        </section>

        {/* Footer small legal */}
        <footer className="text-sm text-gray-500 text-center pt-4 pb-8">
          <p>© {new Date().getFullYear()} GGES — All rights reserved.</p>
          <p className="mt-1">By using our service you agree to our <a href="/privacy" className="text-blue-600 underline">Privacy Policy</a>.</p>
        </footer>
      </main>
    </div>
  );
};

export default TermPage;
