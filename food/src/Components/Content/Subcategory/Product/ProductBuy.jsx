import * as s from "../../../../styles/ProductStyle";
export const ProductBuy = (props) => {
  return (
    <s.ProductBuy
      onClick={() => {
        props.addProduct(props.product);
      }}
    >
      <span>Добавить в корзину</span>
    </s.ProductBuy>
  );
};
