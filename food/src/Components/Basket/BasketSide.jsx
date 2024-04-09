import { BasketSideStyled } from "../../styles/BasketStyles/BasketStyle";
import { BasketProduct } from "./BasketProduct";
import { EmptyBasket, FillBasket } from "./BasketState";

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
    <BasketSideStyled className="basket">
      <div>
        {props.totalCost ? (
          <FillBasket
            totalCost={props.totalCost}
            initialCost={props.initialCost}
          />
        ) : (
          <EmptyBasket />
        )}
        <div>{basketProduct}</div>
      </div>
    </BasketSideStyled>
  );
};
