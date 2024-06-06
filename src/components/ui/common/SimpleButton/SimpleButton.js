import classes from "./SimpleButton.module.css";

const SimpleButton = ({ disableButton, buttonText }) => {
  return (
    <div className={classes["form-actions"]}>
      <button
        disabled={disableButton}
        className={`${classes["form-button"]} ${
          disableButton ? classes["invalid"] : ""
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default SimpleButton;
