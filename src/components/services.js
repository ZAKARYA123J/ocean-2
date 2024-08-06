import React from "react";
import { CgWebsite } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { SlNote } from "react-icons/sl";
import { MdOutlineCleaningServices } from "react-icons/md";
import { Button } from "@material-tailwind/react";
import { MdStart } from "react-icons/md";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { servicesData } from "../data/data";
const skillsData = [
  {
    name: "Dynamic Website Design and Development",
    icon: <CgWebsite className="text-4xl text-primary" />,
    link: "#",
    description:
      "We create dynamic web applications and custom websites tailored to your needs. Our solutions are responsive.",
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
      "We offer expert-led training in various fields to boost your skills and knowledge.",
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
 border: solid 1px blue;

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

                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 mt-6">
                    {servicesData.map((item,index)=>{
                        let Icon = item.icon
                        return(
                            <div className="group rounded-md shadow dark:shadow-gray-700 relative bg-white dark:bg-slate-900 p-6 overflow-hidden h-fit" key={index}>
                                <div className="flex items-center justify-center size-14 -rotate-45 bg-gradient-to-r from-transparent to-teal-500/10 text-teal-500 text-center rounded-full group-hover:bg-teal-500/10 duration-500">
                                    <Icon className="size-6 rotate-45"> </Icon>
                                </div>
        
                                <div className="content mt-6 relative z-1">
                                    <Link to="" className="title text-lg font-semibold hover:text-teal-500">{item.title}</Link>
                                    <p className="text-slate-400 mt-3">{item.desc}</p>
        
                                    <div className="mt-6">
                                        <Link to="" className="text-teal-500">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                    </div>
                                </div>
        
                                <div className="absolute bottom-0 -end-16">
                                    <Icon className="size-48 text-teal-500 opacity-[0.04] dark:opacity-[0.04] group-hover:opacity-10 duration-500"></Icon>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Services;
