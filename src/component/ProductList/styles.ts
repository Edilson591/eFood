import styled from "styled-components";

export const ListItens = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
  row-gap: 4.8rem;
  max-width: 100%;
  justify-items: center;

  @media (max-width: 768px) {
    display: block;
    li {
      &:not(last-child) {
        margin-bottom: 4.8rem;
      }
    }
  }
`;
