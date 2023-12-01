'use client'
import React from 'react'

// components
import Circles from '@/components/circles/Circles'
import WorkSlider from '@/components/workSlider/WorkSlider'
import Bulb from '@/components/bulb/Bulb'

// framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '@/variant'
import BaseLayout from '@/components/baseLayout/Layout'

const Portofolio = () => {
  return (
    <BaseLayout>
      <div className='relative h-screen bg-primary/30'>
        <Circles/>
        <div className="container flex flex-col justify-center items-center mx-auto">
          {/* Text */}
          <div className="flex flex-col items-center justify-center">
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='text-3xl font-semibold xl:text-5xl xl:mt-12 mb-4'
            >
              My Work <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 mx-auto lg:mx-0'
            >
              Choose the gallery.
            </motion.p>
          </div>

          {/* Slide */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%] xss:pb-20 sm:pb-0'
          >
            <WorkSlider/>
          </motion.div>
        </div>
        <Bulb/>
      </div>
    </BaseLayout>
  )
}

export default Portofolio