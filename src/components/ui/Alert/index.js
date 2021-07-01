import React from "react";
import classes from "./Alert.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  isNotificationVisible,
  notificationStyle,
  getNotificationMessage,
} from "../../../redux/ui/selectors/notification.selectors";
import { notificationAction } from "../../../redux/ui/modules/notification";
import constants from "../../../redux/constants";
import { Fragment } from "react";

class Alert extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  setTimer() {
    if (this.timer != null) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(
      function () {
        //dispatch self action to hide after delay time provided
        if (this.props.isVisible) {
          this.props.hideMe(this.props.style, this.props.message);
        }
        this.timer = null;
      }.bind(this),
      3000
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.isVisible && !prevProps.isVisible) {
      this.setTimer();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    let style = "failure";

    if (constants.NOTIFY_MSG === this.props.style) {
      style = "success";
    } else if (constants.NOTIFY_ERROR === this.props.style) {
      style = "failure";
    }

    return this.props.isVisible ? (
      <div className={`${classes["alert-box"]} ${classes[style]}`}>
        {this.props.message}
      </div>
    ) : (
      <Fragment />
    );
  }
}

Alert.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  style: PropTypes.string.isRequired,
  message: PropTypes.string,
  showMe: PropTypes.func.isRequired,
  hideMe: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const isVisible = isNotificationVisible(state);
  const style = notificationStyle(state);
  const message = getNotificationMessage(state);
  return { isVisible, style, message };
};

const mapDispatchToProps = (dispatch) => ({
  showMe: (mode, message) => {
    console.log("showme " + mode + message);
    dispatch(notificationAction(true, mode, message));
  },
  hideMe: (mode, message) => {
    console.log("hideme " + mode + message);
    dispatch(notificationAction(false, mode, message));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
