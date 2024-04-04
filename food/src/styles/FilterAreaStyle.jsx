import styled from "styled-components";

export const FilterAreaStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  height: 60px;
  position: sticky;
  top: 50px;
  background: white;
  /* z-index: 10; */
  overflow-x: auto;
  overflow-y: hidden;
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
`;
export const FilterAreaAddStyled = styled.div`
  text-align: center;
  margin: 10px;
`;
