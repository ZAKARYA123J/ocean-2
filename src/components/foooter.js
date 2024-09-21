// Footer.jsx
import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { PiPhoneCallFill, PiInstagramLogoFill } from "react-icons/pi";
import { MdMarkEmailRead } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import logo from "../components/ocean3.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#e0f7fa] py-12  text-black">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <div className="bg-[#3a86ff] p-2 rounded-md">
                <HiLocationMarker className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold">Address</p>
                <p className="text-sm font-semibold">
                  789 Inner Lane, Holy park, California, USA
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-[#3a86ff] p-2 rounded-md">
                <PiPhoneCallFill className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold">Call Us</p>
                <p className="text-sm font-semibold">+09 876 543 210</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-[#3a86ff] p-2 rounded-md">
                <MdMarkEmailRead className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold">Email Us</p>
                <p className="text-sm font-semibold">support24@rakar.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-[#3a86ff] p-2 rounded-md">
                <Link
                  to="https://www.facebook.com/the.ocean.connecting/"
                  target="_blank"
                  className=" hover:scale-110 transition-transform duration-300 ease-in-out hover:text-blue-500"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="h-6 w-6 text-white" />
                </Link>
              </div>
              <div className="bg-[#3a86ff] p-2 rounded-md">
                <Link
                  to="https://www.instagram.com/oceanconnecting.ma/"
                  target="_blank"
                  className=" hover:scale-110 transition-transform duration-300 ease-in-out hover:text-blue-500"
                  aria-label="Instagram"
                >
                  <PiInstagramLogoFill className="w-6 h-6 text-white" />
                </Link>
              </div>
              <div className="bg-[#3a86ff] p-2 rounded-md">
                <Link
                  to="https://www.youtube.com/@OceanConnecting"
                  target="_blank"
                  className=" hover:scale-110 transition-transform duration-300 ease-in-out hover:text-blue-500"
                  aria-label="YouTube"
                >
                  <IoLogoYoutube className="w-6 h-6 text-white" />
                </Link>
              </div>
              <div className="bg-[#3a86ff] p-2 rounded-md">
                <Link
                  to="https://www.linkedin.com/company/ocean-connecting/?originalSubdomain=ma"
                  target="_blank"
                  className=" hover:scale-110 transition-transform duration-300 ease-in-out hover:text-blue-500"
                  aria-label="LinkedIn"
                >
                  <ImLinkedin2 className="w-6 h-6 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center  space-x-2">
              <img src={logo} alt="RAKAR Logo" style={{ width: "120px" }} />
            </div>
            <p className="text-sm">WE ARE PROFESSIONAL</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, eget
              aliquam nisl nisl sit amet nisl.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Page elements</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-sm hover:text-[#3a86ff]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#3a86ff]">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#3a86ff]">
                  Formation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#3a86ff]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#3a86ff]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Our Services</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-sm hover:text-[#3a86ff]">
                  Development Informatique
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#3a86ff]">
                  Formation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#3a86ff]">
                  Clean facades
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#3a86ff]">
                  Rukcutment
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-[#3a86ff]">
                  Domicialisation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
