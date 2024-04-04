import styled, { createGlobalStyle, keyframes, css } from "styled-components";

export const Product = styled.div`
  background-color: #e9e7ce;
  margin: 5px;
  border-radius: 20px;
  &:hover {
    background-color: #f1e8bf;
  }

  display: grid;
  grid-template-areas: "slider" "info" "buy";
  grid-template-rows: 50% 40% 10%;
  width: 200px;
  height: 400px;
  &.productModal {
    width: 100%;
    height: 100%;
  }
  &.notStocked {
    background-color: lightgrey;
    & button {
      visibility: hidden;
    }
  }
`;
export const ProductInfo = styled.div`
  grid-area: info;
  display: grid;
  grid-template-areas: "price" "description" "weight";
  grid-template-rows: 20% auto 10%;
  font-size: 100%;
  cursor: pointer;
`;
export const ProductPrice = styled.div`
  grid-area: price;
  display: flex;
  justify-content: space-evenly;
`;
export const CurrentPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  font-weight: 600;
  color: ${(props) => (props.color ? props.color : "red")};
  &.productModal {
    font-size: 2.2em;
  }
`;
export const InitialPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  font-size: 1.1em;
  color: black;
  text-decoration: line-through;
  &.productModal {
    font-size: 1.8em;
  }
`;
export const Discount = styled.div`
  display: flex;
  flex-basis: 50px;
  align-items: center;
  justify-content: center;
  color: green;
  background-color: #d8f0d8;
  border: 2px solid green;
  border-radius: 50px 0px 50px 0px;
  &.productModal {
    font-size: 1.8em;
    flex-basis: 100px;
  }
`;
export const ProductDescription = styled.div`
  grid-area: description;
  padding: 5px;
  font-size: 100%;
`;
export const ProductWeight = styled.div`
  grid-area: weight;
  display: flex;
  justify-content: end;
  align-items: center;
  font-style: italic;
  font-size: 0.8em;
  padding-bottom: 3px;
  & span {
    margin-right: 5px;
  }
`;
export const ProductBuy = styled.button`
  grid-area: buy;
  border: 0px;
  margin: 0px;
  padding: 0px;
  border-radius: 0px 0px 20px 20px;
  background-color: #c189ce;
  cursor: pointer;
  &:hover {
    background-color: #df9dd6;
  }
`;
