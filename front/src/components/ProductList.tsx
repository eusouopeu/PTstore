import React from 'react'
import { useFilter } from '@/contexts/FilterContext'
import Cards from '@/components/Cards'


export default function ProductList() {
  const { MainList } = useFilter()

  return (
    <section>
      {MainList.length > 1 && MainList.map((item) => (
        <li key={item.id}>
          <Cards
            id={item.id}
            thumbnail={item.thumbnail}
            title={item.title}
            brand={item.brand}
            rating={item.rating}
            price={item.price}
            stock={item.stock}
            category={item.category}
          />
        </li>
      ))}
    </section>
  )
}
