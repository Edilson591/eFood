import styled from "styled-components";

export const ContainerHeader = styled.header`
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  
  
`;

export const InformationHeader = styled.p`
  margin-top: 14rem;
  margin-bottom: 4rem;
  font-size: 3.6rem;
  max-width: 50.4rem;
  text-align: center;
  font-weight: 900;
  color: ${(props) => props.theme.colors.colorFontPrimary};
  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;
