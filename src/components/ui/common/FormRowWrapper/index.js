import classes from "./FormRowWrapper.module.css";
const FormRowWrapper = (props) => {
  return <div className={classes["row-wrapper"]}>{props.children}</div>;
};
export default FormRowWrapper;
