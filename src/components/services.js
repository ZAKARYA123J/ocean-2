import React from "react";
import { CgWebsite } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { SlNote } from "react-icons/sl";
import { MdOutlineCleaningServices } from "react-icons/md";
import { Button } from "@material-tailwind/react";
import { MdStart } from "react-icons/md";
import styled, { keyframes } from "styled-components";
const skillsData = [
  {
    name: "Dynamic Website Design and Development",
    icon: <CgWebsite className="text-4xl text-primary" />,
    link: "#",
    description:
      "We create dynamic web applications and custom websites tailored to your needs. Our solutions are responsive, user-friendly, and built with the latest technologies to help your business thrive online.",
    aosDelay: "0",
  },
  {
    name: "Cleaning the glasses",
    icon:<MdOutlineCleaningServices className="text-4xl text-primary" />,
    link: "#",
    description:
      "Professional glass cleaning services that ensure spotless, streak-free results for a clear view every time.",
    aosDelay: "300",
  },
  {
    name: "Domiciliation",
    icon: <IoHomeOutline className="text-4xl text-primary" /> ,
    link: "#",
    description:
      "Get a prestigious address for your business.",
    aosDelay: "500",
  },
  {
    name: "Formation",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "We offer expert-led training in various fields to boost your skills and knowledge. Tailored to meet your needs, our programs help you achieve your professional goals efficiently.",
    aosDelay: "700",
  },
];
const CTA = styled.button`
  background-color: var(--white);
  color: #3a86ff;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border-radius: 20px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  transition: transform 0.2s;
  border:solid 1px black;
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;
const Services = () => {
  return (
    <>
      
      <div className="bg-white-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center" id="services">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Explore Our Services
            </h1>
            {/* <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              We are self-service data analytics software that lets you create
              visually.
            </p> */}
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div style={{color:'skyblue'}}>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
               <CTA>Get in touch</CTA>
              </div>
            ))}
          </div>

          {/* button */}
          {/* <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
            <button className="primary-btn">Learn More</button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Services;
