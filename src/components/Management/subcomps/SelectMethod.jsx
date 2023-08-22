import React from 'react'

function SelectMethod({handleButtonClick}) {
  return (
    <div className="row-span-1 shadow-lg rounded-2xl bg-white ml-5 mr-5 mt-5 border-1 flex justify-start items-center pb-4 pt-4">
    <div className="flex-column pl-4 pr-4 w-full">
      <div className="text-3xl font-bold text-gray-900 items-center text-left w-full mb-4 ">
        Select Method:
      </div>
      <div className="flex flex-row w-full items-center justify-center">
        <button
          className="text-sm bg-gradient-to-r from-regularPink to-boldPink text-white rounded-sm px-5 py-2 mr-1 w-1/2 font-extrabold tracking-widest"
          name="Investment"
          onClick={handleButtonClick}
        >
          Investment
        </button>
        <button
          className="text-sm bg-gradient-to-r from-regularPink to-boldPink text-white rounded-sm px-5 py-2  w-1/2 font-extrabold tracking-widest"
          name="Saving"
          onClick={handleButtonClick}
        >
          Saving
        </button>
      </div>
    </div>
  </div>
  )
}

export default SelectMethod