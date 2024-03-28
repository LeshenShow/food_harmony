import { NavLink } from "react-router-dom";
import {
  NavbarElementStyle,
  NavbarStyled,
  NavbarAreaStyled,
} from "../../styles/NavbarStyle";
import { OnStock } from "./../settings/OnStock";

const Navbar = (props) => {
  let data = props.data;
  let category = new Set();
  data.map((elem) => category.add(elem.category));
  category = Array.from(category).map((elem) => {
    let setActive =
      props.activeFilterCategory === elem ? "activeFilterCategory" : null;
    return (
      <NavLink
        key={elem}
        to={`/goods/${elem.toLowerCase()}`}
        onClick={() => props.activeFilter(elem)}
      >
        <NavbarElementStyle className={setActive}>{elem}</NavbarElementStyle>
      </NavLink>
    );
  });
  return (
    <NavbarAreaStyled className="navbar">
      <NavbarStyled>
        <OnStock
          onStockFilter={props.onStockFilter}
          isStocked={props.isStocked}
        ></OnStock>
        {category}
        <NavLink to="/tested">
          <NavbarElementStyle>Tested</NavbarElementStyle>
        </NavLink>
      </NavbarStyled>
    </NavbarAreaStyled>
  );
};
export default Navbar;
