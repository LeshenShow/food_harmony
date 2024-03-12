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
      // console.log("product", elem, typeof elem);
      return (
        <Product key={elem.id} product={elem} addProduct={props.addProduct} />
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
