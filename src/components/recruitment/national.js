import React from 'react'
import { Link } from 'react-router-dom'

function National() {
  // Sample data for the table
  const recruitmentData = [
    { id: 1, position: 'Software Engineer', description: 'Develop and maintain web applications.' },
    { id: 2, position: 'Data Analyst', description: 'Analyze and interpret complex data sets.' },
    { id: 3, position: 'Product Manager', description: 'Oversee product development from conception to launch.' },
  ];

  return (
    <>
      <Link to="/" className="text-blue-500 underline">Back</Link>
      
      <h1 className="text-2xl font-bold my-4">Recruitment Opportunities</h1>
      
      <div className="container overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {recruitmentData.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.position}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => alert(`Inscrire for ${item.position}`)}
                  >
                    Inscrire
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default National;
