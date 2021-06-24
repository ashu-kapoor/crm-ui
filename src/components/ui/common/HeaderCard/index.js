import SimpleCard from "../SimpleCard";
import classes from "./HeaderCard.module.css";

const HeaderCard = (props) => {
  return (
    <SimpleCard>
      <div className={classes["card-header"]}>{props.title}</div>
      <div className={classes["card-container"]}>{props.children}</div>
    </SimpleCard>
  );
};
export default HeaderCard;
