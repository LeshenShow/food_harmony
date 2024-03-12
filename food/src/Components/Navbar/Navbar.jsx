import { NavLink } from "react-router-dom";
import {
  NavbarElementStyle,
  NavbarStyled,
  NavbarTest,
} from "../../styles/NavbarStyle";
import { useState } from "react";

const Navbar = (props) => {
  const [state, setState] = useState(null);
  const handleClick = (e) => setState(e);

  let data = props.data;
  let category = new Set();
  data.map((elem) => category.add(elem.category));
  category = Array.from(category).map((elem) => {
    let setActive = state === elem ? "activeFilterCategory" : null;
    return (
      <NavLink key={elem} to={elem} onClick={() => handleClick(elem)}>
        <NavbarElementStyle className={setActive}>{elem}</NavbarElementStyle>
      </NavLink>
    );
  });
  return (
    <NavbarTest>
      <NavbarStyled>
        {category}
        <NavLink to="/tested">
          <NavbarElementStyle>Tested</NavbarElementStyle>
        </NavLink>
      </NavbarStyled>
    </NavbarTest>
  );
};
export default Navbar;
