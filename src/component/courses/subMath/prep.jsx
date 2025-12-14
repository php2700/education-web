"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Brain,
  Trophy,
  Target,
  Sparkles,
  CheckCircle,
  Star,
} from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

export const Prep = () => {
 
  return (
    <>
      <div className="bg-[#F0F8FF]">
        {/* Header */}

        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 ">
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-center">
            WHY TO TAKE IT?hjj
          </h1>
          <section className="text-gray-600 text-[16px] font-semibold">
            {/* <p className=" leading-relaxed mb-6">
              The main purpose of the AMC 10/12 is to spur interest in
              mathematics and to develop talent through the excitement of
              solving challenging problems in a timed multiple-choice format.
              The problems range from the very easy to the extremely difficult.
              Students who participate in the AMC 10/12 should find that most of
              the problems are challenging but within their grasp. The contest
              is intended for everyone from the average student at a typical
              school who enjoys mathematics to the very best student at the most
              special school.
            </p> */}
            {/* <p className="leading-relaxed">
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
            </p> */}
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
        </div>
      </div>
    
    </>
  );
};
