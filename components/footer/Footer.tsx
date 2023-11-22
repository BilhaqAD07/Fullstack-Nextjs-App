import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiInstagramFill, RiGithubFill, RiMailFill } from 'react-icons/ri'

const socials = [
  {
    id: 1,
    icon: <RiInstagramFill/>,
    url: '/'
  },
  {
    id: 2,
    icon: <RiGithubFill/>,
    url: '/'
  },
  {
    id: 3,
    icon: <RiMailFill/>,
    url: '/'
  },
]

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row text-center md:text-start justify-center items-center md:justify-between z-50 gap-8 md:gap-0 p-4 mx-4'>
        <div>
            &copy;2023 <strong>BAD.</strong> All rights reserved.
        </div>
        <div className="flex flex-row text-xl gap-4 items-center justify-center md:justify-between">
          {socials.map((social) => (
            <Link key={social.id} href={social.url} className='hover:text-accent'>{social.icon}</Link>
          ))}
        </div>
    </div>
  )
}

export default Footer