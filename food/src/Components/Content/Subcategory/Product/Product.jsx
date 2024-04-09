import * as s from "../../../../styles/ProductStyle";
import { ProductSlider } from "./ProductSlider";
import { ProductBuy } from "./ProductBuy";
import { ProductInfo } from "./ProductInfo";
export const Product = (props) => {
  const isStockedClass = props.product.stocked ? "stocked" : "notStocked";
  const isModal = props.isModal && "productModal";
  return (
    <s.Product className={`${isStockedClass} ${isModal}`}>
      <ProductSlider
        images={props.product.imagesSmall}
        isModal={`${isModal}`}
      />
      <ProductInfo
        setIsActiveModal={props.setIsActiveModal}
        setModalContent={props.setModalContent}
        product={props.product}
        isModal={`${isModal}`}
      />
      <ProductBuy addProduct={props.addProduct} product={props.product} />
    </s.Product>
  );
};
