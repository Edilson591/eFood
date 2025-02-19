import { Product } from "../store/ListSubItens";
import { formatPrice } from "../utils/utils";
import * as S from "./syles";

export interface PropsCardFood {
  title: string;
  $isCardModal?: boolean;
  imageFood: string;
  description?: string;
  descriptionModal?: string;
  price?: number
  onClick: (item: Product[]) => void;
}

const CardFood = ({
  title,
  description,
  imageFood,
  descriptionModal,
  onClick,
  price,
  $isCardModal = false
  ,
}: PropsCardFood) => {
  const handleClick = () => {
    const product: Product = {
        title, description: description || "", imageFood: imageFood,
        descriptionModal: descriptionModal || "",price: price || 0
    };
    onClick([product]);
  };
  return (
    <S.ContainerCardFood $isCardModal={$isCardModal}>
      <S.Image src={imageFood} alt={title} $isCardModal={$isCardModal}/>
      <S.ContainerText $isCardModal={$isCardModal}>
        <S.Title>{title}</S.Title>
        <S.Descrition $isCardModal={$isCardModal}>{$isCardModal ? descriptionModal : description}</S.Descrition>
        {$isCardModal && <p>Serve: de 2 a 3 pessoas</p>}

        <S.buttonCardFood onClick={handleClick}  type="button" $isCardModal={$isCardModal}>
          Adicionar ao carrinho
          {$isCardModal && " - " + formatPrice(price ?? 0)}
        </S.buttonCardFood>
      </S.ContainerText>
    </S.ContainerCardFood>
  );
};

export default CardFood;
