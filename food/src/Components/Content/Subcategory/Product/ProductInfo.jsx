import * as s from "../../../../styles/ProductStyle";
export const ProductInfo = (props) => {
  const currentPrice = props.product.price.currentPrice;
  const initialPrice = props.product.price.initialPrice;
  const discount = Math.ceil(100 - (currentPrice * 100) / initialPrice);
  const priceAsKilogram = Math.ceil(
    (currentPrice * 1000) / props.product.weight
  );
  return (
    <s.ProductInfo
      onClick={() => {
        if (props.isModal !== "productModal") {
          props.setIsActiveModal(true);
          props.changeModalContent(props.product);
        }
      }}
    >
      <s.ProductPrice>
        {discount > 0 ? ( // discount = 0 (false) if init = current
          <>
            <s.CurrentPrice className={props.isModal}>
              {currentPrice} ₽
            </s.CurrentPrice>
            <s.InitialPrice className={props.isModal}>
              {initialPrice} ₽
            </s.InitialPrice>
            <s.Discount className={props.isModal}>{discount}%</s.Discount>
          </>
        ) : (
          <s.CurrentPrice color={"black"} className={props.isModal}>
            {initialPrice} ₽
          </s.CurrentPrice>
        )}
      </s.ProductPrice>
      <s.ProductDescription>{props.product.name} </s.ProductDescription>
      <s.ProductWeight>
        <span style={{ color: "red" }}>
          {!props.product.stocked && "not stocked"}
        </span>
        <span>
          {props.product.weight}
          {props.product.measurement}
        </span>
        <span>
          Cost of 1{props.product.measurement === "g" ? "kg" : "l"}=
          {priceAsKilogram}₽
        </span>
      </s.ProductWeight>
    </s.ProductInfo>
  );
};
