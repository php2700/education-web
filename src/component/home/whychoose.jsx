import icon1 from "../../assets/icon-container.png";
import icon2 from "../../assets/icon-container-2.png";
import icon3 from "../../assets/icon-container-3.png";
import icon4 from "../../assets/icon-container-4.png";
import icon5 from "../../assets/icon-container-5.png";
import backgroundImage from "../../assets/work-bg.png";
import editImg from "../../assets/editImg.png";

const WhyChooseUs = () => {
  const items = [
    {
      icon: icon1,
      title: "Certified & Experienced Tutors",
      desc: "Our tutors are experts in their fields with proven teaching experience.",
    },
    {
      icon: icon2,
      title: "1-on-1 Personalized Sessions",
      desc: "Lessons are tailored to your unique pace and learning style.",
    },
    {
      icon: icon3,
      title: "Flexible Scheduling",
      desc: "Book sessions that fit perfectly into your busy schedule.",
    },
    {
      icon: icon4,
      title: "Progress Reports for Parents",
      desc: "Stay informed with detailed updates on your child's progress.",
    },
    {
      icon: icon5,
      title: "Interactive Learning Tools",
      desc: "Engaging sessions using visual and practical methods.",
    },
  ];

  return (
    <section
      className="bg-[#F0F8FF] py-16 px-6 sm:px-10 lg:px-12 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >

      <div className="absolute top-0 left-40 "><img src={editImg} /></div>
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="font-[Poppins] font-semibold text-[48px] leading-[40px] tracking-[0px] text-[#1A202C] text-center">
          Why Choose Us?
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We provide a learning experience that is effective, convenient, and
          tailored to you.
        </p>
      </div>

      {/* Flex layout for perfect centering */}
      <div className="flex flex-wrap justify-center gap-6 container mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="
              flex 
              items-start 
              bg-white 
              rounded-xl 
              shadow-sm 
              hover:shadow-md 
              transition-all 
              p-5 
              w-full 
              sm:w-[45%] 
              lg:w-[30%] 
              max-w-md
            "
          >
            <div className="mr-4 flex-shrink-0">
              <img src={item.icon} alt={item.title} className="w-12 h-12" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
