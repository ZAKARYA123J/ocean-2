import React from 'react';
import LeafletMap from './LeafletMap';
import { contractData } from './data'; // Importing contractData

const HeroSection = () => {
    return (
        <div className="relative bg-gradient-to-br from-blue-200 via-purple-200 to-blue-300 py-6 text-black">
            <div className="absolute bottom-0 right-0 overflow-hidden lg:inset-y-0">
                <img
                    className="w-auto h-full"
                    src="https://d33wubrfki0l68.cloudfront.net/1e0fc04f38f5896d10ff66824a62e466839567f8/699b5/images/hero/3/background-pattern.png"
                    alt="Background Pattern"
                />
            </div>
            <section className="relative py-12 sm:py-16 lg:pt-36 lg:pb-16">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        {/* Text Section */}
                        <div className="lg:w-1/2 lg:text-left mb-8 lg:mb-0">
                            <div className="max-w-sm mx-auto sm:max-w-md md:max-w-full">
                                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-6xl">
                                    Get meaningful feedback on your code
                                </h1>
                                <p className="text-lg text-gray-700 sm:text-lg lg:text-2xl mt-4 lg:mt-6">
                                    Are you thinking about forming an international contract? Not sure where to start or what to take into consideration? When contracting internationally, it is important to think about the various elements of the contract.
                                </p>
                                <div className="mt-8 lg:mt-12 lg:flex lg:items-center">
                                    {/* Avatar Section */}
                                    <div className="flex justify-center lg:justify-start -space-x-4 overflow-hidden">
                                        <img className="inline-block rounded-full w-12 h-12 sm:w-10 sm:h-10" src="https://d33wubrfki0l68.cloudfront.net/3bfa6da479d6b9188c58f2d9a8d33350290ee2ef/301f1/images/hero/3/avatar-male.png" alt="Avatar 1" />
                                        <img className="inline-block rounded-full w-12 h-12 sm:w-10 sm:h-10" src="https://d33wubrfki0l68.cloudfront.net/b52fa09a115db3a80ceb2d52c275fadbf84cf8fc/7fd8a/images/hero/3/avatar-female-1.png" alt="Avatar 2"/>
                                        <img className="inline-block rounded-full w-12 h-12 sm:w-10 sm:h-10" src="https://d33wubrfki0l68.cloudfront.net/8a2efb13f103a5ae2909e244380d73087a9c2fc4/31ed6/images/hero/3/avatar-female-2.png" alt="Avatar 3"/>
                                    </div>
                                    <p className="mt-4 text-lg text-gray-900 lg:ml-4">
                                        Join with <span className="font-bold">600+ Workers abroad</span> and start getting feedback right now
                                    </p>
                                </div>
                            </div>
                            {/* Buttons */}
                            <div className="mt-8 sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5 lg:mt-12">
                                <a href="#" title="" className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-red-600 border rounded-xl font-pj hover:bg-gray-600 hover:to-red-500 transform hover:scale-105" role="button">
                                    Contact US
                                </a>
                                <a href="#" title="" className="inline-flex items-center px-4 py-4 text-lg font-bold transition-all duration-200 bg-transparent border  hover:bg-gradient-to-r from-blue-600 to-red-600 hover:text-white hover:to-red-500 transform hover:scale-105" role="button">
                                    <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                                    </svg>
                                    Download Form
                                </a>
                            </div>
                        </div>
                        {/* Map Section */}
                        <div className="lg:w-1/2 lg:pl-8 flex justify-center lg:justify-end">
                            <div className="relative w-full h-64 sm:h-72 lg:h-[400px] max-w-lg z-0"> {/* Add z-0 */}
                                <LeafletMap contracts={contractData} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
