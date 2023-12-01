/* eslint-disable react/jsx-key */
'use client'
import React, { useState } from 'react'

// Icons
import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaFigma,
} from 'react-icons/fa'

import {
  SiNextdotjs,
  SiFramer,
  SiCanva
} from 'react-icons/si'

// About Data 
type AboutInfoItem = {
  title: string
  stage?: string
  icons?: React.ReactNode[]
}

const aboutData: {
  title: string
  info: AboutInfoItem[]
}[] = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJsSquare />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          <FaFigma />,
          <SiCanva />,
        ],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Web Developer Intern - PT CINDA LOGIKA GRAFIA',
        stage: '2023 - 2024',
      },
      {
        title: 'Front-End Developer Intern - PT GATRA MAPAN',
        stage: '2023',
      },
      {
        title: 'Front-End Developer - PPLK ITERA 2022',
        stage: '2023',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Mini Course Software Engineering - RevoU',
        stage: '2023',
      },
      {
        title: 'Mini Course Data Analytics - RevoU',
        stage: '2022',
      },
      {
        title: 'PROGATE HTML & CSS FUNDAMENTAL CERTIFICATE - Progate',
        stage: '2021',
      },
      {
        title: 'PROGATE PYTHON CERTIFICATE - Progate',
        stage: '2021',
      },
      {
        title: 'PROGATE JAVA CERTIFICATE - Progate',
        stage: '2021',
      },
    ],
  },
]

// Components 
import Avatar from '@/components/avatar/Avatar'
import Circles from '@/components/circles/Circles'

// Framer-motion
import { motion } from 'framer-motion'
import { fadeIn } from '@/variant'

// Counters
import CountUp from 'react-countup'
import BaseLayout from '@/components/baseLayout/Layout'

const About = () => {
  const [index, setIndex] = useState(0)
  
  return (
    <BaseLayout>
      <div className='h-full bg-primary/30 py-20 md:py-28 xl:0 text-center xl:text-left'>
        <div className='hidden xl:flex'>
          <Circles/>
        </div>

        {/* Avatar Img */}
        <motion.div 
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='hidden xl:flex absolute -bottom-32 -left-[370px]' 
        >
          <Avatar/>
        </motion.div>
        <div className="container overflow-y-scroll md:overflow-y-hidden mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
          <div className=" flex flex-1 flex-col justify-center">
            {/* Text */}
            <motion.h2
              variants={fadeIn('right', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden' 
              className='text-2xl xl:text-4xl mb-4'
            >
              Digital <span className='text-accent'>Storytellers</span> Handcrafting award winning <span className='text-accent'>digital</span> experiences.
            </motion.h2>
            <motion.p
              variants={fadeIn('right', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden' 
              className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
            >
              I am a software engineer with experience in developing web applications and mobile apps. My main focus is on frontend development using ReactJS for the UI.
            </motion.p>

            {/* Counters */}
            <div 
              className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
            >
              <div className="flex flex-1 xl:gap-x-6">
                {/* Experiences */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                    <CountUp start={0} end={2} duration={5} />+
                  </div>
                  <div className="text-xl uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Years of Experience
                  </div>
                </div>
                {/* Projects */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                    <CountUp start={0} end={4} duration={5} />+
                  </div>
                  <div className="text-xl uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Finished Projects
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Info */}
          <motion.div 
            variants={fadeIn('left', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="flex flex-col w-full xl:max-w-[48%] h-[480px] mt-16"
          >
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
              {aboutData.map((item, itemIndex) => {
                return (
                  <div 
                    key={itemIndex}
                    className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:h-[2px] after:absolute after:-bottom-1 after:left-0`}
                    onClick={() => setIndex(itemIndex)}
                  >
                    {item.title}
                  </div>
                )
              })}
            </div>
            <div className="flex flex-col py-2 xl:py-6 gap-y-2 xl:gap-y-4 xss:pb-0 items-center xl:items-start">
              {aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div 
                    key={itemIndex}
                    className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                  >
                    {/* Title */}
                    <div className="font-light mb-2 md:mb-0">{item.title}</div>
                    <div className="hidden md:flex">-</div>
                    <div>{item.stage}</div>
                    <div className='flex gap-x-4'>
                      {/* Icons */}
                      {item.icons?.map((icon: any, itemIndex: any) => {
                        return <div className='text-2xl text-white'>{icon}</div>
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>

      </div>
    </BaseLayout>
  )
}

export default About