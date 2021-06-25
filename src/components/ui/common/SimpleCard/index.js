import classes from "./SimpleCard.module.css";

const SimpleCard = (props) => {
  const cardClasses = `${classes["card"]} ${
    props.className ? classes[props.className] : ""
  } ${props.childContainer ? classes["child-container"] : ""} ${
    props.sticky ? classes["sticky"] : ""
  }`;
  return <div className={cardClasses}>{props.children}</div>;
};

export default SimpleCard;
