import { useReducer } from "react";
import cartContext from "./cart-context";

const defaultCartData = {
  items: [],
  totalPrice: 0,
};

const cartDataReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateTotalPrice =
      state.totalPrice + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updateItems;
    if (existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updateItems = [...state.items];
      updateItems[existingCartItemIndex] = updateItem;
    } else {
      updateItems = state.items.concat(action.item);
    }
    return {
      items: updateItems,
      totalPrice: updateTotalPrice,
    };
  }

  if (action.type === "REMOVE") {
    const updateItems = state.items
      .map((item) =>
        item.id === action.id
          ? { ...item, amount: item.amount - 1 }
          : { ...item }
      )
      .filter((item) => item.amount > 0);
    const updateTotalPrice = updateItems.reduce(
      (cur, item) => cur + item.amount * item.price,
      0
    );
    return {
      items: updateItems,
      totalPrice: updateTotalPrice,
    };
  }
  return defaultCartData;
};

const CartProvider = (props) => {
  const [cartData, dispatch] = useReducer(cartDataReducer, defaultCartData);
  const addCartItemHandle = (item) => {
    dispatch({ type: "ADD", item: item });
  };

  const removeCartItemHandle = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };

  const cartContextValue = {
    items: cartData.items,
    totalPrice: cartData.totalPrice,
    addCartItem: addCartItemHandle,
    removeCartItem: removeCartItemHandle,
  };
  return (
    <cartContext.Provider value={cartContextValue}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartProvider;
