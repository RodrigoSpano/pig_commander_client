import React from 'react'

function NavComponent({form}) {
  return (
    <div className="row-span-1 col-span-2 shadow-lg rounded-2xl bg-white m-5 h-4/6">
      <div className="text-xl font-bold text-gray-900 p-4 items-center h-full grid grid-cols-3">
        <div className="inline-block mr-2 text-3xl grid-span-1">
          Select your
        </div>

        <div className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block text-3xl grid-cols-1">
          {/* cuadrito rosa */}
          <div className="w-full flex flex-initial justify-center">
            <div className="relative text-white text-5xl">{form}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavComponent