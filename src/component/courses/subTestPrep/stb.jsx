import React from "react";

const STBPrep = () => {
  return (
    <div className="w-full bg-white text-gray-800" id='stb'>

      {/* HERO SECTION */}
      <section className="bg-[#0f172a] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            STB TEST PREP
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto mb-8">
            At GGES, we provide expert STB Test Prep tutoring with a skill-based approach to help students excel in visual-spatial reasoning and cognitive challenges.
          </p>
          <a
            href="/free-trial"
            className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
          >
            Book Free Trial Class
          </a>
        </div>
      </section>

      {/* ABOUT STB */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About the STB</h2>
          <p className="text-lg mb-4">
            The Spatial Test Battery (STB) measures visual-spatial ability and is used in conjunction with other tests for admission to Johns Hopkins University Center for Talented Youth (CTY). It assesses abilities such as shape rotation, mental imagery, and spatial reasoning.
          </p>
          <p className="text-lg mb-4">
            STB helps identify potential talents in visual-spatial learning, assists in career or academic decisions, and offers opportunities for high scoring students to join CTY programs.
          </p>
        </div>
      </section>

      {/* STB SUBTESTS */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">STB Subtests</h2>

          <h3 className="text-2xl font-semibold mb-3">Visual Memory</h3>
          <p className="text-lg mb-4">
            <strong>Learning:</strong> Memorize irregular shapes with black inked parts. 5th and 6th graders memorize 15 shapes; older students memorize 22 shapes.<br/>
            <strong>Recall:</strong> Occurs after Surface Development and Block Rotation subtests, testing memory of previously memorized shapes.
          </p>

          <h3 className="text-2xl font-semibold mb-3">Surface Development</h3>
          <p className="text-lg mb-4">
            Identify which flat shapes correspond to folded boxes. Solid lines show edges; dotted lines show fold lines.
          </p>

          <h3 className="text-2xl font-semibold mb-3">Block Rotation</h3>
          <p className="text-lg mb-4">
            Mentally rotate 3D shapes (cubes, cylinders, prisms) to match a given orientation.
          </p>

          <h3 className="text-2xl font-semibold mb-3">Perspectives</h3>
          <p className="text-lg mb-4">
            Available for 7th graders and above. Determine the perspective from which objects are viewed in different images.
          </p>

          {/* IMPORTANT TEST INFORMATION */}
          <h3 className="text-2xl font-bold mb-3">Important Testing Information</h3>
          <p className="text-lg mb-4">
            Each subtest is timed separately. Some questions may be experimental and do not count toward final scores. Total test time ranges from 83 minutes for 5th/6th graders to 109 minutes for 7th graders and above.
          </p>

          <table className="w-full text-left border-collapse border border-gray-300 mb-6">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">Subtest + Tutorial</th>
                <th className="border border-gray-300 px-4 py-2">5th/6th Graders: Time Allowed</th>
                <th className="border border-gray-300 px-4 py-2">7th Graders and Older: Time Allowed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">General Tutorial</td>
                <td className="border border-gray-300 px-4 py-2">15 min</td>
                <td className="border border-gray-300 px-4 py-2">15 min</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Questionnaire</td>
                <td className="border border-gray-300 px-4 py-2">4 min</td>
                <td className="border border-gray-300 px-4 py-2">4 min</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Visual Memory: Learning Instructions</td>
                <td className="border border-gray-300 px-4 py-2">3 min</td>
                <td className="border border-gray-300 px-4 py-2">3 min</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Visual Memory: Viewing Shapes</td>
                <td className="border border-gray-300 px-4 py-2">8 min</td>
                <td className="border border-gray-300 px-4 py-2">8 min</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Surface Development: Tutorial</td>
                <td className="border border-gray-300 px-4 py-2">4 min</td>
                <td className="border border-gray-300 px-4 py-2">4 min</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Surface Development: Exam</td>
                <td className="border border-gray-300 px-4 py-2">12 min</td>
                <td className="border border-gray-300 px-4 py-2">12 min</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Block Rotation: Tutorial</td>
                <td className="border border-gray-300 px-4 py-2">5 min</td>
                <td className="border border-gray-300 px-4 py-2">5 min</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Block Rotation: Exam</td>
                <td className="border border-gray-300 px-4 py-2">12 min</td>
                <td className="border border-gray-300 px-4 py-2">12 min</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Visual Memory Recall Instructions</td>
                <td className="border border-gray-300 px-4 py-2">2 min</td>
                <td className="border border-gray-300 px-4 py-2">2 min</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Visual Memory Recall Exam</td>
                <td className="border border-gray-300 px-4 py-2">8 min</td>
                <td className="border border-gray-300 px-4 py-2">8 min</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Perspectives: Tutorial</td>
                <td className="border border-gray-300 px-4 py-2">Not given</td>
                <td className="border border-gray-300 px-4 py-2">6 min</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Perspectives: Exam</td>
                <td className="border border-gray-300 px-4 py-2">Not given</td>
                <td className="border border-gray-300 px-4 py-2">19 min</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Survey / Comments</td>
                <td className="border border-gray-300 px-4 py-2">10 min</td>
                <td className="border border-gray-300 px-4 py-2">10 min</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f172a] py-16 px-4 text-center">
        <div className="max-w-7xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your STB Test Prep Today!
          </h2>
          <p className="mb-8 text-lg">
            Take a Free Trial Online Tutoring class for STB Test Prep and enhance your visual-spatial skills.
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

export default STBPrep;
