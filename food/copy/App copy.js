import "./App.css";
import { BrowserRouter } from "react-router-dom";
// import { Provider, connect } from "react-redux";
// import { compose } from "redux";
import Header from "../src/Components/Header/Header";
import Navbar from "../src/Components/Navbar/Navbar";
import { FoodAppStyle } from "../src/styles/GlobalStyle";
import { RouteList } from "../src/Components/Routes/Routes";
import { ScrollToTop } from "../src/Components/settings/ScrollToTop";
import { useState } from "react";
import { BasketSide } from "../src/Components/Basket/BasketSide";

export const App = (props) => {
  const [basket, setBasket] = useState([]);
  const [totalCost, setCost] = useState(null);
  const [isStocked, setStocked] = useState(false);
  const [isHidden, setHidden] = useState(false);

  const [activeFilterCategory, setActiveFilterCategory] = useState(null);
  const activeFilter = (e) => setActiveFilterCategory(e);

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

  const upCost = (cost) => {
    setCost(totalCost + cost);
  };
  // Filter
  const onStockFilter = (state) => {
    setStocked(state);
  };

  return (
    <FoodAppStyle>
      <Header />
      <Navbar
        data={props.data}
        onStockFilter={onStockFilter}
        isStocked={isStocked}
        activeFilterCategory={activeFilterCategory}
        activeFilter={activeFilter}
      />
      <BasketSide
        isHidden={isHidden}
        basket={basket}
        totalCost={totalCost}
        addProduct={addProduct}
        deleteQty={deleteQty}
        deleteProduct={deleteProduct}
      />
      <RouteList
        data={props.data}
        basket={basket}
        totalCost={totalCost}
        addProduct={addProduct}
        deleteQty={deleteQty}
        deleteProduct={deleteProduct}
        onStockFilter={onStockFilter}
        isStocked={isStocked}
        activeFilterCategory={activeFilterCategory}
      />
    </FoodAppStyle>
  );
};
