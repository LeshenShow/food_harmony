import { Routes, Route, Navigate } from "react-router-dom";
import CatFriends from "../../Tested";
import { Category } from "../Category/Category";
import { Login } from "../Login/Login";
import { Basket } from "../Basket/Basket";

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
      <Route path="/basket/*" element={<Basket />} />
      <Route path={"/" && "*"} element={<Navigate to="/login" />} />
    </Routes>
  );
};
