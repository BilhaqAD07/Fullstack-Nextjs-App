import Image from 'next/image'
import React from 'react'

const TopLeftImg = () => {
  return (
    <div className='absolute left-0 top-0 mix-blend-color-dodge z-10 w-52 xl:w-[400px]'>
        <Image src={'/top-left-img.png'} width={400} height={400} priority alt='top-left-img'/>
    </div>
  )
}

export default TopLeftImg