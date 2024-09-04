import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as Link1 } from "react-scroll";
import { useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import img from './ocean3.png';
import { useTranslation } from "react-i18next";
import { RiArrowDropDownLine } from "react-icons/ri";
import { serviceDataEN } from "./locales/en/translation";
import { blogDataEN } from "./locales/en/translation";
const loadClientData = async (lang) => {
  try {
    switch (lang) {
      case 'fr':
        return (await import('./locales/fr/translation')).NavbarFR;
      case 'ar':
        return (await import('./locales/ar/translation')).NavbarAR;
      case 'en':
      default:
        return (await import('./locales/en/translation')).NavbarEN;
    }
  } catch (error) {
    console.error(`Failed to load client data for language ${lang}`, error);
    return [];
  }
};

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [manu, setManu] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [formationDropdownOpen, setFormationDropdownOpen] = useState(false);  
  const [jobDropdownOpen, setJobDropdownOpen] = useState(false);  
  const { i18n, t } = useTranslation();
  const [navbar, setNavbar] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await loadClientData(i18n.language);
      setNavbar(data);
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

  const all = 'All';
  const international='International'
  const national='National'
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Function to handle click on smaller screens
  const handleDropdownClick = (dropdownType) => {
    if (window.innerWidth <= 992) {
      if (dropdownType === 'services') {
        setServicesDropdownOpen(!servicesDropdownOpen);
        setFormationDropdownOpen(false);
        setJobDropdownOpen(false); // Close other dropdowns
      } else if (dropdownType === 'formation') {
        setFormationDropdownOpen(!formationDropdownOpen);
        setServicesDropdownOpen(false); // Close other dropdowns
        setJobDropdownOpen(false);
      } else if (dropdownType === 'jobs') {
        setJobDropdownOpen(!jobDropdownOpen);
        setServicesDropdownOpen(false); // Close other dropdowns
        setFormationDropdownOpen(false);
      }
    }
  };
  return (
    <nav className={`navbar ${scroll ? 'is-sticky' : ''}`} id="navbar">
      <div className="container relative flex flex-wrap items-center justify-between">
        <Link to={"/"}>
          <img src={img} className="inline-block" style={{ width: "120px" }} alt="" />
        </Link>

        <div className="nav-icons flex items-center lg_992:order-2 ms-auto md:ms-8">
          <button className="nav-link lg:hidden"><LanguageSwitcher /></button>
          <button
            data-collapse="menu-collapse"
            type="button"
            className="collapse-btn inline-flex items-center ms-2 text-dark dark:text-white lg_992:hidden"
            onClick={() => setManu(!manu)}
          >
            <span className="sr-only">Navigation Menu</span>
            <i className="mdi mdi-menu text-[24px]"></i>
          </button>
        </div>

        <div className={`navigation lg_992:order-1 lg_992:flex ms-auto ${manu ? '' : 'hidden'}`} id="menu-collapse">
          {navbar.map((item, index) => (
            <ul className="navbar-nav" id="navbar-navlist" key={index}>
              <li className="nav-item ms-0">
                <Link className="nav-link" to={"/"}>{t(item.Home)}</Link>
              </li>
              <li
                className="nav-item ms-0 relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
                onClick={handleDropdownClick} // Click event for smaller screens
              >
                <Link className="nav-link cursor-pointer flex items-center" to="#">
                  {t(item.Services)} <RiArrowDropDownLine className="ml-1" fontSize={25}/>
                </Link>
                {servicesDropdownOpen && (
                  <ul className="dropdown-menu absolute bg-white text-dark shadow-lg rounded-lg p-4 w-80">
                    {serviceDataEN.map((service, idx) => (
                      <li className="nav-item" key={idx}>
                        <Link className="nav-link" to={`/service/${service.id}`} style={{ padding: '10px 20px', display: 'block' }}>
                          {service.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li
  className="nav-item ms-0 relative"
  onMouseEnter={() => setFormationDropdownOpen(true)}
  onMouseLeave={() => setFormationDropdownOpen(false)}
  onClick={handleDropdownClick} // Click event for smaller screens
>
  <Link className="nav-link cursor-pointer flex items-center" to="#">
    {t(item.Formation)} <RiArrowDropDownLine className="ml-1" fontSize={25} />
  </Link>
  {formationDropdownOpen && (
    <ul className="dropdown-menu absolute bg-white text-dark shadow-lg rounded-lg p-4 w-80 max-h-60 overflow-y-auto z-50">
      {blogDataEN.map((service, idx) => (
        <li className="nav-item" key={idx}>
          <Link className="nav-link" to={`/formation/${service.id}`} style={{ padding: '10px 20px', display: 'block' }}>
            {service.title}
          </Link>
        </li>
      ))}
    </ul>
  )}
</li>

<li
                className="nav-item ms-0 relative"
                onMouseEnter={() => setJobDropdownOpen(true)}
                onMouseLeave={() => setJobDropdownOpen(false)}
                onClick={() => handleDropdownClick('jobs')} // Corrected click event
              >
                <Link className="nav-link cursor-pointer flex items-center" to="#">
                  {t(item.Jobs)} <RiArrowDropDownLine className="ml-1" fontSize={25} />
                </Link>
                {jobDropdownOpen && (
                  <ul className="dropdown-menu absolute bg-white text-dark shadow-lg rounded-lg p-4 w-60">
                    <li className="nav-item" >
          <Link className="nav-link" to={`/jobs/${international}`} style={{ padding: '10px 20px', display: 'block' }}>
            International
          </Link>
        </li>
                    <li className="nav-item" >
          <Link className="nav-link" to={`/jobs/${national}`} style={{ padding: '10px 20px', display: 'block' }}>
            National
          </Link>
        </li>
                  </ul>
                )}
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
                    {t(item.Contact_us)}
                  </Link1>
                ) : (
                  <Link className="nav-link cursor-pointer" to="/">
                    {t(item.Contact_us)}
                  </Link>
                )}
              </li>
              <li className="nav-item">
                <button className="nav-link">
                  <LanguageSwitcher />
                </button>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </nav>
  );
}
