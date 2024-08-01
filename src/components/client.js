import React from "react";
import { clientData } from "../data/data";

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

export default function Client(){
    const settings = {
        container: '.tiny-three-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 12,
        responsive: {
            992: {
                items: 3
            },

            767: {
                items: 2
            },

            320: {
                items: 1
            },
        },
      };
    return(
        <section className="relative md:py-24 py-16" id="review">
        <div className="container relative">
            <div className="grid grid-cols-1 pb-6 text-center">
                <h3 className="font-semibold text-2xl leading-normal mb-4">What Our Users Say</h3>

                <p className="text-slate-400 max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
            </div>

            <div className="grid grid-cols-1 mt-6">
                <div className="tiny-three-item">
                <TinySlider settings={settings}>
                    {clientData.map((item, index)=>{
                        return(
                            <div className="tiny-slide text-center" key={index}>
                                <div className="cursor-e-resize">
                                    <div className="content relative rounded shadow dark:shadow-gray-700 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left">
                                        <i className="mdi mdi-format-quote-open mdi-48px text-teal-500"></i>
                                        <p className="text-slate-400">{item.desc}</p>
                                        <ul className="list-none mb-0 text-amber-400 mt-3">
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                        </ul>
                                    </div>
                                    
                                    <div className="text-center mt-5">
                                        <img src={item.image} className="size-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto" alt=""/>
                                        <h6 className="mt-2 font-semibold">{item.name}</h6>
                                        <span className="text-slate-400 text-sm">{item.title}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </TinySlider>
                </div>
            </div>
        </div>
    </section>
    )
}