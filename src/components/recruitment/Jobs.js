import React from 'react';
import image from '../../assets/images/ab3.jpg';
import Navbar from '../navbar';
import Footer from '../footer';
import bahrain from '../../assets/images/contries/Bahrain.webp';
import canada from '../../assets/images/bg/codifyformatter.jpg'
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
    type: 'Ocean connect',
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
  return (
    <>
      <div className="p-10 bg-gray-100">
        <Navbar />
        <h2 className="text-3xl font-bold text-black mb-4 mt-20">
          Job Placement Agencies <span className="text-3xl font-bold text-blue-600">Ocean connect</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
          {jobs.map((job) => (
            <div key={job.id} className="lg:w-2/3 mx-auto lg:ml-24 lg:h-24 lg:max-w-full lg:flex bg-white shadow-md rounded-lg overflow-hidden">
              <img
                className="h-48 lg:w-24 object-cover lg:h-24"
                src={job.image}
                alt={job.title}
              />
              <div className="p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                  <div className="text-gray-900 font-bold text-xl mb-2">{job.title}</div>
                  <p className="text-gray-700 text-base">{`Type: ${job.type}`}</p>
                </div>
                

              </div>
              <div className="flex justify-center lg:justify-end">
  <button className="lg:ml-24 lg:mt-3 lg:h-12 p-2 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
    Demande
  </button>
</div></div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobListings;
