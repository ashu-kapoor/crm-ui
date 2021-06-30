import { Route, Switch } from "react-router-dom";
import { Fragment } from "react";
import "./App.css";
import routes from "./routes";
import Alert from "./components/ui/Alert";

function App() {
  return (
    <Fragment>
      <Alert />
      <Switch>
        {routes.map((route) => (
          <Route exact path={route.path} key={route.key}>
            <route.Component {...route.props} />
          </Route>
        ))}
      </Switch>
    </Fragment>
  );
}

export default App;
