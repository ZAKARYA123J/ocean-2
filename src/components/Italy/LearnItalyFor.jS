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
            Scopri cosa dicono i nostri studenti. I corsi di italiano offerti
            sono perfettamente strutturati per migliorare le tue competenze linguistiche
            in modo efficace e coinvolgente.
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
              src="https://img.freepik.com/free-photo/front-view-handsome-guy-giving-thumbs-up-holding-exercise-books_140725-34605.jpg?ga=GA1.1.1388010401.1725554040&semt=ais_hybrid"
              alt="Student 1"
              className="rounded-lg object-cover w-full h-48"
            />
            <img
              src="https://img.freepik.com/free-photo/close-up-portrait-young-guy-with-curly-hair_176532-8156.jpg?ga=GA1.1.1388010401.1725554040&semt=ais_hybrid"
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
                  Il miglior corso di italiano!
                </h3>
                <p className="text-gray-400 mt-2">
                  Il corso è stato incredibilmente utile. Ora parlo italiano con
                  fiducia e comprendo meglio la cultura italiana.
                </p>
                <p className="mt-4 font-semibold">Luca Rossi</p>
                <p className="text-gray-500">Ingegnere</p>
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
                  Un'esperienza fantastica!
                </h3>
                <p className="text-gray-400 mt-2">
                  Ho imparato tanto e mi sono sentito molto supportato dai
                  nostri insegnanti durante il corso.
                </p>
                <p className="mt-4 font-semibold">Maria Bianchi</p>
                <p className="text-gray-500">Studentessa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
