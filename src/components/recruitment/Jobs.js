import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import image from '../../assets/images/ab3.jpg';
import Navbar from '../navbar';
import Footer from '../footer';
import { FaAngleRight } from "react-icons/fa";
import Whatp from '../WhatsAppFloatingButton';
import { jobs } from '../../data/data';

// Sample job data


const JobListings = () => {
  const [selectedType, setSelectedType] = useState('All');
  const { type } = useParams();
  const navigate = useNavigate();

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
        <h2 className="text-3xl font-bold text-black mb-4 mt-20">
          Job Placement Agencies <span className="text-3xl font-bold text-blue-600">Ocean connect</span>
        </h2>

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


        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-1 xl:grid-cols-5 gap-5">
          {filteredJobs.map((job) => (
            <div key={job.id} className="lg:w-2/3  mx-auto lg:ml-24 lg:h-24 lg:max-w-full lg:flex bg-white shadow-md rounded-lg overflow-hidden" >
              <img
                className="h-48 lg:w-24 object-cover lg:h-24"
                src={job.image}
                alt={job.title}
              />
              <div className="p-2  justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">{job.title}</div>
                  <p>{job.secteur}</p>
                  <p>{job.niveaulanguage}</p>
                  <p>{job.timevisa}</p>
                  <p>{job.seccontratimeteur}</p>
                  <p>{job.pricecontrat}</p>

                </div>
              </div>
              <div className="flex justify-center lg:ml-10 lg:justify-end">
              <p className="text-gray-700 lg:mt-4 mr-10 lg:ml-10 text-custom text-lg font-semibold w-24">{`${job.type}`}</p>
                <button className="lg:ml-24 mb-4  lg:mt-3 lg:h-12 p-2 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 flex items-center space-x-2">
  <span>Demande</span>
  <FaAngleRight />
</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Whatp/>
      <Footer />
    </>
  );
};

export default JobListings;
