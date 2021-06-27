import Login from "../pages/Login/Login";
import AllContacts from "../pages/AllContacts";
import AllProducts from "../pages/AllProducts";
import AllUsers from "../pages/AllUsers";
import ContactsDetailPage from "../pages/ContactsDetailPage";
import ContactCasesPage from "../pages/ContactCasesPage";
import CaseDetailPage from "../pages/CaseDetailPage";
import { Redirect } from "react-router";
import { Fragment } from "react";

const routes = [
  { path: "/", Component: Login, key: 1 },
  { path: "/contacts", Component: AllContacts, key: 2 },
  {
    path: "/contacts/:contactId/opportunities/:opportunityId",
    Component: Fragment,
    key: 3,
  },
  {
    path: "/contacts/:contactId/opportunities",
    Component: Fragment,
    key: 4,
  },
  {
    path: "/contacts/:contactId/cases/:caseId",
    Component: CaseDetailPage,
    key: 5,
  },
  { path: "/contacts/:contactId/cases", Component: ContactCasesPage, key: 6 },
  { path: "/contacts/:contactId", Component: ContactsDetailPage, key: 7 },
  { path: "/products", Component: AllProducts, key: 8 },
  { path: "/products/:productId", Component: Fragment, key: 9 },
  { path: "/users", Component: AllUsers, key: 9 },
  { path: "/users/:userId", Component: Fragment, key: 10 },
  { path: "*", Component: Redirect, props: { to: "/" }, key: 11 },
];

export default routes;
