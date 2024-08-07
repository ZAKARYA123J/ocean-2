import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { Link as Link1 } from "react-scroll";
import { useSaveScrollPosition } from './useSaveScrollPosition'; // Import hook
import { useRestoreScrollPosition } from './useRestoreScrollPosition'; 
import { useParams } from "react-router-dom";
import img from './ocean3.png'
export default function Navbar(){
    const {type}=useParams()
    let [scroll, setScroll] = useState(false);
    let [manu, setManu] = useState(false)
    useSaveScrollPosition(); // Save scroll position on navigation
    useRestoreScrollPosition(); 

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
                    <img src={img} className="inline-block " style={{width:"120px"}} alt=""/>
                   
                <div className="nav-icons flex items-center lg_992:order-2 ms-auto md:ms-8">
                    {/* <ul className="list-none menu-social mb-0">
                        <li className="inline">
                            <Link to="" className="h-8 px-4 text-[12px] tracking-wider inline-flex items-center justify-center font-medium rounded-md bg-blue-500 text-white uppercase">Login</Link>
                        </li>
                    </ul> */}
                    <button data-collapse="menu-collapse" type="button" className="collapse-btn inline-flex items-center ms-2 text-dark dark:text-white lg_992:hidden" onClick={() =>setManu(!manu)}>
                        <span className="sr-only">Navigation Menu</span>
                        <i className="mdi mdi-menu text-[24px]"></i>
                    </button>
                </div>

                <div className={`navigation lg_992:order-1 lg_992:flex  ms-auto ${manu ? '' : 'hidden'}`} id="menu-collapse">
                    <ul className="navbar-nav" id="navbar-navlist">
                        <li className="nav-item ms-0">
                            <Link  className="nav-link" to={"/"} >Home</Link>
                        </li>
                        <li className="nav-item ms-0">
                            <Link className="nav-link" to={"/service"} >Services</Link>
                        </li>
                        {/* <li className="nav-item ms-0">
                            <Link1 className="nav-link" to="review" smooth={true} duration={1000} activeClass='active' spy={true}>Formation</Link1>
                        </li> */}
                        {/* <li className="nav-item ms-0">
                            <Link1 className="nav-link" to="pricing" smooth={true} duration={1000} activeClass='active' spy={true}>Pricing</Link1>
                        </li> */}
                        <li className="nav-item ms-0">
                            <Link className="nav-link" to={"/formation"} >Formation</Link>
                        </li>
                        <li className="nav-item ms-0">
                        <Link to={`/jobs/${all}`}  className="nav-link">Jobs</Link>
                        </li>
                        <li className="nav-item ms-0">
                            <Link1 className="nav-link" to="about" smooth={true} duration={1000} activeClass='active' spy={true}>About</Link1>
                        </li>
                        <li className="nav-item ms-0">
                            <Link1 className="nav-link" to="contact" smooth={true} duration={1000} activeClass='active' spy={true}>Contact us</Link1>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}