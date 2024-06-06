import classes from "./NavWrapper.module.css";
import { Fragment } from "react";
import MainNavigation from "../MainNavigation";
import BreadCrumb from "../../ui/BreadCrumb";

const NavWrapper = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <BreadCrumb />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default NavWrapper;
