"use client"
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { becomePremiumHandler } from './becomePremiumHandler';
import { useCookies } from 'react-cookie';

const ProfileComponent = ({ user }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [cookies, setCookie] = useCookies();

  return (
    <div className="">
      {user?.premium ? (
        <p className="text-regularPink font-bold text-xl xl: lg:h-10">PRO</p>
      ) : (
        <Button
          onPress={onOpen}
          className="bg-gradient-to-r from-pink-400 to-pink-600 text-white py-2 rounded-md hover:from-pink-500 hover:to-pink-700 transition-all duration-300"
        >
          Become Premium
        </Button>
      )}

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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Benefits of Being Premium</h2>
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
                <Button
                  className="bg-gradient-to-r from-pink-400 to-pink-600 text-white py-2 rounded-md hover:from-pink-500 hover:to-pink-700 transition-all duration-300"
                  onClick={() => becomePremiumHandler(cookies.token)}
                >
                  Upgrade to Premium
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProfileComponent;
