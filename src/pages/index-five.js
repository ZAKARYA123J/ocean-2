import React from "react";
import { Link } from "react-router-dom";

import bg from '../assets/images/bg/bg2.png'

import Navbar from "../components/navbar";
import About from "../components/about";
import Services from "../components/services";
import AgencyTab from "../components/agencyTab";
import Cta from "../components/cta";
import Client from "../components/client";
import Pricing from "../components/pricing";
import Blogs from "../components/blog";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import BlogDetail from "../components/BlogDetail";

export default function IndexFive(){

    return(
        <>
        <Navbar/>
        <section className="mt-16">
    <div className="container relative">
        <div className="grid lg:grid-cols-12 md:grid-cols-2 mt-12 items-center gap-[30px]">
            <div className="lg:col-span-7">
                <BlogDetail/>
            </div>
        </div>
    </div>
</section>

        </>
    )
}