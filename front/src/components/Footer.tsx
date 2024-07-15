'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { API, fetchCategories } from '@/services/api'
import { useAPI } from '@/contexts/APIContext'
import { contactInfoList } from '@/lib/lists'


export default function Footer() {
  const { Categories } = useAPI()


  return (
    <section className='footer bg-zinc-900'>
      <nav>
        <legend> Categorias </legend>
        <ul>

          {Categories.map((item: any, index: number) => {

            return (
              <li key={index}> 
                <Link className='hover:underline hover:underline-offset-4 transition-all duration-500'  href={`/departaments/${item.slug}`}> {item.name} </Link>
              </li>
            )
          })}
          
        </ul>
      </nav>
      
      <div className='flex flex-col gap-[22px]'>
        <nav>
          <legend> Deixe-nos ajudar você </legend>
          <ul>
            <li><Link className='hover:underline hover:underline-offset-4' href='/conta'> Sua conta </Link></li>
            <li><Link className='hover:underline hover:underline-offset-4' href='/Frete&Entrega'> Frete e prazo de entrega </Link></li>
            <li><Link className='hover:underline hover:underline-offset-4' href='/Devoluções&Reembolsos'> Devoluções e reembolsos </Link></li>
            <li><Link className='hover:underline hover:underline-offset-4' href='/Conteúdo&Dispositivos'> Gerencie seu conteúdo e dispositivos </Link></li>

            <li> <ul>
              <li><Link className='hover:underline hover:underline-offset-4' href='/FAQ'> FAQ </Link></li>
              <li><Link className='hover:underline hover:underline-offset-4' href='/Orientações'> Orientações </Link></li>
            </ul> </li>
          </ul>
        </nav>
      </div>

      <div className='flex flex-col gap-[31px] lg:gap-[77px]'>
        <ul className='flex flex-col gap-[20px]'>
          {contactInfoList &&
            contactInfoList.map((item, index) => (
              <li key={index}>
                <table>
                  <thead>
                    <tr>
                      <th className='font-bold'> {item.info_type}: </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> {item.info} </td>
                    </tr>
                  </tbody>
                </table>
              </li>
            ))
          }
        </ul>
        <Link className='underline font-black text-[1rem] lg:text-[32px]' href='/criarproduto'> CRIAR PRODUTO </Link>
      </div>
    </section>
  )
}