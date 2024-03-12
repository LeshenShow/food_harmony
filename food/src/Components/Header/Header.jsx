import { NavLink } from "react-router-dom";
import {
  HeaderLogoStyled,
  HeaderStyled,
  HeaderUserStyled,
  LogoStyled,
} from "../../styles/HeaderStyle";

const Header = () => {
  let image = (
    <img
      src="https://www.svgrepo.com/show/317488/food-wine-cheese-bread-national-culture-paris.svg"
      alt=""
    ></img>
  );
  let image1 = (
    <img
      src="https://www.svgrepo.com/show/318255/food-fruit-vegetable-vegetarian-organic-plum.svg"
      alt=""
    ></img>
  );
  let image3 = (
    <img src="https://www.svgrepo.com/show/408601/food-orange.svg" alt=""></img>
  );
  return (
    <HeaderStyled>
      <HeaderLogoStyled>
        F{image1}d {image}Harm{image3}ny
      </HeaderLogoStyled>
      <div>Search</div>
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
