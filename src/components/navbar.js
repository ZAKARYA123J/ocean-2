import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as Link1 } from "react-scroll";
import { useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import img from './ocean3.png';
import { useTranslation } from "react-i18next";
import { RiArrowDropDownLine } from "react-icons/ri";

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
  const [dropdowns, setDropdowns] = useState({
    servicesOpen: false,
    formationOpen: false,
    jobOpen: false,
  });
  const { i18n, t } = useTranslation();
  const [navbar, setNavbar] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [blogData, setBlogData] = useState([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchData = async () => {
      const { navbar, serviceData, blogData } = await loadClientData(i18n.language);
      setNavbar(navbar);
      setServiceData(serviceData);
      setBlogData(blogData);
    };
    fetchData();
  }, [i18n.language]);

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

  // Function to toggle dropdowns
  const handleDropdownToggle = (dropdownType) => {
    setDropdowns(prevState => ({
      ...prevState,
      [dropdownType]: !prevState[dropdownType],
    }));
  };

  return (
    <nav className={`navbar ${scroll ? 'is-sticky' : ''}`} id="navbar">
      <div className="container relative flex flex-wrap items-center justify-between">
        <Link to={"/"}>
          <img src={img} className="inline-block" style={{ width: "120px" }} alt="Logo" />
        </Link>

        <div className="nav-icons flex items-center lg_992:order-2 ms-auto md:ms-8">
          <button className="nav-link "><LanguageSwitcher /></button>
          <button
            data-collapse="menu-collapse"
            type="button"
            className="collapse-btn inline-flex items-center ms-2 text-dark dark:text-white lg_992:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="sr-only">Navigation Menu</span>
            <i className="mdi mdi-menu text-[24px]"></i>
          </button>
        </div>

        <div className={`navigation lg_992:order-1 lg_992:flex ms-auto ${menuOpen ? '' : 'hidden'}`} id="menu-collapse">
          {navbar.map((item, index) => (
            <ul className="navbar-nav" id="navbar-navlist" key={index}>
              <li className="nav-item ms-0">
                <Link className="nav-link" to={"/"}>{t(item.Home)}</Link>
              </li>

              {/* Services dropdown */}
              <li className="nav-item ms-0 relative">
                <Link
                  className="nav-link cursor-pointer flex items-center"
                  onClick={() => handleDropdownToggle('servicesOpen')}
                >
                  {t(item.Services)} <RiArrowDropDownLine className="ml-1" fontSize={25}/>
                </Link>
                {dropdowns.servicesOpen && (
                  <ul className={`dropdown-list ${isMobile ? 'block' : 'absolute'} bg-white text-dark shadow-lg rounded-lg p-4 w-80`}>
                    {serviceData.map((service, idx) => (
                      <li className="nav-item" key={idx}>
                        <Link className="nav-link" to={`/service/${service.id}`} style={{ padding: '10px 20px', display: 'block' }}>
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Formation dropdown */}
              <li className="nav-item ms-0 relative">
                <Link
                  className="nav-link cursor-pointer flex items-center"
                  onClick={() => handleDropdownToggle('formationOpen')}
                >
                  {t(item.Formation)} <RiArrowDropDownLine className="ml-1" fontSize={25}/>
                </Link>
                {dropdowns.formationOpen && (
                  <ul className={`dropdown-list ${isMobile ? 'block' : 'absolute'} bg-white text-dark shadow-lg rounded-lg p-4 w-80 max-h-60 overflow-y-auto`}>
                    {blogData.map((service, idx) => (
                      <li className="nav-item" key={idx}>
                        <Link className="nav-link" to={`/formation/${service.id}`} style={{ padding: '10px 20px', display: 'block' }}>
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Jobs dropdown */}
              <li className="nav-item ms-0 relative">
                <Link
                  className="nav-link cursor-pointer flex items-center"
                  to={`/jobs`}
                >
                  {t(item.Jobs)}
                </Link>
               
              </li>

              <li className="nav-item ms-0">
                <Link to={`/gallery`} className="nav-link">{t(item.gallery)}</Link>
              </li>
              <li className="nav-item ms-0">
                {isHomePage ? (
                  <Link1
                    className="nav-link cursor-pointer"
                    to="about"
                    smooth={true}
                    duration={1000}
                    activeClass="active"
                    spy={true}
                  >
                    {t(item.About)}
                  </Link1>
                ) : (
                  <Link className="nav-link cursor-pointer" to="/">
                    {t(item.About)}
                  </Link>
                )}
              </li>
              <li className="nav-item ms-0">
                {isHomePage ? (
                  <Link1
                    className="nav-link cursor-pointer"
                    to="contact"
                    smooth={true}
                    duration={1000}
                    activeClass="active"
                    spy={true}
                  >
                    {t(item.Contact)}
                  </Link1>
                ) : (
                  <Link className="nav-link cursor-pointer" to="/contact">
                    {t(item.Contact)}
                  </Link>
                )}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </nav>
  );
}
