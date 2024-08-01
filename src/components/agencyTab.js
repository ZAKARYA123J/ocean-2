import React, { useState } from "react";
import { Link } from "react-router-dom";

import blog1 from '../assets/images/blog/01.jpg'
import blog2 from '../assets/images/blog/02.jpg'
import blog3 from '../assets/images/blog/03.jpg'

export default function AgencyTab(){
    const [ activeIndex, setActiveIndex ] = useState(1)
    return(
        <section className="realtive md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="font-semibold text-2xl leading-normal mb-4">A Performance-driven Marketing Agency</h3>

                    <p className="text-slate-400 max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
                    <div className="lg:col-span-4 md:col-span-5">
                        <div className="sticky top-20">
                            <ul className="flex-column p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                <li role="presentation">
                                    <button className={`px-4 py-2 text-start text-base font-medium rounded-md w-full hover:text-teal-500 duration-500 ${activeIndex === 1 ? 'text-white bg-teal-500 hover:text-white' : ''}`} onClick={() => setActiveIndex(1)}>
                                        <span className="block">Step 1</span>
                                        <span className="text-lg mt-2 block">SEO Audit</span>
                                        <span className="block mt-2">We offer flexible and comprehensive online marketing plans</span>
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button className={`px-4 py-2 text-start text-base font-medium rounded-md w-full mt-6 hover:text-teal-500 duration-500 ${activeIndex === 2 ? 'text-white bg-teal-500 hover:text-white' : ''}`} onClick={() => setActiveIndex(2)}>
                                        <span className="block">Step 2</span>
                                        <span className="text-lg mt-2 block">Project Execution</span>
                                        <span className="block mt-2">We offer flexible and comprehensive online marketing plans</span>
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button className={`px-4 py-2 text-start text-base font-medium rounded-md w-full mt-6 hover:text-teal-500 duration-500 ${activeIndex === 3 ? 'text-white bg-teal-500 hover:text-white' : ''}`} onClick={() => setActiveIndex(3)}>
                                        <span className="block">Step 3</span>
                                        <span className="text-lg mt-2 block">Results & Reporting</span>
                                        <span className="block mt-2">We offer flexible and comprehensive online marketing plans</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-8 md:col-span-7">
                        <div id="myTabContent" className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                            <div className={activeIndex === 1 ? '' : 'hidden' }>
                                <img src={blog1} className="shadow dark:shadow-gray-700 rounded-md" alt=""/>

                                <div className="mt-6">
                                    <h5 className="text-lg font-medium">SEO Audit</h5>
                                    <p className="text-slate-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, impedit vitae. Nobis, similique omnis cumque sapiente laboriosam animi quod cupiditate?</p>
                                    <div className="mt-4">
                                        <Link to="" className="text-teal-500">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 2 ? '' : 'hidden' }>
                                <img src={blog2} className="shadow dark:shadow-gray-700 rounded-md" alt=""/>

                                <div className="mt-6">
                                    <h5 className="text-lg font-medium">Project Execution</h5>
                                    <p className="text-slate-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, impedit vitae. Nobis, similique omnis cumque sapiente laboriosam animi quod cupiditate?</p>
                                    <div className="mt-4">
                                        <Link to="" className="text-teal-500">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 3 ? '' : 'hidden' }>
                                <img src={blog3} className="shadow dark:shadow-gray-700 rounded-md" alt=""/>

                                <div className="mt-6">
                                    <h5 className="text-lg font-medium">Results & Reporting</h5>
                                    <p className="text-slate-400 mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, impedit vitae. Nobis, similique omnis cumque sapiente laboriosam animi quod cupiditate?</p>
                                    <div className="mt-4">
                                        <Link to="" className="text-teal-500">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
