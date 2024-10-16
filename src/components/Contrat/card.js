import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaLanguage, FaCalendarAlt, FaMoneyBillWave, FaMedkit } from 'react-icons/fa';
import { MdDomainAdd } from "react-icons/md";
import { GrFormNext } from "react-icons/gr";
import { useTranslation } from 'react-i18next';

const loadContractData = async (lang) => {
  try {
    switch (lang) {
      case 'fr':
        return (await import('./dataFR')).contractCardSectionContent;
      case 'ar':
        return (await import('./dataAR')).contractCardSectionContent;
      case 'en':
      default:
        return (await import('./dataEN')).contractCardSectionContent;
    }
  } catch (error) {
    console.error("Error loading contract data:", error);
    return null;
  }
};

const ContractCardSection = () => {
  const { i18n } = useTranslation();
  const [contractContent, setContractContent] = useState(null);
  const currentLanguage = i18n.language;

  useEffect(() => {
    loadContractData(currentLanguage).then((data) => {
      console.log("Loaded contract content:", data); // Check what data is loaded
      setContractContent(data);
    });
  }, [currentLanguage]);

  if (!contractContent) {
    return <div></div>; 
  }

  if (!contractContent.contracts || contractContent.contracts.length === 0) {
    return <div></div>; 
  }

  return (
    <section className="py-8 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <h2 className="text-4xl text-center font-bold mb-2 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent dark:from-blue-500 dark:to-red-500 tracking-tight animate-slideDown">
          {contractContent?.title || "Default Title"}
        </h2>
        <p className="text-center text-gray-700 sm:text-sm lg:text-lg mt-2 mb-8 lg:mt-6">
          {contractContent?.description || "Default description"}
        </p>
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {contractContent.contracts.map((contract, index) => (
            contract ? (
              <li
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={contract?.imageUrl || '/path-to-default-image.jpg'} 
                  alt={contract?.country || 'Unknown'}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <div className="flex items-center mb-4">
                  <FaMapMarkerAlt className="text-2xl text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">{contract?.country || 'Unknown'}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <MdDomainAdd className="inline-block mr-2 text-blue-600" /><strong>Secteur:</strong> {contract?.sector || 'N/A'}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <FaLanguage className="inline-block mr-2 text-blue-600" /> <strong>Niveau Langue:</strong> {contract?.language || 'N/A'}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <FaCalendarAlt className="inline-block mr-2 text-blue-600" /> <strong>Contract Duration:</strong> {contract?.contractDuration || 'N/A'}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <FaMoneyBillWave className="inline-block mr-2 text-blue-600" /> <strong>Price:</strong> {contract?.contractPrice || 'N/A'}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <FaMedkit className="inline-block mr-2 text-blue-600" /> <strong>More:</strong> {contract?.additionalInfo || 'N/A'}
                </p>
                <button className="mt-2 px-8 py-2 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-full shadow-md hover:from-blue-500 hover:to-red-500 transition-colors duration-300">
                  <span className="flex items-center font-bold">
                    To apply <GrFormNext className='font-bold' />
                  </span>
                </button>
              </li>
            ) : null
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ContractCardSection;
