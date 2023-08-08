import React from 'react';
import FormWallet from "../FormWallet/FormWallet"


export default function WalletComponent () {
    return (
        <div>
            <div className="grid auto-rows-auto gap-5">
                <div className="grid grid-cols-2 gap-2.5 bg-lightGray p-2.5 h-screen">
                    <div className="border bg-white rounded-lg shadow-xl  m-2.5 col-span-1 row-span-2"></div>
                    <div  className="col-span-1 border bg-white rounded-lg shadow-xl  m-2.5">
                     <FormWallet/>
                    </div>
                    <div  className="col-span-1 border bg-white rounded-lg shadow-xl  m-2.5"></div>
                </div>
            </div>
        </div>
    )
}
