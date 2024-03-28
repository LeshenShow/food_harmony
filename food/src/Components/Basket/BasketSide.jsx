import { useState } from "react";
import { BasketSideStyled } from "../../styles/BasketStyle";
import { EmptyBasket, FillBasket } from "../settings/BasketState";
import { BasketProduct } from "./BasketProduct";

export const BasketSide = (props) => {
  // const [isHidden, setIsHidden] = useState();
  // const handleClick = () => setIsHidden("isHidden");
  // const [test, setTest] = useState("b");
  // const testfunc = () => setTest("m");

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
            // handleClick={handleClick}
            // testfunc={testfunc}
          />
        ) : (
          <EmptyBasket />
        )}
        <div>{basketProduct}</div>
      </div>
    </BasketSideStyled>
  );
  // return (
  //   <BasketSideStyled className="basket" grid={test}>
  //     <div className={isHidden}>
  //       {props.totalCost ? (
  //         <FillBasket
  //           totalCost={props.totalCost}
  //           handleClick={handleClick}
  //           testfunc={testfunc}
  //         />
  //       ) : (
  //         <EmptyBasket />
  //       )}
  //       <div>{basketProduct}</div>
  //     </div>
  //   </BasketSideStyled>
  // );
};
