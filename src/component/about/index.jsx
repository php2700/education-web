import React from "react";
import backgroundImage from "../../assets/price-bg.png";
import aboutImg from "../../assets/about.jpg";

// Sample images (remove if not needed)
import team1 from "../../assets/michel.png";
import team2 from "../../assets/michel.png";
import team3 from "../../assets/michel.png";

export const About = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div
        className="relative bg-[#F0F8FF] py-20 px-6 sm:px-12 lg:px-20"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="text-3xl md:text-4xl font-bold  text-center mb-16">
          About Us
        </p>
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src={aboutImg}
              alt="Tutoring"
              className="rounded-3xl shadow-2xl w-full max-w-xl hover:scale-[1.07] transition-all duration-700"
            />
          </div>

          {/* ABOUT CONTENT */}
          <div className="space-y-6">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-[#0E1D3E] leading-tight">
              Personalized Online <br />
              <span className="text-[#0572E6]">Tutoring Anytime, Anywhere</span>
            </h1>

            <p className="text-gray-700 text-lg leading-relaxed">
              We are a global education company with mission of providing best
              educational services specializing in Test Preps and K-12 tutoring
              across the globe. We particularly specialize in SCAT, SAT, PSAT,
              SSAT, SHSAT, ACT, ISEE, ELA, Math Kangaroo, IELTS and TOEFL to
              name a few. At the same time we also specialize in various K-12
              subjects like Mathematics, English and Science. We also impart
              Language Learning courses like French, German, Spanish, Hindi and
              Punjabi with best of teaching practices.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              We are a student centric Education Company. We totally understand
              that every student is different from another so is our approach
              towards our teaching methodology. The strength of our company lies
              in rich experience of our tutors who are well versed with the
              curriculum, pedagogy and knowledge which helps the student in
              bringing out the best in oneself.  
            </p>

           
          </div>
          
        </div>
        <div className="relative max-w-7xl mx-auto  mt-10 items-center">
           <p className="text-gray-700 text-lg leading-relaxed">
              At GGES we strongly believe in imparting the best education. GGES
              blends education best practices, innovative technology, and
              insightful creativity to bring learning to life for children
              across the U.S. and around the world.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              We have furnished our office with high end technology and
              infrastructure to ensure best in class services and education
              practices. Also we are committed in assisting our clients 24x7
              thus we have fully active customer care team to handle all your
              queries and provide you with satisfactory resolutions.
            </p>
        </div>
      </div>

      {/* WHY US SECTION */}
      <section className="py-10 bg-white px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Us?
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            Today we have many companies in online education. We don’t say we
            are the best but yes we are among the best and different for sure.
            Unlike other companies we don’t believe in conventional learning
            procedures. We provide innovative learning techniques to enable our
            students to not only learn but to ‘Educate’.
          </p>

          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
             We realize that today’s online teachers need a method to
            communicate to students in an effective and pedagogically sound
            manner, one-on-one or one-to-many. Studies show that the ideal
            solution is a blended learning model with asynchronous and
            synchronous interaction. So we have designed ourselves in a way that
            we create engaging learning environments. Thus we bring in remote
            experts to the classroom or send students on a virtual field trip
            which enhances their learning experience.
          </p>
        </div>
      </section>

      {/* HOW ARE WE DIFFERENT */}
      <section className="py-24 bg-[#F8FBFF] px-6 sm:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How Are We Diffrent?
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-gray-700 text-lg leading-relaxed">
            <div className="space-y-6">
              <div className="p-6 bg-white shadow-lg rounded-xl">
                • We record every class and send you if you want. This helps
                student in revising things done.
              </div>

              <div className="p-6 bg-white shadow-lg rounded-xl">
                • We don’t rely only on conventional pedagogy. For example we
                use various mediums to educate our students like videos, flash
                cards, real time tests to name a few.
              </div>

              <div className="p-6 bg-white shadow-lg rounded-xl">
                • We regularly provide test and practice materials which has
                been developed by our industry experts exactly on test format.
                We keep updating our study material with the time so that our
                students are kept updated.
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-white shadow-lg rounded-xl">
                • We make sure that our students are well versed with test
                format, content and test environment. So we keep giving our
                students Real Time tests which makes them aware of their
                strengths and weaknesses.
              </div>

              <div className="p-6 bg-white shadow-lg rounded-xl">
                • Our Real Time evaluation helps us as well as our students to
                effectively design our approach for test preparations. Knowing
                the dark areas we can easily rectify the problem areas of
                student thus giving him an opportunity to face test with much
                confidence and no lags
              </div>
            </div>
          </div>

          {/* SAFETY SECTION */}
          <div className="mt-20">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Safety
            </h3>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="p-6 bg-white shadow-lg rounded-xl text-gray-700 text-lg leading-relaxed">
                When we talk about online environment it becomes very important
                to ensure safety. Thus we leave no stone unturned to ensure safe
                environment for our students and their guardians. In online
                payments we use safest payment gateways like Paypal and Western
                Union.
              </div>

              <div className="p-6 bg-white shadow-lg rounded-xl text-gray-700 text-lg leading-relaxed">
                For our students we ensure safety at its best. That is the
                reason we do a strict background check of all our employees.
                Also we keep a strict vigil on all the classes to ensure double
                safe environment which meets our safety norms.
              </div>
            </div>
          </div>

          {/* TUTORS SECTION */}
          <div className="mt-20">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Tutors
            </h3>

            <div className="bg-white p-6 shadow-lg rounded-xl text-gray-700 text-lg leading-relaxed">
              Our Tutors makes us special as well. We have well qualified tutors
              with lots of experience in their hands and are well versed with
              the formats and curriculums be it test preps or K-12 tutoring. Our
              effective selection procedure filters the best for our students.
              Our tutors work in accordance with the student’s requirement in
              terms of curriculum of school, teaching methods, grey areas etc.
              Our tutors are flexible enough to adjust to the needs of the time
              while not loosing the quality of education.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

{
  /* <div className="relative max-w-7xl mx-auto mt-20 py-10 px-6 bg-white rounded-3xl shadow-lg border border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-10">
          <div>
            <p className="text-sm text-gray-500 mb-1">Years Experience</p>
            <h2 className="text-3xl font-bold text-[#0E1D3E]">10+ Years</h2>
          </div>

          <div className="border-l border-gray-300 pl-6 md:pl-4">
            <p className="text-sm text-gray-500 mb-1">Expert Tutors</p>
            <h2 className="text-3xl font-bold text-[#0E1D3E]">250+</h2>
          </div>

          <div className="border-l border-gray-300 pl-6 md:pl-4">
            <p className="text-sm text-gray-500 mb-1">Awards & Achievements</p>
            <h2 className="text-3xl font-bold text-[#0E1D3E]">50+</h2>
          </div>

          <div className="border-l border-gray-300 pl-6 md:pl-4">
            <p className="text-sm text-gray-500 mb-1">Happy Students</p>
            <h2 className="text-3xl font-bold text-[#0E1D3E]">10,000+</h2>
          </div>
        </div>
      </div> */
}
