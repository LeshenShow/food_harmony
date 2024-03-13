import * as s from "../../../../styles/ProductStyle";
import { NavLink } from "react-router-dom";
export const Product = (props) => {
  let product = props.product;
  let currentPrice = product.price.currentPrice;
  let initialPrice = product.price.initialPrice;
  let discount = Math.ceil(100 - (currentPrice * 100) / initialPrice);
  let priceAsKilogram = Math.ceil((currentPrice * 1000) / product.weight);
  // addProduct={props.addProduct}
  return (
    <s.Product>
      <NavLink>
        <s.ProductImg>
          <img src={product.imageSmall} alt="" />
        </s.ProductImg>
        <s.ProductPrice>
          {discount > 0 ? ( // discount = 0 (false) if init = current
            <>
              <s.CurrentPrice>{currentPrice} ₽</s.CurrentPrice>
              <s.InitialPrice>{initialPrice} ₽</s.InitialPrice>
              <s.Discount>{discount}%</s.Discount>
            </>
          ) : (
            <s.CurrentPrice color={"black"}>{initialPrice} ₽</s.CurrentPrice>
          )}
        </s.ProductPrice>
        <s.ProductDescription>{product.name} </s.ProductDescription>
        <s.ProductWeight>
          <span>
            {product.weight}
            {product.measurement}
          </span>
          <span>
            Cost of 1{product.measurement === "g" ? "kg" : "l"}=
            {priceAsKilogram} ₽
          </span>
        </s.ProductWeight>

        <s.ProductBuy
          onClick={() => {
            // console.log("test");
            props.addProduct(product);
          }}
        >
          <span>Add in basket</span>
        </s.ProductBuy>
      </NavLink>
    </s.Product>
  );
};
