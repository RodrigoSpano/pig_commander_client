import React from 'react'

function NavComponent({form}) {
  return (
    <div className="w-full shadow-lg rounded-2xl bg-white dark:bg-mediumGrayDarkMode h-auto sm:mt-20 lg:mt-0">
      <div className=" font-bold text-gray-900 p-4 items-center h-full grid grid-cols-3">
        <div className="inline-block mr-2 lg:text-3xl  sm:text-sm grid-span-1">
        </div>

        <div className="inline-block text-3xl grid-cols-1">
          <div className="w-full flex flex-initial justify-center">
            <div className="relative text-mediumPinkDark dark:bg-mediumGrayDarkMode lg:text-5xl sm:text-xl">{form}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavComponent