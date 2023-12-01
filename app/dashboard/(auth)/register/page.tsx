'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from './page.module.css'

// framer-motion
import { motion } from 'framer-motion'
import { fadeIn } from '@/variant'

// Icons
import { BiLogIn } from 'react-icons/bi'
import { useRouter } from 'next/navigation'

const Register = () => {
  const [error,setError] = useState(false)

  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const name = e.target[0].value
    const email = e.target[0].value
    const password = e.target[0].value
  }

  try {
    const res = await fetch('/api/auth/register', {
      method: "POSH",
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      })
    })

    res.status == 201 && router.push('/dashboard/login?success=Accuount has been created')
  } catch (error) {
    console.log(error)
    setError(true)
    
  }

  return (
    <div className='bg-black/30 h-full w-full relative'>
      <div className="container mx-auto flex justify-center items-center h-full">
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden' 
          className="w-full h-full hidden md:flex md:flex-1"
        >
        <Image 
              src={'/hero.png'}
              alt='register'
              width={400}
              height={400}
              className={style.image}
            />
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden' 
          className="flex flex-1 flex-col justify-center items-center p-8 border-white border rounded-lg mx-auto drop-shadow-md"
        >
          <h1 className="text-3xl font-semibold mb-8">Sign Up</h1>
          <input type="text" placeholder="Username" className="w-full input mb-4 p-4 bg-transparent transition-all duration-300 rounded-md focus:outline-none" required />
          <input type="email" placeholder="Email" className="w-full input mb-4 p-4 bg-transparent transition-all duration-300 rounded-md focus:outline-none" required />
          <input type="password" placeholder="Password" className="w-full input mb-4 p-4 bg-transparent transition-all duration-300 rounded-md focus:outline-none" required />
          <button className='btn mb-4 rounded-md border border-white/50 w-full px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
                      <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Register</span>
                      <BiLogIn className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
          </button>
          <Link href={'/dashboard/login'} className='text-center hover:underline'>
            Already have an account? <span className='italic text-accent'>Login</span>
          </Link>
        </motion.form>
        {error && <p className='text-red-500'>Something went wrong</p>}
      </div>
    </div>
  )
}

export default Register