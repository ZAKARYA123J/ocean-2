import React,{useEffect} from "react";
import { Link as Link1 } from "react-scroll";

import heroImg from "../assets/images/design-team.svg"
import desayn from '../assets/images/done/design-team.svg'

import Navbar from "../components/navbar";
import About from "../components/about";
import Services from "../components/services";
import AgencyTab from "../components/agencyTab";
import Cta from "../components/cta";
import Client from "../components/client";
import Blogs from "../components/blog";
import GetInTouch from "../components/getInTuoch";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import AOS from "aos";
import "aos/dist/aos.css";
import styled, { keyframes } from "styled-components";
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

export default function Index(){
    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 800,
          easing: "ease-in",
          delay: 100,
        });
        AOS.refresh();
      }, []);
    
    return(
        <>
        <Navbar/>
        <section className="relative overflow-hidden md:py-48 py-40 bg-teal-500/5 dark:bg-sky-500/20" id="home">
            <div className="container relative mt-8">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center">
                    <div>
                        <h1 className="font-semibold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl mb-5">Etudes Formation Recrutements</h1>
                        <p className="text-slate-400 text-lg max-w-xl"></p>
                        
                        <div className="mt-6">
                            <CTA>
                            <Link1 to="contact" >Contact Us <i className="mdi mdi-chevron-right ms-1"></i></Link1></CTA>
                        </div>
                    </div>

                    <div className="lg:ms-8">
                        <div className="relative">
                            <img src={desayn} className="relative top-16" alt=""/>
                            <div className="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tl to-sky-500/20 via-sky-500/70 from-sky-500 bottom-1/2 translate-y-1/2 md:start-0 start-1/2 ltr:md:translate-x-0 ltr:-translate-x-1/2 rtl:md:translate-x-0 rtl:translate-x-1/2 -z-1 shadow-md shadow-sky-500/10 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <Services/>
        <Blogs/>
        <div className="flex justify-center">
  <button className="py-2 px-4 bg-sky-500 text-white rounded">Show all Formations<i className="mdi mdi-chevron-right ms-1"></i></button>
</div>

        <AgencyTab/>
        <Cta/>
       
        <Client/>
        {/* <Pricing/> */}
        
        <About/>
        <GetInTouch/>
        
        <Footer/>
        <Switcher/>
        </>
    )
}