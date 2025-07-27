import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'
import favoritoReducer from './reducers/favorito'
import produtosReducer from './reducers/produtos'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favorito: favoritoReducer,
    produtos: produtosReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
