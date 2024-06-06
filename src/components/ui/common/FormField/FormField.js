import classes from "./FormField.module.css";
import { Link } from "react-router-dom";

const FormField = ({
  id,
  type,
  labelText,
  fieldValue,
  changeHandler,
  blurHandler,
  isInvalid,
  styleName, //values display-only, //form //login
  disabled,
  linkPath,
}) => {
  const filedClasses = `${classes["form-control"]} ${
    isInvalid ? `${classes["invalid"]}` : ""
  } ${classes[styleName]}`;

  const input = (
    <input
      type={type}
      id={id}
      value={fieldValue}
      onChange={changeHandler}
      onBlur={blurHandler}
      disabled={disabled}
    />
  );

  return (
    <div className={filedClasses}>
      <label htmlFor={id}>{labelText}</label>
      {linkPath ? <Link to={linkPath}>{input}</Link> : input}
    </div>
  );
};

export default FormField;
