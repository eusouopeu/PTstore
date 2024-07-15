'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';
import { FilterContextType } from '@/types';
import { ContextProps } from '@/types/props';
import { filterByName, filterByCategory, fetchAllProducts } from '@/services/api'

const initialState: FilterContextType = {
  Name: '',
  Category: '',
  MainList: [],
  filterName: (e: any) => {},
  filterCategory: (item: any) => {},
};

const FilterContext = createContext<FilterContextType>(initialState);

export const FilterProvider: React.FC<ContextProps> = ({ children }) => {
  const [Name, setName] = useState('');
  const [Category, setCategory] = useState<string>('');
  const [MainList, setMainList] = useState<any[]>([]);

  const filterName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const filterCategory = (item: string) => {
    setCategory(item);
    console.log(item)
  };

  useEffect(() => {
    fetchAllProducts(setMainList)
  }, [])

  useEffect(() => {
    if (Name !== '') {
      console.log(Name)
      filterByName(Name, setMainList)
    } else if (Category !== '') {
      filterByCategory(Category, setMainList)
    } else {
      fetchAllProducts(setMainList)
    }
  }, [Name, Category])

  return (
    <FilterContext.Provider value={{ Name, Category, MainList, filterName, filterCategory }}>
      {children}
    </FilterContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useFilter = () => useContext(FilterContext);
