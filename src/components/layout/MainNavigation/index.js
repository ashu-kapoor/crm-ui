import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>CRM Demo</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/contacts" activeClassName={classes.active}>
              Contacts
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName={classes.active}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/users" activeClassName={classes.active}>
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
