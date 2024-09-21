import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { PiPhoneCallFill, PiInstagramLogoFill } from "react-icons/pi";
import { MdMarkEmailRead } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { ImLinkedin2 } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";
import logo from "../components/ocean3.png";
import { Link } from "react-router-dom";

const socialLinks = [
  { to: "https://www.facebook.com/the.ocean.connecting/", Icon: FaFacebookF, label: "Facebook" },
  { to: "https://www.instagram.com/oceanconnecting.ma/", Icon: PiInstagramLogoFill, label: "Instagram" },
  { to: "https://www.youtube.com/@OceanConnecting", Icon: IoLogoYoutube, label: "YouTube" },
  { to: "https://www.linkedin.com/company/ocean-connecting/?originalSubdomain=ma", Icon: ImLinkedin2, label: "LinkedIn" },
];

const contactInfo = [
  { Icon: HiLocationMarker, title: "Address", content: "789 Inner Lane, Holy park, California, USA" },
  { Icon: PiPhoneCallFill, title: "Call Us", content: "+09 876 543 210" },
  { Icon: MdMarkEmailRead, title: "Email Us", content: "support24@rakar.com" },
];

const pageElements = ["Home", "Services", "Formation", "About Us", "Contact"];
const ourServices = ["Development Informatique", "Formation", "Clean facades", "Recruitment", "Domiciliation"];

function Footer() {
  return (
    <footer className="bg-[#e0f7fa] py-12 text-black">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map(({ Icon, title, content }) => (
            <div key={title} className="flex items-center space-x-3">
              <div className="bg-[#3a86ff] p-2 rounded-md">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-sm font-bold">{title}</p>
                <p className="text-sm font-semibold">{content}</p>
              </div>
            </div>
          ))}
          <div className="flex items-center space-x-3">
            {socialLinks.map(({ to, Icon, label }) => (
              <div key={label} className="bg-[#3a86ff] p-2 rounded-md">
                <Link
                  to={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300 ease-in-out hover:text-blue-500"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6 text-white" />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="RAKAR Logo" style={{ width: '120px' }} />
            </div>
            <p className="text-sm">WE ARE PROFESSIONAL</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, eget
              aliquam nisl nisl sit amet nisl.
            </p>
          </div>
          <FooterLinkSection title="Page elements" links={pageElements} />
          <FooterLinkSection title="Our Services" links={ourServices} />
        </div>
      </div>
    </footer>
  );
}

function FooterLinkSection({ title, links }) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-bold">{title}</h3>
      <ul className="space-y-1">
        {links.map((link) => (
          <li key={link}>
            <Link to={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm hover:text-[#3a86ff]">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;