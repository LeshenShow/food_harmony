import {
  ModalBackgroundStyled,
  ModalContentStyled,
  ModalStyled,
} from "../../../../styles/ModalStyle";
import { Product } from "./Product";

export const Modal = (props) => {
  return (
    <ModalStyled>
      <ModalBackgroundStyled
        onClick={() => {
          props.setIsActiveModal(false);
        }}
      ></ModalBackgroundStyled>
      <ModalContentStyled>
        <Product
          product={props.modalContent}
          addProduct={props.addProduct}
          isModal={true}
        />
      </ModalContentStyled>
    </ModalStyled>
  );
};
