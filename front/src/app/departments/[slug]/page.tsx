'use client'
import React from 'react'
import { useFilter } from '@/contexts/FilterContext'
import ProductList from '@/components/ProductList'


export default function Page({ params }: { params : { slug: string } }) {
  const { filterCategory } = useFilter()
  filterCategory(params.slug)

  return (
    <main>
      <ProductList />
    </main>
  )
}
