import "./App.css";
// import { Provider, connect } from "react-redux";
// import { compose } from "redux";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import { FoodAppStyle } from "./styles/GlobalStyle";
import { RouteList } from "./Components/Routes/Routes";
import { BasketSide } from "./Components/Basket/BasketSide";

export const App = (props) => {
  return (
    <FoodAppStyle>
      <Header />
      <Navbar
        data={props.data}
        onStockFilter={props.onStockFilter}
        isStocked={props.isStocked}
        activeFilterCategory={props.activeFilterCategory}
        activeFilter={props.activeFilter}
      />
      <BasketSide
        basket={props.basket}
        totalCost={props.totalCost}
        addProduct={props.addProduct}
        deleteQty={props.deleteQty}
        deleteProduct={props.deleteProduct}
      />
      <RouteList
        data={props.data}
        basket={props.basket}
        totalCost={props.totalCost}
        addProduct={props.addProduct}
        deleteQty={props.deleteQty}
        deleteProduct={props.deleteProduct}
        onStockFilter={props.onStockFilter}
        isStocked={props.isStocked}
        activeFilterCategory={props.activeFilterCategory}
      />
    </FoodAppStyle>
  );
};
