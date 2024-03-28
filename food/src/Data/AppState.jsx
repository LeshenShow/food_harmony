import { useState } from "react";
import { App } from "../App";

export const AppState = (props) => {
  const [basket, setBasket] = useState([]);
  const addProduct = (elem) => {
    if (basket.includes(elem)) {
      elem.qty += 1;
      elem.cost = elem.qty * elem.price.currentPrice;
      setBasket([...basket]);
    } else {
      elem.qty = 1;
      elem.cost = elem.price.currentPrice;
      setBasket([...basket, elem]);
    }
    upCost(elem.price.currentPrice);
  };
  const deleteQty = (elem) => {
    elem.qty -= 1;
    elem.cost = elem.qty * elem.price.currentPrice;
    setBasket([...basket]);
    upCost(-elem.price.currentPrice);
    if (elem.qty === 0) {
      deleteProduct(elem.id, elem.price.currentPrice);
      // upCost(-elem.price.currentPrice);
    }
  };
  const deleteProduct = (id, cost = 0) => {
    const cleanBasket = basket.filter((e) => e.id !== id);
    upCost(-cost);
    setBasket([...cleanBasket]);
  };

  const [totalCost, setCost] = useState(null);
  const upCost = (cost) => {
    setCost(totalCost + cost);
  };

  const [isStocked, setStocked] = useState(false);
  const onStockFilter = (state) => {
    setStocked(state);
  };

  const [activeFilterCategory, setActiveFilterCategory] = useState(null);
  const activeFilter = (e) => setActiveFilterCategory(e);

  return (
    <App
      data={props.data}
      isStocked={isStocked}
      activeFilterCategory={activeFilterCategory}
      basket={basket}
      totalCost={totalCost}
      onStockFilter={onStockFilter}
      activeFilter={activeFilter}
      addProduct={addProduct}
      deleteQty={deleteQty}
      deleteProduct={deleteProduct}
    />
  );
};
