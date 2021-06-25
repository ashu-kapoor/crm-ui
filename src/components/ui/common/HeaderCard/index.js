import SimpleCard from "../SimpleCard";
import classes from "./HeaderCard.module.css";

const HeaderCard = (props) => {
  /*let className = `${classes["card"]} ${
    props.childContainer ? classes["child-container"] : ""
  }`;*/
  return (
    <SimpleCard
      className="card"
      childContainer={props.childContainer}
      sticky={props.sticky}
    >
      <div
        className={`${classes["card-header"]} ${
          props.sticky ? classes["sticky-header"] : ""
        }`}
      >
        {props.title}
      </div>
      <div className={classes["card-content"]}>{props.children}</div>
    </SimpleCard>
  );
};
export default HeaderCard;
