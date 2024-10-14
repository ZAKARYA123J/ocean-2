// src/components/ContractWorksPage.js

import React, { useState } from 'react';
import Navbar from '../navbar';
import Footer from '../foooter';
import Modal from '../Modal';
import HeroSection from './hero';
import ContractCardSection from './card';
import QuestionSection from './questions';
import StepsSection from './steps';
import GetInTouch from '../getInTuoch';

import {
  FaTimes, FaPhoneAlt, FaEnvelope, FaFileAlt, FaClipboardList, FaEnvelopeOpenText, FaCheckCircle,
  FaQuoteLeft, FaMapMarkerAlt, FaCalendarAlt, FaMoneyBillWave, FaLanguage, FaHome, FaMedkit
} from 'react-icons/fa';
import { contractData, testimonials, faqs } from './data';





const ContractWorksPage = () => {

  const [selectedContract, setSelectedContract] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showConsultationModal, setShowConsultationModal] = useState(false);



  const closeModal = () => setShowModal(false);

  return (
    <>
      <Navbar />
      <HeroSection />
      <ContractCardSection />
      <StepsSection/>
      <QuestionSection />
      <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        {/* Success Stories Section */}
        <section className="py-16 bg-white dark:bg-gray-800 text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent dark:from-blue-500 dark:to-red-500 tracking-tight animate-slideDown">
            Success Stories
          </h2>
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md flex flex-col items-center">
                  <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <FaQuoteLeft className="text-3xl text-blue-600 dark:text-blue-400 mb-2" />
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-center">
                    "{testimonial.quote}"
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process Section */}
        {/* <section className="py-16 bg-gray-100 dark:bg-gray-900 text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent dark:from-blue-500 dark:to-red-500 tracking-tight animate-fadeIn">
            How to Apply
          </h2>
          <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Follow these steps to apply for your desired contract. Ensure all your documents are ready before you start.
            </p>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 text-left">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <FaClipboardList className="text-4xl text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Step 1: Select a Contract</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Choose a contract that aligns with your skills and career goals.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <FaFileAlt className="text-4xl text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Step 2: Review Details</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Check the contract details and ensure you meet the eligibility requirements.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <FaEnvelopeOpenText className="text-4xl text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Step 3: Learn More & Apply</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Click "View Details" on the contract card to learn more and begin your application.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <FaCheckCircle className="text-4xl text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Step 4: Submit Application</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Complete the application form and upload the required documents to finalize your submission.
                </p>
              </div>
            </div>
          </div>
        </section> */}
        
        <GetInTouch />


        {/* Modals */}
        {showModal && selectedContract && (
          <Modal contract={selectedContract} onClose={closeModal} />
        )}

        <Footer />
      </div>
    </>
  );
};

export default ContractWorksPage;
