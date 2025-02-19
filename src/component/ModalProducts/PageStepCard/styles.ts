import styled from "styled-components";
import { buttonCardFood } from "../../CardFood/syles";

export const ListCarts = styled.ul`
  display: flex;
  margin-top: 2.4rem;
  margin-bottom: 4rem;
  flex-direction: column;
  width: 100%;
  gap: 1.6rem;
`;


export const ContainerTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.backgroundSecundary};
`;

export const ButtonLeft = styled(buttonCardFood)`
  margin-top: 1.6rem;
`;