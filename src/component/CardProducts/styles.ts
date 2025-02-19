import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerCard = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundThird};
  position: relative;
  max-width: 44rem;
  font-weight: 700;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  max-height: 20rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Tag = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Tags = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.backgroundSecundary};
  padding: 0.6rem 0.4rem;
  line-height: 10px;
  background-color: ${({ theme }) => theme.colors.colorFontPrimary};
`;

export const ContentText = styled.div`
  padding: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.colorFontPrimary};
  border-top: none;
  max-height: 200px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.6rem;

  .container-Best-Food {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.colorFontPrimary};
    span {
      display: flex;
      align-items: center;
      gap: 0.8rem;
    }
  }
`;

export const Description = styled.p`
  display: block;
  color: ${({ theme }) => theme.colors.colorFontPrimary};
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 20px;
  margin: 1.6rem 0;
`;

export const TitleProducts = styled.h3`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.colorFontPrimary};
`;

export const ButtonLinkCard =styled(Link)`
 font-size: 1.4rem;
 display: inline-block;
  color: ${({ theme }) => theme.colors.backgroundSecundary};
  padding: 0.6rem 0.4rem;
  line-height: 10px;
  background-color: ${({ theme }) => theme.colors.colorFontPrimary};
  cursor: pointer;
  transition: all .5s ease-in-out;
  
  &:hover {
    color: ${({ theme }) => theme.colors.colorFontPrimary};
    background-color: ${({ theme }) => theme.colors.backgroundSecundary};
    transition: all .5s ease-in-out;
  }
`