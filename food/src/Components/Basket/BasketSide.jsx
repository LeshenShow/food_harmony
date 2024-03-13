import { NavLink } from "react-router-dom";
import { BasketSideStyled } from "../../styles/BasketStyle";
import { BasketProduct } from "./BasketProduct";

export const BasketSide = (props) => {
  const product = props.basket;
  const basketProduct = product.map((elem) => {
    return (
      <BasketProduct
        product={elem}
        key={elem.id}
        addProduct={props.addProduct}
        deleteQty={props.deleteQty}
        deleteProduct={props.deleteProduct}
      />
    );
  });
  return (
    <BasketSideStyled>
      <span>Basket</span>
      <div>{basketProduct}</div>
      {props.totalCost ? (
        <NavLink to="/basket">
          <span>Go to basket</span>
          <span>{props.totalCost}</span>
        </NavLink>
      ) : (
        <span>Empty</span>
      )}
    </BasketSideStyled>
  );
};
