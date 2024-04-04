import { NavLink } from "react-router-dom";

export const EmptyBasket = (props) => {
  return (
    <div className="emptyBasket">
      <span>Корзина пуста</span>
      <img
        src="https://www.svgrepo.com/show/477434/basket-free-material.svg"
        alt=""
        style={{ width: "100px" }}
      />
    </div>
  );
};
export const FillBasket = (props) => {
  return (
    <NavLink to="/basket">
      <div className="fillBasket">
        <span>Перейти к оплате </span>
        <span>{props.totalCost}</span>
        {props.totalCost !== props.initialCost && (
          <span className="initialCost">{props.initialCost}</span>
        )}
        <span>₽</span>
        <img
          src="https://www.svgrepo.com/show/533592/arrow-narrow-circle-broken-down.svg"
          alt=""
        />
      </div>
    </NavLink>
  );
};
