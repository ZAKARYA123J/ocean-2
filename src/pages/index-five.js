import React from "react";
import { Link } from "react-router-dom";

import bg from '../assets/images/bg/bg2.png'

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

export default function IndexFive(){

    return(
        <>
        <NavLight/>
        <section className="relative flex items-center w-full py-36 lg:h-screen bg-gray-900 dark:bg-slate-800 bg-center bg-no-repeat bg-cover" style={{backgroundImage:`url(${bg})`}} id="home">
            <div className="container relative">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 mt-10 items-center gap-[30px]">
                    <div className="lg:col-span-7">
                        <span className="bg-teal-500 text-white text-[12px] font-medium px-2.5 py-0.5 rounded h-5 mb-4">Business</span>
                        <h4 className="font-semibold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl capitalize text-white mb-5">Welcome To Upcover</h4>
                
                        <p className="text-white/70 text-lg max-w-xl">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                    
                        <div className="relative mt-6">
                            <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white">Get Started</Link>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="bg-white dark:bg-slate-900 rounded-xl shadow dark:shadow-gray-800 md:p-8 p-6 lg:ms-10 z-10 relative">
                            <h4 className="mb-5 text-2xl font-semibold">We are offering 14 <br/> days free trial</h4>

                            <form>
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="">
                                        <label className="form-label font-medium">Your Name :</label>
                                        <input type="text" className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Name" name="name" required/>
                                    </div>

                                    <div className="">
                                        <label className="form-label font-medium">Your Email :</label>
                                        <input type="email" className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="Email" name="email" required/>
                                    </div>

                                    <div className="">
                                        <label className="form-label font-medium">Phone No. :</label>
                                        <input name="number" id="phNumber" className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0" placeholder="+12 12458 854" required/>
                                    </div>
                                    
                                    <div>
                                        <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white w-full">Free Trial</Link>
                                    </div>
                                </div>
                            </form>
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