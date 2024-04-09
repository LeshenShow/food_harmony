import styled from "styled-components";

export const ProductSlider = styled.div`
  grid-area: slider;
  border-radius: 20px 20px 0px 0px;
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;
export const ProductArrows = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 10%;
  height: 100%;
  border-radius: 10px;
  &:hover {
    background-color: lightgray;
    color: lightgrey;
  }
`;
export const ProductSlides = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  & > img {
    height: 200px;
    width: 150px;
  }
  &.productModal img {
    height: 400px;
    width: 300px;
  }
`;
export const ProductDots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & > div {
    background-color: lightgray;
    width: 10px;
    height: 10px;
    margin-right: 10px;
    border-radius: 50%;
    &:hover {
      background-color: grey;
    }
  }
  & .active {
    background-color: darkgray;
  }
`;
