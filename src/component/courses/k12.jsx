import React from 'react';
import { BookOpen, MonitorPlay, Users, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const K12Page = () => {
  // Brand Colors (Update these to match your Education Graphics Volume theme)
  const colors = {
    primary: "#2563EB", // Example Blue
    secondary: "#1E40AF", // Darker Blue
    bgLight: "#F3F4F6",
    textDark: "#1F2937"
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      
      {/* --- HERO SECTION --- */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Transforming <span className="text-yellow-400">K-12 Education</span> with Visual Intelligence
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg">
              Empower students from Kindergarten to Grade 12 with immersive 3D graphics, animations, and interactive learning modules.
            </p>
            <button className="bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition duration-300 shadow-lg flex items-center gap-2">
              Start Learning <ArrowRight size={20} />
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* Replace src with your actual 3D education illustration */}
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="K12 Digital Learning" 
              className="rounded-2xl shadow-2xl border-4 border-white/20 max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US (Graphics Volume Focus) --- */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Why GGES for K-12?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            We don't just teach; we visualize concepts. Our K-12 curriculum helps students grasp complex topics through high-quality visual aids.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="p-8 rounded-xl bg-blue-50 hover:shadow-xl transition duration-300 border border-blue-100">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-lg flex items-center justify-center mx-auto mb-6">
                <MonitorPlay size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Immersive Visuals</h3>
              <p className="text-gray-600">
                High-definition 2D/3D animations that explain Science and Math concepts better than textbooks.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-xl bg-blue-50 hover:shadow-xl transition duration-300 border border-blue-100">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-lg flex items-center justify-center mx-auto mb-6">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Interactive Learning</h3>
              <p className="text-gray-600">
                Gamified quizzes and active recall sessions that keep students engaged and boost retention.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-xl bg-blue-50 hover:shadow-xl transition duration-300 border border-blue-100">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-lg flex items-center justify-center mx-auto mb-6">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">NEP Aligned</h3>
              <p className="text-gray-600">
                Our curriculum is strictly aligned with the latest National Education Policy standards for K-12.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CURRICULUM SEGMENTS --- */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Comprehensive K-12 Solutions</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Primary Level (KG - Grade 5)</h3>
              <p className="text-gray-600 mb-6">
                Building strong foundations with storytelling and colorful animations. We focus on numeracy, literacy, and environmental awareness.
              </p>
              <ul className="space-y-3">
                {['Animated Storybooks', 'Basic Math Visualized', 'Phonics & Pronunciation'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={18} className="text-green-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2 h-64 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
               {/* Replace with Primary School Image */}
               <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80" alt="Primary" className="w-full h-full object-cover"/>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="h-64 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
               {/* Replace with Middle School Image */}
               <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=600&q=80" alt="Middle School" className="w-full h-full object-cover"/>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Middle School (Grade 6 - 8)</h3>
              <p className="text-gray-600 mb-6">
                Transitioning from observation to exploration. Virtual labs and conceptual videos help students understand Science and SST.
              </p>
              <ul className="space-y-3">
                {['Virtual Science Labs', 'History Time-Travel Graphics', 'Coding Fundamentals'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={18} className="text-green-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">High School (Grade 9 - 12)</h3>
              <p className="text-gray-600 mb-6">
                Exam-focused preparation with deep conceptual clarity. 3D breakdowns of Physics, Chemistry, and Biology topics.
              </p>
              <ul className="space-y-3">
                {['Complex 3D Modeling (Biology/Chem)', 'Competitive Exam Prep (JEE/NEET)', 'Career Guidance Modules'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle size={18} className="text-green-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2 h-64 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
               {/* Replace with High School Image */}
               <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80" alt="High School" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 bg-blue-900 text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Future of Learning?</h2>
        <p className="text-blue-200 mb-10 max-w-xl mx-auto">
          Get access to our complete K-12 graphics library and learning management system today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition shadow-lg">
            Request Demo
          </button>
          <button className="border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition">
            View Syllabus
          </button>
        </div>
      </section>

    </div>
  );
};

export default K12Page;