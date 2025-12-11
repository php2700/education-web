import React from "react";
import blogImg from "../../assets/slide-3.jpg";
import blogImg2 from "../../assets/slide-4.jpg"; // extra image
import blogImg3 from "../../assets/slide-2.jpg"; // extra image

export const BlogDetail = () => {
  // Static blog data (education-related)
  const blog = {
    title: "The Importance of Early Childhood Education",
    description: [
      "At GGES, our SHSAT online tutoring programs are research-based and specifically designed to help students score higher on the SHSAT test. For SHSAT Test prep focus on teaching students, strategies while also reviewing the content on the test. As our pedagogy, for SHSAT prep, we emphasize maximizing student’s available study time with the right strategies and methods—not laboring on rote memorization and drill techniques. For SHSAT prep, we understand a high SHSAT score can change the trajectory of students’ education. To this end, we are dedicated to our students’ achieve his or her goals—we succeed when our student succeeds.",
      `
Beginning with the fall 2025 SHSAT, the test will be administered digitally for all students except those who have 504 or IEP accommodations that require a paper and pencil version of the test. In the fall of 2026, the SHSAT will become a computer-adaptive test (CAT). This means the test will adjust the difficulty of questions based on the individual student's performance.
`,
      "The SHSAT test dates are usually offered in late October for school day testing, mid-November for 8th graders, and early December for 9th graders. The ninth grade SHSAT is for first-time test takers and for students who want a second chance to apply to a Specialized High School. We do not recommend waiting until 9th grade to take the test as these high schools have a very limited number of 10th grade seats available.",
      "At GGES, ISEE test prep is imparted by the most expert tutors. ISEE test tutoring requires a good understanding of the subject matter. At GGES, our ISEE test prep tutors are well experienced in their tutoring methods and pedagogy suiting every student. Do take a Free Trial Class from us to realize our claim.",
      "There are two SHSAT sections: English Language Arts (ELA) and Math, each with 57 items. Start to finish, the test will take you three hours (180 minutes). ",
    ],
    sections: [
      {
        heading: "Four levels: ",
        content: [
          "Early education helps children develop cognitive skills such as problem-solving, memory, and attention.",
          "Interactive activities and play-based learning stimulate brain growth and understanding.",
        ],
        image: blogImg2,
      },
      {
        heading: "Social and Emotional Skills",
        content: [
          "Children learn to interact with peers, manage emotions, and develop empathy.",
          "Group activities and guided play promote teamwork and communication skills.",
        ],
        image: blogImg3,
      },
      {
        heading: "Parental Involvement",
        content: [
          "Parents play a vital role in reinforcing learning at home.",
          "Reading, storytelling, and daily interactions contribute to a child’s development.",
        ],
      },
    ],
    author: "Jane Smith",
    createdAt: "2025-12-11T10:00:00Z",
    tags: ["Education", "Early Learning", "Child Development", "Parenting"],
  };

  return (
    <div className="max-w-7xl mx-auto p-10 bg-gray-100 rounded-2xl shadow-2xl">
      {/* Main Blog Image */}
      <img
        src={blogImg}
        alt={blog.title}
        className="w-full h-[500px] object-cover rounded-2xl mb-8 shadow-xl"
      />

      {/* Blog Title */}
      <h1 className="text-5xl font-extrabold mb-6 text-gray-900">
        {blog.title}
      </h1>

      {/* Tags */}
      <div className="mb-6 flex flex-wrap gap-2">
        {blog.tags.map((tag, idx) => (
          <span
            key={idx}
            className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Main Description */}
      <div className="space-y-6 text-lg text-gray-800 leading-relaxed mb-10">
        {blog.description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
      </div>

      {/* Sections */}
      {blog.sections.map((section, idx) => (
        <div key={idx} className="mb-10">
          <h2 className="text-3xl font-bold mb-4">{section.heading}</h2>
          <div className="space-y-4 text-gray-700 text-lg">
            {section.content.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
          {section.image && (
            <img
              src={section.image}
              alt={section.heading}
              className="w-full h-80 object-cover rounded-xl mt-4 shadow-md"
            />
          )}
        </div>
      ))}

      {/* Author and Date */}
      <div className="mt-10 text-lg text-gray-600 border-t pt-6 flex justify-between">
        <p className="font-semibold">By {blog.author}</p>
        <p>Published on {new Date(blog.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
};
