import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa'; // Icon similar to the small arrows

const AboutSection = () => {
  return (
    <>
      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left Image */}
          <div className="overflow-hidden rounded-lg">
            <img
              className="w-full h-full object-cover"
              src="https://miro.medium.com/v2/resize:fit:1200/1*X0VY4x9uesnWCkJnLPlXFQ.jpeg" // Replace with the new image if needed
              alt="About Us"
            />
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-sm font-semibold text-red-600 mb-2 flex items-center">
              <FaAngleDoubleRight className="mr-2" style={{ color: "#000000" }} /> {/* Black arrow icon */}
              ABOUT US
            </h3>
            <h2 className="text-3xl font-bold text-black mb-4">We are Dedicated to the Best of German Courses</h2>
            <p className="text-gray-700 mb-6">
              Our mission is to provide high-quality German language education, tailored to help you master German effectively.
              Whether you are a beginner or an advanced learner, we offer programs that suit your needs.
            </p>
            <p className="text-gray-700 mb-6">
              Our experienced instructors and comprehensive courses ensure that you gain fluency in German through interactive and immersive lessons.
              Join us to start your journey in mastering the German language and culture.
            </p>
            <a href="#" className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-black transition-colors">
              ➤ LEARN MORE
            </a>
          </div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          
          {/* Left Content (First text block) */}
          <div className="flex space-x-4">
            <FaAngleDoubleRight className="text-black mt-1" /> {/* Black arrow icon */}
            <div>
              <h3 className="text-sm font-semibold text-red-600 mb-2">TRUSTED</h3>
              <h2 className="text-3xl font-bold text-black mb-4">Trusted by German Language Learners Worldwide</h2>
              <p className="text-gray-700 mb-6">
                Our German courses are trusted by learners from around the globe, providing effective and engaging ways to achieve language fluency.
              </p>
            </div>
          </div>

          {/* Right Content (Second text block) */}
          <div className="flex space-x-4"> {/* Flexbox to align items side by side */}
            <FaAngleDoubleRight className="text-black mt-1" /> {/* Black arrow icon */}
            <div>
              <h3 className="text-sm font-semibold text-red-600 mb-2">PARTNERED</h3>
              <h2 className="text-3xl font-bold text-black mb-4">Partnered with Leading German Institutions</h2>
              <p className="text-gray-700 mb-6">
                We collaborate with top German educational institutions to bring you the best learning resources and experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;


