import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../navbar';
import Footer from '../footer';
import { FaAngleRight } from "react-icons/fa";
import Whatp from '../WhatsAppFloatingButton';
import { useTranslation } from 'react-i18next';

const loadClientData = (lang) => {
  switch (lang) {
    case 'fr':
      return import('../locales/fr/translation').then(module => module.jobsFR);
    case 'ar':
      return import('../locales/ar/translation').then(module => module.jobsAR);
    case 'en':
    default:
      return import('../locales/en/translation').then(module => module.jobsEN);
  }
};

const JobListings = () => {
  const [selectedType, setSelectedType] = useState('All');
  const { type } = useParams();
  const navigate = useNavigate();
  const [jobs, setJob] = useState([]);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadClientData(i18n.language);
      setJob(data);
    };
    fetchData();
  }, [i18n.language]);

  // Get unique job types for dropdown options
  const jobTypes = [...new Set(jobs.map(job => job.type)), 'All'];

  // Filter jobs based on selected type
  const filteredJobs = selectedType === 'All' ? jobs : jobs.filter(job => job.type === selectedType);

  // Effect to set the selected type based on URL parameter
  useEffect(() => {
    if (type && jobTypes.includes(type)) {
      setSelectedType(type);
    } else {
      setSelectedType('All');
    }
  }, [type, jobTypes]);

  // Handle dropdown change and update URL
  const handleTypeChange = (e) => {
    const newType = e.target.value;
    setSelectedType(newType);
    navigate(`/jobs/${newType}`);
  };

  return (
    <>
      <Navbar />
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{t('Job Listings')}</h2>
            <p className="text-gray-600">{t('Find your dream job with us')}</p>
          </div>

          {/* Dropdown for selecting job type */}
          <div className="mb-10 flex justify-center">
            <select
              value={selectedType}
              onChange={handleTypeChange}
              className="p-3 w-full max-w-md border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            >
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Job Listings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="h-40 bg-gray-200">
                  <img
                    className="w-full h-full object-cover"
                    src={job.image}
                    alt={`${job.title} company logo`}
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-blue-600 font-bold text-lg mb-1">{t(job.title)}</h3>
                    <p className="text-gray-600 text-sm mb-1"><strong>{t(job.menu1)}:</strong> {t(job.secteur)}</p>
                    <p className="text-gray-600 text-sm mb-1"><strong>{t(job.menu2)}:</strong> {t(job.niveaulanguage)}</p>
                    <p className="text-gray-600 text-sm mb-1"><strong>{t(job.menu3)}:</strong> {t(job.timevisa)}</p>
                    <p className="text-gray-600 text-sm mb-1"><strong>{t(job.menu4)}:</strong> {t(job.contratime)}</p>
                    <p className="text-gray-600 text-sm mb-1"><strong>{t(job.menu5)}:</strong> {t(job.pricecontrat)}</p>
                    <p className="text-gray-600 text-sm"><strong>{t(job.menu6)}:</strong> {t(job.more)}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-blue-600 font-semibold text-sm">{job.type}</span>
                    <a
                      href={job.link}
                      download="form"
                      className="inline-flex items-center px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                    >
                      <span>{t(job.action)}</span>
                      <FaAngleRight className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Whatp />
      <Footer />
    </>
  );
};

export default JobListings;
