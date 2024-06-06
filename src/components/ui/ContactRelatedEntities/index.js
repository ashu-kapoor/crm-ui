import Card from "../common/Card";
import ContactOpportunities from "../ContactOpportunities";
import ContactCases from "../ContactCases";
import ContactAttachments from "../ContactAttachments";

const ContactRelatedEntities = ({ customerToDisplay }) => {
  return (
    <Card
      showHeader={true}
      isSticky={true}
      headerTitle="Related Entities"
      widthToFull={true}
    >
      <ContactOpportunities customerToDisplay={customerToDisplay} />
      <ContactCases customerToDisplay={customerToDisplay} />
      <ContactAttachments customerToDisplay={customerToDisplay} />
    </Card>
  );
};

export default ContactRelatedEntities;
