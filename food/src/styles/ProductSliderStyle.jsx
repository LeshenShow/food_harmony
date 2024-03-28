import styled from "styled-components";

export const ProductSlider = styled.div`
  grid-area: slider;
  border-radius: 20px 20px 0px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & div > img {
    width: 150px;
  }
`;
export const ProductArrows = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 80%;
  border-radius: 10px;
  &:hover {
    background-color: lightgray;
  }
`;
export const ProductSlides = styled.div``;
export const ProductDots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
