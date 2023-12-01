'use client'
import React from 'react'

// Framer-motion
import Transition from '@/components/transition/Transition'
import { AnimatePresence, motion } from 'framer-motion'

// Components
import TopLeftImg from '@/components/TopLeftImg/TopLeftImg'


const BaseLayout = ({children}: any) => {
  return (
    <AnimatePresence mode='wait'>
      <motion.div className="h-full">
        <Transition/>
        <div className="page bg-site text-white/80 bg-cover bg-no-repeat">
          <TopLeftImg/>
          {children} 
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default BaseLayout