import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = () => <div className={classes.backdrop}></div>;

const ModalContent = (props) => (
  <div className={classes.modal}>{props.children}</div>
);

const ModalOverlay = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, ModalOverlay)}
      {ReactDOM.createPortal(
        <ModalContent>{props.children}</ModalContent>,
        ModalOverlay
      )}
    </Fragment>
  );
};

export default Modal;
