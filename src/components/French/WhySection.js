import React from 'react';

const WhyUsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#0052A5] via-white to-[#EF4135]"> {/* Gradient inspired by the French flag */}
      <div className="container mx-auto lg:flex lg:justify-between lg:items-center lg:space-x-8">
        {/* Image on the left */}
        <div className="lg:w-1/2">
          <img
            className="rounded-lg shadow-md object-cover w-full h-[400px]"
            src="https://www.upload.ee/image/17219018/charming-student-posing-classroom.jpg" 
            alt="Why Inlingo French Courses"
          />
        </div>

        {/* Text on the right */}
        <div className="lg:w-1/2 bg-[#EF4135] text-white p-8 rounded-lg shadow-lg mt-8 lg:mt-0 border-l-8 border-[#0052A5]"> {/* Red background with blue border */}
          <h3 className="text-sm font-semibold mb-2">➤ WHY US</h3>
          <h2 className="text-4xl font-bold mb-4">Why Choose Inlingo French Courses?</h2>
          <p className="mb-6">
            Discover the excellence of our French courses, designed to provide you with a tailored learning experience. Our methodology adapts to your individual level and learning preferences.
          </p>
          <p>
            From beginners to advanced learners, we offer a comprehensive educational approach to help you achieve your language goals and flourish in French-speaking environments.
          </p>
        </div>
      </div>

      {/* Benefits Grid - 2x2 layout */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        
        {/* Benefit 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex border-l-4 border-[#EF4135]"> {/* Red border */}
          <div className="flex-shrink-0 mr-4">
            <svg className="w-12 h-12 text-[#EF4135]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2c-2.761 0-5 2.239-5 5v5h-1c-1.104 0-2 .896-2 2v7c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2v-7c0-1.104-.896-2-2-2h-1v-5c0-2.761-2.239-5-5-5zm3 5v5h-6v-5c0-1.654 1.346-3 3-3s3 1.346 3 3zm-5 9h4v2h-4v-2z"/></svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Experienced Instructors</h3>
            <p className="text-gray-600 mt-2">
              Our certified and native-speaking teachers provide immersive and effective French lessons tailored to your needs.
            </p>
          </div>
        </div>

        {/* Benefit 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex border-l-4 border-[#EF4135]">
          <div className="flex-shrink-0 mr-4">
            <svg className="w-12 h-12 text-[#EF4135]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 2h-16c-1.104 0-2 .896-2 2v7c0 1.104.896 2 2 2v9c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-9c1.104 0 2-.896 2-2v-7c0-1.104-.896-2-2-2zm-9 18h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm5-5h-14v-7h14v7z"/></svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Interactive Learning</h3>
            <p className="text-gray-600 mt-2">
              Engage with interactive materials for a dynamic and practical learning experience.
            </p>
          </div>
        </div>

        {/* Benefit 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex border-l-4 border-[#EF4135]">
          <div className="flex-shrink-0 mr-4">
            <svg className="w-12 h-12 text-[#EF4135]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.29 5.57l1.14-2.28a1.999 1.999 0 0 0-1.79-2.86h-15.5a1.998 1.998 0 0 0-1.79 2.86l1.14 2.28h-2.65v2h.992l2.73 10.26c.369 1.383 1.606 2.38 3.084 2.44h8.26c1.478-.06 2.715-1.057 3.084-2.44l2.73-10.26h.992v-2h-2.65zm-15.61-1.57h14.64l-.68 1.37h-13.28l-.68-1.37zm11.94 12.88h-8.26l-1.61-6.07h11.48l-1.61 6.07z"/></svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Personalized Learning</h3>
            <p className="text-gray-600 mt-2">
              Tailored courses that match the specific progress and needs of each student.
            </p>
          </div>
        </div>

        {/* Benefit 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex border-l-4 border-[#EF4135]">
          <div className="flex-shrink-0 mr-4">
            <svg className="w-12 h-12 text-[#EF4135]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4h-4v-1.5c0-1.379-1.121-2.5-2.5-2.5h-3c-1.379 0-2.5 1.121-2.5 2.5v1.5h-4c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2v-14c0-1.104-.896-2-2-2zm-9 0v-1.5c0-.275.225-.5.5-.5h3c.275 0 .5.225.5.5v1.5h-4z"/></svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Accredited Certifications</h3>
            <p className="text-gray-600 mt-2">
              Earn globally recognized certificates to advance your career opportunities.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default WhyUsSection;
