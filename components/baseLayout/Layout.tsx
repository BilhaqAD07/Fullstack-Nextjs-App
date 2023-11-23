'use client'
import React from 'react'

// Framer-motion
import Transition from '../transition/Transition'
import { AnimatePresence, motion } from 'framer-motion'

// Components
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import TopLeftImg from '../TopLeftImg/TopLeftImg'


const BaseLayout = ({children}: any) => {
  return (
    <AnimatePresence mode='wait'>
      <motion.div className="h-full">
        <Transition/>
        <div className="page bg-site flex flex-col justify-between text-white/80 bg-cover bg-no-repeat">
          <TopLeftImg/>
          <Navbar/>
          {children} 
          <Footer/>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default BaseLayout