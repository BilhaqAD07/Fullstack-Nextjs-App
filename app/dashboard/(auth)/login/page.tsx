'use client'
import React from 'react'
import { signIn } from 'next-auth/react'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
  return (
    <div className='bg-black/30 h-full w-full relative'>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="flex flex-col justify-center items-center p-8 border-white border rounded-lg mx-auto drop-shadow-md">
          <h1 className="text-3xl font-semibold mb-8">Log in</h1>
          <button className='flex items-center gap-4 mb-4 p-4 bg-black/40 transition-all duration-300 rounded-full cursor-pointer hover:bg-transparent' onClick={() => signIn('google')}>{<FcGoogle/>} Sign in with Google</button>
          <button className='flex items-center gap-4 mb-4 p-4 bg-black/40 transition-all duration-300 rounded-full cursor-pointer hover:bg-transparent' onClick={() => signIn('github')}>{<FaGithub/>} Sign in with Github</button>
        </div>
      </div>
    </div>
  )
}

export default Login