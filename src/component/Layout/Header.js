import React, { Fragment } from "react";

import mealsMainImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShow={props.onShow} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsMainImage} alt="A table full of food!" />
      </div>
    </Fragment>
  );
}

export default Header;
