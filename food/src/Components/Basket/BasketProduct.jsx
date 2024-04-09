import { BasketProductStyled } from "../../styles/BasketStyles/BasketStyle";

export const BasketProduct = (props) => {
  // console.log("BasketProduct", props.product);
  const product = props.product;
  const name = product.name;
  const id = product.id;
  const qty = product.qty;
  const currentPrice = product.price.currentPrice;
  const initialPrice = product.price.initialPrice;
  const currentCost = qty * currentPrice;
  const initialCost = qty * initialPrice;
  const deleteQty = () => props.deleteQty(product);
  const addProduct = () => props.addProduct(product);
  const deleteProduct = () => props.deleteProduct(id, currentCost, initialCost);
  return (
    <BasketProductStyled>
      <div>
        <span>{name},</span>
        <span> #{id}</span>
      </div>
      <div>
        <span>{qty}шт </span>
        <span>
          <button onClick={deleteQty}>
            <span>-</span>
          </button>
          <button onClick={addProduct}>
            <span>+</span>
          </button>
        </span>
        <span> {currentCost} ₽ </span>
        {currentCost !== initialCost && (
          <span style={{ textDecoration: " line-through" }}>
            {initialCost} ₽
          </span>
        )}
        <button onClick={deleteProduct}>
          <span>Delete</span>
        </button>
      </div>
    </BasketProductStyled>
  );
};
