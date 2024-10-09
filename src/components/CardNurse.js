import React, { useState ,useEffect} from 'react';
import { FaCheckCircle, FaUserShield, FaHandHoldingHeart, FaSmileBeam } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const loadClientData = async (lang) => {
  try {
    switch (lang) {
      case 'fr':
        return (await import('./locales/fr/translation')).CardFr;
      case 'ar':
        return (await import('./locales/ar/translation')).CardAr;
      case 'en':
      default:
        return (await import('./locales/en/translation')).CardEn;
    }
  } catch (error) {
    console.error(`Failed to load client data for language ${lang}`, error);
    return [];
  }
};
const CardNurse = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '' });
  const [cardnurse, setCardnurse] = useState([]);
  const [loading, setLoading] = useState(true);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await loadClientData(i18n.language);
        setCardnurse(data);
      } catch (error) {
        console.error("Error fetching service data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [i18n.language]);
  const fetchDetails = (service) => {
    const details = {
      'Patient Comfort': {
        title: 'Patient Comfort',
        description:
          'We prioritize patient comfort by providing personalized care plans that include comfortable settings, gentle handling, and continuous emotional support.',
      },
      'Caregiver Support': {
        title: 'Caregiver Support',
        description:
          'Our services extend to supporting family caregivers with guidance, education, and respite care, helping them manage the emotional and physical demands of caregiving.',
      },
      'Safety and Security': {
        title: 'Safety and Security',
        description:
          'We ensure a safe environment for patients by implementing rigorous safety protocols, continuous monitoring, and the use of advanced medical equipment.',
      },
    };

    setModalContent(details[service]);
    setModalOpen(true);
  };
  if (loading) {
    return <p>Loading services...</p>;
  }
  const closeModal = () => setModalOpen(false);

  return (
    <section className="md-14 bg-white dark:bg-gray-900 relative overflow-hidden">
      
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl text-center">
      
      {cardnurse.map((item,key) => (
  <div key={key}>
    <h2 className="text-4xl font-bold text-blue-800 dark:text-white mb-12 animate-fade-in">
      {t(item.title)}
    </h2>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      
      {/* Carte du confort des patients */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl">
        <div
          className="text-white p-8 flex items-center justify-center service-header transition-colors duration-300"
          style={{ backgroundColor: 'rgb(54, 172, 255)', height: '120px' }}
        >
          <FaSmileBeam className="text-5xl animate-bounce" aria-hidden="true" />
          <h3 className="ml-4 text-xl font-semibold uppercase text-white">
          {t(item.Comfort)}
          </h3>
        </div>
        <div className="p-6 text-center bg-white transition-colors duration-300 hover:bg-blue-50">
          <p className="text-gray-800 mb-4 leading-relaxed transition-opacity duration-300 hover:opacity-80">
          {t(item.textCom)}
          </p>
          <button
  className="px-4 py-2 rounded uppercase border-2 transition-transform duration-300 text-white hover:scale-105 text-left"
  style={{
    backgroundColor: 'rgb(54, 172, 255)',
    borderColor: 'rgb(54, 172, 255)',
  }}
  onClick={() => fetchDetails('Patient Comfort')} >
  {t(item.detail)}
</button>
        </div>
      </div>

      {/* Carte du soutien aux aidants */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl">
        <div
          className="text-white p-8 flex items-center justify-center service-header transition-colors duration-300"
          style={{ backgroundColor: 'rgb(54, 172, 255)', height: '120px' }}
        >
          <FaHandHoldingHeart className="text-5xl animate-bounce" aria-hidden="true" />
          <h3 className="ml-4 text-xl font-semibold uppercase text-white">
          {t(item.Caregiver)}
          </h3>
        </div>
        <div className="p-6 text-center bg-white transition-colors duration-300 hover:bg-blue-50">
          <p className="text-gray-800 mb-4 leading-relaxed transition-opacity duration-300 hover:opacity-80">
          {t(item.textCare)}
          </p>
          <button
  className="px-4 py-2 rounded uppercase border-2 transition-transform duration-300 text-white hover:scale-105 text-left"
  style={{
    backgroundColor: 'rgb(54, 172, 255)',
    borderColor: 'rgb(54, 172, 255)',
  }}
  onClick={() => fetchDetails('Caregiver Support')}
>
  {t(item.detail)}
</button>
        </div>
      </div>
      {/* Carte de sécurité et sûreté */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl">
        <div
          className="text-white p-8 flex items-center justify-center service-header transition-colors duration-300"
          style={{ backgroundColor: 'rgb(54, 172, 255)', height: '120px' }}
        >
          <FaUserShield className="text-5xl animate-bounce" aria-hidden="true" />
          <h3 className="ml-4 text-xl font-semibold uppercase text-white">{t(item.Safety)}</h3>
        </div>
        <div className="p-6 text-center bg-white transition-colors duration-300 hover:bg-blue-50">
          <p className="text-gray-800 mb-4 leading-relaxed transition-opacity duration-300 hover:opacity-80">
          {t(item.textsafe)}
          </p>
          <button
  className="px-4 py-2 rounded uppercase border-2 transition-transform duration-300 text-white hover:scale-105 text-left"
  style={{
    backgroundColor: 'rgb(54, 172, 255)',
    borderColor: 'rgb(54, 172, 255)',
  }}
  onClick={() => fetchDetails('Safety and Security')}
>
  {t(item.detail)}
</button>

        </div>
      </div>
    </div>
  </div>
))}
</div>

      {/* Wave Animation */}
      <div className="wave-container">
        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 250"
        >
          <path
            className="wave-path wave-path1"
            fill="#36acff"
            fillOpacity="1"
            d="M0,160L30,170.7C60,181,120,203,180,197.3C240,192,300,160,360,138.7C420,117,480,107,540,106.7C600,107,660,117,720,138.7C780,160,840,192,900,197.3C960,203,1020,181,1080,149.3C1140,117,1200,75,1260,53.3C1320,32,1380,32,1410,32L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
          <path
            className="wave-path wave-path2"
            fill="#45b0ff"
            fillOpacity="0.7"
            d="M0,224L30,208C60,192,120,160,180,165.3C240,171,300,213,360,208C420,203,480,149,540,144C600,139,660,181,720,186.7C780,192,840,160,900,149.3C960,139,1020,149,1080,170.7C1140,192,1200,224,1260,229.3C1320,235,1380,213,1410,202.7L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
          <path
            className="wave-path wave-path3"
            fill="#5bc0ff"
            fillOpacity="0.5"
            d="M0,288L30,282.7C60,277,120,267,180,240C240,213,300,171,360,138.7C420,107,480,85,540,96C600,107,660,149,720,149.3C780,149,840,107,900,122.7C960,139,1020,213,1080,213.3C1140,213,1200,139,1260,112C1320,85,1380,107,1410,117.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
          <path
            className="wave-path wave-path4"
            fill="#6cd0ff"
            fillOpacity="0.3"
            d="M0,256L30,218.7C60,181,120,107,180,90.7C240,75,300,117,360,122.7C420,128,480,96,540,106.7C600,117,660,171,720,181.3C780,192,840,160,900,149.3C960,139,1020,149,1080,170.7C1140,192,1200,224,1260,229.3C1320,235,1380,213,1410,202.7L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-700 ease-in-out">
          <div className="bg-white rounded-lg shadow-2xl p-8 w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 relative transform transition-all duration-1000 ease-out scale-90 modal-enter">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={closeModal}
              aria-label="Close Modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex items-center mb-6">
              <div className="flex-shrink-0">
                <FaCheckCircle className="text-4xl text-blue-600 animate-pulse" />
              </div>
              <h3 className="ml-4 text-3xl font-bold text-blue-800">{modalContent.title}</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">{modalContent.description}</p>
            <div className="mt-6 flex justify-end">
              <button
                className="px-6 py-2 rounded-lg uppercase border-2 transition-transform duration-300 bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CardNurse;
