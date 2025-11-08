"use client";

import React from "react";
import {
  ArrowRight,
  Brain,
  Trophy,
  Target,
  Sparkles,
  CheckCircle,
  Star,
} from "lucide-react";

export const Prep = () => {
  return (
    <>
      <div className="container mx-auto max-w-7xl mx-auto">
        {/* Header */}

        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">
            WHY TO TAKE IT?
          </h1>
        </div>

        <main className="space-y-16">
          <section className="text-gray-600 text-[16px] font-semibold">
            <p className=" leading-relaxed mb-6">
              The main purpose of the AMC 10/12 is to spur interest in
              mathematics and to develop talent through the excitement of
              solving challenging problems in a timed multiple-choice format.
              The problems range from the very easy to the extremely difficult.
              Students who participate in the AMC 10/12 should find that most of
              the problems are challenging but within their grasp. The contest
              is intended for everyone from the average student at a typical
              school who enjoys mathematics to the very best student at the most
              special school.
            </p>
            <p className="leading-relaxed">
              A special purpose of the AMC 10/12 is to help identify those few
              students with truly exceptional mathematics talent. Students who
              are among the very best deserve some indication of how they stand
              relative to other students in the country and around the world.
              The AMC 10/12 provides one such indication, and it is the first in
              a series of examinations (followed by the AIME and USAMO) that
              culminate in participation in the International Mathematical
              Olympiad, the most prestigious and difficult secondary mathematics
              examination in the world. In this way, the very best young
              mathematicians are recognized, encouraged, and developed. Another
              valuable comment: student can make a mistake between their own
              level of achievement and their levels in previous years . In
              particular, they are encouraged to begin taking the contests early
              in their mathematics studies and to look back with pride each year
              on how they have learned to answer questions that they could not
              have answered previously.
            </p>
            <div className="text-center">
              <h3 className="text-2xl font-bold my-4">
                So why wait? To avail a Free Trial Class for AMC Test Prep
                Online Tutoring
              </h3>
            </div>
            <div className="text-center my-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 ">
                Start Free Trial
              </button>
            </div>
          </section>

          <section>
            {/* Left: Text */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-center my-2 text-gray-800">
                MATH KANGAROO TEST PREP
              </h2>
              <p className="text-md font-semibold text-gray-500 leading-relaxed">
                Mathematical Kangaroo is an international mathematical
                competition with more than 50 countries that take an active part
                in it. There are twelve levels of participation from grade 1 to
                grade 12. We take pride in organizing this event. We have
                specialized mathematics tutors who prepare students for this
                competition. We provide past year papers, mock tests, and
                topic-wise prep .
              </p>
              <p className="text-xl text-center font-bold text-gray-700 leading-relaxed mt-4">
                So why wait? To avail a Free Trial Class for Math Kangaroo Test
                Prep Online Tutoring
              </p>
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
