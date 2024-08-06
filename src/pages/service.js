import React from "react";
import Navbar from "../components/navbar";
import GetInTouch from "../components/getInTuoch";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import Detailservice from "../components/Detaileservice";
import '../../node_modules/react-modal-video/scss/modal-video.scss';
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton';

export default function Service(){

    return(
        <>
        <Navbar/>
        <Detailservice/>
        <WhatsAppFloatingButton/>
        <GetInTouch/>
        <Footer/>
        <Switcher/>
        </>
    )
}
