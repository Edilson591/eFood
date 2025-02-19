import styled from "styled-components";
import { PropsCardFood } from ".";

export const ContainerCardFood = styled.div<Pick<PropsCardFood, "$isCardModal">>`
  display: flex;
  flex-direction: ${(props) => (props.$isCardModal ? "row" : "column")};
  align-items: flex-start;
  max-width: ${(props) => (props.$isCardModal ? "102.4rem" : "32rem")};
  padding: 0.8rem;
  gap: ${(props) => (props.$isCardModal ? "2.4rem" : "")};
  font-size: 1.4rem;
  font-weight: 400;

  background-color: ${(props) => props.theme.colors.colorFontPrimary};
  color: ${(props) => props.theme.colors.backgroundSecundary};
`;

export const Image = styled.img<Pick<PropsCardFood, "$isCardModal">>`
width: ${(props) => (props.$isCardModal ? "28rem" : "100%")}; 
height: ${(props) => (props.$isCardModal ? "28rem" : "100%")};
  object-fit: cover;
  object-position: center;
`;

export const Title = styled.h3`
  font-size: 1.6rem;
  margin: 0.8rem 0;
`;

export const Descrition = styled.p<Pick<PropsCardFood, "$isCardModal">>`
  margin-bottom: ${(props) => (props.$isCardModal ? "3.2rem" : "0.8rem")};
`;

export const buttonCardFood = styled.button<Pick<PropsCardFood, "$isCardModal">>`
  width: 100%;
  max-width: ${(props) => (props.$isCardModal ? "22rem" : "auto")};
  margin-top: ${(props) => (props.$isCardModal ? "1.6rem" : "auto")};
  border: none;
  padding: 0.4rem;
  color: ${(props) => props.theme.colors.colorFontPrimary};
  background-color: ${(props) => props.theme.colors.backgroundSecundary};
  font-weight: 700;
  font-size: 1.4rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.colorFontPrimary};
    background-color: ${(props) => props.theme.colors.backgroundPrimary};
    transition: all 0.5s ease-in-out;
  }
`;

export const ContainerText = styled.div<Pick<PropsCardFood, "$isCardModal">>`
  display: ${(props) => (props.$isCardModal ? "flex" : "block")};
  flex-direction: column;
`;

