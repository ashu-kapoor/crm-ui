import { Fragment, useState } from "react";
import Modal from "../Modal";

const ContactsForm = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const onClose = (event) => {
    setIsVisible(false);
  };

  return (
    <Fragment>{isVisible && <Modal onClose={onClose}>Test</Modal>}</Fragment>
  );
};

export default ContactsForm;
