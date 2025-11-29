// @ts-nocheck
import React from "react";

export const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-3xl shadow-xl">
        <header className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600">Privacy Policy</h1>
          <p className="text-gray-600 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <section className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            GGES ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>

          <h3 className="text-xl font-semibold text-gray-800">1. Information We Collect</h3>
          <ul className="list-disc ml-6">
            <li><strong>Personal Information:</strong> name, email, phone number, billing details when you register or purchase services.</li>
            <li><strong>Usage Data:</strong> pages you visit, session times, IP address and device information.</li>
            <li><strong>Educational Data:</strong> progress reports, assessments, tutor feedback (when applicable).</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800">2. How We Use Your Information</h3>
          <p>We use collected information to:</p>
          <ul className="list-disc ml-6">
            <li>Provide and personalize our services.</li>
            <li>Process payments and send invoices.</li>
            <li>Communicate updates, support requests, and promotional offers (where permitted).</li>
            <li>Improve our platform and perform analytics.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800">3. Sharing & Disclosure</h3>
          <p>We may share data with:</p>
          <ul className="list-disc ml-6">
            <li>Service providers (payment processors, analytics services) under contract with confidentiality obligations.</li>
            <li>Legal authorities when required by law or to protect our rights.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800">4. Cookies & Tracking</h3>
          <p>We use cookies and similar technologies to provide, secure, and analyze our services. You can control cookies via your browser settings.</p>

          <h3 className="text-xl font-semibold text-gray-800">5. Security</h3>
          <p>We implement industry-standard safeguards (encryption, access controls) to protect your data. However, no system is 100% secure and absolute security cannot be guaranteed.</p>

          <h3 className="text-xl font-semibold text-gray-800">6. Data Retention</h3>
          <p>We retain personal data only for as long as necessary to provide services and fulfill legal obligations.</p>

          <h3 className="text-xl font-semibold text-gray-800">7. Your Rights</h3>
          <p>You have rights including accessing, correcting, or deleting your personal data. Contact us at <a href="mailto:support@gges.com" className="text-blue-600 underline">support@gges.com</a>.</p>

          <h3 className="text-xl font-semibold text-gray-800">8. Children</h3>
          <p>Our services are not intended for children under 13. We do not knowingly collect information from children without parental consent.</p>

          <h3 className="text-xl font-semibold text-gray-800">9. Changes</h3>
          <p>We may update this policy from time to time. We will notify users of important changes via email or site announcements.</p>

          <h3 className="text-xl font-semibold text-gray-800">10. Contact</h3>
          <p>If you have questions about this policy, contact us at <a href="mailto:support@gges.com" className="text-blue-600 underline">support@gges.com</a>.</p>
        </section>

        <footer className="text-sm text-gray-500 mt-8">
          <p>© {new Date().getFullYear()} GGES. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
