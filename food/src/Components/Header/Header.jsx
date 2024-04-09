import { NavLink } from "react-router-dom";
import {
  HeaderLogoStyled,
  HeaderSearchStyled,
  HeaderStyled,
  HeaderUserStyled,
} from "../../styles/HeaderStyles/HeaderStyle";
import { useState } from "react";
import { SearchModal } from "./SearchModal";

const Header = (props) => {
  const [text, setText] = useState("");
  const changeText = (event) => {
    setText(event.target.value);
  };
  const [isVisible, setIsVisible] = useState(true);

  let image1 = (
    <img
      src="https://www.svgrepo.com/show/318255/food-fruit-vegetable-vegetarian-organic-plum.svg"
      alt=""
    ></img>
  );
  return (
    <HeaderStyled>
      <HeaderLogoStyled>F{image1}d Harmony</HeaderLogoStyled>
      <HeaderSearchStyled>
        Search
        <input
          value={text}
          placeholder="search"
          onChange={changeText}
          // onBlur={() => setIsVisible(false)}
          onFocus={() => setIsVisible(true)}
        />
      </HeaderSearchStyled>
      {text.length > 2 && isVisible && (
        <SearchModal
          data={props.data}
          text={text}
          setIsVisible={setIsVisible}
          setIsActiveModal={props.setIsActiveModal}
          modalContent={props.modalContent}
          setModalContent={props.setModalContent}
          addProduct={props.addProduct}
        />
      )}
      <HeaderUserStyled>
        <img src="https://www.svgrepo.com/show/492689/avatar-boy.svg" alt="" />
        <NavLink to="/login">
          <div>Login</div>
        </NavLink>
      </HeaderUserStyled>
    </HeaderStyled>
  );
  // return <div className="Header">Header</div>;
};
export default Header;
