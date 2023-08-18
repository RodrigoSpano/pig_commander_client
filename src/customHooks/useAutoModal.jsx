'use client';
import React, { useEffect, useState } from "react";
import { deleteAutomatedTransaction, getAllAutomateTransactions } from "@/utils/helper/automateTransactions";
import { useCookies } from "react-cookie";
import { useDisclosure } from "@nextui-org/react";
import Swal from "sweetalert2"; 


export default function useAutoModal() {


    const {isOpen, onOpen, onOpenChange} = useDisclosure(); 
    const [cookies] = useCookies();
    const [transactions, setTransactions] = useState([]);
    const [size, setSize] = React.useState('xs')


    useEffect(() => {
        if (isOpen, cookies.token) {
            const getTransactions = async () => {
                const data = await getAllAutomateTransactions(cookies.token);
                setTransactions(data);
            }
            getTransactions();
        }
    }, [isOpen, cookies.token])


    const handleDelete = async (name) => {
        Swal.fire({
            icon: 'warning',
            text: 'Are you sure delete this?',
            showConfirmButton: true,
            showCancelButton:true,
            confirmButtonColor: "#30C964",
            cancelButtonColor: "#ed8278"
        }).then(async ({ isConfirmed }) => {
            if (isConfirmed) {
                await deleteAutomatedTransaction(name, cookies.token);
            }
            onOpenChange();
            if(isConfirmed)
            Swal.fire({
                icon: 'success',
                text: 'Delete successfully',
                showConfirmButton: true,
                confirmButtonColor: "#ED4998"
            })
        });
        

    }

    return {
        isOpen,
        onOpen,
        onOpenChange,
        transactions,
        setTransactions,
        size,
        setSize,
        handleDelete,
    }
    }
