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
import {serviceData} from "../data/data"
import { useParams } from "react-router-dom";
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
  const limitedItems=serviceData.slice(0,4)
  const {id}=useParams()
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
            {limitedItems.map((skill) => (
              <div
                key={skill.id}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div style={{color:'skyblue'}} className="text-4xl text-primary" >{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.title}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.desc}
                </p>
                <button>
                <Link to={`/service/${skill.id}`}>
                
               <CTA>Get in touch</CTA></Link></button>
              </div>
            ))}
          </div>
            </div>
        </div>
    )
}
export default Services;
