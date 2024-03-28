import styled, { createGlobalStyle, keyframes, css } from "styled-components";
export const NavbarAreaStyled = styled.div`
  grid-area: n;
`;
export const NavbarStyled = styled.nav`
  background-color: #d3d3d375;
  /* grid-area: n; */
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 100px;
  left: 10%;
  width: 200px;
  border-radius: 20px;
  & a {
    text-decoration: none;
    color: black;
    font-size: 1em;
  }
  & .activeFilterCategory {
    background-color: #c189ce;
  }
`;
export const NavbarElementStyle = styled.div`
  display: flex;

  align-items: center;
  justify-content: start;
  background-color: pink;
  margin: 5px;
  padding-left: 10px;
  height: 50px;
  border-radius: 20px;
  &:hover {
    background-color: #df9dd6;
  }
  z-index: 10;
`;
