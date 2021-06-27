import NavWrapper from "../../components/layout/NavWrapper";
import Card from "../../components/ui/common/Card";
import contactLogo from "../../images/contact.svg";
import ContactRelatedEntities from "../../components/ui/ContactRelatedEntities";
import ContactsForm from "../../components/ui/ContactsForm";
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
    attachments: [
      {
        name: "test file 1",
        path: "fileStorage\bc3eb83e-5142-4999-b0d4-660504414eab_questions.txt",
      },
      {
        name: "test file 2",
        path: "fileStoragee8fd08d0-ab1c-410e-bfec-be462701c08d_questions.txt",
      },
    ],
    contact: "123",
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
    contact: "456",
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
    contact: "789",
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
