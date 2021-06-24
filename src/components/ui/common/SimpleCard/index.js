import classes from "./SimpleCard.module.css";

const SimpleCard = (props) => {
  const cardClasses = `${classes["card"]} ${classes[props.className]}`;
  return <div className={cardClasses}>{props.children}</div>;
};

export default SimpleCard;
