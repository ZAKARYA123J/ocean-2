import React, { useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Modal from './Modal';
import profileImage from '../assets/images/done/profile-svgrepo-com.svg';
import Team from '../assets/images/job/facade.png';
import { FaShieldAlt, FaClock, FaUsers } from 'react-icons/fa';  // Import icons from FontAwesome
import LogoServesGlass from './LogoServesGlass';
import projectAlphaLogo from '../assets/images/done/glass4.png';
import projectBetaLogo1 from '../assets/images/done/glass2.png';
import projectBetaLogo2 from '../assets/images/done/glass5.png';

const waveStyles = `
    .wave-container {
        position: relative;
        width: 100%;
        overflow: hidden;
    }

    .wave-svg {
        position: absolute;
        bottom: -1px; /* Adjust to perfectly align the wave */
        width: 100%;
        transform: rotate(180deg); /* Flip the wave */
        height: 100px; /* Adjust height as needed */
    }

    .wave-path {
        fill: #fff; /* Color of the wave */
    }
`;

const TeamGlass = [
    { id: 1, name: 'Ahmed El Fassi', photo: profileImage },
    { id: 2, name: 'Sara Haddad', photo: profileImage },
    { id: 3, name: 'Ahmed El Fassi', photo: profileImage },
    { id: 4, name: 'Sara Haddad', photo: profileImage },
    { id: 5, name: 'Ahmed El Fassi', photo: profileImage },
    { id: 6, name: 'Sara Haddad', photo: profileImage },
];

const faqs = [
    {
        question: "Quels produits de nettoyage utilisez-vous, et sont-ils respectueux de l’environnement ?",
        answer: "En tant que société de nettoyage à Agadir, nous privilégions des produits respectueux de l’environnement, tels que des détergents, des désinfectants, des abrasifs et des solvants, etc. Nos sélections sont biodégradables et sûres pour différents environnements, garantissant un nettoyage efficace avec un impact environnemental minimal.",
    },
    {
        question: "Qu’est-ce qui distingue votre service de nettoyage de celui de vos concurrents ?",
        answer: "Nous nous distinguons par notre engagement envers la qualité, la fiabilité de nos équipes et notre approche personnalisée pour répondre aux besoins spécifiques de chaque client.",
    },
    {
        question: "Quels types de services de nettoyage offrez-vous ?",
        answer: "Nous offrons une large gamme de services de nettoyage, y compris le nettoyage de bureaux, de grandes surfaces, de bâtiments administratifs, et de panneaux solaires.",
    },
    {
        question: "Comment gérez-vous les demandes spéciales ou les instructions de nettoyage spécifiques ?",
        answer: "Nous collaborons étroitement avec nos clients pour comprendre leurs besoins spécifiques et adapter nos services pour répondre à leurs attentes.",
    },
    {
        question: "Pouvez-vous fournir un devis ou une estimation pour mes besoins en nettoyage ?",
        answer: "Oui, nous proposons des devis personnalisés après avoir évalué vos besoins spécifiques en nettoyage. N'hésitez pas à nous contacter pour plus de détails.",
    },
];

const TeamPage = () => {
    const [selectedMember, setSelectedMember] = useState(null);
    const [activeFaq, setActiveFaq] = useState(null);

    const openModal = (member) => {
        setSelectedMember(member);
    };

    const closeModal = () => {
        setSelectedMember(null);
    };

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
            <style>{waveStyles}</style> 
            <Navbar />
            <section className="flex-grow pt-24">
                <div className="container mx-auto px-4 lg:px-8 max-w-7xl mt-10 animate-fadeIn">
                    <h1 className="text-5xl font-extrabold text-center mb-12 text-red-600 dark:text-red-500 tracking-tight">
                        Nettoyage de vitres
                    </h1>
                    <img
                        src={Team}
                        alt="Team"
                        className="w-full h-80 object-cover rounded-lg mb-12 shadow-md animate-zoomIn"
                    />
                    <div className="wave-container">
                        <svg
                            className="wave-svg"
                            data-name="Layer 1"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className="wave-path"
                                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            />
                        </svg>
                    </div>
                    <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
                        Bureaux, grandes surfaces, bâtiments administratifs, copropriétés, usines… Nos Agents Polyvalents s’adaptent à toutes vos surfaces et vous font profiter de leur savoir-faire. Nous vous proposons une offre 100% sur mesure pour la propreté extérieure de vos locaux.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 animate-slideUp">
                        {TeamGlass.map((member) => (
                            <div
                                key={member.id}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
                            >
                                <div className="flex flex-col items-center">
                                    <img
                                        src={member.photo}
                                        alt={member.name}
                                        className="w-24 h-24 rounded-full mb-4 border-2 border-gray-200 dark:border-gray-700 animate-bounce"
                                    />
                                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        {member.name}
                                    </h2>
                                    <p className="text-blue-600 font-medium mt-1">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* New Section with Larger Image and Icons */}
                    <section className="my-40">
                        <LogoServesGlass />
                        <h2 className="text-4xl font-bold text-center mb-10">Pourquoi Choisir Notre Société de Nettoyage?</h2>
                        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-16 max-w-2xl mx-auto leading-relaxed">
                            L’entreprise Noble Business opère à Agadir et propose une variété de services de nettoyage.
                            Choisissez-nous en raison de notre réputation d’excellence.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 items-center">
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-red-100 p-4 rounded-full mb-4">
                                    <FaShieldAlt className="text-red-500 text-5xl" /> {/* Icon for Assurance Qualité */}
                                </div>
                                <h3 className="text-xl font-bold">ASSURANCE QUALITÉ</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Notre engagement envers l’excellence garantit un service de premier ordre, assurant votre satisfaction et votre tranquillité d’esprit.
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
                                    <FaUsers className="text-red-500 text-5xl" /> {/* Icon for Des Équipes Fiables */}
                                </div>
                                <h3 className="text-xl font-bold">DES ÉQUIPES FIABLES</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Nos équipes fiables comprennent vos exigences uniques en matière de services de nettoyage, garantissant une approche sur mesure pour répondre à vos besoins.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-red-100 p-4 rounded-full mb-4">
                                    <FaUsers className="text-red-500 text-5xl" /> {/* Icon for Des Équipes Fiables */}
                                </div>
                                <h3 className="text-xl font-bold">PRODUITS DE NETTOYAGE DURABLES</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Nos produits de nettoyage sont efficaces et écologiques, garantissant un nettoyage en profondeur tout en respectant l’environnement.
                                </p>
                            </div>
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-red-100 p-4 rounded-full mb-4">
                                    <FaUsers className="text-red-500 text-5xl" /> {/* Icon for Des Équipes Fiables */}
                                </div>
                                <h3 className="text-xl font-bold">SERVICE RAPIDE</h3>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Nous répondons rapidement à vos demandes de service, garantissant une intervention efficace et ponctuelle pour tous vos besoins de nettoyage.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Existing Content Sections */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-4">NETTOYAGE PROFESSIONNELLES</h2>
                            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                                Nous nous spécialisons dans le nettoyage de panneaux solaires pour garantir une performance optimale de vos installations. En éliminant efficacement la saleté, la poussière et les résidus, nous contribuons à maximiser l'efficacité énergétique de vos équipements.
                                Un entretien régulier de vos panneaux solaires favorise une augmentation du rendement énergétique, se traduisant par une production d’énergie accrue et des économies substantielles sur votre facture d’électricité.
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
                            <h2 className="text-3xl font-bold mb-4">NETTOYAGE PROFESSIONNELLES</h2>
                            <ul className="text-lg text-gray-700 dark:text-gray-300 mb-6 list-disc pl-6">
                                <li>Élimination des saletés tenaces avec un nettoyage à haute pression.</li>
                                <li>Traitement contre les taches et les dépôts spécifiques.</li>
                                <li>Désinfection en profondeur grâce à la nébulisation.</li>
                                <li>Traitement des murs avec des produits hydrofuges et antifongiques.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
                        <div className="flex flex-col justify-center">
                            <h2 className="text-3xl font-bold mb-4">NOS ÉQUIPEMENTS SPÉCIFIQUES POUR UN NETTOYAGE EFFICACE ET APPROPRIÉ</h2>
                            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                                Le nettoyage de façade est une prestation spécifique qui nécessite des équipements adaptés et un haut niveau de sécurité. Soucieux de la qualité, nos Agents Polyvalents interviennent sur tous les types de bâtiments, et même les zones en hauteur.
                            </p>
                        </div>
                        <img
                            src={projectBetaLogo2}
                            alt="Professional Cleaning"
                            className="w-full h-80 object-cover rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </section>
            {/* FAQ and Map Section */}
            <section className="my-16">
    <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-10">QUESTIONS FRÉQUEMMENT POSÉES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* FAQ Section */}
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border border-gray-300 rounded-md p-4">
                        <button
                            className="flex justify-between w-full text-left text-lg font-semibold text-black-600"
                            onClick={() => toggleFaq(index)}
                        >
                            {faq.question}
                            <span>{activeFaq === index ? '−' : '+'}</span>
                        </button>
                        {activeFaq === index && (
                            <p className="mt-2 text-gray-700 dark:text-gray-300">{faq.answer}</p>
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
</section>

            <Footer />
            {selectedMember && <Modal member={selectedMember} onClose={closeModal} />}
        </div>
    );
};

export default TeamPage;
