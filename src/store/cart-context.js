import React from "react";

const cartContext = React.createContext({
  items: [],
  totalPrice: 0,
  addCartItem: (item) => {},
  removeCartItem: (id) => {},
});

export default cartContext;
