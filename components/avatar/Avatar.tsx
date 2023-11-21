import Image from 'next/image'
import React from 'react'

const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
        <Image
            src={'/avatar.png'}
            alt="Avatar"
            width={737}
            height={678}
            className='translate-z-0 w-full h-full overflow-hidden'
        />
    </div>
  )
}

export default Avatar