import icon1 from "../../assets/icon-container.png";
import icon2 from "../../assets/icon-container-2.png";
import icon3 from "../../assets/icon-container-3.png";
import icon4 from "../../assets/icon-container-4.png";
import icon5 from "../../assets/icon-container-5.png";
import backgroundImage from "../../assets/work-bg.png";
import editImg from "../../assets/editImg.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const WhyChooseUs = () => {
  const [whychooseData, setWhyChooseData] = useState([]);

  const getWhyChooseData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/why-choose`
      );
      setWhyChooseData(res?.data?.data);
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
    getWhyChooseData();
  }, []);

  return (
    <section
      className="bg-[#F0F8FF] py-16 px-6 sm:px-10 lg:px-12 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute top-0 left-40 ">
        <img src={editImg} />
      </div>
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="font-[Poppins] font-semibold text-[48px] leading-[40px] tracking-[0px] text-[#1A202C] text-center">
          Why Choose Us?
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We provide a learning experience that is effective, convenient, and
          tailored to you.
        </p>
      </div>

      {/* Flex layout for perfect centering */}
      <div className="flex flex-wrap justify-center gap-6 container mx-auto">
        {whychooseData?.map((item, index) => (
          <div
            key={index}
            className="
              flex 
              items-start 
              bg-white 
              transition-all 
              p-5 
              w-full 
              sm:w-[45%] 
              lg:w-[30%] 
              max-w-md
            "
          >
            <div className="mr-4 flex-shrink-0">
              <img
                src={`${import.meta.env.VITE_APP_URL}${item.image}`}
                alt={item.title}
                className="w-12 h-12"
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600 ">{item.description}</p>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
