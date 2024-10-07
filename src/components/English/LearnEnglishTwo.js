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
              src="https://www.upload.ee/image/17196190/medium-shot-smiley-girl-wearing-earphones.jpg" // Replace with the new image if needed
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
            <a href="#" className="bg-[#65A662] text-white px-6 py-3 rounded-full hover:bg-[#4A944E] transition-colors">
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
          <FaAngleDoubleRight className="text-blue-600 mt-1" /> 
          <div>
            <h3 className="text-sm font-semibold text-blue-600 mb-2">TRUSTED</h3>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Trusted by the World's Leading Organisations.</h2>
            <p className="text-gray-600 mb-6">
              Montes quisque urna molestie tincidunt aliquet quam. Imperdiet at pellentesque vitae aliquet tempor eget rutrum tellus.
            </p>
          </div>
        </div>

        {/* Right Content (Second text block) */}
        <div className="flex space-x-4"> {/* Flexbox to align items side by side */}
          <FaAngleDoubleRight className="text-blue-600 mt-1" /> {/* Small icon */}
          <div>
            <h3 className="text-sm font-semibold text-blue-600 mb-2">PARTNERED</h3>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Partnered with Top Educational Institutions.</h2>
            <p className="text-gray-600 mb-6">
              Proin quisque urna molestie tincidunt. Eget aliquet vitae eget tempor tellus. Imperdiet rutrum fusce.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default AboutSection;
