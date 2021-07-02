import { connect } from "react-redux";
import classes from "./Pagination.module.css";
import {
  hasNextPage as productHasNextPage,
  hasPreviousPage as productHasPreviousPage,
  getPageKeys as productPageKeys,
} from "../../../../redux/api/selectors/products.selectors";

import {
  hasNextPage as userHasNextPage,
  hasPreviousPage as userHasPreviousPage,
  getPageKeys as userPageKeys,
} from "../../../../redux/api/selectors/users.selectors";

import {
  hasNextPage as contactHasNextPage,
  hasPreviousPage as contactHasPreviousPage,
  getPageKeys as contactPageKeys,
} from "../../../../redux/api/selectors/contacts.selectors";

import PropTypes from "prop-types";

import { paginationActions } from "../../../../redux/ui/modules/pagination";

const Pagination = (props) => {
  const {
    handlePrevious,
    handleNext,
    handleFirst,
    handleLast,
    hasPrevious,
    hasNext,
    entityName,
    page,
  } = props;

  const firstClick = (event) => {
    event.preventDefault();
    handleFirst(entityName, page);
  };

  const nextClick = (event) => {
    event.preventDefault();
    handleNext(entityName, page);
  };

  const lastClick = (event) => {
    event.preventDefault();
    handleLast(entityName, page);
  };

  const previousClick = (event) => {
    event.preventDefault();
    handlePrevious(entityName, page);
  };

  return (
    <div>
      <ul className={classes["pagination"]}>
        <li className={classes["pagination-item"]}>
          <button
            className={`${
              hasPrevious ? classes["button"] : classes["button-disable"]
            }`}
            type="button"
            aria-label="Go to first page"
            onClick={firstClick}
          >
            First
          </button>
        </li>

        <li className={classes["pagination-item"]}>
          <button
            className={`${
              hasPrevious ? classes["button"] : classes["button-disable"]
            }`}
            disabled={hasPrevious ? false : true}
            type="button"
            aria-label="Go to previous page"
            onClick={previousClick}
          >
            Previous
          </button>
        </li>

        <li className={classes["pagination-item"]}>
          <button
            className={`${
              hasNext ? classes["button"] : classes["button-disable"]
            }`}
            type="button"
            disabled={hasNext ? false : true}
            aria-label="Go to next page"
            onClick={nextClick}
          >
            Next
          </button>
        </li>

        <li className={classes["pagination-item"]}>
          <button
            className={`${
              hasNext ? classes["button"] : classes["button-disable"]
            }`}
            type="button"
            aria-label="Go to last page"
            onClick={lastClick}
          >
            Last
          </button>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { entityName } = ownProps;
  if (entityName == "Products") {
    return {
      hasNext: productHasNextPage(state),
      hasPrevious: productHasPreviousPage(state),
      page: productPageKeys(state),
    };
  }

  if (entityName == "Users") {
    return {
      hasNext: userHasNextPage(state),
      hasPrevious: userHasPreviousPage(state),
      page: userPageKeys(state),
    };
  }

  if (entityName == "Contacts") {
    return {
      hasNext: contactHasNextPage(state),
      hasPrevious: contactHasPreviousPage(state),
      page: contactPageKeys(state),
    };
  }
};

const mapDispatchToProps = (dispatch) => ({
  handlePrevious: (entityName, page) => {
    dispatch(paginationActions.handlePreviousPagination(entityName, page));
  },
  handleNext: (entityName, page) => {
    dispatch(paginationActions.handleNextPagination(entityName, page));
  },
  handleFirst: (entityName, page) => {
    dispatch(paginationActions.handleFirstPagination(entityName, page));
  },
  handleLast: (entityName, page) => {
    dispatch(paginationActions.handleLastPagination(entityName, page));
  },
});

Pagination.propTypes = {
  handlePrevious: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleFirst: PropTypes.func.isRequired,
  handleLast: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool.isRequired,
  hasNext: PropTypes.bool.isRequired,
  entityName: PropTypes.string.isRequired,
  page: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
