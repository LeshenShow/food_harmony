import styled, { createGlobalStyle, keyframes, css } from "styled-components";

export const HeaderStyled = styled.header`
  grid-area: h;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: lightseagreen;
  position: sticky;
  top: 0px;
  z-index: 100;
`;
export const HeaderLogoStyled = styled.div`
  & img {
    width: 30px;
  }
`;
export const HeaderUserStyled = styled.div`
  & img {
    width: 30px;
  }
`;
