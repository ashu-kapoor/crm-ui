import classes from "./NavWrapper.module.css";
import { Fragment } from "react";
import MainNavigation from "../MainNavigation";

const NavWrapper = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default NavWrapper;
