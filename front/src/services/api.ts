import axios from 'axios'
import { ResponseCookies } from 'next/dist/compiled/@edge-runtime/cookies'


export const API = `https://dummyjson.com/products`


export const fetchAllProducts = (
  setList: any
) => {
  axios.get(`${API}`)
  .then(response => {
    const products = response.data.products
    setList(products)
    console.log('Lista de produtos carregada com sucesso')
  })
  .catch(error => {
    console.error('Erro ao carregar lista de departamentos: ', error)
  })
}
export const fetchCategories = (
  setList?: any
) => {
  axios.get(`${API}/categories`)
  .then(response => {
    setList(response.data)
    console.log('Lista de categorias carregada com sucesso')
  })
  .catch(error => {
    console.error('Erro ao carregar lista de departamentos: ', error)
  })
}
export const fetchComments = (
  setComments: any
) => {
  axios.get(`${API}/comments`)
    .then(response => {
      setComments(response.data)
      console.log('Comentários carregados com sucesso')
    })
    .catch(error => {
      console.error('Erro ao carregar comentários: ', error)
    })
}


export const filterByName = (
  Name: string,
  setList: any
) => {
  axios.get(`${API}/products/search?q=${Name}`)
  .then(response => {
    const products = response.data.products
    setList(products)
    console.log('Pesquisa por nome realizada com sucesso')
  })
  .catch(error => {
    console.error('Pesquisa por nome deu ruim: ', error)
  })
}
export const filterByCategory = (
  Category: string,
  setList: any
) => {
  axios.get(`${API}/category/${Category}`)
  .then(response => {
    const products = response.data.products
    setList(products)
    console.log('Pesquisa por categoria realizada com sucesso')
  })
  .catch(error => {
    console.error('Pesquisa por categoria deu ruim: ', error)
  })
}