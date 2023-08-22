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
import { useDispatch, useSelector } from "react-redux";
import { filterCreatedCategory } from "@/redux/features/otherInfoSlice";
import { RiDeleteBin6Line } from "react-icons/ri";
import { motion } from "framer-motion";
import useCreateCategory from "@/customHooks/useCreateCategory";
import { useCookies } from "react-cookie";

export default function DeleteCreatedCategoryEs() {
  const [cookies] = useCookies();
  const { token } = cookies;
  const dispatch = useDispatch();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const categoriesCreated = useSelector(
    (state) => state.others.categoriesCreated
  );
  const { handleDeleteCategory } = useCreateCategory();

  return (
    <>
      <div className="flex justify-end mr-5">
        <Button
          onPress={onOpen}
          onClick={() => {
            dispatch(filterCreatedCategory());
          }}
          className="text-white h-10 w-40 font-bold rounded-2xl text-base cursor-pointer bg-gradient-to-r from-regularPink  to-boldPink"
        >
          Eliminar Categoría
        </Button>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                ¡Eliminar categoría personalizada!
              </ModalHeader>
              <ModalBody>
                <section
                  className={"flex flex-col  bg-white p-6 rounded-lg shadow-lg"}
                >
                  <div
                    className={
                      `grid  ${categoriesCreated.length ? 'grid-cols-2' : 'grid-cols-1'} overflow-y-auto max-h-[400px] min-h-[400px] gap-4 pt-2 pb-2 content-start` 
                    }
                  >
                    {categoriesCreated.length ? categoriesCreated.map((cat) => (
                      <motion.button
                        className={
                          "border-2 w-25 mr-2 ml-2 capitalize h-[30px] flex items-center gap-2 p-[5px] text-sm hover:border-[#EF233C] hover:text-[#EF233C]"
                        }
                        style={{ scrollbarWidth: 'thin', scrollbarColor: '#4A90E2 #F3F4F6' }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        key={cat.id}
                        onClick={() => {
                          handleDeleteCategory(cat.id, token);
                        }}
                      >
                        <RiDeleteBin6Line /> {cat.name}
                      </motion.button>
                    )): <div className={'h-[300px] flex items-center justify-center'}><h2 className={'text-center text-xl'}>¡No hay categorías, crea una!</h2></div> }
                  </div>
                </section>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Cerrar
                </Button>
                <Button
                  className={`text-white h-10  font-bold rounded-2xl text-base cursor-pointer bg-gradient-to-r from-regularPink  to-boldPink`}
                  onPress={onClose}
                >
                  Hecho
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
