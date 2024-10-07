import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import img from './ocean3.png';
import { useTranslation } from "react-i18next";
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion } from "framer-motion";

// Fonction pour charger les données du client en fonction de la langue
const loadClientData = async (lang) => {
  try {
    switch (lang) {
      case 'fr':
        const { serviceDataFR, blogDataFR, NavbarFR } = await import('./locales/fr/translation');
        return { navbar: NavbarFR, serviceData: serviceDataFR, blogData: blogDataFR };
      case 'ar':
        const { serviceDataAR, blogDataAR, NavbarAR } = await import('./locales/ar/translation');
        return { navbar: NavbarAR, serviceData: serviceDataAR, blogData: blogDataAR };
      case 'en':
      default:
        const { serviceDataEN, blogDataEN, NavbarEN } = await import('./locales/en/translation');
        return { navbar: NavbarEN, serviceData: serviceDataEN, blogData: blogDataEN };
    }
  } catch (error) {
    console.error(`Failed to load client data for language ${lang}`, error);
    return { navbar: [], serviceData: [], blogData: [] };
  }
};

// Hook pour détecter si l'appareil est mobile
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 992);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return isMobile;
};

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState(null); // Garder la trace des dropdowns ouverts
  const { i18n, t } = useTranslation();
  const [navbar, setNavbar] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [blogData, setBlogData] = useState([]);
  const isMobile = useIsMobile();

  // Charger les données en fonction de la langue
  useEffect(() => {
    const fetchData = async () => {
      const { navbar, serviceData, blogData } = await loadClientData(i18n.language);
      setNavbar(navbar);
      setServiceData(serviceData);
      setBlogData(blogData);
    };
    fetchData();
  }, [i18n.language]);

  // Gérer le changement d'arrière-plan de la navbar en fonction du scroll
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Fonction pour basculer l'état du dropdown
  const handleDropdownToggle = (dropdownType) => {
    if (dropdowns === dropdownType) {
      setDropdowns(null); // Fermer le dropdown si déjà ouvert
    } else {
      setDropdowns(dropdownType); // Ouvrir le dropdown
    }
  };

  // Fonction pour fermer les dropdowns lors d'un clic sur un lien
  const closeDropdownOnLinkClick = () => {
    setDropdowns(null); // Fermer les dropdowns
  };
const limitedItems=serviceData.slice(1,6)
  return (
    <>
      <style>{`
        .nav-link {
          transition: transform 0.3s ease, color 0.3s ease;
        }
        .nav-link:hover {
          transform: scale(1.1);
          color: #007bff;
        }
        .nav-item {
          position: relative;
        }
        .nav-item ul {
          background-color: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          padding: 10px;
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 250px;
          z-index: 1000;
          opacity: 0;
          transform: translateY(-10px);
          transition: opacity 0.3s ease, transform 0.3s ease;
          display: none; /* Masquer complètement le dropdown */
        }
        .nav-item ul.show {
          opacity: 1;
          transform: translateY(0);
          display: block; /* Afficher le dropdown lorsqu'il est visible */
        }
        img {
          transition: transform 0.3s ease;
        }
        img:hover {
          transform: scale(1.1);
        }
        .navbar {
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }
      `}</style>

      <motion.nav
        className={`navbar fixed top-0 w-full z-50 ${scroll ? "bg-white shadow-lg" : "bg-transparent"}`}
        initial={{ y: -100 }}  // Position initiale de la navbar hors écran
        animate={{ 
          y: 0,  // Faire apparaître la navbar
          backgroundColor: scroll ? "#fff" : "rgba(0, 0, 0, 0)",  // Changer le fond au scroll
        }}
        transition={{ duration: 0.5 }}  // Durée de l'animation
      >
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.img
              src={img}
              className="inline-block"
              style={{ width: "120px" }}
              alt="Logo"
              whileHover={{ scale: 1.1 }}  // Effet hover pour agrandir le logo
              transition={{ duration: 0.3 }}
            />
          </Link>

          {/* Language Switcher et Bouton de menu mobile */}
          <div className="nav-icons flex items-center lg_992:order-2 ms-auto md:ms-8">
            <LanguageSwitcher />
            <button
              type="button"
              className="collapse-btn inline-flex items-center ms-2 text-dark lg_992:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="sr-only">Navigation Menu</span>
              <motion.i
                className="mdi mdi-menu text-[24px]"
                whileHover={{ rotate: 90 }}  // Effet rotation sur hover pour l'icône du menu
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>

          {/* Liens de navigation */}
          <div
            className={`navigation lg_992:flex ms-auto transition-all ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            {navbar.map((item, index) => (
              <ul
                className="navbar-nav flex flex-col lg_992:flex-row space-y-2 lg_992:space-y-0 lg_992:space-x-4"
                key={index}
              >
                <li className="nav-item ms-0">
                  <Link className="nav-link" to="/" onClick={closeDropdownOnLinkClick}>
                    {t(item.Home)}
                  </Link>
                </li>

                {/* Dropdown des Services */}
                <li className="nav-item ms-0 relative">
                  <button
                    className="nav-link flex items-center transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => handleDropdownToggle("servicesOpen")}
                  >
                    {t(item.Services)}
                    <RiArrowDropDownLine className="ml-1" fontSize={25} />
                  </button>
                  <ul className={`bg-white text-dark shadow-lg rounded-lg p-4 ${dropdowns === "servicesOpen" ? "show" : ""}`}>
                    {serviceData.map((service, idx) => (
                      <li className="nav-item" key={idx}>
                        <Link
                          className="nav-link transition duration-200 ease-in-out hover:bg-gray-100 p-2 rounded-md"
                          to={`/service/${service.id}`}
                          onClick={closeDropdownOnLinkClick}  // Fermer le dropdown après le clic
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                {/* Lien vers la Formation */}
                <li className="nav-item ms-0">
                  <Link className="nav-link" to="/formation" onClick={closeDropdownOnLinkClick}>
                    {t(item.Formation)}
                  </Link>
                </li>

                {/* Lien vers les Jobs */}
                <li className="nav-item ms-0">
                  <Link className="nav-link" to="/jobs" onClick={closeDropdownOnLinkClick}>
                    {t(item.Jobs)}
                  </Link>
                </li>

                {/* Lien vers la Galerie */}
                <li className="nav-item ms-0">
                  <Link className="nav-link" to="/gallery" onClick={closeDropdownOnLinkClick}>
                    {t(item.gallery)}
                  </Link>
                </li>

                {/* Lien vers la page "À propos" */}
                <li className="nav-item ms-0">
                  {isHomePage ? (
                    <ScrollLink
                      className="nav-link cursor-pointer"
                      to="about"
                      smooth={true}
                      duration={1000}
                      activeClass="active"
                      spy={true}
                      onClick={closeDropdownOnLinkClick}
                    >
                      {t(item.About)}
                    </ScrollLink>
                  ) : (
                    <Link className="nav-link cursor-pointer" to="/" onClick={closeDropdownOnLinkClick}>
                      {t(item.About)}
                    </Link>
                  )}
                </li>

                {/* Lien vers la page Contact */}
                <li className="nav-item ms-0">
                  {isHomePage ? (
                    <ScrollLink
                      className="nav-link cursor-pointer"
                      to="contact"
                      smooth={true}
                      duration={1000}
                      activeClass="active"
                      spy={true}
                      onClick={closeDropdownOnLinkClick}
                    >
                      {t(item.Contact)}
                    </ScrollLink>
                  ) : (
                    <Link className="nav-link cursor-pointer" to="/contact" onClick={closeDropdownOnLinkClick}>
                      {t(item.Contact)}
                    </Link>
                  )}
                </li>
              </ul>
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
}
