export const HelpCenterPage = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 md:px-20">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
          Help Center
        </h1>
        <p className="text-gray-600 mt-3 text-lg">
          We're here to help you find answers, solve issues, and support your
          learning journey.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search for help…"
          className="w-full p-4 rounded-xl border shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* FAQ */}
        <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">
            Frequently Asked Questions
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li>📘 How do I book a class?</li>
            <li>📘 How do I reset my password?</li>
            <li>📘 What payment methods do you accept?</li>
            <li>📘 How to contact customer support?</li>
          </ul>
        </div>

        {/* Account & Billing */}
        <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">
            Account & Billing
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li>💳 Update billing information</li>
            <li>💳 Manage your subscription</li>
            <li>💳 View invoices and transactions</li>
            <li>💳 Cancel or pause your plan</li>
          </ul>
        </div>

        {/* Technical Support */}
        <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">
            Technical Support
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li>⚙️ App not loading or crashing</li>
            <li>⚙️ Audio or video issues</li>
            <li>⚙️ Troubleshooting classroom tools</li>
            <li>⚙️ Device compatibility issues</li>
          </ul>
        </div>
      </div>

      {/* Contact Box */}
      <div className="max-w-4xl mx-auto mt-16 bg-white p-8 rounded-3xl shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-blue-600">
          Still Need Help?
        </h2>
        <p className="text-gray-700 mt-3">
          Our support team is available 24/7 to assist you.
        </p>

        <div className="mt-6 space-y-4">
          <p className="text-gray-700 text-lg">📧 support@gges.com</p>
          <p className="text-gray-700 text-lg">📞 +1 800 123 4567</p>
        </div>

        <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700">
          Contact Support
        </button>
      </div>
    </div>
  );
};
