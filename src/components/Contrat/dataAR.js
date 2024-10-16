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
  title: "كيف يتم وضع الملف وما هي الوثائق المطلوبة؟",
  subtitle: "ها نحن ذا",
  content: [
    {
      text: "نقدم خدمات متخصصة في توفير عقود العمل في مختلف الدول الأوروبية، إلى جانب المساعدة في الحصول على التأشيرة والسفر. تضمن عمليتنا المبسطة تجربة خالية من المتاعب.",
    },
    {
      text: "الوثائق المطلوبة:",
      isBold: true
    },
    {
      icon: true,
      text: "يتم الحصول على السجل القضائي من المحكمة وتصحيح التوقيع في وزارة الخارجية (Apostil) وترجمته إلى اللغة الإنجليزية."
    },
    {
      icon: true,
      text: "صورة فوتوغرافية لك"
    },
    {
      icon: true,
      text: "نسخة من جواز سفرك."
    },
    {
      icon: true,
      text: "الاستمارة التي يمكن الحصول عليها بالضغط على زر التنزيل أدناه."
    },
    {
      icon: true,
      text: "فيديو وصورة لك وأنت تمارس المهنة التي تريد أن تخدم فيها 🙏🏻 أو لتسهيل الأمر عليك، يمكنك إرسال المستندات الأصلية (PDF) إلينا."
    },
  ],
  downloadText: "قم بتحميل الملف التالي",
  buttonText:"تحميل الاستمارة",
};

export const contractCardSectionContent = {
  title: 'البلدان المتاحة للبحث عن عمل في الخارج',
  description: 'ستجد فرص عمل في جميع أنحاء أوروبا. نحن في OceanConnecting، نوفر لك إمكانية الوصول إلى أسواق العمل في العديد من الدول الأوروبية وندعمك في الحصول على عقد عمل والوثائق اللازمة. انضم إلينا وابدأ حياتك المهنية في أوروبا بسلاسة وسهولة.',
  contracts: [
    {
      id: 1,
      imageUrl:croatie ,
      country: 'كرواتيا',
      sector: 'بناء/ حدادة / نجارة / صباغة / إلكتريك ميكانيك / تكييف / سائق بيرمي D / جزار / الفندقة .',
      language: 'اللغة غير ضرورية.',
      visaDuration:  '5 أشهر',
      contractDuration: 'عقد عمل لمدة سنة .',
      contractPrice: 'ثمن العقد 6 ملايين .',
      additionalInfo: 'سكن، ورعاية طبية، قابلة للتجديد لمدة 5 سنوات، ومساعدة في الحصول على الجنسية.',
      international: 'International',
      latitude: 45.1,
      longitude: 15.2,
      icon:iconcroiti ,
      label:'كرواتيا' ,
    },
    {
      id: 2,
      imageUrl:germany ,
      country: 'ألمانيا',
      sector: 'الصحة والتمريض / الفنادق / البرمجة',
      language: 'اللغة المطلوبة B1',
      visaDuration: '8 أشهر',
      contractDuration: 'عقد عمل لمدة 1 سنة',
      contractPrice: 'ثمن العقد 8 ملايين .',
      additionalInfo: 'سكن، ورعاية طبية، قابلة للتجديد لمدة 5 سنوات، ومساعدة في الحصول على الجنسية.',
      international: 'International',
      latitude: 51.1657,
      longitude: 10.4515,
      icon:icongermany ,
      label:'ألمانيا' ,
    },
    {
      id: 3,
      imageUrl:bulgim ,
      country: 'بلجيكا',
      sector: 'الصحة والتمريض / الفنادق / البرمجة',
      language: 'اللغة المطلوبة B1',
      visaDuration: '8 أشهر',
      contractDuration: 'عقد عمل لمدة 1 سنة',
      contractPrice: 'ثمن العقد 6 ملايين .',
      additionalInfo: 'سكن، ورعاية طبية، قابلة للتجديد لمدة 5 سنوات، ومساعدة في الحصول على الجنسية.',
      international: 'International',
      latitude: 50.8503,
      longitude: 4.3517,
      icon:iconbulgim ,
      label:'بلجيكا' ,
    },
    {
      id: 4,
      imageUrl:italy ,
      country: 'إيطاليا',
      sector: 'الصحة والتمريض / الفنادق / الزراعة',
      language: 'اللغة المطلوبة B1',
      visaDuration: '8 أشهر',
      contractDuration: 'عقد عمل لمدة 1 سنة',
      contractPrice: 'ثمن العقد 6 ملايين .',
      additionalInfo: 'سكن، ورعاية طبية، قابلة للتجديد لمدة 5 سنوات، ومساعدة في الحصول على الجنسية.',
      international: 'International',
      latitude: 41.8719,
      longitude: 12.5674,
      icon:iconitaly ,
      label:'إيطاليا' ,
    },
    {
      id: 5,
      imageUrl:spain ,
      country: 'إسبانيا',
      sector: 'الصحة والتمريض / الفنادق / الزراعة',
      language: 'اللغة المطلوبة B1',
      visaDuration: '8 أشهر',
      contractDuration: 'عقد عمل لمدة 1 سنة',
      contractPrice: 'ثمن العقد 6 ملايين .',
      additionalInfo: 'سكن، ورعاية طبية، قابلة للتجديد لمدة 5 سنوات، ومساعدة في الحصول على الجنسية.',
      international: 'International',
      latitude: 40.4637,
      longitude: -3.7492,
      icon:iconspain ,
      label:'إسبانيا' ,
    },
    // Add more contracts as needed
  ]
};

export const questionSectionContent = {
  title: 'أسئلة وأجوبة',
  description: 'استكشف الأسئلة والأجوبة الشائعة حول الاحتفال',
  questions: [
    {
      question: 'مدة العقد؟',
      answer: 'مدة العقد سنة واحدة قابلة للتجديد لمدة تصل إلى خمس سنوات، مما يضمن الاستقرار والنمو على المدى الطويل.',
    },
    {
      question: 'هل يتم توفير الإقامة؟',
      answer: 'يتم توفير الإقامة والرعاية الطبية لضمان راحتك وصحتك.',
    },
    {
      question: 'هل الخدمة متوفرة في جميع المدن أم في أكادير والدار البيضاء فقط؟',
      answer: 'نعم، نحن نتعامل مع طلبات جميع المدن، وليس فقط الدار البيضاء، مما يضمن لك إمكانية الوصول إلى خدماتنا أينما كنت.',
    },
    {
      question: 'هل استخدم أي شخص خدمتكم من قبل؟',
      answer: 'نعم، لقد نجح العديد من الأفراد في الاستفادة من خدماتنا ووجدوا فرص عمل مجدية في أوروبا.',
    },
  ],
  footer: {
    text: 'لم تجد الإجابة التي تبحث عنها؟',
    linkText: 'اتصل بدعمنا',
  },
};

export const stepsSectionContent = {
  heading: 'كيف تعمل',
  title: 'مراحل تقديم عقد خارجي لعملائنا في الخارج',
  description: 'احصل على عقدك مع أفضل الشركات في أوروبا في 4 خطوات سهلة',
  steps: [
    {
      icon: MdOutlineConnectWithoutContact,
      title: 'التواصل معنا',
      description: 'يمكنك التواصل معنا عبر الواتساب أو البريد الإلكتروني أو الهاتف للحصول على جميع المعلومات اللازمة.',
    },
    {
      icon: GrDocumentUser,
      title: 'وضع الملف مع الوثائق',
      description: 'إستلام الملف مع المستندات اللازمة وملأ الإستمارة بكل المعلومات المطلوبة ثم وضعها في الوكالة.',
    },
    {
      icon: FaPassport,
      title: 'العقد والفيزا',
      description: 'بعد توفير العقد والتوقيع عليه وتسليم المستحقات، يتم وضع ملف للحصول على التأشيرة في الرباط.',
    },
    {
      icon: FaPlaneDeparture,
      title: 'السفر',
      description: 'بعد حصولك على التأشيرة،يتم تسليم المستحقات المتأخرة ويتم السفر بعد 3 أيام، وبعد الوصول تبدأ العمل في اليوم التالي.',
    },
  ],
};

export const heroSectionContent = {
  title: 'احصل على عقد عمل في أوروبا في أقرب وقت ممكن',
  description: 'مرحباً بك في أوشن كونيكتينج! نحن هنا لمساعدتك في العثور على فرص عمل مُرضية في أوروبا، وتوفير عقود العمل والتعامل مع جميع المستندات اللازمة للانتقال السلس. دعنا نرشدك إلى فرص عمل مُجدية في جميع أنحاء القارة.',
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
  joinText1: 'انضم إلى ',
  joinText2: 'أكثر من 600 عامل في الخارج ',
  joinText3: ' وابدأ في تحقيق أحلامك ورغباتك مع OceanConnecting',
  buttons: [
    {
      text: 'اتصل بنا',
      link: '/contract',
      className: 'inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-blue-600 to-red-600 border rounded-xl font-pj hover:bg-gray-600 hover:to-red-500 transform hover:scale-105',
    },
    {
      text: 'تنزيل النموذج',
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
  