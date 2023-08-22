"use client";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { becomePremiumHandler } from "./becomePremiumHandler";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import LoaderComponent from "../Loader/LoaderComponent";

const ProfileComponentEs = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [cookies] = useCookies();
  const [isLoading, setIsLoading] = useState(true);

  const user = useSelector((state) => state.user.logged);

  useEffect(() => {
    if (user) {
      setIsLoading(false);
    }
  }, [user]);

  return (
    <>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <>
          <>
            {user?.premium ? (
              <motion.p
                className="text-regularPink font-bold text-xl xl:text-2xl"
                whileHover={{ scale: 1.05 }}
              >
                PRO
              </motion.p>
            ) : (
              <Button
                onPress={onOpen}
                className="bg-gradient-to-r from-pink-400 to-pink-600 text-white py-2 rounded-md hover:from-pink-500 hover:to-pink-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Hazte Premium
              </Button>
            )}
          </>

          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="text-lg font-semibold text-regularPink">
                    ¿Por qué ser Premium?
                  </ModalHeader>
                  <ModalBody>
                    <div className="mb-4">
                      <h2 className="text-lg font-semibold">
                        ¿Que es Pig Commander?
                      </h2>
                      <p className="text-gray-600">
                        Nuestra billetera virtual te permite llevar un
                        seguimiento minucioso de cada transacción, al mismo
                        tiempo que te proporciona una visión integral de tus
                        ahorros y ganancias. Una experiencia gratificante en
                        lugar de un ejercicio aburrido, gracias a nuestra
                        interfaz amigable y de fácil acceso.
                      </p>
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold">
                        Beneficios de ser Premium
                      </h2>
                      <ul className="list-disc list-inside text-gray-600 pl-4">
                        <li>Acceso exclusivo a caracteriísticas avanzadas</li>
                        <li>Atención al cliente prioritaria</li>
                        <li>Experiencia sin publicidad</li>
                      </ul>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      className="text-regularPink bg-transparent"
                      onClick={onClose}
                    >
                      Cerrar
                    </Button>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Button
                        className="bg-gradient-to-r from-pink-400 to-pink-600 text-white py-2 rounded-md hover:from-pink-500 hover:to-pink-700 transition-all duration-300"
                        onClick={() => becomePremiumHandler(cookies.token)}
                      >
                        Actualizar a Premium
                      </Button>
                    </motion.div>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
};

export default ProfileComponentEs;
