import { useEffect, useState } from "react";
import trust1 from "../../assets/trust-1.png";
import trust2 from "../../assets/trust-2.png";
import trust3 from "../../assets/trust-3.png";
import trust4 from "../../assets/trust-4.png";
import backgroundImage from "../../assets/work-bg.png";
import { toast } from "react-toastify";
import axios from "axios";

export const Trust = () => {
  const [trustData, setTrustData] = useState([]);

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

  const getTrustData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/trust`
      );
      setTrustData(res?.data?.data);
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
    getTrustData();
  }, []);
  return (
    <section
      className="py-16 bg-[#F0F8FF] px-4 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl container mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Trust & Credibility
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          Join Our Growing Community of Successful Learners
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustData.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-blue-600 mb-2  border border-gray-200 rounded-xl shadow-xl">
                <img
                  src={`${import.meta.env.VITE_APP_URL}${stat.image}`}
                  className="p-2"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.title}</h3>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
