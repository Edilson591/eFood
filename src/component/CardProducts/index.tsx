import * as S from "./styles";
import svgEstrela from "../../assets/estrela.svg";


interface PropsCardProducts {
  id: number;
  title: string;
  productImg: string;
  description: string;
  destacado?: boolean;
  assessment: number;
  links: string;
  tags: string;
}

const CardProducts = ({
  title,
  description,
  productImg,
  destacado,
  links,
  assessment,
  tags,
}: PropsCardProducts) => {
  return (
    <S.ContainerCard>
      <S.Image src={productImg} alt={title} />
      <S.Tag>
        {destacado && <S.Tags>Destaque da semana</S.Tags>}
        <S.Tags>{tags}</S.Tags>
      </S.Tag>
      <S.ContentText>
        <S.ContainerTitle>
          <S.TitleProducts>{title}</S.TitleProducts>
          <div className="container-Best-Food">
            <span>
              {assessment}
              <img src={svgEstrela} alt="iconi estrela" />
            </span>
          </div>
        </S.ContainerTitle>
        <S.Description>{description}</S.Description>
        <S.ButtonLinkCard to={links}>Saiba mais</S.ButtonLinkCard>
      </S.ContentText>
    </S.ContainerCard>
  );
};

export default CardProducts;
