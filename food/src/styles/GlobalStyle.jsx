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
}
body {
  
  min-height: 100vh;
}
`;

export const FoodAppStyle = styled.div`
  display: grid;
  grid-template-areas:
    "h h h h h h"
    ". n . m . b "
    ". n . m . b ";
  grid-template-rows: 50px 50px 1fr;
  grid-template-columns: 10% 150px 1% 7fr 1% 30%;
  /* ${fontStyles}: 123 */
`;
