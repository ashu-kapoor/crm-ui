import classes from "./Card.module.css";
import EditLogo from "../../../../images/edit.svg";
import NewLogo from "../../../../images/add.svg";

const Card = ({
  showHeader,
  showFooter,
  showNewButton,
  showEditButton,
  headerImage,
  isSticky,
  children,
  footerContent,
  headerTitle,
  newClickHandler,
  editClickHandler,
  widthToFull,
}) => {
  const classlist = `${classes.container} ${
    isSticky ? classes["sticky"] : ""
  } ${widthToFull ? classes["fullwidth"] : ""}`;
  return (
    <div className={classlist}>
      {showHeader && (
        <header className={classes["container-header"]}>
          <div className={classes.title}>
            {headerImage && <img alt={headerTitle} src={headerImage} />}
            <div>{headerTitle}</div>
          </div>

          {(showNewButton || showEditButton) && (
            <div className={classes.button}>
              {showNewButton && (
                <button className={classes["button-new"]}>
                  <img src={NewLogo} alt="New" onClick={newClickHandler}></img>
                </button>
              )}
              {showEditButton && (
                <button className={classes["button-edit"]}>
                  <img
                    src={EditLogo}
                    alt="Edit"
                    onClick={editClickHandler}
                  ></img>
                </button>
              )}
            </div>
          )}
        </header>
      )}
      <section>{children}</section>
      {showFooter && <footer>{footerContent}</footer>}
    </div>
  );
};

export default Card;
