import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import profileImage from '../assets/images/done/profile-svgrepo-com.svg';
import Team from '../assets/images/job/facade.png';
import { FaUsers, FaShieldAlt } from 'react-icons/fa'; 
import { IoMdRocket } from 'react-icons/io';  
import { MdCleaningServices } from 'react-icons/md';  
import Navbar from './navbar';
import Footer from './foooter';
import Modal from './Modal';
import LogoServesGlass from './LogoServesGlass';
import projectAlphaLogo from '../assets/images/done/glass4.png';
import projectBetaLogo1 from '../assets/images/team/glass.jpg';
import projectBetaLogo2 from '../assets/images/done/glass5.png';

// Translation resources
const resources = {
  en: {
    translation: {
      title: "Window Cleaning",
      description: "operates in Agadir, offering a variety of cleaning services. Choose us for our reputation of excellence.",
      why_choose_us: "Why Choose Our Cleaning Company?",
      assurance_quality: "QUALITY ASSURANCE",
      reliable_teams: "RELIABLE TEAMS",
      sustainable_products: "SUSTAINABLE CLEANING PRODUCTS",
      quick_service: "QUICK SERVICE",
      assurance_quality_desc: "Our commitment to excellence ensures top-notch service, guaranteeing your satisfaction and peace of mind.",
      reliable_teams_desc: "Our reliable teams understand your unique cleaning service requirements, ensuring a tailored approach to meet your needs.",
      sustainable_products_desc: "Our cleaning products are effective and eco-friendly, ensuring deep cleaning while respecting the environment.",
      quick_service_desc: "We respond promptly to your service requests, ensuring efficient and timely intervention for all your cleaning needs.",
      professional_cleaning: "PROFESSIONAL CLEANING",
      professional_cleaning_desc1: "We specialize in solar panel cleaning to ensure optimal performance of your installations. By effectively removing dirt, dust, and residues, we help maximize the energy efficiency of your equipment. Regular maintenance of your solar panels promotes increased energy yield, resulting in higher energy production and substantial savings on your electricity bill.",
      professional_cleaning_desc2: "We eliminate stubborn dirt with high-pressure cleaning, treat stains and specific deposits, provide deep disinfection through nebulization, and treat walls with water-repellent and antifungal products.",
      specific_equipment: "OUR SPECIFIC EQUIPMENT FOR EFFECTIVE AND APPROPRIATE CLEANING",
      specific_equipment_desc: "Facade cleaning is a specific service that requires suitable equipment and a high level of safety. Concerned about quality, our versatile agents intervene on all types of buildings, even in high areas.",
      faq_title: "Frequently Asked Questions",
      faq: {
        q1: "What cleaning products do you use, and are they environmentally friendly?",
        a1: "We prioritize environmentally friendly products, such as biodegradable detergents, disinfectants, abrasives, and solvents.",
        q2: "What sets your cleaning service apart from your competitors?",
        a2: "We are distinguished by our commitment to quality, the reliability of our teams, and our personalized approach to meet the specific needs of each client.",
        q3: "What types of cleaning services do you offer?",
        a3: "We offer a wide range of cleaning services, including office cleaning, large spaces, administrative buildings, and solar panels.",
        q4: "How do you handle special requests or specific cleaning instructions?",
        a4: "We closely collaborate with our clients to understand their specific needs and adapt our services accordingly.",
        q5: "Can you provide a quote or estimate for my cleaning needs?",
        a5: "Yes, we offer personalized quotes after evaluating your specific cleaning needs."
      }
    }
  },
  fr: {
    translation: {
      title: "Nettoyage de vitres",
      description: "L’entreprise opère à Agadir et propose une variété de services de nettoyage. Choisissez-nous en raison de notre réputation d’excellence.",
      why_choose_us: "Pourquoi Choisir Notre Société de Nettoyage?",
      assurance_quality: "ASSURANCE QUALITÉ",
      reliable_teams: "DES ÉQUIPES FIABLES",
      sustainable_products: "PRODUITS DE NETTOYAGE DURABLES",
      quick_service: "SERVICE RAPIDE",
      assurance_quality_desc: "Notre engagement envers l’excellence garantit un service de premier ordre, assurant votre satisfaction et votre tranquillité d’esprit.",
      reliable_teams_desc: "Nos équipes fiables comprennent vos exigences uniques en matière de services de nettoyage, garantissant une approche sur mesure pour répondre à vos besoins.",
      sustainable_products_desc: "Nos produits de nettoyage sont efficaces et écologiques, garantissant un nettoyage en profondeur tout en respectant l’environnement.",
      quick_service_desc: "Nous répondons rapidement à vos demandes de service, garantissant une intervention efficace et ponctuelle pour tous vos besoins de nettoyage.",
      professional_cleaning: "NETTOYAGE PROFESSIONNEL",
      professional_cleaning_desc1: "Nous nous spécialisons dans le nettoyage de panneaux solaires pour garantir une performance optimale de vos installations. En éliminant efficacement la saleté, la poussière et les résidus, nous contribuons à maximiser l'efficacité énergétique de vos équipements. Un entretien régulier de vos panneaux solaires favorise une augmentation du rendement énergétique, se traduisant par une production d’énergie accrue et des économies substantielles sur votre facture d’électricité.",
      professional_cleaning_desc2: "Nous éliminons les saletés tenaces avec un nettoyage à haute pression, traitons contre les taches et les dépôts spécifiques, réalisons une désinfection en profondeur grâce à la nébulisation, et traitons les murs avec des produits hydrofuges et antifongiques.",
      specific_equipment: "NOS ÉQUIPEMENTS SPÉCIFIQUES POUR UN NETTOYAGE EFFICACE ET APPROPRIÉ",
      specific_equipment_desc: "Le nettoyage de façade est une prestation spécifique qui nécessite des équipements adaptés et un haut niveau de sécurité. Soucieux de la qualité, nos agents polyvalents interviennent sur tous les types de bâtiments, y compris les zones en hauteur.",
      faq_title: "QUESTIONS FRÉQUEMMENT POSÉES",
      faq: {
        q1: "Quels produits de nettoyage utilisez-vous, et sont-ils respectueux de l’environnement ?",
        a1: "Nous privilégions des produits respectueux de l’environnement, tels que des détergents biodégradables, des désinfectants, des abrasifs et des solvants.",
        q2: "Qu’est-ce qui distingue votre service de nettoyage de celui de vos concurrents ?",
        a2: "Nous nous distinguons par notre engagement envers la qualité, la fiabilité de nos équipes et notre approche personnalisée.",
        q3: "Quels types de services de nettoyage offrez-vous ?",
        a3: "Nous offrons une large gamme de services, y compris le nettoyage de bureaux, de grandes surfaces, et des panneaux solaires.",
        q4: "Comment gérez-vous les demandes spéciales ou les instructions de nettoyage spécifiques ?",
        a4: "Nous collaborons étroitement avec nos clients pour comprendre leurs besoins spécifiques.",
        q5: "Pouvez-vous fournir un devis pour mes besoins en nettoyage ?",
        a5: "Oui, nous proposons des devis personnalisés après avoir évalué vos besoins."
      }
    }
  },
  ar: {
    translation: {
      title: "تنظيف النوافذ",
      description: "تعمل شركة  في أغادير وتقدم مجموعة متنوعة من خدمات التنظيف. اخترنا بفضل سمعتنا في التميز.",
      why_choose_us: "لماذا تختار شركتنا للتنظيف؟",
      assurance_quality: "ضمان الجودة",
      reliable_teams: "فرق موثوقة",
      sustainable_products: "منتجات تنظيف مستدامة",
      quick_service: "خدمة سريعة",
      assurance_quality_desc: "يضمن التزامنا بالتميز خدمة من الدرجة الأولى، مما يضمن رضاك وراحة بالك.",
      reliable_teams_desc: "فرقنا الموثوقة تفهم متطلباتك الفريدة في خدمات التنظيف، مما يضمن نهجًا مخصصًا لتلبية احتياجاتك.",
      sustainable_products_desc: "منتجات التنظيف الخاصة بنا فعالة وصديقة للبيئة، مما يضمن تنظيفًا عميقًا مع احترام البيئة.",
      quick_service_desc: "نستجيب بسرعة لطلبات الخدمة الخاصة بك، مما يضمن تدخلًا فعالًا وفي الوقت المناسب لجميع احتياجات التنظيف الخاصة بك.",
      professional_cleaning: "تنظيف احترافي",
      professional_cleaning_desc1: "نحن متخصصون في تنظيف الألواح الشمسية لضمان الأداء الأمثل لمنشآتك. من خلال إزالة الأوساخ والغبار والرواسب بشكل فعال، نساعد في زيادة كفاءة الطاقة لمعداتك. يعزز الصيانة الدورية لألواحك الشمسية زيادة في إنتاجية الطاقة، مما يؤدي إلى زيادة إنتاج الطاقة وتوفير كبير في فاتورة الكهرباء الخاصة بك.",
      professional_cleaning_desc2: ",نقوم بإزالة الأوساخ العنيدة باستخدام تنظيف عالي الضغط, ومعالجة البقع والرواسب المحددة, وتنفيذ تعقيم عميق من خلال التبخير, ومعالجة الجدران بمنتجات مقاومة للماء ومضادة للفطريات.",
      specific_equipment: "معداتنا الخاصة لتنظيف فعال ومناسب",
      specific_equipment_desc: "يعد تنظيف الواجهات خدمة محددة تتطلب معدات مناسبة ومستوى عالٍ من الأمان. نظرًا لاهتمامنا بالجودة، يتدخل وكلاؤنا المتعددين في جميع أنواع المباني، حتى في المناطق المرتفعة.",
      faq_title: "الأسئلة الشائعة",
      faq: {
        q1: "ما هي المنتجات التي تستخدمونها للتنظيف، وهل هي صديقة للبيئة؟",
        a1: "نحن نستخدم منتجات صديقة للبيئة مثل المنظفات القابلة للتحلل، المطهرات، الكاشطات، والمذيبات.",
        q2: "ما الذي يميز خدمات التنظيف التي تقدمونها عن منافسيكم؟",
        a2: "نتميز بالتزامنا بالجودة، وفرقنا الموثوقة، ونهجنا الشخصي لتلبية الاحتياجات الخاصة لكل عميل.",
        q3: "ما هي أنواع خدمات التنظيف التي تقدمونها؟",
        a3: "نقدم مجموعة واسعة من خدمات التنظيف بما في ذلك تنظيف المكاتب، المساحات الكبيرة، المباني الإدارية، والألواح الشمسية.",
        q4: "كيف تتعاملون مع الطلبات الخاصة أو تعليمات التنظيف المحددة؟",
        a4: "نتعاون بشكل وثيق مع عملائنا لفهم احتياجاتهم الخاصة وتكييف خدماتنا وفقًا لذلك.",
        q5: "هل يمكنكم تقديم عرض أسعار أو تقدير لاحتياجاتي في التنظيف؟",
        a5: "نعم، نقدم عروض أسعار مخصصة بعد تقييم احتياجاتك الخاصة في التنظيف."
      }
    }
  }
};

// Initialize i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already escapes by default
    }
  });

const TeamGlassr = [
  { id: 1, name: 'Ahmed El Fassi', photo: profileImage },
  { id: 2, name: 'Sara Haddad', photo: profileImage },
  { id: 3, name: 'Ahmed El Fassi', photo: profileImage },
  { id: 4, name: 'Sara Haddad', photo: profileImage },
  { id: 5, name: 'Ahmed El Fassi', photo: profileImage },
  { id: 6, name: 'Sara Haddad', photo: profileImage },
];

const faqs = [
  { question: 'faq.q1', answer: 'faq.a1' },
  { question: 'faq.q2', answer: 'faq.a2' },
  { question: 'faq.q3', answer: 'faq.a3' },
  { question: 'faq.q4', answer: 'faq.a4' },
  { question: 'faq.q5', answer: 'faq.a5' }
];

const TeamGlass = () => {
  const { t, i18n } = useTranslation();
  const [selectedMember, setSelectedMember] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const openModal = (member) => setSelectedMember(member);
  const closeModal = () => setSelectedMember(null);

  const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

  return (
    
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Navbar />
      <section className="flex-grow pt-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl mt-10">
          <h1 className="text-5xl font-extrabold text-center mb-12 text-red-600 dark:text-red-500">
            {t('title')}
          </h1>
          <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-16">
            {t('description')}
          </p>

          <img
            src={Team}
            alt="Team"
            className="w-full h-80 object-cover rounded-lg mb-12 shadow-md"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {TeamGlassr.map((member) => (
              <div key={member.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <div className="flex flex-col items-center">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mb-4 border-2 border-gray-200 dark:border-gray-700"
                  />
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {member.name}
                  </h2>
                </div>
              </div>
            ))}
          </div>

         
        </div>
      </section>
      <section className="flex-grow pt-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl mt-10">
          

          {/* New Section with Larger Image and Icons */}
          <div className="my-40">
            <LogoServesGlass />
            <h2 className="text-4xl font-bold text-center mb-10">{t('why_choose_us')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 items-center">
              <div className="flex flex-col items-center text-center">
                <div className="bg-red-100 p-4 rounded-full mb-4">
                  <FaShieldAlt className="text-red-500 text-5xl" /> {/* Icon for Assurance Qualité */}
                </div>
                <h3 className="text-xl font-bold">{t('assurance_quality')}</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('assurance_quality_desc')}
                </p>
              </div>
              <div className="flex justify-center col-span-full lg:col-span-1 lg:row-span-2 order-last lg:order-none">
                {/* Center Image in the second row */}
                <img 
                  src={projectBetaLogo1} 
                  alt="Cleaning Equipment" 
                  className="w-96 h-96 object-cover rounded-full shadow-lg mt-8 lg:mt-0" 
                />
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-red-100 p-4 rounded-full mb-4">
                  <FaUsers className="text-red-500 text-5xl" /> {/* Icon for Reliable Teams */}
                </div>
                <h3 className="text-xl font-bold">{t('reliable_teams')}</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('reliable_teams_desc')}
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-red-100 p-4 rounded-full mb-4">
                  <MdCleaningServices className="text-red-500 text-5xl" /> {/* Icon for Sustainable Products */}
                </div>
                <h3 className="text-xl font-bold">{t('sustainable_products')}</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('sustainable_products_desc')}
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-red-100 p-4 rounded-full mb-4">
                  <IoMdRocket className="text-red-500 text-5xl" /> {/* Icon for Quick Service */}
                </div>
                <h3 className="text-xl font-bold">{t('quick_service')}</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {t('quick_service_desc')}
                </p>
              </div>
            </div>
          </div>

          {/* Existing Content Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">{t('professional_cleaning')}</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                {t('professional_cleaning_desc1')}
              </p>
            </div>
            <img
              src={projectBetaLogo1}
              alt="Professional Cleaning"
              className="w-full h-80 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <img
              src={projectAlphaLogo}
              alt="Cleaning Equipment"
              className="w-full h-80 object-cover rounded-lg shadow-md"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">{t('professional_cleaning')}</h2>
              <ul className="text-lg text-gray-700 dark:text-gray-300 mb-6 list-disc pl-6">
                <li>{t('professional_cleaning_desc2').split(', ')[0]}</li>
                <li>{t('professional_cleaning_desc2').split(', ')[1]}</li>
                <li>{t('professional_cleaning_desc2').split(', ')[2]}</li>
                <li>{t('professional_cleaning_desc2').split(', ')[3]}</li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">{t('specific_equipment')}</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                {t('specific_equipment_desc')}
              </p>
            </div>
            <img
              src={projectBetaLogo2}
              alt="Professional Cleaning"
              className="w-full h-80 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* FAQs and Map Section */}
          <div className="my-16">
            <h2 className="text-4xl font-bold text-center mb-10">{t('faq_title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* FAQ Section */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-300 rounded-md p-4">
                    <button
                      className="flex justify-between w-full text-left text-lg font-semibold text-black-600"
                      onClick={() => toggleFaq(index)}
                    >
                      {t(faq.question)}
                      <span>{activeFaq === index ? '−' : '+'}</span>
                    </button>
                    {activeFaq === index && (
                      <p className="mt-2 text-gray-700 dark:text-gray-300">{t(faq.answer)}</p>
                    )}
                  </div>
                ))}
              </div>
              {/* Google Map Embed */}
              <div className="flex justify-center">
                <iframe
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Ocean%20Connecting%20sarl)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      {selectedMember && <Modal member={selectedMember} onClose={closeModal} />}
    </div>
  );
};

export default TeamGlass;
