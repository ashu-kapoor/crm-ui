import { connect } from "react-redux";
import classes from "./Pagination.module.css";
import {
  hasNextPage,
  hasPreviousPage,
} from "../../../../redux/api/selectors/products.selectors";
import { productsActions } from "../../../../redux/api/actions/products.actions";

const Pagination = (props) => {
  const {
    handlePrevious,
    handleNext,
    handleFirst,
    handleLast,
    hasPrevious,
    hasNext,
  } = props;

  const entityName = "Products";

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

const mapStateToProps = (state) => ({
  hasNext: hasNextPage(state),
  hasPrevious: hasPreviousPage(state),
});

const mapDispatchToProps = (dispatch) => ({
  handlePrevious: () => {
    dispatch(productsActions.api.products.pagination.previous());
  },
  handleNext: () => {
    dispatch(productsActions.api.products.pagination.next());
  },
  handleFirst: () => {
    dispatch(productsActions.api.products.pagination.first());
  },
  handleLast: () => {
    dispatch(productsActions.api.products.pagination.last());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
