import { Fragment } from "react";
import { withRouter } from "react-router";
import classes from "./BreadCrumb.module.css";

const BreadCrumb = (props) => {
  const { match, location, history } = props;

  const clickHandler = (event) => {
    event.preventDefault();
    let elem = event.target;
    if (elem.tagName === "SPAN") {
      elem = elem.closest("a");
    }
    history.push(elem.getAttribute("href"));
  };

  const hasContactId = match.params.hasOwnProperty("contactId");
  const hasCaseId = match.params.hasOwnProperty("caseId");
  const hasOpportunityId = match.params.hasOwnProperty("opportunityId");
  if (
    location.pathname.toLowerCase().indexOf("contacts") >= 0 &&
    hasContactId
  ) {
    return (
      <div className={classes["container"]}>
        <div className={classes["breadcrumb"]}>
          <a href="/contacts" onClick={clickHandler}>
            <span className={classes["breadcrumb__inner"]}>
              <span className={classes["breadcrumb__desc"]}>All Contacts</span>
            </span>
          </a>
          {!hasCaseId && location.pathname.toLowerCase().indexOf("cases") >= 0 && (
            <a
              href={`/contacts/${match.params.contactId}`}
              onClick={clickHandler}
            >
              <span className={classes["breadcrumb__inner"]}>
                <span className={classes["breadcrumb__desc"]}>Contact</span>
              </span>
            </a>
          )}
          {hasCaseId && (
            <a
              href={`/contacts/${match.params.contactId}/cases`}
              onClick={clickHandler}
            >
              <span className={classes["breadcrumb__inner"]}>
                <span className={classes["breadcrumb__desc"]}>
                  Contact Cases
                </span>
              </span>
            </a>
          )}
        </div>
      </div>
    );
  }
  return <Fragment />;
};

export default withRouter(BreadCrumb);
