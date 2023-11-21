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
    <div className='flex justify-between z-50 p-4 mx-4'>
        <div>
            <strong>Copyright</strong> &copy; 2023 BAD. All rights reserved.
        </div>
        <div className="flex flex-row text-xl gap-4 items-center justify-between">
          {socials.map((social) => (
            <Link key={social.id} href={social.url} className='hover:text-accent'>{social.icon}</Link>
          ))}
        </div>
    </div>
  )
}

export default Footer