import React, { useEffect, useState } from 'react';
import projectAlphaLogo from '../assets/images/done/ocean3.png';
import projectBetaLogo from '../assets/images/done/ocean3.png';
import projectGammaLogo from '../assets/images/done/ocean3.png';

// Mock fetchProjects function
const fetchProjects = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { name: 'Project Alpha', logoPath: projectAlphaLogo, link: 'https://www.example.com/alpha' },
                { name: 'Project Beta', logoPath: projectBetaLogo, link: 'https://www.example.com/beta' },
                { name: 'Project Gamma', logoPath: projectGammaLogo, link: 'https://www.example.com/gamma' },
                { name: 'Project Delta', logoPath: projectGammaLogo, link: 'https://www.example.com/delta' },
            ]);
        }, 1000);
    });
};

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProjects().then((data) => {
            setProjects(data);
            setLoading(false);
        });
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
            <section className="flex-grow pt-24">
                <div className="container mx-auto px-4 lg:px-8 max-w-7xl mt-10">
                    <h1 className="text-5xl font-bold text-center mb-10 text-gray-900 dark:text-white">
                        Completed Projects
                    </h1>
                    {loading ? (
                        <div className="flex justify-center items-center">
                            <svg
                                className="animate-spin -ml-1 mr-3 h-8 w-8 text-blue-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v8H4z"
                                ></path>
                            </svg>
                            <span className="text-lg font-medium">Loading...</span>
                        </div>
                    ) : (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {projects.map((project, index) => (
                                <li
                                    key={index}
                                    onClick={() => window.open(project.link, '_blank')}
                                    className="group flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer hover:border-transparent border-2 border-gray-200 dark:border-gray-700"
                                >
                                    <img
                                        src={project.logoPath}
                                        alt={`${project.name} Logo`}
                                        className="h-32 w-32 object-contain mb-4 transition-transform transform group-hover:rotate-3 group-hover:scale-110"
                                    />
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                                        {project.name}
                                    </h3>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ProjectsPage;
