import AvatarLogo from '../../assets/images/done/TeamNurse/avatar.jpg';
import germany from '../../assets/images/job/germany.png';
import italy from '../../assets/images/job/italy.png';
import spain from '../../assets/images/job/spain.png';
import bulgim from '../../assets/images/job/belgium.png';
import croatie from '../../assets/images/job/croatie.png';
import icongermany from './icon/germany.svg';
import iconcroiti from './icon/croiti.svg';
import iconitaly from './icon/italy.svg';
import iconspain from './icon/spain.svg';
import iconbulgim from './icon/bulgim.svg';
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { GrDocumentUser } from "react-icons/gr";
import { FaPlaneDeparture ,FaPassport  } from "react-icons/fa6";


export const formSectionData = {
  title: "Comment placer le dossier et quelle est la documentation requise ?",
  subtitle: "NOUS SOMMES ICI",
  content: [
    {
      text: "Nous offrons des services spécialisés dans la fourniture de contrats de travail dans divers pays européens, ainsi qu'une assistance en matière de visa et de voyage. Notre processus simplifié garantit une expérience sans tracas.",
    },
    {
      text: "Documents requis :",
      isBold: true
    },
    {
      icon: true,
      text: "Le dossier judiciaire est obtenu auprès du tribunal, la correction de la signature auprès du ministère des affaires étrangères (Apostille) et la traduction en anglais."
    },
    {
      icon: true,
      text: "Une photo de vous."
    },
    {
      icon: true,
      text: "Une copie de votre passeport."
    },
    {
      icon: true,
      text: "Le formulaire peut être obtenu en cliquant sur le bouton de téléchargement ci-dessous."
    },
    {
      icon: true,
      text: "Vidéo et photo de vous exerçant la profession dans laquelle vous souhaitez servir 🙏🏻 ou, pour vous faciliter la tâche, vous pouvez nous envoyer les documents originaux (PDF)."
    },
  ],
  downloadText: "Télécharger le fichier suivant",
  buttonText:"Télécharger le formulaire",
};

export const contractCardSectionContent = {
  title: "Pays disponibles pour la recherche d'emploi à l'étranger",
  description: "Vous trouverez des opportunités d'emploi dans toute l'Europe. Chez OceanConnecting, nous vous donnons accès aux marchés du travail de plusieurs pays européens et nous vous aidons à obtenir un contrat de travail et les documents nécessaires. Rejoignez-nous et commencez votre carrière en Europe facilement et en douceur.",
  button:'To Apply',
  contracts: [
    {
      id: 1,
      imageUrl:croatie ,
      country: 'Croatie',
      sector: 'Construction / Forge / Menuiserie / Peinture / Mécanique électrique / Climatisation / Permis de conduire D / Boucherie / Hôtellerie',
      language: 'Langue non requise',
      visaDuration: 'La durée du visa est de 5 mois.',
      contractDuration: "Contrat de travail d'un 1 an",
      contractPrice: 'Le prix du contrat est de 60 000 DH.',
      additionalInfo: 'Logement, soins médicaux, renouvelables pour 5 ans, et aide à la citoyenneté.',
      international: 'International',
      latitude: 45.1,
      longitude: 15.2,
      icon:iconcroiti ,
      label:'Croatie' ,
      link:"https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D9%83%D8%B1%D9%88%D8%A7%D8%AA%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
    },
    {
      id: 2,
      imageUrl:germany ,
      country: 'Allemagne',
      sector: 'Santé et soins infirmiers / Hôtels / Programmation',
      language: 'Langue requise B1',
      visaDuration: 'La durée du visa est de 8 mois.',
      contractDuration: "Contrat de travail d'un 1 an",
      contractPrice: 'Le prix du contrat est de 80 000 DH.',
      additionalInfo: 'Logement, soins médicaux, renouvelables pour 5 ans, et aide à la citoyenneté.',
      international: 'International',
      latitude: 51.1657,
      longitude: 10.4515,
      icon:icongermany ,
      label:'Allemagne' ,
      link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D8%A3%D9%84%D9%85%D8%A7%D9%86%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",

    },
    {
      id: 3,
      imageUrl:bulgim ,
      country: 'Belgique',
      sector: 'Santé et soins infirmiers / Hôtels / Programmation',
      language: 'Langue requise B1',
      visaDuration: 'La durée du visa est de 8 mois.',
      contractDuration: "Contrat de travail d'un 1 an",
      contractPrice: 'Le prix du contrat est de 60 000 DH.',
      additionalInfo: 'Logement, soins médicaux, renouvelables pour 5 ans, et aide à la citoyenneté.',
      international: 'International',
      latitude: 50.8503,
      longitude: 4.3517,
      icon:iconbulgim ,
      label:'Belgique' ,
      link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D8%A8%D9%84%D8%AC%D9%8A%D9%83%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",

    },
    {
      id: 4,
      imageUrl:italy ,
      country: 'Italie',
      sector: 'Santé et soins infirmiers / Hôtellerie / Agriculture',
      language: 'Langue requise B1',
      visaDuration: 'La durée du visa est de 8 mois.',
      contractDuration: "Contrat de travail d'un 1 an",
      contractPrice: 'Le prix du contrat est de 60 000 DH.',
      additionalInfo: 'Logement, soins médicaux, renouvelables pour 5 ans, et aide à la citoyenneté.',
      international: 'International',
      latitude: 41.8719,
      longitude: 12.5674,
      icon:iconitaly ,
      label:'Italie' ,
      link:"https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D8%A5%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",

    },
    {
      id: 5,
      imageUrl:spain ,
      country: 'Espagne',
      sector: 'Santé et soins infirmiers / Hôtellerie / Agriculture',
      language: 'Langue requise B1',
      visaDuration: 'La durée du visa est de 8 mois.',
      contractDuration: "Contrat de travail d'un 1 an",
      contractPrice: 'Le prix du contrat est de 60 000 DH.',
      additionalInfo: 'Logement, soins médicaux, renouvelables pour 5 ans, et aide à la citoyenneté.',
      international: 'International',
      latitude: 40.4637,
      longitude: -3.7492,
      icon:iconspain ,
      label:'Espagne' ,
      link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D8%A5%D8%B3%D8%A8%D8%A7%D9%86%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",   

    },
    // Add more contracts as needed
  ]
};

export const questionSectionContent = {
  title: 'Questions & réponses',
  description: 'Découvrez les questions et réponses les plus courantes sur la Célébration',
  questions: [
    {
      question: 'Durée du contrat ?',
      answer: "Le contrat est d'une durée d'un an et peut être renouvelé jusqu'à cinq ans, ce qui garantit une stabilité et une croissance à long terme.",
    },
    {
      question: 'Un hébergement est-il prévu ?',
      answer: "L'hébergement et les soins médicaux sont fournis pour assurer votre confort et votre santé.",
    },
    {
      question: 'Le service est-il disponible dans toutes les villes ou seulement à Agadir et Casablanca ?',
      answer: 'Oui, nous traitons les demandes pour toutes les villes, pas seulement Casablanca, ce qui garantit que nos services sont accessibles où que vous soyez.',
    },
    {
      question: "Quelqu'un a-t-il déjà eu recours à vos services ?",
      answer: "Oui, de nombreuses personnes ont utilisé nos services avec succès et ont trouvé des opportunités d'emploi intéressantes en Europe.",
    },
  ],
  footer: {
    text: "Vous n'avez pas trouvé la réponse que vous cherchiez ?",
    linkText: "Contactez notre service d'assistance",
  },
};

export const stepsSectionContent = {
  heading: 'Comment ça marche',
  title: "Étapes de la fourniture d'un contrat offshore à nos clients",
  description: "Obtenez votre contrat avec les meilleures entreprises d'Europe en seulement 4 étapes simples",
  steps: [
    {
      icon: MdOutlineConnectWithoutContact,
      title: 'Contactez nous',
      description: 'Utilisez vos propres bases de données Notion ou reproduisez les nôtres.',
    },
    {
      icon: GrDocumentUser,
      title: 'Recevoir le dossier avec les documents',
      description: 'Mettez en correspondance vos champs Notion avec les champs Plume.',
    },
    {
      icon: FaPassport,
      title: 'Contrat et visa',
      description: 'Choisissez un domaine ou un sous-domaine pour votre blog.',
    },
    {
      icon: FaPlaneDeparture,
      title: 'Voyage',
      description: "C'est tout. Vous obtiendrez un blog professionnel.",
    },
  ],
};

export const heroSectionContent = {
  title: 'Get a work contract in Europe as soon as possible',
  description: "Bienvenue à OceanConnecting ! Nous sommes là pour vous aider à trouver des opportunités d'emploi satisfaisantes en Europe, en vous fournissant des contrats de travail et en nous occupant de tous les documents nécessaires pour une transition en douceur. Laissez-nous vous guider vers un emploi intéressant à travers le continent.",
  avatars: [
    {
      src: 'https://d33wubrfki0l68.cloudfront.net/3bfa6da479d6b9188c58f2d9a8d33350290ee2ef/301f1/images/hero/3/avatar-male.png',
      alt: 'Avatar 1',
    },
    {
      src: 'https://d33wubrfki0l68.cloudfront.net/b52fa09a115db3a80ceb2d52c275fadbf84cf8fc/7fd8a/images/hero/3/avatar-female-1.png',
      alt: 'Avatar 2',
    },
    {
      src: 'https://d33wubrfki0l68.cloudfront.net/8a2efb13f103a5ae2909e244380d73087a9c2fc4/31ed6/images/hero/3/avatar-female-2.png',
      alt: 'Avatar 3',
    },
  ],
  joinText1: "S'associer à ",
  joinText2: "Plus de 600 travailleurs à l'étranger ",
  joinText3: ' et commencez à réaliser vos rêves et vos désirs avec OceanConnecting',
  buttons: [
    {
      text: 'Contact US',
      link: '/contract',
      className: 'inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-red-600 border rounded-xl font-pj hover:bg-gray-600 hover:to-red-500 transform hover:scale-105',
    },
    {
      text: 'Télécharger le formulaire',
      link: '/contract',
      className: 'inline-flex items-center px-4 py-4 text-lg font-bold transition-all duration-200 bg-transparent border rounded-xl hover:bg-gradient-to-r from-blue-600 to-red-600 hover:text-white hover:to-red-500 transform hover:scale-105',
      icon: {
        svgPath: 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4',
      },
    },
  ],
};

  export const testimonials = [
    {
        name: 'Sarah L.',
        quote: 'The care I received was outstanding. The nurses were professional, kind, and truly cared about my well-being.',
        image: AvatarLogo,// Replace with actual image paths
      },
      {
        name: 'Michael P.',
        quote: 'Thanks to the wonderful team, my recovery was smooth and comfortable. I couldn’t have asked for better care.',
        image: AvatarLogo, // Replace with actual image paths
      },
      {
        name: 'Jessica W.',
        quote: 'Our family is grateful for the compassionate care provided to our elderly parents. Highly recommended!',
        image: AvatarLogo, // Replace with actual image paths
      },
  ];

  export const faqs = [
    {
      question: 'What documents are required to apply for a contract?',
      answer: 'You will need to provide your identification documents, proof of qualifications, and any relevant certificates. Specific requirements may vary depending on the contract and country.',
    },
    {
      question: 'How long does it take to process my application?',
      answer: 'The processing time can vary, but it typically takes between 2 to 4 weeks. You will be notified via email once your application status is updated.',
    },
    {
      question: 'Is knowledge of a foreign language mandatory for all contracts?',
      answer: 'Not all contracts require knowledge of a foreign language. Please review the specific language requirements listed in the contract details.',
    },
    {
      question: 'What support will I receive after securing a contract?',
      answer: 'We provide ongoing support including help with visa applications, travel arrangements, and local orientation to ensure a smooth transition.',
    },
    {
      question: 'Are there any fees involved in applying for a contract?',
      answer: 'Yes, there are application fees which vary depending on the contract and country. The contract price listed includes all applicable fees.',
    },
    {
      question: 'Can I apply for multiple contracts at the same time?',
      answer: 'Yes, you can apply for multiple contracts. However, we recommend focusing on the ones that best match your skills and qualifications.',
    },
  ];

  export const companyInfo = [
    {name: "Your Company Name",
    address: "1234 Your Address, City, Country",
    email: "info@yourcompany.com",
    phone: "+123 456 7890",
    }
  ];
  