import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/ab1.jpg';
import criotaia from '../../assets/images/contries/criotain.png'
import italy from '../../assets/images/contries/italy.png'
import germany from '../../assets/images/contries/GERMANY.png'
import spain from '../../assets/images/contries/spain.webp'
import oman from '../../assets/images/contries/Oman.svg-1024x512.png'
import kuwait from '../../assets/images/contries/KUWAIT.png'
import Navbar from "../navbar";
import { FaArrowCircleDown } from "react-icons/fa";
function International() {
  // Sample data for the table
  const recruitmentData = [
    { id: 1, position: 'Kroatia', description: 'Manage international partnerships and relations.', image: criotaia },
    { id: 2, position: 'ITALY', description: 'Develop and execute global marketing strategies.', image: italy },
    { id: 3, position: 'GERMANY', description: 'Oversee sales operations in international markets.', image: germany },
    { id: 3, position: 'SPAIN', description: 'Oversee sales operations in international markets.', image: spain },
    { id: 3, position: 'OMAN', description: 'Oversee sales operations in international markets.', image: oman },
    { id: 3, position: 'KUWAIT', description: 'Oversee sales operations in international markets.', image: kuwait },
  ];

  return (
    <div>
<Navbar/>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-24">
  {recruitmentData.map((item) => (
    <div key={item.id} className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-2">
      {/* Uncomment the following line to display the image */}
      <img className="object-cover rounded-t-lg h-48 w-full" src={item.image} alt={item.position} />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{item.position}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
        <button className="flex items-center px-3 w-40 py-1.5 bg-blue-500 text-white text-sm font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
      Download
      <FaArrowCircleDown className="ml-2" /> {/* Adjust spacing with ml-2 */}
    </button>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}

export default International;
