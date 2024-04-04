import styled from "styled-components";
import { Product } from "./ProductStyle";

export const ModalStyled = styled.div`
  /* grid-area: ${(props) => props.grid}; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalBackgroundStyled = styled.div`
  background-color: rgba(211, 211, 211, 60%);
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0px;
  top: 0px;
`;
export const ModalContentStyled = styled.div`
  position: fixed;
  top: 10%;
  height: 80%;
  width: 30%;
`;
export const ProductModalStyled = styled(Product)`
  /* width: 100%;
  height: 100%; */
`;
