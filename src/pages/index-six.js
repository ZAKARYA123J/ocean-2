import React from "react";
import { Link } from "react-router-dom";

import hero1 from '../assets/images/home.png'

import NavLight from "../components/navLight";
import About from "../components/about";
import Services from "../components/services";
import AgencyTab from "../components/agencyTab";
import Cta from "../components/cta";
import Client from "../components/client";
import Pricing from "../components/pricing";
import Blogs from "../components/blog";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import GetInTouch from "../components/getInTuoch";

export default function IndexSix(){

    return(
        <>
        <NavLight/>
        <section className="relative md:h-screen md:py-0 py-36 items-center overflow-hidden bg-gradient-to-t to-teal-600 via-teal-600/50 from-transparent" id="home">
            <div className="container relative">
                <div className="grid grid-cols-1 md:mt-48 mt-10 text-center">
                    <h4 className="font-bold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl capitalize text-white mb-5">Get powerful <br/> solutions for your business</h4>
                    <p className="text-white/70 text-lg max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>

                    <div className="subcribe-form mt-6 mb-3">
                        <form className="relative max-w-xl mx-auto">
                            <input type="email" id="emailid" name="email" className="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/60 dark:bg-slate-900/60 shadow dark:shadow-gray-800" placeholder="yourname@domain.com"/>
                            <button type="submit" className="px-6 tracking-wide inline-flex items-center justify-center font-medium absolute top-[2px] end-[3px] h-[46px] bg-teal-500 text-white rounded-full">Subscribe Now</button>
                        </form>
                    </div>

                    <span className="text-white font-medium">Looking for help? <Link to="" className="text-white underline">Get in touch with us</Link></span>

                    <div className="overflow-hidden mt-8">
                        <img src={hero1} alt=""/>
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