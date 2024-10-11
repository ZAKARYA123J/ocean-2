// src/components/ContractWorksPage.js

import React, { useState } from 'react';
import Navbar from '../navbar';
import Footer from '../foooter';
import Modal from '../Modal';
import HeroSection from './hero';
import ContractCardSection from './card'

import {
  FaTimes, FaPhoneAlt, FaEnvelope, FaFileAlt, FaClipboardList, FaEnvelopeOpenText, FaCheckCircle,
  FaQuoteLeft, FaMapMarkerAlt, FaCalendarAlt, FaMoneyBillWave, FaLanguage, FaHome, FaMedkit
} from 'react-icons/fa';
import { contractData, testimonials ,faqs } from './data';


const companyInfo = {
  name: "Your Company Name",
  address: "1234 Your Address, City, Country",
  email: "info@yourcompany.com",
  phone: "+123 456 7890",
};



const ContractWorksPage = () => {

  const [selectedContract, setSelectedContract] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showConsultationModal, setShowConsultationModal] = useState(false);



  const closeModal = () => setShowModal(false);

  return (
    <>
    <Navbar  />
    <HeroSection />
    <ContractCardSection/>
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
      <section className="py-16 bg-gray-100 dark:bg-gray-900 text-center">
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
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900 text-center">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent dark:from-blue-500 dark:to-red-500 tracking-tight animate-slideDown">
          Frequently Asked Questions
        </h2>
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group p-6 rounded-lg transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <summary className="flex items-center justify-between cursor-pointer p-2 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <span className="ml-2 flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <div className="mt-4 text-left text-gray-700 dark:text-gray-300 leading-relaxed border-t pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900 text-center">
        <h2 className="text-4xl font-bold mb-8">Stay Updated with New Contracts</h2>
        <form className="flex flex-col items-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-md hover:from-blue-500 hover:to-red-500 transition-all duration-300 transform hover:scale-105">
            Subscribe
          </button>
        </form>
      </section>

      {/* Virtual Consultation */}
      <section className="py-16 bg-white dark:bg-gray-800 text-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-700 p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Schedule a Virtual Consultation
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Have questions? Schedule a virtual consultation with our experts to discuss your options and get personalized advice.
          </p>
          <button
            onClick={() => setShowConsultationModal(true)}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-full hover:bg-gradient-to-l hover:from-blue-500 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Book Now
          </button>

          {/* Consultation Modal */}
          {showConsultationModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-2xl max-w-md w-full relative">
                <button
                  onClick={() => setShowConsultationModal(false)}
                  className="absolute top-4 right-4 text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors duration-300"
                >
                  <FaTimes size={20} />
                </button>
                <h3 className="text-2xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
                  Contact Information
                </h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400 mr-3 mt-1" />
                    <p><strong>Address:</strong> {companyInfo.address}</p>
                  </div>
                  <div className="flex items-start">
                    <FaEnvelope className="text-blue-600 dark:text-blue-400 mr-3 mt-1" />
                    <p><strong>Email:</strong> <a href={`mailto:${companyInfo.email}`} className="text-blue-500 hover:underline">{companyInfo.email}</a></p>
                  </div>
                  <div className="flex items-start">
                    <FaPhoneAlt className="text-blue-600 dark:text-blue-400 mr-3 mt-1" />
                    <p><strong>Phone:</strong> {companyInfo.phone}</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <button
                    onClick={() => setShowConsultationModal(false)}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition duration-300 ease-in-out shadow-md hover:shadow-lg"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

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
