'use client'
import React from 'react'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'

// Icons
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

// Framer-motions
import { motion } from 'framer-motion'
import { fadeIn } from '@/variant'
import { BiLogIn } from 'react-icons/bi'
import { useRouter } from 'next/navigation'

const Login = () => {
  const session = useSession()
  const router = useRouter()

  if (session.status === 'loading') {
    return <p>Loading...</p>
  }

  if (session.status === 'authenticated') {
    router?.push('/dashboard')
  }

  const handleSubmit = async ( e: any ) => {
    e.preventDefault()

    const email = e.target[0].value
    const password = e.target[1].value

    signIn('credentials', { email, password })
  }
  
  return (
    <div className='bg-black/30 h-full w-full relative'>
      <div className="flex flex-col justify-center items-center h-full">
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden' 
          className="flex flex-col justify-center items-center p-8 border-white border rounded-lg mx-auto drop-shadow-md"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-1 flex-col justify-center items-center mx-auto"
          >
            <h1 className="text-3xl text-center font-semibold mb-8">Log in</h1>
            <input type="email" placeholder="Email" className="w-full input mb-4 p-4 bg-transparent transition-all duration-300 rounded-md focus:outline-none" required />
            <input type="password" placeholder="Password" className="w-full input mb-4 p-4 bg-transparent transition-all duration-300 rounded-md focus:outline-none" required />
            <button className='btn mb-4 rounded-md border border-white/50 w-full px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Login</span>
              <BiLogIn className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
            </button>
            <Link href={'/dashboard/register'} className='text-center hover:underline'>
              Don&#39;t have an account? <span className='italic text-accent'>Register</span>
            </Link>

          </form>
          <div className="my-4 flex items-center justify-between w-full">
                <span className="border-b border-gray-500 w-full"></span>
                <p className="text-xs text-center text-gray-500 uppercase w-full">or</p>
                <span className="border-b border-gray-500 w-full"></span>
            </div>
          <div className="flex md:flex-col gap-4">
            <button className='flex items-center gap-4 p-4 bg-black/40 transition-all duration-300 rounded-full cursor-pointer hover:bg-transparent' onClick={() => signIn('google')}>{<FcGoogle/>} <span className='hidden md:block'>Sign in with Google</span></button>
            <button className='flex items-center gap-4 p-4 bg-black/40 transition-all duration-300 rounded-full cursor-pointer hover:bg-transparent' onClick={() => signIn('github')}>{<FaGithub/>} <span className='hidden md:block'>Sign in with Github</span></button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Login