import styled from "styled-components";

export const ContainerCardCarrinho = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundSecundary};
  padding: 0.8rem;
  display: flex;
  gap: 0.8rem;
  position: relative;
  color: ${(props) => props.theme.colors.colorFontPrimary};
`;

export const ImageCardCarrinho = styled.img`
  width: 8rem;
  height: 8rem;
  margin-bottom: 0.4rem ;
`;

export const ContainerCarrinhoText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;
`;

export const TitleCardCarrinho = styled.h3`
  font-weight: 900;
  font-size: 1.8rem;
`;

export const PriceCardCarrinho = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
`;

export const ButtonDeleteItem = styled.button`
  position: absolute;
  bottom: 15px;
  right: 15px;
  border: none;
  background: transparent;
  cursor: pointer;
`;
