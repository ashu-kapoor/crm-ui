import { Route } from "react-router";
import { connect } from "react-redux";
import { isAuthorized } from "../../../redux/api/selectors/auth.selectors";
import { Redirect } from "react-router-dom";

const ProtectedRoute = ({ isAuthorized, children, ...rest }) => {
  if (isAuthorized) {
    return <Route {...rest}>{children}</Route>;
  }
  return <Redirect to="/" />;
};

const mapStateToProps = (state) => {
  return {
    isAuthorized: isAuthorized(state),
  };
};

export default connect(mapStateToProps, null)(ProtectedRoute);
