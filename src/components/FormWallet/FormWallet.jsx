'use client';
import React from "react";
import {FiAlertCircle} from "react-icons/fi"; 
import useFormWallet from "@/customHooks/useFormWallet";

export default function FormWallet () {

    const {
        formWallet,
        inputInvalids,
        handleChange,
        someFieldEmpty, 
        allowAmountErrorMessage,
        allowNameErrorMessage,
        focusedAmountInput,
        focusedNameInput
    } = useFormWallet();

    return (
        
        <div className="flex flex-col items-center h-3">
            <div className='bg-mediumPink w-full rounded-t-lg pb-1 text-mediumPink'>h</div>
            <h1 className="text-xl font-bold mt-5 m-2.5">Transaction Form</h1>
            <div className="flex flex-row mt-2 h">
                <div className="flex flex-col mr-2.5">
                    <p className="text-boldGray text-sm font-light">Name</p>
                    <input className="bg-lightGray  placeholder-black font-light rounded-lg text-xs p-1.5 w-40 relative focus:outline-none active:outline-none" autoComplete="off" type="text" name="name" value={formWallet.name} onChange={handleChange} onFocus={allowNameErrorMessage} placeholder="Enter name..." />
                </div>
                <div className="flex flex-col">
                    <p className="text-boldGray text-sm font-light">Amount</p>
                    <input className="bg-lightGray placeholder-black font-light rounded-lg text-xs p-1.5 w-40 relative focus:outline-none active:outline-none" autoComplete="off"  type="number" name="amount" value={formWallet.amount} onChange={handleChange} onFocus={allowAmountErrorMessage} placeholder="$" />
                </div>
            </div>
            <p className="text-red-400 relative mt-2 text-xs">{(inputInvalids && (focusedNameInput || focusedAmountInput)) ? ("These fields are required") : (<span className=""></span>)}</p>
            <div className="flex flex-row m-2.5 mt-5">
                <div className="flex flex-col mr-2.5 ">
                    <label className="text-boldGray text-sm font-light">Method:</label>
                    <select className="text-xs w-40 bg-lightGray font-light rounded-lg p-1.5" name="Method" id="selects">
                        <option value="Cash">Cash</option>
                        <option value="Transfer">Transfer</option>
                        <option value="Debit">Debit</option>
                        <option value="Credit">Credit</option>
                    </select>
                </div>
                <div className="flex flex-col ">
                    <label className="text-boldGray text-sm font-light">Categories:</label>
                    <select className="text-xs w-40 bg-lightGray font-light rounded-lg p-1.5" name="Method" id="selects">
                        <option value="Cash">Entertainment</option>
                        <option value="Transfer">Health</option>
                        <option value="Debit">Education</option>
                        <option value="Credit">Transport</option>
                        <option value="Credit">Food</option>
                    </select>
                </div>
            </div>

            <div className="flex flex-row mt-2">
              <div className="mt-5 self-center mr-1.5"><FiAlertCircle/> </div>
              <span className="text-boldGray text-sm font-light mt-5">Only premium members</span>
            </div>
            <div className="flex flex-row mt-2.5">
                <button className="text-white h-8 w-32 mr-1.5 font-bold rounded-2xl cursor-no-drop text-sm bg-regularGray">Automatized</button>
                <button className="text-white h-8 w-32 font-bold cursor-no-drop rounded-2xl text-sm bg-regularGray">AutoDate</button>
            </div>
            <div className="mt-5">
                <button className={`text-white h-10 w-32 font-bold cursor-no-drop mr-5 rounded-2xl mt-8 text-base ${someFieldEmpty ? "bg-regularGray" :  " cursor-pointer bg-gradient-to-r from-regularPink  to-boldPink"} `}  disabled={someFieldEmpty}>Add Money</button>
                <button className={`text-white h-10 w-32 font-bold cursor-no-drop rounded-2xl mt-8 text-base ${someFieldEmpty ? "bg-regularGray" :  " cursor-pointer bg-gradient-to-r from-regularPink  to-boldPink"} `}  disabled={someFieldEmpty}>Add Expense</button>
            </div>
        </div>
    )
}