import FormField from "../common/FormField/FormField";
import SimpleCard from "../common/SimpleCard";
import SimpleButton from "../common/SimpleButton/SimpleButton";
import classes from "./LoginForm.module.css";

const LoginForm = (props) => {
  return (
    <SimpleCard className="login-card-style">
      <form>
        <div className={classes["control-group"]}>
          <FormField id="email" type="text" labelText="Email" fieldValue="" />
          <FormField
            id="password"
            type="text"
            labelText="Password"
            fieldValue=""
          />
        </div>
        <SimpleButton disableButton={false} buttonText="Login" />
        <div></div>
      </form>
    </SimpleCard>
  );
};

export default LoginForm;
