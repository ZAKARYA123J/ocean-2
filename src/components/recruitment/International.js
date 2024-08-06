import React from 'react';
import { Link } from 'react-router-dom';
import criotaia from '../../assets/images/contries/criotain.png';
import italy from '../../assets/images/contries/italy.png';
import germany from '../../assets/images/contries/GERMANY.png';
import spain from '../../assets/images/contries/spain.webp';
import oman from '../../assets/images/contries/Oman.svg-1024x512.png';
import kuwait from '../../assets/images/contries/KUWAIT.png';
import Navbar from "../navbar";
import { FaArrowCircleDown } from "react-icons/fa";

function International() {
  // Sample data for the table
  const recruitmentData = [
    { id: 1, position: 'Kroatia', description: 'Manage international partnerships and relations.', image: criotaia },
    { id: 2, position: 'ITALY', description: 'Develop and execute global marketing strategies.', image: italy },
    { id: 3, position: 'GERMANY', description: 'Oversee sales operations in international markets.', image: germany },
    { id: 4, position: 'SPAIN', description: 'Oversee sales operations in international markets.', image: spain },
    { id: 5, position: 'OMAN', description: 'Oversee sales operations in international markets.', image: oman },
    { id: 6, position: 'KUWAIT', description: 'Oversee sales operations in international markets.', image: kuwait },
  ];

  return (
    <div>
      <Navbar />
      <h2 className="text-3xl font-bold text-black ml-10 mt-24">
        Job Placement Agencies <span className="text-blue-600">International</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-1 gap-4 mt-10 px-8">
        {recruitmentData.map((job) => (
          <div key={job.id} className="flex bg-white shadow-md rounded-lg overflow-hidden w-60">
            <img
              src={job.image}
              alt={job.position}
              className="w-16 h-16 object-cover"
            />
            <div className="p-4 flex flex-col justify-between">
              <div className="mb-4">
                <div className="text-gray-900 font-bold text-lg mb-2">{job.position}</div>
                <p className="text-gray-700 text-sm">{job.description}</p>
              </div>
              <button className="flex items-center px-3 py-1.5 w-32 bg-blue-500 text-white text-xs font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                Download<FaArrowCircleDown className="ml-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default International;
