import React from "react";
import { Link } from "react-router-dom";

export default function Pricing(){
    return(
        <section className="relative md:py-24 py-16 bg-slate-50 dark:bg-slate-800" id="pricing">
        <div className="container relative">
            <div className="grid grid-cols-1 pb-6 text-center">
                <h3 className="font-semibold text-2xl leading-normal mb-4">Our Pricing</h3>
                <p className="text-slate-400 max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md h-fit">
                    <h6 className="font-semibold mb-5 text-xl">Free</h6>

                    <div className="flex mb-5">
                        <span className="text-lg font-medium">$</span>
                        <span className="price text-5xl h6 font-semibold mb-0">0</span>
                        <span className="text-lg font-medium self-end mb-1">/mo</span>
                    </div>

                    <ul className="list-none text-slate-400">
                        <li className="mb-1 flex"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>We offers a free month of service for new customers.</span></li>
                    </ul>
                    <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Free Demo</Link>
                </div>

                <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md h-fit">
                    <h6 className="font-semibold mb-5 text-xl">Single</h6>

                    <div className="flex mb-5">
                        <span className="text-lg font-medium">$</span>
                        <span className="price text-5xl h6 font-semibold mb-0">9</span>
                        <span className="text-lg font-medium self-end mb-1">/mo</span>
                    </div>

                    <ul className="list-none text-slate-400">
                        <li className="mb-1 flex"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>We offers a free 7 days of service for new customers.</span></li>
                        <li className="mb-1 flex"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Our Talented & Experienced Marketing Agency</span></li>
                    </ul>
                    <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Subscribe Now</Link>
                </div>

                <div className="group relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md h-fit">
                    <div className="bg-gradient-to-tr from-teal-500 to-teal-700 text-white py-2 px-6 h6 text-lg font-medium">Popular</div>
                    <div className="p-6">
                        <h6 className="font-semibold mb-5 text-xl">Professional</h6>

                        <div className="flex mb-5">
                            <span className="text-lg font-medium">$</span>
                            <span className="price text-5xl h6 font-semibold mb-0">49</span>
                            <span className="text-lg font-medium self-end mb-1">/mo</span>
                        </div>

                        <ul className="list-none text-slate-400">
                            <li className="mb-1 flex"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>We offers a free 14 days of service for new customers.</span></li>
                            <li className="mb-1 flex"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Full Access</span></li>
                            <li className="mb-1 flex"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Source Files</span></li>
                            <li className="mb-1 flex"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Free Appointments</span></li>
                            <li className="mb-1 flex"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Enhanced Security</span></li>
                            <li className="mb-1 flex"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Free Installment</span></li>
                        </ul>
                        <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white w-full mt-5">Buy Now</Link>

                        <p className="text-sm text-slate-400 mt-1.5"><span className="text-red-600">*</span>T&C Apply</p>
                    </div>
                </div>

                <div className="group p-[1px] relative overflow-hidden shadow dark:shadow-gray-700 rounded-md bg-gradient-to-tr from-teal-500 to-teal-700 h-fit">
                    <div className="p-6 bg-white dark:bg-slate-900 rounded-md">
                        <h6 className="font-semibold mb-5 text-xl">Custom</h6>

                        <p className="text-slate-400 mb-5">Pricing plan will be as per client or company requirements</p>

                        <ul className="list-none">
                            <li className="mb-1 font-medium flex"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Custom Pricing</span></li>
                        </ul>
                        <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Talk to us</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}