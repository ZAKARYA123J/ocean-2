import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa"; // Import the icon

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      {/* Heading Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="text-left flex flex-col justify-center">
          {/* Heading with FaAngleDoubleRight icon */}
          <h3 className="text-sm font-semibold text-blue-600 mb-2 flex items-center">
            <FaAngleDoubleRight className="ml-2" /> 
            TESTIMONIALS
          </h3>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Hear What Our Students Say
          </h2>
          <p className="text-gray-600 max-w-md mb-8">
            Montes quisque urna molestie tincidunt aliquet quam. Imperdiet at
            pellentesque vitae aliquet tempor eget rutrum tellus. Leo a luctus
            vitae urna sagittis quisque.
          </p>
          <a
            href="#"
            className="bg-[#65A662] text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300 ease-in-out mb-6"
            style={{ width: "300px", textAlign: "center" }}
          >
            ➤ VIEW ALL TESTIMONIALS
          </a>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://www.upload.ee/image/17196190/medium-shot-smiley-girl-wearing-earphones.jpg"
              alt="Student 1"
              className="rounded-lg object-cover w-full h-48"
            />
            <img
              src="https://www.upload.ee/image/17196190/medium-shot-smiley-girl-wearing-earphones.jpg"
              alt="Student 2"
              className="rounded-lg object-cover w-full h-48"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8">
          <div className="relative bg-[#1f1f1f] text-white p-6 rounded-lg shadow-md">
            <div className="absolute top-0 right-0 w-8 h-8 bg-white flex items-center justify-center">
              <div className="w-4 h-4 bg-[#1f1f1f]"></div>{" "}
            </div>
            <div className="flex items-start">
              <img
                src="https://www.upload.ee/image/17196190/medium-shot-smiley-girl-wearing-earphones.jpg"
                alt="Student"
                className="w-28 h-28 rounded-lg object-cover shadow-lg -mt-8 mr-6"
                style={{ marginBottom: "-16px" }}
              />
              <div>
                <div className="text-[#65A662] mb-2 text-3xl">
                  <span>★★★★★</span>
                </div>
                <h3 className="text-2xl font-semibold">
                  Best English Courses Ever!
                </h3>
                <p className="text-gray-400 mt-2">
                  Montes quisque urna molestie tincidunt aliquet quam. Imperdiet
                  at pellentesque vitae aliquet tempor eget rutrum tellus.
                </p>
                <p className="mt-4 font-semibold">Samantha Williams</p>
                <p className="text-gray-500">Business</p>
              </div>
            </div>
          </div>

          <div className="relative bg-[#1f1f1f] text-white p-6 rounded-lg shadow-md">
            <div className="absolute top-0 right-0 w-8 h-8 bg-white flex items-center justify-center">
              <div className="w-4 h-4 bg-[#1f1f1f]"></div>{" "}
            </div>

            <div className="flex items-start">
              <img
                src="https://www.upload.ee/image/17196190/medium-shot-smiley-girl-wearing-earphones.jpg"
                alt="Student"
                className="w-28 h-28 rounded-lg object-cover shadow-lg -mt-8 mr-6"
                style={{ marginBottom: "-16px" }}
              />

              <div>
                <div className="text-[#65A662] mb-2 text-3xl">
                  <span>★★★★★</span>
                </div>
                <h3 className="text-2xl font-semibold">
                  Best English Courses Ever!
                </h3>
                <p className="text-gray-400 mt-2">
                  Montes quisque urna molestie tincidunt aliquet quam. Imperdiet
                  at pellentesque vitae aliquet tempor eget rutrum tellus.
                </p>
                <p className="mt-4 font-semibold">Samantha Williams</p>
                <p className="text-gray-500">Business</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
