'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';
import { APIContextType } from '@/types';
import { ContextProps } from '@/types/props';
import { fetchAllProducts, fetchCategories, fetchComments } from '@/services/api'

const initialState: APIContextType = {
  Products: [],
  Categories: [],
  Comments: []
};

const APIContext = createContext<APIContextType>(initialState);

export const APIProvider: React.FC<ContextProps> = ({ children }) => {
  let [Products, setProducts] = useState([])
  let [Categories, setCategories] = useState([])
  let [Comments, setComments] = useState([])

  useEffect(() => {
    fetchAllProducts(setProducts)
    fetchCategories(setCategories)
    fetchComments(setComments)
  }, [])

  return (
    <APIContext.Provider value={{ Products, Categories, Comments }}>
      {children}
    </APIContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useAPI = () => useContext(APIContext);