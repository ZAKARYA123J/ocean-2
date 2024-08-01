import React,{useState} from "react";
import { Link } from "react-router-dom";

import ctaImage from "../assets/images/home.png"

import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/scss/modal-video.scss';

export default function Cta(){
    let [isOpen, setOpen] = useState(false);
    return(
        <section className="relative md:py-24 py-16 md:pt-0 pt-0">
        <div className="container relative">
            <div className="grid grid-cols-1 justify-center">
                <div className="relative z-1">
                    <div className="grid grid-cols-1 md:text-start text-center justify-center">
                        <div className="relative">
                            <img src={ctaImage} alt=""/>
                            <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                <Link to="#!" onClick={() => setOpen(true)}
                                    className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-teal-500 dark:text-white">
                                    <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                </Link>
                            </div>
                            <ModalVideo
                                channel="youtube"
                                youtube={{ mute: 0, autoplay: 0 }}
                                isOpen={isOpen}
                                videoId="S_CGed6E610"
                                onClose={() => setOpen(false)} 
                            />
                        </div>
                    </div>
                    <div className="content md:mt-8">
                        <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                            <div className="lg:col-start-2 lg:col-span-10">
                                <div className="grid md:grid-cols-2 grid-cols-1 items-center">
                                    <div className="mt-8">
                                        <div className="section-title text-md-start">
                                            <h6 className="text-white/70 text-sm font-semibold uppercase">Get Free Trial</h6>
                                            <h3 className="font-semibold text-2xl leading-normal text-white mt-2">Get An Easy Start <br/> With Upcover Now</h3>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <div className="section-title text-md-start">
                                            <p className="text-white/70 max-w-xl mx-auto mb-2">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                                            <Link to="" className="text-white">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="absolute bottom-0 start-0 end-0 sm:h-2/3 h-4/5 bg-gradient-to-b from-teal-400 to-teal-500"></div>
    </section>
    )
}