import { connect } from "react-redux";
import classes from "./Pagination.module.css";
import {
  hasNextPage as productHasNextPage,
  hasPreviousPage as productHasPreviousPage,
} from "../../../../redux/api/selectors/products.selectors";

import {
  hasNextPage as userHasNextPage,
  hasPreviousPage as userHasPreviousPage,
} from "../../../../redux/api/selectors/users.selectors";

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
  } = props;

  const firstClick = (event) => {
    event.preventDefault();
    handleFirst(entityName);
  };

  const nextClick = (event) => {
    event.preventDefault();
    handleNext(entityName);
  };

  const lastClick = (event) => {
    event.preventDefault();
    handleLast(entityName);
  };

  const previousClick = (event) => {
    event.preventDefault();
    handlePrevious(entityName);
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
    };
  }

  if (entityName == "Users") {
    return {
      hasNext: userHasNextPage(state),
      hasPrevious: userHasPreviousPage(state),
    };
  }
};

const mapDispatchToProps = (dispatch) => ({
  handlePrevious: (entityName) => {
    dispatch(paginationActions.handlePreviousPagination(entityName));
  },
  handleNext: (entityName) => {
    dispatch(paginationActions.handleNextPagination(entityName));
  },
  handleFirst: (entityName) => {
    dispatch(paginationActions.handleFirstPagination(entityName));
  },
  handleLast: (entityName) => {
    dispatch(paginationActions.handleLastPagination(entityName));
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
