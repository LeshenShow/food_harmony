import {
  ModalBackgroundStyled,
  ModalContentStyled,
  ModalStyled,
  ProductModalStyled,
} from "../src/styles/ModalStyle";
import * as s from "../src/styles/ProductStyle";
import { ProductBuy } from "../src/Components/Content/Subcategory/Product/ProductBuy";
import { ProductSlider } from "../src/Components/Content/Subcategory/Product/ProductSlider";

export const Modal = (props) => {
  const product = props.modalContent;
  const currentPrice = product.price.currentPrice;
  const initialPrice = product.price.initialPrice;
  const discount = Math.ceil(100 - (currentPrice * 100) / initialPrice);
  const priceAsKilogram = Math.ceil((currentPrice * 1000) / product.weight);
  const isStockedClass = product.stocked ? "stocked" : "notStocked";
  //   isActiveModal={props.isActiveModal}
  // changeActiveModal={props.changeActiveModal}
  return (
    <ModalStyled>
      <ModalBackgroundStyled
        onClick={() => {
          props.setIsActiveModal(false);
        }}
      ></ModalBackgroundStyled>
      <ModalContentStyled>
        <s.Product className={`${isStockedClass} modal`}>
          <ProductSlider images={product.imagesSmall} className="modal" />
          <s.ProductInfo>
            <s.ProductPrice>
              {discount > 0 ? ( // discount = 0 (false) if init = current
                <>
                  <s.CurrentPrice className="modal">
                    {currentPrice} ₽
                  </s.CurrentPrice>
                  <s.InitialPrice className="modal">
                    {initialPrice} ₽
                  </s.InitialPrice>
                  <s.Discount className="modal">{discount}%</s.Discount>
                </>
              ) : (
                <s.CurrentPrice color={"black"} className="modal">
                  {initialPrice} ₽
                </s.CurrentPrice>
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
          </s.ProductInfo>
          <ProductBuy addProduct={props.addProduct} product={props.product} />
        </s.Product>
      </ModalContentStyled>
    </ModalStyled>
  );
};
