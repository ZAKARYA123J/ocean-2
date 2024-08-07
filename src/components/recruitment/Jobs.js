import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import image from '../../assets/images/ab3.jpg';
import Navbar from '../navbar';
import Footer from '../footer';
import bahrain from '../../assets/images/contries/Bahrain.webp';
import canada from '../../assets/images/bg/codifyformatter.jpg';
import { FaAngleRight } from "react-icons/fa";
import Whatp from '../WhatsAppFloatingButton';

// Sample job data
const jobs = [
  {
    id: 1,
    title: 'Senior Product Manager',
    type: 'International',
    image: bahrain,
  },
  {
    id: 2,
    title: 'Junior Product Manager',
    type: 'National',
    image: canada,
  },
  {
    id: 3,
    title: 'Junior Product Manager',
    type: 'International',
    image: image,
  },
  // Ensure each job has a unique id
];

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
        <h2 className="text-3xl font-bold text-black ml-10 mt-20">
          Job Placement Agencies <span className="text-3xl font-bold text-blue-600">Ocean connect</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5 mt-2">
          {filteredJobs.map((job) => (
            <div key={job.id} className="w-full lg:max-w-full lg:flex bg-white shadow-md rounded-lg overflow-hidden">
              <div
                className="h-48 lg:h-auto lg:w-48 flex-none bg-cover"
                style={{ backgroundImage: `url(${job.image})` }}
                title={job.title}
              >
              </div>
              <div className="p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">{job.title}</div>
                  {/* The following lines have been removed because 'company' and 'tags' do not exist in 'job' */}
                  {/* <p className="text-gray-700 text-base">{`Company: ${job.company}`}</p>
                  <p className="text-gray-700 text-base">{`Type: ${job.type}`}</p>
                  <p className="text-gray-700 text-base">{`Tags: ${job.tags.join(', ')}`}</p> */}
                </div>
                <div className="flex justify-center lg:ml-10 lg:justify-end">
                  <p className="text-gray-700 lg:mt-4 lg:ml-10 text-custom w-24">{`${job.type}`}</p>
                  <button className="lg:ml-24 lg:mt-3 lg:h-12 p-2 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 flex items-center space-x-2">
                    <span>Demande</span>
                    <FaAngleRight />
                  </button>
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
