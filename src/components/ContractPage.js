// src/components/ContractWorksPage.js

import React, { useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Modal from './Modall'; // Correct modal import
import LeafletMap from './LeafletMap'; // Importing the LeafletMap component
import {
  FaTimes, FaPhoneAlt, FaEnvelope, FaFileAlt, FaClipboardList, FaEnvelopeOpenText, FaCheckCircle,
  FaQuoteLeft, FaMapMarkerAlt, FaCalendarAlt, FaMoneyBillWave, FaLanguage, FaHome, FaMedkit
} from 'react-icons/fa';
import { contractData, testimonials } from './data'; // Importing data from data.js

const companyInfo = {
  name: "Your Company Name",
  address: "1234 Your Address, City, Country",
  email: "info@yourcompany.com",
  phone: "+123 456 7890",
};

const faqs = [
  {
    question: 'What documents are required to apply for a contract?',
    answer: 'You will need to provide your identification documents, proof of qualifications, and any relevant certificates. Specific requirements may vary depending on the contract and country.',
  },
  {
    question: 'How long does it take to process my application?',
    answer: 'The processing time can vary, but it typically takes between 2 to 4 weeks. You will be notified via email once your application status is updated.',
  },
  {
    question: 'Is knowledge of a foreign language mandatory for all contracts?',
    answer: 'Not all contracts require knowledge of a foreign language. Please review the specific language requirements listed in the contract details.',
  },
  {
    question: 'What support will I receive after securing a contract?',
    answer: 'We provide ongoing support including help with visa applications, travel arrangements, and local orientation to ensure a smooth transition.',
  },
  {
    question: 'Are there any fees involved in applying for a contract?',
    answer: 'Yes, there are application fees which vary depending on the contract and country. The contract price listed includes all applicable fees.',
  },
  {
    question: 'Can I apply for multiple contracts at the same time?',
    answer: 'Yes, you can apply for multiple contracts. However, we recommend focusing on the ones that best match your skills and qualifications.',
  },
];

const ContractWorksPage = () => {
  const [contracts] = useState(contractData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCountry, setFilterCountry] = useState('');
  const [selectedContract, setSelectedContract] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showConsultationModal, setShowConsultationModal] = useState(false);

  // Filter and Search with safety checks
  const filteredContracts = contracts.filter(contract => {
    const country = contract.country || ''; // Safe check for undefined
    const jobTitle = contract.jobTitle || ''; // Safe check for undefined
    const sector = contract.sector || ''; // Safe check for undefined

    return (
      country.toLowerCase().includes(filterCountry.toLowerCase()) &&
      (jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sector.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const openModal = (contract) => {
    setSelectedContract(contract);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Navbar />

      {/* Hero Section with Map */}
      <section className="relative flex flex-col items-center justify-center h-screen text-white text-center bg-gradient-to-r from-blue-400 to-blue-600">
        <LeafletMap contracts={contractData} />
        <div className="relative z-10 p-8">
          <h1 className="text-5xl font-extrabold mb-4 animate-fadeIn">Explore Contract Opportunities Abroad</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-slideUp">
            Discover global job opportunities tailored to your skills. Apply now and start your journey with our trusted contracts.
          </p>
          <a href="#apply" className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            Get Started Today
          </a>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="flex justify-center mb-8">
            <input
              type="text"
              placeholder="Search by job title or sector..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 mr-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={filterCountry}
              onChange={(e) => setFilterCountry(e.target.value)}
              className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All Countries</option>
              <option value="Croatia">Croatia</option>
              <option value="Germany">Germany</option>
              <option value="Belgium">Belgium</option>
              <option value="Italy">Italy</option>
              <option value="Spain">Spain</option>
            </select>
          </div>
        </div>
      </section>

      {/* Contract Cards */}
      <section className="py-8 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredContracts.map((contract) => (
              <li
                key={contract.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <FaMapMarkerAlt className="text-2xl text-blue-600 mr-2" />
                  <h3 className="text-xl font-semibold">{contract.country}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Secteur:</strong> {contract.sector}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-2"><FaLanguage className="inline-block mr-2 text-blue-600" /> <strong>Niveau Langue:</strong> {contract.language}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-2"><FaCalendarAlt className="inline-block mr-2 text-blue-600" /> <strong>Visa Duration:</strong> {contract.visaDuration}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-2"><FaCalendarAlt className="inline-block mr-2 text-blue-600" /> <strong>Contract Duration:</strong> {contract.contractDuration}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-2"><FaMoneyBillWave className="inline-block mr-2 text-blue-600" /> <strong>Price:</strong> {contract.contractPrice}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4"><FaHome className="inline-block mr-2 text-blue-600" /><FaMedkit className="inline-block mr-2 text-blue-600" /> <strong>More:</strong> {contract.additionalInfo}</p>
                <button onClick={() => openModal(contract)} className="mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-full shadow-md hover:from-blue-500 hover:to-red-500 transition-colors duration-300">
                  View Details
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

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
  );
};

export default ContractWorksPage;
