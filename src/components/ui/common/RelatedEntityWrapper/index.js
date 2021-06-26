import classes from "./RelatedEntityWrapper.module.css";
const RelatedEntityWrapper = (props) => {
  return <div className={classes["column-wrapper"]}>{props.children}</div>;
};
export default RelatedEntityWrapper;
