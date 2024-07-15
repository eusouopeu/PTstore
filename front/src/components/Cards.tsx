import React from 'react'
import Image from 'next/image'


interface CardsProps {
  id?: number,
  thumbnail: any,
  title: string,
  brand: string,
  category: string,
  rating: string,
  price: string,
  stock: string,
  children?: React.ReactNode
}
export default function Cards({
  id,
  thumbnail,
  title,
  brand,
  category,
  rating,
  price,
  stock,
  children,
  ...restProps
}: CardsProps) {
  const prodId = id
  const prodCategory = category

  return (
    <div className='flex flex-col content-center justify-between w-[180px] h-[280px] p-[8px] bg-white border-2 border-blue-700 rounded-lg text-black' {...restProps}>
      <div>
        <Image src={thumbnail} alt='.' width={120} height={120} />
        <h5 className='truncate overflow-hidden'> {title} </h5>

        <div className='flex justify-between'>
          <h6> {brand} </h6>
          <h6> {rating} </h6>
        </div>
      </div>

      <div className='flex'>
        <h6> {parseFloat(price)} </h6>
        <h6> {Number(stock)} </h6>
      </div>

      {children}

    </div>
  )
}
