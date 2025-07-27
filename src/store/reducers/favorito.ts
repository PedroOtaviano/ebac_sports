import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

interface FavoritoState {
  itens: Produto[]
  estaNoFavorito: boolean
}

const initialState: FavoritoState = {
  itens: [],
  estaNoFavorito: false
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    adicionarOuRemover: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const existe = state.itens.find((p: { id: any }) => p.id === produto.id)
      if (existe) {
        state.itens = state.itens.filter(
          (p: { id: any }) => p.id !== produto.id
        )
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionarOuRemover } = favoritoSlice.actions
export default favoritoSlice.reducer

// function favoritar(produto: Produto) {
//   if (favoritos.find((p: { id: any }) => p.id === produto.id)) {
//     const favoritosSemProduto = favoritos.filter((p: { id: any }) => p.id !== produto.id)
//     setFavoritos(favoritosSemProduto)
//   } else {
//     setFavoritos([...favoritos, produto])
//   }
// }
