import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'

import { store } from './store'
import { preencher } from './store/reducers/produtos'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => {
        dispatch(preencher(res))
      })
  }, [dispatch])

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos />
      </div>
    </>
  )
}

export default App
