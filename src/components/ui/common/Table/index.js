import classes from "./Table.module.css";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { get } from "lodash";
import {
  tableMouseOverHandler,
  tableMouseOutHandler,
  getLink,
  parseAttachmentData,
} from "./helper";

//Supports upto 6 columns
const Table = ({
  data,
  linkHeader,
  keyHeaders,
  headerMap,
  linkTo,
  styleName,
}) => {
  let headerJsx = [];

  const noOfColumns = keyHeaders.length;

  if (!data || Object.keys(data).length === 0) {
    return <Fragment>No data Found</Fragment>;
  }

  keyHeaders.forEach((header) => {
    headerJsx.push(
      <div
        key={`header---${header}`}
        className={`${classes["Rtable-cell"]} ${classes["Rtable-cell--head"]}`}
      >
        <h3>{header}</h3>
      </div>
    );
  });

  let dark = false;

  const dataColumns = Object.keys(data).map(function (key, index) {
    let jsx = [];

    for (let header of keyHeaders) {
      jsx.push(
        <div
          onMouseEnter={tableMouseOverHandler}
          onMouseLeave={tableMouseOutHandler}
          key={key + "---" + header}
          id={key + "---" + header}
          className={`${classes["Rtable-cell"]} ${
            keyHeaders[keyHeaders.length - 1] === header
              ? classes["Rtable-cell--foot"]
              : ""
          } `}
        >
          {header === linkHeader ? (
            <Link to={getLink(linkTo, data[key]._id)}>
              {header === "Attachment"
                ? parseAttachmentData(data[key][headerMap[header]])
                : data[key][headerMap[header]]}
            </Link>
          ) : (
            get(data[key], get(headerMap, header, ""), "")
          )}
        </div>
      );
    }
    dark = !dark;
    return jsx;
  });

  return (
    <div
      className={`${classes.Rtable} ${
        classes["Rtable--" + noOfColumns + "cols"]
      } ${classes["Rtable--collapse"]} ${
        styleName && styleName === "childEntity"
          ? classes["Rtable-childentity"]
          : ""
      }`}
    >
      {headerJsx}
      {dataColumns}
    </div>
  );
};

export default Table;
