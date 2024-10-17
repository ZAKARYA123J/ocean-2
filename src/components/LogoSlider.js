import React, { useEffect, useState } from "react";
import projectAlphaLogo from "../assets/images/done/ocean3.png";
import projectBetaLogo from "../assets/images/done/ocean3.png";
import projectGammaLogo from "../assets/images/done/ocean3.png";

// Mock fetchProjects function
const fetchProjects = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "Project Alpha",
          logoPath: projectAlphaLogo,
          link: "https://www.example.com/alpha",
          description:
            "A cutting-edge e-commerce platform designed to revolutionize your online shopping experience.",
        },
        {
          name: "Project Beta",
          logoPath: projectBetaLogo,
          link: "https://www.example.com/beta",
          description:
            "A powerful tool for managing your projects effectively and efficiently.",
        },
        {
          name: "Project Gamma",
          logoPath: projectGammaLogo,
          link: "https://www.example.com/gamma",
          description: "An innovative solution for enhancing your business processes.",
        },
        {
          name: "Project Delta",
          logoPath: projectGammaLogo,
          link: "https://www.example.com/delta",
          description: "A versatile platform for all your organizational needs.",
        },
      ]);
    }, 1000);
  });
};


const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects()
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load projects. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-red-600 text-white py-20 shadow-lg">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Explore Our Completed Projects
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Discover the work we have done for our clients across various
            industries. Click on any project to learn more about our approach
            and results.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 w-full flex-grow">
        <div className="container mx-auto px-4 mb-0">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 animate-pulse">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
                >
                  <div className="bg-gray-300 h-32 w-32 rounded mb-4"></div>
                  <div className="h-4 w-24 bg-gray-300 rounded"></div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-red-600 py-10">
              <p>{error}</p>
            </div>
          ) : (
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-0">
              {projects.map((project, index) => (
                <li
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <img
                    src={project.logoPath}
                    alt={`${project.name} Logo`}
                    className="h-32 w-full object-contain rounded-t-lg mb-2"
                  />
                  <h3 className="text-lg font-semibold mb-1 text-gray-800">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {project.description}
                  </p>
                  {/* Button Padding and Margin Adjustment */}
                  <button
                    className="mt-0 px-4 py-1 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-full shadow-md hover:from-blue-500 hover:to-red-500 transition-colors duration-300"
                    style={{
                      margin: 0, // Remove margin
                      padding: '0.25rem 1rem', // Adjust padding to your preference
                    }}
                  >
                    Live Preview
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
