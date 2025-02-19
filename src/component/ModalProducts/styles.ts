import styled from "styled-components";
import { buttonCardFood } from "../CardFood/syles";

export const ModalOverlay = styled.div<{ $isVisible: boolean }>`
  display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  z-index: 100000;
`;

export const ContentModalProducts = styled.div`
  padding: 2.4rem;
  position: relative;
  background-color: ${(props) => props.theme.colors.colorFontPrimary};
`;

export const ContentModalCart = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  padding: 0.8rem;
  background-color: ${(props) => props.theme.colors.colorFontPrimary};
  box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.1);
  z-index: 999;
  transition: transform 0.3s ease-in-out;
  overflow-y: auto;

  .spinner {
    width: 1.6rem;
    height: 1.6rem;
    border: 2px solid ${(props) => props.theme.colors.colorFontPrimary};
    border-top: 2px solid transparent;
    border-radius: 50%;
    display: inline-block;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const ButtonCloseModal = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  background: transparent;
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
`;
export const ButtonOrder = styled(buttonCardFood)`
  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
  &:nth-child(1) {
    margin-top: 2.4rem;
  }
`;

export const ContainerEntrega = styled.div`
  font-weight: 700;
  /* font-size: 1.6rem; */
  color: ${(props) => props.theme.colors.backgroundSecundary};
  padding-top: 2.4rem;
`;

export const TitleEntregas = styled.h3`
  margin-bottom: 1.6rem;
  font-size: 1.6rem;
`;
export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.backgroundSecundary};

  .input-horizontal {
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      margin-bottom: auto;
      max-width: 16rem;
    }
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const Spinner = styled.div;

// export const ContentModal = styled.
