import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Modal from "./Modal";
import LearnGermanOne from "./german/LearnGermanOne.js";
import LearnGermanTwo from "./german/LearnGermanTwo.js";
import LearnGermanThree from "./german/LearnGermanThree.js";
import LearnGermanFor from "./german/LearnGermanFor.js";
import LearnGermanFive from "./german/LearnGermanFive";
import LearnGermanSix from "./german/LearnGermanSix";
import LearnGermanModel from "./german/LearnGermanModel";

const LearnGerman = () => {
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
  const [headlineText, setHeadlineText] = useState("");

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
      }, delay);
    };

    incrementNumber(0, 10, setYears, 2000);
    incrementNumber(0, 96, setRecommendedPercentage, 2000);
    incrementNumber(0, 150, setStudents, 2000);

    setTimeout(() => animateText("of excellence in German education", setYearsText, 50), 500);
    setTimeout(() => animateText("Recommended by German learners", setRecommendedText, 50), 1000);
    setTimeout(() => animateText("Students from 100 countries", setStudentsText, 50), 1500);

    animateText("Learn German with Professional Instructors", setHeadlineText, 50);
    
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="learn-german-page" style={{ fontFamily: '"Public Sans", sans-serif' }}>
      <Navbar />

      <section
        className="hero bg-cover bg-center h-screen text-white relative flex items-center"
        style={{
          backgroundImage: `url("https://cdn1.ntv.com.tr/gorsel/st8X_lDYpE60jNKzBeDN8w.jpg?width=952&height=540&mode=both&scale=both&v=1624005311597")`,
        }}
      >
        <div className="overlay absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="container mx-auto relative z-10 flex flex-col items-start text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {headlineText}
          </h1>

          <p className="text-lg md:text-2xl mb-8 max-w-2xl">
            Your German progress is what matters the most to us. If you're not satisfied after 12 weeks of learning, you get your money back.
          </p>

          <button
            onClick={openModal}
            className="hover:bg-red-600 text-white py-3 px-8 rounded-full text-lg"
            style={{ backgroundColor: "#FF0000" }} // Red color (German flag)
          >
            Start Now
          </button>

          <div className="mt-10 flex justify-between w-full max-w-4xl text-left text-white items-start">
            <div className="flex flex-col items-start mr-8">
              <div className="flex flex-col items-start">
                <div className="flex items-baseline">
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: "42px",
                      color: "#FFD700", // Gold color (German flag)
                      fontFamily: '"Public Sans", sans-serif',
                    }}
                  >
                    {years}
                  </h3>
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontSize: "26px",
                      marginLeft: "8px",
                      fontFamily: '"Public Sans", sans-serif',
                    }}
                  >
                    Years
                  </span>
                </div>
                <p className="text-sm mt-0" style={{ textAlign: "left" }}>
                  {yearsText}
                </p>
              </div>
            </div>

            <div className="h-12 border-l-2 border-white mx-8"></div>

            <div className="flex flex-col items-start mr-8">
              <div className="flex flex-col items-start">
                <div className="flex items-baseline">
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: "42px",
                      color: "#FFD700", // Gold color (German flag)
                      fontFamily: '"Public Sans", sans-serif',
                    }}
                  >
                    {recommendedPercentage}%
                  </h3>
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontSize: "26px",
                      marginLeft: "8px",
                      fontFamily: '"Public Sans", sans-serif',
                    }}
                  >
                    Recommended
                  </span>
                </div>
                <p className="text-sm mt-0" style={{ textAlign: "left" }}>
                  {recommendedText}
                </p>
              </div>
            </div>

            <div className="h-12 border-l-2 border-white mx-8"></div>

            <div className="flex flex-col items-start">
              <div className="flex flex-col items-start">
                <div className="flex items-baseline">
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: "42px",
                      color: "#FFD700", // Gold color (German flag)
                      fontFamily: '"Public Sans", sans-serif',
                    }}
                  >
                    {students.toLocaleString()}
                  </h3>
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontSize: "26px",
                      marginLeft: "8px",
                      fontFamily: '"Public Sans", sans-serif',
                    }}
                  >
                    Students
                  </span>
                </div>
                <p className="text-sm mt-0" style={{ textAlign: "left" }}>
                  {studentsText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <LearnGermanOne />
      <LearnGermanTwo />
      <LearnGermanModel />
      <LearnGermanThree />
      <LearnGermanFor />
      <LearnGermanFive />
      <LearnGermanSix />

      <Footer />

      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default LearnGerman;
