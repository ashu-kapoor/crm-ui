import NavWrapper from "../../components/layout/NavWrapper";
import Card from "../../components/ui/common/Card";
import contactLogo from "../../images/contact.svg";
import ContactRelatedEntities from "../../components/ContactRelatedEntities";
import { useParams } from "react-router";

import { generateDetailFields } from "../../helpers/contactDetailsHelper";

//DUMMY DATA
const customers = {
  123: {
    title: "Mr",
    name: "Ashutosh",
    phone: "4545545",
    owner: "ownerId",
    address: {
      city: "Sydney",
      street: "Kent Street 1",
    },

    gender: "Male",
    id: "123",
    cases: ["caseId1", "caseId2", "caseId3"],
    opportunities: ["optyId1", "optyId2", "optyId3"],
    attachments: [],
  },
  456: {
    title: "Mr",
    name: "Ashutosh",
    phone: "4545545",
    owner: "ownerId",
    address: {
      city: "Sydney",
      street: "Kent Street 2",
    },

    gender: "Male",
    id: "456",
    cases: ["caseId4", "caseId5"],
    opportunities: ["optyId4", "optyId5", "optyId6"],
    attachments: [],
  },
  789: {
    title: "Mr",
    name: "Ashutosh",
    owner: "ownerId",
    address: {
      city: "Sydney",
      street: "Kent Street 3",
    },

    gender: "Male",
    city: "Sydney",
    id: "789",
    cases: ["caseId6", "caseId7"],
    opportunities: ["optyId7", "optyId8"],
    attachments: [],
  },
};

const ContactsDetailPage = () => {
  const params = useParams();
  const customerToDisplay = customers[params.contactId];
  const fields = generateDetailFields(customerToDisplay);
  return (
    <NavWrapper>
      <Card
        showHeader={true}
        showFooter={false}
        showNewButton={true}
        showEditButton={true}
        headerImage={contactLogo}
        isSticky={true}
        headerTitle={`${customerToDisplay.title} ${customerToDisplay.name}`}
        newClickHandler={(event) => {
          event.preventDefault();
          alert("hello1");
        }}
        editClickHandler={() => {
          alert("hello2");
        }}
        widthToFull={true}
      >
        {fields}
      </Card>
      <ContactRelatedEntities customerToDisplay={customerToDisplay} fields />
    </NavWrapper>
  );
};

export default ContactsDetailPage;
