// import React, { useEffect, useState } from "react";
// import {
//   ArrowRight,
//   BookOpen,
//   Beaker,
//   Brain,
//   Users,
//   Lightbulb,
//   ChevronRight,
//   Star,
//   ArrowLeft,
// } from "lucide-react";
// import tutorImg from "../../../assets/tutor-bg.png";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";


// export const TopicPage = () => {
//   const navigate=useNavigate();
//   const [commonScienceData, setCommonScienceData] = useState();
//   const [commonDetail, setCommonDetail] = useState([]);

//   const getCommonScienceData = async () => {
//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_APP_URL}api/user/about-science`
//       );
//       setCommonScienceData(res?.data?.data);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           error?.message ||
//           "something went wrong",
//         { position: "top-right" }
//       );
//     }
//   };

//   const getCommonDetail = async () => {
//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_APP_URL}api/user/science-detail`
//       );
//       setCommonDetail(res?.data?.data);
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           error?.message ||
//           "something went wrong",
//         { position: "top-right" }
//       );
//     }
//   };

//   useEffect(() => {
//     getCommonScienceData();
//     getCommonDetail();
//   }, []);

//    const handleContact=()=>{
//     navigate('/contact')
//   }

//   return (
//     <>
//       <div className="bg-[#F0F8FF] py-6 px-4 sm:px-6 lg:px-8">
//         <div className="container mx-auto mx-auto">
//           <div className="text-4xl font-semibold text-center my-4">
//             ABOUT COMMON CORE – SCIENCE
//           </div>
//           <p className="my-2 ">{commonScienceData?.description}</p>
//           <div className="text-center font-bold my-2">
//             So why wait? To avail a Free Trial Class for Science Online Tutoring
//           </div>
//           <div className="text-center my-4">
//             <button onClick={handleContact} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 ">
//               Start Free Trial
//             </button>
//           </div>
//         </div>
//       </div>
//       <div
//         className="relative bg-[#F0F8FF] py-4 px-4 sm:px-6 lg:px-8"
//         style={{
//           backgroundImage: `url(${tutorImg})`,
//           backgroundSize: "contain",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
//           <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
//             <h1 className="text-3xl sm:text-4xl font-semibold text-center">
//               HOW WE TUTOR?
//             </h1>
//           </div>

//           <main className="px-4 py-4 sm:px-6 lg:px-8 space-y-16">
//             <p className="text-lg text-gray-700 leading-relaxed">
//               {commonScienceData?.tutorDescription}
//             </p>

//             {/* {commonDetail?.map((ele, index) => (
//               <section
//                 className={`grid grid-cols-1 lg:grid-cols-2  gap-10 items-center`}
//               >
              
//                 <div className="bg-[#AEE5FF] rounded-2xl p-8 shadow-lg border border-blue-200">
//                   <div className="flex items-center mb-4">
//                     <h2 className="text-2xl font-bold ">{ele.title}</h2>
//                   </div>
//                   <p className="text-gray-700 leading-relaxed">
//                     {ele.description}
//                   </p>

//                   <div className="mt-6 flex items-center text-blue-600 font-medium">
//                     <ArrowLeft className="h-5 w-5 mr-2" />
//                     <ArrowRight className="h-5 w-5 mr-2" />
//                   </div>
//                 </div>

//                 <div className="space-y-6">
//                   <h2 className="text-2xl text-center font-semibold mb-4">
//                     {ele.heading}
//                   </h2>
//                   <hr />
//                   <div className="flex justify-center">
//                     <img
//                       src={`${import.meta.env.VITE_APP_URL}${ele.image}`}
//                       className="cover"
//                     />
//                   </div>
//                 </div>
//               </section>
//             ))} */}

//             {commonDetail?.map((ele, index) => (
//               <section
//                 key={index}
//                 className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
//               >
//                 <div
//                   className={`bg-[#AEE5FF] rounded-2xl p-8 shadow-lg border border-blue-200 
//         ${index % 2 !== 0 ? "lg:order-2" : "lg:order-1"}`}
//                 >
//                   <div className="flex items-center mb-4">
//                     <h2 className="text-2xl font-bold">{ele.title}</h2>
//                   </div>

//                   <p className="text-gray-700 leading-relaxed">
//                     {ele.description}
//                   </p>
//                   {/* <div className="mt-6 flex items-center text-blue-600 font-medium">
//                     <ArrowLeft className="h-5 w-5 mr-2" />
//                     <ArrowRight className="h-5 w-5 mr-2" />
//                   </div> */}
//                 </div>

//                 <div
//                   className={`space-y-6 ${
//                     index % 2 !== 0 ? "lg:order-1" : "lg:order-2"
//                   }`}
//                 >
//                   <h2 className="text-2xl text-center font-semibold mb-4">
//                     {ele.heading}
//                   </h2>

//                   <hr />

//                   <div className="flex justify-center">
//                     <img
//                       src={`${import.meta.env.VITE_APP_URL}${ele.image}`}
//                       className="object-contain max-h-[350px]"
//                     />
//                   </div>
//                 </div>
//               </section>
//             ))}

//             <section className=" mx-auto  p-4">
//               <p className="text-lg font-semibold text-gray-700 leading-relaxed">
//                 Experience has shown time and time again that students who spend
//                 time in our tutoring centers see an overall increase in their
//                 science grades. This is because of our customized approach to
//                 science tutoring, which recognizes that no two students are
//                 exactly the same in terms of their needs and goals. Contact us
//                 today to discuss your child’s needs and expectations for science
//                 tutoring. Set them on the path to success with a science tutor
//                 from GoES.
//               </p>
//               <div className="text-center font-bold my-4">
//                 So why wait? To avail a Free Trial Class for Science Online
//                 Tutoring
//               </div>
//               <div className="text-center my-4">
//                 <button onClick={handleContact} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 ">
//                   Start Free Trial
//                 </button>
//               </div>
//             </section>
//           </main>
//         </div>
//       </div>
//     </>
//   );
// };

import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Beaker,
  Brain,
  Users,
  Lightbulb,
  ChevronRight,
  Star,
  ArrowLeft,
} from "lucide-react";
import tutorImg from "../../../assets/tutor-bg.png";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// --- UPDATED COMPONENT START ---
const DescriptionItem = ({ text, wordLimit = 40 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  // Default state check (768px standard mobile breakpoint hai)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!text) return null;

  // Case 1: Agar Desktop hai (!isMobile), to hamesha FULL text dikhayein
  if (!isMobile) {
    return <p className="text-gray-700 leading-relaxed">{text}</p>;
  }

  // Case 2: Agar Mobile hai, tabhi See More logic lagayein
  const words = text.split(" ");

  if (words.length <= wordLimit) {
    return <p className="text-gray-700 leading-relaxed">{text}</p>;
  }

  return (
    <div className="text-gray-700 leading-relaxed">
      <p className="inline">
        {isExpanded ? text : words.slice(0, wordLimit).join(" ") + "..."}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-blue-600 font-bold ml-2 hover:underline text-sm focus:outline-none"
      >
        {isExpanded ? "See Less" : "See More"}
      </button>
    </div>
  );
};
// --- UPDATED COMPONENT END ---

export const TopicPage = () => {
  const navigate = useNavigate();
  const [commonScienceData, setCommonScienceData] = useState();
  const [commonDetail, setCommonDetail] = useState([]);

  const getCommonScienceData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/about-science`
      );
      setCommonScienceData(res?.data?.data);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error?.message ||
          "something went wrong",
        { position: "top-right" }
      );
    }
  };

  const getCommonDetail = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/science-detail`
      );
      setCommonDetail(res?.data?.data);
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
    getCommonScienceData();
    getCommonDetail();
  }, []);

  const handleContact = () => {
    navigate('/contact');
  }

  return (
    <>
      <div className="bg-[#F0F8FF] py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto mx-auto">
          <div className="text-4xl font-semibold text-center my-4">
            ABOUT COMMON CORE – SCIENCE
          </div>
          <p className="my-2 ">{commonScienceData?.description}</p>
          <div className="text-center font-bold my-2">
            So why wait? To avail a Free Trial Class for Science Online Tutoring
          </div>
          <div className="text-center my-4">
            <button onClick={handleContact} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 ">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
      <div
        className="relative bg-[#F0F8FF] py-4 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url(${tutorImg})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-semibold text-center">
              HOW WE TUTOR?
            </h1>
          </div>

          <main className="px-4 py-4 sm:px-6 lg:px-8 space-y-16">
            <p className="text-lg text-gray-700 leading-relaxed">
              {commonScienceData?.tutorDescription}
            </p>

            {commonDetail?.map((ele, index) => (
              <section
                key={index}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              >
                <div
                  className={`bg-[#AEE5FF] rounded-2xl p-8 shadow-lg border border-blue-200 
                  ${index % 2 !== 0 ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="flex items-center mb-4">
                    <h2 className="text-2xl font-bold">{ele.title}</h2>
                  </div>

                  {/* Ye component screen size detect karega */}
                  <DescriptionItem text={ele.description} wordLimit={40} />

                </div>

                <div
                  className={`space-y-6 ${
                    index % 2 !== 0 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <h2 className="text-2xl text-center font-semibold mb-4">
                    {ele.heading}
                  </h2>

                  <hr />

                  <div className="flex justify-center">
                    <img
                      src={`${import.meta.env.VITE_APP_URL}${ele.image}`}
                      className="object-contain max-h-[350px]"
                      alt={ele.title}
                    />
                  </div>
                </div>
              </section>
            ))}

            <section className=" mx-auto  p-4">
              <p className="text-lg font-semibold text-gray-700 leading-relaxed">
                Experience has shown time and time again that students who spend
                time in our tutoring centers see an overall increase in their
                science grades. This is because of our customized approach to
                science tutoring, which recognizes that no two students are
                exactly the same in terms of their needs and goals. Contact us
                today to discuss your child’s needs and expectations for science
                tutoring. Set them on the path to success with a science tutor
                from GoES.
              </p>
              <div className="text-center font-bold my-4">
                So why wait? To avail a Free Trial Class for Science Online
                Tutoring
              </div>
              <div className="text-center my-4">
                <button onClick={handleContact} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 ">
                  Start Free Trial
                </button>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};