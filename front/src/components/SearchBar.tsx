'use client'
import React, { useState } from 'react'
import clsx from 'clsx'
import { useFilter } from '@/contexts/FilterContext'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'


interface SearchBarProps {
  className?: string
  desktop?: boolean
}
export const SearchBar = ({
  className,
  desktop = false,
  ...restProps
}: SearchBarProps) => {
  const { Name, filterName } = useFilter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterName(e);
  };

  return (
    <form className={clsx(
      `flex w-full lg:w-fit gap-0`,
      desktop ? 'hidden lg:flex' : 'flex lg:hidden',
    className )} {...restProps}>

      <input id='searchName' className='w-[80vw] lg:w-[416px] h-[30px] lg:h-[44px] bg-white rounded-[6px] lg:rounded-r-[0] lg:rounded-l-[10px] text-[1rem]'  type='text' value={Name} onChange={handleChange} />

      <MagnifyingGlassIcon className='container flex items-center justify-center w-[30px] lg:w-[44px] h-[30px] lg:h-[44px] bg-yellow-500 rounded-[6px] lg:rounded-l-[0] lg:rounded-r-[10px] hover:bg-yellow-700 transition-all duration-500 lg:w-[24px] lg:h-[24px]' />
    </form>
  )
}

export const SearchProduct = () => {
  const { Name, filterName } = useFilter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterName(e);
  };

  return (
    <form className='flex justify-between w-full h-[32px] -py-[9px] px-[12px] bg-white shadow-lg rounded-[10px]'>
      <input className='w-[calc(100%-20px)]' type='text' placeholder='Produto...' value={Name} onChange={handleChange} />
      <MagnifyingGlassIcon />
    </form>
  )
}

export const SearchBrand = () => {
  const { Name, filterName } = useFilter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterName(e);
  };

  return (
    <form className='flex justify-between w-full h-[32px] -py-[9px] px-[12px] bg-white shadow-lg rounded-[10px]'>
      <input className='w-[calc(100%-20px)]' type='text' placeholder='Marca...' value={Name} onChange={handleChange} />
      <MagnifyingGlassIcon />
    </form>
  )
}