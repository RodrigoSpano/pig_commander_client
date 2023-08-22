'use client';
import React from "react";
import { ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Modal} from "@nextui-org/react";
import {BsFillTrash3Fill} from "react-icons/bs"; 
import useAutoModal from "@/customHooks/useAutoModal";

export default function ModalAutomatizedEs () {


const {
    isOpen,
    onOpen,
    onOpenChange, 
    transactions,
    size,
    handleDelete,
} = useAutoModal(); 

    return (
        <div>
            <Button className="text-white h-10 self-center font-bold w-48 mr-5 rounded-2xl mt-8 text-base cursor-pointer bg-gradient-to-r from-regularPink  to-boldPink" onPress={onOpen}>Mostrar Automatizaciones</Button>
            <Modal size={size} isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 self-center text-strongPink">Todas las Automatizaciones</ModalHeader>
                            <ModalBody>
                              
                                    {transactions.length
                                        ? transactions.map((transaction, i) => (
                                        <>
                                         
                                         <div className="flex flex-row justify-between">
                                           <p className="text-base">{(transaction)}</p>
                                            { (transaction.length - 1 < i) }
                                            <BsFillTrash3Fill className="self-center  text-lg hover:text-red-500"
                                            onClick={() => handleDelete(transaction)}/>
                                         </div>
                                         
                                         <hr/>
                                        </>
                                    )) : <p>Sin transacciones automáticas  todavía.</p>}
                             
                            </ModalBody>
                            <ModalFooter>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );

}

