'use client'
import WalletComponent from '@/components/Wallet/WalletComponent';
import { getAllTransactions } from '@/redux/actions/transactionsActions';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export default function Wallet() {
    const dispatch = useDispatch()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            dispatch(getAllTransactions(token))
        }
    },[])
    return (
        <div>
            <WalletComponent/>
        </div>
    )
};