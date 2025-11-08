import React from "react";
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
import topicImg from "../../../assets/topic.png";
import middleImg from "../../../assets/middle.png";

export const TopicPage = () => {
  return (
    <>
      <div className="container mx-auto max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-semibold text-center">
            HOW WE TUTOR?
          </h1>
        </div>

        <main className="px-4 py-4 sm:px-6 lg:px-8 space-y-16">
          <p className="text-lg text-gray-700 leading-relaxed">
            To make science subjects tutoring as impactful as possible for a
            student we ask parents and students to provide information and
            materials about their current class. Our tutors study it, learn with
            their students to solve problems, and answer questions. As a result,
            our tutoring is personalized, targeted, and highly effective They
            begin with a student’s current homework or upcoming test or quiz.
            Then, they can backtrack if the tutor identifies a particular area
            of weakness. All of this hard work will lead to a boost in your
            child’s grades and a boost in his or her confidence.
          </p>

          {/* Life Sciences + Topics (Upper Elementary) */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: Life Sciences Description */}
            <div className="bg-[#AEE5FF] rounded-2xl p-8 shadow-lg border border-blue-200">
              <div className="flex items-center mb-4">
                <h2 className="text-2xl font-bold ">1. Life Sciences</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Characteristics of living things and the major groups of living
                things (e.g., mammals, birds, insects, flowering plants) Major
                body structures and their functions in animals and plants (e.g.,
                wings for flight, leaves for food-making) Life cycles, growth,
                development, reproduction, and death Butterflies, frogs,
                flowering plants, including birth, growth, development,
                reproduction, and death understanding that some characteristics
                of organisms are inherited from the parents, and some are the
                result of interactions with the environment; examples of
                inherited versus acquired learned traits; how physical features
                and behaviors help living things survive in their environments;
                understanding that when the environment changes, some organisms
                survive, while others die or move to a different location
              </p>
              <p className="text-gray-700 mt-4 leading-relaxed">
                Additional topics: simple food chains (e.g., simple food chains,
                predator-prey relationships); the role of the Sun, plants, and
                animals in the transfer of energy in ecosystems; effects of
                changes in ecosystems (e.g., overpopulation, lack of food
                sources)
              </p>
              <div className="mt-6 flex items-center text-blue-600 font-medium">
                <ArrowLeft className="h-5 w-5 mr-2" />
                <ArrowRight className="h-5 w-5 mr-2" />
              </div>
            </div>

            {/* Right: Topics We Tutor (Upper Elementary) */}
            <div className="space-y-6">
              <h3 className="text-3xl text-center font-bold mb-4">
                TOPICS WE TUTOR
              </h3>
              <h2 className="text-2xl text-center font-semibold mb-4">
                Science Curriculum Topics in Upper Elementary School
              </h2>
              <hr />
              <div className="flex justify-center">
                <img src={topicImg} className="cover" />
              </div>
            </div>
          </section>

          {/* Middle School Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: Image */}
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold  mb-4  text-center">
                Science Curriculum Topics in Middle School
              </h3>
              <hr />
              <div className="flex justify-center my-4">
                <img src={middleImg} />
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="bg-[#C3FFD2] rounded-2xl shadow-xl p-6 border border-teal-100">
                <h4 className="text-lg font-bold  mb-3">
                  1. Life Sciences (Biology)
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Cell theory, structure and function of cells, prokaryotic vs.
                  eukaryotic cells, plant vs. animal cells, cell organelles
                  (nucleus, mitochondria, chloroplasts, etc.) Photosynthesis and
                  cellular respiration Major organs and organ systems in humans
                  and other animals (circulatory, respiratory, digestive,
                  nervous, etc.) Structure and function of DNA, genes,
                  chromosomes; basics of genetics and inheritance (Mendel's
                  laws, Punnett squares) Classification of living things
                  (domains, kingdoms, taxonomy) Evolution and natural selection;
                  evidence for evolution; adaptation
                </p>
                <button className="mt-6 bg-[#305CDE] text-white px-6 py-2 rounded-lg font-medium hover:bg-teal-700 transition flex items-center">
                  Know More
                  <ChevronRight className="h-5 w-5 ml-1" />
                </button>
              </div>
            </div>
          </section>

          {/* Closing Paragraph */}
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
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 ">
                Start Free Trial
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
