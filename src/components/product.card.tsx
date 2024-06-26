
'use client'
import React from 'react'
import Button from './button'
import { Product } from '@/types/products.type'
import Image from 'next/image'
import { TitleCard } from './titlecard'
import { PriceCard } from './pricecard'
import { StrongCard } from './strongcard'
import { convertToBRL } from '@/helper/convert.to.brl'
import { RemoveCart } from './icons/removecart'
import { AddCart } from './icons/addcart'
import Link from 'next/link'
import { useProductContext } from '@/app/contexts/product.context'

interface ProductCardProps {
  data: Product
  index: number
}

const ProductCard = ({ data, index }: ProductCardProps) => {
  const { toggleCart, cart } = useProductContext()
  const isInCart = cart.some(item => item.id === data.id);
  return (
    <div className='text-center bg-white border rounded-md pt-2'>
      <div className='h-auto rounded-md px-4'>
        <Image priority={index < 8} className='mx-auto h-28 md:h-[200px] object-contain' src={data.image} alt={data.title} width={1049} height={1500} sizes='(max-width: 700px) 33vw, 50vw' />
      </div>
      <div className='bg-emerald-400 px-4 pb-2 border-t-4 border-emerald-700 mt-2'>
        <TitleCard className='mt-1 pt-2'>{data.title}</TitleCard>
        <PriceCard>
          <StrongCard className='font-extrabold'>{convertToBRL(data.price)}</StrongCard>
        </PriceCard>
        <div className='flex justify-between mt-2'>
          <Link className='hover:text-white transition ease-in-out duration-300' href={`/details/${data.id}`}>Ver mais</Link>
          <Button className='bg-transparent' onClick={() => toggleCart(data)}>{isInCart ? <RemoveCart /> : <AddCart />}</Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
