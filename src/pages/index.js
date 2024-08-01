import React from "react";
import { Link } from "react-router-dom";

import heroImg from "../assets/images/design-team.svg"

import Navbar from "../components/navbar";
import About from "../components/about";
import Services from "../components/services";
import AgencyTab from "../components/agencyTab";
import Cta from "../components/cta";
import Client from "../components/client";
import Pricing from "../components/pricing";
import Blogs from "../components/blog";
import GetInTouch from "../components/getInTuoch";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import img from './result.svg'
export default function Index(){
    return(
        <>
        <Navbar/>
        <section className="relative overflow-hidden md:py-48 py-40 bg-teal-500/5 dark:bg-teal-500/20" id="home">
            <div className="container relative mt-8">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center">
                    <div>
                        <h1 className="font-semibold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl mb-5">Get Creative & Modern With Upcover</h1>
                        <p className="text-slate-400 text-lg max-w-xl">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                        
                        <div className="mt-6">
                            <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white">Contact Us <i className="mdi mdi-chevron-right ms-1"></i></Link>
                        </div>
                    </div>

                    <div className="lg:ms-8">
                        <div className="relative">
                            <img src={img} className="relative top-16" alt=""/>
                            <div className="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tl to-teal-500/20 via-sky-500/70 from-sky-500 bottom-1/2 translate-y-1/2 md:start-0 start-1/2 ltr:md:translate-x-0 ltr:-translate-x-1/2 rtl:md:translate-x-0 rtl:translate-x-1/2 -z-1 shadow-md shadow-teal-500/10 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <About/>
        <Services/>
        <AgencyTab/>
        <Cta/>
        <Client/>
        <Pricing/>
        <Blogs/>
        <GetInTouch/>
        <Footer/>
        <Switcher/>
        </>
    )
}