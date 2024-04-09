import { Routes, Route, Navigate } from "react-router-dom";
import CatFriends from "../../Tested";
import { Login } from "../Login/Login";
import { Basket } from "../Basket/Basket";
import { Test2 } from "../../Tested2";
import { Modal } from "../Content/Subcategory/Product/ProductModal";
import { CategoryState } from "../Content/CategoryState";
import { Payment } from "../Payment/Payment";

export const RouteList = (props) => {
  const data = props.data;
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
    // console.log(elem);
    return (
      <Route
        key={elem}
        path={`/goods/${elem}/*`}
        element={
          <CategoryState
            key={elem}
            data={getFilteredData(data, elem, props.isStocked)}
            addProduct={props.addProduct}
            isStocked={props.isStocked}
            isActiveModal={props.isActiveModal}
            setIsActiveModal={props.setIsActiveModal}
            modalContent={props.modalContent}
            setModalContent={props.setModalContent}
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
            initialCost={props.initialCost}
            addProduct={props.addProduct}
            deleteQty={props.deleteQty}
            deleteProduct={props.deleteProduct}
            activeCategory={props.activeCategory}
          />
        }
      />
      <Route path={"/" && "*"} element={<Navigate to="/login" />} />
      <Route path="/qqq/*" element={<Test2 />} />
      <Route path="/payment/*" element={<Payment />} />
    </Routes>
  );
};
