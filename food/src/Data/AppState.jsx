import { useState } from "react";
import { App } from "../App";

export const AppState = (props) => {
  const [basket, setBasket] = useState([]);
  const addProduct = (elem) => {
    if (basket.includes(elem)) {
      elem.qty += 1;
      // elem.cost = elem.qty * elem.price.currentPrice;
      setBasket([...basket]);
    } else {
      elem.qty = 1;
      // elem.cost = elem.price.currentPrice;
      setBasket([...basket, elem]);
    }
    upCost(elem.price.currentPrice);
    upInitCost(elem.price.initialPrice);
  };
  const deleteQty = (elem) => {
    elem.qty -= 1;
    // elem.cost = elem.qty * elem.price.currentPrice;
    // elem.initCost = elem.qty * elem.price.initialPrice;
    setBasket([...basket]);
    upCost(-elem.price.currentPrice);
    upInitCost(-elem.price.initialPrice);
    if (elem.qty === 0) {
      deleteProduct(elem.id, elem.price.currentPrice, elem.price.initialPrice);
    }
  };
  const deleteProduct = (id, cost = 0, initCost = 0) => {
    const cleanBasket = basket.filter((e) => e.id !== id);
    upCost(-cost);
    upInitCost(-initCost);
    setBasket([...cleanBasket]);
  };

  const [totalCost, setTotalCost] = useState(null);
  const upCost = (cost) => {
    setTotalCost(totalCost + cost);
  };
  const [initialCost, setInitialCost] = useState(null);
  const upInitCost = (cost) => {
    setInitialCost(initialCost + cost);
  };

  const [isStocked, setIsStocked] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  const [isActiveModal, setIsActiveModal] = useState(false);
  const [modalContent, setModalContent] = useState();
  return (
    <App
      data={props.data}
      isStocked={isStocked}
      setIsStocked={setIsStocked}
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
      basket={basket}
      totalCost={totalCost}
      initialCost={initialCost}
      addProduct={addProduct}
      deleteQty={deleteQty}
      deleteProduct={deleteProduct}
      isActiveModal={isActiveModal}
      setIsActiveModal={setIsActiveModal}
      modalContent={modalContent}
      setModalContent={setModalContent}
    />
  );
};
