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

const ProfileComponent = () => {
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
              <p className="text-regularPink font-bold text-xl xl: lg:h-10">
                PRO
              </p>
            ) : (
              <Button
                onPress={onOpen}
                className="bg-gradient-to-r from-pink-400 to-pink-600 text-white py-2 rounded-md hover:from-pink-500 hover:to-pink-700 transition-all duration-300"
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor
                        quam.
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
                    <Button
                      className="bg-gradient-to-r from-pink-400 to-pink-600 text-white py-2 rounded-md hover:from-pink-500 hover:to-pink-700 transition-all duration-300"
                      onClick={() => becomePremiumHandler(cookies.token)}
                    >
                      Actualizar a Premium
                    </Button>
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

export default ProfileComponent;
