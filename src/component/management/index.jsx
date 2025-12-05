// export const Management=()=>{
//     return (
//         <div>
//             hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
//         </div>
//     )
// }


// import React from "react";
// import { FaLinkedinIn,  } from "react-icons/fa";

// // Apni images import karein
// import img1 from "../../assets/imgraj.jpg";
// import img2 from "../../assets/imghiteshi.JPG"; 
// import img3 from "../../assets/imgraj.jpg";
// import img4 from "../../assets/imgnikhil.jpg";

// const teamMembers = [
//   {
//     id: 1,
//     name: "Raj Gaurav Sharma",
//     role: "Executive Director",
//     image: img1, // Imported image variable
//     description:
//       "Raj has over seventeen years of rich experience in various reputed organizations. His past stint in organizations like Bharti Airtel Limited, Sony India, HCL Technologies, and Metlife USA adds richness to the management expertise. He founded the organization with a vision 'To add value in the life of our students by imparting value-based education.' He is instrumental in designing marketing strategies and also heads the Customer Support Department.",
//   },
//   {
//     id: 2,
//     name: "Hitaishi Sharma",
//     role: "Director of Operations",
//     image: img2,

//     // image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80", // Demo Image
//     description:
//       "Hitaishi has over seventeen years of experience in Online. She has been instrumental in designing effective pedagogies for various educational courses and programs. Currently, she is serving as Director – Operations and heads the entire operations in the company. To be in sync with the latest developments, she personally takes sessions of students specifically in Mathematics.",
//   },
//   {
//     id: 3,
//     name: "Saurabh S",
//     role: "Head, Training and Development",
//     image: img3,
//     // image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80", // Demo Image
//     description:
//       "Saurabh comes from a diversified background and holds valuable experience in Training and Development. He has immense experience which comes from his past stint in companies like HCL Technologies, Infosys, Dell Computers, and Amazon. He provides us the best of Training and Customer service practices.",
//   },
//   {
//     id: 4,
//     name: "Dr. Nikhil Joshi",
//     role: "Head of GGES Advisory Committee",
//     image: img4,
//     // image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80", // Demo Image
//     description:
//       "Dr. Nikhil Joshi is one of the most eminent personalities when it comes to education. His contribution towards academics has helped many institutions like National University of Singapore. He has been a recipient of prestigious awards like Research Fellowship by South Asian Association for Regional Cooperation (SAARC).",
//   },
// ];

//  export const Management = () => {
//   return (
//     <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
//       {/* Header */}
//       <div className="max-w-7xl mx-auto text-center mb-20">
//         <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm">
//           Our Leadership
//         </h2>
//         <h1 className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
//           Meet the Management Team
//         </h1>
//         <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
//           Visionaries guiding our path to excellence.
//         </p>
//       </div>

//       {/* Grid */}
//       <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 lg:gap-16">
//         {teamMembers.map((member) => (
//           <div
//             key={member.id}
//             className="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-8 pt-24 hover:shadow-2xl transition-shadow duration-300 text-center group"
//           >
//             {/* --- IMAGE SECTION (Avatar Style) --- */}
//             <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 md:w-40 md:h-40">
//               <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md bg-gray-200">
//                 <img
//                   className="w-full h-full object-cover" 
//                   src={member.image}
//                   alt={member.name}
//                   // object-top helps keep heads visible if image is tall
//                   style={{ objectPosition: "top center" }} 
//                 />
//               </div>
              
//               {/* Optional: Social Icons below image */}
//               <div className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 text-white shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <FaLinkedinIn size={14} />
//               </div>
//             </div>

//             {/* --- TEXT CONTENT --- */}
//             <div className="mt-4">
//               <h3 className="text-2xl font-bold text-gray-900">
//                 {member.name}
//               </h3>
//               <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4">
//                 {member.role}
//               </p>
              
//               <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify">
//                 {member.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };



import React, { useEffect, useState ,useRef } from "react";
import axios from "axios";
import { FaLinkedinIn } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export const Management = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
   const headingRef = useRef(null); // Reference create kiya
  const { pathname } = useLocation(); // URL track karne ke liye

  // Backend URL (.env se)
  const API_URL = import.meta.env.VITE_APP_URL || "http://localhost:3007/";

  // API Call to fetch data
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await axios.get(`${API_URL}api/user/management`);
        if (res.data.success) {
          setMembers(res.data.data);
        }
      } catch (err) {
        console.error("Failed to fetch management team", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, [API_URL]);
  

   useEffect(() => {
    // Agar loading chal raha hai to ruk jao, kyunki tab tak Ref wala element screen par nahi hai
    if (loading) return;

    // Thoda delay dete hain taaki DOM update ho jaye
    const timer = setTimeout(() => {
      if (headingRef.current) {
        headingRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo(0, 0);
      }
    }, 100);

    return () => clearTimeout(timer); // Cleanup
  }, [pathname, loading]);

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen flex justify-center items-center">
        <p className="text-xl text-gray-500">Loading Team...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm">
          Our Leadership
        </h2>
        <h1  ref={headingRef} className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Meet the Management Team
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Visionaries guiding our path to excellence.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 lg:gap-16">
        {members.map((member) => (
          <div
            key={member._id}
            className="relative bg-white rounded-2xl shadow-lg border border-gray-100 p-8 pt-24 hover:shadow-2xl transition-shadow duration-300 text-center group"
          >
            {/* --- IMAGE SECTION (Avatar Style) --- */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 md:w-40 md:h-40">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md bg-gray-200">
                <img
                  className="w-full h-full object-cover"
                  // Logic: Agar image hai toh URL combine karein, nahi toh placeholder
                  src={member.image ? `${API_URL}${member.image}` : "https://via.placeholder.com/150"}
                  alt={member.name}
                  style={{ objectPosition: "top center" }}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/150"; // Fallback agar image na mile
                  }}
                />
              </div>

              {/* Optional: Social Icons below image */}
              <div className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 text-white shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                <FaLinkedinIn size={14} />
              </div>
            </div>

            {/* --- TEXT CONTENT --- */}
            <div className="mt-4">
              <h3 className="text-2xl font-bold text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4">
                {member.role}
              </p>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base text-justify whitespace-pre-line break-words">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};