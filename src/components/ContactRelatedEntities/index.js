import Card from "../ui/common/Card";
import opportunityLogo from "../../images/opty.svg";
import caseLogo from "../../images/case.svg";
import attachmentLogo from "../../images/attachment.svg";
import { Link } from "react-router-dom";

const ContactRelatedEntities = ({ customerToDisplay, fields }) => {
  return (
    <Card
      showHeader={true}
      isSticky={true}
      headerTitle="Related Entities"
      widthToFull={true}
    >
      <Card
        headerTitle={`Opportunites (${customerToDisplay.opportunities.length})`}
        showHeader={true}
        showFooter={true}
        showNewButton={true}
        headerImage={opportunityLogo}
        newClickHandler={(event) => {
          event.preventDefault();
          alert("hello1");
        }}
        widthToFull={true}
        footerContent={
          <Link to={"/contacts/" + customerToDisplay.id + "/opportunities"}>
            View All
          </Link>
        }
      >
        {fields}
      </Card>
      <Card
        headerTitle={`Cases (${customerToDisplay.cases.length})`}
        showHeader={true}
        showFooter={true}
        showNewButton={true}
        headerImage={caseLogo}
        newClickHandler={(event) => {
          event.preventDefault();
          alert("hello1");
        }}
        widthToFull={true}
        footerContent={
          <Link to={"/contacts/" + customerToDisplay.id + "/cases"}>
            View All
          </Link>
        }
      >
        {fields}
      </Card>
      <Card
        headerTitle={`Attachments (${customerToDisplay.attachments.length})`}
        showHeader={true}
        showFooter={true}
        showNewButton={true}
        headerImage={attachmentLogo}
        newClickHandler={(event) => {
          event.preventDefault();
          alert("hello1");
        }}
        widthToFull={true}
        footerContent={
          <Link to={"/contacts/" + customerToDisplay.id + "/attachments"}>
            View All
          </Link>
        }
      >
        {fields}
      </Card>
    </Card>
  );
};

export default ContactRelatedEntities;
