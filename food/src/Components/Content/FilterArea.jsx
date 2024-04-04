import { FilterAreaElementStyled } from "../../styles/FilterAreaStyle";

export const FilterArea = (props) => {
  return (
    <FilterAreaElementStyled
      className={props.className}
      onClick={() => {
        props.scrollToId(props.headersList);
        props.setIsActiveSubCat(props.headersList);
      }}
    >
      {props.headersList}
    </FilterAreaElementStyled>
  );
};
