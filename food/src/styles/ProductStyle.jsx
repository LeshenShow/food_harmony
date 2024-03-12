import styled, { createGlobalStyle, keyframes, css } from "styled-components";

export const Product = styled.div`
  background-color: #e9e7ce;
  margin: 5px;
  border-radius: 20px;
  &:hover {
    background-color: #ece0aa;
  }
  & a {
    display: grid;
    grid-template-areas: "i" "p" "d" "w" "b";
    grid-template-rows: 50% 10% auto 5% 10%;
    width: 200px;
    height: 400px;
    text-decoration: none;
    color: black;
  }
`;
export const ProductImg = styled.div`
  grid-area: i;
  border-radius: 20px 20px 0px 0px;
  padding: 5px;
  & img {
    width: 100%;
  }
`;
export const ProductDescription = styled.div`
  grid-area: d;
  padding: 5px;
  font-size: 100%;
`;
export const ProductPrice = styled.div`
  grid-area: p;
  display: flex;
  justify-content: space-evenly;
  padding: 5px;
`;
export const CurrentPrice = styled.div`
  grid-area: c;
  font-size: 1.3em;
  font-weight: 600;
  color: ${(props) => (props.color ? props.color : "red")};
`;
export const InitialPrice = styled.div`
  grid-area: i;
  font-size: 1.11em;
  color: black;
  text-decoration: line-through;
`;
export const Discount = styled.div`
  grid-area: d;
  display: flex;
  align-items: center;
  justify-content: center;
  color: green;
  background-color: #d8f0d8;
  border: 2px solid green;
  border-radius: 50px 0px 50px 0px;
  padding: 15px;
`;
export const ProductWeight = styled.div`
  grid-area: w;
  display: flex;
  justify-content: end;
  align-items: center;
  font-style: italic;
  font-size: 0.8em;
  & span {
    margin-right: 5px;
  }
`;
export const ProductBuy = styled.button`
  grid-area: b;
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
