import React, { useEffect, useState } from "react";
import {
  BookOpen,
  Users,
  FileText,
  CheckCircle,
  Target,
  Lightbulb,
  PenTool,
} from "lucide-react";
import backgroundImage from "../../../assets/about-bg.png";
import axios from "axios";
import { toast } from "react-toastify";

export const AboutInfoPage = () => {
  const [current, setCurrent] = useState(0);
  const [aboutData, setAboutData] = useState([]);

  const getAboutData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/about-ela`
      );
      setAboutData(res?.data?.data);
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
    getAboutData();
  }, []);

  useEffect(() => {
    if (!aboutData?.questionType || aboutData.questionType.length === 0) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % aboutData.questionType.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [aboutData]);

  return (
    <div
      className="bg-[#F0F8FF] py-16 px-6 sm:px-10 lg:px-12 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-3xl font-extrabold text-center  flex items-center justify-center gap-3">
          ALL YOU NEED TO KNOW ABOUT ELA
        </h1>
      </div>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-sm text-gray-800 leading-relaxed ">
          {aboutData?.description}
        </p>

        <div className="text-start">
          <h2 className="text-3xl font-bold text-gray-900">
            {aboutData?.heading}
          </h2>
        </div>

        {/* Who Takes This Test? */}
        <section className=" py-4 ">
          <h3 className="text-2xl font-bold mb-6  text-center ">
            Who takes this test?
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-2">
            Students in grades 3–10 take the State English Language Arts (ELA)
            test each spring. These assessments measure the Common Core Learning
            Standards (CCLS).
          </p>
          <p className="text-gray-500 font-semibold leading-relaxed">
            {aboutData.whoTake}
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-bold  mb-4 text-center gap-2">
            What is on the test?
          </h3>
          <h4 className="text-xl font-semibold  mb-4 flex items-center gap-2">
            Core components and formats
          </h4>
          <div className="bg-[#F0F8FF] rounded-2xl  p-8 md:p-12 relative ">
            <div className="relative z-10 max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
                {aboutData?.questionType?.[current]?.title}
              </h3>

              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                    {aboutData?.questionType?.[current]?.description}
                  </p>
                </div>
              </div>

              <div className="mt-10 flex justify-center">
                <div className="flex items-center gap-3">
                  {aboutData?.questionType?.map((_, index) => (
                    <div
                      key={index}
                      onClick={() => setCurrent(index)}
                      className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${
                        current === index ? "bg-blue-600 w-8" : "bg-blue-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="text-center font-bold my-2">
            So why wait? To avail a Free Trial Class for Science Online Tutoring
          </div> */}
        </section>
      </main>
    </div>
  );
};
