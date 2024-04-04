import { NavLink } from "react-router-dom";

export const Payment = () => {
  return (
    <div>
      <NavLink to={`/goods/fruits/*`}>Back</NavLink>
      <div>Payment</div>
    </div>
  );
};
