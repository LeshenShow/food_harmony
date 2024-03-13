import { BasketStyled } from "../../styles/BasketStyle";
import { BasketProduct } from "./BasketProduct";

export const Basket = (props) => {
  let product = props.basket;
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
      <span>{basketProduct}</span>
      <span>To payment:{cost}</span>
    </BasketStyled>
  );
};
