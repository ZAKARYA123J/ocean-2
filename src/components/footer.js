import React from "react";
import { Link } from "react-router-dom";
import { FiLinkedin, FiFacebook, FiInstagram, FiMail, FiYoutube } from '../assets/icons/vander';
import img from './ocean3.png';
import footerBg from './footer-bg.jpg'; // A realistic background image

export default function Footer() {
    return (
        <footer 
            className="footer relative text-white" 
            style={{ 
                position: 'relative', 
                overflow: 'hidden', 
                backgroundImage: `url(${footerBg})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                padding: '40px 20px' 
            }}
        >
            {/* Semi-transparent overlay for readability */}
            <div 
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.6)', // Darker overlay for readability
                    zIndex: 1
                }}
            ></div>

            {/* Footer Content */}
            <div className="container relative z-10 text-center">
                <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center">
                    
                    {/* Logo Section */}
                    <div className="lg:col-span-3 md:text-start text-center mb-6 md:mb-0">
                        <Link to="/" className="focus:outline-none">
                            <img 
                                src={img}
                                className="mx-auto md:me-auto md:ms-0" 
                                alt="Ocean Connect Logo" 
                                style={{ width: "150px", transition: 'transform 0.3s' }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                            />
                        </Link>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-5 text-center mt-6 md:mt-0">
                        <p className="mb-1 font-semibold text-lg">© {new Date().getFullYear()} Ocean Connecting</p>
                        <p className="mb-1">oceanconnecting.ma@gmail.com</p>
                        <p>+212 704-309787</p>
                    </div>

                    {/* Social Media Links */}
                    <ul className="lg:col-span-4 list-none md:text-end text-center mt-6 md:mt-0 flex justify-center md:justify-end space-x-4">
                        <li className="inline">
                            <Link 
                                to="https://www.facebook.com/the.ocean.connecting/" 
                                target="_blank" 
                                className="inline-flex justify-center items-center rounded-md hover:scale-110 transition-transform duration-300 ease-in-out hover:text-blue-500"
                                aria-label="Facebook"
                            >
                                <FiFacebook className="w-6 h-6" />
                            </Link>
                        </li>
                        <li className="inline">
                            <Link 
                                to="https://www.instagram.com/oceanconnecting.ma/" 
                                target="_blank" 
                                className="inline-flex justify-center items-center rounded-md hover:scale-110 transition-transform duration-300 ease-in-out hover:text-pink-500"
                                aria-label="Instagram"
                            >
                                <FiInstagram className="w-6 h-6" />
                            </Link>
                        </li>
                        <li className="inline">
                            <Link 
                                to="https://www.youtube.com/@OceanConnecting" 
                                target="_blank"
                                className="inline-flex justify-center items-center rounded-md hover:scale-110 transition-transform duration-300 ease-in-out hover:text-red-500"
                                aria-label="YouTube"
                            >
                                <FiYoutube className="w-6 h-6" />
                            </Link>
                        </li>
                        <li className="inline">
                            <Link 
                                to="https://www.linkedin.com/company/ocean-connecting/?originalSubdomain=ma" 
                                target="_blank" 
                                className="inline-flex justify-center items-center rounded-md hover:scale-110 transition-transform duration-300 ease-in-out hover:text-blue-700"
                                aria-label="LinkedIn"
                            >
                                <FiLinkedin className="w-6 h-6" />
                            </Link>
                        </li>
                        <li className="inline">
                            <Link 
                                to="mailto:oceanconnecting.ma@gmail.com" 
                                className="inline-flex justify-center items-center rounded-md hover:scale-110 transition-transform duration-300 ease-in-out hover:text-yellow-500"
                                aria-label="Email"
                            >
                                <FiMail className="w-6 h-6" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
