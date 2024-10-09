import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { BackgroundStars } from '../BackgroundStars';

export const Divirtamonos = () => {
  const [step, setStep] = useState(1);
  const questions = [
    {
      question: "☀✈ ¿Cómo podemos reducir la contaminación del aire?",
      options: ["🚛 Usando transporte público", "⛵ Usando un barco", "🌡 Dejar encendido el calentador"],
      answer: 0,
    },
    {
      question: "🌳 ¿Qué podemos plantar para ayudar al medio ambiente?",
      options: ["🚷 Un poste", "🌳 Un árbol", "🐯 Un peluche de tigre"],
      answer: 1,
    },
    {
      question: "💡 ¿Cómo podemos ahorrar energía en casa?",
      options: ["🏠 Apagar las luces", "⏳ Dormir todo el día", "🏰 Viajar a Marte"],
      answer: 0,
    },
  ];

  const handleAnswer = (index) => {
    if (index === questions[step - 1].answer) {
      if (step < questions.length) {
        setStep(step + 1);
      } else {
        alert('🎉 ¡Felicitaciones! Has completado el juego!');
        setStep(1);
      }
    } else {
      alert('💡 Intenta otra vez. ¡Puedes hacerlo!');
    }
  };

  return (
    <div className="min-h-screen text-white flex flex-col justify-center items-center">
    <BackgroundStars />

      <h1 className="text-4xl font-bold mb-8 animate-fadeIn">🌎 Juego Climático para Niños</h1>
      <div className="bg-gray-800 rounded-lg p-6 shadow-xl text-center max-w-lg">
        <p className="text-2xl mb-6">{questions[step - 1].question}</p>
        <div className="space-y-4">
          {questions[step - 1].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full bg-white text-black py-3 px-4 rounded-lg hover:bg-green-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              {option}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

