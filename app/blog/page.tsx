import BaseLayout from '@/components/baseLayout/Layout'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

async function getData() {
  const res = await fetch('http://localhost:3000/api/posts', {
    cache: 'no-store',
  })

  if (!res.ok) {
    // Active close Error
    throw new Error('Fetching data failed')
  }
  return res.json()
}

const Blog = async () => {

  const data = await getData()
  return (
    <BaseLayout>
      <div className='relative overflow-y-scroll h-full w-full bg-black/30'>
        {data.map((item: any) => (
          <Link className='p-8 md:p-12 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 mb-0' href={`/blog/${item._id}`} key={item._id}>
            <div className="image-container flex items-center justify-center w-1/3">
              <Image
                src={item.img}
                alt='blog image'
                width={400}
                height={250}
                className='object-cover'
              />
            </div>
            <div className="content w-2/3 flex-col">
              {/* Text */}
              <h2 className=' text-xl md:text-3xl title mb-3 text-center md:text-start'>
                {item.title}
              </h2>
              <p className=" text-xs md:text-base text-center md:text-start">
                {item.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </BaseLayout>
  )
}

export default Blog