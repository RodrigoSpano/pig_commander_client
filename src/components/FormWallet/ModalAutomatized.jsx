'use client';
import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { getAllAutomateTransactions } from "@/utils/helper/automateTransactions";
import { useCookies } from "react-cookie";

export default function ModalAutomatized() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [cookies] = useCookies();
    const [transactions, setTransactions] = useState([]);
    const [size, setSize] = React.useState('xs')


    useEffect(() => {
        if (isOpen, cookies.token) {
            const getTransactions = async () => {
                const data = await getAllAutomateTransactions(cookies.token);
                console.log({data})
                setTransactions(data);
            }
            getTransactions();
        }
    }, [isOpen, cookies.token])

    return (
        <>
            <Button className="text-white h-10 self-center font-bold w-48 mr-5 rounded-2xl mt-8 text-base cursor-pointer bg-gradient-to-r from-regularPink  to-boldPink" onPress={onOpen}>Show Automations</Button>
            <Modal size={size} isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 self-center text-strongPink">All Automations</ModalHeader>
                            <ModalBody>
                              
                                    {transactions.length 
                                        ? transactions.map((transaction, i) => (
                                        <>
                                         <p>{(transaction.name)}</p>
                                         { (transaction.length - 1 < i) }
                                         <hr className="mx-12"/>
                                        </>
                                    )) : <p>There is no automated transactions yet</p>}
                             
                            </ModalBody>
                            <ModalFooter>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
