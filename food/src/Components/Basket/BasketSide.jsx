import { NavLink } from "react-router-dom";
import { BasketProductStyled, BasketStyled } from "../../styles/BasketStyle";

export const BasketSide = (props) => {
  let product = props.basket;

  let test = product.map((elem) => {
    console.log("Basket", product);
    console.log("test map", elem.name);

    return <BasketProduct product={elem} key={elem.id} />;
  });
  return (
    <BasketStyled>
      <span>Basket</span>
      <div>{test}</div>
      {props.totalCost ? (
        <NavLink to="/basket">
          <span>Go to basket</span>
          <span>{props.totalCost}</span>
        </NavLink>
      ) : (
        <span>Empty</span>
      )}
    </BasketStyled>
  );
};

const BasketProduct = (props) => {
  console.log("BasketProduct", props.product);
  const name = props.product.name;
  const qty = props.product.qty;
  const cost = qty * props.product.price.currentPrice;

  return (
    <BasketProductStyled>
      <span>{name},</span>
      <span>{qty}шт</span>
      <span>{cost} ₽</span>
    </BasketProductStyled>
  );
};
