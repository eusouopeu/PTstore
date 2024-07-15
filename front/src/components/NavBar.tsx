'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { DepartmentsMenu } from './ToggleMenus'
import { departmentsList } from '@/lib/lists'
import Link from 'next/link'
import { useAPI } from '@/contexts/APIContext'

interface HomePageProps {
  data: any | null;
  error: string | null;
}


export interface NavBarProps {
  settings: any
}
export default function NavBar() {
  const { Categories } = useAPI()
  

  return (
    <nav className='header-nav bg-zinc-500'>

      <ul className='flex gap-[14px] overflow-auto'>
        {Categories.slice(0,4).map((item: any, index: number) => (
          <li key={index}>
            <Link className='header-nav-list-items transition-all duration-500' href={`departments/${item.slug}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* <DepartmentsMenu /> */}

    </nav>
  )
}