import React from 'react';
import PropTypes from 'prop-types';
import {
    SiReact,
    SiNodedotjs,
    SiDjango,
    SiSpring,
    SiFigma,
    SiDocker,
    SiKubernetes,
    SiTailwindcss,
    SiSass,
    SiSketch,
    SiAdobexd,
} from 'react-icons/si';
import { FaLightbulb, FaTasks, FaUserTie } from 'react-icons/fa'; // Generic icons for Agile, Scrum, and Leadership

// Mapping skills to their corresponding icons
const languageIcons = {
    React: <SiReact className="text-blue-600" />,
    'Node.js': <SiNodedotjs className="text-green-500" />,
    SQL: <SiReact className="text-blue-500" />, // Replace with a SQL-specific icon if available
    Django: <SiDjango className="text-green-800" />,
    Spring: <SiSpring className="text-green-600" />,
    'Tailwind CSS': <SiTailwindcss className="text-teal-500" />,
    Sass: <SiSass className="text-pink-400" />,
    Figma: <SiFigma className="text-pink-500" />,
    Docker: <SiDocker className="text-blue-400" />,
    Kubernetes: <SiKubernetes className="text-blue-600" />,
    // AWS: <SiAmazonwebservices className="text-orange-500" />,
    Sketch: <SiSketch className="text-yellow-500" />,
    'Adobe XD': <SiAdobexd className="text-purple-500" />,
    Agile: <FaTasks className="text-green-500" />, // Represents project management and tasks
    Scrum: <FaLightbulb className="text-blue-500" />, // Represents ideas and sprints
    Leadership: <FaUserTie className="text-red-500" />, // Represents leadership and management
};

const Modal = ({ member, onClose }) => {
    // Check if the member exists before trying to render details
    if (!member) return null;

    const { name, role, details, skills, projects, testimonials, awards, education } = member;

    return (
        <div className="modal fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 animate__animated animate__fadeIn">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-xl transform transition-all duration-300 scale-95 hover:scale-100 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-red-600 transition duration-300"
                    aria-label="Close"
                >
                    &times;
                </button>
                <h2 className="text-3xl font-bold mb-3 text-gray-800 dark:text-white">{name}</h2>
                <p className="text-sm mb-4 text-gray-500 dark:text-gray-400 italic">{role}</p>
                <p className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">{details}</p>

                {skills && Array.isArray(skills) && skills.length > 0 && (
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">Skills:</h3>
                        <ul className="list-inside grid grid-cols-2 gap-2 mt-2">
                            {skills.map((skill, index) => (
                                <li key={index} className="bg-gray-100 dark:bg-gray-700 rounded p-2 text-gray-600 dark:text-gray-400 shadow-sm flex items-center space-x-2">
                                    {languageIcons[skill] || <span className="text-gray-500">[Icon]</span>}
                                    <span>{skill}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {projects && Array.isArray(projects) && projects.length > 0 && (
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">Projects:</h3>
                        <ul className="list-disc list-inside pl-5">
                            {projects.map((project, index) => (
                                <li key={index} className="text-gray-600 dark:text-gray-400">{project}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {awards && Array.isArray(awards) && awards.length > 0 && (
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">Awards & Recognitions:</h3>
                        <ul className="list-disc list-inside pl-5">
                            {awards.map((award, index) => (
                                <li key={index} className="text-gray-600 dark:text-gray-400">{award}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {education && (
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">Education:</h3>
                        <p className="text-gray-600 dark:text-gray-400">{education}</p>
                    </div>
                )}

                {testimonials && Array.isArray(testimonials) && testimonials.length > 0 && (
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-200">Testimonials:</h3>
                        {testimonials.map((testimonial, index) => (
                            <blockquote key={index} className="border-l-4 border-green-500 pl-4 text-gray-600 dark:text-gray-400 italic">
                                “{testimonial}”
                            </blockquote>
                        ))}
                    </div>
                )}

                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-lg shadow hover:shadow-lg hover:from-blue-500 hover:to-red-500 transition-all duration-300 ease-in-out"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

Modal.propTypes = {
    member: PropTypes.shape({
        name: PropTypes.string,
        role: PropTypes.string,
        details: PropTypes.string,
        skills: PropTypes.arrayOf(PropTypes.string),
        projects: PropTypes.arrayOf(PropTypes.string),
        testimonials: PropTypes.arrayOf(PropTypes.string),
        awards: PropTypes.arrayOf(PropTypes.string),
        education: PropTypes.string,
    }),
    onClose: PropTypes.func.isRequired,
};

export default Modal;