import classes from "./Card.module.css";

const Card = (props) => {
  const classesName = `${classes.card} ${props.classesName}`;
  return <div className={classesName}>{props.children}</div>;
};

export default Card;
