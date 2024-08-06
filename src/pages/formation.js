import React from "react";
import { Link } from "react-router-dom";

import hero1 from '../assets/images/home.png'
import Navbar from "../components/navbar";
import Formation from "../components/formation";
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton';


export default function IndexSix(){

    return(
        <>
        <Navbar/>
        <WhatsAppFloatingButton/>
            <section >
                 <Formation/>
            </section>
        </>
    )
}