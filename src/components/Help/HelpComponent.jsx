"use client";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LoaderComponent from "../Loader/LoaderComponent";

export default function HelpComponent() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const user = useSelector((state) => state.user.logged);
  const selectedLanguage = useSelector((state) => state.language);

  useEffect(() => {
    if (user) {
      setIsLoading(false);
    }
  }, [user]);

  const toggleAccordion = (id) => {
    setActiveAccordion((prevId) => (prevId === id ? null : id));
  };

  const faqData = [
    {
      question: "Is it necessary to verify my identity to use Pig Commander?",
      answer:
        "It is not necessary to verify your identity to use pigCommander since we do not use sensitive data.",
    },
    {
      question: "Can I link my bank account to the wallet?",
      answer:
        "Yes, you can link your bank account to the wallet to deposit funds or withdraw money. Just make sure to provide the correct details and verify the account before making transactions.",
    },
    {
      question: "What security measures do you have in place?",
      answer:
        "Our wallet uses high-level encryption to protect your personal and financial data. We also implement two-factor authentication (2FA) to ensure an additional layer of security on your transactions.",
    },
    {
      question: "What types of cryptocurrencies can I store in the wallet?",
      answer:
        "Our wallet supports a wide variety of popular cryptocurrencies, such as Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Ripple (XRP), and many more. You can check the complete list of available cryptocurrencies on our platform.",
    },
    {
      question: "How can I deposit funds into my wallet?",
      answer:
        "You can deposit funds into your wallet through bank transfers, credit or debit cards. You can also receive cryptocurrencies from other wallets or exchanges.",
    },
    {
      question: "Are there any fees for using the wallet?",
      answer:
        "Basic usage of the wallet is free. However, some transactions may incur network fees or exchange commissions, depending on the operation and the involved cryptocurrency.",
    },
    {
      question: "How can I protect my wallet from potential attacks or theft?",
      answer:
        "To protect your wallet, we recommend enabling two-factor authentication (2FA), using a strong password, and keeping your devices malware-free. Additionally, never share your access information with anyone.",
    },
    {
      question: "Can I recover my account if I forget my password?",
      answer:
        "Yes, you can recover your account if you forget your password. We provide recovery options, such as resetting the password via your verified email address or phone number.",
    },
    {
      question:
        "Are there limits on the transactions I can perform from my wallet?",
      answer:
        "Yes, to ensure security and comply with regulations, we set limits on daily transactions. These limits may vary based on your level of identity verification.",
    },
  ];

  const faqDataEs = [
    {
      question: "¿Es necesario verificar mi identidad para usar Pig Commander?",
      answer:
        "No es necesario verificar tu identidad para usar Pig Commander, ya que no utilizamos datos sensibles.",
    },
    {
      question: "¿Puedo vincular mi cuenta bancaria a la billetera?",
      answer:
        "Sí, puedes vincular tu cuenta bancaria a la billetera para depositar fondos o retirar dinero. Asegúrate de proporcionar los detalles correctos y verificar la cuenta antes de realizar transacciones.",
    },
    {
      question: "¿Qué medidas de seguridad tienen implementadas?",
      answer:
        "Nuestra billetera utiliza encriptación de alto nivel para proteger tus datos personales y financieros. También implementamos autenticación de dos factores (2FA) para garantizar una capa adicional de seguridad en tus transacciones.",
    },
    {
      question: "¿Qué tipos de criptomonedas puedo almacenar en la billetera?",
      answer:
        "Nuestra billetera admite una amplia variedad de criptomonedas populares, como Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Ripple (XRP) y muchas más. Puedes consultar la lista completa de criptomonedas disponibles en nuestra plataforma.",
    },
    {
      question: "¿Cómo puedo depositar fondos en mi billetera?",
      answer:
        "Puedes depositar fondos en tu billetera a través de transferencias bancarias, tarjetas de crédito o débito. También puedes recibir criptomonedas de otras billeteras o exchanges.",
    },
    {
      question: "¿Existen tarifas por usar la billetera?",
      answer:
        "El uso básico de la billetera es gratuito. Sin embargo, algunas transacciones pueden incurrir en tarifas de red o comisiones de intercambio, dependiendo de la operación y la criptomoneda involucrada.",
    },
    {
      question:
        "¿Cómo puedo proteger mi billetera de posibles ataques o robos?",
      answer:
        "Para proteger tu billetera, recomendamos habilitar la autenticación de dos factores (2FA), utilizar una contraseña sólida y mantener tus dispositivos libres de malware. Además, nunca compartas tu información de acceso con nadie.",
    },
    {
      question: "¿Puedo recuperar mi cuenta si olvido mi contraseña?",
      answer:
        "Sí, puedes recuperar tu cuenta si olvidas tu contraseña. Proporcionamos opciones de recuperación, como restablecer la contraseña a través de tu dirección de correo electrónico o número de teléfono verificado.",
    },
    {
      question:
        "¿Existen límites en las transacciones que puedo realizar desde mi billetera?",
      answer:
        "Sí, para garantizar la seguridad y cumplir con regulaciones, establecemos límites en las transacciones diarias. Estos límites pueden variar según tu nivel de verificación de identidad.",
    },
  ];

  return (
    <>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <>
          {selectedLanguage === "en" ? (
            <div className="container mx-auto mt-8">
              <h1 className="text-3xl font-bold mb-4 text-pink-400">
                Frequently Asked Questions
              </h1>
              <div className="space-y-4">
                {faqData.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 dark:bg-mediumGrayDarkMode rounded-lg shadow-md"
                  >
                    <button
                      className="w-full flex justify-between items-center focus:outline-none"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className="text-xl font-semibold">
                        {item.question}
                      </span>
                      <span className="text-gray-600 dark:text-lightGrey">
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
                        <p className="text-gray-600 dark:text-lightGrey">{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="container mx-auto mt-8">
              <h1 className="text-3xl font-bold mb-4 text-pink-400">
                Preguntas Frecuentes
              </h1>
              <div className="space-y-4">
                {faqDataEs.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-mediumGrayDarkMode p-4 rounded-lg shadow-md"
                  >
                    <button
                      className="w-full flex justify-between items-center focus:outline-none"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className="text-xl font-semibold">
                        {item.question}
                      </span>
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
          )}
        </>
      )}
    </>
  );
}
