import React from "react";
import { Link } from "react-router-dom";

import bg from '../assets/images/bg/bg2.png'

import Navbar from "../components/navbar";
import BlogDetail from "../components/BlogDetail";
import Footer from "../components/footer";

export default function IndexFive(){

    return(
        <>
        <Navbar/>
        <section className="">
    <div className=" mt-40 container relative">
        <div className="grid lg:grid-cols-12 md:grid-cols-2 mt-12 items-center gap-[200px]">
            <div className="lg:col-span-7">
                <BlogDetail/>
            </div>
        </div>
    </div>
</section>
<Footer/>
     </>
    )
}