import styled from "styled-components";

export const BasketSideStyled = styled.div`
  grid-area: b;
  /* grid-area: ${(props) => props.grid}; */
  & .isHidden {
    /* visibility: hidden; */
  }
  & > div {
    display: flex;
    flex-direction: column;
    max-height: 80vh;
    overflow-y: auto;
    background-color: #f0e9e9;
    position: sticky;
    top: 100px;
    border-radius: 20px;
    text-align: center;
  }
  & a {
    text-decoration: none;
    color: black;
    font-size: large;
    font-weight: 600;
    text-decoration: none;
    margin: 10px;
    & div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-color: lightgreen;
      border-radius: 20px;
      height: 30px;
      & img {
        width: 20px;
      }
    }
    & div:hover {
      background-color: #c45ac4;
    }
  }
  & .emptyBasket {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
    padding-top: 50px;
    & span {
      font-size: large;
      font-weight: 600;
      margin-bottom: 50px;
    }
  }
`;
export const BasketProductStyled = styled.div`
  /* display: flex;
  justify-content: start; */
  text-align: start;
  margin: 5px;
  padding: 5px;
  border-radius: 20px;
  background-color: pink;
  & > span {
    margin-right: 5px;
  }
`;
export const BasketStyled = styled.div`
  grid-area: m;
`;
