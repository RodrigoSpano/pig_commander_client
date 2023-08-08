import React from "react";
import {FiAlertCircle} from "react-icons/fi"; 

export default function FormWallet () {
    return (
        <div className="flex flex-col items-center h-3">
            <h1 className="text-xl font-bold mt-5 m-2.5">Transaction Form</h1>
            <div className="flex flex-row mt-2">
                <div className="flex flex-col  mr-2.5">
                    <p className="text-boldGray text-sm font-light">Name</p>
                    <input className="bg-lightGray  placeholder-black font-light rounded-lg text-xs p-1.5 w-40 relative focus:outline-none active:outline-none" type="text" placeholder="Enter name..." />
                </div>
                <div className="flex flex-col">
                    <p className="text-boldGray text-sm font-light">Mount</p>
                    <input className="bg-lightGray placeholder-black font-light rounded-lg text-xs p-1.5 w-40 relative focus:outline-none active:outline-none" type="number" placeholder="$" />
                </div>
            </div>
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
                <button className="text-white h-10 w-32 font-bold cursor-pointer mr-5 rounded-2xl mt-8 text-base bg-gradient-to-r from-regularPink  to-boldPink">Add Money</button>
                <button className="text-white h-10 w-32 font-bold cursor-pointer rounded-2xl mt-8 text-base bg-gradient-to-r from-regularPink to-boldPink">Add Expense</button>
            </div>
        </div>
    )
}
