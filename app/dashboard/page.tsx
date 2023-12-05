'use client'
import BaseLayout from '@/components/baseLayout/Layout';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import useSWR, { SWRResponse } from 'swr';

// framer-motion
import { motion } from 'framer-motion'
import { fadeIn } from '@/variant'


interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  img: string;
}

const Dashboard = () => {
  // const [data, setData] = useState([])
  // const [error, setError] = useState(false)
  // const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true)
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //       cache: 'no-store',
  //     })

  //     if (!res.ok) {
  //       setError(true)
  //     }

  //     const data = await res.json()

  //     setData(data)
  //     setIsLoading(false)
  //   }
  //   getData()
  // }, [])


  const session = useSession()
  const router = useRouter()
  
  const fetcher = (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json());

  const { data, error, isLoading }: SWRResponse<Post[], Error> = useSWR(
    '/api/posts?username=' + session.data?.user?.name,
    fetcher
  );

  console.log(data)

  const handleSubmit = async (e:any) => {
    e.preventDefault()

    const title = e.target[0].value
    const body = e.target[1].value
    const img = e.target[2].value
    const content = e.target[3].value

    try {
      await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          body,
          img,
          content,
          username: session.data?.user?.name
        })
      })
      } catch (err) {
        console.log(err)
      }
  }

  if(session.status ==='loading') {
    return <div>Loading...</div>
  }

  if(session.status === 'unauthenticated') {
    router?.push('/dashboard/login')
  }
    

  if (session.status === 'authenticated') {
    return (
      <BaseLayout>
        <div className='container mx-auto'>
          <div className="my-post ">
            {isLoading ? "Loading...": data?.map((post: Post) => (
              <div className="card w-96 bg-base-100 shadow-xl" key={post.id}>
                <div className="card-header">
                  <Image src={post.img} alt={post.title}></Image>
                </div>
                <div className="card-body">
                  <h2 className="card-title">{post.title}</h2>
                  <span className='delete'>X</span>
                </div>
              </div>
            ))}
          </div>
          <motion.form
            // onSubmit={handleSubmit}
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden' 
            className="flex flex-1 flex-col justify-center items-center p-8 border-white border rounded-lg mx-auto drop-shadow-md"
          >
            <h1 className="text-3xl font-semibold mb-8">Add New Post</h1>
            <input type="text" placeholder="Title" className="w-full input mb-4 p-4 bg-transparent transition-all duration-300 rounded-md focus:outline-none" required />
            <input type="text" placeholder="Description" className="w-full input mb-4 p-4 bg-transparent transition-all duration-300 rounded-md focus:outline-none" required />
            <input type="text" placeholder="Image URL" className="w-full input mb-4 p-4 bg-transparent transition-all duration-300 rounded-md focus:outline-none" required />
            <textarea name="" placeholder="Content" className='w-full bg-transparent textarea mb-4' cols={30} rows={10}></textarea>
            <button className='btn mb-4 rounded-md border border-white/50 w-full px-8 flex items-center justify-center overflow-hidden hover:border-accent hover:text-accent group'>
              <span className='transition-all duration-500'>Post</span>
            </button>
        </motion.form>
        </div>
      </BaseLayout>
    )
  }
}

export default Dashboard