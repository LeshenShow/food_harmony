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
      {/* <a> */}
      <div>
        {/* <div onClick={() => props.testfunc()}> */}
        Перейти к оплате {props.totalCost} ₽
        <img
          src="https://www.svgrepo.com/show/533592/arrow-narrow-circle-broken-down.svg"
          alt=""
        ></img>
      </div>
      {/* </a> */}
    </NavLink>
  );
};
