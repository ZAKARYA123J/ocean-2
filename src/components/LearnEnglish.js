import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Modal from "./Modal";
import LearnEnglishOne from "./English/LearnEnglishOne"
import LearnEnglishTwo from "./English/LearnEnglishTwo"
import LearnEnglishThree from "./English/LearnEnglishThree"
import LearnEnglishFor from "./English/LearnEnglishFor"
import LearnEnglishFive from "./English/LearnEnglishFive"
import LearnEnligshSix from "./English/LearnEnligshSix"
import LearnEnglishModel from "./English/LearnEnglishModel"

const LearnEnglish = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dynamic states for the numbers
  const [years, setYears] = useState(0);
  const [recommendedPercentage, setRecommendedPercentage] = useState(0);
  const [students, setStudents] = useState(0);

  // Dynamic text states
  const [yearsText, setYearsText] = useState("");
  const [recommendedText, setRecommendedText] = useState("");
  const [studentsText, setStudentsText] = useState("");
  
  // Dynamic headline state
  const [headlineText, setHeadlineText] = useState(""); // For animating the headline

  // Function to animate number increments
  useEffect(() => {
    const incrementNumber = (start, end, setter, duration) => {
      let current = start;
      const stepTime = Math.abs(Math.floor(duration / (end - start)));
      const timer = setInterval(() => {
        current += 1;
        setter(current);
        if (current === end) {
          clearInterval(timer);
        }
      }, stepTime);
    };

    // Function to animate text appearance (letter by letter)
    const animateText = (fullText, setter, delay) => {
      let currentText = "";
      let index = 0;
      const timer = setInterval(() => {
        currentText += fullText[index];
        setter(currentText);
        index += 1;
        if (index === fullText.length) {
          clearInterval(timer);
        }
      }, delay); // Set delay between each letter
    };

    // Animate numbers: (startValue, endValue, stateSetter, duration)
    incrementNumber(0, 10, setYears, 2000); // 10 Years in 2 seconds
    incrementNumber(0, 96, setRecommendedPercentage, 2000); // 96% in 2 seconds
    incrementNumber(0, 150, setStudents, 2000); // 40K Students in 2 seconds

    // Start animating text after numbers begin
    setTimeout(() => animateText("of excellence in education", setYearsText, 50), 500);
    setTimeout(() => animateText("Recommended by students", setRecommendedText, 50), 1000);
    setTimeout(() => animateText("Students from 100 countries", setStudentsText, 50), 1500);

    // Animate headline
    animateText("Learn English Online with Professional Instructors", setHeadlineText, 50); // 50ms per character
    
  }, []); // Empty array ensures the effect runs only once

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="learn-english-page" style={{ fontFamily: '"Public Sans", sans-serif' }}>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="hero bg-cover bg-center h-screen text-white relative flex items-center"
        style={{
          backgroundImage: `url("https://www.upload.ee/image/17200759/fed.PNG")`,
        }} // Use the direct URL for the background image
      >
        {/* Dark overlay */}
        <div className="overlay absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Hero Content */}
        <div className="container mx-auto relative z-10 flex flex-col items-start text-left">
          {/* Dynamic Headline */}
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {headlineText} {/* Dynamic headline revealed letter by letter */}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-2xl mb-8 max-w-2xl">
            Your English progress is what matters the most to us. If you're not satisfied after 12 weeks of learning, you get your money back.
          </p>

          {/* CTA Button */}
          <button
            onClick={openModal}
            className="hover:bg-green-700 text-white py-3 px-8 rounded-full text-lg"
            style={{ backgroundColor: "#65A662" }} // Button background color
          >
            Start Now
          </button>

          {/* Stats Section */}
          <div className="mt-10 flex justify-between w-full max-w-4xl text-left text-white items-start">
            {/* Years of Experience */}
            <div className="flex flex-col items-start mr-8">
              <div className="flex flex-col items-start">
                <div className="flex items-baseline">
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: "42px", // Larger font size for numbers
                      color: "#65A662", // Green color for numbers
                      fontFamily: '"Public Sans", sans-serif',
                    }}
                  >
                    {years} {/* Dynamic years value */}
                  </h3>
                  <span
                    style={{
                      color: "#FFFFFF", // White for the text next to the number
                      fontSize: "26px", // Smaller font for the label
                      marginLeft: "8px", // Small margin between number and text
                      fontFamily: '"Public Sans", sans-serif',
                    }}
                  >
                    Years
                  </span>
                </div>
                <p className="text-sm mt-0" style={{ textAlign: "left" }}>
                  {yearsText} {/* Dynamic years text */}
                </p>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="h-12 border-l-2 border-white mx-8"></div>

            {/* Recommendation Percentage */}
            <div className="flex flex-col items-start mr-8">
              <div className="flex flex-col items-start">
                <div className="flex items-baseline">
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: "42px", // Larger font size for numbers
                      color: "#65A662", // Green color for numbers
                      fontFamily: '"Public Sans", sans-serif',
                    }}
                  >
                    {recommendedPercentage}% {/* Dynamic recommendation percentage */}
                  </h3>
                  <span
                    style={{
                      color: "#FFFFFF", // White for the text next to the number
                      fontSize: "26px", // Smaller font for the label
                      marginLeft: "8px", // Small margin between number and text
                      fontFamily: '"Public Sans", sans-serif',
                    }}
                  >
                    Recommended
                  </span>
                </div>
                <p className="text-sm mt-0" style={{ textAlign: "left" }}>
                  {recommendedText} {/* Dynamic recommendation text */}
                </p>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="h-12 border-l-2 border-white mx-8"></div>

            {/* Student Count */}
            <div className="flex flex-col items-start">
              <div className="flex flex-col items-start">
                <div className="flex items-baseline">
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: "42px", // Larger font size for numbers
                      color: "#65A662", // Green color for numbers
                      fontFamily: '"Public Sans", sans-serif',
                    }}
                  >
                    {students.toLocaleString()} {/* Dynamic student count */}
                  </h3>
                  <span
                    style={{
                      color: "#FFFFFF", // White for the text next to the number
                      fontSize: "26px", // Smaller font for the label
                      marginLeft: "8px", // Small margin between number and text
                      fontFamily: '"Public Sans", sans-serif',
                    }}
                  >
                    Students
                  </span>
                </div>
                <p className="text-sm mt-0" style={{ textAlign: "left" }}>
                  {studentsText} {/* Dynamic students text */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
       <LearnEnglishOne/>
       <LearnEnglishTwo/>
       <LearnEnglishModel/>
       <LearnEnglishThree/>
       <LearnEnglishFor/>
       <LearnEnglishFive/>
       <LearnEnligshSix/>
      {/* Footer */}
      <Footer />

      {/* Modal for sign-up */}
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default LearnEnglish;
