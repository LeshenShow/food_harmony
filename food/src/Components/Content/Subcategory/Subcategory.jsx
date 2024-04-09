import {
  SubcategoryElementsStyled,
  SubcategoryRefStyled,
  SubcategoryStyled,
} from "../../../styles/SubcategoryStyle";
import { Product } from "./Product/Product";
import { forwardRef } from "react";

export const Subcategory = forwardRef((props, ref) => {
  // console.log(ref);
  let products = props.data
    .filter((product) => product.subcategory === props.header)
    .map((elem) => {
      return (
        <Product
          key={elem.id}
          product={elem}
          addProduct={props.addProduct}
          setIsActiveModal={props.setIsActiveModal}
          setModalContent={props.setModalContent}
        />
      );
    });
  return (
    <div>
      <SubcategoryRefStyled ref={ref}></SubcategoryRefStyled>
      <SubcategoryStyled>{props.header}</SubcategoryStyled>
      <SubcategoryElementsStyled>{products}</SubcategoryElementsStyled>
    </div>
  );
});
