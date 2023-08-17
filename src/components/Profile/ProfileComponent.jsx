import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { becomePremiumHandler } from './becomePremiumHandler';
import { useCookies } from 'react-cookie';

function asdf({ user }) {
  const [cookies, setCookie] = useCookies();

  return (
    <div className="mb-4">
      {user?.premium ? (
        <p className="text-lg font-semibold text-regularPink">PRO</p>
      ) : (
        <button
          onClick={() => becomePremiumHandler(cookies.token)}
          className="bg-regularPink text-white py-2 px-6 rounded-lg"
        >
          Become Premium
        </button>
      )}
    </div>
  );
}

function ProfileComponent({ user }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [cookies, setCookie] = useCookies();

  return (
    <div>
      {user?.premium ? (
        <p className="text-lg font-semibold text-regularPink">PRO</p>
      ) : (
        <Button onPress={onOpen} className="bg-gradient-to-r from-pink-400 to-pink-600 text-white py-2 rounded-md hover:from-pink-500 hover:to-pink-700 transition-all duration-300">Become Premium</Button>
      )}

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Why become premium?</ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                  dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                  Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                  Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                  proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button className="text-regularPink bg-transparent" onClick={onClose}>
                  Close
                </Button>
                <Button className="bg-gradient-to-r from-pink-400 to-pink-600 text-white py-2 rounded-md hover:from-pink-500 hover:to-pink-700 transition-all duration-300" onClick={() => becomePremiumHandler(cookies.token)}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

module.exports = {
  asdf,
  ProfileComponent,
}