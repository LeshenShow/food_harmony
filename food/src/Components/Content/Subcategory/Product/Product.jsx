import * as s from "../../../../styles/ProductStyle";
import { NavLink } from "react-router-dom";
import { ProductSlider } from "./ProductSlider";
export const Product = (props) => {
  const product = props.product;
  const currentPrice = product.price.currentPrice;
  const initialPrice = product.price.initialPrice;
  const discount = Math.ceil(100 - (currentPrice * 100) / initialPrice);
  const priceAsKilogram = Math.ceil((currentPrice * 1000) / product.weight);
  const isStockedClass = product.stocked ? "stocked" : "notStocked";
  return (
    <s.Product className={isStockedClass}>
      <NavLink>
        <ProductSlider images={product.imagesSmall} />
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
          <span style={{ color: "red" }}>
            {!product.stocked && "not stocked"}
          </span>
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
          <span>Добавить в корзину</span>
        </s.ProductBuy>
      </NavLink>
    </s.Product>
  );
};
