import icon1 from "../../assets/icon-container.png";
import icon2 from "../../assets/icon-container-2.png";
import icon3 from "../../assets/icon-container-3.png";
import icon4 from "../../assets/icon-container-4.png";
import icon5 from "../../assets/icon-container-5.png";

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
            <div className="bg-gray-50 py-12 px-8 sm:px-10 lg:px-12">
                  <div className="text-center">
                        <h2 className="text-4xl font-extrabold text-gray-900">
                              Why Choose Us?
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                              We provide a learning experience that is
                              effective, convenient, and tailored to you.
                        </p>
                  </div>

                  <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
                        {items.map((item, index) => (
                              <div
                                    key={index}
                                    className="flex items-center p-4 w-full  "
                              >
                                    <span className="mr-4 flex-shrink-0">
                                          <img
                                                src={item.icon}
                                                alt={item.title}
                                                className="w-12 h-12"
                                          />
                                    </span>
                                    <div>
                                          <h3 className="text-lg font-medium text-gray-900">
                                                {item.title}
                                          </h3>
                                          <p className="mt-1 text-sm text-gray-600">
                                                {item.desc}
                                          </p>
                                    </div>
                              </div>
                        ))}
                  </div>
            </div>
      );
};

export default WhyChooseUs;
