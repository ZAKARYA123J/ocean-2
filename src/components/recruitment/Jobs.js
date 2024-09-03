import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '../navbar';
import Footer from '../footer';
import { FaAngleRight } from "react-icons/fa";
import Whatp from '../WhatsAppFloatingButton';
import { useTranslation } from 'react-i18next';

// Function to dynamically load job data based on the selected language
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
  const filteredJobs = selectedType === 'All'
    ? jobs
    : jobs.filter(job => job.type === selectedType);

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
      <div className="p-10 bg-gray-100">
        <Navbar />
     
          {filteredJobs.map((item, index) => (
                       <h2 className="text-3xl font-bold text-black mb-4 mt-20">
                       {t(item.job)} <span className="text-3xl font-bold text-blue-600">{t(item.ocean)}</span>
                     </h2>
                    ))}
        {/* Dropdown for selecting job type */}
        <div className="mb-8 flex justify-center">
          <select
            value={selectedType}
            onChange={handleTypeChange}
            className="p-2 w-full max-w-md border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {jobTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-8 p-3">
          {filteredJobs.map((job) => (
            <div key={job.id} className="flex flex-col lg:flex-row bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="lg:w-1/4">
                <img
                  className="w-full h-32 lg:h-full object-cover"
                  src={job.image}
                  alt={`${job.title} company logo`}
                />
              </div>
              <div className="p-4 flex flex-col justify-between lg:w-3/4">
                <div>
                  <h3 className="text-blue-600 font-bold text-lg mb-1">{t(job.title)}</h3>
                  <p className="text-gray-600 text-sm mb-1"><strong>{t(job.menu1)}</strong> {t(job.secteur)}</p>
                  <p className="text-gray-600 text-sm mb-1"><strong>{t(job.menu2)}</strong> {t(job.niveaulanguage)}</p>
                  <p className="text-gray-600 text-sm mb-1"><strong>{t(job.menu3)}</strong> {t(job.timevisa)}</p>
                  <p className="text-gray-600 text-sm mb-1"><strong>{t(job.menu4)}</strong> {t(job.contratime)}</p>
                  <p className="text-gray-600 text-sm mb-3"><strong>{t(job.menu5)}</strong> {t(job.pricecontrat)}</p>
                  <p className="text-gray-600 text-sm mb-3"><strong>{t(job.menu6)}</strong> {t(job.more)}</p>
                </div>
                <div className="flex items-center justify-between">
                 <p className="text-blue-600 font-semibold text-sm">{job.type}</p>
                 {/* if  (job.id === 1 ) { */}
                 <a href={`${job.link}`}  download="form"  >
                 <button  className="inline-flex items-center justify-center px-3 py-2 bg-blue-500 text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                      <span>{job.action}</span>
                      <FaAngleRight className="ml-2" />
                 </button>
                 </a>
                 {/* <Link   to={`${job.link}`} className="inline-flex items-center justify-center px-3 py-2 bg-blue-500 text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                   <span>{job.action}</span>
                           <FaAngleRight className="ml-2" />
                  </Link> */}

                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Whatp />
      <Footer />
    </>
  );
};

export default JobListings;
