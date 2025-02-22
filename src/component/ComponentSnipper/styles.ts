import styled from "styled-components";

export const Snipper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 5rem;
  height: 5rem;
  border: 2px solid ${({ theme }) => theme.colors.colorFontPrimary};
  border-top-color: transparent;
  border-radius: 50%;
  animation: animateSpinner 1s linear infinite;


  @keyframes animateSpinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;

export const ContainerSpipper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
