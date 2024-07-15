export type FilterAny = (item: any) => void
export type FilterString = (item: string) => void
export type ListTypes = 'Todos' | 'Ofertas' | 'VejaTambem' | 'VocePodeGostar' | 'VistosRecentemente' | 'OutrosProdutos' | 'ProdutosSimilares'
export type ProductCategories = '' | 'Hardware' | 'Celular e Smartphone' | 'Periféricos' | 'Teclado e Mouse' | 'Computadores' | 'Placa de Vídeo' | 'Monitores' |  'Consoles e Games' | 'Áudio' | 'TV' | 'Eletrodomésticos' | 'Eletroportáteis' | 'Smart Home' | 'Ferramentas' | 'Ar e Ventilação' | 'Segurança' | 'Notebook' | 'Câmeras e Drones' | 'Conectividade' | 'Processadores' | 'Geek' | 'Espaço Gamer' | 'Escritório'
export type CarouselTypes = 'VocePodeGostar' | 'VistosRecentemente' | 'OutrosProdutos' | 'ProdutosSimilares'


export interface CartItem {
  id: number,
  name: string,
  price: number,
  mainImg: any,
  [key: string]: any
}
export interface FilterContextType {
  Name: any
  Category: string
  MainList: any[]
  filterName: (e: any) => void
  filterCategory: (item: any | any[]) => void
}
export interface APIContextType {
  Products: any[],
  Categories: any[],
  Comments: any[]
}
export interface UserContextType {
  UserMail: string,
  UserPassword: string,
  CartList: CartItem[],
  LogStatus: boolean,
  authUser: (mail: string, password: string) => void,
  addToCartList: (item: any) => void,
  removeFromCartList: (item: any) => void,
  changeLogStatus: () => void,
}
export interface ModalContextType {
  CreateProductModal: boolean,
  EditProductModal: boolean,
  EditListModal: boolean,
  DepartmentsModal: boolean,
  UserModal: boolean,
  toggleCreateProductModal: () => void,
  toggleEditProductModal: () => void,
  toggleEditListModal: () => void,
  toggleDepartmentsModal: () => void,
  toggleUserModal: () => void
}