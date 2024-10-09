import React, { useState } from 'react';
import { FaAngleDoubleRight, FaTimes } from 'react-icons/fa'; // Icons

const AboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsLoading(true);
    setIsModalOpen(true);
    setTimeout(() => setIsLoading(false), 1500); // Simulate fetching time
    document.body.style.overflow = 'hidden'; // Prevent scrolling when the modal is open
  };

  // Function to close the modal
  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
      document.body.style.overflow = 'auto'; // Restore scrolling when the modal is closed
    }, 500);
  };

  return (
    <>
      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left Image */}
          <div className="overflow-hidden rounded-lg">
            <img
              className="w-full h-full object-cover"
              src="https://www.upload.ee/image/17214744/male-teacher-doing-english-lesson-online-his-students.jpg"
              alt="About Us"
            />
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-sm font-semibold text-blue-600 mb-2 flex items-center">
              <FaAngleDoubleRight className="mr-2" />
              ABOUT US
            </h3>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">We are Dedicated to the Best of English Course</h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet consectetur. Montes quisque urna molestie tincidunt aliquet quam.
              Imperdiet at pellentesque vitae aliquet tempor eget rutrum tellus. Leo a luctus vitae urna nibh faucibus.
            </p>
            <p className="text-gray-600 mb-6">
              A sagittis quisque ligula vitae dignissim vel nunc urna urna. Morbi luctus purus vitae neque
              vitae pellentesque ultrices. Montes quisque urna molestie tincidunt aliquet quam.
              Imperdiet at pellentesque vitae aliquet tempor.
            </p>
            <button
              onClick={openModal}
              className="bg-[#65A662] text-white px-6 py-3 rounded-full hover:bg-[#4A944E] transition-colors"
            >
              ➤ LEARN MORE
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-all duration-300 ease-in-out ${
            isClosing ? 'fadeOut' : 'fadeIn'
          }`}
        >
          <div
            className={`bg-gradient-to-r from-white via-gray-50 to-white rounded-lg shadow-2xl p-8 max-w-md w-full relative transition-all duration-500 transform ${
              isClosing ? 'scaleDown' : 'scaleUp'
            }`}
          >
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <FaTimes className="text-2xl" />
            </button>

            {isLoading ? (
              <div className="text-center">
                <div className="animate-spin text-5xl text-blue-500 mb-4">⏳</div>
                <p className="text-gray-700">Loading formation details...</p>
              </div>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Our Formation Details</h2>
                <p className="text-gray-600 mb-6">
                  We offer a range of courses designed to help you achieve fluency in English. Our formations include 1-on-1 lessons, group classes, and practice sessions tailored to your needs.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether you're a beginner or looking to refine your skills, our expert teachers are here to guide you through an interactive and engaging learning experience.
                </p>
                <button
                  onClick={closeModal}
                  className="bg-[#65A662] text-white py-2 px-4 rounded hover:bg-green-600 transition-transform duration-300 mt-6"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Embedded keyframe animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes scaleUp {
          0% { transform: scale(0.7) rotate(-3deg); opacity: 0; }
          80% { transform: scale(1.05) rotate(3deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes scaleDown {
          from { transform: scale(1); opacity: 1; }
          to { transform: scale(0.7); opacity: 0; }
        }
      `}</style>
    </>
  );
};

export default AboutSection;
