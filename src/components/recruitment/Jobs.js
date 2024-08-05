import React from 'react';

// Sample job data
const jobs = [
  {
    id: 1,
    title: 'Senior Product Manager',
    company: 'Paymentology',
    type: 'Full-Time/Anywhere in the World',
    tags: ['Top 100', 'Featured', 'NEW'],
  },
  {
    id: 2,
    title: 'Junior Product Manager',
    company: 'Netguru S.A.',
    type: 'Full-Time/EMEA Only',
    tags: ['Top 100', 'Featured'],
  },
  {
    id: 1,
    title: 'Senior Product Manager',
    company: 'Paymentology',
    type: 'Full-Time/Anywhere in the World',
    tags: ['Top 100', 'Featured', 'NEW'],
  },
  {
    id: 2,
    title: 'Junior Product Manager',
    company: 'Netguru S.A.',
    type: 'Full-Time/EMEA Only',
    tags: ['Top 100', 'Featured'],
  },
  {
    id: 1,
    title: 'Senior Product Manager',
    company: 'Paymentology',
    type: 'Full-Time/Anywhere in the World',
    tags: ['Top 100', 'Featured', 'NEW'],
  },
  {
    id: 2,
    title: 'Junior Product Manager',
    company: 'Netguru S.A.',
    type: 'Full-Time/EMEA Only',
    tags: ['Top 100', 'Featured'],
  },
  // Add more jobs as needed
];

const JobCard = ({ job }) => {
  return (
    <div className={`flex flex-col bg-white p-6 rounded-lg shadow-md m-4 ${job.tags.includes('Featured') ? 'border-l-4 border-yellow-500' : ''}`}>
      <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-500 text-sm">{job.type}</p>
      <div className="flex mt-4">
        {job.tags.map((tag, index) => (
          <span key={index} className={`text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ${tag === 'NEW' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const JobListings = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h2 class="text-3xl font-bold text-black">Ocean Connect</h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobListings;
