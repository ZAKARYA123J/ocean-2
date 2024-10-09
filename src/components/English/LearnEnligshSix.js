import React, { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa"; // Importing the FaAngleDoubleRight icon

const FAQSection = () => {
  // State for tracking expanded/collapsed items
  const [openIndex, setOpenIndex] = useState(null);

  // Function to handle the toggle of FAQ items
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle between open and close
  };

  const faqData = [
    {
      question: "What levels of English courses do you offer?",
      answer:
        "We offer English courses for all proficiency levels, from beginner to advanced. Our courses are designed to cater to learners with varying language abilities."
    },
    {
      question: "Are your instructors certified and experienced?",
      answer:
        "Yes, all our instructors are highly certified and come with years of teaching experience in the field of English education."
    },
    {
      question: "What teaching methods and materials do you use?",
      answer:
        "We use a combination of traditional and modern teaching methods, including interactive materials, online resources, and real-life case studies."
    },
    {
      question: "Can I join an English course if I have a busy schedule?",
      answer:
        "Absolutely! We offer flexible scheduling options, including weekend and evening classes, to accommodate your busy schedule."
    },
    {
      question: "Is there any age restriction for enrolling in English courses?",
      answer:
        "No, we welcome learners of all ages. Whether you're a student or a professional, we have a course suited for your needs."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        {/* Image Section */}
        <div className="relative flex items-center">
          <img
            src="https://img.freepik.com/free-photo/portrait-pretty-young-curly-boy-red-wear-yellow-studio-wall_155003-41478.jpg?t=st=1728394774~exp=1728398374~hmac=d230e2a7ad0a579caad13d9376e0405b6f2bb34fc113db7c59341135acd1cc68&w=996"
            alt="Happy Students"
            className="w-full h-full rounded-lg shadow-md object-cover"
            style={{ transform: "none", transition: "none" }}
          />

          {/* Decorative Squares */}
          <div className="absolute bottom-0 right-0 flex space-x-1 space-y-1">
            <div className="w-4 h-4 bg-white"></div>
            <div className="w-4 h-4 bg-gray-300"></div>
          </div>
        </div>

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
      </div>
    </section>
  );
};

export default FAQSection;
