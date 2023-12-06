'use client'
import BaseLayout from '@/components/baseLayout/Layout';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import useSWR, { SWRResponse } from 'swr';

import styles from './page.module.css'

// framer-motion
import { motion } from 'framer-motion'
import { fadeIn } from '@/variant'


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


  const session = useSession();

  const router = useRouter();
  
  //NEW WAY TO FETCH DATA
  const fetcher = (...args: Parameters<typeof fetch>) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } : SWRResponse = useSWR(
    '/api/posts?username=' + session.data?.user?.name,
    fetcher
  );

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data?.user?.name,
        }),
      });
      mutate();
      e.target.reset()
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id: any) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };
    

  if (session.status === 'authenticated') {
    return (
      <BaseLayout>
        <div className='container mx-auto flex gap-12'>
          <div className={styles.posts}>
            {isLoading
              ? "loading"
              : data?.map((post: any) => (
                  <div className={styles.post} key={post._id}>
                    <div className={styles.imgContainer}>
                      <Image src={post.img} alt="" width={200} height={100} />
                    </div>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <button
                      className="delete-button px-4 p-2 text-accent border rounded-[50%] border-accent hover:bg-accent hover:text-white transition-all duration-300 font-bold"
                      onClick={() => handleDelete(post._id)}
                    >
                      X
                    </button>
                  </div>
                ))}
          </div>
          <motion.form
            onSubmit={handleSubmit}
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