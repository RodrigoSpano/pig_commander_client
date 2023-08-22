import { motion } from "framer-motion";

const RateAppDescriptionEs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md text-center"
    >
      <h2 className="text-xl font-semibold mb-2 text-gray-800">
        Gracias por usar nuestra app!
      </h2>

      <h3 className="text-md mb-4 text-gray-600">
      Nos gustaría saber cómo podemos mejorar. Por favor, tómate un momento para contarnos qué opinas sobre la aplicación. Puedes calificarla del 1 al 5 y escribir una breve descripción de tu experiencia.
      </h3>

      <h4 className="text-sm text-gray-500">
        Tu opinión nos ayuda a mejorar la aplicación para todos los usuarios.
        ¡Gracias!
      </h4>
    </motion.div>
  );
};

export default RateAppDescriptionEs;
