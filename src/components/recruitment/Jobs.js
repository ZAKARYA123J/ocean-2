import React from 'react';
import image from '../../assets/images/ab3.jpg';
import Navbar from "../navbar";
// Sample job data
const jobs = [
  {
    id: 1,
    title: 'Senior Product Manager',
    company: 'Paymentology',
    type: 'Full-Time/Anywhere in the World',
    tags: ['Top 100', 'Featured', 'NEW'],
    image: image,
  },
  {
    id: 2,
    title: 'Junior Product Manager',
    company: 'Netguru S.A.',
    type: 'Full-Time/EMEA Only',
    tags: ['Top 100', 'Featured'],
    image: image,
  },
  {
    id: 2,
    title: 'Junior Product Manager',
    company: 'Netguru S.A.',
    type: 'Full-Time/EMEA Only',
    tags: ['Top 100', 'Featured'],
    image: image,
  },
  // Ensure each job has a unique id
];

const JobListings = () => {
  return (
    <>
    
    <div className="p-10 bg-gray-100 ">
    <Navbar/>
     <h2 className="text-3xl font-bold text-black ml-10 mt-20">Job Placement Agencies <spam className="text-3xl font-bold text-blue-600">Ocean connect</spam></h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5 mt-2">
        {jobs.map((job) => (
          <div key={job.id} className="w-full lg:max-w-full lg:flex bg-white shadow-md rounded-lg overflow-hidden">
            <div
              className="h-48 lg:h-auto lg:w-48 flex-none bg-cover"
              style={{ backgroundImage: `url(${job.image})` }}
              title={job.title}
            >
            </div>
            <div className="p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                {/* <p className="text-sm text-gray-600 flex items-center">
                    <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                    </svg>
                  Members only
                </p> */}
                <div className="text-gray-900 font-bold text-xl mb-2">{job.title}</div>
                <p className="text-gray-700 text-base">{`Company: ${job.company}`}</p>
                <p className="text-gray-700 text-base">{`Type: ${job.type}`}</p>
                <p className="text-gray-700 text-base">{`Tags: ${job.tags.join(', ')}`}</p>
              </div>
              <div className="flex items-center">
                {/* <img className="w-10 h-10 rounded-full mr-4" src="/placeholder-avatar.png" alt="Avatar of Writer"/> */}
                <div className="text-sm">
                  {/* <p className="text-gray-900 leading-none">John Doe</p>
                  <p className="text-gray-600">Aug 9</p> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default JobListings;
