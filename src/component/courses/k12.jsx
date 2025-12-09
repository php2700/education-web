// import React from 'react';
// import { BookOpen, MonitorPlay, Users, Zap, CheckCircle, ArrowRight } from 'lucide-react';

// const K12Page = () => {
//   // Brand Colors (Update these to match your Education Graphics Volume theme)
//   const colors = {
//     primary: "#2563EB", // Example Blue
//     secondary: "#1E40AF", // Darker Blue
//     bgLight: "#F3F4F6",
//     textDark: "#1F2937"
//   };

//   return (
//     <div className="min-h-screen bg-white font-sans text-gray-800">

//       {/* --- HERO SECTION --- */}
//       <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
//           <div className="md:w-1/2 mb-10 md:mb-0">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
//               Transforming <span className="text-yellow-400">K-12 Education</span> with Visual Intelligence
//             </h1>
//             <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg">
//               Empower students from Kindergarten to Grade 12 with immersive 3D graphics, animations, and interactive learning modules.
//             </p>
//             <button className="bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition duration-300 shadow-lg flex items-center gap-2">
//               Start Learning <ArrowRight size={20} />
//             </button>
//           </div>
//           <div className="md:w-1/2 flex justify-center">
//             {/* Replace src with your actual 3D education illustration */}
//             <img
//               src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//               alt="K12 Digital Learning"
//               className="rounded-2xl shadow-2xl border-4 border-white/20 max-w-full h-auto"
//             />
//           </div>
//         </div>
//       </section>

//       {/* --- WHY CHOOSE US (Graphics Volume Focus) --- */}
//       <section className="py-20 px-6 bg-white">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-4 text-gray-900">Why GGES for K-12?</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto mb-16">
//             We don't just teach; we visualize concepts. Our K-12 curriculum helps students grasp complex topics through high-quality visual aids.
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//             {/* Feature 1 */}
//             <div className="p-8 rounded-xl bg-blue-50 hover:shadow-xl transition duration-300 border border-blue-100">
//               <div className="w-14 h-14 bg-blue-600 text-white rounded-lg flex items-center justify-center mx-auto mb-6">
//                 <MonitorPlay size={32} />
//               </div>
//               <h3 className="text-xl font-bold mb-3">Immersive Visuals</h3>
//               <p className="text-gray-600">
//                 High-definition 2D/3D animations that explain Science and Math concepts better than textbooks.
//               </p>
//             </div>

//             {/* Feature 2 */}
//             <div className="p-8 rounded-xl bg-blue-50 hover:shadow-xl transition duration-300 border border-blue-100">
//               <div className="w-14 h-14 bg-blue-600 text-white rounded-lg flex items-center justify-center mx-auto mb-6">
//                 <Zap size={32} />
//               </div>
//               <h3 className="text-xl font-bold mb-3">Interactive Learning</h3>
//               <p className="text-gray-600">
//                 Gamified quizzes and active recall sessions that keep students engaged and boost retention.
//               </p>
//             </div>

//             {/* Feature 3 */}
//             <div className="p-8 rounded-xl bg-blue-50 hover:shadow-xl transition duration-300 border border-blue-100">
//               <div className="w-14 h-14 bg-blue-600 text-white rounded-lg flex items-center justify-center mx-auto mb-6">
//                 <BookOpen size={32} />
//               </div>
//               <h3 className="text-xl font-bold mb-3">NEP Aligned</h3>
//               <p className="text-gray-600">
//                 Our curriculum is strictly aligned with the latest National Education Policy standards for K-12.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- CURRICULUM SEGMENTS --- */}
//       <section className="py-20 px-6 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold text-gray-900">Comprehensive K-12 Solutions</h2>
//             <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
//             <div className="order-2 md:order-1">
//               <h3 className="text-2xl font-bold text-blue-800 mb-4">Primary Level (KG - Grade 5)</h3>
//               <p className="text-gray-600 mb-6">
//                 Building strong foundations with storytelling and colorful animations. We focus on numeracy, literacy, and environmental awareness.
//               </p>
//               <ul className="space-y-3">
//                 {['Animated Storybooks', 'Basic Math Visualized', 'Phonics & Pronunciation'].map((item, i) => (
//                   <li key={i} className="flex items-center gap-3 text-gray-700">
//                     <CheckCircle size={18} className="text-green-500" /> {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="order-1 md:order-2 h-64 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
//                {/* Replace with Primary School Image */}
//                <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80" alt="Primary" className="w-full h-full object-cover"/>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
//             <div className="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
//                {/* Replace with Middle School Image */}
//                <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80" alt="Middle School" className="w-full h-full object-cover"/>
//             </div>
//             <div>
//               <h3 className="text-2xl font-bold text-blue-800 mb-4">Middle School (Grade 6 - 8)</h3>
//               <p className="text-gray-600 mb-6">
//                 Transitioning from observation to exploration. Virtual labs and conceptual videos help students understand Science and SST.
//               </p>
//               <ul className="space-y-3">
//                 {['Virtual Science Labs', 'History Time-Travel Graphics', 'Coding Fundamentals'].map((item, i) => (
//                   <li key={i} className="flex items-center gap-3 text-gray-700">
//                     <CheckCircle size={18} className="text-green-500" /> {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//             <div className="order-2 md:order-1">
//               <h3 className="text-2xl font-bold text-blue-800 mb-4">High School (Grade 9 - 12)</h3>
//               <p className="text-gray-600 mb-6">
//                 Exam-focused preparation with deep conceptual clarity. 3D breakdowns of Physics, Chemistry, and Biology topics.
//               </p>
//               <ul className="space-y-3">
//                 {['Complex 3D Modeling (Biology/Chem)', 'Competitive Exam Prep (JEE/NEET)', 'Career Guidance Modules'].map((item, i) => (
//                   <li key={i} className="flex items-center gap-3 text-gray-700">
//                     <CheckCircle size={18} className="text-green-500" /> {item}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="order-1 md:order-2 h-64 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
//                {/* Replace with High School Image */}
//                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80" alt="High School" className="w-full h-full object-cover"/>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- CTA SECTION --- */}
//       <section className="py-20 bg-blue-900 text-white text-center px-6">
//         <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Future of Learning?</h2>
//         <p className="text-blue-200 mb-10 max-w-xl mx-auto">
//           Get access to our complete K-12 graphics library and learning management system today.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <button className="bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition shadow-lg">
//             Request Demo
//           </button>
//           <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition">
//             View Syllabus
//           </button>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default K12Page;

import React from "react";
import {
  BookOpen,
  Calculator,
  Microscope,
  TrendingUp,
  Users,
  Layers,
  CheckCircle,
  ClipboardList,
  Smile,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const K12Page = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* --- HERO SECTION --- */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-3/5">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Our <span className="text-yellow-400">K-12 Services</span>
            </h1>
            <p className="text-lg text-blue-100 mb-6 leading-relaxed">
              GGES offers tutoring for Math, Science, and Language Arts for all
              grades K through 12. We understand the need of every student is
              different and so is our methodology suiting the needs.
            </p>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              We help students in understanding and completing the concepts in
              day-to-day studies as well as homework and assignments.
            </p>
            <button className="bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition duration-300 shadow-lg flex items-center gap-2">
              Book a Session <ArrowRight size={20} />
            </button>
          </div>

          {/* Hero Image / Illustration */}
          <div className="md:w-2/5 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-30 rounded-full"></div>
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Student Tutoring"
                className="relative rounded-2xl shadow-2xl border-4 border-white/20 z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- OUR APPROACH SECTION --- */}
      <section id="methodology" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Methodology
            </h2>
            <p className="text-gray-600 mt-4">
              At GGES we work with the following approach:
            </p>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition border border-blue-100 h-full">
              <div className="w-14 h-14 bg-white text-blue-600 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Users size={28} />
              </div>
              <div className="text-5xl font-bold text-blue-100 absolute -mt-4 ml-16 opacity-50 select-none">
                1
              </div>
              <h3 className="font-bold text-gray-800 mb-2 relative z-10">
                Understanding Needs
              </h3>
              <p className="text-sm text-gray-600 relative z-10">
                Understanding the need of each student.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition border border-blue-100 h-full">
              <div className="w-14 h-14 bg-white text-blue-600 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Layers size={28} />
              </div>
              <div className="text-5xl font-bold text-blue-100 absolute -mt-4 ml-16 opacity-50 select-none">
                2
              </div>
              <h3 className="font-bold text-gray-800 mb-2 relative z-10">
                Build Foundation
              </h3>
              <p className="text-sm text-gray-600 relative z-10">
                Build foundation and conceptual framework.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition border border-blue-100 h-full">
              <div className="w-14 h-14 bg-white text-blue-600 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <ClipboardList size={28} />
              </div>
              <div className="text-5xl font-bold text-blue-100 absolute -mt-4 ml-16 opacity-50 select-none">
                3
              </div>
              <h3 className="font-bold text-gray-800 mb-2 relative z-10">
                Reinforce
              </h3>
              <p className="text-sm text-gray-600 relative z-10">
                Reinforce through practice using best materials & testing.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition border border-blue-100 h-full">
              <div className="w-14 h-14 bg-white text-blue-600 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Smile size={28} />
              </div>
              <div className="text-5xl font-bold text-blue-100 absolute -mt-4 ml-16 opacity-50 select-none">
                4
              </div>
              <h3 className="font-bold text-gray-800 mb-2 relative z-10">
                Build Confidence
              </h3>
              <p className="text-sm text-gray-600 relative z-10">
                Instilling belief in their own abilities.
              </p>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-xl hover:shadow-lg transition border border-blue-100 h-full">
              <div className="w-14 h-14 bg-white text-blue-600 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <TrendingUp size={28} />
              </div>
              <div className="text-5xl font-bold text-blue-100 absolute -mt-4 ml-16 opacity-50 select-none">
                5
              </div>
              <h3 className="font-bold text-gray-800 mb-2 relative z-10">
                Improved Grades
              </h3>
              <p className="text-sm text-gray-600 relative z-10">
                Accomplishing improved academic results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SUBJECTS DETAIL SECTION --- */}
      <section id="expertise" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Subject Expertise
            </h2>
            <p className="text-gray-600 mt-2">
              We are the best when it comes to:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Math Column */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-blue-600 hover:-translate-y-1 transition duration-300">
              <div className="bg-blue-50 p-6 flex items-center gap-4">
                <div className="bg-blue-600 p-3 rounded-lg text-white shadow-lg">
                  <Calculator size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Mathematics
                </h3>
              </div>
              <div className="p-8">
                <ul className="space-y-3">
                  {[
                    "Math Basics",
                    "Algebra I",
                    "Algebra II",
                    "Geometry",
                    "Trigonometry",
                    "Pre Calculus",
                    "Calculus",
                    "Statistics",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <CheckCircle
                        size={18}
                        className="text-blue-500 flex-shrink-0"
                      />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Science Column */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-teal-600 hover:-translate-y-1 transition duration-300">
              <div className="bg-teal-50 p-6 flex items-center gap-4">
                <div className="bg-teal-600 p-3 rounded-lg text-white shadow-lg">
                  <Microscope size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Science</h3>
              </div>
              <div className="p-8">
                <ul className="space-y-3">
                  {[
                    "Earth Science",
                    "Life Science",
                    "Environmental Science",
                    "Physics",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <CheckCircle
                        size={18}
                        className="text-teal-500 flex-shrink-0"
                      />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* English Column */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-indigo-600 hover:-translate-y-1 transition duration-300">
              <div className="bg-indigo-50 p-6 flex items-center gap-4">
                <div className="bg-indigo-600 p-3 rounded-lg text-white shadow-lg">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  English & Arts
                </h3>
              </div>
              <div className="p-8">
                <ul className="space-y-3">
                  {[
                    "Reading Comprehension",
                    "Vocabulary",
                    "Word Recognition",
                    "Spelling",
                    "Grammar",
                    "Punctuation",
                    "Sentence Structure",
                    "Handwriting Improvement",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <CheckCircle
                        size={18}
                        className="text-indigo-500 flex-shrink-0"
                      />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-16 bg-blue-900 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Learning Journey with GGES
        </h2>
        <p className="text-blue-200 mb-8 max-w-xl mx-auto">
          Contact us today to discuss how we can help achieve your academic
          goals.
        </p>
        <button
          onClick={() => {
            navigate("/contact");
          }}
          className="cursor-pointer bg-white text-blue-900 font-bold py-3 px-10 rounded-full hover:bg-gray-100 transition shadow-lg"
        >
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default K12Page;
