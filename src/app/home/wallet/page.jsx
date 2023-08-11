'use client'
import WalletComponent from '@/components/Wallet/WalletComponent';
import { getAllTransactions } from '@/redux/actions/transactionsActions';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import { getCategoriesAction, getMethodsAction } from '@/redux/actions/otherInfoActions';

export default function Wallet() {
    const dispatch = useDispatch()
    const [cookies, setCookie] = useCookies();
    useEffect(() => {
        if(cookies.token){
            dispatch(getAllTransactions(cookies.token));
            dispatch(getMethodsAction(cookies.token));
            dispatch(getCategoriesAction(cookies.token));
        }
    },[])
    return (
        <div>
            <WalletComponent/>
        </div>
    )
};