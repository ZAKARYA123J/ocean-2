import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const FAQSection = () => {
  // State for tracking expanded/collapsed items
  const [openIndex, setOpenIndex] = useState(null);

  // Function to handle the toggle of FAQ items
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle between open and close
  };

  const faqData = [
    {
      question: "What levels of Italian courses do you offer?",
      answer:
        "We offer Italian courses for all proficiency levels, from beginner to advanced. Our courses are tailored to meet the needs of learners at any stage of their language journey."
    },
    {
      question: "Are your instructors certified and experienced?",
      answer:
        "Yes, all our instructors are native speakers and are highly certified with years of experience in teaching Italian as a foreign language."
    },
    {
      question: "What teaching methods and materials do you use?",
      answer:
        "We combine traditional and modern teaching methods, including interactive lessons, digital resources, and real-life Italian cultural scenarios."
    },
    {
      question: "Can I join an Italian course if I have a busy schedule?",
      answer:
        "Absolutely! We offer flexible scheduling options, including evening and weekend classes, to accommodate your busy lifestyle."
    },
    {
      question: "Is there any age restriction for enrolling in Italian courses?",
      answer:
        "No, we welcome learners of all ages, from children to adults. Our courses are designed to cater to everyone’s needs."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        {/* FAQ Section */}
        <div className="text-left flex flex-col justify-center">
          {/* Heading with FaAngleDoubleRight icon */}
          <h3 className="text-sm font-semibold text-blue-600 mb-2 flex items-center">
            <FaAngleDoubleRight className="ml-2" />
            FAQ
          </h3>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Just in Case You Missed Anything.
          </h2>
          <ul className="text-gray-800 space-y-4">
            {faqData.map((faq, index) => (
              <li key={index} className="border-b border-gray-300 py-4">
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <span
                    className={`text-xl transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  >
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                {/* Apply animation effect when expanding/collapsing */}
                <div
                  className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                    openIndex === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="relative flex items-center">
          <img
            src="https://templatekits.themewarrior.com/inlingo-new/wp-content/uploads/sites/102/2023/08/YLZ8PNG-1.jpg"
            alt="Happy Italian Students"
            className="w-full h-full rounded-lg shadow-md object-cover"
            style={{ transform: "none", transition: "none" }}
          />

          {/* Decorative Squares */}
          <div className="absolute bottom-0 right-0 flex space-x-1 space-y-1">
            <div className="w-4 h-4 bg-white"></div>
            <div className="w-4 h-4 bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
