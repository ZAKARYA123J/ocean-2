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
import blog5 from '../assets/images/blog/05.png'
import blog6 from '../assets/images/blog/06.png'
import blog7 from '../assets/images/blog/07.png'
import blog8 from '../assets/images/blog/08.png'
import blog9 from '../assets/images/blog/09.png'

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
]
export const serviceData = [
        {
            id : 1 ,
            title:'Formation',
            desc:'This is required when, for example, the final text is not yet available.',
            image:blog5,
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
            Button : "GET FORMATION",
        },
        {
            id : 2 ,
            title:'Nettoyage des Façades',
            desc:'This is required when, for example, the final text is not yet available.',
            image:blog6,
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
            Button :"CONTACT US",
        },
       
        {
            id : 3 ,
            title:'Domiciliation',
            desc:'This is required when, for example, the final text is not yet available.',
            image:blog7,
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
            Button:"CONTACT US",
        },  
        {
            id : 4 ,
            title:'Developpement',
            desc:'This is required when, for example, the final text is not yet available.',
            image:blog8,
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
            Button:"CONTACT US",
        }, 
        {
            id : 5 ,
            title:'Recruitment',
            desc:'This is required when, for example, the final text is not yet available.',
            image:blog9,
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
            Button:"GET JOB",
        },  
]

export const companyLogo = [company1, company2, company3, company4, company5, company6]