import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountValid, setAmountValid] = useState(true);
  const inputRef = useRef();

  const submitHandle = (e) => {
    e.preventDefault();
    const enteredAmount = inputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandle}>
      <Input
        label="Amount"
        input={{
          type: "number",
          id: "amount_" + props.id,
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        ref={inputRef}
      />
      <button>+ Add</button>
      {!amountValid && <p>Please enter a valid amount (1-5)!</p>}
    </form>
  );
};

export default MealItemForm;
