import FormField from "../common/FormField/FormField";
import Card from "../common/Card";
import SimpleButton from "../common/SimpleButton/SimpleButton";
import classes from "./LoginForm.module.css";
import useInput from "../../../hooks/use-input";
import {
  emailValidator,
  passwordValidator,
} from "../../../validators/loginValidators";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { authAction } from "../../../redux/ui/modules/auth";

const LoginForm = (props) => {
  const { handleLogin } = props;

  const {
    inputIsValid: emailIsValid,
    value: emailValue,
    onChange: emailChangeHandler,
    onBlur: emailBlurHandler,
    onReset: emailReset,
  } = useInput(emailValidator);

  const {
    inputIsValid: passwordIsValid,
    value: passwordValue,
    onChange: passwordChangeHandler,
    onBlur: passwordBlurHandler,
    onReset: passwordReset,
  } = useInput(passwordValidator);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(emailValue);
    console.log(passwordValue);
    handleLogin(emailValue, passwordValue);
    emailReset();
    passwordReset();
  };

  let formIsValid = false;

  if (passwordIsValid && emailIsValid) {
    formIsValid = true;
  }

  return (
    <Card
      showHeader={false}
      showFooter={false}
      showNewButton={false}
      showEditButton={false}
      isSticky={false}
      widthToFull={false}
    >
      <form onSubmit={formSubmitHandler}>
        <div className={classes["control-group"]}>
          <FormField
            id="email"
            type="text"
            labelText="Email"
            fieldValue={emailValue}
            changeHandler={emailChangeHandler}
            blurHandler={emailBlurHandler}
            isInvalid={!emailIsValid}
            styleName="login"
          />
          <FormField
            id="password"
            type="Password"
            labelText="Password"
            fieldValue={passwordValue}
            changeHandler={passwordChangeHandler}
            blurHandler={passwordBlurHandler}
            isInvalid={!passwordIsValid}
            styleName="login"
          />
        </div>
        <SimpleButton disableButton={!formIsValid} buttonText="Login" />
        <div></div>
      </form>
    </Card>
  );
};

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  handleLogin: (email, password) =>
    dispatch(authAction.handleLogin(email, password)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
