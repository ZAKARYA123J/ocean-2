import React from "react";
import { Link } from "react-router-dom";

import hero1 from '../assets/images/home.png'
import Navbar from "../components/navbar";
import Formation from "../components/formation";


export default function IndexSix(){

    return(
        <>
        <Navbar/>
            <section >
                 <Formation/>
            </section>
        </>
    )
}