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
import belgium from '../../../assets/images/job/belgium.png'
import allemagne from '../../../assets/images/job/germany.png'
import croatie from '../../../assets/images/job/croatie.png'
import italy from '../../../assets/images/job/italy.png'
import spain from '../../../assets/images/job/spain.png'
import facade from '../../../assets//images/job/facade.png'
import resume from '../../../assets/images/job/resume.png'
import recrutocean from '../../../assets/images/service/recrutocean.png'
import recrutinter from '../../../assets/images/service/recrutinter2.png'
import form from '../../../assets/images/form.pdf'

// export const teamTitle = "Rencontrez Notre Équipe de Développement";
// export const teamDescription = "Nous sommes une équipe passionnée d'experts dédiée à la création de solutions innovantes. Explorez plus sur chaque membre de l'équipe ci-dessous et découvrez les technologies dans lesquelles ils excellent.";
// export const membersTitle = "Nos Membres de l'Équipe";
// export const viewDetails = "Voir les Détails";

// export const teamMembers = [
//     {
//       id: 1,
//       name: "ENNACHOUM ZAKARIA",
//       role: "Développeur Full Stack",
//       photo: "path/to/photo1.jpg",
//       github: "https://github.com/Umbrator",
//       linkedin: "https://linkedin.com/in/ennachoum-zakaria-264134231/",
//     },
//     // Add other members...
//   ];
import heroImage1 from '../../../assets/images/done/TeamDev/service.png';
  export const servicesFR = [
    {
      title: "Sécurité",
      description: "Assurez la sécurité de vos applications avec les derniers protocoles.",
      icon: "FaLock",
    },
    {
      title: "Consultation",
      description: "Conseils d'experts sur l'architecture système, stratégie technologique, etc.",
      icon: "FaComments",
    },
    {
      title: "Développement",
      description: "Développement front-end et back-end, adapté à vos besoins.",
      icon: "FaCode",
    },
  ];
  
export const clientDataFr = [
    {
        image: client1,
        clientitle:"Ce que disent nos utilisateurs",
        name: "Calvin Carlo",
        title: "Manager",
        desc: "J'ai été impressionné par le soutien personnalisé que j'ai reçu de cette équipe. Leur expertise en placement international m'a aidé à obtenir un poste fantastique à l'étranger. Je recommande vivement leurs services !"
    },
    {
        image: client2,
        name: "Christa Smith",
        title: "Manager",
        desc: "Naviguer sur les marchés de l'emploi internationaux peut être intimidant, mais cette entreprise a grandement facilité les choses. Leur support multilingue et leur assistance pour les documents étaient de premier ordre. Je n'aurais pas pu y parvenir sans eux !"
    },
    {
        image: client3,
        name: "Jemina Clone",
        title: "Manager",
        desc: "J'avais besoin d'aide pour des placements professionnels dans plusieurs pays, et leur soutien sur mesure a été exceptionnel. L'attention portée aux détails et le professionnalisme de l'équipe ont rendu le processus fluide et sans stress."
    },
    {
        image: client4,
        name: "Smith Vodka",
        title: "Manager",
        desc: "L'assistance pour les documents a été un sauveur pour ma recherche d'emploi internationale. Leurs conseils étaient clairs et efficaces, et leur capacité à soutenir en plusieurs langues était un énorme avantage."
    },
    {
        image: client5,
        name: "Cristino Murfi",
        title: "Manager",
        desc: "J'ai été impressionné par leur compréhension des complexités du placement international. Le soutien était personnalisé, et leur équipe multilingue a veillé à ce que je sois bien préparé pour chaque étape du processus."
    }
];
export const blogDataFR = [
    {
        id:1,
        image:formation6,
        Title : "Formation",
        text:"Cette formation en gestion administrative enseigne aux participants les compétences essentielles pour exceller dans les tâches administratives, en couvrant la gestion de la documentation, l'optimisation des processus organisationnels, et la communication professionnelle. Elle combine théorie et pratique pour des compétences applicables immédiatement en entreprise.",
        resrvedatail: "Bienvenue sur notre plateforme conçue pour",
        register:"Pour vous inscrire, cliquez simplement ici",
        resrveButton:"Réserver",
        blogetitle:"Formations Trends",
        title:'langague',
        desc:'Ocean Connecting offers a comprehensive language learning program covering...',
        detail:'Ocean Connecting offers a comprehensive language learning program covering levels A1 to C2. It features young teachers, engaging activities, educational trips, and flexible schedules. Students benefit from regular level assessments, free access to PCs and Wi-Fi, and air-conditioned classrooms. The program also provides psychological monitoring and guidance, ensuring a supportive learning environment.this program aims to enhance language proficiency through interactive and diverse methods, accommodating different learning paces and needs.',
        type: 'language',
        button:"En savoir plus",
        data: "Pour chaque cours que vous terminez, vous recevrez une certification que vous pourrez partager sur vos réseaux sociaux (par exemple, LinkedIn). Chaque certification a un numéro d'authentification unique qui permet de la vérifier.",
        reserver: "Réservé",
        show:"Tout afficher"
    },
    {
        id:2,
        image: formation9,
        resrvedatail: "Bienvenue sur notre plateforme conçue pour",
        register:"Pour vous inscrire, cliquez simplement ici",
        resrveButton:"Réserver",
        title:'Formation Agent de Checkin Aeroport',
        desc:'La formation pour un Agent de Check-in Aéroport prépare les professionnels ...',
        detail:"La formation pour un Agent de Check-in Aéroport prépare les professionnels à gérer efficacement l'enregistrement des passagers et à assurer le bon déroulement des opérations aéroportuaires. Elle couvre l'accueil des passagers, la vérification des documents et la gestion des bagages, tout en utilisant des systèmes informatiques de réservation et de contrôle des bagages. Les participants apprennent également les procédures de sécurité aéroportuaire, les réglementations internationales, et les techniques de service client pour offrir une expérience agréable. La formation comprend des simulations pratiques pour appliquer les connaissances acquises et développer des compétences en communication et en gestion des situations d'urgence.",
        type: 'Formation',
        button:"En savoir plus",
          data: "Pour chaque cours que vous terminez, vous recevrez une certification que vous pourrez partager sur vos réseaux sociaux (par exemple, LinkedIn). Chaque certification a un numéro d'authentification unique qui permet de la vérifier.",
        reserver: "Réservé",
          show:"Tout afficher"
    },
    {
        id:3,
        image: formation8,
        resrvedatail: "Bienvenue sur notre plateforme conçue pour",
        register:"Pour vous inscrire, cliquez simplement ici",
        resrveButton:"Réserver",
        title:"Formation DJ",
        desc:'La formation DJ enseigne les compétences nécessaires pour devenir un DJ...',
        detail:"La formation DJ enseigne les compétences nécessaires pour devenir un DJ professionnel, en couvrant les techniques de mixage, l'utilisation des équipements modernes comme les platines et les contrôleurs, ainsi que les bases de la production musicale pour créer des remixes et des morceaux originaux. Les participants apprennent également à gérer des événements, à organiser des sets, et à interagir avec le public. En plus des aspects techniques, la formation aide à développer une identité artistique personnelle, à promouvoir son travail en ligne et à construire un portfolio. Elle est idéale pour les débutants et les DJs souhaitant perfectionner leurs compétences et entrer dans le monde de la musique.",
        type: 'Formation',
        button:"En savoir plus",
        data: "Pour chaque cours que vous terminez, vous recevrez une certification que vous pourrez partager sur vos réseaux sociaux (par exemple, LinkedIn). Chaque certification a un numéro d'authentification unique qui permet de la vérifier.",
        reserver: "Réservé",
          show:"Tout afficher"
    },
    {
        id:4,
        image: formation15,
        resrvedatail: "Bienvenue sur notre plateforme conçue pour",
        register:"Pour vous inscrire, cliquez simplement ici",
        resrveButton:"Réserver",
        title:'Formation de conduitendes bateaux et des voliers',
        desc: 'Cette formation offre une expérience complète pour les passionnés de navigation...',
        detail:"Cette formation offre une expérience complète pour les passionnés de navigation, incluant des cours théoriques et pratiques sur la sécurité, les techniques de voile, et la navigation côtière et hauturière. Les sessions sont dirigées par des instructeurs expérimentés et comprennent des pratiques intensives en mer. Les participants peuvent obtenir des certifications reconnues, leur permettant de piloter divers types de bateaux et de voiliers. Rejoignez-nous pour développer vos compétences nautiques et vivre une aventure maritime inoubliable!",
        type: 'Formation',
        button:"En savoir plus",
        data: "Pour chaque cours que vous terminez, vous recevrez une certification que vous pourrez partager sur vos réseaux sociaux (par exemple, LinkedIn). Chaque certification a un numéro d'authentification unique qui permet de la vérifier.",
        reserver: "Réservé",
          show:"Tout afficher"
    },
    {
        id:5,
        image: formation16,
        resrvedatail: "Bienvenue sur notre plateforme conçue pour",
        register:"Pour vous inscrire, cliquez simplement ici",
        resrveButton:"Réserver",
        title:'HOME & FAMILY',
        desc: 'La formation Home & Family est conçue pour offrir des compétences pratiques et ...',
        detail:"La formation Home & Family est conçue pour offrir des compétences pratiques et des connaissances approfondies sur la gestion de la vie domestique et des relations familiales. Elle aborde des sujets variés allant de l'organisation du foyer à la gestion des finances familiales, en passant par les techniques de communication et de résolution de conflits. L'objectif est de fournir aux participants les outils nécessaires pour créer un environnement familial harmonieux et bien organisé.",
        type:'Formation',
        button:"En savoir plus",
        data: "Pour chaque cours que vous terminez, vous recevrez une certification que vous pourrez partager sur vos réseaux sociaux (par exemple, LinkedIn). Chaque certification a un numéro d'authentification unique qui permet de la vérifier.",
        reserver: "Réservé",
          show:"Tout afficher"
    },
    {
        id:6,
        image: formation14,
        resrvedatail: "Bienvenue sur notre plateforme conçue pour",
        register:"Pour vous inscrire, cliquez simplement ici",
        resrveButton:"Réserver",
        title:"Formation d'installation et Usilisation VAR",
        desc:'La formation en installation et utilisation des VAR (Value Added Resellers)...',
        detail:"La formation en installation et utilisation des VAR (Value Added Resellers) vise à fournir aux professionnels les compétences nécessaires pour installer, configurer et utiliser efficacement les solutions technologiques proposées par les VAR. Elle couvre les étapes d'installation des matériels et logiciels, la configuration avancée, ainsi que l'utilisation quotidienne des outils et applications. Les participants apprennent également à fournir un support technique, diagnostiquer et résoudre les problèmes, effectuer la maintenance préventive, et optimiser les performances des solutions. Cette formation est essentielle pour garantir une gestion efficace des solutions VAR et assurer une performance optimale des systèmes",
        type: 'Formation',
             button:"En savoir plus",
               data: "Pour chaque cours que vous terminez, vous recevrez une certification que vous pourrez partager sur vos réseaux sociaux (par exemple, LinkedIn). Chaque certification a un numéro d'authentification unique qui permet de la vérifier.",
        reserver: "Réservé",
          show:"Tout afficher"
    },
    {
        id:7,
        image: formation12,
        resrvedatail: "Bienvenue sur notre plateforme conçue pour",
        register:"Pour vous inscrire, cliquez simplement ici",
        resrveButton:"Réserver",
        title:'formation a la navigation maritime',
        desc:'La formation à la navigation maritime enseigne aux participants les compétences ...',
        detail:"La formation à la navigation maritime enseigne aux participants les compétences essentielles pour naviguer en toute sécurité en mer, en couvrant l'utilisation des outils de navigation comme les cartes maritimes et les systèmes GPS, ainsi que la compréhension des réglementations internationales. Les participants apprennent à planifier des trajets, à gérer les conditions météorologiques, et à assurer la sécurité du navire et de l'équipage. La formation inclut également des techniques de sauvetage et de gestion des situations d'urgence, garantissant une navigation efficace et sécurisée tout en respectant les règles maritimes.",
        type: 'Formation',
        button:"En savoir plus",
          data: "Pour chaque cours que vous terminez, vous recevrez une certification que vous pourrez partager sur vos réseaux sociaux (par exemple, LinkedIn). Chaque certification a un numéro d'authentification unique qui permet de la vérifier.",
        reserver: "Réservé",
          show:"Tout afficher"
    },
    {
        id:8,
        image: formation13,
        resrvedatail: "Bienvenue sur notre plateforme conçue pour",
        register:"Pour vous inscrire, cliquez simplement ici",
        resrveButton:"Réserver",
        title:'Pierres et métaux précieux',
        desc:'La formation sur les pierres et métaux précieux fournit une compréhension ...',
        detail:"La formation sur les pierres et métaux précieux fournit une compréhension approfondie des caractéristiques, de l'évaluation et de l'entretien de ces matériaux précieux. Les participants apprennent à identifier et évaluer les pierres précieuses et les métaux précieux, en utilisant des critères de qualité et de certification. La formation couvre également les techniques de traitement et d'entretien pour préserver leur valeur, ainsi que les tendances du marché et les pratiques commerciales. En outre, elle aborde les enjeux éthiques et les pratiques durables liés à l'extraction et au commerce de ces ressources.",
        type: 'Formation',
        button:"En savoir plus",
        data: "Pour chaque cours que vous terminez, vous recevrez une certification que vous pourrez partager sur vos réseaux sociaux (par exemple, LinkedIn). Chaque certification a un numéro d'authentification unique qui permet de la vérifier.",
        reserver: "Réservé",
          show:"Tout afficher"
    },
    {
        id:9,
        image: formation11,
        resrvedatail: "Bienvenue sur notre plateforme conçue pour",
        register:"Pour vous inscrire, cliquez simplement ici",
        resrveButton:"Réserver",
        title:"Développer l'argriculture et la pêche",
        desc:"La formation pour développer l'agriculture et la pêche vise à optimiser...",
        detail:"La formation pour développer l'agriculture et la pêche vise à optimiser les pratiques agricoles et halieutiques tout en garantissant la durabilité et la rentabilité. Elle couvre des techniques modernes de culture et de gestion des sols, ainsi que des méthodes de gestion durable des stocks de poissons et des écosystèmes aquatiques. Les participants apprennent à utiliser les dernières technologies et innovations, à adopter des pratiques respectueuses de l'environnement, et à élaborer des stratégies économiques pour améliorer la productivité et accéder aux marchés. Cette formation est essentielle pour les agriculteurs, pêcheurs, et gestionnaires de ressources naturelles souhaitant améliorer leurs pratiques et assurer un développement durable dans leurs secteurs respectifs.",
        type: 'Formation',
        button:"En savoir plus",
        data: "Pour chaque cours que vous terminez, vous recevrez une certification que vous pourrez partager sur vos réseaux sociaux (par exemple, LinkedIn). Chaque certification a un numéro d'authentification unique qui permet de la vérifier.",
        reserver: "Réservé",
          show:"Tout afficher"
    },
    {
        id:10,
        image: formation10,
        resrvedatail: "Bienvenue sur notre plateforme conçue pour",
        register:"Pour vous inscrire, cliquez simplement ici",
        resrveButton:"Réserver",
        title:"Sciences de la terre et Séismes",
        desc:'La formation en sciences de la Terre et séismes offre une compréhension ...',
        detail:"La formation en sciences de la Terre et séismes offre une compréhension approfondie des processus géologiques, des mécanismes des séismes, et des techniques d'évaluation des risques sismiques. Elle couvre les principes fondamentaux de la géologie, les mouvements des plaques tectoniques, et les causes des séismes, ainsi que les méthodes de surveillance et de prévision des tremblements de terre. Les participants apprennent également à évaluer les risques sismiques, développer des stratégies pour réduire les risques, et préparer les infrastructures et les communautés aux impacts des séismes. Cette formation est essentielle pour les chercheurs, ingénieurs, et professionnels en gestion des risques souhaitant renforcer leur expertise en sismologie et en réduction des risques.",
        type: 'Formation',
             button:"En savoir plus",
               data: "Pour chaque cours que vous terminez, vous recevrez une certification que vous pourrez partager sur vos réseaux sociaux (par exemple, LinkedIn). Chaque certification a un numéro d'authentification unique qui permet de la vérifier.",
        reserver: "Réservé",
          show:"Tout afficher"
    },
    {
        id:11,
        image: formation19,
        resrvedatail: "Bienvenue sur notre plateforme conçue pour",
        register:"Pour vous inscrire, cliquez simplement ici",
        resrveButton:"Réserver",
        title:"Etudes Formation Recrutements National Et International",
        desc:'Études Formation Recrutements National et International (EFRNI) est ...',
        detail:"Études Formation Recrutements National et International (EFRNI) est une formation spécialisée qui vise à développer des compétences avancées dans le domaine du recrutement, tant au niveau national qu'international. Elle couvre les enjeux liés au recrutement dans divers contextes culturels et légaux, tout en enseignant l'utilisation des outils modernes pour identifier et attirer les talents. La formation met également l'accent sur l'optimisation des processus de sélection et sur l'importance de la gestion des talents pour assurer la rétention et le développement des employés dans une perspective globale",
        type: 'Formation',
             button:"En savoir plus",
               data: "Pour chaque cours que vous terminez, vous recevrez une certification que vous pourrez partager sur vos réseaux sociaux (par exemple, LinkedIn). Chaque certification a un numéro d'authentification unique qui permet de la vérifier.",
        reserver: "Réservé",
          show:"Tout afficher"
    },
    {
        id:12,
        image: formation17,
        resrvedatail: "Bienvenue sur notre plateforme conçue pour",
        register:"Pour vous inscrire, cliquez simplement ici",
        resrveButton:"Réserver",
        title:"Apprendre le théatre pour les enfants",
        desc:'La formation « Apprendre le théâtre pour les enfants » initie les jeunes...',
        detail:"La formation « Apprendre le théâtre pour les enfants » initie les jeunes à l’art dramatique en développant leur confiance en soi, leurs compétences en communication, et leur créativité. À travers des jeux de rôle, des improvisations, et des exercices de création, les enfants apprennent à exprimer leurs émotions et idées tout en renforçant leur esprit d'équipe et leur capacité à travailler en groupe. La formation introduit également les bases du théâtre, comme la prise de parole en public et la gestion du stress de la scène, offrant ainsi une expérience enrichissante qui stimule à la fois leur développement personnel et leurs compétences sociales",
        type: 'Formation',
             button:"En savoir plus",
               data: "Pour chaque cours que vous terminez, vous recevrez une certification que vous pourrez partager sur vos réseaux sociaux (par exemple, LinkedIn). Chaque certification a un numéro d'authentification unique qui permet de la vérifier.",
        reserver: "Réservé",
          show:"Tout afficher"
    },
    {
        id:13,
        image: formation18,
        resrvedatail: "Bienvenue sur notre plateforme conçue pour",
        register:"Pour vous inscrire, cliquez simplement ici",
        resrveButton:"Réserver",
        title:"Formation ascenseur",
        desc:'La formation sur les ascenseurs est conçue pour fournir aux participants...',
        detail:"La formation sur les ascenseurs est conçue pour fournir aux participants une compréhension complète des systèmes d'ascenseurs, de leur installation à leur maintenance. Elle couvre les principes de fonctionnement des ascenseurs, les procédures de sécurité, et les techniques de dépannage. Les participants apprendront à installer, entretenir, et réparer les ascenseurs tout en respectant les normes de sécurité et de réglementation en vigueur. La formation est idéale pour les techniciens, ingénieurs, et toute personne impliquée dans le secteur des ascenseurs, offrant les compétences nécessaires pour assurer le bon fonctionnement et la sécurité des équipements.",
        type: 'Formation',
        button:"En savoir plus",
          data: "Pour chaque cours que vous terminez, vous recevrez une certification que vous pourrez partager sur vos réseaux sociaux (par exemple, LinkedIn). Chaque certification a un numéro d'authentification unique qui permet de la vérifier.",
        reserver: "Réservé",
          show:"Tout afficher"
    },
    {
        id:14,
        image: formation5,
        resrvedatail: "Bienvenue sur notre plateforme conçue pour",
        register:"Pour vous inscrire, cliquez simplement ici",
        resrveButton:"Réserver",
        title:"la conduite de train et de tramway",
        desc:'La formation à la conduite de train et de tramway prépare les participants...',
        detail:"La formation à la conduite de train et de tramway prépare les participants à piloter ces véhicules de manière sécurisée et efficace. Elle couvre les aspects techniques de la conduite, y compris le maniement des commandes, la gestion des systèmes de signalisation, et le respect des procédures de sécurité. Les participants apprennent également à gérer les situations d'urgence, à optimiser la consommation d'énergie et à assurer le confort des passagers. La formation inclut des simulations pratiques et théoriques pour développer des compétences approfondies en conduite et en gestion des opérations ferroviaires et de tramway, tout en respectant les normes réglementaires en vigueur.",
        type: 'Formation',
        button:"En savoir plus",
        data: "Pour chaque cours que vous terminez, vous recevrez une certification que vous pourrez partager sur vos réseaux sociaux (par exemple, LinkedIn). Chaque certification a un numéro d'authentification unique qui permet de la vérifier.",
        reserver: "Réservé",
          show:"Tout afficher"
    },
    
]
export const serviceDataFR = [

    {
        id:1,
        icon:<SlNote/>,
        Servicetitle:"Découvrez nos services",
        title:'Formation',
        title2:"NOS SERVICES",
        desc2:"Nous proposons une formation professionnelle adaptée à tous les niveaux, un service de nettoyage des façades pour assurer la sécurité et la propreté en hiver, ainsi qu'une adresse prestigieuse et une gestion administrative simplifiée pour votre entreprise.",
        desc: "Boostez vos compétences grâce à des formations sur mesure dispensées par des professionnels expérimentés. Nos formateurs experts proposent des programmes personnalisés pour vous aider à atteindre vos objectifs en toute confiance et efficacement.",
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
        Bouton : "Apprendre encore plus",
        link:<Link to={"/formation"} className="text-sky-500" >Obtenez une formation <i className="mdi mdi-chevron-right align-middle"></i></Link>,

    },
    {
        id : 2 ,
        icon:<MdOutlineCleaningServices/>,
        title:'Nettoyage des Façades',
        desc:"Améliorez l’apparence et la longévité de votre bâtiment grâce à des services professionnels de nettoyage de façade. Assurez-vous que votre propriété fasse une bonne première impression, reflétant la qualité et le professionnalisme de votre entreprise.",
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
        Bouton : "Apprendre encore plus",
        link:<Link1 to="contact" className="text-sky-500"smooth={true} duration={1000} activeClass='active' spy={true}>Contactez-nous <i className="mdi mdi-chevron-right align-middle"></i></Link1>,

    },

    {
        id : 3 ,
        icon:<IoHomeOutline/>,
        title:" Domiciliation d'Entreprise ",
        desc:" Profitez d'une domiciliation d'entreprise professionnelle à Agadir pour renforcer votre image corporative et votre présence sur le marché. ",
        image:service3,
        para1 :"Service de Domiciliation d'Entreprise ",
        desc_para1 :"Notre service de domiciliation vous offre une adresse professionnelle prestigieuse pour votre entreprise. En plus de simplifier la gestion administrative, nous assurons la réception de votre courrier et vous fournissons un support complet pour toutes vos démarches. Faites de notre adresse celle de votre entreprise pour renforcer votre image et optimiser votre organisation.",
        para2 :"Avantages et Bénéfices",
        desc_para2 :"En utilisant notre adresse, vous bénéficiez d'une image professionnelle renforcée et d'une gestion simplifiée de votre correspondance, tout en conservant votre vie privée.",
        para3 :"Public Cible ",
        desc_para3 :"Ce service est idéal pour les entrepreneurs, les freelances, les start-ups, et les petites entreprises qui cherchent à établir une présence professionnelle sans avoir besoin d'un bureau physique. ",
        para4:"Processus ou Méthodologie",
        desc_para4:"Nous offrons un processus d'enregistrement facile, incluant la réception et la gestion du courrier, ainsi que des options de redirection selon vos besoins spécifiques. Vous pouvez accéder à vos documents en toute sécurité via notre plateforme en ligne.",
        para5:"Valeur Ajoutée",
        desc_para5:"Notre service se distingue par sa flexibilité, son support personnalisé et sa capacité à offrir une adresse prestigieuse qui renforce la crédibilité de votre entreprise tout en optimisant vos opérations administratives. ",
        Bouton : "Apprendre encore plus",
        link:<Link1 to="contact" className="text-sky-500"smooth={true} duration={1000} activeClass='active' spy={true}>Contactez-nous <i className="mdi mdi-chevron-right align-middle"></i></Link1>,

    },  
    {
        id : 4 ,
        title:'Developpement',
        icon:<CgWebsite/>,
        desc:"Boostez votre présence en ligne avec nos services experts en développement Web. Nos fournisseurs individuels créent des sites Web sur mesure et réactifs qui correspondent parfaitement à votre marque et à vos objectifs commerciaux.",
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
        Bouton : "Apprendre encore plus",
        link:<Link1 to="contact" className="text-sky-500"smooth={true} duration={1000} activeClass='active' spy={true}>Contactez-nous <i className="mdi mdi-chevron-right align-middle"></i></Link1>,

    }, 
    {
        id : 5 ,
        title:'Recruitment',
        desc:"Ceci est requis lorsque, par exemple, le texte final n'est pas encore disponible.",
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

        link:<Link to="/jobs/all" className="text-sky-500" >Obtenez un emploi à l'international <i className="mdi mdi-chevron-right align-middle"></i></Link>,


    },  
    {
        id: 6,
        title: "Infirmière de soins aux patients",
        desc: "We offer employment contract services in Europe. Contact us today to start your journey toward a bright professional future ! ",
        image: heroImage1,
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
        link:"/nurse",
    }
]
export const langeDataFR = [

    {
        id:1,
        icon:<SlNote/>,
        Servicetitle:"francais",
        title:'Formation',
        title2:"NOS SERVICES",
        desc2:"Nous proposons une formation professionnelle adaptée à tous les niveaux, un service de nettoyage des façades pour assurer la sécurité et la propreté en hiver, ainsi qu'une adresse prestigieuse et une gestion administrative simplifiée pour votre entreprise.",
        desc: "Boostez vos compétences grâce à des formations sur mesure dispensées par des professionnels expérimentés. Nos formateurs experts proposent des programmes personnalisés pour vous aider à atteindre vos objectifs en toute confiance et efficacement.",
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
        Bouton : "Apprendre encore plus",
        link:<Link to={"/formation"} className="text-sky-500" >Obtenez une formation <i className="mdi mdi-chevron-right align-middle"></i></Link>,

    },
    {
        id : 2 ,
        icon:<MdOutlineCleaningServices/>,
        title:'anglais',
        desc:"Améliorez l’apparence et la longévité de votre bâtiment grâce à des services professionnels de nettoyage de façade. Assurez-vous que votre propriété fasse une bonne première impression, reflétant la qualité et le professionnalisme de votre entreprise.",
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
        Bouton : "Apprendre encore plus",
        link:<Link1 to="contact" className="text-sky-500"smooth={true} duration={1000} activeClass='active' spy={true}>Contactez-nous <i className="mdi mdi-chevron-right align-middle"></i></Link1>,

    },

    {
        id : 3 ,
        icon:<IoHomeOutline/>,
        title:" allemande ",
        desc:" Profitez d'une domiciliation d'entreprise professionnelle à Agadir pour renforcer votre image corporative et votre présence sur le marché. ",
        image:service3,
        para1 :"Service de Domiciliation d'Entreprise ",
        desc_para1 :"Notre service de domiciliation vous offre une adresse professionnelle prestigieuse pour votre entreprise. En plus de simplifier la gestion administrative, nous assurons la réception de votre courrier et vous fournissons un support complet pour toutes vos démarches. Faites de notre adresse celle de votre entreprise pour renforcer votre image et optimiser votre organisation.",
        para2 :"Avantages et Bénéfices",
        desc_para2 :"En utilisant notre adresse, vous bénéficiez d'une image professionnelle renforcée et d'une gestion simplifiée de votre correspondance, tout en conservant votre vie privée.",
        para3 :"Public Cible ",
        desc_para3 :"Ce service est idéal pour les entrepreneurs, les freelances, les start-ups, et les petites entreprises qui cherchent à établir une présence professionnelle sans avoir besoin d'un bureau physique. ",
        para4:"Processus ou Méthodologie",
        desc_para4:"Nous offrons un processus d'enregistrement facile, incluant la réception et la gestion du courrier, ainsi que des options de redirection selon vos besoins spécifiques. Vous pouvez accéder à vos documents en toute sécurité via notre plateforme en ligne.",
        para5:"Valeur Ajoutée",
        desc_para5:"Notre service se distingue par sa flexibilité, son support personnalisé et sa capacité à offrir une adresse prestigieuse qui renforce la crédibilité de votre entreprise tout en optimisant vos opérations administratives. ",
        Bouton : "Apprendre encore plus",
        link:<Link1 to="contact" className="text-sky-500"smooth={true} duration={1000} activeClass='active' spy={true}>Contactez-nous <i className="mdi mdi-chevron-right align-middle"></i></Link1>,

    },  
    {
        id : 4 ,
        title:'Italien',
        icon:<CgWebsite/>,
        desc:"Boostez votre présence en ligne avec nos services experts en développement Web. Nos fournisseurs individuels créent des sites Web sur mesure et réactifs qui correspondent parfaitement à votre marque et à vos objectifs commerciaux.",
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
        Bouton : "Apprendre encore plus",
        link:<Link1 to="contact" className="text-sky-500"smooth={true} duration={1000} activeClass='active' spy={true}>Contactez-nous <i className="mdi mdi-chevron-right align-middle"></i></Link1>,

    }, 
    {
        id : 5 ,
        title:'Recruitment',
        desc:"Ceci est requis lorsque, par exemple, le texte final n'est pas encore disponible.",
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

        link:<Link to="/jobs/all" className="text-sky-500" >Obtenez un emploi à l'international <i className="mdi mdi-chevron-right align-middle"></i></Link>,


    },  
    {
        id: 6,
        title: "Infirmière de soins aux patients",
        desc: "We offer employment contract services in Europe. Contact us today to start your journey toward a bright professional future ! ",
        image: heroImage1,
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
        link:"/nurse",
        }]
export const Titlefr=[
    {
        Title:"Études Formation Recrutement National et International",
        button:"Contactez-nous",
        Learn:" Pour en savoir plus",
    }
]
export const NurseFR = [{
    title: "Soins infirmiers compatissants auxquels vous pouvez faire confiance",
    desc: "Notre équipe dévouée d'infirmiers professionnels est là pour fournir des soins de la plus haute qualité avec empathie et respect. Votre santé et votre confort sont notre priorité absolue.",
    contact: "Contactez-nous dès aujourd'hui",
    about: "À propos de nous",
    descab: "Nous sommes une équipe d'infirmiers diplômés et expérimentés dédiée à fournir des soins exceptionnels dans le confort de votre domicile. Des soins post-opératoires à la gestion des maladies chroniques, notre objectif est d'améliorer votre qualité de vie grâce à des services personnalisés et compatissants."
}];
export const CardFr = [{
    title: "Points forts de nos soins infirmiers",
    Comfort: "Confort du patient",
    textCom: "Assurer le plus grand confort à nos patients grâce à des soins personnalisés et compatissants.",
    detail: "DÉTAIL",
    Caregiver: "Soutien aux aidants",
    textCare: "Soutenir les aidants familiaux avec les ressources et le répit dont ils ont besoin pour s'occuper de leurs proches.",
    Safety: "Sécurité et sûreté",
    textsafe: "Maintenir un environnement sûr et sécurisé pour tous les patients grâce à des mesures de sécurité rigoureuses."
}]
export const ServicesSectionFR = [{
    title: "Nos services de soins",
    Patient: "Soins aux patients",
    descp: "Prendre soin du patient pendant sa maladie.",
    Dressing: "Changement de pansement",
    descd: "Changement de pansements (chirurgicaux et dermatologiques, etc.).",
    Injections: "Injections",
    desci: "Types d'injections intramusculaires et sous-cutanées.",
    Medical: "Ordonnance médicale",
    decsm: "Avec une ordonnance médicale (obligatoire).",
    Umbilical: "Soins du cordon ombilical",
    descu: "Soins du cordon ombilical pour les bébés.",
    Postpartum: "Soins post-partum",
    decccp: "Soins pour la mère après l'accouchement.",
    IV: "Changement de perfusion",
    descI: "Changement de perfusion intraveineuse.",
    Blood: "Pression artérielle & Glucose",
    decsB: "Surveillance de la pression artérielle et du glucose sanguin."
}];

export const NavbarFR=[{
    Home:"Accueil",
    Services:"Services",
    Formation:"Formation",
    Jobs:"Emplois",
    gallery:"GALERIE",
    About:"À propos",
    Contact_us:"Contactez-nous"
}
]
export const AboutFR=[{
    h1 : " À propos d'Ocean Connecting  ",
    ask:"Qui sommes-nous ?",
    title:"Nous sommes spécialisés dans le placement international et l'assistance documentaire, offrant un soutien sur mesure en plusieurs langues pour vous aider à naviguer dans les opportunités de carrière internationales.",
    desc:"Notre entreprise fournit des services de placement international et un soutien expert en plusieurs langues. Nous aidons les clients à trouver des opportunités de carrière à l'étranger et offrons une aide complète pour la préparation de documents en diverses langues. Notre objectif est de faciliter une transition fluide et efficace vers des carrières internationales.",
    year:"Années d'expérience",
     International:"Soutien aux carrières internationales",
     Services:"Services"
}]
export const recruitmentFR = [
    {
        id: 1,
        h1:"Recrutement",
        title: 'Recrutement International',
        desc: 'Relier les talents mondiaux aux opportunités au-delà des frontières. Nous simplifions le recrutement international pour vous aider à trouver les meilleurs candidats dans le monde entier.',
        image:recrutinter,
        title2: 'Services de Recrutement International',
        desc2: 'Notre entreprise se spécialise dans la mise en relation des meilleurs talents avec des opportunités mondiales. Nous proposons des solutions complètes de recrutement international, y compris la recherche, la présélection et le placement des candidats. En tirant parti de notre vaste réseau et de notre expertise sur divers marchés, nous aidons les entreprises à trouver les talents adéquats pour stimuler leur croissance et leur succès au-delà des frontières.',
          button:"Postulez maintenant",
          type:"International"
    },
    {
        id: 2,
        title: 'Recrutement OceanConnecting',
        desc: 'Connecter les meilleurs talents avec des organisations de premier plan à l’échelle nationale. Rationaliser votre processus de recrutement pour des résultats efficaces et efficients.',
        image:recrutocean,
        title2: 'Recrutement OceanConnecting',
        desc2: 'Nous sommes ravis de vous inviter à postuler pour un poste dans notre entreprise. Rejoignez notre équipe et contribuez à notre environnement dynamique tout en faisant avancer votre carrière. Explorez des opportunités de croissance, d’innovation et d’impact avec nous.',
         button:"Postulez maintenant",
         type:"National"
    },
];
export const jobsFR = [
    {
        id: 1,
        image: resume,
        title: "Demande de contrat de travail à l'étranger ",
        type: 'International',
        menu1: "Documents requis : ",
        secteur: " L'acte judiciaire (Apostil) est délivré par le tribunal et traduit en anglais par le ministère des affaires étrangères. ",
        menu2: "Images requises :",
        niveaulanguage: "Une photo de vous, une copie de votre passeport, une vidéo et une photo de vous en train d'exercer la profession que vous souhaitez exercer." ,
        menu6:"Plus d'informations :",
        more:' Vous pouvez obtenir le formulaire en cliquant sur le bouton de Télécharger , 🙏🏻 et pour vous faciliter la tâche, vous pouvez nous envoyer les documents originaux (PDF).',
        action : 'Télécharger',
        link: form ,    
    },
    
    {
        id: 2,
        job:"Agences de placement",
        ocean:"Ocean connect",
        image: croatie,
        title: 'Contrat de travail en Croatie',
        type: 'International',
        secteur: 'Construction / Forge / Menuiserie / Peinture / Mécanicien électrique / Climatisation / Chauffeur Permi D / Boucher / Hôtellerie.',
        niveaulanguage: "La langue n'est pas nécessaire.",
        timevisa: 'La durée du visa est de 5 mois.',
        contratime: 'Contrat de travail de 1 an.',
        pricecontrat: 'Le prix du contrat est de 60,000 DH.',
        more: 'Le contrat prévoit un logement et un traitement médical gratuits...',
        link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D9%83%D8%B1%D9%88%D8%A7%D8%AA%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
        menu1: "Secteur :",
        menu2: "Niveau de langue  :",
        menu3: "Durée du visa  :",
        menu4: "Le contrat :",
        menu5: "Prix du contrat  :",
        menu6: "Plus d'informations :",
        action:'Demande',

          
    },
    {
        id: 3,
        image: allemagne,
        title: 'Contrat de travail en Allemagne',
        type: 'International',
        secteur: ' Santé et soins infirmiers / Hôtels / Programmation',
        niveaulanguage: 'Langue B1 nécessaire.',
        timevisa: 'La durée du visa est de 8 mois.',
        contratime: 'Contrat de travail de 1 an.',
        pricecontrat: 'Le prix du contrat est de 80,000 DH.',
        more: 'Le contrat prévoit un logement et un traitement médical gratuits...',
        link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D8%A3%D9%84%D9%85%D8%A7%D9%86%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
        menu1: "Secteur :",
        menu2: "Niveau de langue  :",
        menu3: "Durée du visa  :",
        menu4: "Le contrat :",
        menu5: "Prix du contrat  :",
        menu6: "Plus d'informations :",
        action : 'Demande',

    },
    {
        id: 4,
        image: belgium,
        title: 'Contrat de travail en Belgique',
        type: 'International',
        secteur: 'Santé et soins infirmiers / Hôtels / Programmation  ',
        niveaulanguage: 'Langue B1 nécessaire.',
        timevisa: 'La durée du visa est de 8 mois.',
        contratime: 'Contrat de travail de 1 an.',
        pricecontrat: 'Le prix du contrat est de 60,000 DH.',
        more: 'Le contrat prévoit un logement et un traitement médical gratuits...',
        link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D8%A8%D9%84%D8%AC%D9%8A%D9%83%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
        menu1: "Secteur :",
        menu2: "Niveau de langue  :",
        menu3: "Durée du visa  :",
        menu4: "Le contrat :",
        menu5: "Prix du contrat :",
        menu6: "Plus d'informations :",
        action : 'Demande',
    },
    {
        id: 5,
        image: italy,
        title: 'Contrat de travail en Italie',
        type: 'International',
        secteur: 'Santé et soins infirmiers / Hôtels / Agriculture.',
        niveaulanguage: 'Langue B1 nécessaire.',
        timevisa: 'La durée du visa est de 8 mois.',
        contratime: 'Contrat de travail de 1 an.',
        pricecontrat: 'Le prix du contrat est de 60,000 DH.',
        more: 'Le contrat prévoit un logement et un traitement médical gratuits...',
        link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D8%A5%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
        menu1: "Secteur :",
        menu2: "Niveau de langue  :",
        menu3: "Durée du visa  :",
        menu4: "Le contrat :",
        menu5: "Prix du Contrat :",
        menu6: "Plus d'informations :",
        action : 'Demande',
    },
    {
        id: 6,
        image: spain,
        title: 'Contrat de travail en Espagne',
        type: 'International',
        secteur: 'Santé et soins infirmiers / Hôtels / Agriculture.',
        niveaulanguage: 'Langue B1 nécessaire.',
        timevisa: 'La durée du visa est de 8 mois.',
        contratime: 'Contrat de travail de 1 an.',
        pricecontrat: 'Le prix du contrat est de 60,000 DH.',
        more: 'Le contrat prévoit un logement et un traitement médical gratuits...',
        link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D8%A5%D8%B3%D8%A8%D8%A7%D9%86%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
        menu1: "Secteur :",
        menu2: "Niveau de langue  :",
        menu3: "Durée du visa  :",
        menu4: "Le contrat :",
        menu5: "Prix du Contrat :",
        menu6: "Plus d'informations :",
        action : 'Demande',
    },
    {
        id: 7,
        image: facade,
        title: 'Nettoyant pour façades de bâtiments',
        type: 'National',
        secteur: 'service de nettoyage',
        niveaulanguage: " La langue n'est pas nécessaire.",
        timevisa: 'niveau BAC.',
        contratime: 'contrat CDI - CDD .',
        pricecontrat: 'AGADIR .',
        more: " Connaissance des produits chimiques - Tolérance psychologique - Bonne communication - Aptitude à utiliser l'équipement - Précision et souci du détail - Travail en hauteur - Aptitude physique - Conscience de la sécurité ",
        link: "#",
        menu1:"Secteur :",
        menu2:"Niveau de langue  :",
        menu3:"Niveau d'éducation:",
        menu4:"Type Contrat :",
        menu5:"Région :",
        menu6:"Compétences clés :",
        menu6: "Plus d'informations :",
        action : 'Demande',
    },
    // Assurez-vous que chaque offre d'emploi a un identifiant unique
];
export const ContactFR=[{
    title: "CONTACTEZ-NOUS",
    desc: "Nous aimerions avoir de vos nouvelles ! Remplissez le formulaire ci-dessous avec votre nom, votre e-mail et votre message, et nous vous répondrons dans les plus brefs délais. Merci de nous avoir contactés !",
    name: "Votre Nom :",
    email: "Votre E-mail :",
    question: "Votre Question :",
    comment: "Votre Commentaire :",
    Message: "Envoyer le Message"
}]
export const placementfr=[
    {
        job:"Agences de placement",
    }
    
]
export const GalleryFR=[
    {
        id:1,
        title:"Bienvenue dans notre galerie !",
        desc:"Découvrez la créativité et la passion qui se cachent derrière notre travail à travers ces images. Appréciez la vue !",
        image:"https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F2.jpg?alt=media&token=2edf1832-c447-46f8-88af-b496cbaa46fe",
        numberimage:"10 images",
        datealbum:" 12-12-2024",
        titlealbum:"Événement - Infirmières",
        img: [
            {alt: 'image1', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F1.jpg?alt=media&token=e00fef12-3166-4135-ba8e-cc244533f9c9'},
            {alt: 'image2', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F2.jpg?alt=media&token=2edf1832-c447-46f8-88af-b496cbaa46fe'},
            {alt: "image3", url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F3.jpg?alt=media&token=1ee28e5c-4382-43a8-8486-70a300389152'},
            {alt: "image4", url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F4.jpg?alt=media&token=c743a9a4-fd9f-402a-aac8-2a43344d72c8'},
            {alt: "image5", url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F5.jpg?alt=media&token=3db9b4fe-05de-49e4-a3ba-0c56756ab4b9'},
            {alt: "image6", url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F6.jpg?alt=media&token=cd3f5727-dd69-495d-be36-a476990c0a1e'},
            {alt: "image7", url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F7.jpg?alt=media&token=0832fc09-a5ec-4a4c-9a71-e6463c6d9244'},
            {alt: "image8", url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F8.jpg?alt=media&token=8addc46f-e121-4456-a129-5e44f4bff1c9'},
            {alt: "image9", url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F9.jpg?alt=media&token=530b17a3-fc1e-4e22-99ec-d8cfa51f71b4'},
            {alt: "image10", url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F10.jpg?alt=media&token=f840572c-7b17-42da-a413-565daf589f3e'},
        ]
    },
    {
        id:2,
        image:"https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FglassCleaning-team1%2F1.png?alt=media&token=42c92a0a-9bfe-4b1e-8bb2-5799ba69a1ee",
        numberimage:"5 images",
        datealbum:"12-12-2024",
        titlealbum:"équipe de nettoyage des vitres ",
        img: [
            {alt: 'image1', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FglassCleaning-team1%2F6.jpg?alt=media&token=a6ef683e-9250-4147-acb2-b6a538f16790'},
            {alt: 'image2', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FglassCleaning-team1%2F2.jpg?alt=media&token=89f41d86-0294-4ac9-a646-e8127f751d4a'},
            {alt: 'image3', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FglassCleaning-team1%2F3.jpg?alt=media&token=d9c0d25e-8db6-4ac7-b07d-7641dd174f15'},
            {alt: 'image4', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FglassCleaning-team1%2F4.jpg?alt=media&token=8e6de772-41b2-4905-aa7e-8f81d3d73c86'},
            {alt: 'image5', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FglassCleaning-team1%2F5.jpg?alt=media&token=083fe0ff-6226-492c-9974-3f8423efd177'},
            ]
    },
    {
        id:3,
        image:"https://i.imgur.com/alQ7GWW.jpeg",
        numberimage:"27 images",
        datealbum:"12-12-2024",
        titlealbum:"Photos du centre ",
        img: [
            {alt: 'image1', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4075.jpg?alt=media&token=0fbbc107-22b2-4fed-bbfb-f680799d7075'},
            {alt: 'image2', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4076.jpg?alt=media&token=4c3ee7dd-e27e-468d-8917-980f9423b292'},
            {alt: 'image3', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4079.jpg?alt=media&token=da9ea1e6-91f5-4e5d-8fa5-af4503e5eff5'},
            {alt: 'image4', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4080.jpg?alt=media&token=7ef19b40-51b6-4aca-b2b6-d950aebdcbd0'},
            {alt: 'image5', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4083.jpg?alt=media&token=2fd8f1ee-3826-46eb-995f-86ac7641fda6'},
            {alt: 'image6', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4084.jpg?alt=media&token=0cf65c9e-d52f-491d-840e-11a43c5d1f70'},
            {alt: 'image7', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4085.jpg?alt=media&token=a291f227-32d8-44be-ae30-f67e25bebf1f'},
            {alt: 'image8', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4086.jpg?alt=media&token=a917d76e-03a1-4d1f-93b7-f68491b61d8b'},
            {alt: 'image9', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4088.jpg?alt=media&token=a47dee19-cee1-4ccc-a3d1-c9c9f85bb833'},
            {alt: 'image10', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4089.jpg?alt=media&token=ccdf637c-b9dd-462f-a7d3-3a4fb32ed37f'},
            {alt: 'image11', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4090.jpg?alt=media&token=4100faca-4836-46bf-b0e9-2ba295540019'},
            {alt: 'image12', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4091.jpg?alt=media&token=fc57e36f-28bd-47c5-aa8e-822cd088c906'},
            {alt: 'image13', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4092.jpg?alt=media&token=74d75869-278f-4f3b-bd04-9ef4419c5b93'},
            {alt: 'image14', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4093.jpg?alt=media&token=c3efdf66-6e8e-4913-a027-413e5db4be98'},
            {alt: 'image15', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4094.jpg?alt=media&token=3b685692-20e7-4b17-a850-4665d25f5d4f'},
            {alt: 'image16', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4095.jpg?alt=media&token=9f76d06d-02ca-4970-82e9-459ad1f7ba49'},
            {alt: 'image17', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4096.jpg?alt=media&token=8906c50e-9cd9-414c-bf53-55fa1eb2a400'},
            {alt: 'image18', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4097.jpg?alt=media&token=1d2807bf-78f9-4740-9e13-c80cca55c584'},
            {alt: 'image19', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4098.jpg?alt=media&token=a2ae568e-d258-4db4-a418-f5a87cf7cb84'},
            {alt: 'image20', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4099.jpg?alt=media&token=a737a81f-e776-4d3d-8f99-4e833a1e10e4'},
            {alt: 'image21', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4100.jpg?alt=media&token=4cd635f4-66d8-4971-b6e5-a8f76f63cb6d'},
            {alt: 'image22', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4102.jpg?alt=media&token=86e6047e-7132-46a0-aafb-d4c87fdfbe6d'},
            {alt: 'image23', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4105.jpg?alt=media&token=d8ee1dc3-59b9-4ef9-819f-0df491aeb3a3'},
            {alt: 'image24', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4106.jpg?alt=media&token=f7966a7d-ec7b-4de7-8a3c-371e470b163d'},
            ]
    },
    
]




