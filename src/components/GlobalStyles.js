import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`

html {
    background: ${({ theme }) => theme.background};
    transition: all 0.50s linear;
  }

  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  } 
  .navItem {
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  .text-container {
    background: ${({ theme }) => theme.secondary};
    transition: all 0.50s linear;
    border: ${({ theme }) => theme.border}
  }

  .button1{
    background: ${({ theme }) => theme.button1Color};
    color: ${({ theme }) => theme.button1Text}
  }

  .button1:hover {
    background-color: ${({theme}) => theme.buttonHoverColor};
  }
  .button2 {
    background: ${({ theme }) => theme.button2Color};
    color: ${({ theme }) => theme.button2Text}
  }

  .button2:hover{
    background-color: ${({theme}) => theme.buttonHoverColor};
  }

  .button3 {
    background: ${({ theme }) => theme.button3Color};
    color: ${({ theme }) => theme.button3Text}
  }

  .button3:hover{
    background-color: ${({theme}) => theme.buttonHoverColor};
  }

  .nav-link:hover {
    color: ${({ theme }) => theme.hoverColor}
  }
  navItem nav-link active {
    color: ${({ theme }) => theme.activeTextColor};
    background: ${({ theme }) => theme.activeBackground}
  }
  `;
