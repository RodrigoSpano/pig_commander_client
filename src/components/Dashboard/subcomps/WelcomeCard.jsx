import React from 'react'
import { useSelector } from 'react-redux'

const WelcomeCard = ({user}) => {
  return (
    <div className="col-span-5 flex flex-col pl-6">
      <div className="font-bold text-4xl leading-normal text-slate-900 mt-10 ">
        Welcome Back {user.name.replace(/^\w/, (c) => c.toUpperCase())}
      </div>
      <div className="font-normal text-base leading-tight text-gray-500">
        Pig Commander is the most secure finance app.
      </div>
    </div>
  )
}

export default WelcomeCard