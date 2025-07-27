import { useSelector } from 'react-redux'
import Produto from '../components/Produto'
import * as S from './styles'
import { RootReducer } from '../store'

const ProdutosComponent = () => {
  // Busca todos os produtos do estado global
  const produtos = useSelector((state: RootReducer) => state.produtos.itens)

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto key={produto.id} produtoId={produto.id} />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
