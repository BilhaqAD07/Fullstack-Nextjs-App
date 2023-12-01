'use client'
import BaseLayout from '@/components/baseLayout/Layout';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import useSWR, { SWRResponse } from 'swr';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
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
console.log(session)
  
const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

const { data, error, isLoading }: SWRResponse<Post[], Error> = useSWR(
  'https://jsonplaceholder.typicode.com/posts',
  fetcher
);


  console.log(data)

  return (
    <BaseLayout>
      <div>Dashboard</div>
    </BaseLayout>
  )
}

export default Dashboard