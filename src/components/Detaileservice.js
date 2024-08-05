import React, { useState } from "react";
import { Link } from "react-router-dom";

import blog1 from '../assets/images/blog/01.jpg'
import blog2 from '../assets/images/blog/02.jpg'
import blog3 from '../assets/images/blog/03.jpg'
import blog4 from '../assets/images/blog/04.jpg'
import blog5 from '../assets/images/blog/05.png'
import blog6 from '../assets/images/blog/06.png'
import blog7 from '../assets/images/blog/07.png'
import blog8 from '../assets/images/blog/08.png'
import blog9 from '../assets/images/blog/09.png'
import styled, { keyframes } from "styled-components";
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
                            <ul className="flex-column p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                                <li role="presentation">
                                    <button className={`px-4 py-2 text-start text-base font-medium rounded-md w-full hover:text-sky-500 duration-500 ${activeIndex === 1 ? 'text-white bg-sky-500 hover:text-white' : ''}`} onClick={() => setActiveIndex(1)}>
                                        
                                        <span className="text-lg mt-2 block text-dark-600 font-semibold shadow-md p-2 rounded text-lg mt-2 block text-center"><strong>Formation</strong></span>
                                        
                                        <span className="block mt-2">We offer flexible and comprehensive online marketing plans</span>
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button className={`px-4 py-2 text-start text-base font-medium rounded-md w-full mt-6 hover:text-sky-500 duration-500 ${activeIndex === 2 ? 'text-white bg-sky-500 hover:text-white' : ''}`} onClick={() => setActiveIndex(2)}>
                                        
                                        <span className="text-lg mt-2 block text-dark-600 font-semibold shadow-md p-2 rounded text-lg mt-2 block text-center"><strong>Nettoyage des façades</strong></span>
                                        <span className="block mt-2">We offer flexible and comprehensive online marketing plans</span>
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button className={`px-4 py-2 text-start text-base font-medium rounded-md w-full mt-6 hover:text-sky-500 duration-500 ${activeIndex === 3 ? 'text-white bg-sky-500 hover:text-white' : ''}`} onClick={() => setActiveIndex(3)}>
                                        
                                        <span className="text-lg mt-2 block text-dark-600 font-semibold shadow-md p-2 rounded text-lg mt-2 block text-center"><strong>Domiciliation</strong></span>
                                        <span className="block mt-2">We offer flexible and comprehensive online marketing plans</span>
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button className={`px-4 py-2 text-start text-base font-medium rounded-md w-full mt-6 hover:text-sky-500 duration-500 ${activeIndex === 4 ? 'text-white bg-sky-500 hover:text-white' : ''}`} onClick={() => setActiveIndex(4)}>
                                        
                                        <span className="text-lg mt-2 block text-dark-600 font-semibold shadow-md p-2 rounded text-lg mt-2 block text-center"><strong>Developpement</strong></span>
                                        <span className="block mt-2">We offer flexible and comprehensive online marketing plans</span>
                                    </button>
                                </li>
                                <li role="presentation">
                                    <button className={`px-4 py-2 text-start text-base font-medium rounded-md w-full mt-6 hover:text-sky-500 duration-500 ${activeIndex === 5 ? 'text-white bg-sky-500 hover:text-white' : ''}`} onClick={() => setActiveIndex(5)}>
                                        
                                        <span className="text-lg mt-2 block text-dark-600 font-semibold shadow-md p-2 rounded text-lg mt-2 block text-center"><strong>Recruitment</strong></span>
                                        <span className="block mt-2">We offer flexible and comprehensive online marketing plans</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-8 md:col-span-7">
                        <div id="myTabContent" className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                            <div className={activeIndex === 1 ? '' : 'hidden' }>
                                <img src={blog5} className="shadow dark:shadow-gray-700 rounded-md" alt=""/>

                                <div className="mt-6">
                                    <div className="flex items-center "style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h5 className="text-lg font-medium"><strong>Service de Formation</strong></h5>
                                        <CTA>
                                        <Link to="" className="text-sky-500 ">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                        </CTA>
                                    </div>
                                    <p className="text-slate-400 mt-4">Nous offrons des formations professionnelles de haute qualité, adaptées à tous les niveaux d'expertise. Nos programmes sont conçus pour fournir des compétences pratiques et théoriques, vous permettant de progresser dans votre carrière et d'atteindre vos objectifs professionnels. Que vous soyez débutant ou expert, nos formateurs expérimentés vous accompagneront tout au long de votre parcours d'apprentissage.</p>
                                    <br></br>
                                    <h5 className="text-lg font-medium"><strong>Avantages et Bénéfices </strong></h5>
                                    <p className="text-slate-400 mt-4">Nos formations offrent une expertise pratique, adaptée aux besoins spécifiques de chaque participant, améliorant ainsi leurs compétences et leur employabilité.</p>
                                    <br></br>
                                    <h5 className="text-lg font-medium"><strong>Public Cible  </strong></h5>
                                    <p className="text-slate-400 mt-4">Ces formations s’adressent aux professionnels souhaitant évoluer dans leur carrière, aux entreprises cherchant à développer les compétences de leurs équipes, et aux personnes en reconversion professionnelle.</p>
                                    <br></br>
                                    <h5 className="text-lg font-medium"><strong>Processus ou Méthodologie </strong></h5>
                                    <p className="text-slate-400 mt-4">Chaque formation commence par une analyse des besoins, suivie d'un programme personnalisé dispensé par des experts. Nous combinons théorie et pratique pour garantir une assimilation efficace des connaissances.</p>
                                    <br></br>
                                    <h5 className="text-lg font-medium"><strong>Valeur Ajoutée </strong></h5>
                                    <p className="text-slate-400 mt-4">Nos formations se distinguent par leur flexibilité et leur approche pratique, intégrant les dernières tendances et technologies pour offrir des solutions pertinentes et immédiatement applicables sur le terrain.</p>

                                    <div className="mt-4">
                                        <CTA>
                                        <Link to="" >Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                        </CTA>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 2 ? '' : 'hidden' }>
                                <img src={blog6} className="shadow dark:shadow-gray-700 rounded-md" alt=""/>

                                <div className="mt-6">
                                <div className="flex items-center "style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h5 className="text-lg font-medium"><strong>Service de Nettoyage des Façades</strong></h5>
                                        <CTA>
                                        <Link to="" className="text-sky-500 ">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                        </CTA>
                                    </div>
                                    <p className="text-slate-400 mt-4">Notre service de nettoyage des façades vous garantit des résultats impeccables pour redonner éclat et propreté à vos bâtiments. Grâce à des techniques professionnelles et des produits respectueux de l'environnement, nous éliminons efficacement saletés, moisissures et polluants. Faites confiance à notre expertise pour préserver l'apparence et la durabilité de vos façades.</p>
                                    <br></br>
                                    <h5 className="text-lg font-medium"><strong>Avantages et Bénéfices </strong></h5>
                                    <p className="text-slate-400 mt-4">Ce service restaure l’apparence de vos façades, prolonge leur durée de vie, et améliore l'image de votre propriété en offrant une apparence propre et soignée.</p>
                                    <br></br>
                                    <h5 className="text-lg font-medium"><strong>Public Cible  </strong></h5>
                                    <p className="text-slate-400 mt-4">Ce service est destiné aux propriétaires de bâtiments résidentiels, commerciaux et industriels, ainsi qu'aux gestionnaires de biens immobiliers souhaitant maintenir la propreté et l'intégrité de leurs façades.</p>
                                    <br></br>
                                    <h5 className="text-lg font-medium"><strong>Processus ou Méthodologie </strong></h5>
                                    <p className="text-slate-400 mt-4">Nous utilisons des techniques de nettoyage adaptées à chaque type de surface, incluant le lavage haute pression et l'utilisation de produits écologiques. Nous commençons par une évaluation détaillée, suivie d'un nettoyage approfondi et d'un contrôle qualité final.</p>
                                    <br></br>
                                    <h5 className="text-lg font-medium"><strong>Valeur Ajoutée </strong></h5>
                                    <p className="text-slate-400 mt-4">Notre expertise en nettoyage des façades garantit des résultats durables et une intervention rapide, tout en respectant les normes environnementales et de sécurité les plus strictes. </p>

                                    <div className="mt-4">
                                        <CTA>
                                        <Link to="" className="text-sky-500">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                        </CTA>                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 3 ? '' : 'hidden' }>
                                <img src={blog7} className="shadow dark:shadow-gray-700 rounded-md" alt=""/>

                                <div className="mt-6">
                                <div className="flex items-center "style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h5 className="text-lg font-medium"><strong>Service de Domiciliation</strong></h5>
                                        <CTA>
                                        <Link to="" className="text-sky-500 ">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                        </CTA>
                                    </div>
                                    <p className="text-slate-400 mt-4">Notre service de domiciliation vous offre une adresse professionnelle prestigieuse pour votre entreprise. En plus de simplifier la gestion administrative, nous assurons la réception de votre courrier et vous fournissons un support complet pour toutes vos démarches. Faites de notre adresse celle de votre entreprise pour renforcer votre image et optimiser votre organisation.</p>
                                    <br></br>
                                    <h5 className="text-lg font-medium"><strong>Avantages et Bénéfices </strong></h5>
                                    <p className="text-slate-400 mt-4">En utilisant notre adresse, vous bénéficiez d'une image professionnelle renforcée et d'une gestion simplifiée de votre correspondance, tout en conservant votre vie privée.</p>
                                    <br></br>
                                    <h5 className="text-lg font-medium"><strong>Public Cible  </strong></h5>
                                    <p className="text-slate-400 mt-4">Ce service est idéal pour les entrepreneurs, les freelances, les start-ups, et les petites entreprises qui cherchent à établir une présence professionnelle sans avoir besoin d'un bureau physique.</p>
                                    <br></br>
                                    <h5 className="text-lg font-medium"><strong>Processus ou Méthodologie </strong></h5>
                                    <p className="text-slate-400 mt-4">Nous offrons un processus d'enregistrement facile, incluant la réception et la gestion du courrier, ainsi que des options de redirection selon vos besoins spécifiques. Vous pouvez accéder à vos documents en toute sécurité via notre plateforme en ligne.</p>
                                    <br></br>
                                    <h5 className="text-lg font-medium"><strong>Valeur Ajoutée </strong></h5>
                                    <p className="text-slate-400 mt-4">Notre service se distingue par sa flexibilité, son support personnalisé et sa capacité à offrir une adresse prestigieuse qui renforce la crédibilité de votre entreprise tout en optimisant vos opérations administratives. </p>

                                    <div className="mt-4">
                                        <CTA>
                                        <Link to="" className="text-sky-500">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                        </CTA>                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 4 ? '' : 'hidden' }>
                                <img src={blog8} className="shadow dark:shadow-gray-700 rounded-md" alt=""/>

                                <div className="mt-6">
                                <div className="flex items-center "style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h5 className="text-lg font-medium"><strong>Service de Developpement</strong></h5>
                                        <CTA>
                                        <Link to="" className="text-sky-500 ">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                        </CTA>
                                    </div>
                                    <p className="text-slate-400 mt-4">Nous proposons un service complet de création de sites web sur mesure pour répondre à vos besoins spécifiques. De la conception à la mise en ligne, notre équipe d'experts utilise les dernières technologies pour développer des sites esthétiques, fonctionnels et optimisés pour le référencement. Que vous ayez besoin d'un site vitrine, d'une boutique en ligne ou d'une plateforme personnalisée, nous sommes là pour réaliser votre projet.</p>
                                    <br></br>
                                    <h5 className="text-lg font-medium"><strong>Avantages et Bénéfices </strong></h5>
                                    <p className="text-slate-400 mt-4">Nos sites web sont conçus pour offrir une expérience utilisateur optimale, un design moderne et une fonctionnalité complète, ce qui améliore la visibilité en ligne et l'engagement des visiteurs.</p>
                                    <br></br>
                                    <h5 className="text-lg font-medium"><strong>Public Cible  </strong></h5>
                                    <p className="text-slate-400 mt-4">Ce service s’adresse aux entreprises, aux entrepreneurs, et aux professionnels cherchant à établir ou améliorer leur présence en ligne avec un site web qui reflète leur marque et atteint leurs objectifs commerciaux.</p>
                                    <br></br>
                                    <h5 className="text-lg font-medium"><strong>Processus ou Méthodologie </strong></h5>
                                    <p className="text-slate-400 mt-4">Nous commençons par une analyse approfondie de vos besoins, suivie de la création d’un design personnalisé. Ensuite, nous développons et testons le site pour garantir une performance optimale avant de le lancer.</p>
                                    <br></br>
                                    <h5 className="text-lg font-medium"><strong>Valeur Ajoutée </strong></h5>
                                    <p className="text-slate-400 mt-4">Notre approche personnalisée et notre expertise technique garantissent des résultats qui non seulement répondent à vos attentes mais les dépassent, en offrant un site web fonctionnel, esthétiquement plaisant et optimisé pour les moteurs de recherche. </p>

                                    <div className="mt-4">
                                        <CTA>
                                        <Link to="" className="text-sky-500">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                        </CTA>
                                    </div>
                                </div>
                            </div>
                            <div className={activeIndex === 5 ? '' : 'hidden' }>
                                <img src={blog9} className="shadow dark:shadow-gray-700 rounded-md" alt=""/>

                                <div className="mt-6">
                                <div className="flex items-center "style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <h5 className="text-lg font-medium"><strong>Service de Recruitment</strong></h5>
                                        <CTA>
                                        <Link to="" className="text-sky-500 ">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                        </CTA>
                                    </div>
                                    <p className="text-slate-400 mt-4">Notre service de recrutement pour entreprises internationales vous aide à identifier et à embaucher les meilleurs talents à l'échelle mondiale. Grâce à notre vaste réseau et à notre expertise en ressources humaines, nous trouvons des candidats qualifiés qui répondent parfaitement à vos exigences spécifiques. Simplifiez votre processus de recrutement et renforcez votre équipe avec des professionnels talentueux issus de divers horizons.</p>
                                    <br></br>
                                    <h5 className="text-lg font-medium"><strong>Avantages et Bénéfices </strong></h5>
                                    <p className="text-slate-400 mt-4">Ce service facilite l'accès à un vivier de candidats hautement qualifiés, améliore l'efficacité du processus de recrutement et réduit les délais d'embauche, tout en garantissant des recrutements adaptés aux besoins spécifiques de chaque entreprise.</p>
                                    <br></br>
                                    <h5 className="text-lg font-medium"><strong>Public Cible  </strong></h5>
                                    <p className="text-slate-400 mt-4">Ce service est destiné aux multinationales, aux entreprises en expansion internationale et aux organisations cherchant à renforcer leur équipe avec des professionnels talentueux issus de divers marchés globaux.</p>
                                    <br></br>
                                    <h5 className="text-lg font-medium"><strong>Processus ou Méthodologie </strong></h5>
                                    <p className="text-slate-400 mt-4">Nous utilisons des méthodes de recherche avancées et un réseau mondial pour sourcer des candidats. Le processus inclut une évaluation approfondie des compétences, des entretiens ciblés et une gestion proactive des candidatures pour garantir une correspondance optimale.</p>
                                    <br></br>
                                    <h5 className="text-lg font-medium"><strong>Valeur Ajoutée </strong></h5>
                                    <p className="text-slate-400 mt-4">Notre expertise en recrutement international permet de trouver des talents adaptés aux exigences spécifiques de votre entreprise, tout en offrant un service personnalisé et un soutien tout au long du processus de recrutement pour assurer une intégration réussie. </p>

                                    <div className="mt-4">
                                        <CTA>
                                        <Link to="" className="text-sky-500">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                                        </CTA>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            
        </section>
    )
}
