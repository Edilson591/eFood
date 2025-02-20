import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: "Roboto", serif;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${({theme}) => theme.colors.backgroundPrimary};
  }

`


export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;


  @media (max-width: 1280px) {
    max-width: 90%;
   }
  
  @media (max-width: 1024px) { 
    width: 80%;
  }
`
