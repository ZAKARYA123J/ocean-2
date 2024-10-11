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


export const contractData = [
    {
        id: 1,
        imageUrl:croatie ,
        country: 'Croatia',
        sector: 'Construction / Blacksmithing / Joinery / Painting / Electrical mechanic / Air conditioning / Driver license D / Butcher / hotel service',
        language: 'Language not required',
        visaDuration: '5 months',
        contractDuration: '1-year employment contract',
        contractPrice: '60,000 DH',
        additionalInfo: 'The contract includes free accommodation and medical treatment.',
        international: 'International',
        latitude: 45.1,
        longitude: 15.2,
        icon:iconcroiti ,
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
        additionalInfo: 'The contract includes free accommodation, medical treatment, and language courses.',
        international: 'International',
        latitude: 51.1657,
        longitude: 10.4515,
        icon:icongermany ,
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
        additionalInfo: 'The contract includes free accommodation, transportation allowances, and medical insurance.',
        international: 'International',
        latitude: 50.8503,
        longitude: 4.3517,
        icon:iconbulgim ,
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
        additionalInfo: 'The contract includes free accommodation, meals, and access to medical care.',
        international: 'International',
        latitude: 41.8719,
        longitude: 12.5674,
        icon:iconitaly ,
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
        additionalInfo: 'The contract includes free accommodation, flight tickets, and comprehensive health coverage.',
        international: 'International',
        latitude: 40.4637,
        longitude: -3.7492,
        icon:iconspain ,
      },
    
    
  ];
  
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
  