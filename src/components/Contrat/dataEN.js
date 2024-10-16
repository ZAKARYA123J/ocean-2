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
  title: "How to place the file and what documentation is required ?",
  subtitle: "HERE WE ARE",
  content: [
    {
      text: "We offer specialized services in providing employment contracts in various European countries, along with visa and travel assistance. Our streamlined process ensures a hassle-free experience.",
    },
    {
      text: "Required documents:",
      isBold: true
    },
    {
      icon: true,
      text: "The judicial record is obtained from the court, signature correction at the Ministry of Foreign Affairs (Apostil) and translated into English."
    },
    {
      icon: true,
      text: "A photograph of you."
    },
    {
      icon: true,
      text: "A copy of your passport."
    },
    {
      icon: true,
      text: "The form which can be obtained by clicking on the download button below."
    },
    {
      icon: true,
      text: "Video and photo of you practicing the profession in which you want to serve 🙏🏻 or to make it easier for you, you can send us the original documents (PDF)."
    },
  ],
  downloadText: "Download the following file",
  buttonText:"Download Form",
};

export const contractCardSectionContent = {
  title: 'Countries available for overseas job search',
  description: 'You will find job opportunities all over Europe. At OceanConnecting, we provide access to labor markets in several European countries and support you in obtaining a work contract and the necessary documents. Join us and start your career in Europe smoothly and easily.',
  contracts: [
    {
      id: 1,
      imageUrl:croatie ,
      country: 'Croatia',
      sector: 'Construction / Blacksmithing / Joinery / Painting / Electrical mechanic / Air conditioning / Driver license D / Butcher / hotel service',
      language: 'Language not required',
      visaDuration: '5 months',
      contractDuration: '1-year employment contract',
      contractPrice: '60,000 DH',
      additionalInfo: 'Housing, medical care, renewable for 5 years, and citizenship assistance.',
      international: 'International',
      latitude: 45.1,
      longitude: 15.2,
      icon:iconcroiti ,
      label:'Croatia' ,
    },
    {
      id: 2,
      imageUrl:germany ,
      country: 'Germany',
      sector: 'Health and Nursing / Hotels / Programming',
      language: 'Required language B1',
      visaDuration: '8 months',
      contractDuration: '1-year employment contract',
      contractPrice: '80,000 DH',
      additionalInfo: 'Housing, medical care, renewable for 5 years, and citizenship assistance.',
      international: 'International',
      latitude: 51.1657,
      longitude: 10.4515,
      icon:icongermany ,
      label:'Germany' ,
    },
    {
      id: 3,
      imageUrl:bulgim ,
      country: 'Belgium',
      sector: 'Health and Nursing / Hotels / Programming',
      language: 'Language B1 is necessary',
      visaDuration: '8 months',
      contractDuration: '1-year employment contract',
      contractPrice: '60,000 DH',
      additionalInfo: 'Housing, medical care, renewable for 5 years, and citizenship assistance.',
      international: 'International',
      latitude: 50.8503,
      longitude: 4.3517,
      icon:iconbulgim ,
      label:'Belgium' ,
    },
    {
      id: 4,
      imageUrl:italy ,
      country: 'Italy',
      sector: 'Health and Nursing / Hotels / Agriculture',
      language: 'Language B1 is necessary',
      visaDuration: '8 months',
      contractDuration: '1-year employment contract',
      contractPrice: '60,000 DH',
      additionalInfo: 'Housing, medical care, renewable for 5 years, and citizenship assistance.',
      international: 'International',
      latitude: 41.8719,
      longitude: 12.5674,
      icon:iconitaly ,
      label:'Italy' ,
    },
    {
      id: 5,
      imageUrl:spain ,
      country: 'Spain',
      sector: 'Health and Nursing / Hotels / Agriculture',
      language: 'Language B1 is necessary',
      visaDuration: '8 months',
      contractDuration: '1-year employment contract',
      contractPrice: '60,000 DH',
      additionalInfo: 'Housing, medical care, renewable for 5 years, and citizenship assistance.',
      international: 'International',
      latitude: 40.4637,
      longitude: -3.7492,
      icon:iconspain ,
      label:'Spain' ,
    },
    // Add more contracts as needed
  ]
};

export const questionSectionContent = {
  title: 'Questions & Answers',
  description: 'Explore the common questions and answers about Celebration',
  questions: [
    {
      question: 'Contract length?',
      answer: 'The contract is for one year and renewable for up to five, ensuring long-term stability and growth.',
    },
    {
      question: 'Is accommodation provided?',
      answer: 'Accommodation and medical care are provided to ensure your comfort and health.',
    },
    {
      question: 'Is the service available in all cities or only in Agadir and Casablanca?',
      answer: 'Yes, we handle requests for all cities, not just Casablanca, ensuring that our services are accessible no matter where you are.',
    },
    {
      question: 'Has anyone used your service before?',
      answer: 'Yes, many individuals have successfully utilized our services and found meaningful employment opportunities in Europe.',
    },
  ],
  footer: {
    text: 'Didn’t find the answer you are looking for?',
    linkText: 'Contact our support',
  },
};

export const stepsSectionContent = {
  heading: 'How It Works',
  title: 'Stages of providing an offshore contract to our clients',
  description: 'Get your contract with the best companies in Europe in just 4 easy steps',
  steps: [
    {
      icon: MdOutlineConnectWithoutContact,
      title: 'Contact us',
      description: 'You can contact us via WhatsApp, email or phone to get all the necessary information.',
    },
    {
      icon: GrDocumentUser,
      title: 'Place the file with the documents',
      description: 'Receive the file with the necessary documents and fill out the form with all the required information and then place it in the agency.',
    },
    {
      icon: FaPassport,
      title: 'Contract and visa',
      description: 'After providing the contract, signing it and handing over the dues, a visa application is placed in Rabat.',
    },
    {
      icon: FaPlaneDeparture,
      title: 'Travel',
      description: 'After obtaining the visa, the outstanding dues are delivered and the travel is done after 3 days, and after arrival you start working the next day.',
    },
  ],
};

export const heroSectionContent = {
  title: 'Get a work contract in Europe as soon as possible',
  description: 'Welcome to OceanConnecting! We\'re here to help you find fulfilling job opportunities in Europe, providing job contracts and handling all necessary documents for a smooth transition. Let us guide you to meaningful employment across the continent.',
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
  joinText1: 'Join with ',
  joinText2: '600+ Workers abroad ',
  joinText3: ' and start realizing your dreams and desires with OceanConnecting',
  buttons: [
    {
      text: 'Contact US',
      link: '/contract',
      className: 'inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-red-600 border rounded-xl font-pj hover:bg-gray-600 hover:to-red-500 transform hover:scale-105',
    },
    {
      text: 'Download Form',
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
  