import attachmentLogo from "../../../images/attachment.svg";
import Card from "../common/Card";
import Table from "../common/Table";

const keyHeaders = ["Description", "Attachment"];
const headerMap = {
  Description: "name",
  Attachment: "path",
};

const ContactAttachments = ({ customerToDisplay }) => {
  return (
    <Card
      headerTitle={`Attachments (${customerToDisplay.attachments.length})`}
      showHeader={true}
      showFooter={false}
      showNewButton={true}
      headerImage={attachmentLogo}
      newClickHandler={(event) => {
        event.preventDefault();
        alert("hello1");
      }}
      widthToFull={true}
    >
      <Table
        data={customerToDisplay.attachments}
        linkHeader="Attachment"
        keyHeaders={keyHeaders}
        headerMap={headerMap}
        linkTo="/contacts/:contactId"
        styleName="childEntity"
      />
    </Card>
  );
};
export default ContactAttachments;
