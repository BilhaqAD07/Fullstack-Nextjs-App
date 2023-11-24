import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <div className='relative overflow-y-scroll h-full w-full bg-black/30'>
      <Link className='p-8 md:p-12 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 mb-0' href={'/blog/testId'}>
        <div className="image-container flex items-center justify-center w-1/3">
          <Image
            src={'https://images.pexels.com/photos/19146694/pexels-photo-19146694/free-photo-of-a-red-maple-tree-with-leaves-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
            alt='blog image'
            width={400}
            height={250}
            className='object-cover'
          />
        </div>
        <div className="content w-2/3 flex-col">
          {/* Text */}
          <h2 className=' text-xl md:text-3xl title mb-3 text-center md:text-start'>
            Test
          </h2>
          <p className=" text-xs md:text-base text-center md:text-start">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos praesentium enim temporibus eum blanditiis. Nisi nemo fugit vel quod illum inventore magnam ipsa? Porro sed enim debitis neque velit blanditiis!
          </p>
        </div>
      </Link>
      <Link className='p-8 md:p-12 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 mb-0' href={'/blog/testId'}>
        <div className="image-container flex items-center justify-center w-1/3">
          <Image
            src={'https://images.pexels.com/photos/19146694/pexels-photo-19146694/free-photo-of-a-red-maple-tree-with-leaves-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
            alt='blog image'
            width={400}
            height={250}
            className='object-cover'
          />
        </div>
        <div className="content w-2/3 flex-col">
          {/* Text */}
          <h2 className=' text-xl md:text-3xl title mb-3 text-center md:text-start'>
            Test
          </h2>
          <p className=" text-xs md:text-base text-center md:text-start">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos praesentium enim temporibus eum blanditiis. Nisi nemo fugit vel quod illum inventore magnam ipsa? Porro sed enim debitis neque velit blanditiis!
          </p>
        </div>
      </Link>
      <Link className='p-8 md:p-12 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 mb-0' href={'/blog/testId'}>
        <div className="image-container flex items-center justify-center w-1/3">
          <Image
            src={'https://images.pexels.com/photos/19146694/pexels-photo-19146694/free-photo-of-a-red-maple-tree-with-leaves-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
            alt='blog image'
            width={400}
            height={250}
            className='object-cover'
          />
        </div>
        <div className="content w-2/3 flex-col">
          {/* Text */}
          <h2 className=' text-xl md:text-3xl title mb-3 text-center md:text-start'>
            Test
          </h2>
          <p className=" text-xs md:text-base text-center md:text-start">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos praesentium enim temporibus eum blanditiis. Nisi nemo fugit vel quod illum inventore magnam ipsa? Porro sed enim debitis neque velit blanditiis!
          </p>
        </div>
      </Link>
    </div>
  )
}

export default Blog