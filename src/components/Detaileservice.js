import React, { useState } from "react";
import { Link } from "react-router-dom";
import { serviceData } from "../data/data";
import styled from "styled-components";
const CTA = styled.button`
  background-color: var(--white);
  color: #3a86ff;
  padding: 0.5rem 1rem;
  margin-top: 2px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  transition: transform 0.2s;
  border: solid 1px blue;
  @media only screen and (max-width: 48em) {
    padding: 0.2rem 1rem;
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

export default function Daitalservice(){
    const [ activeIndex, setActiveIndex ] = useState(1)
    return(
        <section className="realtive md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="font-semibold text-2xl leading-normal mb-4">NO SERVICES</h3>
                    <p className="text-slate-400 max-w-xl mx-auto">Nous proposons des formations professionnelles adaptées à tous les niveaux, un service de nettoyage de glace pour assurer sécurité et propreté en hiver, ainsi qu'une domiciliation pour offrir à votre entreprise une adresse prestigieuse et une gestion administrative simplifiée.</p>
                </div>
                <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
                    <div className="lg:col-span-4 md:col-span-5">
                        <div className="sticky top-20">
                        {serviceData.map((item, index) =>{
                    return(
                            <ul className="flex-column p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md " key={index}>
                                <li role="presentation">
                                    <button className={`px-4 py-2 text-start text-base font-medium rounded-md w-full hover:text-sky-500 duration-500 ${activeIndex === item.id ? 'text-white bg-sky-500 hover:text-white' : ''}`} onClick={() => setActiveIndex(item.id)}>
                                        
                                        <span className="text-lg mt-2 block text-dark-600 font-semibold shadow-md p-2 rounded text-lg mt-2 block text-center"><strong>{item.title}</strong></span>
                                        
                                        <span className="block mt-2">{item.desc}</span>
                                    </button>
                                </li>
                            </ul>
                            )})}
                        </div>
                    </div>
                    <div className="lg:col-span-8 md:col-span-7">
                        <div id="myTabContent" className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                        {serviceData.map((item, index) =>{
                    return(
                            <div className={activeIndex === item.id ? '' : 'hidden' } key={index}>
                                <img src={item.image} className="shadow dark:shadow-gray-700 rounded-md"  alt=""/>

                                <div className="mt-6">
                                <div className="flex items-center "style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h5 className="text-lg font-medium"><strong>{item.para1}</strong></h5>
                                        <CTA>
                                        <Link to="" className="text-sky-500 ">{item.Button} <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                        </CTA>
                                    </div>
                                    <p className="text-slate-400 mt-4">{item.desc_para1}</p>
                                    <br></br>
                                    <h5 className="text-lg font-medium"><strong>{item.para2} </strong></h5>
                                    <p className="text-slate-400 mt-4">{item.desc_para2}</p>
                                    <br></br>
                                    <h5 className="text-lg font-medium"><strong>{item.para3}  </strong></h5>
                                    <p className="text-slate-400 mt-4">{item.desc_para3}</p>
                                    <br></br>
                                    <h5 className="text-lg font-medium"><strong>{item.para4} </strong></h5>
                                    <p className="text-slate-400 mt-4">{item.desc_para4}</p>
                                    <br></br>
                                    <h5 className="text-lg font-medium"><strong>{item.para5} </strong></h5>
                                    <p className="text-slate-400 mt-4">{item.desc_para5}</p>

                                    <div className="mt-4">
                                        <CTA>
                                        <Link to="" className="text-sky-500"smooth={true} duration={1000} activeClass='active' spy={true} >{item.Button}  <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                        </CTA>                                    </div>
                                </div>
                            </div>
                            )})}
                        </div>
                    </div>
                    </div>
                </div>   
        </section>
    )
}

