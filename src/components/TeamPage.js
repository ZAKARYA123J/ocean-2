import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Modal from "./Modal";
import profileImage1 from "../assets/images/done/TeamDev/01.6ac85de7298319b1f8d5.jpg";
import profileImage2 from "../assets/images/done/04.35463172278c4051b5f4.jpg";
import profileImage3 from "../assets/images/done/05.a7ab2c82813cb95da9d6.jpg";
import profileImage4 from "../assets/images/done/03.ba5f8794c055cc1488b5.jpg";
import Team from "../assets/images/done/team.jpg";
import { FaGithub, FaLinkedin, FaLock, FaComments, FaCode } from "react-icons/fa";
import LanguagesPage from "./LanguagesPage";
import LogoSlider from "./LogoSlider";
import './i18n';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../src/assets/css/Services.css';
import zakaria from './zakaria.jpeg'
import omar from './omar.jpeg'
const loadClientData = async (lang) => {
  try {
    switch (lang) {
      case 'fr':
        return (await import('./locales/fr/translation')).DevelopmentFR;
      case 'ar':
        return (await import('./locales/ar/translation')).DevelopmentAR;
      case 'en':
      default:
        return (await import('./locales/en/translation')).DevelopmentEN;
    }
  } catch (error) {
    console.error(`Failed to load client data for language ${lang}`, error);
    return [];
  }
};

const teamMembers = [
  {
    id: 1,
    name: "ENNACHOUM ZAKARIA",
    role: "Full Stack Developer",
    skills: ["React", "Node.js", "SQL"],
    photo: profileImage1,
    details:
      "Zakaria is an experienced developer with a focus on building scalable web applications. He enjoys working with the latest technologies and frameworks to create efficient and maintainable solutions.",
    github: "https://github.com/Umbrator",
    linkedin: "https://www.linkedin.com/in/ennachoum-zakaria-264134231/",
  },
  {
    id: 2,
    name: "BAOUALI ZAKARIA",
    role: "Full stack Developer",
    skills: ["React", "Tailwind CSS", "Sass"],
    photo: zakaria,
    details:
      "ZAKARIA specializes both front-end and back-end development, ensuring that every aspect of our applications is seamless and efficient. ",
    github: "https://github.com/ZAKARYA123J",
    linkedin: "https://linkedin.com",
  },
  {
    id: 3,
    name: "OMAR ELKADDOURI",
    role: "Backend Developer",
    skills: ["Laravel", "Spring", "SQL"],
    photo: omar,
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
    photo: profileImage4,
    details:
      "Jane is passionate about creating user-friendly and visually appealing designs. She works closely with developers to ensure the best user experience.",
    github: "https://github.com/jane-smith",
    linkedin: "https://linkedin.com/in/jane-smith",
  }
];



const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [developpement, setSdeveloppment] = useState([]);
  const [loading, setLoading] = useState(true);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await loadClientData(i18n.language);
        setSdeveloppment(data);
      } catch (error) {
        console.error("Error fetching service data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [i18n.language]);

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Navbar/>
      <section className="flex-grow pt-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl mt-10 animate-fadeIn">
        {developpement.map((skill,idx)=>(
          <div id={idx}>
          <h1 className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent dark:from-blue-500 dark:to-red-500 tracking-tight">
            {t(skill.title)}
          </h1>
          <img
            src={Team}
            alt="Team"
            className="w-full h-80 object-cover rounded-lg mb-12 shadow-md animate-zoomIn"
          />
          <section className="mb-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
              <h2 className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent dark:from-blue-500 dark:to-red-500 tracking-tight animate-fadeIn">
              {t(skill.title2)}
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {skill.services?.map((service, index) => (
                  <div
                    key={index}
                    className="relative group p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                    <div className="flex items-center mb-4">
                      <div className="text-4xl mr-4 transition-transform duration-300 group-hover:scale-110">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 transition-colors duration-300 group-hover:text-red-600">
                        {t(service.title)}
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 group-hover:text-gray-500 transition-colors duration-300">
                      {t(service.description)}
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
      
              ))}
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
