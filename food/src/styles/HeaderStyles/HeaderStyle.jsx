import styled, { createGlobalStyle, keyframes, css } from "styled-components";

export const HeaderStyled = styled.header`
  grid-area: h;
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: lightseagreen;
  position: sticky;
  top: 0px;
  z-index: 2;
  & > div {
    display: flex;
    margin-right: 50px;
    margin-left: 50px;
  }
`;
export const HeaderLogoStyled = styled.div`
  font-size: 2em;
  & img {
    width: 30px;
  }
`;
export const HeaderUserStyled = styled.div`
  & img {
    width: 30px;
  }
`;
export const HeaderSearchStyled = styled.div`
  & img {
    width: 30px;
  }
`;
