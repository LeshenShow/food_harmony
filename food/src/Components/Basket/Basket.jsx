import { NavLink } from "react-router-dom";
import {
  BasketBackgroundStyled,
  BasketContentStyled,
  BasketStyled,
} from "../../styles/BasketStyles/BasketStyle";
import { BasketProduct } from "./BasketProduct";

export const Basket = (props) => {
  let product = props.basket;
  console.log(props);
  const basketProduct = product.map((elem) => {
    return (
      <BasketProduct
        product={elem}
        key={elem.id}
        addProduct={props.addProduct}
        deleteQty={props.deleteQty}
        totalCost={props.totalCost}
        deleteProduct={props.deleteProduct}
      />
    );
  });
  let cost = props.totalCost;
  return (
    <BasketStyled>
      <BasketBackgroundStyled></BasketBackgroundStyled>
      <BasketContentStyled>
        <div>
          <NavLink to={`/goods/${props.activeCategory}`}>
            Продолжить покупки
          </NavLink>
        </div>
        <div>{basketProduct}</div>
        <button>
          <NavLink to={`/payment/*`}>
            <div>To payment:{cost}</div>
          </NavLink>
        </button>
      </BasketContentStyled>
    </BasketStyled>
  );
};
