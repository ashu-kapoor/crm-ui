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
import {
  isAuthError,
  isAuthFetching,
  getErrorMessage,
  isAuthorized,
} from "../../../redux/api/selectors/auth.selectors";
import { notificationAction } from "../../../redux/ui/modules/notification";
import constants from "../../../redux/constants";
import { useEffect } from "react";
import { Redirect } from "react-router";

const LoginForm = (props) => {
  const {
    handleLogin,
    isAuthError,
    isAuthFetching,
    errorMessage,
    showNotification,
    isAuthorized,
  } = props;

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

  useEffect(() => {
    if (isAuthError) {
      showNotification(constants.NOTIFY_ERROR, errorMessage);
    }
    if (isAuthFetching) {
      showNotification(constants.NOTIFY_MSG, "Signing In");
    }
  }, [isAuthError, showNotification, isAuthFetching]);

  if (isAuthorized) {
    return <Redirect to="/contacts" />;
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
  showNotification: PropTypes.func.isRequired,
  isAuthError: PropTypes.bool.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  isAuthFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isAuthError: isAuthError(state),
    isAuthFetching: isAuthFetching(state),
    errorMessage: getErrorMessage(state),
    isAuthorized: isAuthorized(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleLogin: (email, password) =>
    dispatch(authAction.handleLogin(email, password)),
  showNotification: (style, message) => {
    dispatch(notificationAction(true, style, message));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
