import React from 'react'
import Link from 'next/link'
import { SearchBar } from './SearchBar'
import NavBar from './NavBar'
import { UserMenu } from './ToggleMenus'
import { ChatBubbleLeftEllipsisIcon, HomeIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'


export default async function Header() {

  return (
    <section>
      <div className='header bg-zinc-900'>
        <div className='flex content-baseline justify-between'>
          <Link className='flex flex-col w-fit text-white text-center text-[8px] lg:text-[13px]' href="/">
            <h2 className='text-base'>PT Store</h2>
            <p className='text-xs'>Sua dívida é a nossa alegria!</p>
          </Link>

          {/* <SearchBar desktop /> */}

          <nav> <ul className='flex w-fit gap-[18px]'>
            <li>
              <Link href='/'>
                <HomeIcon className='lg:w-[40px] lg:h-[40px]' />
              </Link>
            </li>

            <li>
              {/* <UserMenu /> */}
            </li>

            <li>
              <Link href='/carrinho'>
                <ShoppingCartIcon className='lg:w-[40px] lg:h-[40px]' />
              </Link>
            </li>

            <li>
            <Link href='/chat'>
              <ChatBubbleLeftEllipsisIcon className='lg:w-[40px] lg:h-[40px]' />
            </Link>
            </li>
          </ul> </nav>
        </div>

        <SearchBar />
      </div>

      <NavBar />

    </section>
  )
}
