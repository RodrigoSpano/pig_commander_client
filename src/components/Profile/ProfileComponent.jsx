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
import { motion } from "framer-motion";

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
                Become Premium
              </Button>
            )}
          </>

          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="text-lg font-semibold text-regularPink">
                    Why Become Premium?
                  </ModalHeader>
                  <ModalBody>
                    <div className="mb-4">
                      <h2 className="text-lg font-semibold">
                        What is Pig Commander?
                      </h2>
                      <p className="text-gray-600">
                        Our virtual wallet enables you to keep a meticulous
                        track of each transaction, while also providing you with
                        a comprehensive view of your savings and earnings. It's
                        a rewarding experience rather than a tedious task,
                        thanks to our user-friendly and easily accessible
                        interface.
                      </p>
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold">
                        Benefits of Being Premium
                      </h2>
                      <ul className="list-disc list-inside text-gray-600 pl-4">
                        <li>Exclusive access to advanced features</li>
                        <li>Priority customer support</li>
                        <li>Ad-free experience</li>
                      </ul>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      className="text-regularPink bg-transparent"
                      onClick={onClose}
                    >
                      Close
                    </Button>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Button
                        className="bg-gradient-to-r from-pink-400 to-pink-600 text-white py-2 rounded-md hover:from-pink-500 hover:to-pink-700 transition-all duration-300"
                        onClick={() => becomePremiumHandler(cookies.token)}
                      >
                        Upgrade to Premium
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

export default ProfileComponent;
