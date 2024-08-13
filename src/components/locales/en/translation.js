
import { CgWebsite } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineCleaningServices } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import { Link, useParams } from "react-router-dom";
import { Link as Link1 } from "react-scroll";
import client1 from '../../../assets/images/team/01.jpg'
import client2 from '../../../assets/images/team/02.jpg'
import client3 from '../../../assets/images/team/03.jpg'
import client4 from '../../../assets/images/team/04.jpg'
import client5 from '../../../assets/images/team/05.jpg'
// import formation4 from '../assets/images/formation/formation4.jpg'
import formation5 from '../../../assets/images/formation/formation05.jpg'
import formation6 from '../../../assets/images/formation/formation6.jpg'
import formation17 from '../../../assets/images/formation/formation17.jpg'
import formation8 from '../../../assets/images/formation/formation8.jpg'
import formation9 from '../../../assets/images/formation/formation9.jpg'
import formation10 from '../../../assets/images/formation/formation10.jpg'
import formation11 from '../../../assets/images/formation/formation11.jpg'
import formation12 from '../../../assets/images/formation/formation12.jpg'
import formation13 from '../../../assets/images/formation/formation13.jpg'
import formation14 from '../../../assets/images/formation/formation14.jpg'
import formation15 from '../../../assets/images/formation/15.jpg'
import formation16 from '../../../assets/images/formation/16.jpg'
import formation18 from '../../../assets/images/formation/formation18.jpg'
import formation19 from '../../../assets/images/formation/formation19.jpg'

import service1 from '../../../assets/images/service/service1.png'
import service2 from '../../../assets/images/service/service2.png'
import service3 from '../../../assets/images/service/service3.png'
import service4 from '../../../assets/images/service/service4.png'
import service5 from '../../../assets/images/service/service5.png'

import company1 from '../../../assets/images/team/amazon.svg'
import company2 from '../../../assets/images/team/google.svg'
import company3 from '../../../assets/images/team/lenovo.svg'
import company4 from '../../../assets/images/team/paypal.svg'
import company5 from '../../../assets/images/team/shopify.svg'
import company6 from '../../../assets/images/team/spotify.svg'
import belgium from '../../../assets/images/job/belgium.png'
import allemagne from '../../../assets/images/job/germany.png'
import croatie from '../../../assets/images/job/croatie.png'
import italy from '../../../assets/images/job/italy.png'
import spain from '../../../assets/images/job/spain.png'
import facade from '../../../assets//images/job/facade.png'
import resume from '../../../assets/images/job/resume.png'
import recrutocean from '../../../assets/images/service/recrutocean.png'
import recrutinter from '../../../assets/images/service/recrutinter2.png'



export const clientDataEN = [
    {
        image:client1,
        clientitle:"What Our Users Say",
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



// export const blogDataEN = [
//     {
//         id:1,
//         image:formation6,
//         Title:"Training",
//         text:"This administrative management training teaches participants the essential skills to excel in administrative tasks, covering document management, optimization of organizational processes, and professional communication. It combines theory and practice for skills that are immediately applicable in business.",
//         resrvedatail:"For each course you complete, you will receive a certification that you can share on your social networks (for example, LinkedIn). Each certification has a unique authentication number that allows it to be verified.",
//         resrveButton:"Réserver",
//         blogetitle:"Trends Trainings",
//         title:'language',
//         desc:'Ocean Connecting offers a comprehensive language learning program covering...',
//         detail:'The Ocean Connecting offers a comprehensive language learning program covering levels A1 to C2. It features young teachers, engaging activities, educational trips, and flexible schedules. Students benefit from regular level assessments, free access to PCs and Wi-Fi, and air-conditioned classrooms. The program also provides psychological monitoring and guidance, ensuring a supportive learning environment.this program aims to enhance language proficiency through interactive and diverse methods, accommodating different learning paces and needs.',
//         type: 'language',
//         button:"Read More",
//         data:"For each course you complete, you will receive a certification that you can share on your social networks (for example, LinkedIn). Each certification has a unique authentication number that allows it to be verified.",
//         reserver:"Reservé"
//     },
//     {
//         id:2,
//         image:formation9,
//         title:'Formation Agent de Checkin Aeroport',
//         desc:'La formation pour un Agent de Check-in Aéroport prépare les professionnels ...',
//         detail:"La formation pour un Agent de Check-in Aéroport prépare les professionnels à gérer efficacement l'enregistrement des passagers et à assurer le bon déroulement des opérations aéroportuaires. Elle couvre l'accueil des passagers, la vérification des documents et la gestion des bagages, tout en utilisant des systèmes informatiques de réservation et de contrôle des bagages. Les participants apprennent également les procédures de sécurité aéroportuaire, les réglementations internationales, et les techniques de service client pour offrir une expérience agréable. La formation comprend des simulations pratiques pour appliquer les connaissances acquises et développer des compétences en communication et en gestion des situations d'urgence.",
//         type: 'Formation',
//          button:"Read More",
//         data:"For each course you complete, you will receive a certification that you can share on your social networks (for example, LinkedIn). Each certification has a unique authentication number that allows it to be verified.",
//         reserver:"Reservé"
//     },
//     {
//         id:3,
//         image:formation8,
//         title:"Formation DJ",
//         desc:'La formation DJ enseigne les compétences nécessaires pour devenir un DJ...',
//         detail:"La formation DJ enseigne les compétences nécessaires pour devenir un DJ professionnel, en couvrant les techniques de mixage, l'utilisation des équipements modernes comme les platines et les contrôleurs, ainsi que les bases de la production musicale pour créer des remixes et des morceaux originaux. Les participants apprennent également à gérer des événements, à organiser des sets, et à interagir avec le public. En plus des aspects techniques, la formation aide à développer une identité artistique personnelle, à promouvoir son travail en ligne et à construire un portfolio. Elle est idéale pour les débutants et les DJs souhaitant perfectionner leurs compétences et entrer dans le monde de la musique.",
//         type: 'Formation',
//                 button:"Read More",
//                        data:"For each course you complete, you will receive a certification that you can share on your social networks (for example, LinkedIn). Each certification has a unique authentication number that allows it to be verified.",
//         reserver:"Reservé"
//     },
//     {
//         id:4,
//         image:formation15,
//         title:'Formation de conduitendes bateaux et des voliers',
//         desc: 'Cette formation offre une expérience complète pour les passionnés de navigation...',
//         detail:"Cette formation offre une expérience complète pour les passionnés de navigation, incluant des cours théoriques et pratiques sur la sécurité, les techniques de voile, et la navigation côtière et hauturière. Les sessions sont dirigées par des instructeurs expérimentés et comprennent des pratiques intensives en mer. Les participants peuvent obtenir des certifications reconnues, leur permettant de piloter divers types de bateaux et de voiliers. Rejoignez-nous pour développer vos compétences nautiques et vivre une aventure maritime inoubliable!",
//         type: 'Formation',
//                 button:"Read More",
//                        data:"For each course you complete, you will receive a certification that you can share on your social networks (for example, LinkedIn). Each certification has a unique authentication number that allows it to be verified.",
//         reserver:"Reservé"
//     },
//     {
//         id:5,
//         image:formation16,
//         title:'HOME & FAMILY',
//         desc: 'La formation Home & Family est conçue pour offrir des compétences pratiques et ...',
//         detail:"La formation Home & Family est conçue pour offrir des compétences pratiques et des connaissances approfondies sur la gestion de la vie domestique et des relations familiales. Elle aborde des sujets variés allant de l'organisation du foyer à la gestion des finances familiales, en passant par les techniques de communication et de résolution de conflits. L'objectif est de fournir aux participants les outils nécessaires pour créer un environnement familial harmonieux et bien organisé.",
//         type:'Formation',
//                 button:"Read More",
//                        data:"For each course you complete, you will receive a certification that you can share on your social networks (for example, LinkedIn). Each certification has a unique authentication number that allows it to be verified.",
//         reserver:"Reservé"
//     },
//     {
//         id:6,
//         image:formation14,
//         title:"Formation d'installation et Usilisation VAR",
//         desc:'La formation en installation et utilisation des VAR (Value Added Resellers)...',
//         detail:"La formation en installation et utilisation des VAR (Value Added Resellers) vise à fournir aux professionnels les compétences nécessaires pour installer, configurer et utiliser efficacement les solutions technologiques proposées par les VAR. Elle couvre les étapes d'installation des matériels et logiciels, la configuration avancée, ainsi que l'utilisation quotidienne des outils et applications. Les participants apprennent également à fournir un support technique, diagnostiquer et résoudre les problèmes, effectuer la maintenance préventive, et optimiser les performances des solutions. Cette formation est essentielle pour garantir une gestion efficace des solutions VAR et assurer une performance optimale des systèmes",
//         type: 'Formation',
//                 button:"Read More",
//                        data:"For each course you complete, you will receive a certification that you can share on your social networks (for example, LinkedIn). Each certification has a unique authentication number that allows it to be verified.",
//         reserver:"Reservé"
//     },
//     {
//         id:7,
//         image:formation12,
//         title:'formation a la navigation maritime',
//         desc:'La formation à la navigation maritime enseigne aux participants les compétences ...',
//         detail:"La formation à la navigation maritime enseigne aux participants les compétences essentielles pour naviguer en toute sécurité en mer, en couvrant l'utilisation des outils de navigation comme les cartes maritimes et les systèmes GPS, ainsi que la compréhension des réglementations internationales. Les participants apprennent à planifier des trajets, à gérer les conditions météorologiques, et à assurer la sécurité du navire et de l'équipage. La formation inclut également des techniques de sauvetage et de gestion des situations d'urgence, garantissant une navigation efficace et sécurisée tout en respectant les règles maritimes.",
//         type: 'Formation',
//         button:"Read More",
//                data:"For each course you complete, you will receive a certification that you can share on your social networks (for example, LinkedIn). Each certification has a unique authentication number that allows it to be verified.",
//         reserver:"Reservé"
//     },
//     {
//         id:8,
//         image:formation13,
//         title:'Pierres et métaux précieux',
//         desc:'La formation sur les pierres et métaux précieux fournit une compréhension ...',
//         detail:"La formation sur les pierres et métaux précieux fournit une compréhension approfondie des caractéristiques, de l'évaluation et de l'entretien de ces matériaux précieux. Les participants apprennent à identifier et évaluer les pierres précieuses et les métaux précieux, en utilisant des critères de qualité et de certification. La formation couvre également les techniques de traitement et d'entretien pour préserver leur valeur, ainsi que les tendances du marché et les pratiques commerciales. En outre, elle aborde les enjeux éthiques et les pratiques durables liés à l'extraction et au commerce de ces ressources.",
//         type: 'Formation',
//                 button:"Read More",
//                     data:"For each course you complete, you will receive a certification that you can share on your social networks (for example, LinkedIn). Each certification has a unique authentication number that allows it to be verified.",
//         reserver:"Reservé"
//     },
//     {
//         id:9,
//         image:formation11,
//         title:"Développer l'argriculture et la pêche",
//         desc:"La formation pour développer l'agriculture et la pêche vise à optimiser...",
//         detail:"La formation pour développer l'agriculture et la pêche vise à optimiser les pratiques agricoles et halieutiques tout en garantissant la durabilité et la rentabilité. Elle couvre des techniques modernes de culture et de gestion des sols, ainsi que des méthodes de gestion durable des stocks de poissons et des écosystèmes aquatiques. Les participants apprennent à utiliser les dernières technologies et innovations, à adopter des pratiques respectueuses de l'environnement, et à élaborer des stratégies économiques pour améliorer la productivité et accéder aux marchés. Cette formation est essentielle pour les agriculteurs, pêcheurs, et gestionnaires de ressources naturelles souhaitant améliorer leurs pratiques et assurer un développement durable dans leurs secteurs respectifs.",
//         type: 'Formation',
//         button:"Read More",
//                data:"For each course you complete, you will receive a certification that you can share on your social networks (for example, LinkedIn). Each certification has a unique authentication number that allows it to be verified.",
//         reserver:"Reservé"
//     },
//     {
//         id:10,
//         image:formation10,
//         title:"Sciences de la terre et Séismes",
//         desc:'La formation en sciences de la Terre et séismes offre une compréhension ...',
//         detail:"La formation en sciences de la Terre et séismes offre une compréhension approfondie des processus géologiques, des mécanismes des séismes, et des techniques d'évaluation des risques sismiques. Elle couvre les principes fondamentaux de la géologie, les mouvements des plaques tectoniques, et les causes des séismes, ainsi que les méthodes de surveillance et de prévision des tremblements de terre. Les participants apprennent également à évaluer les risques sismiques, développer des stratégies pour réduire les risques, et préparer les infrastructures et les communautés aux impacts des séismes. Cette formation est essentielle pour les chercheurs, ingénieurs, et professionnels en gestion des risques souhaitant renforcer leur expertise en sismologie et en réduction des risques.",
//         type: 'Formation',
//         button:"Read More",
//                data:"For each course you complete, you will receive a certification that you can share on your social networks (for example, LinkedIn). Each certification has a unique authentication number that allows it to be verified.",
//         reserver:"Reservé"
//     },
//     {
//         id:11,
//         image:formation19,
//         title:"Etudes Formation Recrutements National Et International",
//         desc:'Études Formation Recrutements National et International (EFRNI) est ...',
//         detail:"Études Formation Recrutements National et International (EFRNI) est une formation spécialisée qui vise à développer des compétences avancées dans le domaine du recrutement, tant au niveau national qu'international. Elle couvre les enjeux liés au recrutement dans divers contextes culturels et légaux, tout en enseignant l'utilisation des outils modernes pour identifier et attirer les talents. La formation met également l'accent sur l'optimisation des processus de sélection et sur l'importance de la gestion des talents pour assurer la rétention et le développement des employés dans une perspective globale",
//         type: 'Formation',
//         button:"Read More",
//                data:"For each course you complete, you will receive a certification that you can share on your social networks (for example, LinkedIn). Each certification has a unique authentication number that allows it to be verified.",
//         reserver:"Reservé"
//     },
//     {
//         id:12,
//         image:formation17,
//         title:"Apprendre le théatre pour les enfants",
//         desc:'La formation « Apprendre le théâtre pour les enfants » initie les jeunes...',
//         detail:"La formation « Apprendre le théâtre pour les enfants » initie les jeunes à l’art dramatique en développant leur confiance en soi, leurs compétences en communication, et leur créativité. À travers des jeux de rôle, des improvisations, et des exercices de création, les enfants apprennent à exprimer leurs émotions et idées tout en renforçant leur esprit d'équipe et leur capacité à travailler en groupe. La formation introduit également les bases du théâtre, comme la prise de parole en public et la gestion du stress de la scène, offrant ainsi une expérience enrichissante qui stimule à la fois leur développement personnel et leurs compétences sociales",
//         type: 'Formation',
//         button:"Read More",
//                data:"For each course you complete, you will receive a certification that you can share on your social networks (for example, LinkedIn). Each certification has a unique authentication number that allows it to be verified.",
//         reserver:"Reservé"
//     },
//     {
//         id:13,
//         image:formation18,
//         title:"Formation ascenseur",
//         desc:'La formation sur les ascenseurs est conçue pour fournir aux participants...',
//         detail:"La formation sur les ascenseurs est conçue pour fournir aux participants une compréhension complète des systèmes d'ascenseurs, de leur installation à leur maintenance. Elle couvre les principes de fonctionnement des ascenseurs, les procédures de sécurité, et les techniques de dépannage. Les participants apprendront à installer, entretenir, et réparer les ascenseurs tout en respectant les normes de sécurité et de réglementation en vigueur. La formation est idéale pour les techniciens, ingénieurs, et toute personne impliquée dans le secteur des ascenseurs, offrant les compétences nécessaires pour assurer le bon fonctionnement et la sécurité des équipements.",
//         type: 'Formation',
//         button:"Read More",
//                data:"For each course you complete, you will receive a certification that you can share on your social networks (for example, LinkedIn). Each certification has a unique authentication number that allows it to be verified.",
//         reserver:"Reservé"
//     },
//     {
//         id:14,
//         image:formation5,
//         title:"la conduite de train et de tramway",
//         desc:'La formation à la conduite de train et de tramway prépare les participants...',
//         detail:"La formation à la conduite de train et de tramway prépare les participants à piloter ces véhicules de manière sécurisée et efficace. Elle couvre les aspects techniques de la conduite, y compris le maniement des commandes, la gestion des systèmes de signalisation, et le respect des procédures de sécurité. Les participants apprennent également à gérer les situations d'urgence, à optimiser la consommation d'énergie et à assurer le confort des passagers. La formation inclut des simulations pratiques et théoriques pour développer des compétences approfondies en conduite et en gestion des opérations ferroviaires et de tramway, tout en respectant les normes réglementaires en vigueur.",
//         type: 'Formation',
//         button:"Read More",
//                data:"For each course you complete, you will receive a certification that you can share on your social networks (for example, LinkedIn). Each certification has a unique authentication number that allows it to be verified.",
//         reserver:"Reservé"
//     },
    
// ]
export  const blogDataEN = [
    {
        id: 1,
        image: formation6,
        title: 'Language',
        desc: 'The Ocean Connecting offers a comprehensive language learning program covering...',
        detail: 'The Ocean Connecting offers a comprehensive language learning program covering levels A1 to C2. It features young teachers, engaging activities, educational trips, and flexible schedules. Students benefit from regular level assessments, free access to PCs and Wi-Fi, and air-conditioned classrooms. The program also provides psychological monitoring and guidance, ensuring a supportive learning environment. This program aims to enhance language proficiency through interactive and diverse methods, accommodating different learning paces and needs.',
        type: 'Language'
    },
    {
        id: 2,
        image: formation9,
        title: 'Airport Check-in Agent Training',
        desc: 'The training for an Airport Check-in Agent prepares professionals...',
        detail: 'The training for an Airport Check-in Agent prepares professionals to manage passenger check-in efficiently and ensure smooth airport operations. It covers passenger greeting, document verification, and baggage handling, while using booking and baggage control systems. Participants also learn airport security procedures, international regulations, and customer service techniques to provide a pleasant experience. The training includes practical simulations to apply acquired knowledge and develop communication and emergency management skills.',
        type: 'Formation',
    },
    {
        id: 3,
        image: formation8,
        title: 'DJ Training',
        desc: 'DJ training teaches the skills necessary to become a DJ...',
        detail: 'DJ training teaches the skills necessary to become a professional DJ, covering mixing techniques, using modern equipment such as turntables and controllers, and the basics of music production to create remixes and original tracks. Participants also learn to manage events, organize sets, and interact with the audience. In addition to technical aspects, the training helps develop a personal artistic identity, promote work online, and build a portfolio. It is ideal for beginners and DJs looking to refine their skills and enter the music industry.',
        type: 'Formation',
    },
    {
        id: 4,
        image: formation15,
        title: 'Boat and Sailboat Driving Training',
        desc: 'This training offers a comprehensive experience for sailing enthusiasts...',
        detail: 'This training offers a comprehensive experience for sailing enthusiasts, including theoretical and practical courses on safety, sailing techniques, and coastal and offshore navigation. Sessions are led by experienced instructors and include intensive sea practice. Participants can obtain recognized certifications, allowing them to pilot various types of boats and sailboats. Join us to develop your nautical skills and experience an unforgettable maritime adventure!',
        type: 'Formation',
    },
    {
        id: 5,
        image: formation16,
        title: 'HOME & FAMILY',
        desc: 'The Home & Family training is designed to provide practical skills and...',
        detail: 'The Home & Family training is designed to provide practical skills and in-depth knowledge on managing domestic life and family relationships. It covers various topics from home organization to family financial management, communication techniques, and conflict resolution. The goal is to provide participants with the necessary tools to create a harmonious and well-organized family environment.',
        type: 'Formation',
    },
    {
        id: 6,
        image: formation14,
        title: 'VAR Installation and Usage Training',
        desc: 'The VAR installation and usage training...',
        detail: 'The VAR (Value Added Resellers) installation and usage training aims to provide professionals with the skills needed to install, configure, and use VAR technology solutions effectively. It covers hardware and software installation steps, advanced configuration, and daily use of tools and applications. Participants also learn to provide technical support, diagnose and resolve issues, perform preventive maintenance, and optimize solution performance. This training is essential for effective VAR solution management and ensuring optimal system performance.',
        type: 'Formation',
    },
    {
        id: 7,
        image: formation12,
        title: 'Maritime Navigation Training',
        desc: 'Maritime navigation training teaches participants the skills...',
        detail: 'Maritime navigation training teaches participants the essential skills to navigate safely at sea, covering the use of navigation tools such as nautical charts and GPS systems, as well as understanding international regulations. Participants learn to plan routes, manage weather conditions, and ensure the safety of the vessel and crew. The training also includes rescue techniques and emergency management, ensuring effective and safe navigation while adhering to maritime rules.',
        type: 'Formation',
    },
    {
        id: 8,
        image: formation13,
        title: 'Precious Stones and Metals',
        desc: 'The training on precious stones and metals provides an understanding...',
        detail: 'The training on precious stones and metals provides an in-depth understanding of the characteristics, evaluation, and maintenance of these valuable materials. Participants learn to identify and evaluate precious stones and metals using quality and certification criteria. The training also covers treatment and maintenance techniques to preserve their value, as well as market trends and business practices. Additionally, it addresses ethical issues and sustainable practices related to the extraction and trade of these resources.',
        type: 'Formation',
    },
    {
        id: 9,
        image: formation11,
        title: 'Agriculture and Fishing Development',
        desc: 'The training to develop agriculture and fishing aims to optimize...',
        detail: 'The training to develop agriculture and fishing aims to optimize agricultural and fishery practices while ensuring sustainability and profitability. It covers modern techniques of cultivation and soil management, as well as methods for sustainable management of fish stocks and aquatic ecosystems. Participants learn to use the latest technologies and innovations, adopt environmentally friendly practices, and develop economic strategies to improve productivity and access markets. This training is essential for farmers, fishermen, and natural resource managers seeking to enhance their practices and ensure sustainable development in their respective sectors.',
        type: 'Formation',
    },
    {
        id: 10,
        image: formation10,
        title: 'Earth Sciences and Seismology',
        desc: 'The training in Earth sciences and seismology offers an understanding...',
        detail: 'The training in Earth sciences and seismology offers an in-depth understanding of geological processes, earthquake mechanisms, and techniques for assessing seismic risks. It covers fundamental principles of geology, tectonic plate movements, and earthquake causes, as well as methods for monitoring and predicting earthquakes. Participants also learn to assess seismic risks, develop strategies to reduce risks, and prepare infrastructure and communities for the impacts of earthquakes. This training is essential for researchers, engineers, and risk management professionals looking to enhance their expertise in seismology and risk reduction.',
        type: 'Formation',
    },
    {
        id: 11,
        image: formation19,
        title: 'National and International Recruitment Training',
        desc: 'National and International Recruitment Studies and Training (EFRNI) is...',
        detail: 'National and International Recruitment Studies and Training (EFRNI) is a specialized training program aimed at developing advanced skills in the recruitment field, both nationally and internationally. It covers the challenges related to recruitment in various cultural and legal contexts, while teaching the use of modern tools to identify and attract talent. The training also emphasizes optimizing selection processes and the importance of talent management to ensure employee retention and development from a global perspective.',
        type: 'Formation',
    },
    {
        id: 12,
        image: formation17,
        title: 'Theatre Training for Children',
        desc: 'The training "Learning Theatre for Children" introduces young...',
        detail: 'The training "Learning Theatre for Children" introduces young people to the art of drama by developing their self-confidence, communication skills, and creativity. Through role-playing, improvisations, and creative exercises, children learn to express their emotions and ideas while enhancing their teamwork and group work skills. The training also covers the basics of theatre, such as public speaking and managing stage fright, offering an enriching experience that stimulates both personal development and social skills.',
        type: 'Formation',
    },
    {
        id: 13,
        image: formation18,
        title: 'Elevator Training',
        desc: 'The elevator training is designed to provide participants...',
        detail: 'The elevator training is designed to provide participants with a comprehensive understanding of elevator systems, from installation to maintenance. It covers the principles of elevator operation, safety procedures, and troubleshooting techniques. Participants will learn to install, maintain, and repair elevators while adhering to safety and regulatory standards. The training is ideal for technicians, engineers, and anyone involved in the elevator sector, offering the skills needed to ensure the proper functioning and safety of equipment.',
        type: 'Formation',
    },
    {
        id: 14,
        image: formation5,
        title: 'Train and Tramway Driving Training',
        desc: 'The training for driving trains and trams prepares participants...',
        detail: 'The training for driving trains and trams prepares participants to operate these vehicles safely and efficiently. It covers the technical aspects of driving, including handling controls, managing signaling systems, and adhering to safety procedures. Participants also learn to manage emergency situations, optimize energy consumption, and ensure passenger comfort. The training includes practical and theoretical simulations to develop in-depth skills in driving and managing railway and tramway operations while complying with current regulations.',
        type: 'Formation',
    },
];

export const serviceDataEN = [
   
    {
        id: 1,
        icon: <SlNote/>,
        Servicetitle:"Explore Our Services",
        title: "Training",
        title2:"OUR SERVICES",
        desc2:"We offer professional training adapted to all levels, an ice cleaning service to ensure safety and cleanliness in winter, as well as a domiciliation to offer your company a prestigious address and simplified administrative management.",
        desc: "Boost your skills with tailored training from experienced professionals. Our expert trainers provide personalized programs to help you achieve your goals confidently and effectively.",
        image: service1,
        para1: "Training Service",
        desc_para1: "We offer high-quality professional training tailored to all levels of expertise. Our programs are designed to provide practical and theoretical skills, enabling you to advance in your career and achieve your professional goals. Whether you're a beginner or an expert, our experienced trainers will support you throughout your learning journey.",
        para2: "Benefits",
        desc_para2: "Our training offers practical expertise tailored to the specific needs of each participant, enhancing their skills and employability.",
        para3: "Target Audience",
        desc_para3: "These training programs are aimed at professionals looking to advance their careers, companies seeking to develop their teams' skills, and individuals undergoing professional transition.",
        para4: "Process or Methodology",
        desc_para4: "Each training begins with a needs analysis, followed by a personalized program delivered by experts. We combine theory and practice to ensure effective knowledge absorption.",
        para5: "Added Value",
        desc_para5: "Our training stands out for its flexibility and practical approach, incorporating the latest trends and technologies to offer relevant and immediately applicable solutions on the field.",
        Bouton : "Learn more",
        link:<Link to={"/formation"} className="text-sky-500" >Get Formation <i className="mdi mdi-chevron-right align-middle"></i></Link>,

    },
    {
        id: 2,
        icon: <MdOutlineCleaningServices/>,
        title: "Facade Cleaning",
        desc: "Enhance the appearance and longevity of your building with professional facade cleaning services. Ensure your property makes a strong first impression, reflecting the quality and professionalism of your business.",
        image: service2,
        para1: "Facade Cleaning Service",
        desc_para1: "Our facade cleaning service ensures impeccable results to restore the shine and cleanliness of your buildings. Using professional techniques and environmentally friendly products, we effectively remove dirt, mold, and pollutants. Trust our expertise to maintain the appearance and durability of your facades.",
        para2: "Benefits",
        desc_para2: "This service restores the appearance of your facades, extends their lifespan, and improves the image of your property by offering a clean and well-maintained look.",
        para3: "Target Audience",
        desc_para3: "This service is intended for owners of residential, commercial, and industrial buildings, as well as property managers wishing to maintain the cleanliness and integrity of their facades.",
        para4: "Process or Methodology",
        desc_para4: "We use cleaning techniques suitable for each type of surface, including high-pressure washing and eco-friendly products. We start with a detailed assessment, followed by thorough cleaning and a final quality check.",
        para5: "Added Value",
        desc_para5: "Our expertise in facade cleaning guarantees lasting results and prompt service, while adhering to the strictest environmental and safety standards.",
        Bouton : "Learn more",
        link:<Link1 to="contact" className="text-sky-500"smooth={true} duration={1000} activeClass='active' spy={true}>Contact Us <i className="mdi mdi-chevron-right align-middle"></i></Link1>,
    },
    {
        id: 3,
        icon: <IoHomeOutline/>,
        title: "Company Domiciliation",
        desc: "Take advantage of a professional business domiciliation in Agadir to strengthen your corporate image and your presence on the market.",
        image: service3,
        para1: "Business Domiciliation Service",
        desc_para1: "Our domiciliation service provides you with a prestigious business address for your company. In addition to simplifying administrative management, we ensure the reception of your mail and provide comprehensive support for all your procedures. Use our address for your business to enhance your image and optimize your organization.",
        para2: "Benefits",
        desc_para2: "By using our address, you benefit from an enhanced professional image and simplified mail management while maintaining your privacy.",
        para3: "Target Audience",
        desc_para3: "This service is ideal for entrepreneurs, freelancers, startups, and small businesses looking to establish a professional presence without needing a physical office.",
        para4: "Process or Methodology",
        desc_para4: "We offer an easy registration process, including mail reception and management, as well as mail forwarding options according to your specific needs. You can access your documents securely via our online platform.",
        para5: "Added Value",
        desc_para5: "Our service stands out for its flexibility, personalized support, and ability to offer a prestigious address that enhances your company's credibility while optimizing your administrative operations.",
        Bouton : "Learn more",
        link:<Link1 to="contact" className="text-sky-500"smooth={true} duration={1000} activeClass='active' spy={true}>Contact Us <i className="mdi mdi-chevron-right align-middle"></i></Link1>,
    },
    {
        id: 4,
        title: "Development",
        icon: <CgWebsite/>,
        desc: "Boost your online presence with our expert web development services. Our individual providers craft tailored, responsive websites that align perfectly with your brand and business goals.",
        image: service4,
        para1: "Development Service",
        desc_para1: "We offer a comprehensive custom website creation service to meet your specific needs. From design to launch, our team of experts uses the latest technologies to develop aesthetically pleasing, functional, and search-engine-optimized websites. Whether you need a showcase site, an online store, or a custom platform, we are here to realize your project.",
        para2: "Benefits",
        desc_para2: "Our websites are designed to provide an optimal user experience, modern design, and full functionality, enhancing online visibility and visitor engagement.",
        para3: "Target Audience",
        desc_para3: "This service is aimed at businesses, entrepreneurs, and professionals looking to establish or enhance their online presence with a website that reflects their brand and achieves their business goals.",
        para4: "Process or Methodology",
        desc_para4: "We start with a thorough analysis of your needs, followed by the creation of a custom design. Then we develop and test the site to ensure optimal performance before launching.",
        para5: "Added Value",
        desc_para5: "Our personalized approach and technical expertise ensure results that not only meet but exceed your expectations, offering a functional, aesthetically pleasing, and search-engine-optimized website.",
        Bouton : "Learn more",
        link:<Link1 to="contact" className="text-sky-500"smooth={true} duration={1000} activeClass='active' spy={true}>Contact Us <i className="mdi mdi-chevron-right align-middle"></i></Link1>,
    },
    {
        id: 5,
        title: "Recruitment",
        desc: "We offer employment contract services in Europe. Contact us today to start your journey toward a bright professional future ! ",
        image: service5,
        para1: "Recruitment Service",
        desc_para1: "Our international recruitment service helps companies identify and hire the best talent worldwide. Through our extensive network and HR expertise, we find qualified candidates who perfectly meet your specific requirements. Simplify your recruitment process and strengthen your team with talented professionals from diverse backgrounds.",
        para2: "Benefits",
        desc_para2: "This service facilitates access to a pool of highly qualified candidates, improves the efficiency of the recruitment process, and reduces hiring times, while ensuring hires that match each company's specific needs.",
        para3: "Target Audience",
        desc_para3: "This service is intended for multinational companies, businesses expanding internationally, and organizations looking to strengthen their team with talented professionals from various global markets.",
        para4: "Process or Methodology",
        desc_para4: "We use advanced search methods and a global network to source candidates. The process includes a thorough skills assessment, targeted interviews, and proactive management of applications to ensure an optimal match.",
        para5: "Added Value",
        desc_para5: "Our expertise in international recruitment allows us to find talent suited to your company's specific requirements, while offering personalized service and support throughout the recruitment process to ensure a successful integration.",
        link:<Link to="/jobs/all" className="text-sky-500" >Get an international job <i className="mdi mdi-chevron-right align-middle"></i></Link>,
    }
]
export const TitleEN=[
    {
        Title:"Studies Training National and Internasionl Recruitment",
        button:"Contact Us"
    }
]
export const NavbarEN=[{
    Home:"Home",
    Services:"Services",
    Formation:"Training",
    Jobs:"Jobs",
    About:"About",
    Contact_us:"Contact us"
}]
export const AboutEN=[{
    ask:"Who Are We ?",
    title:"We specialize in global job placement and document assistance,offering tailored support in multiple languagesto help you navigate international career opportunities.",
    desc:"Our company provides international job placement services and expert support in multiple languages. We assist clients in finding global career opportunities and offer comprehensive help with document preparation in various languages. Our goal is to facilitate a smooth and effective transition to international careers.",
    year:"YearsExperience"
}]
export const recruitmentEN = [
    {
        id:1,
        h1:"Recruitment",
        title:'International Recruitment',
        desc:'Connecting global talent with opportunities across borders. We simplify international hiring to help you find the best candidates worldwide.',
        image:recrutinter,
        title2: 'International Recruitment Services',
        desc2:'Our company specializes in connecting top talent with global opportunities. We provide comprehensive international recruitment solutions, including candidate sourcing, screening, and placement. By leveraging our extensive network and expertise in diverse markets, we help businesses find the right talent to drive their growth and success across borders.',
        button:"Apply Now",
        type :"International"
    
    },
    {
        id:2,
        title:'Recruitment OceanConnecting',
        desc:'Connecting top talent with leading organizations nationwide. Streamlining your hiring process for effective, efficient results.',
        image:recrutocean,
        title2: 'Recruitment OceanConnecting',
        desc2:'We’re excited to invite you to apply for a position at our company. Join our team and contribute to our dynamic environment while advancing your career. Explore opportunities for growth, innovation, and impact with us.',
        button:"Apply Now",
        type :"National"
    
    },

];
export const jobsEN = [
    {
        id: 1,

        image: resume,
        title: 'External employment contract application form',
        type: 'International',
        more:'Please fill out the following form with the necessary information and bring it to our office as soon as possible to the following address',
        action : 'Download',
        link:"https://api.whatsapp.com/send/?phone=%2B212704309787&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D9%83%D8%B1%D9%88%D8%A7%D8%AA%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
    },
    {
        id: 2,
        job:"Job Placement Agencies",
        ocean:"Ocean connect",
        image: croatie,
        title: 'Employment contract in Croatia',
        type: 'International',
        secteur:'Construction/blacksmith/carpentry/plumbing/electrical mechanics/air conditioning/perm driver/butcher/hotel',
        niveaulanguage:'Language is not necessary .',
        timevisa:'The duration of obtaining a visa is 5 months .',
        contratime:'One year employment contract.',
        pricecontrat:'The contract price is 6 million .',
        more:'We provide housing, medicine, the possibility of renewing the contract for a period of 5 years, and assistance in obtaining a residence card',
        link:"https://api.whatsapp.com/send/?phone=%2B212704309787&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D9%83%D8%B1%D9%88%D8%A7%D8%AA%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
        menu1:"Secteur :",
        menu2:"Niveau Langue :",
        menu3:"Time Visa :",
        menu4:"Contrat :",
        menu5:"Price Contrat :",
        menu6:"More :",
       action : 'To apply',

    },
    {
        id: 3,
        image: allemagne,
        title: 'Employment contract in Germany',
        type: 'International',
        secteur:'Health and nursing/hotels/programming ',
        niveaulanguage:'Required language B1 .',
        timevisa:'The duration of obtaining a visa is 8 months.',
        contratime:'One year employment contract.',
        pricecontrat:'The contract price is 8 million .',
        more:'We provide housing, medicine, the possibility of renewing the contract for a period of 5 years, and assistance in obtaining a residence card',
        link:"https://api.whatsapp.com/send/?phone=%2B212704309787&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D8%A3%D9%84%D9%85%D8%A7%D9%86%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
        menu1:"Secteur :",
        menu2:"Niveau Langue :",
        menu3:"Time Visa :",
        menu4:"Contrat :",
        menu5:"Price Contrat :",
         menu6:"More :",
       action : 'To apply',
       
    },
    {
        id: 4,
        image: belgium,
        title: 'Employment contract in Belgium',
        type: 'International',
        secteur:'Health and nursing/hotels/programming',
        niveaulanguage:'Language B1 is necessary .',
        timevisa:'The duration of obtaining a visa is 8 months.',
        contratime:'One year employment contract.',
        pricecontrat:'The price of the contract is 6 million',
        more:'We provide housing, medicine, the possibility of renewing the contract for a period of 5 years, and assistance in obtaining a residence card',
        link:"https://api.whatsapp.com/send/?phone=%2B212704309787&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D8%A8%D9%84%D8%AC%D9%8A%D9%83%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
        menu1:"Secteur :",
        menu2:"Niveau Langue :",
        menu3:"Time Visa :",
        menu4:"Contrat :",
        menu5:"Price Contrat :",
         menu6:"More :",
       action : 'To apply',
    },
    {
        id: 5,
        image: italy,
        title: 'Employment contract in Italy',
        type: 'International',
        secteur:'Health and nursing/hotels/agriculture',
        niveaulanguage:'Language B1 is necessary .',
        timevisa:'The duration of obtaining a visa is 8 months.',
        contratime:'One year employment contract.',
        pricecontrat:'The contract price is 6 million',
        more:'We provide housing, medicine, the possibility of renewing the contract for a period of 5 years, and assistance in obtaining a residence card',
        link:"https://api.whatsapp.com/send/?phone=%2B212704309787&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D8%A5%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
        menu1:"Secteur :",
        menu2:"Niveau Langue :",
        menu3:"Time Visa :",
        menu4:"Contrat :",
        menu5:"Price Contrat :",
         menu6:"More :",
       action : 'To apply',
    },
    {
        id: 6,
        image: spain,
        title: 'Employment contract in Spain',
        type: 'International',
        secteur:'Health and nursing/hotels/agriculture',
        niveaulanguage:'Language B1 is necessary .',
        timevisa:'The duration of obtaining a visa is 8 months.',
        contratime:'One year employment contract.',
        pricecontrat:'The contract price is 6 million',
        more:'We provide housing, medicine, the possibility of renewing the contract for a period of 5 years, and assistance in obtaining a residence card',
        link:"https://api.whatsapp.com/send/?phone=%2B212704309787&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D8%A5%D8%B3%D8%A8%D8%A7%D9%86%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
        menu1:"Secteur :",
        menu2:"Niveau Langue :",
        menu3:"Time Visa :",
        menu4:"Contrat :",
        menu5:"Price Contrat :",
         menu6:"More :",
        action : 'To apply',
    },
    {
        id: 7,
        image: facade,
        title: 'Senior Product Manager',
        type: 'National',
        secteur:'cleaning service',
        niveaulanguage:'Language is not necessary .',
        timevisa:'niveau BAC.',
        contratime:'contrat CDI - CDD .',
        pricecontrat:'Agadir',
        more:'Purchasing - Boilermaking - Heating - Estimates - Manufacturing - GPAO - Process - Production - Quality',
        link:"#",
        menu1:"Secteur :",
        menu2:"Niveau Langue :",
        menu3:"Level of education :",
        menu4:"Type Contrat :",
        menu5:"Region :",
        menu6:"Key skills :",
        action : 'To apply',
    },
    // Ensure each job has a unique id
];
export const ContactEN=[{
    title:"CONTACT US",
    desc:" We’d love to hear from you! Fill out the form below with your name, email, and message, and we’ll get back to you shortly. Thanks for reaching out!",
    name:"Your Name:",
    email:"Your Email:",
    question:"Your Question:",
    comment:"Your Comment:",
    Message:"Send Message"
}]

export const companyLogo = [company1, company2, company3, company4, company5, company6]
