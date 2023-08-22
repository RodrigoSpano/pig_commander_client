import React, { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { AiOutlineEye } from "react-icons/ai";

const UserDetailModal = ({ user }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button onPress={onOpen}>
        <AiOutlineEye />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                User Detail
              </ModalHeader>
              <ModalBody>
                <h3 className="text-xl font-semibold">
                  {user.name} {user.lastname}
                </h3>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Expenses:</h4>
                  <ul>
                    {user.expenses.map((expense, i) => (
                      <li key={i}>
                        Name: {expense.name}, Amount: ${expense.amount}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Incomes:</h4>
                  <ul>
                    {user.incomes.map((income, i) => (
                      <li key={i}>
                        Name: {income.name}, Amount: ${income.amount}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-4">
                  Acount created at {new Date(user.createdAt).toLocaleString()}
                </p>
                {user.deletedAt !== null ? (
                  <p className="mt-4">
                    Acount banned at {new Date(user.deletedAt).toLocaleString()}
                  </p>
                ) : (
                  <p className="mt-4">This account has not been banned</p>
                )}
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onClick={onClose}
                  className="bg-gradient-to-r from-regularPink to-boldPink text-white px-6 py-2 rounded-md hover:from-pink-500 hover:to-pink-700 transition-all duration-300"
                >
                  Close
                </Button>
                {/* <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default UserDetailModal;
