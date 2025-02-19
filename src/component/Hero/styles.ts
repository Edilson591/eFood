import styled from "styled-components";
import { PropsHero } from ".";

export const ContainerHero = styled.div<PropsHero>`
  display: block;
  background-image: url(${({$background}) =>  $background });
  background-size: cover;
  /* background-repeat: no-repeat; */
  /* width: 100vw; */
  /* height: 100vh; */
  min-width: 400px;


`
