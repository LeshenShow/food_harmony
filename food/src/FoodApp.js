import { BrowserRouter } from "react-router-dom";
import { ScrollToTop } from "./Components/settings/ScrollToTop";
import { AppState } from "./Data/AppState";
export const FoodApp = (props) => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* <Provider store={store}> */}
      <AppState data={props.data} />
      {/* </Provider> */}
    </BrowserRouter>
  );
};
