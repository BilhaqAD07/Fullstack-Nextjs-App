import Image from 'next/image'
import React from 'react'

const Post = () => {
  return (
    <div className='bg-black/30 h-full w-full relative'>
      <div className="container mx-auto">
        <div className="top flex flex-row items-center gap-8">
          {/* Header Content */}
          <div className="info flex flex-1 justify-between flex-col gap-4">
            <h2 className='title text-xl md:text-4xl'>
              Ini Judul
            </h2>
            <p className='desc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consectetur nulla, at quam aliquid placeat, perspiciatis nam vero exercitationem deserunt obcaecati modi aliquam voluptas fugit laborum architecto quaerat officiis commodi.
            </p>
            <div className="author relative flex items-center gap-3">
              <Image
                src={'/avatar.png'}
                alt='avt'
                width={40}
                height={40}
                className='object-cover rounded-full bg-black/50'
              />
              <span className='username'>
                Bilhaq
              </span>
            </div>
          </div>
          <div className="image-container flex flex-1 h-[300px] relative">
            <Image
              src={'https://images.pexels.com/photos/19146694/pexels-photo-19146694/free-photo-of-a-red-maple-tree-with-leaves-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
              alt='blog-image'
              fill
              className='object-contain'
            />
          </div>
        </div>
        {/* Content */}
        <div className="content">
          <p className="text">

          </p>
        </div>
      </div>
    </div>
  )
}

export default Post