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
import blog5 from '../assets/images/blog/05.jpg'
import blog6 from '../assets/images/blog/06.jpg'
import blog7 from '../assets/images/blog/07.jpg'
import blog8 from '../assets/images/blog/08.jpg'
import blog9 from '../assets/images/blog/09.jpg'
import blog10 from '../assets/images/blog/10.jpg'
import blog11 from '../assets/images/blog/11.jpg'
import blog12 from '../assets/images/blog/12.jpg'
import blog13 from '../assets/images/blog/13.jpg'
import blog14 from '../assets/images/blog/14.jpg'
import blog15 from '../assets/images/blog/15.jpg'

import company1 from '../assets/images/team/amazon.svg'
import company2 from '../assets/images/team/google.svg'
import company3 from '../assets/images/team/lenovo.svg'
import company4 from '../assets/images/team/paypal.svg'
import company5 from '../assets/images/team/shopify.svg'
import company6 from '../assets/images/team/spotify.svg'
import { Button } from 'react-scroll'

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
        id:1,
        image:blog15,
        title:'Formation de conduitendes bateaux et des voliers',
        desc: 'This is required when, for example, the final text is not yet available.',
        detail:"Cette formation offre une expérience complète pour les passionnés de navigation, incluant des cours théoriques et pratiques sur la sécurité, les techniques de voile, et la navigation côtière et hauturière. Les sessions sont dirigées par des instructeurs expérimentés et comprennent des pratiques intensives en mer. Les participants peuvent obtenir des certifications reconnues, leur permettant de piloter divers types de bateaux et de voiliers. Rejoignez-nous pour développer vos compétences nautiques et vivre une aventure maritime inoubliable!",
        type: 'Formation'
    },
    {
        id:2,
        image:blog9,
        title:'Formation Agent de Checkin Aeroport',
        desc:'La formation pour un Agent de Check-in Aéroport prépare les professionnels ...',
        detail:"La formation pour un Agent de Check-in Aéroport prépare les professionnels à gérer efficacement l'enregistrement des passagers et à assurer le bon déroulement des opérations aéroportuaires. Elle couvre l'accueil des passagers, la vérification des documents et la gestion des bagages, tout en utilisant des systèmes informatiques de réservation et de contrôle des bagages. Les participants apprennent également les procédures de sécurité aéroportuaire, les réglementations internationales, et les techniques de service client pour offrir une expérience agréable. La formation comprend des simulations pratiques pour appliquer les connaissances acquises et développer des compétences en communication et en gestion des situations d'urgence.",
        type: 'Formation'
    },
    {
        id:3,
        image:blog3,
        title:'HOME & FAMILY',
        desc: 'This is required when, for example, the final text is not yet available.',
        detail:"La formation Home & Family est conçue pour offrir des compétences pratiques et des connaissances approfondies sur la gestion de la vie domestique et des relations familiales. Elle aborde des sujets variés allant de l'organisation du foyer à la gestion des finances familiales, en passant par les techniques de communication et de résolution de conflits. L'objectif est de fournir aux participants les outils nécessaires pour créer un environnement familial harmonieux et bien organisé.",
        type:'Formation'
    },
    {
        id:4,
        image:blog14,
        title:"Formation d'installation et Usilisation VAR",
        desc:'This is required when, for example, the final text is not yet available.',
        detail:"La formation en installation et utilisation des VAR (Value Added Resellers) vise à fournir aux professionnels les compétences nécessaires pour installer, configurer et utiliser efficacement les solutions technologiques proposées par les VAR. Elle couvre les étapes d'installation des matériels et logiciels, la configuration avancée, ainsi que l'utilisation quotidienne des outils et applications. Les participants apprennent également à fournir un support technique, diagnostiquer et résoudre les problèmes, effectuer la maintenance préventive, et optimiser les performances des solutions. Cette formation est essentielle pour garantir une gestion efficace des solutions VAR et assurer une performance optimale des systèmes",
        type: 'Formation'
    },
    {
        id:5,
        image:blog12,
        title:'formation a la navigation maritime',
        desc:'This is required when, for example, the final text is not yet available.',
        detail:"La formation à la navigation maritime enseigne aux participants les compétences essentielles pour naviguer en toute sécurité en mer, en couvrant l'utilisation des outils de navigation comme les cartes maritimes et les systèmes GPS, ainsi que la compréhension des réglementations internationales. Les participants apprennent à planifier des trajets, à gérer les conditions météorologiques, et à assurer la sécurité du navire et de l'équipage. La formation inclut également des techniques de sauvetage et de gestion des situations d'urgence, garantissant une navigation efficace et sécurisée tout en respectant les règles maritimes.",
        type: 'Formation'
    },
    {
        id:6,
        image:blog13,
        title:'Pierres et métaux précieux',
        desc:'This is required when, for example, the final text is not yet available.',
        detail:"La formation sur les pierres et métaux précieux fournit une compréhension approfondie des caractéristiques, de l'évaluation et de l'entretien de ces matériaux précieux. Les participants apprennent à identifier et évaluer les pierres précieuses et les métaux précieux, en utilisant des critères de qualité et de certification. La formation couvre également les techniques de traitement et d'entretien pour préserver leur valeur, ainsi que les tendances du marché et les pratiques commerciales. En outre, elle aborde les enjeux éthiques et les pratiques durables liés à l'extraction et au commerce de ces ressources.",
        type: 'Formation'
    },
    {
        id:7,
        image:blog11,
        title:"Développer l'argriculture et la pêche",
        desc:'This is required when, for example, the final text is not yet available.',
        detail:"La formation pour développer l'agriculture et la pêche vise à optimiser les pratiques agricoles et halieutiques tout en garantissant la durabilité et la rentabilité. Elle couvre des techniques modernes de culture et de gestion des sols, ainsi que des méthodes de gestion durable des stocks de poissons et des écosystèmes aquatiques. Les participants apprennent à utiliser les dernières technologies et innovations, à adopter des pratiques respectueuses de l'environnement, et à élaborer des stratégies économiques pour améliorer la productivité et accéder aux marchés. Cette formation est essentielle pour les agriculteurs, pêcheurs, et gestionnaires de ressources naturelles souhaitant améliorer leurs pratiques et assurer un développement durable dans leurs secteurs respectifs.",
        type: 'Formation'
    },
    {
        id:8,
        image:blog10,
        title:"Sciences de la terre et Séismes",
        desc:'This is required when, for example, the final text is not yet available.',
        detail:"La formation en sciences de la Terre et séismes offre une compréhension approfondie des processus géologiques, des mécanismes des séismes, et des techniques d'évaluation des risques sismiques. Elle couvre les principes fondamentaux de la géologie, les mouvements des plaques tectoniques, et les causes des séismes, ainsi que les méthodes de surveillance et de prévision des tremblements de terre. Les participants apprennent également à évaluer les risques sismiques, développer des stratégies pour réduire les risques, et préparer les infrastructures et les communautés aux impacts des séismes. Cette formation est essentielle pour les chercheurs, ingénieurs, et professionnels en gestion des risques souhaitant renforcer leur expertise en sismologie et en réduction des risques.",
        type: 'Formation'
    },
    {
        image:blog8,
        title:'Arbitration Techniques Installation and Use',
        desc:'We provide expert installation and guidance on arbitration techniques, ensuring efficient setup and effective use for resolving disputes.',
        date:'5th May 2023'
    },
    {
        id:10,
        image:blog8,
        title:"Formation DJ",
        desc:'This is required when, for example, the final text is not yet available.',
        detail:"La formation DJ enseigne les compétences nécessaires pour devenir un DJ professionnel, en couvrant les techniques de mixage, l'utilisation des équipements modernes comme les platines et les contrôleurs, ainsi que les bases de la production musicale pour créer des remixes et des morceaux originaux. Les participants apprennent également à gérer des événements, à organiser des sets, et à interagir avec le public. En plus des aspects techniques, la formation aide à développer une identité artistique personnelle, à promouvoir son travail en ligne et à construire un portfolio. Elle est idéale pour les débutants et les DJs souhaitant perfectionner leurs compétences et entrer dans le monde de la musique.",
        type: 'Formation'
    },
    
    {
        id:11,
        image:blog7,
        title:"Apprendre le théatre pour les enfants",
        desc:'This is required when, for example, the final text is not yet available.',
        detail:"La formation « Apprendre le théâtre pour les enfants » initie les jeunes à l’art dramatique en développant leur confiance en soi, leurs compétences en communication, et leur créativité. À travers des jeux de rôle, des improvisations, et des exercices de création, les enfants apprennent à exprimer leurs émotions et idées tout en renforçant leur esprit d'équipe et leur capacité à travailler en groupe. La formation introduit également les bases du théâtre, comme la prise de parole en public et la gestion du stress de la scène, offrant ainsi une expérience enrichissante qui stimule à la fois leur développement personnel et leurs compétences sociales",
        type: 'Formation'
    },
    {
        id:12,
        image:blog6,
        title:"Formation ascenseur",
        desc:'This is required when, for example, the final text is not yet available.',
        detail:"La formation sur les ascenseurs est conçue pour fournir aux participants une compréhension complète des systèmes d'ascenseurs, de leur installation à leur maintenance. Elle couvre les principes de fonctionnement des ascenseurs, les procédures de sécurité, et les techniques de dépannage. Les participants apprendront à installer, entretenir, et réparer les ascenseurs tout en respectant les normes de sécurité et de réglementation en vigueur. La formation est idéale pour les techniciens, ingénieurs, et toute personne impliquée dans le secteur des ascenseurs, offrant les compétences nécessaires pour assurer le bon fonctionnement et la sécurité des équipements.",
        type: 'Formation'
    },
    {
        id:13,
        image:blog5,
        title:"la conduite de train et de tramway",
        desc:'This is required when, for example, the final text is not yet available.',
        detail:"La formation à la conduite de train et de tramway prépare les participants à piloter ces véhicules de manière sécurisée et efficace. Elle couvre les aspects techniques de la conduite, y compris le maniement des commandes, la gestion des systèmes de signalisation, et le respect des procédures de sécurité. Les participants apprennent également à gérer les situations d'urgence, à optimiser la consommation d'énergie et à assurer le confort des passagers. La formation inclut des simulations pratiques et théoriques pour développer des compétences approfondies en conduite et en gestion des opérations ferroviaires et de tramway, tout en respectant les normes réglementaires en vigueur.",
        type: 'Formation'
    },
    {
        id:14,
        image:blog4,
        title:'language',
        desc:'This is required when, for example, the final text is not yet available.',
        detail:'The Ocean Connecting offers a comprehensive language learning program covering levels A1 to C2. It features young teachers, engaging activities, educational trips, and flexible schedules. Students benefit from regular level assessments, free access to PCs and Wi-Fi, and air-conditioned classrooms. The program also provides psychological monitoring and guidance, ensuring a supportive learning environment.this program aims to enhance language proficiency through interactive and diverse methods, accommodating different learning paces and needs.',
        type: 'language'
    }
]

export const companyLogo = [company1, company2, company3, company4, company5, company6]