import {  ProductFood } from "../store/ListSubItens";
import { formatPrice } from "../utils/utils";
import * as S from "./syles";

export interface PropsCardFood {
  title: string;
  $isCardModal?: boolean;
  imageFood: string;
  descricao: string
  id?:number;
  porcao: string
  price?: number
  onClick: (item: ProductFood[]) => void;
}

const CardFood = ({
  title,
  imageFood,
  descricao,
  id,
  porcao,
  onClick,
  price,
  $isCardModal = false
  ,
}: PropsCardFood) => {
  const handleClick = () => {
    const product: ProductFood = {
      nome: title, foto: imageFood, descricao: descricao || "", preco: price || 0,
      id: id || 0,
      porcao: porcao
    };
    onClick([product]);
  };
  return (
    <S.ContainerCardFood $isCardModal={$isCardModal}>
      <S.Image src={imageFood} alt={title} $isCardModal={$isCardModal}/>
      <S.ContainerText $isCardModal={$isCardModal}>
        <S.Title>{title}</S.Title>
        <S.Descrition $isCardModal={$isCardModal}>{descricao}</S.Descrition>
        {$isCardModal && <p>Serve: de {porcao}</p>}

        <S.buttonCardFood onClick={handleClick}  type="button" $isCardModal={$isCardModal}>
          Adicionar ao carrinho
          {$isCardModal && " - " + formatPrice(price ?? 0)}
        </S.buttonCardFood>
      </S.ContainerText>
    </S.ContainerCardFood>
  );
};

export default CardFood;
