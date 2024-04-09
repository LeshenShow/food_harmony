import styled from "styled-components";
import { Product } from "./ProductStyle";

export const ProductModalStyled = styled.div`
  /* grid-area: ${(props) => props.grid}; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProductModalBackgroundStyled = styled.div`
  background-color: rgba(211, 211, 211, 60%);
  position: fixed;
  height: 100vh;
  width: 100%;
  left: 0px;
  top: 0px;
  z-index: 10;
`;
export const ProductModalContentStyled = styled.div`
  position: fixed;
  top: 10%;
  height: 80vh;
  width: 30%;
  min-width: 500px;
  left: 35vw;
  z-index: 10;
`;
