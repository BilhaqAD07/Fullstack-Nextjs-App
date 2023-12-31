'use client'
import React from 'react'

// components
import Button from '@/components/button/Button'
import Avatar from '@/components/avatar/Avatar'
import ContainerParticles from '@/components/particles/ContainerParticles'
import BaseLayout from '@/components/baseLayout/Layout'

// framer-motion
import { motion } from 'framer-motion'

// Variants
import { fadeIn } from '../variant'

function Home() {
  return (
    <BaseLayout>
      <div className='bg-primary/60 h-full'>
        {/* Text */}
        <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
          <div className='flex flex-col text-center justify-center xl:pt-40 xl:pl-8 xl:text-left h-full container mx-auto'>
            {/* Title */}
            <motion.h1 
              variants={fadeIn('down', 0.2)} 
              initial='hidden' 
              animate='show' 
              exit='hidden'
              className='text-4xl xl:text-6xl font-semibold mb-4'
            >
              Hello Guys, <br/>
              I&#39;m <span className='text-accent'>Software Engineer</span>
            </motion.h1>
            {/* Subtitle */}
            <motion.p
              variants={fadeIn('down', 0.3)} 
              initial='hidden' 
              animate='show' 
              exit='hidden' 
              className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'
            >
              I just finished my portofolio, feel free to enjoy this website.
            </motion.p>
            {/* Button */}
            <div className="flex justify-center xl:hidden relative">
              <Button/>
            </div>
            <motion.div 
              variants={fadeIn('down', 0.4)} 
              initial='hidden' 
              animate='show' 
              exit='hidden' 
              className="hidden xl:flex"
            >
              <Button/>
            </motion.div>
          </div>
        </div>
        {/* Image */}
        <div className="w-[1200px] h-full absolute right-0 bottom-0">
          {/* bg-Image */}
          <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
          </div>
          {/* Patciles */}
          <div>
            <ContainerParticles/>
          </div>
          {/* Avatar Img */}
          <motion.div
            variants={fadeIn('up', 0.5)} 
            initial='hidden' 
            animate='show' 
            exit='hidden'
            transition={{ duration: 1, ease: 'easeInOut' }} 
            className="hidden md:flex w-full h-full max-w-[737px] max-h-[678px] absolute lg:bottom-0 -bottom-32 lg:right-[8%] overflow-y-hidden"
            >
            <Avatar/>
          </motion.div>
        </div>
      </div>
    </BaseLayout>
  )
}

export default Home