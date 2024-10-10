import React from 'react';

const groupOffersData = [
  {
    people: 1,
    price: '200 MAD',
    description: 'Si tu es seul, paie 200 MAD pour un cours.',
  },
  {
    people: 2,
    price: '350 MAD',
    description: 'Viens avec un ami et payez seulement 350 MAD pour vous deux.',
  },
  {
    people: 4,
    price: '600 MAD',
    description: 'En groupe de 4, payez seulement 600 MAD au total, soit 150 MAD chacun!',
  },
  {
    people: 10,
    price: '1200 MAD',
    description: 'En groupe de 10, payez 1200 MAD au total, soit 120 MAD par personne.',
  },
  {
    people: 15,
    price: '1600 MAD',
    description: 'En groupe de 15, payez seulement 1600 MAD, soit environ 106 MAD chacun!',
  },
];

const GroupOffersSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#FFD700] to-[#FF5733]"> {/* Spanish-inspired gradient */}
      <div className="container mx-auto text-center mb-12">
        <h3 className="text-sm font-semibold text-[#FF5733] mb-2 flex items-center justify-center">
          Offres de Groupe Spéciales
        </h3>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Réductions pour les Groupes</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Plus vous venez en groupe, moins vous payez! Profitez de nos tarifs avantageux en venant avec vos amis.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {groupOffersData.map((offer, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-[1.5rem] p-6 flex flex-col items-center transition-transform duration-500 ease-out hover:scale-105 transform"
          >
            <div className="text-center mb-4">
              <h3 className="text-3xl font-semibold text-gray-800">
                {offer.people} {offer.people > 1 ? 'Personnes' : 'Personne'}
              </h3>
              <p className="text-2xl font-bold text-[#FF5733] mt-2">{offer.price}</p>
            </div>
            <p className="text-gray-600 mb-6 text-center">
              {offer.description}
            </p>
            <button className="bg-[#FF5733] text-white px-6 py-3 rounded-full hover:bg-[#D04B2C] transition-colors duration-300 shadow-lg transform hover:scale-105">
              ➤ Réserver Maintenant
            </button>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes scaleUp {
          0% { transform: scale(0.7); opacity: 0; }
          80% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes scaleDown {
          from { transform: scale(1); opacity: 1; }
          to { transform: scale(0.7); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default GroupOffersSection;
