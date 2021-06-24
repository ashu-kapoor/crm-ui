import classes from "./FormField.module.css";

const FormField = ({
  id,
  type,
  labelText,
  fieldValue,
  changeHandler,
  blurHandler,
  isInvalid,
}) => {
  const filedClasses = `${classes["form-control"]} ${
    isInvalid ? `${classes["invalid"]}` : ""
  }`;
  return (
    <div className={filedClasses}>
      <label htmlFor={id}>{labelText}</label>
      <input
        type={type}
        id={id}
        value={fieldValue}
        onChange={changeHandler}
        onBlur={blurHandler}
      />
    </div>
  );
};

export default FormField;
