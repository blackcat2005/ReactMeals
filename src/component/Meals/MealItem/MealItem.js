import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import cartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(cartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandle = (amount) => {
    cartCtx.addCartItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandle} />
      </div>
    </li>
  );
};

export default MealItem;
