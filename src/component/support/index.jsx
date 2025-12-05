import React from "react";

export const ContactSupport = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-2xl">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        Contact & Support
      </h1>

      <p className="mb-4 text-gray-700">
        If you need any assistance regarding our website, services, or your
        account, please feel free to reach out to us using the information
        provided below.
      </p>

      <p className="mb-4 text-gray-700">
        At <strong>GGES</strong>, we are committed to offering timely support
        and ensuring a smooth experience for our users. Whether your concern
        relates to account access, payment queries, technical issues, or
        general questions about our services, our support team is here to help
        you.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        How we can help you
      </h2>
      <ul className="list-disc pl-6 text-gray-700 mb-6">
        <li>Account creation or login issues</li>
        <li>Password reset requests</li>
        <li>Payment or billing queries</li>
        <li>Technical problems using the website</li>
        <li>Clarifications about our Terms of Use</li>
        <li>General inquiries about our services</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Your responsibility
      </h2>
      <p className="mb-6 text-gray-700">
        While using the GGES website and services, you agree to provide
        accurate information so we can assist you effectively. Please do not
        share sensitive account details (such as your password) when contacting
        support.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Contact Information
      </h2>

      <div className="text-gray-700 space-y-2">
        <p>
          <strong>Email:</strong> support@gges.com
        </p>
        <p>
          <strong>Website:</strong> www.mygges.com
        </p>
        <p>
          <strong>Support Hours:</strong> Monday – Saturday, 10:00 AM – 6:00 PM
        </p>
      </div>

      <p className="mt-6 text-gray-700">
        We aim to respond to all inquiries within{" "}
        <strong>24–48 working hours</strong>.
      </p>

      <p className="mt-2 text-gray-700">
        Thank you for choosing <strong>GGES.</strong>
      </p>
    </div>
  );
};
