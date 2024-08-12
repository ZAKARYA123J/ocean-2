import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {FiSun, FiMoon} from '../assets/icons/vander'
// import img from './ocean3.png'
export default function Switcher(){
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
        return()=>{
            window.removeEventListener("scroll", () => {
                setScroll(window.scrollY > 50);
            });
        }
    }, []);

    const themChange = () =>{
        const htmlTag = document.getElementsByTagName("html")[0]
            
            if (htmlTag.className.includes("dark")) {
                htmlTag.className = 'light'
            } else {
                htmlTag.className = 'dark'
            }
    }

    const modeChange = (e) =>{
        const htmlTag = document.getElementsByTagName("html")[0]
        if(e.target.innerText === "LTR"){
            htmlTag.dir = "ltr"
        }
        else{
            htmlTag.dir = "rtl"
        }
    }

    const scrollTop = () =>{
        window.scrollTo({ 
            top: 0,  
            behavior: 'smooth'
          });
    }

    return(
        <>
         <Link to="#" onClick={()=>scrollTop()} id="back-to-top" className={`back-to-top fixed text-lg rounded-full z-10 bottom-5 right-5 size-9 text-center bg-sky-500 text-white leading-9 ${scroll ? 'block' : 'hidden' }`}><i className="mdi mdi-arrow-up"></i></Link>

        </>
    )
}
