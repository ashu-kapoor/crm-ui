import { Route, Switch } from "react-router-dom";
import { Fragment } from "react";
import "./App.css";
import routes from "./routes";
import Alert from "./components/ui/Alert";
import ProtectedRoute from "./components/layout/ProtectedRoute";

function App() {
  return (
    <Fragment>
      <Alert />
      <Switch>
        {routes.map((route) => {
          if (route.key === 1) {
            return (
              <Route exact path={route.path} key={route.key}>
                <route.Component {...route.props} />
              </Route>
            );
          }

          return (
            <ProtectedRoute exact path={route.path} key={route.key}>
              <route.Component {...route.props} />
            </ProtectedRoute>
          );
        })}
      </Switch>
    </Fragment>
  );
}

export default App;
