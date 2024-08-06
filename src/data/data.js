import { FiTrendingUp, FiDollarSign, FiCompass,FiCommand, FiBox, FiCamera, FiBell, FiMonitor } from '../assets/icons/vander'
import client1 from '../assets/images/team/01.jpg'
import client2 from '../assets/images/team/02.jpg'
import client3 from '../assets/images/team/03.jpg'
import client4 from '../assets/images/team/04.jpg'
import client5 from '../assets/images/team/05.jpg'
import client6 from '../assets/images/team/06.jpg'
import { CgWebsite } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineCleaningServices } from "react-icons/md";
import blog1 from '../assets/images/blog/01.jpg'
import blog2 from '../assets/images/blog/02.jpg'
import blog3 from '../assets/images/blog/03.jpg'
import blog4 from '../assets/images/blog/04.jpg'
import blog6 from '../assets/images/blog/06.jpg'
import blog7 from '../assets/images/blog/07.jpg'
import blog8 from '../assets/images/blog/08.jpeg'
import blog5 from '../assets/images/blog/05.webp'

import company1 from '../assets/images/team/amazon.svg'
import company2 from '../assets/images/team/google.svg'
import company3 from '../assets/images/team/lenovo.svg'
import company4 from '../assets/images/team/paypal.svg'
import company5 from '../assets/images/team/shopify.svg'
import company6 from '../assets/images/team/spotify.svg'

export const servicesData = [
    {
        icon:CgWebsite,
        title:'Dynamic Website Design and Developmen',
        desc:'We create dynamic web applications and custom websites tailored to your needs. Our solutions are responsive, user-friendly, and built with the latest technologies to help your business thrive online.'
    },
    {
        icon:MdOutlineCleaningServices,
        title:'Cleaning the glasses',
        desc:'Professional glass cleaning services that ensure spotless, streak-free results for a clear view every time.'
    },
    {
        icon:IoHomeOutline,
        title:'Domiciliation',
        desc:'Get a prestigious address for your business.'
    },
]

export const clientData = [
    {
        image:client1,
        name:'Calvin Carlo',
        title:'Manager',
        desc:'" I was blown away by the personalized support I received from this team. Their expertise in global job placement helped me land a fantastic position abroad. Highly recommend their services! "'
    },
    {
        image:client2,
        name:'Christa Smith',
        title:'Manager',
        desc:'"Navigating international job markets can be daunting, but this company made it so much easier. Their multilingual support and document assistance were top-notch. I couldn’t have done it without them!"'
    },
    {
        image:client3,
        name:'Jemina CLone',
        title:'Manager',
        desc:'" needed help with job placements in several countries, and their tailored support was exceptional. The team’s attention to detail and professionalism made the entire process smooth and stress-free."'
    },
    {
        image:client4,
        name:'Smith Vodka',
        title:'Manager',
        desc:'" The document assistance was a lifesaver for my international job search. Their guidance was clear and effective, and their ability to support in multiple languages was a huge bonus."'
    },
    {
        image:client5,
        name:'Cristino Murfi',
        title:'Manager',
        desc:'"I was impressed with how well they understood the complexities of global job placement. The support was personalized, and their multilingual team made sure I was well-prepared for every step of the process."'
    },
]

export const blogData = [
    {
        image:blog6,
        title:'LearnEnglish',
        desc:'Learn English and improve your skills through our high-quality courses and resources.We provide you with the right tools to help you interact confidently in the real world.',
        date:'13th March 2023'
    },
    {
        image:blog8,
        title:'Arbitration Techniques Installation and Use',
        desc:'We provide expert installation and guidance on arbitration techniques, ensuring efficient setup and effective use for resolving disputes.',
        date:'5th May 2023'
    },
    {
        image:blog7,
        title:'Learn music',
        desc:"Discover and develop your musical talents with our personalized music lessons. Whether you're a beginner or looking to refine your skills.",
        date:'19th June 2023'
    },
    
    {
        id:11,
        image:blog7,
        title:"Apprendre le théatre pour les enfants",
        desc:'La formation « Apprendre le théâtre pour les enfants » initie les jeunes...',
        detail:"La formation « Apprendre le théâtre pour les enfants » initie les jeunes à l’art dramatique en développant leur confiance en soi, leurs compétences en communication, et leur créativité. À travers des jeux de rôle, des improvisations, et des exercices de création, les enfants apprennent à exprimer leurs émotions et idées tout en renforçant leur esprit d'équipe et leur capacité à travailler en groupe. La formation introduit également les bases du théâtre, comme la prise de parole en public et la gestion du stress de la scène, offrant ainsi une expérience enrichissante qui stimule à la fois leur développement personnel et leurs compétences sociales",
        type: 'Formation'
    },
    {
        id:12,
        image:blog6,
        title:"Formation ascenseur",
        desc:'La formation sur les ascenseurs est conçue pour fournir aux participants...',
        detail:"La formation sur les ascenseurs est conçue pour fournir aux participants une compréhension complète des systèmes d'ascenseurs, de leur installation à leur maintenance. Elle couvre les principes de fonctionnement des ascenseurs, les procédures de sécurité, et les techniques de dépannage. Les participants apprendront à installer, entretenir, et réparer les ascenseurs tout en respectant les normes de sécurité et de réglementation en vigueur. La formation est idéale pour les techniciens, ingénieurs, et toute personne impliquée dans le secteur des ascenseurs, offrant les compétences nécessaires pour assurer le bon fonctionnement et la sécurité des équipements.",
        type: 'Formation'
    },
    {
        id:13,
        image:blog5,
        title:"la conduite de train et de tramway",
        desc:'La formation à la conduite de train et de tramway prépare les participants...',
        detail:"La formation à la conduite de train et de tramway prépare les participants à piloter ces véhicules de manière sécurisée et efficace. Elle couvre les aspects techniques de la conduite, y compris le maniement des commandes, la gestion des systèmes de signalisation, et le respect des procédures de sécurité. Les participants apprennent également à gérer les situations d'urgence, à optimiser la consommation d'énergie et à assurer le confort des passagers. La formation inclut des simulations pratiques et théoriques pour développer des compétences approfondies en conduite et en gestion des opérations ferroviaires et de tramway, tout en respectant les normes réglementaires en vigueur.",
        type: 'Formation'
    },
    {
        id:14,
        image:blog4,
        title:'language',
        desc:'The Ocean Connecting offers a comprehensive language learning program covering...',
        detail:'The Ocean Connecting offers a comprehensive language learning program covering levels A1 to C2. It features young teachers, engaging activities, educational trips, and flexible schedules. Students benefit from regular level assessments, free access to PCs and Wi-Fi, and air-conditioned classrooms. The program also provides psychological monitoring and guidance, ensuring a supportive learning environment.this program aims to enhance language proficiency through interactive and diverse methods, accommodating different learning paces and needs.',
        type: 'language'
    }
]

export const companyLogo = [company1, company2, company3, company4, company5, company6]