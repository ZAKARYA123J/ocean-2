import { FiTrendingUp, FiDollarSign, FiCompass,FiCommand, FiBox, FiCamera, FiBell, FiMonitor } from '../assets/icons/vander'

import client6 from '../assets/images/team/06.jpg'
import { CgWebsite } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineCleaningServices } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import { Link, useParams } from "react-router-dom";
import { Link as Link1 } from "react-scroll";
import client1 from '../assets/images/team/01.jpg'
import client2 from '../assets/images/team/02.jpg'
import client3 from '../assets/images/team/03.jpg'
import client4 from '../assets/images/team/04.jpg'
import client5 from '../assets/images/team/05.jpg'
import formation4 from '../assets/images/formation/formation4.jpg'
import formation5 from '../assets/images/formation/formation05.jpg'
import formation6 from '../assets/images/formation/formation6.jpg'
import formation17 from '../assets/images/formation/formation17.jpg'
import formation8 from '../assets/images/formation/formation8.jpg'
import formation9 from '../assets/images/formation/formation9.jpg'
import formation10 from '../assets/images/formation/formation10.jpg'
import formation11 from '../assets/images/formation/formation11.jpg'
import formation12 from '../assets/images/formation/formation12.jpg'
import formation13 from '../assets/images/formation/formation13.jpg'
import formation14 from '../assets/images/formation/formation14.jpg'
import formation15 from '../assets/images/formation/15.jpg'
import formation16 from '../assets/images/formation/16.jpg'
import formation18 from '../assets/images/formation/formation18.jpg'
import formation19 from '../assets/images/formation/formation19.jpg'

import service1 from '../assets/images/service/service1.png'
import service2 from '../assets/images/service/service2.png'
import service3 from '../assets/images/service/service3.png'
import service4 from '../assets/images/service/service4.png'
import service5 from '../assets/images/service/service5.png'

import company1 from '../assets/images/team/amazon.svg'
import company2 from '../assets/images/team/google.svg'
import company3 from '../assets/images/team/lenovo.svg'
import company4 from '../assets/images/team/paypal.svg'
import company5 from '../assets/images/team/shopify.svg'
import company6 from '../assets/images/team/spotify.svg'
import belgium from '../assets/images/job/belgium.png'
import allemagne from '../assets/images/job/germany.png'
import croatie from '../assets/images/job/croatie.png'
import italy from '../assets/images/job/italy.png'
import spain from '../assets/images/job/spain.png'
import facade from '../assets//images/job/facade.png'
import recrutocean from '../assets/images/service/recrutocean.png'

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


// export const clientData = [
//     {
//         image:client1,
//         name:'Calvin Carlo',
//         title:'Manager',
//         desc:'" I was blown away by the personalized support I received from this team. Their expertise in global job placement helped me land a fantastic position abroad. Highly recommend their services! "'
//     },
//     {
//         image:client2,
//         name:'Christa Smith',
//         title:'Manager',
//         desc:'"Navigating international job markets can be daunting, but this company made it so much easier. Their multilingual support and document assistance were top-notch. I couldn’t have done it without them!"'
//     },
//     {
//         image:client3,
//         name:'Jemina CLone',
//         title:'Manager',
//         desc:'" needed help with job placements in several countries, and their tailored support was exceptional. The team’s attention to detail and professionalism made the entire process smooth and stress-free."'
//     },
//     {
//         image:client4,
//         name:'Smith Vodka',
//         title:'Manager',
//         desc:'" The document assistance was a lifesaver for my international job search. Their guidance was clear and effective, and their ability to support in multiple languages was a huge bonus."'
//     },
//     {
//         image:client5,
//         name:'Cristino Murfi',
//         title:'Manager',
//         desc:'"I was impressed with how well they understood the complexities of global job placement. The support was personalized, and their multilingual team made sure I was well-prepared for every step of the process."'
//     },
// ]



export const blogData = [
    {
        id:1,
        image:formation6,
        title:'language',
        desc:'The Ocean Connecting offers a comprehensive language learning program covering...',
        detail:'The Ocean Connecting offers a comprehensive language learning program covering levels A1 to C2. It features young teachers, engaging activities, educational trips, and flexible schedules. Students benefit from regular level assessments, free access to PCs and Wi-Fi, and air-conditioned classrooms. The program also provides psychological monitoring and guidance, ensuring a supportive learning environment.this program aims to enhance language proficiency through interactive and diverse methods, accommodating different learning paces and needs.',
        type: 'language'
    },
    {
        id:2,
        image:formation9,
        title:'Formation Agent de Checkin Aeroport',
        desc:'La formation pour un Agent de Check-in Aéroport prépare les professionnels ...',
        detail:"La formation pour un Agent de Check-in Aéroport prépare les professionnels à gérer efficacement l'enregistrement des passagers et à assurer le bon déroulement des opérations aéroportuaires. Elle couvre l'accueil des passagers, la vérification des documents et la gestion des bagages, tout en utilisant des systèmes informatiques de réservation et de contrôle des bagages. Les participants apprennent également les procédures de sécurité aéroportuaire, les réglementations internationales, et les techniques de service client pour offrir une expérience agréable. La formation comprend des simulations pratiques pour appliquer les connaissances acquises et développer des compétences en communication et en gestion des situations d'urgence.",
        type: 'Formation'
    },
    {
        id:3,
        image:formation8,
        title:"Formation DJ",
        desc:'La formation DJ enseigne les compétences nécessaires pour devenir un DJ...',
        detail:"La formation DJ enseigne les compétences nécessaires pour devenir un DJ professionnel, en couvrant les techniques de mixage, l'utilisation des équipements modernes comme les platines et les contrôleurs, ainsi que les bases de la production musicale pour créer des remixes et des morceaux originaux. Les participants apprennent également à gérer des événements, à organiser des sets, et à interagir avec le public. En plus des aspects techniques, la formation aide à développer une identité artistique personnelle, à promouvoir son travail en ligne et à construire un portfolio. Elle est idéale pour les débutants et les DJs souhaitant perfectionner leurs compétences et entrer dans le monde de la musique.",
        type: 'Formation'
    },
    {
        id:4,
        image:formation15,
        title:'Formation de conduitendes bateaux et des voliers',
        desc: 'Cette formation offre une expérience complète pour les passionnés de navigation...',
        detail:"Cette formation offre une expérience complète pour les passionnés de navigation, incluant des cours théoriques et pratiques sur la sécurité, les techniques de voile, et la navigation côtière et hauturière. Les sessions sont dirigées par des instructeurs expérimentés et comprennent des pratiques intensives en mer. Les participants peuvent obtenir des certifications reconnues, leur permettant de piloter divers types de bateaux et de voiliers. Rejoignez-nous pour développer vos compétences nautiques et vivre une aventure maritime inoubliable!",
        type: 'Formation'
    },
    {
        id:5,
        image:formation16,
        title:'HOME & FAMILY',
        desc: 'La formation Home & Family est conçue pour offrir des compétences pratiques et ...',
        detail:"La formation Home & Family est conçue pour offrir des compétences pratiques et des connaissances approfondies sur la gestion de la vie domestique et des relations familiales. Elle aborde des sujets variés allant de l'organisation du foyer à la gestion des finances familiales, en passant par les techniques de communication et de résolution de conflits. L'objectif est de fournir aux participants les outils nécessaires pour créer un environnement familial harmonieux et bien organisé.",
        type:'Formation'
    },
    {
        id:6,
        image:formation14,
        title:"Formation d'installation et Usilisation VAR",
        desc:'La formation en installation et utilisation des VAR (Value Added Resellers)...',
        detail:"La formation en installation et utilisation des VAR (Value Added Resellers) vise à fournir aux professionnels les compétences nécessaires pour installer, configurer et utiliser efficacement les solutions technologiques proposées par les VAR. Elle couvre les étapes d'installation des matériels et logiciels, la configuration avancée, ainsi que l'utilisation quotidienne des outils et applications. Les participants apprennent également à fournir un support technique, diagnostiquer et résoudre les problèmes, effectuer la maintenance préventive, et optimiser les performances des solutions. Cette formation est essentielle pour garantir une gestion efficace des solutions VAR et assurer une performance optimale des systèmes",
        type: 'Formation'
    },
    {
        id:7,
        image:formation12,
        title:'formation a la navigation maritime',
        desc:'La formation à la navigation maritime enseigne aux participants les compétences ...',
        detail:"La formation à la navigation maritime enseigne aux participants les compétences essentielles pour naviguer en toute sécurité en mer, en couvrant l'utilisation des outils de navigation comme les cartes maritimes et les systèmes GPS, ainsi que la compréhension des réglementations internationales. Les participants apprennent à planifier des trajets, à gérer les conditions météorologiques, et à assurer la sécurité du navire et de l'équipage. La formation inclut également des techniques de sauvetage et de gestion des situations d'urgence, garantissant une navigation efficace et sécurisée tout en respectant les règles maritimes.",
        type: 'Formation'
    },
    {
        id:8,
        image:formation13,
        title:'Pierres et métaux précieux',
        desc:'La formation sur les pierres et métaux précieux fournit une compréhension ...',
        detail:"La formation sur les pierres et métaux précieux fournit une compréhension approfondie des caractéristiques, de l'évaluation et de l'entretien de ces matériaux précieux. Les participants apprennent à identifier et évaluer les pierres précieuses et les métaux précieux, en utilisant des critères de qualité et de certification. La formation couvre également les techniques de traitement et d'entretien pour préserver leur valeur, ainsi que les tendances du marché et les pratiques commerciales. En outre, elle aborde les enjeux éthiques et les pratiques durables liés à l'extraction et au commerce de ces ressources.",
        type: 'Formation'
    },
    {
        id:9,
        image:formation11,
        title:"Développer l'argriculture et la pêche",
        desc:"La formation pour développer l'agriculture et la pêche vise à optimiser...",
        detail:"La formation pour développer l'agriculture et la pêche vise à optimiser les pratiques agricoles et halieutiques tout en garantissant la durabilité et la rentabilité. Elle couvre des techniques modernes de culture et de gestion des sols, ainsi que des méthodes de gestion durable des stocks de poissons et des écosystèmes aquatiques. Les participants apprennent à utiliser les dernières technologies et innovations, à adopter des pratiques respectueuses de l'environnement, et à élaborer des stratégies économiques pour améliorer la productivité et accéder aux marchés. Cette formation est essentielle pour les agriculteurs, pêcheurs, et gestionnaires de ressources naturelles souhaitant améliorer leurs pratiques et assurer un développement durable dans leurs secteurs respectifs.",
        type: 'Formation'
    },
    {
        id:10,
        image:formation10,
        title:"Sciences de la terre et Séismes",
        desc:'La formation en sciences de la Terre et séismes offre une compréhension ...',
        detail:"La formation en sciences de la Terre et séismes offre une compréhension approfondie des processus géologiques, des mécanismes des séismes, et des techniques d'évaluation des risques sismiques. Elle couvre les principes fondamentaux de la géologie, les mouvements des plaques tectoniques, et les causes des séismes, ainsi que les méthodes de surveillance et de prévision des tremblements de terre. Les participants apprennent également à évaluer les risques sismiques, développer des stratégies pour réduire les risques, et préparer les infrastructures et les communautés aux impacts des séismes. Cette formation est essentielle pour les chercheurs, ingénieurs, et professionnels en gestion des risques souhaitant renforcer leur expertise en sismologie et en réduction des risques.",
        type: 'Formation'
    },
    {
        id:11,
        image:formation19,
        title:"Etudes Formation Recrutements National Et International",
        desc:'Études Formation Recrutements National et International (EFRNI) est ...',
        detail:"Études Formation Recrutements National et International (EFRNI) est une formation spécialisée qui vise à développer des compétences avancées dans le domaine du recrutement, tant au niveau national qu'international. Elle couvre les enjeux liés au recrutement dans divers contextes culturels et légaux, tout en enseignant l'utilisation des outils modernes pour identifier et attirer les talents. La formation met également l'accent sur l'optimisation des processus de sélection et sur l'importance de la gestion des talents pour assurer la rétention et le développement des employés dans une perspective globale",
        type: 'Formation'
    },
    {
        id:12,
        image:formation17,
        title:"Apprendre le théatre pour les enfants",
        desc:'La formation « Apprendre le théâtre pour les enfants » initie les jeunes...',
        detail:"La formation « Apprendre le théâtre pour les enfants » initie les jeunes à l’art dramatique en développant leur confiance en soi, leurs compétences en communication, et leur créativité. À travers des jeux de rôle, des improvisations, et des exercices de création, les enfants apprennent à exprimer leurs émotions et idées tout en renforçant leur esprit d'équipe et leur capacité à travailler en groupe. La formation introduit également les bases du théâtre, comme la prise de parole en public et la gestion du stress de la scène, offrant ainsi une expérience enrichissante qui stimule à la fois leur développement personnel et leurs compétences sociales",
        type: 'Formation'
    },
    {
        id:13,
        image:formation18,
        title:"Formation ascenseur",
        desc:'La formation sur les ascenseurs est conçue pour fournir aux participants...',
        detail:"La formation sur les ascenseurs est conçue pour fournir aux participants une compréhension complète des systèmes d'ascenseurs, de leur installation à leur maintenance. Elle couvre les principes de fonctionnement des ascenseurs, les procédures de sécurité, et les techniques de dépannage. Les participants apprendront à installer, entretenir, et réparer les ascenseurs tout en respectant les normes de sécurité et de réglementation en vigueur. La formation est idéale pour les techniciens, ingénieurs, et toute personne impliquée dans le secteur des ascenseurs, offrant les compétences nécessaires pour assurer le bon fonctionnement et la sécurité des équipements.",
        type: 'Formation'
    },
    {
        id:14,
        image:formation5,
        title:"la conduite de train et de tramway",
        desc:'La formation à la conduite de train et de tramway prépare les participants...',
        detail:"La formation à la conduite de train et de tramway prépare les participants à piloter ces véhicules de manière sécurisée et efficace. Elle couvre les aspects techniques de la conduite, y compris le maniement des commandes, la gestion des systèmes de signalisation, et le respect des procédures de sécurité. Les participants apprennent également à gérer les situations d'urgence, à optimiser la consommation d'énergie et à assurer le confort des passagers. La formation inclut des simulations pratiques et théoriques pour développer des compétences approfondies en conduite et en gestion des opérations ferroviaires et de tramway, tout en respectant les normes réglementaires en vigueur.",
        type: 'Formation'
    },
    
]
export const serviceData = [
        {
            id:1,
            icon:<SlNote/>,
            title:'Formation',
            desc:'This is required when, for example, the final text is not yet available.',
            image:service1,
            para1 :'Service de Formation',
            desc_para1 :"Nous offrons des formations professionnelles de haute qualité, adaptées à tous les niveaux d'expertise. Nos programmes sont conçus pour fournir des compétences pratiques et théoriques, vous permettant de progresser dans votre carrière et d'atteindre vos objectifs professionnels. Que vous soyez débutant ou expert, nos formateurs expérimentés vous accompagneront tout au long de votre parcours d'apprentissage.",
            para2 :"Avantages et Bénéfices",
            desc_para2 :"Nos formations offrent une expertise pratique, adaptée aux besoins spécifiques de chaque participant, améliorant ainsi leurs compétences et leur employabilité.",
            para3 :"Public Cible ",
            desc_para3 :"Ces formations s’adressent aux professionnels souhaitant évoluer dans leur carrière, aux entreprises cherchant à développer les compétences de leurs équipes, et aux personnes en reconversion professionnelle. ",
            para4:"Processus ou Méthodologie",
            desc_para4:"Chaque formation commence par une analyse des besoins, suivie d'un programme personnalisé dispensé par des experts. Nous combinons théorie et pratique pour garantir une assimilation efficace des connaissances.",
            para5:"Valeur Ajoutée",
            desc_para5:"Nos formations se distinguent par leur flexibilité et leur approche pratique, intégrant les dernières tendances et technologies pour offrir des solutions pertinentes et immédiatement applicables sur le terrain.",
            link:<Link to={"/formation"} className="text-sky-500" >Get Formation <i className="mdi mdi-chevron-right align-middle"></i></Link>,
        },
        {
            id : 2 ,
            icon:<MdOutlineCleaningServices/>,
            title:'Nettoyage des Façades',
            desc:'This is required when, for example, the final text is not yet available.',
            image:service2,
            para1 :'Service de Nettoyage des Façades',
            desc_para1 :"Notre service de nettoyage des façades vous garantit des résultats impeccables pour redonner éclat et propreté à vos bâtiments. Grâce à des techniques professionnelles et des produits respectueux de l'environnement, nous éliminons efficacement saletés, moisissures et polluants. Faites confiance à notre expertise pour préserver l'apparence et la durabilité de vos façades.",
            para2 :"Avantages et Bénéfices",
            desc_para2 :"Ce service restaure l’apparence de vos façades, prolonge leur durée de vie, et améliore l'image de votre propriété en offrant une apparence propre et soignée.",
            para3 :"Public Cible ",
            desc_para3 :"Ce service est destiné aux propriétaires de bâtiments résidentiels, commerciaux et industriels, ainsi qu'aux gestionnaires de biens immobiliers souhaitant maintenir la propreté et l'intégrité de leurs façades. ",
            para4:"Processus ou Méthodologie",
            desc_para4:"Nous utilisons des techniques de nettoyage adaptées à chaque type de surface, incluant le lavage haute pression et l'utilisation de produits écologiques. Nous commençons par une évaluation détaillée, suivie d'un nettoyage approfondi et d'un contrôle qualité final.",
            para5:"Valeur Ajoutée",
            desc_para5:"Notre expertise en nettoyage des façades garantit des résultats durables et une intervention rapide, tout en respectant les normes environnementales et de sécurité les plus strictes.",
            link:<Link1 to="contact" className="text-sky-500"smooth={true} duration={1000} activeClass='active' spy={true}>Contact Us <i className="mdi mdi-chevron-right align-middle"></i></Link1>,
        },

        {
            id : 3 ,
            icon:<IoHomeOutline/>,
            title:'Domiciliation',
            desc:'This is required when, for example, the final text is not yet available.',
            image:service3,
            para1 :'Service de Domiciliation',
            desc_para1 :"Notre service de domiciliation vous offre une adresse professionnelle prestigieuse pour votre entreprise. En plus de simplifier la gestion administrative, nous assurons la réception de votre courrier et vous fournissons un support complet pour toutes vos démarches. Faites de notre adresse celle de votre entreprise pour renforcer votre image et optimiser votre organisation.",
            para2 :"Avantages et Bénéfices",
            desc_para2 :"En utilisant notre adresse, vous bénéficiez d'une image professionnelle renforcée et d'une gestion simplifiée de votre correspondance, tout en conservant votre vie privée.",
            para3 :"Public Cible ",
            desc_para3 :"Ce service est idéal pour les entrepreneurs, les freelances, les start-ups, et les petites entreprises qui cherchent à établir une présence professionnelle sans avoir besoin d'un bureau physique. ",
            para4:"Processus ou Méthodologie",
            desc_para4:"Nous offrons un processus d'enregistrement facile, incluant la réception et la gestion du courrier, ainsi que des options de redirection selon vos besoins spécifiques. Vous pouvez accéder à vos documents en toute sécurité via notre plateforme en ligne.",
            para5:"Valeur Ajoutée",
            desc_para5:"Notre service se distingue par sa flexibilité, son support personnalisé et sa capacité à offrir une adresse prestigieuse qui renforce la crédibilité de votre entreprise tout en optimisant vos opérations administratives. ",
            link:<Link1 to="contact" className="text-sky-500"smooth={true} duration={1000} activeClass='active' spy={true}>Contact Us <i className="mdi mdi-chevron-right align-middle"></i></Link1>,
        },  
        {
            id : 4 ,
            title:'Developpement',
            icon:<CgWebsite/>,
            desc:'This is required when, for example, the final text is not yet available.',
            image:service4,
            para1 :'Service de Developpement',
            desc_para1 :"Nous proposons un service complet de création de sites web sur mesure pour répondre à vos besoins spécifiques. De la conception à la mise en ligne, notre équipe d'experts utilise les dernières technologies pour développer des sites esthétiques, fonctionnels et optimisés pour le référencement. Que vous ayez besoin d'un site vitrine, d'une boutique en ligne ou d'une plateforme personnalisée, nous sommes là pour réaliser votre projet.",
            para2 :"Avantages et Bénéfices",
            desc_para2 :"Nos sites web sont conçus pour offrir une expérience utilisateur optimale, un design moderne et une fonctionnalité complète, ce qui améliore la visibilité en ligne et l'engagement des visiteurs.",
            para3 :"Public Cible ",
            desc_para3 :"Ce service s’adresse aux entreprises, aux entrepreneurs, et aux professionnels cherchant à établir ou améliorer leur présence en ligne avec un site web qui reflète leur marque et atteint leurs objectifs commerciaux. ",
            para4:"Processus ou Méthodologie",
            desc_para4:"Nous commençons par une analyse approfondie de vos besoins, suivie de la création d’un design personnalisé. Ensuite, nous développons et testons le site pour garantir une performance optimale avant de le lancer.",
            para5:"Valeur Ajoutée",
            desc_para5:"Notre approche personnalisée et notre expertise technique garantissent des résultats qui non seulement répondent à vos attentes mais les dépassent, en offrant un site web fonctionnel, esthétiquement plaisant et optimisé pour les moteurs de recherche.",
            link:<Link1 to="contact" className="text-sky-500"smooth={true} duration={1000} activeClass='active' spy={true}>Contact Us <i className="mdi mdi-chevron-right align-middle"></i></Link1>,
        }, 
        {
            id : 5 ,
            title:'Recruitment',
            desc:'This is required when, for example, the final text is not yet available.',
            image:service5,
            para1:'Service de Recruitment',
            desc_para1 :"Notre service de recrutement pour entreprises internationales vous aide à identifier et à embaucher les meilleurs talents à l'échelle mondiale. Grâce à notre vaste réseau et à notre expertise en ressources humaines, nous trouvons des candidats qualifiés qui répondent parfaitement à vos exigences spécifiques. Simplifiez votre processus de recrutement et renforcez votre équipe avec des professionnels talentueux issus de divers horizons.",
            para2 :"Avantages et Bénéfices",
            desc_para2 :"Ce service facilite l'accès à un vivier de candidats hautement qualifiés, améliore l'efficacité du processus de recrutement et réduit les délais d'embauche, tout en garantissant des recrutements adaptés aux besoins spécifiques de chaque entreprise.",
            para3 :"Public Cible ",
            desc_para3 :"Ce service est destiné aux multinationales, aux entreprises en expansion internationale et aux organisations cherchant à renforcer leur équipe avec des professionnels talentueux issus de divers marchés globaux. ",
            para4:"Processus ou Méthodologie",
            desc_para4:"Nous utilisons des méthodes de recherche avancées et un réseau mondial pour sourcer des candidats. Le processus inclut une évaluation approfondie des compétences, des entretiens ciblés et une gestion proactive des candidatures pour garantir une correspondance optimale.",
            para5:"Valeur Ajoutée",
            desc_para5:"Notre expertise en recrutement international permet de trouver des talents adaptés aux exigences spécifiques de votre entreprise, tout en offrant un service personnalisé et un soutien tout au long du processus de recrutement pour assurer une intégration réussie. ",
            link:<Link to="/jobs/all" className="text-sky-500" >Get Job <i className="mdi mdi-chevron-right align-middle"></i></Link>,
        },  
]
export const jobs = [
    {
        id: 1,
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
    },
    {
        id: 2,
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
       
    },
    {
        id: 3,
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
    },
    {
        id: 4,
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
    },
    {
        id: 5,
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
    },
    {
        id: 6,
        image: facade,
        title: 'facade cleaning jobs',
        type: 'National',
        secteur:'cleaning service',
        niveaulanguage:'Language is not necessary .',
        timevisa:'niveau BAC.',
        contratime:'contrat CDI - CDD .',
        pricecontrat:'Casablanca-Mohammedia',
        more:'Purchasing - Boilermaking - Heating - Estimates - Manufacturing - GPAO - Process - Production - Quality',
        link:"#",
        menu1:"Secteur :",
        menu2:"Niveau Langue :",
        menu3:"Level of education :",
        menu4:"Type Contrat :",
        menu5:"Region :",
        menu6:"Key skills :",
    },
    // Ensure each job has a unique id
];
export const recruitment = [
    {
        id:1,
        title:'International Recruitment',
        desc:'Connecting global talent with opportunities across borders. We simplify international hiring to help you find the best candidates worldwide.',
        image:service5,
        title2: 'International Recruitment Services',
        desc2:'Our company specializes in connecting top talent with global opportunities. We provide comprehensive international recruitment solutions, including candidate sourcing, screening, and placement. By leveraging our extensive network and expertise in diverse markets, we help businesses find the right talent to drive their growth and success across borders.',
    
    },
    {
        id:2,
        title:'Recruitment OceanConnecting',
        desc:'Connecting top talent with leading organizations nationwide. Streamlining your hiring process for effective, efficient results.',
        image:recrutocean,
        title2: 'Recruitment OceanConnecting',
        desc2:'We’re excited to invite you to apply for a position at our company. Join our team and contribute to our dynamic environment while advancing your career. Explore opportunities for growth, innovation, and impact with us.',
    
    },

];

export const companyLogo = [company1, company2, company3, company4, company5, company6]
