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
  width: 20px;
  height: 100%;
  border-radius: 10px;
  &:hover {
    background-color: lightgray;
  }
`;
export const ProductSlides = styled.div`
  & > img {
    height: 150px;
  }
  &.productModal img {
    height: 300px;
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
