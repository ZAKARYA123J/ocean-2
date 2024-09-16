// ServicesSection.js
import React from 'react';
import { FaStethoscope, FaSyringe, FaBandAid, FaBaby, FaProcedures, FaHeartbeat, FaPrescriptionBottle, FaTint } from 'react-icons/fa';

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <h2 className="text-4xl font-bold text-blue-800 dark:text-blue-400 mb-12 text-center animate-fade-in">
        Our Care Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="group flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[rgb(54,172,255)] transform hover:-translate-y-2 transition-transform duration-300">
            <FaProcedures className="text-[rgb(54,172,255)] text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold text-[rgb(54,172,255)] mb-2">Patient Care</h3>
            <p className="text-center text-gray-700 dark:text-gray-300">
              Taking care of the patient during their illness.
            </p>
          </div>
          {/* Service 2 */}
          <div className="group flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[rgb(54,172,255)] transform hover:-translate-y-2 transition-transform duration-300">
            <FaBandAid className="text-[rgb(54,172,255)] text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold text-[rgb(54,172,255)] mb-2">Dressing Changes</h3>
            <p className="text-center text-gray-700 dark:text-gray-300">
              Changing dressings (surgical and dermatological, etc.).
            </p>
          </div>
          {/* Service 3 */}
          <div className="group flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[rgb(54,172,255)] transform hover:-translate-y-2 transition-transform duration-300">
            <FaSyringe className="text-[rgb(54,172,255)] text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold text-[rgb(54,172,255)] mb-2">Injections</h3>
            <p className="text-center text-gray-700 dark:text-gray-300">
              Types of intramuscular and subcutaneous injections.
            </p>
          </div>
          {/* Service 4 */}
          <div className="group flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[rgb(54,172,255)] transform hover:-translate-y-2 transition-transform duration-300">
            <FaPrescriptionBottle className="text-[rgb(54,172,255)] text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold text-[rgb(54,172,255)] mb-2">Medical Prescription</h3>
            <p className="text-center text-gray-700 dark:text-gray-300">
              With a medical prescription (mandatory).
            </p>
          </div>
          {/* Service 5 */}
          <div className="group flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[rgb(54,172,255)] transform hover:-translate-y-2 transition-transform duration-300">
            <FaBaby className="text-[rgb(54,172,255)] text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold text-[rgb(54,172,255)] mb-2">Umbilical Care</h3>
            <p className="text-center text-gray-700 dark:text-gray-300">
              Umbilical care for babies.
            </p>
          </div>
          {/* Service 6 */}
          <div className="group flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[rgb(54,172,255)] transform hover:-translate-y-2 transition-transform duration-300">
            <FaHeartbeat className="text-[rgb(54,172,255)] text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold text-[rgb(54,172,255)] mb-2">Postpartum Care</h3>
            <p className="text-center text-gray-700 dark:text-gray-300">
              Caring for the mother after childbirth.
            </p>
          </div>
          {/* Service 7 */}
          <div className="group flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[rgb(54,172,255)] transform hover:-translate-y-2 transition-transform duration-300">
            <FaTint className="text-[rgb(54,172,255)] text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold text-[rgb(54,172,255)] mb-2">IV Fluid Change</h3>
            <p className="text-center text-gray-700 dark:text-gray-300">
              Changing IV fluids.
            </p>
          </div>
          {/* Service 8 */}
          <div className="group flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[rgb(54,172,255)] transform hover:-translate-y-2 transition-transform duration-300">
            <FaStethoscope className="text-[rgb(54,172,255)] text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold text-[rgb(54,172,255)] mb-2">Blood Pressure & Glucose</h3>
            <p className="text-center text-gray-700 dark:text-gray-300">
              Monitoring blood pressure and blood glucose levels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
