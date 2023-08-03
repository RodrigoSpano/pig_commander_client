"use client"
import React, {useState} from "react";

export default function HelpComponent() {

    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (id) => {
      setActiveAccordion((prevId) => (prevId === id ? null : id));
    };
  
    const faqData = [
      {
        question: '¿Es necesario verificar mi identidad para usar pigCommander?',
        answer: 'No es necesario verificar tu identidad para usar pigCommander dado que no utilizamos datos sensibles',
      },
      {
        question: '¿Puedo vincular mi cuenta bancaria a la wallet?',
        answer: 'Sí, puedes vincular tu cuenta bancaria a la wallet para cargar fondos o retirar dinero. Solo asegúrate de proporcionar los detalles correctos y verificar la cuenta antes de hacer transacciones.',
      },
      {
        question: '¿Qué medidas de seguridad tienen implementadas?',
        answer: 'Nuestra wallet utiliza encriptación de alto nivel para proteger tus datos personales y financieros. También implementamos la autenticación de dos factores (2FA) para garantizar una capa adicional de seguridad en tus transacciones.',
      },
      {
        question: '¿Qué tipos de criptomonedas puedo almacenar en la wallet?',
        answer: 'Nuestra wallet admite una amplia variedad de criptomonedas populares, como Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Ripple (XRP) y muchas más. Puedes consultar la lista completa de criptomonedas disponibles en nuestra plataforma.',
      },
      {
        question: '¿Cómo puedo cargar fondos en mi wallet?',
        answer: 'Puedes cargar fondos en tu wallet mediante transferencias bancarias, tarjetas de crédito o débito. También puedes recibir criptomonedas de otras wallets o intercambios.',
      },
      {
        question: '¿Hay algún cargo por usar la wallet?',
        answer: 'El uso básico de la wallet es gratuito. Sin embargo, algunas transacciones pueden incurrir en cargos de red o comisiones de intercambio, dependiendo de la operación y la criptomoneda involucrada.',
      },
      {
        question: '¿Cómo puedo proteger mi wallet de posibles ataques o robos?',
        answer: 'Para proteger tu wallet, te recomendamos habilitar la autenticación de dos factores (2FA), utilizar una contraseña segura y mantener tus dispositivos libres de malware. Además, nunca compartas tu información de acceso con nadie.',
      },
      {
        question: '¿Puedo recuperar mi cuenta si olvido mi contraseña?',
        answer: 'Sí, puedes recuperar tu cuenta si olvidas tu contraseña. Proporcionamos opciones de recuperación, como restablecer la contraseña a través de tu dirección de correo electrónico o número de teléfono verificado.',
      },
      {
        question: '¿Hay límites en las transacciones que puedo realizar desde mi wallet?',
        answer: 'Sí, para garantizar la seguridad y cumplir con las regulaciones, establecemos límites en las transacciones diarias. Estos límites pueden variar según tu nivel de verificación de identidad.',
      }
      // Agrega más preguntas y respuestas aquí
    ];

  return (
    <div>
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4 text-pink-400">FAQ</h1>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <button
                className="w-full flex justify-between items-center focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-xl font-semibold">{item.question}</span>
                <span className="text-gray-600">
                  <svg
                    className={`w-6 h-6 transform transition-transform ${
                      activeAccordion === index ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.29289 16.2929C8.68342 15.9024 9.31658 15.9024 9.70711 16.2929L12 18.5858L14.2929 16.2929C14.6834 15.9024 15.3166 15.9024 15.7071 16.2929C16.0976 16.6834 16.0976 17.3166 15.7071 17.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L8.29289 17.7071C7.90237 17.3166 7.90237 16.6834 8.29289 16.2929Z"
                      fill="currentColor"
                    />
                    <path
                      d="M8.29289 7.70711C7.90237 7.31658 7.90237 6.68342 8.29289 6.29289C8.68342 5.90237 9.31658 5.90237 9.70711 6.29289L12 8.58579L14.2929 6.29289C14.6834 5.90237 15.3166 5.90237 15.7071 6.29289C16.0976 6.68342 16.0976 7.31658 15.7071 7.70711L12.7071 10.7071C12.3166 11.0976 11.6834 11.0976 11.2929 10.7071L8.29289 7.70711Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
              {activeAccordion === index && (
                <div className="mt-2">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
