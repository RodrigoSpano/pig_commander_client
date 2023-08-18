import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { BiStar } from "react-icons/bi";
import TextAreaModal from "./Sobcomponents/TextAreaModal";
import RateStars from "./Sobcomponents/RateStars";
import RateAppDescription from "./Sobcomponents/RateAppDescription";
import { useDispatch } from "react-redux";
import { postReview } from "@/redux/actions/reviewsAction";
import { useCookies } from "react-cookie";

export default function RateApp() {
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  const [cookies, setCookies] = useCookies();
  const dispatch = useDispatch();

  const handleReviewChange = (newRating) => {
    setRating(newRating);
  };
  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  const handleSubmit = () => {
    dispatch(postReview({ token: cookies.token, rating, content }));
  };

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.6 } },
  };

  const hoverVariants = {
    hover: { scale: 1.05 },
  };

  return (
    <>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className="hover:bg-neutral-100 py-3 pl-3 rounded-sm my-1"
      >
        <motion.div
          variants={hoverVariants}
          className="flex items-center justify-start text-boldGray font-semibold cursor-pointer hover:text-neutral-700"
        >
          <motion.div whileHover={{ rotate: 5 }} className="text-2xl">
            <BiStar />
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }} className="">
            <Button
              className="bg-transparent text-boldGray font-semibold cursor-pointer hover:text-neutral-700 p-0"
              onPress={onOpen}
            >
              Rate App
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-xl">
                Give us feedback on the app
              </ModalHeader>
              <ModalBody>
                <RateAppDescription />
                <RateStars onReviewChange={handleReviewChange} />
                <TextAreaModal onContentChange={handleContentChange} />
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
                  onClick={onClose}
                  onPress={() => handleSubmit()}
                >
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
