import styled from "styled-components";
import { ButtonLinkCard } from "../../../component/CardProducts/styles";

export const ContainerHeaderProduct = styled.div`
  padding-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 1.8rem;
  font-weight: 900;
  color: ${(props) => props.theme.colors.colorFontPrimary};
  margin-bottom: 6.4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }

  span {
    white-space: nowrap;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;

  img {
    margin-left: 4rem;
    @media (max-width: 768px) {
      margin-left: 0;
    }
  }
`;

export const WrapperImg = styled.div`
  position: relative;
  width: 100%;
  max-height: 28rem;
  overflow-y: hidden;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #00000080;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 28rem;
  object-fit: cover;
  object-position: center center;
  overflow: hidden;
`;

export const ContainerTitle = styled.div`
  color: ${({ theme }) => theme.colors.backgroundThird};
  @media (max-width: 768px) {
      font-size: 2rem;
    
    }
`;

export const ContainerTypesFood = styled.div`
  display: flex;
  gap: 0.8rem;
  position: absolute;
  top: 25px;
`;

export const TypeFood = styled.h3`
  font-weight: 100;
  font-size: 3.2rem;
`;

export const Title = styled.h2`
  position: absolute;
  bottom: 32px;
  font-weight: 900;
  font-size: 3.2rem;
`;

export const ListsFood = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 3.2rem;
  justify-items: center;
`;

export const ButtonModalLeft = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  span {
    display: inline-block;
    font-size: 1.8rem;
    font-weight: 900;
    color: ${(props) => props.theme.colors.colorFontPrimary};
  }
`;

export const LinkRestaurante = styled(ButtonLinkCard)`
  background-color: transparent;
  color:${({ theme }) => theme.colors.colorFontPrimary};

`
