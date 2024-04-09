import {
  ProductModalBackgroundStyled,
  ProductModalContentStyled,
  ProductModalStyled,
} from "../../../../styles/ProductModalStyle";
import { Product } from "./Product";

export const ProductModal = (props) => {
  return (
    <ProductModalStyled>
      <ProductModalBackgroundStyled
        onClick={() => {
          props.setIsActiveModal(false);
        }}
      ></ProductModalBackgroundStyled>
      <ProductModalContentStyled>
        <Product
          product={props.modalContent}
          addProduct={props.addProduct}
          isModal={true}
        />
      </ProductModalContentStyled>
    </ProductModalStyled>
  );
};
