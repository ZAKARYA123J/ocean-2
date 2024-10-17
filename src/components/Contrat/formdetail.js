import React, { useEffect, useState } from 'react';
import { BiSolidSend } from "react-icons/bi";
import { useTranslation } from 'react-i18next';

const loadFormData = (lang) => {
  switch (lang) {
    case 'fr':
      return import('./dataFR').then((module) => module.formSectionData);
    case 'ar':
      return import('./dataAR').then((module) => module.formSectionData);
    case 'en':
    default:
      return import('./dataEN').then((module) => module.formSectionData);
  }
};



const FormSection = () => {
    const { i18n } = useTranslation(); // i18n for handling language change
    const [FormData, setFormData] = useState(null); // State for holding steps content
    const currentLanguage = i18n.language; // Get current language
  
    useEffect(() => {
      // Load steps content based on the current language
      loadFormData(currentLanguage).then((data) => {
        setFormData(data);
      });
    }, [currentLanguage]);
  
    if (!FormData) {
      return <div>Loading...</div>; // Show a loading state until content is loaded
    }
  
    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <div className="w-full mx-auto max-w-screen-lg px-2 sm:px-6 lg:px-4">
                <div className="group grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative flex items-end flex-col p-6 before:block before:absolute before:h-1/6 before:w-4 before:bg-gradient-to-r from-blue-600 to-red-600 before:bottom-0 before:left-0 before:rounded-lg before:transition-all group-hover:before:bg-orange-300 overflow-hidden">
                        <div className="absolute top-0 left-0 bg-gradient-to-r from-blue-600 to-red-600 w-full sm:w-4/6 px-6 sm:px-12 py-10 sm:py-14 flex flex-col justify-center rounded-xl group-hover:bg-sky-600 transition-all">
                            <span className="block mb-6 sm:mb-10 font-bold text-orange-300">{FormData.subtitle}</span>
                            <h2 className="text-white font-bold text-xl sm:text-3xl">
                                {FormData.title}
                            </h2>
                        </div>
                        <a className="font-bold text-sm flex mt-2 mb-4 sm:mb-8 items-center gap-2" href="#">
                            <span>MORE ABOUT US</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                        <div className="rounded-xl overflow-hidden">
                            <img className="w-full object-cover" src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fyes.jpg?alt=media&token=08dbeeed-dc78-44c8-8033-806c21ae67fc" alt="Sample" />
                        </div>
                    </div>
                    <div>
                        <div className="p-6">
                            {FormData.content.map((item, index) => (
                                <p 
                                    key={index} 
                                    className={`mb-4 text-gray-600 flex items-start ${item.isBold ? 'font-semibold' : ''}`}
                                >
                                    {item.icon && <BiSolidSend className="mr-2 text-md shrink-0" />}
                                    <span>{item.text}</span>
                                </p>
                            ))}
                            <h3 className="mb-4 font-semibold text-gray-400">{FormData.downloadText}</h3>
                            <div className="mt-4 sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5 lg:mt-12">
                                <a
                                    href={FormData?.link}
                                    title="Download Form"
                                    className='inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-red-600 border rounded-xl font-pj hover:bg-gray-600 hover:to-red-500 transform hover:scale-105'
                                    role="button" 
                                    download="form"
                                >
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
                                            d='M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4'
                                        ></path>
                                    </svg>
                                    {FormData.buttonText}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormSection;
