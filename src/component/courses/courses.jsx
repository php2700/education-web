import React from "react";
// import HeaderBanner from "../common/header";
// import Footer from "../common/footer";

const Courses = () => {
  return (
    <>
      {/* <HeaderBanner /> */}
      {/* Existing first section */}
      <section className="relative bg-white py-16 px-4 sm:px-6 lg:px-8" style={{backgroundImage: "url('/path/to/your/background-image.png')", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-8">
            At GGES we offer online one to one tutoring for the following K-12 Math courses and Math test preps:
          </h1>
          <div className="max-w-4xl mx-auto space-y-8 text-lg text-gray-700">
            <p>
              GGES Math tutoring works on math standards focus on learning math skills and concepts in the context of solving real-world problems. At each grade, students are expected to not only develop an understanding of content standards and we fulfill these expectations with help of expert tutors.
            </p>
            <p>
              Common Core mathematics asks students to justify why a particular mathematical statement is true or where a mathematical rule comes from. Mathematical understanding and procedural skills, At GGES, we build personalized learning plans for students that are tailored to their personality, learning style, and academic needs. Our talented tutors are fully versed in the common core curriculum, and we are happy that educational instruction is evolving to address individual student needs and learning styles.
            </p>
            <p>
              So be it common core or any other Math curriculum, all our tutors are fully experienced to impart the best tutoring for all types of curriculum. Be it Geometry, Algebra I, Algebra II or junior math topics, we are ready to teach all.
            </p>
          </div>
          <div className="mt-12">
            <p className="text-xl font-semibold text-gray-800 mb-4">
              Click here to schedule a Free Trial Class for any subject
            </p>
            <button className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out">
              Start Free Trial <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        {/* Icons (Lightbulb and Rocket) - ensure these are positioned correctly relative to the main content */}
        <div className="absolute bottom-4 left-4">
          <svg className="h-10 w-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 002 0V3z"></path>
            <path fillRule="evenodd" d="M10 12a5 5 0 100-10 5 5 0 000 10zm-6.685-1.928A4.957 4.957 0 0110 5a4.957 4.957 0 016.685 5.072 2.5 2.5 0 01-2.062 4.673H13.5a1.5 1.5 0 00-1.5 1.5v2a1 1 0 11-2 0v-2a1.5 1.5 0 00-1.5-1.5H5.377a2.5 2.5 0 01-2.062-4.673zM10 13a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
          </svg>
        </div>
        <div className="absolute bottom-4 right-4">
          <svg className="h-10 w-10 text-indigo-500 transform rotate-45" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </div>
      </section>
      {/* End of existing first section */}

      {/* Section: K-12 Tutoring - Algebra 1 and Algebra 2 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            K-12 TUTORING – ALGEBRA 1 AND ALGEBRA 2
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At GGES, our expert Math tutors are the best when it comes to Algebra 1 and Algebra 2. We understand these courses work as a foundation for a student’s career. So we don’t leave any stone unturned in online tutoring of Algebra 1 and Algebra 2. Why not avail a Free Trial Class, and evaluate. To schedule a Free Trial Class
          </p>
          <div className="mt-8">
            <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Get Started <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Algebra 1 Card */}
        <div className="relative bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg shadow-xl p-8 mb-12 overflow-hidden">
          {/* Top-left icon */}
          <div className="absolute top-4 left-4 text-blue-300">
            {/* You can replace this with a more suitable icon if available */}
            <svg className="h-12 w-12 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.293 6.707a1 1 0 011.414-1.414L10 8.586l3.293-3.293a1 1 0 011.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707z"></path>
            </svg>
          </div>
          {/* Top-right icon */}
          <div className="absolute top-4 right-4 text-indigo-300">
            {/* You can replace this with a more suitable icon if available */}
            <svg className="h-12 w-12 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V14a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"></path>
            </svg>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            <div className="lg:w-1/2 text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">ALGEBRA 1</h3>
              <p className="text-gray-700 mb-4">
                Algebra 1 is the second math course in high school and will guide you through among other things exponents, operations of polynomials, factoring, quadratic functions and equations, exponents, polynomials, radical and rational expressions. It has the following topics which we cover:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Chapter 1: Solving Linear Equations</li>
                <li>Chapter 2: Graphing and Writing Linear Equations</li>
                <li>Chapter 3: Solving Linear Inequalities</li>
                <li>Chapter 4: Solving Systems of Linear Equations</li>
                <li>Chapter 5: Linear Functions</li>
                <li>Chapter 6: Exponential Equations and Functions</li>
                <li>Chapter 7: Polynomial Functions and Factoring</li>
                <li>Chapter 8: Graphing Quadratic Functions</li>
                <li>Chapter 9: Solving Quadratic Equations</li>
                <li>Chapter 10: Square Root Functions and Geometry</li>
                <li>Chapter 11: Rational Equations and Functions</li>
                <li>Chapter 12: Data Analysis and Displays</li>
              </ul>
              <p className="text-gray-700 mt-6">
                GGES hopes that you will enjoy studying Algebra 1 online with us. To schedule a Free Trial Class!
              </p>
              <div className="mt-6">
                <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Start Free Trial <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              {/* Algebra 1 student image */}
              <img src="/path/to/your/algebra1-student-image.png" alt="Student studying Algebra 1" className="rounded-lg shadow-md max-w-full h-auto object-cover" />
            </div>
          </div>
        </div>

        {/* Algebra 2 Card */}
        <div className="relative bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg shadow-xl p-8 overflow-hidden">
          {/* Top-left icon */}
          <div className="absolute top-4 left-4 text-purple-300">
            {/* You can replace this with a more suitable icon if available */}
            <svg className="h-12 w-12 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.293 6.707a1 1 0 011.414-1.414L10 8.586l3.293-3.293a1 1 0 011.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707z"></path>
            </svg>
          </div>
          {/* Top-right icon */}
          <div className="absolute top-4 right-4 text-pink-300">
            {/* You can replace this with a more suitable icon if available */}
            <svg className="h-12 w-12 opacity-50" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V14a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"></path>
            </svg>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            <div className="lg:w-1/2 text-left">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">ALGEBRA 2</h3>
              <p className="text-gray-700 mb-4">
                Algebra 2 is the third math course in high school and will guide you through among other things linear equations, inequalities, graphs, matrices, polynomials and radical expressions, exponential and logarithmic expressions, exponential and logarithmic expressions, sequences and series, probability and trigonometry.
              </p>
              <p className="text-gray-700 mb-4">
                This Algebra 2 math course is divided into 10 chapters and each chapter is divided into several lessons:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Chapter 1: Linear Functions</li>
                <li>Chapter 2: Quadratic Functions</li>
                <li>Chapter 3: Quadratic Equations and Complex Numbers</li>
                <li>Chapter 4: Polynomial Functions</li>
                <li>Chapter 5: Rational Exponents and Radical Functions</li>
                <li>Chapter 6: Exponential and Logarithmic Functions</li>
                <li>Chapter 7: Rational Functions</li>
                <li>Chapter 8: Sequences and Series</li>
                <li>Chapter 9: Trigonometric Ratios and Functions</li>
                <li>Chapter 10: Probability</li>
                <li>Chapter 11: Data Analysis and Statistics</li>
              </ul>
              <p className="text-gray-700 mt-6">
                GGES hopes that you will enjoy studying Algebra 2 online with us. To schedule a Free Trial Class
              </p>
              <div className="mt-6">
                <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Start Free Trial <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              {/* Algebra 2 student image */}
              <img src="/path/to/your/algebra2-student-image.png" alt="Student studying Algebra 2" className="rounded-lg shadow-md max-w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>
      {/* End of K-12 Tutoring - Algebra 1 and Algebra 2 section */}

      {/* New section: K-12 Tutoring - Geometry */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            K-12 TUTORING – GEOMETRY
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At GGES, simplifying with the geometric terms, geometry formulas, or geometric sequence is made easy. Our tutors can help. We have expert geometry tutors to help with geometry homework or studying for a geometry test. Geometry class can be tough. We make getting geometry help easy. Why not avail a Free Trial Class, and evaluate. To schedule a Free Trial Class
          </p>
          <div className="mt-8">
            <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Get Started <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto p-8 bg-blue-50 rounded-lg shadow-xl overflow-hidden">
          {/* Background pattern similar to the image */}
          <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: "url('/path/to/your/geometric-pattern.png')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Geometry Chapters Included in our Geometry tutoring are as follows:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Chapter 1 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white font-bold text-lg">01</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Chapter 1</h4>
                  <p className="text-gray-700">Basics of Geometry</p>
                </div>
              </div>
              {/* Chapter 2 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-500 text-white font-bold text-lg">02</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Chapter 2</h4>
                  <p className="text-gray-700">Reasoning and Proofs</p>
                </div>
              </div>
              {/* Chapter 3 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white font-bold text-lg">03</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Chapter 3</h4>
                  <p className="text-gray-700">Parallel and Perpendicular Lines</p>
                </div>
              </div>
              {/* Chapter 4 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-pink-500 text-white font-bold text-lg">04</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Chapter 4</h4>
                  <p className="text-gray-700">Transformations</p>
                </div>
              </div>
              {/* Chapter 5 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-yellow-500 text-white font-bold text-lg">05</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Chapter 5</h4>
                  <p className="text-gray-700">Congruent Triangles</p>
                </div>
              </div>
              {/* Chapter 6 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-500 text-white font-bold text-lg">06</div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Chapter 6</h4>
                  <p className="text-gray-700">Relationships within Triangles</p>
                </div>
              </div>
            </div>
            {/* Arrows for navigation if needed, currently decorative */}
            <div className="flex justify-between mt-8">
              <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <p className="text-gray-700 text-center mt-8">
              Our Geometry tutors are experts in their field and know the best way to present a tricky subject. With additional guesswork our tutors can also provide worksheets and recorded video lessons you can use to review what you've learned.
            </p>
            <p className="text-xl font-semibold text-gray-800 mb-4 text-center mt-6">
              Why not avail a Free Trial Class for online Geometry tutoring. To schedule a Free Trial Class
            </p>
            <div className="mt-6 text-center">
              <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Start Free Trial <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* End of K-12 Tutoring - Geometry section */}

      {/* New section: ALL YOU NEED TO KNOW ABOUT AMC (American Mathematics Competitions) Test */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            ALL YOU NEED TO KNOW ABOUT AMC (American Mathematics Competitions) Test
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At GGES, we have expert AMC tutors who are well qualified and experienced in AMC test online tutoring.
          </p>
          <p className="text-xl font-semibold text-gray-800 mb-4 text-center mt-6">
            So why wait? To avail a Free Trial Class for AMC Test Prep Online Tutoring
          </p>
          <div className="mt-8">
            <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Start Free Trial <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* About AMC Preparations section */}
        <div className="relative max-w-7xl mx-auto bg-white rounded-lg shadow-xl p-8 mt-12 overflow-hidden">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">ABOUT AMC TEST</h3>
            <p className="text-gray-700 text-center mb-10 max-w-4xl mx-auto">
                The AMC contests are designed to engage students and teachers in effective mathematical problem-solving that is consistent with curricular goals, and to promote excitement in learning. We motivate students to excel and further develop their interest in mathematics. It also recognizes outstanding students, schools, and teachers for succeeding in mathematics in postsecondary education and careers. We're truly preparing today's students to solve tomorrow's challenges.
            </p>

            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mt-12">
                <div className="lg:w-1/2 text-left">
                    <h4 className="text-2xl font-bold text-gray-900 mb-6">Who can participate in the MAA AMC?</h4>
                    <p className="text-gray-700 mb-6">
                        The MAA AMC proudly engages students with a dedicated group of participants, each crucial to the success of our mathematical community:
                    </p>
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white font-bold text-lg">01</div>
                            <div>
                                <p className="text-gray-700">
                                    Students: Calling all middle and high school students looking to engage in an exciting problem-solving experience! Challenge your peers and represent your school by participating in the AMC 8, the AMC 10, and/or the AMC 12, depending on your grade level.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white font-bold text-lg">02</div>
                            <div>
                                <p className="text-gray-700">
                                    Educators: We seek teachers at accredited middle/high schools, colleges/universities, math circles, and learning centers to serve as competition managers administering the AMC 8, AMC 10, and AMC 12 to interested students. A competition manager enrolls students, administers the contest, collects the solutions, and shares scores and awards with participants after the competition.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                    {/* AMC student image */}
                    <img src="/path/to/your/amc-student-image.png" alt="Student studying for AMC" className="rounded-lg shadow-md max-w-full h-auto object-cover" />
                </div>
            </div>
        </div>
      </section>
      {/* End of ALL YOU NEED TO KNOW ABOUT AMC section */}

      {/* <Footer /> */}
    </>
  );
};

export default Courses;