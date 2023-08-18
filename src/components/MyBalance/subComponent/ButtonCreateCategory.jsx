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
import useCreateCategory from "@/customHooks/useCreateCategory";

export default function ButtonCreateCategory() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { error,nameCategory,  handleValueName, handleCreateCategory} = useCreateCategory();

  return (
    <>
      <div className="flex justify-end mr-5">
        <Button
          onPress={onOpen}
          className="text-white h-10 w-40 font-bold cursor-no-drop  rounded-2xl text-base cursor-pointer bg-gradient-to-r from-regularPink  to-boldPink"
        >
          Create Category
        </Button>
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create category
              </ModalHeader>
              <ModalBody>
                <section
                  className={
                    "flex flex-col items-center bg-white p-6 rounded-lg shadow-lg text-center "
                  }
                >
                  <h2 className={"mb-4"}>
                    Create a custom category that is not in the default
                    categories!
                  </h2>

                  <p className={"font-bold"}>Name</p>
                  <input onChange={handleValueName}
                  value={nameCategory.name}
                    className={
                      "bg-lightGray  mt-2  rounded-lg p-2 text-sm font-light relative focus:outline-none active:outline-none"
                    }
                    placeholder="Enter name..."
                  />
                  <p className={`${typeof error === "object" ? "text-green-400  mt-4 text-xl" :  "text-red-400  mt-4 text-sm"}`}>{error}</p>
                </section>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Close
                </Button>
                <Button
                  className={`text-white h-10 w-20 font-bold cursor-no-drop  rounded-2xl text-base ${typeof error !== "object" ? "bg-regularGray" :  " cursor-pointer bg-gradient-to-r from-regularPink  to-boldPink"} `}
                  onPress={onClose}
                  onClick={handleCreateCategory}
                >
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
