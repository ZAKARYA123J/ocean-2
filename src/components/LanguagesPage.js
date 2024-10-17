import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FaReact, FaNodeJs, FaWordpress, FaCheckCircle } from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  SiFlutter,
  SiNextdotjs,
  SiLaravel,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

// Define the color map with original brand colors
const colorsMap = {
  React: "#61DAFB",
  "Node.js": "#339933",
  SQL: "#336791",
  MongoDB: "#47A248",
  "Tailwind CSS": "#06B6D4",
  Figma: "#F24E1E",
  Flutter: "#02569B",
  WordPress: "#21759B",
  Laravel: "#FF2D20",
  Express: "#000000",
  Next: "#000000",
};

// Add new icons to the iconsMap
const iconsMap = {
  React: <FaReact />,
  "Node.js": <FaNodeJs />,
  SQL: <SiMysql />,
  MongoDB: <SiMongodb />,
  "Tailwind CSS": <SiTailwindcss />,
  Figma: <SiFigma />,
  Flutter: <SiFlutter />,
  WordPress: <FaWordpress />,
  Laravel: <SiLaravel />,
  Express: <SiExpress />,
  Next: <SiNextdotjs />,
};

const fetchLanguages = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Object.keys(iconsMap));
    }, 1000);
  });
};

// Function to shuffle an array
const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const LanguagesPage = () => {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLanguages().then((data) => {
      setLanguages(shuffleArray(data)); // Shuffle the languages array
      setLoading(false);
    });
  }, []);

  const circleRadius = 160; // Adjust the radius to ensure icons fit correctly
  const containerSize = 600; // Adjust this size if needed
  const iconSize = "2.4em"; // Adjust the size of the icons

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 overflow-hidden">
      <style>{`
                @keyframes waveAnimation {
                    0% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.05);
                    }
                    100% {
                        transform: scale(1);
                    }
                }

                @keyframes waveAnimation2 {
                    0% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.1);
                    }
                    100% {
                        transform: scale(1);
                    }
                }

                .wave-animation {
                    animation: waveAnimation 6s ease-in-out infinite;
                    position: absolute;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.1) 100%);
                }

                .wave-animation2 {
                    animation: waveAnimation2 8s ease-in-out infinite;
                    position: absolute;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.05) 100%);
                }
            `}</style>
      <section className="flex-grow pt-23">
        <div className="relative container mx-auto px-4 lg:px-8 max-w-7xl mt-10 flex flex-col lg:flex-row items-center justify-between">
          <div
            className="relative flex justify-center items-center mb-10 lg:mb-0"
            style={{
              height: `${containerSize}px`,
              width: `${containerSize}px`,
            }}
          >
            {/* Updated Animated Wave Layers with Gradient Colors */}
            <div className="absolute w-[90%] h-[90%] rounded-full bg-gradient-to-r from-blue-600 to-red-600 opacity-30 wave-animation"></div>
            <div className="absolute w-[75%] h-[75%] rounded-full bg-gradient-to-r from-blue-600 to-red-600 opacity-30 wave-animation"></div>
            <div className="absolute w-[50%] h-[50%] rounded-full bg-gradient-to-r from-blue-600 to-red-600 opacity-30 wave-animation"></div>
            <div className="absolute w-[80%] h-[80%] rounded-full bg-gradient-to-r from-blue-600 to-red-600 opacity-20 wave-animation2"></div>

            {/* Circular Icon Layout */}
            <ul
              className="relative flex items-center justify-center"
              style={{
                width: `${containerSize}px`,
                height: `${containerSize}px`,
              }}
            >
              {loading ? (
                <div className="flex justify-center items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-8 w-8 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                  <span className="text-lg font-medium">Loading...</span>
                </div>
              ) : (
                languages.map((language, index) => {
                  // Calculate angle for each icon based on its index
                  const angle = (2 * Math.PI * index) / languages.length;
                  const x = Math.cos(angle) * circleRadius;
                  const y = Math.sin(angle) * circleRadius;

                  return (
                    <li
                      key={index}
                      className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-2xl transition-transform hover:scale-105"
                      style={{
                        position: "absolute",
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: "translate(-50%, -50%)", // Center icons
                        fontSize: iconSize, // Set icon size
                        width: iconSize, // Ensure size consistency
                        height: iconSize, // Ensure size consistency
                        display: "flex", // Center icon
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <IconContext.Provider
                        value={{
                          size: iconSize,
                          color: colorsMap[language],
                        }}
                      >
                        {iconsMap[language]}
                      </IconContext.Provider>
                    </li>
                  );
                })
              )}
            </ul>
          </div>

          {/* Team Description Section Styled Like Reference */}
          <div className="w-[500px] p-6 bg-white rounded-lg shadow-lg mx-auto xs:m-20 md:m-0 ">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                Development Team
              </span>
            </h1>
            <p className="text-gray-600 mb-6">
              Our team consists of highly skilled developers proficient in a
              variety of modern technologies. We specialize in building robust
              web applications, mobile apps, and custom solutions tailored to
              your business needs.
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center text-gray-700">
                <FaCheckCircle className="text-blue-600 mr-2" />
                Expertise in Frontend & Backend Development
              </li>
              <li className="flex items-center text-gray-700">
                <FaCheckCircle className="text-blue-600 mr-2" />
                Proficient in React, Node.js, Laravel, and more
              </li>
              <li className="flex items-center text-gray-700">
                <FaCheckCircle className="text-blue-600 mr-2" />
                Committed to delivering quality and performance
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LanguagesPage;
