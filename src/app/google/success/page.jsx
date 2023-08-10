'use client'
import React, { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation';

const page = () => {
  const searchParams = useSearchParams()
  const router = useRouter()
  useEffect(() => {
    const token = searchParams.get('token')
    document.cookie = `token=${token}; expires=${new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000).toUTCString()}; path=/`
    setTimeout(() => {
      router.push('/home/dashboard')
    }, 2000);
  }, [])
  return (
    <p>
      Redirecting to dashboard...
    </p>
  )
}

export default page