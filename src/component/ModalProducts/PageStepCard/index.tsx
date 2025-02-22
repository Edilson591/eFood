import CardCarrinho from "../../CardCarrinho";
import { useListSubItens } from "../../store/ListSubItens";
import { formatPrice } from "../../utils/utils";
import * as S from "./styles";

interface PropsPageStepCard {
    onClick: () => void
}

const PageStepCard = ({onClick}:PropsPageStepCard) => {
  const { carrinho, removerCarrinho } = useListSubItens();
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
              onClick={() => removerCarrinho(cart.id)}
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
