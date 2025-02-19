import styled from "styled-components";

export const Input = styled.input`
  padding: 0.8rem;
  background-color: ${(props) => props.theme.colors.backgroundSecundary};
  color: #4b4b4b;
  font-weight: 700;
  font-size: 1.4rem;
  outline: none;
  border: none;
`;
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;
  
  Label {
    font-weight: 700;
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.backgroundSecundary};
  }
   

`;

