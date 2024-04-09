import styled from "styled-components";

export const SubcategoryStyled = styled.div`
  display: flex;
  background-color: #f7df75;
  align-items: center;
  justify-content: start;
  border-radius: 10px 10px 10px 30px;
  padding: 10px;
  overflow-y: hidden;
  font-weight: 500;

  position: sticky;
  top: 110px;
  z-index: 0;
`;

export const SubcategoryElementsStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;
  /* margin-left: 5px; */
`;

export const SubcategoryRefStyled = styled.div`
  position: relative;
  top: -110px;
  left: -500px;
`;
