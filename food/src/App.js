import "./App.css";
import { BrowserRouter } from "react-router-dom";
// import { Provider, connect } from "react-redux";
// import { compose } from "redux";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import { FoodAppStyle } from "./styles/GlobalStyle";
import { RouteList } from "./Components/Routes/Routes";
import { ScrollToTop } from "./Components/settings/ScrollToTop";
import { useState } from "react";
import { BasketSide } from "./Components/Basket/BasketSide";

const App = (props) => {
  const [basket, setBasket] = useState([]);
  const [totalCost, setCost] = useState(null);

  const addProduct = (elem) => {
    // console.log("addProduct", elem);
    if (basket.includes(elem)) {
      elem.qty += 1;
      elem.cost = elem.qty * elem.price.currentPrice;
      // console.log("qty", elem.qty);
      setBasket([...basket]);
      // console.log("if App", basket);
    } else {
      elem.qty = 1;
      elem.cost = elem.price.currentPrice;
      setBasket([...basket, elem]);
      // console.log("else App", basket);
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

  return (
    <FoodAppStyle>
      <Header />
      <Navbar data={props.data} />
      <BasketSide
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
      />
    </FoodAppStyle>
  );
};
const FoodApp = (props) => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* <Provider store={store}> */}
      <App data={props.data} />
      {/* </Provider> */}
    </BrowserRouter>
  );
};
export default FoodApp;
