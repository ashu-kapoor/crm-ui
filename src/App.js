import { Route, Switch, Redirect } from "react-router-dom";
import { Fragment } from "react";
import "./App.css";

import Login from "./pages/Login/Login";
import AllContacts from "./pages/AllContacts";
import AllProducts from "./pages/AllProducts";
import AllUsers from "./pages/AllUsers";
import ContactsDetailPage from "./pages/ContactsDetailPage";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/contacts" exact>
          <AllContacts />
        </Route>
        <Route path="/contacts/:contactId/opportunities/:opportunityId">
          <div>OptyDetailPlaceHolder</div>
        </Route>
        <Route path="/contacts/:contactId/opportunities">
          <div>ALL opty for Contact Placeholder</div>
        </Route>
        <Route path="/contacts/:contactId/cases/:caseId">
          <div>CaseDetailPlaceHolder</div>
        </Route>
        <Route path="/contacts/:contactId/cases">
          <div>ALL case for Contact Placeholder</div>
        </Route>
        <Route path="/contacts/:contactId">
          <ContactsDetailPage />
        </Route>
        <Route path="/products" exact>
          <AllProducts />
        </Route>
        <Route path="/products/:productId"></Route>
        <Route path="/users" exact>
          <AllUsers />
        </Route>
        <Route path="/users/:userId"></Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
