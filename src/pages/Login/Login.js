import classes from "./Login.module.css";
import LoginForm from "../../components/ui/LoginForm/LoginForm";
import loginLogo from "../../images/login.svg";

const Home = () => {
  return (
    <div className={classes["home-wrapper"]}>
      <div className={classes["home-left"]}>
        <div className={classes["home-main"]}>
          <img alt="login" className={classes["Login-logo"]} src={loginLogo} />
          <LoginForm />
        </div>
        <footer className={classes["home-footer"]}>
          © 2021 ashutoshkapoor.com, inc. All rights reserved.{" "}
        </footer>
      </div>
      <div className={classes["home-right"]}>
        <div className={classes["home-right-content"]}>
          <h1>Features:</h1>
          <ul>
            <li>Protected Routes using custom component</li>
            <li>Uses redux, saga pattern for context management</li>
            <li>Local as well as server pagination</li>
          </ul>
          <h1>Functionality</h1>
          <ul>
            <li>For login please contact me</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
