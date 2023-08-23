'use client'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button, Input } from '@nextui-org/react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

function Container() {
  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const initialstate = {password: '', repeatPassword: ''}
  const [credentials, setCredentials] = useState(initialstate)
  const [show, setShow] = useState(false)

  const router = useRouter()
  const handleChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  const handleSubmit = async () => {
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(credentials.email) && (credentials.password === credentials.repeatPassword) ){
      const {data} = await axios.put(`${process.env.NEXT_PUBLIC_API_URI}/recovery/password/${id}`, {password: credentials.password})
      if(data.success){
        Swal.fire({
          icon: 'success',
          text: data.message,
          timer: 1500,
          showConfirmButton: false
        })
        router.push('/login')
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Unexpected error',
        })
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Invalid Password',
        text: 'password must have at least 8 characters, one capital letter and one number'
      })
    }

  }

  return (
    <div className='flex flex-col gap-10 items-center h-screen justify-center'>
      <h2 className='uppercase text-xl font-bold'>Change your password</h2>
      <div className='flex gap-10 items-center'>
      <Input 
        isRequired
        type='password'
        label='password'
        variant='bordered'
        name='password'
        value={credentials.password}
        onChange={handleChange}
         />
      <Input 
        isRequired
        type='password'
        label='repeat password'
        variant='bordered'
        name='repeatPassword'
        value={credentials.repeatPassword}
        onChange={handleChange}
        />
        <Button type='button' onClick={handleSubmit} color='primary'>Submit</Button>
        </div>
      <div className='flex justify-between px-5 items-center w-[300px]'>
          <span className='border-b-2 border-slate-300 w-[100px]'>{show ? credentials.password.length ? credentials.password : 'password is empty': '****' }</span>
          <Button type='button' color='primary' onClick={() => {setShow(!show)}}>show password</Button>
        </div>
    </div>
  )
}

export default Container