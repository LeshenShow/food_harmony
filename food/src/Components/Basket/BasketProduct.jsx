import { BasketProductStyled } from "../../styles/BasketStyle";

export const BasketProduct = (props) => {
  // console.log("BasketProduct", props.product);
  const name = props.product.name;
  const id = props.product.id;
  const qty = props.product.qty;
  const cost = qty * props.product.price.currentPrice;

  return (
    <BasketProductStyled>
      <span>{name},</span>
      <span>#{id},</span>
      <span>{qty}шт</span>
      <span>
        <button
          onClick={() => {
            props.deleteQty(props.product);
          }}
        >
          -
        </button>
        <span>|</span>
        <button
          onClick={() => {
            props.addProduct(props.product);
          }}
        >
          +
        </button>
      </span>
      <span>{cost} ₽</span>
      <button
        onClick={() => {
          props.deleteProduct(id, cost);
        }}
      >
        <span>Delete</span>
      </button>
    </BasketProductStyled>
  );
};
