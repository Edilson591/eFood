import styled from "styled-components";

export const OrderContainer = styled.div`
  max-width: 350px;
  margin: 20px auto;
  padding: 20px;
  background-color:${(props) => props.theme.colors.colorFontPrimary};
  color: ${(props) => props.theme.colors.backgroundSecundary} ;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.backgroundThird};
  text-align: center;
`;

export const Section = styled.div`
  margin-top: 15px;
`;

export const Label = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;