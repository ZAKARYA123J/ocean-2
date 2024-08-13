import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import {FiShoppingCart, FiDribbble, FiLinkedin, FiFacebook, FiInstagram, FiTwitter, FiMail} from '../assets/icons/vander'
import img from './ocean3.png'

export default function Footer(){
    return(
        <footer className="footer bg-gray-400 relative text-gray-200 dark:text-gray-300">
            <div className="py-[30px] px-0 border-t border-slate-800">
                <div className="container relative text-center">
                    <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center">
                        <div className="lg:col-span-3 md:text-start text-center">
                            <Link to="#" className="text-[22px] focus:outline-none">
                                <img src={img} className="mx-auto md:me-auto md:ms-0" alt="" style={{width:"100px"}}/>
                            </Link>
                        </div>

                        <div className="lg:col-span-5 text-center mt-6 md:mt-0">
                            <p className="mb-0">© {new Date().getFullYear()} Ocean Connect</p>
                            <p className="mb-0">oceanconnecting.ma@gmail.com</p>
                            <p>+212 704-309787</p>
                        </div>

                        <ul className="lg:col-span-4 list-none md:text-end text-center mt-6 md:mt-0">
                            <li className="inline"><Link to="https://www.linkedin.com/company/ocean-connecting/?originalSubdomain=ma" target="_blank" className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-sky-500 dark:hover:border-sky-500 hover:bg-sky-500 dark:hover:bg-sky-500"><FiLinkedin className="size-4 align-middle" title="Linkedin"/></Link></li>
                            <li className="inline"><Link to="https://www.facebook.com/the.ocean.connecting/" target="_blank" className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-sky-500 dark:hover:border-sky-500 hover:bg-sky-500 dark:hover:bg-sky-500"><FiFacebook className="size-4 align-middle" title="instagram"/></Link></li>
                            <li className="inline"><Link to="https://www.instagram.com/oceanconnecting.ma/" target="_blank" className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-sky-500 dark:hover:border-sky-500 hover:bg-sky-500 dark:hover:bg-sky-500"><FiInstagram className="size-4 align-middle" title="instagram"/></Link></li>
                            <li className="inline"><Link to="oceanconnecting.ma@gmail.com" className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-gray-500 dark:hover:border-sky-500 hover:bg-sky-500 dark:hover:bg-sky-500"><FiMail className="size-4 align-middle" title="email"/></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}