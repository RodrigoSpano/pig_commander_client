'use client'
import React from 'react';
import { Button, Input } from '@nextui-org/react'; 
import useForgotPassword from '@/customHooks/useForgotPassword';
import useVisibility from '@/customHooks/useVisibility';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";




function Container() {

const { 
  handleChange,
  handleSubmit,
  credentials,
  inputInvalidPassword, 
  passwordsMatch

} = useForgotPassword();


const {
  showPassword,
  togglePasswordVisibility,
  showPasswordConfirmation,
  togglePasswordConfirmationVisibility,
} = useVisibility();


  return (
    <div className='flex flex-col  items-center h-screen justify-center bg-lightGray'>
      <div className='bg-white h-3/4 w-2/4 flex flex-col justify-center items-center  rounded-3xl p-5'>
        <div className='flex flex-row gap-2 m-14'>
          <h2 className='uppercase text-4xl font-bold'>Change your</h2>
          <h2 className='uppercase text-4xl font-bold text-strongPink'>password</h2>
        </div>
        <div className='flex items-center flex-col mb-5'>
          <div className='flex flex-col '>
            <div className='flex flex-row'>
              <Input
                isRequired
                className="dark:text-black ml-2 input-field bg-transparent py-4 w-80 focus:outline-none active:outline-none"
                type={showPassword ? "text" : "password"}
                label='Password'
                variant='bordered'
                name='password'
                value={credentials.password}
                onChange={handleChange}
              />
              <span
                className="password-toggle self-center ml-2.5 text-xl"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <AiOutlineEye />
                ) : (
                  <AiOutlineEyeInvisible />
                )}
              </span>
            </div>
            <div className='flex flex-row'>
              <Input
                isRequired
                className="dark:text-black ml-2 input-field bg-transparent py-4 w-80 focus:outline-none active:outline-none"
                type={showPasswordConfirmation ? "text" : "password"}
                label='Confirm password'
                variant='bordered'
                name='repeatPassword'
                value={credentials.repeatPassword}
                onChange={handleChange}
              />
              <span
                className="password-toggle self-center ml-2.5 text-xl"
                onClick={togglePasswordConfirmationVisibility}
              >
                {showPasswordConfirmation ? (
                  <AiOutlineEye />
                ) : (
                  <AiOutlineEyeInvisible />
                )}
              </span>
            </div>
            <div className='h-16'>
              {inputInvalidPassword && (
                <p className="text-xs text-red-600 mt-1 w-[21.125rem] text-center flex	">
                  This field is required. It must have at least 1 lowercase
                  letter, 1 uppercase letter, 1 number, no spaces, and a
                  minimum of 8 characters.
                </p>
              )}
              {!passwordsMatch && (
                <p className="text-xs text-red-600 mt-1 w-[21.125rem] text-center flex justify-center">
                  Passwords must match
                </p>
              )}

            </div>

          </div>

          <Button className='w-48 bg-gradient-to-r p-7 from-regularPink to-boldPink font-bold text-xl mt-5' type='button' onClick={handleSubmit} color='primary'>Submit</Button>
        </div>

      </div>

    </div>
  )
}

export default Container