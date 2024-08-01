import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {FiSun, FiMoon} from '../assets/icons/vander'

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
         <Link to="#" onClick={()=>scrollTop()} id="back-to-top" className={`back-to-top fixed text-lg rounded-full z-10 bottom-5 right-5 size-9 text-center bg-teal-500 text-white leading-9 ${scroll ? 'block' : 'hidden' }`}><i className="mdi mdi-arrow-up"></i></Link>

        <div className="fixed top-1/4 -right-1 z-3">
            <span className="relative inline-block rotate-90">
                <input type="checkbox" className="checkbox opacity-0 absolute" id="chk" onChange={(e)=>themChange(e)}/>
                <label className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" htmlFor="chk">
                    <FiSun className="w-[18px] h-[18px] text-yellow-500"/>
                    <FiMoon className="w-[18px] h-[18px] text-yellow-500"/>
                    <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] size-7"></span>
                </label>
            </span>
        </div>

        <div className="fixed top-[40%] -right-3 z-50">
            <Link to="" id="switchRtl">
                <span className="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-medium rtl:block ltr:hidden" onClick={(e)=>modeChange(e)}>LTR</span>
                <span className="py-1 px-3 relative inline-block rounded-t-md -rotate-90 bg-white dark:bg-slate-900 shadow-md dark:shadow dark:shadow-gray-800 font-medium ltr:block rtl:hidden" onClick={(e)=>modeChange(e)}>RTL</span>
            </Link>
        </div>
        </>
    )
}