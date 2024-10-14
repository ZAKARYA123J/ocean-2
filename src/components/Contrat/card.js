import React from 'react';
import { FaMapMarkerAlt, FaLanguage, FaCalendarAlt, FaMoneyBillWave, FaHome, FaMedkit } from 'react-icons/fa';
import { GrFormNext } from "react-icons/gr";
import { contractData } from './data'; // Importing contractData

const ContractCardSection = () => {
  return (
    <section className="py-8 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl text-center font-bold mb-12 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent dark:from-blue-500 dark:to-red-500 tracking-tight animate-slideDown">
        Countries available for overseas job search
      </h2>
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {contractData.map((contract) => (
            <li
              key={contract.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <img
                src={contract.imageUrl}
                alt={contract.country}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-2xl text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">{contract.country}</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Secteur:</strong> {contract.sector}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2"><FaLanguage className="inline-block mr-2 text-blue-600" /> <strong>Niveau Langue:</strong> {contract.language}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2"><FaCalendarAlt className="inline-block mr-2 text-blue-600" /> <strong>Visa Duration:</strong> {contract.visaDuration}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2"><FaCalendarAlt className="inline-block mr-2 text-blue-600" /> <strong>Contract Duration:</strong> {contract.contractDuration}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2"><FaMoneyBillWave className="inline-block mr-2 text-blue-600" /> <strong>Price:</strong> {contract.contractPrice}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4"><FaMedkit className="inline-block mr-2 text-blue-600" /> <strong>More:</strong> {contract.additionalInfo}</p>
              <button className="mt-2 px-8 py-2 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-full shadow-md hover:from-blue-500 hover:to-red-500 transition-colors duration-300">
                <span className="flex items-center font-bold">
                  To apply <GrFormNext className='font-bold' />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default ContractCardSection;
