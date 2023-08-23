import React from 'react'

function NavComponent({form}) {
  return (
    <div className="shadow-lg rounded-2xl bg-white h-auto sm:mt-20 lg:mt-0">
      <div className=" font-bold text-gray-900 p-4 items-center h-full grid grid-cols-3">
        <div className="inline-block mr-2 lg:text-3xl  sm:text-sm grid-span-1">
          Select your
        </div>

        <div className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block text-3xl grid-cols-1">
          {/* cuadrito rosa */}
          <div className="w-full flex flex-initial justify-center">
            <div className="relative text-white lg:text-5xl sm:text-xl">{form}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavComponent