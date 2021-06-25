import classes from "./FormField.module.css";

const FormField = ({
  id,
  type,
  labelText,
  fieldValue,
  changeHandler,
  blurHandler,
  isInvalid,
  displayInRow,
  disabled,
}) => {
  const filedClasses = `${classes["form-control"]} ${
    isInvalid ? `${classes["invalid"]}` : ""
  } ${displayInRow ? classes["form-control-row"] : ""}`;
  return (
    <div className={filedClasses}>
      <label htmlFor={id}>{labelText}</label>
      <input
        type={type}
        id={id}
        value={fieldValue}
        onChange={changeHandler}
        onBlur={blurHandler}
        disabled={disabled}
      />
    </div>
  );
};

export default FormField;
