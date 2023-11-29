import Image from 'next/image'
import { notFound } from 'next/navigation'
import React from 'react'

async function getData(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store'
  })

  if (!res.ok) {
    return notFound()
  }

  return res.json()
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
          <div className="image-container flex md:flex-1 h-[300px] relative">
            <Image
              src={'https://images.pexels.com/photos/19146694/pexels-photo-19146694/free-photo-of-a-red-maple-tree-with-leaves-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
              alt='blog-image'
              fill
              className='object-contain'
            />
          </div>
        </div>
        {/* Content */}
        <div className="content mt-12 font-light text-justify text-sm md:text-base">
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dicta aut rem similique deserunt aspernatur, a fugit voluptatem, expedita, repudiandae eius beatae. Et nesciunt molestiae adipisci, esse blanditiis corporis modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, rem iste! Accusantium quidem harum ut vitae commodi earum molestias odit nobis culpa, corrupti dolorem dolorum, nisi dicta totam eius adipisci!
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore itaque mollitia exercitationem voluptatum nemo modi, assumenda fuga molestiae maiores, culpa quis delectus eius reprehenderit quod nesciunt consequatur error architecto! Repellendus.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat est perspiciatis atque expedita nam ad impedit incidunt aperiam? Dolorum exercitationem autem magnam officia sit unde iusto suscipit ut accusantium deleniti.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Post