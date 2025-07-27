// src/store/reducers/produtos.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type ProdutosState = {
  itens: Produto[]
}

const initialState: ProdutosState = {
  itens: []
}

const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {
    preencher: (state, action: PayloadAction<Produto[]>) => {
      state.itens = action.payload
    }
  }
})

export const { preencher } = produtosSlice.actions
export default produtosSlice.reducer
