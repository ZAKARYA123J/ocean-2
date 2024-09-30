import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Modal from "./Modal";
import profileImage from "../assets/images/done/TeamDev/01.6ac85de7298319b1f8d5.jpg";
import profileImage1 from "../assets/images/done/04.35463172278c4051b5f4.jpg";
import profileImage2 from "../assets/images/done/05.a7ab2c82813cb95da9d6.jpg";
import profileImage3 from "../assets/images/done/03.ba5f8794c055cc1488b5.jpg";
import Team from "../assets/images/done/team.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaLock,
  FaComments,
  FaCode,
} from "react-icons/fa";
import LanguagesPage from "./LanguagesPage";
import LogoSlider from "./LogoSlider";

const teamMembers = [
  {
    id: 1,
    name: "ENNACHOUM ZAKARIA",
    role: "Full Stack Developer",
    skills: ["React", "Node.js", "SQL"],
    photo: profileImage,
    details:
      "Ahmed is an experienced developer with a focus on building scalable web applications. He enjoys working with the latest technologies and frameworks to create efficient and maintainable solutions.",
    github: "https://github.com/Umbrator",
    linkedin: "https://www.linkedin.com/in/ennachoum-zakaria-264134231/",
  },
  {
    id: 2,
    name: "Sara Haddad",
    role: "Frontend Developer",
    skills: ["React", "Tailwind CSS", "Sass"],
    photo: profileImage1,
    details:
      "Sara specializes in crafting beautiful and responsive user interfaces. She has a keen eye for design and a passion for creating smooth and intuitive user experiences.",
    github: "https://github.com/sara-haddad",
    linkedin: "https://linkedin.com/in/sara-haddad",
  },
  {
    id: 3,
    name: "John Doe",
    role: "Backend Developer",
    skills: ["Django", "Spring", "SQL"],
    photo: profileImage2,
    details:
      "John focuses on backend development, building robust and scalable server-side applications. He is proficient in designing API services and database management.",
    github: "https://github.com/john-doe",
    linkedin: "https://linkedin.com/in/john-doe",
  },
  {
    id: 4,
    name: "Jane Smith",
    role: "UX/UI Designer",
    skills: ["Figma", "Sketch", "Adobe XD"],
    photo: profileImage3,
    details:
      "Jane is passionate about creating user-friendly and visually appealing designs. She works closely with developers to ensure the best user experience.",
    github: "https://github.com/jane-smith",
    linkedin: "https://linkedin.com/in/jane-smith",
  },
  {
    id: 5,
    name: "Liam Johnson",
    role: "DevOps Engineer",
    skills: ["Docker", "Kubernetes", "AWS"],
    photo: profileImage,
    details:
      "Liam is a DevOps engineer with a knack for automating and optimizing cloud infrastructure.",
    github: "https://github.com/liam-johnson",
    linkedin: "https://linkedin.com/in/liam-johnson",
  },
  {
    id: 6,
    name: "Emily Clark",
    role: "Project Manager",
    skills: ["Agile", "Scrum", "Leadership"],
    photo: profileImage,
    details:
      "Emily leads projects with a focus on agile methodologies, ensuring timely delivery and high team morale.",
    github: "https://github.com/emily-clark",
    linkedin: "https://linkedin.com/in/emily-clark",
  },
];

const services = [
  {
    title: "Security",
    description:
      "Ensure your applications are secure with the latest security protocols and best practices. We provide penetration testing, secure coding practices, and compliance assessments.",
    icon: <FaLock className="text-blue-600" />,
  },
  {
    title: "Consultation",
    description:
      "Get expert advice on technology strategy, system architecture, and more. Our consultation services are tailored to help you navigate complex technical challenges.",
    icon: <FaComments className="text-green-600" />,
  },
  {
    title: "Development",
    description:
      "From front-end to back-end development, our team excels in building robust and scalable applications tailored to your business needs.",
    icon: <FaCode className="text-purple-600" />,
  },

];

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Navbar />
      <section className="flex-grow pt-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl mt-10 animate-fadeIn">
          <h1 className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent dark:from-blue-500 dark:to-red-500 tracking-tight">
            Meet Our Development Team
          </h1>
          <img
            src={Team}
            alt="Team"
            className="w-full h-80 object-cover rounded-lg mb-12 shadow-md animate-zoomIn"
          />
          <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We are a passionate team of experts dedicated to crafting innovative
            solutions. Explore more about each team member below and learn about
            the technologies they excel in.
          </p>
          <section className="mb-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
              <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent dark:from-blue-500 dark:to-red-500 tracking-tight animate-fadeIn">
                Our Development Services
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="relative group p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
                  >
                    <div className="flex items-center mb-4">
                      <div className="text-4xl mr-4 transition-transform duration-300 group-hover:scale-110">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300 group-hover:text-red-600">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 group-hover:text-gray-500 transition-colors duration-300">
                      {service.description}
                    </p>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Team Members Section */}
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl mt-10">
            <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent dark:from-blue-500 dark:to-red-500 tracking-tight">
              Our Team Members
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 animate-slideUp">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex flex-col items-center">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mb-4 border-2 border-gray-200 dark:border-gray-700 animate-bounce"
                    />
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {member.name}
                    </h2>
                    <p className="text-blue-600 font-medium mt-1">
                      {member.role}
                    </p>
                    <div className="flex justify-center mt-4 space-x-4">
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition transform hover:scale-110"
                      >
                        <FaGithub
                          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition"
                          size={20}
                        />
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition transform hover:scale-110"
                      >
                        <FaLinkedin
                          className="text-gray-700 dark:text-gray-300 hover:text-red-600 transition"
                          size={20}
                        />
                      </a>
                    </div>
                    <button
                      onClick={() => openModal(member)}
                      className="mt-6 w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-red-600 text-white rounded-md hover:from-blue-500 hover:to-red-500 transition-all duration-300 ease-in-out"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <LanguagesPage />
      <LogoSlider />
      <Footer />
      {selectedMember && <Modal member={selectedMember} onClose={closeModal} />}
    </div>
  );
};

export default TeamPage;
