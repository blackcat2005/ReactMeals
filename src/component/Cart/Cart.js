import { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import cartContext from "../../store/cart-context";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(cartContext);
  let hasItem = true;

  const totalPrice = `$${cartCtx.totalPrice.toFixed(2)}`;

  const addCartItemHandle = (item) => {
    cartCtx.addCartItem(item);
  };

  const removeCartItemHandle = (id) => {
    cartCtx.removeCartItem(id);
  };

  if (totalPrice === "$0.00") {
    hasItem = false;
  }
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={addCartItemHandle.bind(null, { ...item, amount: 1 })}
          onRemove={removeCartItemHandle.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Price</span>
        <span>{totalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
