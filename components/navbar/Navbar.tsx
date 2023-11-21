'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import {
    FaBars,
    FaHouseChimney,
    FaNewspaper,
    FaBloggerB,
    FaUser,
    FaPhoneVolume,
} from 'react-icons/fa6'
import { BiSolidGridAlt, BiLogOut } from "react-icons/bi"

const links = [
    {
        id: 1,
        title: 'Home',
        icon: <FaHouseChimney/>,
        path: '/',
    },
    {
        id: 2,
        title: 'Portofolio',
        icon: <FaNewspaper/>,
        path: '/portofolio',
    },
    {
        id: 3,
        title: 'Blog',
        icon: <FaBloggerB/>,
        path: '/blog',
    },
    {
        id: 4,
        title: 'About',
        icon: <FaUser/>,
        path: '/about',
    },
    {
        id: 5,
        title: 'Contact',
        icon: <FaPhoneVolume/>,
        path: '/contact',
    },
    {
        id: 6,
        title: 'Dashboard',
        icon: <BiSolidGridAlt/>,
        path: '/dashboard',
    },
]

export default function Navbar () {
  const [mobileActive, setMobileActive] = useState(false)

  const logo = '/logo.svg'

  const currentRoute = usePathname()

  const handleNavigation = () => {
    mobileActive ? setMobileActive(false) : setMobileActive(true)
  }

  return (
      <nav className="sticky md:relative top-0 z-50">
          <div className="container mx-auto flex justify-between items-center py-3">

              <Link href={'/'} className='h-10 w-1/2 relative'>
                  <Image
                      src={logo}
                      alt='logo tiket papa'
                      className='drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)] object-contain object-left'
                      fill

                />
              </Link>
              <button className='md:hidden text-2xl text-gray-700' onClick={ () => { handleNavigation() }}>
                  <FaBars/>
              </button>

              <ul className='hidden md:flex gap-8 items-center text-text-color font-semibold relative'>
                  {links.map((link) => (
                    <li key={link.id} className={`${link.path === currentRoute ? 'text-accent': '' } relative group transition-all hover:text-accent duration-300`}>
                        <Link href={link.path} className='drop-shadow-[0_5px_20px_rgba(255,50,100,0.45)] '>{link.title}</Link>
                    </li>
                  ))}
                  <li className=''>
                    <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
                        <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Logout</span>
                        <BiLogOut className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
                </button>
                  </li>
              </ul>
          </div>
          <ul className= {`text-text-color font-semibold z-10 absolute md:hidden  w-full px-4 ${mobileActive ? 'block' : 'hidden'}`}>
            {links.map((link) => (
                <li key={link.id} className={`${link.path === currentRoute ? 'text-accent': '' } relative group transition-all hover:text-accent duration-300`}>
                    <Link className='flex justify-center items-center py-4 border border-b-neutral-200' href={link.path}>{link.icon} &nbsp; {link.title}</Link>
                </li>
            ))}
            <li className={`relative group transition-all hover:text-accent duration-300`}>
                <Link className='flex justify-center items-center py-4 border border-b-neutral-200' href={'/'}><BiLogOut/> &nbsp; Logout</Link>
            </li>
          </ul>
          <div className={`md:hidden absolute z-0 bg-opacity-30 bg-black w-full min-h-screen ${mobileActive ? 'block' : 'hidden'}`} onClick={() => { handleNavigation() }}>

          </div>
      </nav>
  )
}