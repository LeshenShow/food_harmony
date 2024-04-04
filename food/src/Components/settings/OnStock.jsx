import { FilterAreaAddStyled } from "../../styles/FilterAreaStyle";
export const OnStock = (props) => {
  return (
    <FilterAreaAddStyled>
      <label>
        <input
          type="checkbox"
          checked={props.isStocked}
          onChange={() => {
            props.setIsStocked(!props.isStocked);
          }}
        />
        Только в наличии
      </label>
    </FilterAreaAddStyled>
  );
};
