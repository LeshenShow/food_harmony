import { Routes, Route, Navigate } from "react-router-dom";
import CatFriends from "../../Tested";
import { Category } from "../Content/Category";
import { Login } from "../Login/Login";
import { Basket } from "../Basket/Basket";
import { Test2 } from "../../Tested2";

export const RouteList = (props) => {
  let data = props.data;
  const getFilteredData = (data, filterValue) => {
    if (filterValue) {
      let filterData = data.filter(
        (elem) => elem.category.toLowerCase() === filterValue
      );
      return filterData;
    }
  };
  return (
    <Routes>
      <Route
        path="/vegetables/*"
        element={
          <Category
            data={getFilteredData(data, "vegetables")}
            addProduct={props.addProduct}
          />
        }
      />
      <Route
        path="/fruits/*"
        element={
          <Category
            data={getFilteredData(data, "fruits")}
            addProduct={props.addProduct}
          />
        }
      />
      <Route path="/tested/*" element={<CatFriends />} />
      <Route path="/login/*" element={<Login />} />
      <Route
        path="/basket/*"
        element={
          <Basket
            basket={props.basket}
            totalCost={props.totalCost}
            addProduct={props.addProduct}
            deleteQty={props.deleteQty}
            deleteProduct={props.deleteProduct}
          />
        }
      />
      <Route path={"/" && "*"} element={<Navigate to="/login" />} />
      <Route path="/qqq/*" element={<Test2 />} />
    </Routes>
  );
};
