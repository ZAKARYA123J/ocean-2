import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/ab1.jpg';

function International() {
  // Sample data for the table
  const recruitmentData = [
    { id: 1, position: 'International Relations Officer', description: 'Manage international partnerships and relations.', image: image },
    { id: 2, position: 'Global Marketing Specialist', description: 'Develop and execute global marketing strategies.', image: image },
    { id: 3, position: 'International Sales Manager', description: 'Oversee sales operations in international markets.', image: image },
  ];

  return (
    <div>
      <Link to="/" className="text-blue-500 underline">Back</Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
  {recruitmentData.map((item) => (
    <div key={item.id} className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-2">
      {/* Uncomment the following line to display the image */}
      <img className="object-cover rounded-t-lg h-48 w-full" src={item.image} alt={item.position} />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{item.position}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
        <button className="px-3 py-1.5 bg-blue-500 text-white text-sm font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Download
        </button>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}

export default International;
