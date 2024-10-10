import React, { useState } from 'react';
import Confetti from 'react-confetti';

const LearnGermanEx = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [scores, setScores] = useState({ ex1: 0, ex2: 0, ex3: 0, ex4: 0, ex5: 0 });
  const [showModal, setShowModal] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [level, setLevel] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleScoreUpdate = (exercise, score) => {
    setScores((prevScores) => ({ ...prevScores, [exercise]: score }));
    if (score === 10) {
      setCorrectAnswers((prev) => prev + 1);
    }
  };

  const calculateFinalScore = () => {
    const totalScore = Object.values(scores).reduce((acc, score) => acc + score, 0);
    setFinalScore(totalScore);
    determineLevel(totalScore);
    setShowModal(true);
  };

  const determineLevel = (score) => {
    if (score <= 10) setLevel("A1");
    else if (score <= 20) setLevel("A2");
    else if (score <= 30) setLevel("B1");
    else if (score <= 40) setLevel("B2");
    else if (score <= 45) setLevel("C1");
    else setLevel("C2");
  };

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const progressPercentage = (currentStep / 8) * 100;

  // Exercices basés sur les images et niveaux de difficulté
  const exercises = [
    {
        question: "Was ist '5' auf Deutsch?",
        options: [
          "Vier",
          "Fünf",
          "Fünfzig",
          "Vierzehn"
        ],
        correctAnswer: "Fünf",
        imageUrl: "https://deutschable.com/wp-content/uploads/2024/04/five.jpg",
        niveau: "A1"
      },
    {
      question: "Was ist das?",
      options: [
        "Ein Stuhl",
        "Ein Tisch",
        "Eine Lampe",
        "Ein Fenster"
      ],
      correctAnswer: "Ein Tisch",
      imageUrl: "https://deutschable.com/wp-content/uploads/2024/01/M9L3-96.png",
      niveau: "A1"
    },
    {
      question: "Was ist gestern passiert?",
      options: [
        "Das Paket wurde geliefert.",
        "Das Paket ist geliefert.",
        "Das Paket worde geliefert.",
        "Der Briefträger wurde geliefert."
      ],
      correctAnswer: "Das Paket wurde geliefert.",
      imageUrl: "URL_TO_IMAGE_2",
      niveau: "A2"
    },
    {
      question: "Warum bist du so müde?",
      options: [
        "Weil ich Hunde liebe.",
        "Weil ich habe geschlafen lange.",
        "Weil ich nicht geschlafen habe.",
        "Weil ich die ganze Nacht gelesen habe."
      ],
      correctAnswer: "Weil ich nicht geschlafen habe.",
      imageUrl: "https://deutschable.com/wp-content/uploads/2024/01/M10L2-74.png",
      niveau: "B1"
    },
    {
      question: "Ich ____________ gerne am See.",
      options: [
        "ware",
        "würde",
        "wäre",
        "wurde"
      ],
      correctAnswer: "wäre",
      imageUrl: "https://deutschable.com/wp-content/uploads/2024/01/M6L4-16.png",
      niveau: "B1"
    },
    {
      question: "Was ist der passendste Satz?",
      options: [
        "Der Elefant ist ständig auf Begleitschaft.",
        "Der hier ist wesentlich größer als ein normaler Elefant.",
        "Das abgebildete Tier ist konstantlich beschränkt.",
        "Dementsprechend kann der Elefant die Lage unterdrücken."
      ],
      correctAnswer: "Der hier ist wesentlich größer als ein normaler Elefant.",
      imageUrl: "URL_TO_IMAGE_5",
      niveau: "B2"
    },
    {
      question: "Was ist korrekt?",
      options: [
        "Sie laste ein Buch.",
        "Sie las das Buch.",
        "Sie ist das Buch geleset.",
        "Sie leste ein Buch."
      ],
      correctAnswer: "Sie las das Buch.",
      imageUrl: "https://deutschable.com/wp-content/uploads/2024/01/M10L2-58.png",
      niveau: "C1"
    },
    {
      question: "Was bedeutet 'in die Gänge kommen'?",
      options: [
        "Zu langsam fahren.",
        "In die Sonne schauen.",
        "Endlich mit etwas anfangen.",
        "Einer kriminellen Gang beitreten."
      ],
      correctAnswer: "Endlich mit etwas anfangen.",
      imageUrl: "URL_TO_IMAGE_7",
      niveau: "C2"
    },
    {
      question: "Ich habe...",
      options: [
        "die Gewöhnlichkeiten meiner Gelegenheiten unterworfen.",
        "die Gelegenheiten meines Unterbrochenen angenommen.",
        "die Überlegenheit meiner Wettbewerber unterschätzt.",
        "die Löblichkeiten meines Unbewusstseins untergepöbelt."
      ],
      correctAnswer: "die Überlegenheit meiner Wettbewerber unterschätzt.",
      imageUrl: "URL_TO_IMAGE_8",
      niveau: "C2"
    }
  ];

  const Exercise = ({ step }) => {
    const [selectedOption, setSelectedOption] = useState("");
    const { question, options, correctAnswer, imageUrl } = exercises[step - 1];

    const handleSubmit = () => {
      if (selectedOption === correctAnswer) {
        handleScoreUpdate(`ex${step}`, 10);
      } else {
        handleScoreUpdate(`ex${step}`, 0);
      }
      nextStep();
    };

    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">{question}</h2>
        <img src={imageUrl} alt={`Exercise ${step}`} className="mb-4" />
        <div>
          {options.map((option, index) => (
            <label key={index} className="block mb-2">
              <input
                type="radio"
                name={`ex${step}`}
                value={option}
                onChange={() => setSelectedOption(option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white py-2 px-4 rounded mt-4"
        >
          Weiter
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 py-10">
      <h1 className="text-5xl font-bold mb-10 text-center text-[#65A662] animate-slideDown">
        Deutsch Sprachtest
      </h1>

      <div className="w-full max-w-4xl bg-gray-300 rounded-full h-4 mb-10 shadow-lg overflow-hidden relative">
        <div
          className="bg-gradient-to-r from-[#43cea2] to-[#185a9d] h-full rounded-full shadow-lg transition-all duration-700 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {!showModal && (
        <div className="transition-all duration-700 transform card-container">
          {currentStep <= 8 && <Exercise step={currentStep} />}
          {currentStep > 8 && calculateFinalScore()}
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={200} gravity={0.05} />
          <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full text-center transform animate-flipIn">
            <h2 className="text-4xl font-bold text-green-500 mb-6">Herzlichen Glückwunsch!</h2>
            <p className="text-lg text-gray-700 mb-4">
              Du hast den Test abgeschlossen. Du hast <strong>{correctAnswers}</strong> von 8 Fragen richtig beantwortet.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Dein Deutsch-Niveau ist <strong>{level}</strong>!
            </p>
            <button
              onClick={() => {
                const message = `Ich habe gerade den Deutschtest abgeschlossen und mein Niveau ist ${level}!`;
                window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`);
              }}
              className="bg-green-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-green-600 transform transition-transform duration-300 hover:scale-105 mt-4"
            >
              Auf WhatsApp teilen
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LearnGermanEx;
