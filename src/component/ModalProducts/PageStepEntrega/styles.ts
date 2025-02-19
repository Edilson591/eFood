import styled from "styled-components";

export const ContainerEntrega = styled.div`
  font-weight: 700;
  color: ${(props) => props.theme.colors.backgroundSecundary};
  padding-top: 2.4rem;
  `;

export const TitleEntregas = styled.h3`
    margin-bottom: 1.6rem;
    font-size: 1.6rem;
`
export const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: .8rem;

    .input-horizontal {
      display: flex;
      align-items:  center;
      justify-content: space-between;
      div {
         margin-bottom: auto;
        max-width: 16rem;
       }
    }
`

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: .8rem;

`