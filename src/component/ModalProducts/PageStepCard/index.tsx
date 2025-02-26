import { useDispatch, useSelector } from "react-redux";
import CardCarrinho from "../../CardCarrinho";
import { formatPrice } from "../../utils/utils";
import * as S from "./styles";
import { RootReducer } from "../../store";
import { removerCarrinho } from "../../store/reducers/carrinho";

interface PropsPageStepCard {
  onClick: () => void;
}

const PageStepCard = ({ onClick }: PropsPageStepCard) => {
  // const { carrinho, removerCarrinho } = useListSubItens();
  const dispatch = useDispatch();
  const { carrinho } = useSelector((state: RootReducer) => state.carrinho);
  const currentPrice = carrinho.reduce(
    (acc, item) => acc + Number(item.preco),
    0
  );
  return (
    <>
      <S.ListCarts>
        {carrinho.map((cart, index) => (
          <li key={index}>
            <CardCarrinho
              title={cart.nome}
              price={cart.preco}
              imgCard={cart.foto}
              onClick={() => {
                dispatch(removerCarrinho(cart.idItem || 0));
              }}
            />
          </li>
        ))}
      </S.ListCarts>
      <S.ContainerTotal>
        <p>Valor total</p>
        <span>{formatPrice(currentPrice)}</span>
      </S.ContainerTotal>
      <S.ButtonLeft onClick={onClick}>Continuar com a entrega</S.ButtonLeft>
    </>
  );
};

export default PageStepCard;
