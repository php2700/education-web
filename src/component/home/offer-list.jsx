import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const OfferList = () => {
  const navigate = useNavigate();
  const [offerData, setOfferData] = useState([]);

  const getOfferData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/offers`
      );
      setOfferData(res?.data?.data);
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
    getOfferData();
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  const handleLearnMore = (id) => {
    navigate(`/offer-detail/:${id}`);
  };

  return (
    <div className="bg-[#F0F8FF] text-gray-900">
      {/* Offers Section */}
      <section className="py-16 px-4">
        <div className="container max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Offers & News</h2>
          <p className="text-gray-600 mb-10">
            Stay updated with our latest promotions, new courses, and exciting
            announcements
          </p>
          <div
            onClick={handleBack}
            className="text-left text-blue-500 font-semibold mb-2 text-lg cursor-pointer"
          >
            {" "}
            Back{" "}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {offerData?.map((offer, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-left"
              >
                <div className="flex justify-between items-center mb-3 text-sm">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
                    {offer.type}
                  </span>
                  <span className="text-gray-500">
                    {offer.expireDate
                      ? new Date(offer.expireDate).toLocaleDateString("en-GB")
                      : ""}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{offer.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {offer.description}
                </p>
                <button
                  onClick={() => {
                    handleLearnMore(offer._id);
                  }}
                  className=" font-medium bg-[#F0F8FF]  text-sm   w-full p-2 rounded-lg"
                >
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
