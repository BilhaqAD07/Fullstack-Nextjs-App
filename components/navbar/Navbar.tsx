'use client'
import Link from 'next/link'
import { title } from 'process'
import React from 'react'

const links = [
    {
        id: 1,
        title: 'Home',
        path: '/',
    },
    {
        id: 2,
        title: 'Portofolio',
        path: '/portofolio',
    },
    {
        id: 3,
        title: 'Blog',
        path: '/blog',
    },
    {
        id: 4,
        title: 'About',
        path: '/about',
    },
    {
        id: 5,
        title: 'Contact',
        path: '/contact',
    },
    {
        id: 6,
        title: 'Dashboard',
        path: '/dashboard',
    },
]

const Navbar = () => {
  return (
    <nav>
        <Link href={'/'}>Bilhaqad</Link>
        <div>
            {links.map((link) => (
                <Link key={link.id} href={link.path}>{link.title}</Link>
            ))}
        </div>
        <button
            onClick={() => {
                console.log('Logged out')
            }} 
            className=''
        >
            Logout
        </button>
    </nav>
  )
}

export default Navbar