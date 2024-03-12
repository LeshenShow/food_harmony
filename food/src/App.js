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
  const [totalCost, setCost] = useState(0);

  const addProduct = (elem) => {
    console.log("addProduct", elem);
    if (basket.includes(elem)) {
      elem.qty += 1;
      elem.cost = elem.qty * elem.price.currentPrice;
      console.log("qty", elem.qty);
      setBasket([...basket]);
      console.log("if App", basket);
    } else {
      elem.qty = 1;
      elem.cost = elem.price.currentPrice;
      setBasket([...basket, elem]);
      console.log("else App", basket);
    }
    addCost(elem.price.currentPrice);
  };
  const addCost = (cost) => {
    setCost(totalCost + cost);
  };
  return (
    <FoodAppStyle>
      <Header />
      <Navbar data={props.data} />
      <BasketSide basket={basket} totalCost={totalCost} />
      <RouteList data={props.data} addProduct={addProduct} basket={basket} />
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
