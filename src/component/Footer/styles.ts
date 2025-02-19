import styled from "styled-components";
import { Container } from "../../styles/global";

export const ContainerFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.backgroundSecundary};
  padding-top: 4rem;
  color: ${({ theme }) => theme.colors.colorFontPrimary};
  
  ${Container} {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
  }
`;

export const InformationFooter = styled.p`
  font-weight: 400;
  max-width: 48rem;
  margin-bottom: 4rem;
  font-size: 1rem;
  text-align: center;
`;

export const ListContacts = styled.ul`
  display: flex;
  margin-top: 3.6rem;
  margin-bottom: 8rem;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;

export const List = styled.li``;

export const LinkContacts = styled.a``;

export const IconContacts = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;
