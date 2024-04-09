import styled, { createGlobalStyle, keyframes, css } from "styled-components";
const fontStyles = css`
  font-size: 12px;
  line-height: 14px;
  font-weight: 700;
`;
const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
body {
  min-height: 100vh;
}
`;

export const FoodAppStyle = styled.div`
  display: grid;
  grid-template-areas:
    "h h h h h h h"
    ". . . m . . ."
    ". n . m . b .";
  grid-template-rows: 50px 50px 1fr;
  grid-template-columns: 5% max-content 1% minmax(630px, 53%) 1% 1fr 1%;
  /* grid-gap: 10px; */
  /* ${fontStyles}: 123 */
  @media screen and (min-width: 800px) and (max-width: 1324px) {
    grid-template-rows: 50px 50px 1fr;
    grid-template-columns: 0% max-content 0% minmax(630px, 53%) 0% 1fr 0%;
  }
`;
