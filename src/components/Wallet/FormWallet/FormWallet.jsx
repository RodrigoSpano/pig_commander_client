'use client';
import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import useFormWallet from "@/customHooks/useFormWallet";
import { useSelector } from "react-redux";
import { Switch } from "@nextui-org/react";
import ModalAutomatized from "./ModalAutomatized";
import { Input, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";


export default function FormWallet() {

    const categories = useSelector((state) => state.others.categories);
    const methods = useSelector((state) => state.others.methods);
    const userPremium = useSelector((state) => state.user);


    const {
        formWallet,
        inputInvalids,
        handleChange,
        someFieldEmpty,
        allowAmountErrorMessage,
        allowNameErrorMessage,
        focusedAmountInput,
        focusedNameInput,
        handleSubmitExpense,
        handleSubmitIncome,
        automatized,
        setAutomatized,
        someFieldEmptyAutomatized,
        handleAutoChange,
        automatizedForm,
        handleSubmitAutomatize
    } = useFormWallet();

    return (
        <>
            <div className="bg-mediumPink w-full rounded-t-lg pb-1 text-mediumPink">
                h
            </div>

            <div className="flex flex-col items-center p-4">

                <h1 className="text-2xl font-bold my-4 dark:text-mediumPinkDark">Transaction Form</h1>

                <div className="flex flex-row items-center">
                    <Input autoComplete="off" type="text" name="name" label="Name" size="sm" value={formWallet.name} onChange={handleChange} onFocus={allowNameErrorMessage} className="mr-2" />

                    <Input autoComplete="off" type="number" name="amount" label="Amount" size="sm" value={formWallet.amount} onChange={handleChange} onFocus={allowAmountErrorMessage} className="ml-2" />
                </div>

                <p className={`text-xs mt-2 ${inputInvalids && (focusedNameInput || focusedAmountInput) ? 'text-red-400' : 'text-transparent'}`}>
                    {inputInvalids && (focusedNameInput || focusedAmountInput) ? 'These fields are required' : ''}
                </p>


                <div className="flex flex-row sm:flex-col md:flex-row justify-center items-center">

                <div className="flex flex-col mr-2">
                    <label className="text-boldGray text-lg font-light dark:text-white">Method:</label>
                    <select className="text-md w-40 dark:text-black  bg-lightGray font-light rounded-lg p-1.5 h-12" name="method_id" id="selects" onChange={handleChange} value={formWallet.method_id}>
                      {methods.length ? methods.map((method)=> (
                        <option key={method.id} value={method.id}>{method.name}</option>
                      )) : null}
                    </select>
                </div>
                <div className="flex flex-col ml-2">
                    <label className="text-boldGray text-lg font-light dark:text-white">Categories:</label>
                    <select className="text-md capitalize w-40 dark:text-black  bg-lightGray font-light rounded-lg p-1.5 h-12" name="category_id" id="selects" value={formWallet.category_id} onChange={handleChange}>
                    {categories.length ? categories.map((category)=> (
                        <option key={category.id} value={category.id}>{category.name}</option>
                      )) : null}
                    </select>
                </div>
                </div>

                <div className="flex mt-2">
                    <div className="mt-5 self-center mr-1.5"><FiAlertCircle /> </div>
                    <span className="text-boldGray text-md font-light mt-5 dark:text-white">Automatized: Only premium members</span>
                </div>

                <div className="flex flex-row sm:flex-col md:flex-row items-center justify-center mt-5">
                    <Switch defaultSelected size="sm" color="success" isSelected={automatized} onValueChange={setAutomatized} isDisabled={!userPremium.premium} />
                    <input className='bg-lightGray dark:text-black  placeholder-black font-light rounded-lg text-xs p-1.5 w-40 relative focus:outline-none active:outline-none' type="number" placeholder="Day of the month..." name="auto_date" value={!automatizedForm.auto_date} disabled={!automatized} onChange={handleAutoChange}  />
                    <select defaultValue={'expense'} name='type' className="text-xs w-26 bg-lightGray dark:bg-white dark:text-black font-light rounded-lg p-1.5 ml-2" disabled={!automatized} onChange={handleAutoChange}>
                        <option value="expense">Expense</option>
                        <option value="income">Incomes</option>
                    </select>
                </div>

                <div className="mt-5">
                    {
                        automatized
                            ? (
                                <div className="flex flex-col">
                                    <button className={`text-white h-10 self-center w-32 font-bold cursor-no-drop mr-5 rounded-2xl mt-8 text-base ${someFieldEmptyAutomatized ? "bg-regularGray" : " cursor-pointer bg-gradient-to-r from-regularPink  to-boldPink"} `} disabled={someFieldEmptyAutomatized} onClick={handleSubmitAutomatize} >Automatize</button>
                                    <ModalAutomatized />
                                </div>
                            )
                            : (
                                <>
                                    <button className={`text-white h-10 w-32 font-bold cursor-no-drop mr-5 rounded-2xl mt-8 text-base ${someFieldEmpty ? "bg-regularGray" : " cursor-pointer bg-gradient-to-r from-regularPink  to-boldPink"} `} disabled={someFieldEmpty} onClick={handleSubmitIncome}>Add Income</button>
                                    <button className={`text-white h-10 w-32 font-bold cursor-no-drop rounded-2xl mt-8 text-base ${someFieldEmpty ? "bg-regularGray" : " cursor-pointer bg-gradient-to-r from-regularPink  to-boldPink"} `} disabled={someFieldEmpty} onClick={handleSubmitExpense}>Add Expense</button>
                                </>
                            )
                    }

                </div>
            </div>
        </>
    )
}