import React from 'react';

const WhyUsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto lg:flex lg:justify-between lg:items-center lg:space-x-8">
        {/* Image on the left with NO hover effect */}
        <div className="lg:w-1/2">
          <img
            className="rounded-lg shadow-md object-cover w-full h-[400px]"
            src="https://img.freepik.com/free-photo/front-view-young-female-with-packages-dark-wall-holiday-gift-present_140725-61139.jpg?ga=GA1.1.1388010401.1725554040&semt=ais_hybrid"
            alt="Why Learn Italian with Inlingo"
          />
        </div>

        {/* Text on the right */}
        <div className="lg:w-1/2 bg-[#004400] text-white p-8 rounded-lg shadow-lg mt-8 lg:mt-0">
          <h3 className="text-sm font-semibold mb-2 text-[#FF4C4C]">➤ WHY US</h3>
          <h2 className="text-4xl font-bold mb-4">Why Inlingo Italian Courses?</h2>
          <p className="mb-6">
            Nos cours d'italien sont conçus pour vous offrir une expérience d'apprentissage immersive et complète. Que vous soyez débutant ou apprenant avancé, nos cours sont adaptés à vos besoins pour vous aider à atteindre la fluidité.
          </p>
          <p>
            Avec des leçons interactives, une attention personnalisée et des certifications reconnues mondialement, nous nous assurons que nos étudiants apprennent non seulement la langue mais aussi la culture italienne.
          </p>
        </div>
      </div>

      {/* Benefits Grid - 2x2 layout */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        
        {/* Benefit 1 */}
        <div className="bg-[#E6E6E6] p-6 rounded-lg shadow-md flex">
          <div className="flex-shrink-0 mr-4">
            <svg className="w-12 h-12 text-[#004400]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 2c-2.761 0-5 2.239-5 5v5h-1c-1.104 0-2 .896-2 2v7c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2v-7c0-1.104-.896-2-2-2h-1v-5c0-2.761-2.239-5-5-5zm3 5v5h-6v-5c0-1.654 1.346-3 3-3s3 1.346 3 3zm-5 9h4v2h-4v-2z"/>
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black">Instructeurs Natifs</h3>
            <p className="text-gray-800 mt-2">
              Notre équipe d'enseignants natifs garantit une expérience d'apprentissage authentique et immersive.
            </p>
          </div>
        </div>

        {/* Benefit 2 */}
        <div className="bg-[#E6E6E6] p-6 rounded-lg shadow-md flex">
          <div className="flex-shrink-0 mr-4">
            <svg className="w-12 h-12 text-[#004400]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20 2h-16c-1.104 0-2 .896-2 2v7c0 1.104.896 2 2 2v9c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-9c1.104 0 2-.896 2-2v-7c0-1.104-.896-2-2-2zm-9 18h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm5-5h-14v-7h14v7z"/>
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black">Immersion Culturelle</h3>
            <p className="text-gray-800 mt-2">
              Participez à des leçons qui incluent des contextes culturels réels pour une expérience pratique et immersive.
            </p>
          </div>
        </div>

        {/* Benefit 3 */}
        <div className="bg-[#E6E6E6] p-6 rounded-lg shadow-md flex">
          <div className="flex-shrink-0 mr-4">
            <svg className="w-12 h-12 text-[#004400]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20.29 5.57l1.14-2.28a1.999 1.999 0 0 0-1.79-2.86h-15.5a1.998 1.998 0 0 0-1.79 2.86l1.14 2.28h-2.65v2h.992l2.73 10.26c.369 1.383 1.606 2.38 3.084 2.44h8.26c1.478-.06 2.715-1.057 3.084-2.44l2.73-10.26h.992v-2h-2.65zm-15.61-1.57h14.64l-.68 1.37h-13.28l-.68-1.37zm11.94 12.88h-8.26l-1.61-6.07h11.48l-1.61 6.07z"/>
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black">Programmes Personnalisés</h3>
            <p className="text-gray-800 mt-2">
              Des cours conçus pour s'adapter aux besoins et objectifs individuels de chaque étudiant, assurant un apprentissage efficace.
            </p>
          </div>
        </div>

        {/* Benefit 4 */}
        <div className="bg-[#E6E6E6] p-6 rounded-lg shadow-md flex">
          <div className="flex-shrink-0 mr-4">
            <svg className="w-12 h-12 text-[#004400]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M20 4h-4v-1.5c0-1.379-1.121-2.5-2.5-2.5h-3c-1.379 0-2.5 1.121-2.5 2.5v1.5h-4c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2v-14c0-1.104-.896-2-2-2zm-9 0v-1.5c0-.275.225-.5.5-.5h3c.275 0 .5.225.5.5v1.5h-4z"/>
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-black">Programmes Certifiés</h3>
            <p className="text-gray-800 mt-2">
              Obtenez des certifications reconnues mondialement pour améliorer vos qualifications en langue italienne.
            </p>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default WhyUsSection;
