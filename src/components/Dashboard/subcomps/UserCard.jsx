import React from 'react'

const UserCard = ({user}) => {
  return (
    <div className="bg-white rounded-lg shadow-md row-span-3 col-span-3  flex flex-col justify-center items-center">
    <div className="w-[120px] h-[120px] rounded-full mx-auto bg-gray-950 flex items-center justify-center">
    </div>
    <span className="text-24 font-bold">{user.name.replace(/^\w/, (c) => c.toUpperCase())} {user.lastname.replace(/^\w/, (c) => c.toUpperCase())}</span>
  </div>
  )
}

export default UserCard