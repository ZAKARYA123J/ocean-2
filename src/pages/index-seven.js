import React from "react";
import { Link } from "react-router-dom";

import bg from '../assets/images/bg/1.jpg'
import bg2 from '../assets/images/bg/2.jpg'

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

import { Carousel } from 'react-responsive-carousel';
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


export default function IndexSeven(){

    return(
        <>
        <NavLight/>
        <section className="swiper-slider-hero relative block h-screen" id="home">
            <div className="swiper-container absolute end-0 top-0 w-full h-full">
                <Carousel className="swiper-wrapper h-screen" autoPlay={true} infiniteLoop={true} interval={2000} showStatus={false} showThumbs={false} showArrows={false}>
                    <div className="swiper-slide flex items-center overflow-hidden">
                        <div className="slide-inner absolute end-0 top-0 w-full h-full slide-bg-image flex items-center bg-center;" style={{backgroundImage:`url(${bg})`}}>
                            <div className="absolute inset-0 bg-black/70"></div>
                            <div className="container relative">
                                <div className="grid grid-cols-1">
                                    <div className="text-left">
                                        <h1 className="font-bold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl capitalize text-white mb-5">Connect with <br/> customers smartly</h1>
                                        <p className="text-white/70 text-lg max-w-xl">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                                        
                                        <div className="mt-6">
                                            <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white">See More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div className="swiper-slide flex items-center overflow-hidden">
                        <div className="slide-inner absolute end-0 top-0 w-full h-full slide-bg-image flex items-center bg-center;" style={{backgroundImage:`url(${bg2})`}}>
                            <div className="absolute inset-0 bg-black/70"></div>
                            <div className="container relative">
                                <div className="grid grid-cols-1">
                                    <div className="text-left">
                                        <h1 className="font-bold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl capitalize text-white mb-5">Get all the <br/> inspirations for your business</h1>
                                        <p className="text-white/70 text-lg max-w-xl">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                                        
                                        <div className="mt-6">
                                            <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white">See More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </Carousel>

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