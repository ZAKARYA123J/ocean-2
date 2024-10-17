// ServicesSection.js
import React,{useState,useEffect} from 'react';
import { FaStethoscope, FaSyringe, FaBandAid, FaBaby, FaProcedures, FaHeartbeat, FaPrescriptionBottle, FaTint } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
const loadClientData = (lang) => {
  switch (lang) {
    case 'fr':
      return import('./locales/fr/translation').then(module => module.ServicesSectionFR);
    case 'ar':
      return import('./locales/ar/translation').then(module => module.ServicesSectionAR);
    case 'en':
    default:
      return import('./locales/en/translation').then(module => module.ServicesSectionEN);
  }
};

const ServicesSection = () => {
  const [serviceData, setServiceData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await loadClientData(i18n.language);
        setServiceData(data);
      } catch (error) {
        console.error("Error fetching service data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [i18n.language]);
  if (loading) {
    return <p>Loading services...</p>;
  }
  return (
    <section className="py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {serviceData.map((item,key)=>(
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl" key={key}>
        <h2 className="text-4xl font-bold text-blue-800 dark:text-blue-400 mb-12 text-center animate-fade-in">
        {t(item.title)}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="group flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[rgb(54,172,255)] transform hover:-translate-y-2 transition-transform duration-300">
            <FaProcedures className="text-[rgb(54,172,255)] text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold text-[rgb(54,172,255)] mb-2">{t(item.Patient)}</h3>
            <p className="text-center text-gray-700 dark:text-gray-300">
            {t(item.descp)}
            </p>
          </div>
          {/* Service 2 */}
          <div className="group flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[rgb(54,172,255)] transform hover:-translate-y-2 transition-transform duration-300">
            <FaBandAid className="text-[rgb(54,172,255)] text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold text-[rgb(54,172,255)] mb-2">{t(item.Dressing)}</h3>
            <p className="text-center text-gray-700 dark:text-gray-300">
            {t(item.descd)}
            </p>
          </div>
          {/* Service 3 */}
          <div className="group flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[rgb(54,172,255)] transform hover:-translate-y-2 transition-transform duration-300">
            <FaSyringe className="text-[rgb(54,172,255)] text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold text-[rgb(54,172,255)] mb-2">{t(item.Injections)}</h3>
            <p className="text-center text-gray-700 dark:text-gray-300">
            {t(item.desci)}
            </p>
          </div>
          {/* Service 4 */}
          <div className="group flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[rgb(54,172,255)] transform hover:-translate-y-2 transition-transform duration-300">
            <FaPrescriptionBottle className="text-[rgb(54,172,255)] text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold text-[rgb(54,172,255)] mb-2">{t(item.Medical)}</h3>
            <p className="text-center text-gray-700 dark:text-gray-300">
            {t(item.decsm)}
            </p>
          </div>
          {/* Service 5 */}
          <div className="group flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[rgb(54,172,255)] transform hover:-translate-y-2 transition-transform duration-300">
            <FaBaby className="text-[rgb(54,172,255)] text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold text-[rgb(54,172,255)] mb-2">{t(item.Umbilical)}</h3>
            <p className="text-center text-gray-700 dark:text-gray-300">
            {t(item.descu)}
            </p>
          </div>
          {/* Service 6 */}
          <div className="group flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[rgb(54,172,255)] transform hover:-translate-y-2 transition-transform duration-300">
            <FaHeartbeat className="text-[rgb(54,172,255)] text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold text-[rgb(54,172,255)] mb-2">{t(item.Postpartum)}</h3>
            <p className="text-center text-gray-700 dark:text-gray-300">
            {t(item.decccp)}
            </p>
          </div>
          {/* Service 7 */}
          <div className="group flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[rgb(54,172,255)] transform hover:-translate-y-2 transition-transform duration-300">
            <FaTint className="text-[rgb(54,172,255)] text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold text-[rgb(54,172,255)] mb-2">{t(item.IV)}</h3>
            <p className="text-center text-gray-700 dark:text-gray-300">
            {t(item.descI)}
            </p>
          </div>
          {/* Service 8 */}
          <div className="group flex flex-col items-center bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[rgb(54,172,255)] transform hover:-translate-y-2 transition-transform duration-300">
            <FaStethoscope className="text-[rgb(54,172,255)] text-4xl mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-semibold text-[rgb(54,172,255)] mb-2">{t(item.Blood)}</h3>
            <p className="text-center text-gray-700 dark:text-gray-300">
            {t(item.decsB)}
            </p>
          </div>
        </div>
      </div> ))}
    </section>
  );
};

export default ServicesSection;
