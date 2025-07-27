import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { adicionar } from '../../store/reducers/carrinho'
import { adicionarOuRemover } from '../../store/reducers/favorito'
import { RootReducer } from '../../store'

type Props = {
  produtoId: number
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor)

const ProdutoComponent = ({ produtoId }: Props) => {
  const dispatch = useDispatch()

  // Busca o produto pelo ID
  const produto = useSelector((state: RootReducer) =>
    state.produtos.itens.find((p) => p.id === produtoId)
  )

  // Verifica se está nos favoritos
  const estaNosFavoritos = useSelector((state: RootReducer) =>
    state.favorito.itens.some((f) => f.id === produtoId)
  )

  if (!produto) return null

  const handleFavoritar = () => {
    dispatch(adicionarOuRemover(produto))
  }

  const handleComprar = () => {
    dispatch(adicionar(produto))
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={handleFavoritar} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={handleComprar} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
