import { Routes, Route, Navigate } from "react-router-dom";
import CatFriends from "../../Tested";
import { Category } from "../Content/Category";
import { Login } from "../Login/Login";
import { Basket } from "../Basket/Basket";
import { Test2 } from "../../Tested2";

export const RouteList = (props) => {
  let data = props.data;
  let setRoutes = new Set();
  data.map((elem) => setRoutes.add(elem.category.toLowerCase()));
  setRoutes = Array.from(setRoutes);

  const getFilteredData = (data, filterValue, isStocked) => {
    if (filterValue) {
      let filterData = data.filter(
        (elem) =>
          elem.category.toLowerCase() === filterValue &&
          (elem.stocked === isStocked || !isStocked)
      );
      return filterData;
    }
  };

  const category = setRoutes.map((elem) => {
    console.log(elem);
    return (
      <Route
        key={elem}
        path={`/goods/${elem}/*`}
        element={
          <Category
            key={elem}
            data={getFilteredData(data, elem, props.isStocked)}
            addProduct={props.addProduct}
            // onStockFilter={props.onStockFilter}
            isStocked={props.isStocked}
          />
        }
      />
    );
  });

  return (
    <Routes>
      {category}

      {/* <Route path="/tested/*" element={<CatFriends />} /> */}
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
            activeFilterCategory={props.activeFilterCategory}
          />
        }
      />
      <Route path={"/" && "*"} element={<Navigate to="/login" />} />
      <Route path="/qqq/*" element={<Test2 />} />
    </Routes>
  );
};
