import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { motion } from 'framer-motion';
import { BiStar } from "react-icons/bi";
import TextAreaModal from "./RateApp/Sobcomponents/TextAreaModal";
import RateStars from "./RateApp/Sobcomponents/RateStars";
import RateAppDescription from "./RateApp/Sobcomponents/RateAppDescription";
import { useSelector } from "react-redux";

export default function RateApp() {
  const selectedLanguage = useSelector((state) => state.language);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const linkVariants = {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    hover: { scale: 1.1, },
  };

  return (
    <>
      <div className='hover:bg-pink-50 py-4 px-6 rounded-sm'>
        <motion.div
          className=' flex items-center justify-start font-semibold cursor-pointer dark:text-white dark:hover:text-regularPink text-boldGray hover:text-regularPink'
          variants={linkVariants}
          initial='initial'
          animate='animate'
          whileHover='hover'
        >
          <motion.span className='mr-2'>
            <BiStar className='text-2xl xl:text-3xl' />
          </motion.span>
          <motion.p className='font-semibold cursor-pointer text-base xl:text-lg' onClick={onOpen}>
          {selectedLanguage === "en" ? "Rate App" : "Calificar App"}
          </motion.p>
        </motion.div>
      </div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-xl">Give us feedback on the app</ModalHeader>
              <ModalBody>

                <RateAppDescription />
                <RateStars />
                <TextAreaModal />

              </ModalBody>
              <ModalFooter>
                <Button className="text-regularPink bg-transparent" onClick={onClose}>
                  Close
                </Button>
                <Button
                  className="bg-gradient-to-r from-pink-400 to-pink-600 text-white py-2 rounded-md hover:from-pink-500 hover:to-pink-700 transition-all duration-300"
                  onPress={onClose}>
                  Send
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
