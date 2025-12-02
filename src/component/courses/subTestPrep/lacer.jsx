import React from "react";

const AccuplacerPrep = () => {
  return (
    <div className="w-full bg-white text-gray-800" id='lacer'>

      {/* HERO SECTION */}
      <section className="bg-[#0f172a] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            ACCUPLACER TEST PREP
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8">
            At GGES, we provide expert Accuplacer Test Prep tutoring. Our strategies have helped students achieve high scores, preparing them for college placement and success.
          </p>
          <a
            href="/free-trial"
            className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Book Free Trial Class
          </a>
        </div>
      </section>

      {/* ABOUT ACCUPLACER */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About Accuplacer</h2>
          <p className="text-lg mb-4">
            Colleges use Accuplacer to assess your skill levels in reading, writing, and math to determine readiness for credit-bearing courses. If you demonstrate proficiency, developmental courses may be bypassed, allowing you to start earning credits immediately.
          </p>
          <p className="text-lg mb-4">
            Accuplacer uses computer-adaptive technology. Each question adapts to your skill level, so thoughtful responses are essential. No one passes or fails; the goal is accurate placement in courses.
          </p>
        </div>
      </section>

      {/* TEST CONTENT */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What’s on the Tests</h2>
          
          {/* Reading */}
          <h3 className="text-2xl font-semibold mb-3">Reading Test</h3>
          <p className="text-lg mb-4">
            Assesses the ability to derive meaning from texts and determine the meaning of words/phrases in short and extended contexts. Includes single and paired passages.
          </p>

          {/* Writing */}
          <h3 className="text-2xl font-semibold mb-3">Writing Test</h3>
          <p className="text-lg mb-4">
            Evaluates your ability to revise and edit multi-paragraph text.
          </p>

          {/* Math */}
          <h3 className="text-2xl font-semibold mb-3">Math Tests</h3>
          <p className="text-lg mb-4">
            <strong>Arithmetic Test:</strong> Whole numbers, fractions, decimals, percent, comparisons, and equivalents.<br/>
            <strong>Quantitative Reasoning, Algebra, and Statistics (QAS):</strong> Rational numbers, ratios, exponents, algebraic expressions, linear equations, probability, statistics, and geometry.<br/>
            <strong>Advanced Algebra and Functions (AAF):</strong> Linear equations, factoring, quadratics, functions, radicals, polynomials, exponents, logarithms, and trigonometry.
          </p>

          {/* WritePlacer Essay */}
          <h3 className="text-2xl font-semibold mb-3">WritePlacer Essay</h3>
          <p className="text-lg mb-4">
            Measures writing ability including purpose & focus, organization & structure, development & support, sentence variety & style, mechanical conventions, and critical thinking.
          </p>

          {/* ESL */}
          <h3 className="text-2xl font-semibold mb-3">Accuplacer for English Language Learners</h3>
          <p className="text-lg mb-4">
            ESL tests assess grammar, listening, reading skills, and sentence meaning for non-native English speakers.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f172a] py-16 px-4 text-center">
        <div className="max-w-7xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Accuplacer Prep Today!
          </h2>
          <p className="mb-8 text-lg">
            Take a Free Trial Online Tutoring class for Accuplacer Test Prep and maximize your college readiness.
          </p>
          <a
            href="/free-trial"
            className="inline-block bg-yellow-400 text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition"
          >
            Get Free Trial Class
          </a>
        </div>
      </section>

    </div>
  );
};

export default AccuplacerPrep;
