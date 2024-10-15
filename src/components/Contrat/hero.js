import React from 'react';
import LeafletMap from './LeafletMap';
import { heroSectionContent } from './data'; 
import { contractCardSectionContent } from './data'; // Importing contractData


const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-200 via-purple-200 to-blue-300 py-6 text-black">
      <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
        <img
          className="w-full h-auto "
          src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png"
          alt="Background Pattern"
        />
      </div>
      <section className="mt-20 mb-5">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 lg:text-left mb-8 lg:mb-0">
              <div className="max-w-sm mx-auto sm:max-w-md md:max-w-full">
                <p className="font-bold leading-tight text-gray-900 sm:text-3xl md:text-3xl lg:text-4xl">
                  {heroSectionContent.title}
                </p>
                <p className="text-gray-700 sm:text-sm lg:text-lg mt-4 lg:mt-6">
                  {heroSectionContent.description}
                </p>
                <div className="mt-8 lg:mt-12 flex lg:items-center">
                  <div className="flex justify-center lg:justify-start -space-x-4 overflow-hidden">
                    {heroSectionContent.avatars.map((avatar, index) => (
                      <img
                        key={index}
                        className="inline-block rounded-full w-12 h-12 sm:w-10 sm:h-10"
                        src={avatar.src}
                        alt={avatar.alt}
                      />
                    ))}
                  </div>
                  <p className="mt-4 sm:text-sm lg:text-lg text-gray-900 lg:ml-4">
                    {heroSectionContent.joinText1} <span className="font-bold">{heroSectionContent.joinText2}</span>{heroSectionContent.joinText3}
                  </p>
                </div>
              </div>
              <div className="mt-8 sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5 lg:mt-12">
                {heroSectionContent.buttons.map((button, index) => (
                  <a
                    key={index}
                    href={button.link}
                    title=""
                    className={button.className}
                    role="button"
                  >
                    {button.icon && (
                      <svg
                        className="w-5 h-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d={button.icon.svgPath}
                        ></path>
                      </svg>
                    )}
                    {button.text}
                  </a>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-8 flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className='relative w-full h-auto sm:h-72 lg:h-auto max-w-lg z-0'>
                <LeafletMap contracts={contractCardSectionContent.contracts} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
