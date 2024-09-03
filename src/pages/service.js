import React from "react";
import Navbar from "../components/navbar";
import GetInTouch from "../components/getInTuoch";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import Detailservice from "../components/Detaileservice";
import '../../node_modules/react-modal-video/scss/modal-video.scss';
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton';
import { useParams } from "react-router-dom";
export default function Service(){
    const {id}=useParams()

    return(
        <>
        <Navbar/>
        <Detailservice id={id}/>
        <WhatsAppFloatingButton/>
        <GetInTouch/>
        <Footer/>
        <Switcher/>
        </>
    )
}
