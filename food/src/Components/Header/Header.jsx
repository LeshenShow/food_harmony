import { NavLink } from "react-router-dom";
import {
  HeaderLogoStyled,
  HeaderStyled,
  HeaderUserStyled,
  LogoStyled,
} from "../../styles/HeaderStyle";

const Header = () => {
  let image1 = (
    <img
      src="https://www.svgrepo.com/show/318255/food-fruit-vegetable-vegetarian-organic-plum.svg"
      alt=""
    ></img>
  );
  return (
    <HeaderStyled>
      <HeaderLogoStyled>F{image1}d Harmony</HeaderLogoStyled>
      <div>
        Search
        <input></input>
      </div>
      <HeaderUserStyled>
        <img
          src="https://www.svgrepo.com/show/492689/avatar-boy.svg"
          alt=""
        ></img>
      </HeaderUserStyled>
      <NavLink to="/login">
        <div>Login</div>
      </NavLink>
    </HeaderStyled>
  );
  // return <div className="Header">Header</div>;
};
export default Header;
