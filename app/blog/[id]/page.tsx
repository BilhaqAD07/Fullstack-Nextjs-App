import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'

async function getData(id: number) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store'
  })

  if (!res.ok) {
    return notFound()
  }

  return res.json()
}

export async function generateMetadata({ params }: any) {
  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc
  }
}


const Post = async ({params}: any) => {
  const data = await getData(params.id)
  return (
    <div className='bg-black/30 h-full w-full overflow-y-scroll relative pb-8'>
      <div className="container mx-auto ">
        <div className="top flex md:flex-row flex-col-reverse md:gap-4 md:mt-8">
          {/* Header Content */}
          <div className="info flex flex-1 justify-center flex-col gap-4">
            <h2 className='title text-xl md:text-4xl'>
              {data.title}
            </h2>
            <p className='desc text-sm md:text-base font-light'>
              {data.desc}
            </p>
            <div className="author relative flex items-center gap-3">
              <Image
                src={data.img}
                alt='avt'
                width={40}
                height={40}
                className='object-cover rounded-full bg-black/50'
              />
              <span className='username'>
                {data.username}
              </span>
            </div>
          </div>
          <div className="image-container flex md:flex-1 h-[300px] relative">
            <Image
              src={data.img}
              alt='blog-image'
              fill
              className='object-contain'
            />
          </div>
        </div>
        {/* Content */}
        <div className="content mt-12 font-light text-justify text-sm md:text-base">
          <p className="text">
            {data.content}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Post