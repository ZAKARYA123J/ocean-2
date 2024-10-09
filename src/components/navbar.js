import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import img from './ocean3.png';
import { useTranslation } from "react-i18next";
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion } from "framer-motion";

// Function to load client data based on language
const loadClientData = async (lang) => {
  try {
    switch (lang) {
      case 'fr':
        const { serviceDataFR, NavbarFR } = await import('./locales/fr/translation');
        return { navbar: NavbarFR, serviceData: serviceDataFR };
      case 'ar':
        const { serviceDataAR, NavbarAR } = await import('./locales/ar/translation');
        return { navbar: NavbarAR, serviceData: serviceDataAR };
      case 'en':
      default:
        const { serviceDataEN, NavbarEN } = await import('./locales/en/translation');
        return { navbar: NavbarEN, serviceData: serviceDataEN };
    }
  } catch (error) {
    console.error(`Failed to load client data for language ${lang}`, error);
    return { navbar: [], serviceData: [] };
  }
};

// Hook to detect if the device is mobile
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
  const [dropdowns, setDropdowns] = useState(null);
  const { i18n, t } = useTranslation();
  const [navbar, setNavbar] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const isMobile = useIsMobile();
  const location = useLocation();

  // Check if we are on the "/learn-english" page
  const isLearnEnglishPage = location.pathname === '/learn-english';

  // Load client data based on language
  useEffect(() => {
    const fetchData = async () => {
      const { navbar, serviceData } = await loadClientData(i18n.language);
      setNavbar(navbar);
      setServiceData(serviceData);
    };
    fetchData();
  }, [i18n.language]);

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === '/';

  // Toggle dropdown state
  const handleDropdownToggle = (dropdownType) => {
    setDropdowns(dropdowns === dropdownType ? null : dropdownType);
  };

  // Close dropdowns on link click
  const closeDropdownOnLinkClick = () => {
    setDropdowns(null);
  };

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
          display: none;
        }
        .nav-item ul.show {
          opacity: 1;
          transform: translateY(0);
          display: block;
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
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
          <Link to="/">
            <motion.img
              src={img}
              className="inline-block"
              style={{ width: "120px" }}
              alt="Logo"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>

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
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
              />
            </button>
          </div>

          <div className={`navigation lg_992:flex ms-auto ${menuOpen ? "block" : "hidden"}`}>
            {navbar.map((item, index) => (
              <ul className="navbar-nav flex flex-col lg_992:flex-row space-y-2 lg_992:space-y-0 lg_992:space-x-4" key={index}>
                <li className="nav-item ms-0">
                  <Link
                    className={`nav-link ${isLearnEnglishPage ? "text-[#65A662]" : "text-black"}`}
                    to="/"
                    onClick={closeDropdownOnLinkClick}
                  >
                    {t(item.Home)}
                  </Link>
                </li>
                <li className="nav-item ms-0 relative">
                  <button
                    className={`nav-link flex items-center ${isLearnEnglishPage ? "text-[#65A662]" : "text-black"}`}
                    onClick={() => handleDropdownToggle("servicesOpen")}
                  >
                    {t(item.Services)}
                    <RiArrowDropDownLine className="ml-1" fontSize={25} />
                  </button>
                  <ul className={`bg-white text-dark ${dropdowns === "servicesOpen" ? "show" : ""}`}>
                    {serviceData.map((service, idx) => (
                      <li className="nav-item" key={idx}>
                        <Link
                          className="nav-link"
                          to={`/service/${service.id}`}
                          onClick={closeDropdownOnLinkClick}
                        >
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="nav-item ms-0">
                  <Link
                    className={`nav-link ${isLearnEnglishPage ? "text-[#65A662]" : "text-black"}`}
                    to="/formation"
                    onClick={closeDropdownOnLinkClick}
                  >
                    {t(item.Formation)}
                  </Link>
                </li>
                <li className="nav-item ms-0">
                  <Link
                    className={`nav-link ${isLearnEnglishPage ? "text-[#65A662]" : "text-black"}`}
                    to="/jobs"
                    onClick={closeDropdownOnLinkClick}
                  >
                    {t(item.Jobs)}
                  </Link>
                </li>
                <li className="nav-item ms-0">
                  <Link
                    className={`nav-link ${isLearnEnglishPage ? "text-[#65A662]" : "text-black"}`}
                    to="/gallery"
                    onClick={closeDropdownOnLinkClick}
                  >
                    {t(item.gallery)}
                  </Link>
                </li>
                <li className="nav-item ms-0">
                  {isHomePage ? (
                    <ScrollLink
                      className={`nav-link cursor-pointer ${isLearnEnglishPage ? "text-[#65A662]" : "text-black"}`}
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
                    <Link
                      className={`nav-link cursor-pointer ${isLearnEnglishPage ? "text-[#65A662]" : "text-black"}`}
                      to="/"
                      onClick={closeDropdownOnLinkClick}
                    >
                      {t(item.About)}
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
