import styled, { createGlobalStyle, keyframes, css } from "styled-components";

export const SearchResultStyled = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 35%;
  width: 30%;
  top: 50px;
  background-color: red;
  z-index: 3;
  &.hidden {
    display: none;
  }
`;
export const SearchFindProductStyled = styled.div`
  font-size: 1em;
  background-color: pink;
  display: flex;
`;
