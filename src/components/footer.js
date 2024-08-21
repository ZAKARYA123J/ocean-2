import React from "react";
import { Link } from "react-router-dom";
import { FiLinkedin, FiFacebook, FiInstagram, FiMail ,FiYoutube  } from '../assets/icons/vander';
import img from './ocean3.png';
import footerBg from './footer-bg.jpg'; // A realistic background image

export default function Footer() {
    return (
        <footer className="footer relative text-gray-200 dark:text-gray-200" style={{ direction: 'ltr', position: 'relative', overflow: 'hidden', backgroundImage: `url(${footerBg})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '30px 0'  }}>
            {/* Semi-transparent overlay for readability */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.2)',
                zIndex: 1
            }}></div>

            {/* Footer Content */}
            <div className="container relative z-10 text-center">
                <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center">
                    <div className="lg:col-span-3 md:text-start text-center mb-6 md:mb-0">
                        <Link to="/" className="text-[22px] focus:outline-none">
                            <img src={img} className="mx-auto md:me-auto md:ms-0" alt="Ocean Connect Logo" style={{width:"150px"}} />
                        </Link>
                    </div>

                    <div className="lg:col-span-5 text-center mt-6 md:mt-0 text-white">
                        <p className="mb-0">© {new Date().getFullYear()} Ocean connecting</p>
                        <p className="mb-0">oceanconnecting.ma@gmail.com</p>
                        <p>+212704-309787</p>
                    </div>

                    <ul className="lg:col-span-4 list-none md:text-end text-center mt-6 md:mt-0 text-white">
                        
                        <li className="inline"><Link to="https://www.facebook.com/the.ocean.connecting/" target="_blank" className="size-8 inline-flex justify-center items-center rounded-md hover:scale-105 transition-transform duration-300 ease-in-out"><FiFacebook className="size-4 align-middle" title="Facebook"/></Link></li>
                        <li className="inline"><Link to="https://www.instagram.com/oceanconnecting.ma/" target="_blank" className="size-8 inline-flex justify-center items-center rounded-md hover:scale-105 transition-transform duration-300 ease-in-out"><FiInstagram className="size-4 align-middle" title="Instagram"/></Link></li>
                        <li className="inline"><Link to="https://www.youtube.com/@OceanConnecting" className="size-8 inline-flex justify-center items-center rounded-md hover:scale-105 transition-transform duration-300 ease-in-out"><FiYoutube  className="size-4 align-middle" title="YouTUbe"/></Link></li>
                        <li className="inline"><Link to="https://www.linkedin.com/company/ocean-connecting/?originalSubdomain=ma" target="_blank" className="size-8 inline-flex justify-center items-center rounded-md hover:scale-105 transition-transform duration-300 ease-in-out"><FiLinkedin className="size-4 align-middle" title="Linkedin"/></Link></li>
                        <li className="inline"><Link to="mailto:oceanconnecting.ma@gmail.com" className="size-8 inline-flex justify-center items-center rounded-md hover:scale-105 transition-transform duration-300 ease-in-out"><FiMail className="size-4 align-middle" title="Email"/></Link></li>
                        
                    </ul>
                </div>
            </div>
        </footer>
    )
}