import { useContext } from "react";
import cartContext from "../../store/cart-context";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  const cartCtx = useContext(cartContext);

  const numberOfItems = cartCtx.items.reduce(
    (curNumber, item) => curNumber + item.amount,
    0
  );

  return (
    <button className={classes.button} onClick={props.onShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
