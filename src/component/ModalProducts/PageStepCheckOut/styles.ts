import styled from "styled-components";

export const ContainerCheckOut = styled.div`
  font-weight: 700;
  color: ${(props) => props.theme.colors.backgroundSecundary};
  padding-top: 2.4rem;
`;

export const CheckPagamento = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
`;
export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  .input-Number {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;

    div:nth-child(1) {
      min-width: 22.8rem;
      margin-bottom: auto;
    }
    div:nth-child(2) {
      max-width: 9rem;
      margin-bottom: auto;
    }
  }

  .input-year {
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      margin-bottom: auto;
      max-width: 16rem;
    }
  }
`;
