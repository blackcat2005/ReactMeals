import React, { Fragment, useState } from "react";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";
const App = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandle = () => {
    setShowModal(true);
  };
  const hideModalHandle = () => {
    setShowModal(false);
  };
  return (
    <Fragment>
      {showModal && <Cart onClose={hideModalHandle} />}
      <Header onShow={showModalHandle} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
};

export default App;
