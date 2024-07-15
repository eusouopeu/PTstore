export const departmentsList = [
  'Hardware',
  'Celular e Smartphone',
  'Periféricos',
  'Teclado e Mouse',
  'Computadores',
  'Placa de Vídeo',
  'Monitores',
  'Consoles e Games',
  'Áudio',
  'TV',
  'Eletrodomésticos',
  'Eletroportáteis',
  'Smart Home',
  'Ferramentas',
  'Ar e Ventilação',
  'Segurança',
  'Notebook',
  'Câmeras e Drones',
  'Conectividade',
  'Processadores',
  'Geek',
  'Espaço Gamer',
  'Escritório'
]

export const userOptionsList = [
  'Entrar',
  'Minha Conta',
  'Favoritos',
  'Meus Pedidos',
  'Lista de Desejos',
  'Cadastro'
]

export const titleList = (tipo: any) => {
  switch (tipo) {
    case 'VocePodeGostar':
      return 'Você pode gostar'
    case 'VistosRecentemente':
      return 'Vistos recentemente'
    case 'OutrosProdutos':
      return 'Outros produtos'
    case 'ProdutosSimilares':
      return 'Produtos similares'
    case 'ConhecaTambem':
      return 'Conheça também'
    case 'Ofertas':
      return 'Ofertas e Promoções'
  }
}

export const contactInfoList = [
  {
    info_type: 'Telefone',
    info: '(71) 3002-8922'
  },
  {
    info_type: 'E-mail',
    info: 'contact@ptstore.com.br'
  },
  {
    info_type: 'Endereço',
    info: 'Av. Imaginária, 1234 - Salvador, BA - 40.392-200'
  },
]