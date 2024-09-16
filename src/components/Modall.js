// src/components/Modal.js

import React from 'react';
import { FaTimes, FaMapMarkerAlt, FaCalendarAlt, FaMoneyBillWave, FaInfoCircle } from 'react-icons/fa';

const Modal = ({ contract, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl max-w-lg w-full relative transform transition-all duration-500 ease-in-out scale-105 opacity-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors duration-300"
        >
          <FaTimes size={20} />
        </button>
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
          {contract.country} Contract Details
        </h2>
        <div className="space-y-4 text-left">
          <div className="flex items-start">
            <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 mr-3 mt-1" />
            <p><strong>Sector:</strong> {contract.sector}</p>
          </div>
          <div className="flex items-start">
            <FaCalendarAlt className="text-blue-600 dark:text-blue-400 mr-3 mt-1" />
            <p><strong>Language:</strong> {contract.language}</p>
          </div>
          <div className="flex items-start">
            <FaCalendarAlt className="text-blue-600 dark:text-blue-400 mr-3 mt-1" />
            <p><strong>Visa Duration:</strong> {contract.visaDuration}</p>
          </div>
          <div className="flex items-start">
            <FaCalendarAlt className="text-blue-600 dark:text-blue-400 mr-3 mt-1" />
            <p><strong>Contract Duration:</strong> {contract.contractDuration}</p>
          </div>
          <div className="flex items-start">
            <FaMoneyBillWave className="text-green-600 dark:text-green-400 mr-3 mt-1" />
            <p><strong>Price:</strong> {contract.contractPrice}</p>
          </div>
          <div className="flex items-start">
            <FaInfoCircle className="text-blue-600 dark:text-blue-400 mr-3 mt-1" />
            <p><strong>Additional Info:</strong> {contract.additionalInfo}</p>
          </div>
          <div className="flex items-start">
            <FaInfoCircle className="text-blue-600 dark:text-blue-400 mr-3 mt-1" />
            <p><strong>International:</strong> {contract.international}</p>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition duration-300 ease-in-out shadow-md hover:shadow-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
