import styled from "styled-components";

export const FilterAreaStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  height: 50px;
  position: sticky;
  top: 50px;
  background: white;
`;
export const FilterAreaElementStyled = styled.div`
  display: flex;
  flex-wrap: nowrap;
  background-color: pink;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 10px;
  margin-right: 5px;
  border-radius: 20px;
  &:hover {
    background-color: #c189ce;
    color: white;
  }
  &.activeFilterSubcategory {
    background-color: #c189ce;
  }
  /* &: active ${(props) => (props.color ? props.color : "red")}; */
`;
