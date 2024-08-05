import React,{useState} from "react";
import { Link } from "react-router-dom";
import { servicesData, servicesbutton } from "../data/data";

import heroImg from "../assets/images/about2.jpg"
import bg from '../assets/images/bg/2.png'

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
import Detailservice from "../components/Detaileservice";



import { FiMonitor } from '../assets/icons/vander'

import CountUp from 'react-countup';

import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/scss/modal-video.scss';

export default function Service(){

    return(
        <>
        <Navbar/>
        <Detailservice/>
        <GetInTouch/>
        <Footer/>
        <Switcher/>
        </>
    )
}
