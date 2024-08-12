import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { Link as Link1 } from "react-scroll";
import { useParams } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import img from './ocean3.png'
import { useTranslation } from "react-i18next";
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
export default function Navbar(){
    let [scroll, setScroll] = useState(false);
    let [manu, setManu] = useState(false)
    const { i18n, t } = useTranslation();
    const [navbar,setNavbar]=useState([])
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
      const all='All'
    return(
        <nav className={`navbar ${scroll ? 'is-sticky' : ''}`} id="navbar">
            <div className="container relative flex flex-wrap items-center justify-between" >
              <Link to={"/"}>
                    <img src={img} className="inline-block " style={{width:"120px"}} alt=""/>
                    </Link>
                   
                <div className="nav-icons flex items-center lg_992:order-2 ms-auto md:ms-8">
                    {/* <ul className="list-none menu-social mb-0">
                        <li className="inline">
                            <Link to="" className="h-8 px-4 text-[12px] tracking-wider inline-flex items-center justify-center font-medium rounded-md bg-blue-500 text-white uppercase">Login</Link>
                        </li>
                    </ul> */}
                     <button className="nav-link lg:hidden"><LanguageSwitcher /></button>
                    <button data-collapse="menu-collapse" type="button" className="collapse-btn inline-flex items-center ms-2 text-dark dark:text-white lg_992:hidden" onClick={() =>setManu(!manu)}>
                        <span className="sr-only">Navigation Menu</span>
                        <i className="mdi mdi-menu text-[24px]"></i>
                    </button>
                   
                </div>

                <div className={`navigation lg_992:order-1 lg_992:flex  ms-auto ${manu ? '' : 'hidden'}`} id="menu-collapse">
                {navbar.map((item, index) => (
  <ul className="navbar-nav" id="navbar-navlist" key={index}>
    <li className="nav-item ms-0">
      <Link className="nav-link" to={"/"}>{t(item.Home)}</Link>
    </li>
    <li className="nav-item ms-0">
      <Link className="nav-link" to={"/service/1"}>{t(item.Services)}</Link>
    </li>
    <li className="nav-item ms-0">
      <Link className="nav-link" to={"/formation"}>{t(item.Formation)}</Link>
    </li>
    <li className="nav-item ms-0">
      <Link to={`/jobs/${all}`} className="nav-link">{t(item.Jobs)}</Link>
    </li>
    <li className="nav-item ms-0">
      <Link1 className="nav-link" to="about" smooth={true} duration={1000} activeClass='active' spy={true}>{t(item.About)}</Link1>
    </li>
    <li className="nav-item ms-0">
      <Link1 className="nav-link" to="contact" smooth={true} duration={1000} activeClass='active' spy={true}>{t(item.Contact_us)}</Link1>
    </li>
    <li className="nav-item  ">
  <button className="nav-link">
    <LanguageSwitcher />
  </button>
</li>

  </ul>
))}

                  
                </div>
            </div>
        </nav>
    )
}