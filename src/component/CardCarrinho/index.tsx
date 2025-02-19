import * as S from "./styles";
import IconDeleteItem from "../../assets/lixeira-de-reciclagem 1.svg";

interface PropsCardCarrinho {
  imgCard: string;
  title: string;
  price: number;
  onClick: () => void;
}

const CardCarrinho = ({
  title,
  imgCard,
  price,
  onClick,
}: PropsCardCarrinho) => {
  return (
    <S.ContainerCardCarrinho>
      <S.ImageCardCarrinho src={imgCard} alt={title} />
      <S.ContainerCarrinhoText>
        <S.TitleCardCarrinho>{title}</S.TitleCardCarrinho>
        <S.PriceCardCarrinho>{price}</S.PriceCardCarrinho>
      </S.ContainerCarrinhoText>
      <S.ButtonDeleteItem
        onClick={onClick}
        type="button"
      >
        <img src={IconDeleteItem} alt="icon delete itens" />
      </S.ButtonDeleteItem>
    </S.ContainerCardCarrinho>
  );
};

export default CardCarrinho;
