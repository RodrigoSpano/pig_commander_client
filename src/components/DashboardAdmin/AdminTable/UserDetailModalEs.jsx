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
import { AiOutlineEye } from "react-icons/ai";
import HeaderDetail from "./subComponents/HeaderDetail";
import SectionDetail from "./subComponents/SectionDetail";
import SectionDetailEs from "./subComponents/SectionDetailEs";
import HeaderDetailEs from "./subComponents/HeaderDetailEs";

const UserDetailModalEs = ({ user }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [totalIncomes, setTotalIncomes] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  const handleTotalIncomes = () => {
    const totalIncomes = user.incomes.reduce((total, income) => {
      return total + income.amount;
    }, 0);

    setTotalIncomes(totalIncomes);
  };
  const handleTotalExpenses = () => {
    const totalExpenses = user.expenses.reduce((total, expense) => {
      return total + expense.amount;
    }, 0);

    setTotalExpenses(totalExpenses);
  };

  useEffect(() => {
    handleTotalIncomes();
    handleTotalExpenses();
  }, []);
  return (
    <>
      <Button onPress={onOpen} className={"h-8 min-w-10"}>
        <AiOutlineEye />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col">Detalle del Usuario</ModalHeader>
              <ModalBody>
                <div className={'flex flex-col items-center'}>
                <h2 className="text-lg font-semibold">ID</h2>
                <p>{user.id}</p>
                </div>
                <HeaderDetailEs user={user} />
                <SectionDetailEs
                  totalIncomes={totalIncomes}
                  totalExpenses={totalExpenses}
                  user={user}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onClick={onClose}
                  className="bg-gradient-to-r from-regularPink to-boldPink text-white px-6 py-2 rounded-md hover:from-pink-500 hover:to-pink-700 transition-all duration-300"
                >
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default UserDetailModalEs;
