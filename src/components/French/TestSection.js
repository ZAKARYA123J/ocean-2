import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa"; // Import the icon

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#0052A5] via-white to-[#EF4135]"> {/* French-themed background gradient */}
      {/* Heading Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="text-left flex flex-col justify-center">
          {/* Heading with FaAngleDoubleRight icon */}
          <h3 className="text-sm font-semibold text-[#EF4135] mb-2 flex items-center">
            <FaAngleDoubleRight className="mr-2" /> 
            TESTIMONIALS
          </h3>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Hear What Our Students Say
          </h2>
          <p className="text-gray-600 max-w-md mb-8">
            Discover the impact of our courses through our students’ experiences. See how they achieved fluency and confidence in French with our help.
          </p>
          <a
            href="#"
            className="bg-[#EF4135] text-white px-4 py-2 rounded-full hover:bg-[#D04B2C] transition duration-300 ease-in-out mb-6"
            style={{ width: "300px", textAlign: "center" }}
          >
            ➤ VIEW ALL TESTIMONIALS
          </a>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://img.freepik.com/free-photo/smiley-little-boy-isolated-pink_23-2148984798.jpg?t=st=1728394683~exp=1728398283~hmac=e90d68e91eb4a375ac375e791c915cb0f3281535513f04dbe72ac3e58b7f7bd8&w=996"
              alt="Student 1"
              className="rounded-lg object-cover w-full h-48"
            />
            <img
              src="https://img.freepik.com/free-photo/pretty-clever-little-girl-child-with-blond-hairstyle-yellow-t-shirt-overalls-hold-something-palm-introduce-product-blank-white-copy-space-smiling-joyful-brag-what-she-got-b-day-present_176420-36184.jpg?t=st=1728394699~exp=1728398299~hmac=e62e90055c8f75f985a457fa17215bf8cf0a89d66b9121fb3c745bb23ca58ce5&w=996"
              alt="Student 2"
              className="rounded-lg object-cover w-full h-48"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8">
          <div className="relative bg-[#1f1f1f] text-white p-6 rounded-lg shadow-md">
            <div className="absolute top-0 right-0 w-8 h-8 bg-white flex items-center justify-center">
              <div className="w-4 h-4 bg-[#1f1f1f]"></div>
            </div>
            <div className="flex items-start">
              <img
                src="https://img.freepik.com/free-vector/smiling-man-with-glasses_1308-174409.jpg?t=st=1728394302~exp=1728397902~hmac=fe89cf0467271d2092dea194b663f5884053c9462b5a749d528bb1cc0f2c7d46&w=740"
                alt="Student"
                className="w-28 h-28 rounded-lg object-cover shadow-lg -mt-8 mr-6"
                style={{ marginBottom: "-16px" }}
              />
              <div>
                <div className="text-[#EF4135] mb-2 text-3xl">
                  <span>★★★★★</span>
                </div>
                <h3 className="text-2xl font-semibold">
                  Best French Courses Ever!
                </h3>
                <p className="text-gray-400 mt-2">
                  These courses have greatly improved my French skills. The instructors are top-notch, and the classes are interactive and engaging.
                </p>
                <p className="mt-4 font-semibold">Jean Dupont</p>
                <p className="text-gray-500">Business French</p>
              </div>
            </div>
          </div>

          <div className="relative bg-[#1f1f1f] text-white p-6 rounded-lg shadow-md">
            <div className="absolute top-0 right-0 w-8 h-8 bg-white flex items-center justify-center">
              <div className="w-4 h-4 bg-[#1f1f1f]"></div>
            </div>

            <div className="flex items-start">
              <img
                src="https://img.freepik.com/free-vector/smiling-man-with-glasses_1308-174409.jpg?t=st=1728394302~exp=1728397902~hmac=fe89cf0467271d2092dea194b663f5884053c9462b5a749d528bb1cc0f2c7d46&w=740"
                alt="Student"
                className="w-28 h-28 rounded-lg object-cover shadow-lg -mt-8 mr-6"
                style={{ marginBottom: "-16px" }}
              />

              <div>
                <div className="text-[#EF4135] mb-2 text-3xl">
                  <span>★★★★★</span>
                </div>
                <h3 className="text-2xl font-semibold">
                  Wonderful Learning Experience!
                </h3>
                <p className="text-gray-400 mt-2">
                  I enjoyed every lesson. The practical exercises and friendly environment made learning French so much easier.
                </p>
                <p className="mt-4 font-semibold">Marie Claire</p>
                <p className="text-gray-500">French for Kids</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
