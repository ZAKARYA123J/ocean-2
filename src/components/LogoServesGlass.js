import React, { useEffect, useState } from 'react';
import projectAlphaLogo from '../assets/images/done/glass3.png';
import projectBetaLogo from '../assets/images/done/ocean3.png';
import solarcell from '../assets/images/done/solar-cell.png';
// import solarcell from '../assets/images/done/solar-cell.png';
import test from '../assets/images/done/test.svg';
import bardage from '../assets/images/done/bardage.svg';
import vitrine from '../assets/images/done/vitrine.svg';




const fetchProjects = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { name: 'Façade', logoPath:vitrine},
                { name: 'Bardage', logoPath: bardage },
                { name: 'Revêtement extérieur', logoPath:test },
                { name: 'Enseigne', logoPath: solarcell },
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
                        Services de Nettoyage
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
                           
                        </div>
                    ) : (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {projects.map((project, index) => (
                                <li
                                    
                                    className="group flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                                >
                                    <div className="flex justify-center items-center h-32 w-full mb-4">
                                        <img
                                            src={project.logoPath}
                                            alt={`${project.name} Logo`}
                                            className="h-24 w-24 object-contain transition-transform transform group-hover:rotate-3 group-hover:scale-110"
                                        />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-4">
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
