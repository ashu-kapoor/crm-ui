import NavWrapper from "../../components/layout/NavWrapper";
import optyLogo from "../../images/opty.svg";
import Card from "../../components/ui/common/Card";
import Table from "../../components/ui/common/Table";
import { useParams } from "react-router";

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

const opportunitiesData = {
  optyId1: {
    name: "Opty1",
    description: "Description1",
    stage: "PROSPECTING",
    products: ["prod1", "prod2", "prod3"],
    closeDate: "12-Dec-2020",
    owner: "123",
    contact: "123",
    id: "optyId1",
  },
  optyId2: {
    name: "Opty2",
    description: "Description2",
    stage: "PROSPECTING",
    products: ["prod1", "prod2", "prod3"],
    closeDate: "12-Dec-2020",
    owner: "ownerId1",
    contact: "123",
    id: "optyId2",
  },
  optyId3: {
    name: "Opty3",
    description: "Description3",
    stage: "PROSPECTING",
    products: ["prod1", "prod2", "prod3"],
    closeDate: "12-Dec-2020",
    owner: "ownerId1",
    contact: "456",
    id: "optyId3",
  },
};
const keyHeaders = ["Name", "Description", "Stage", "Close Date", "Owner"];
const headerMap = {
  Name: "name",
  Description: "description",
  Stage: "stage",
  "Close Date": "closeDate",
  Owner: "owner",
};

const ContactOptysPage = () => {
  const params = useParams();
  const contact = customers[params.contactId];
  const opties = [];
  contact.opportunities.forEach((optyId) => {
    opties.push(opportunitiesData[optyId]);
  });

  return (
    <NavWrapper>
      <Card
        showHeader={true}
        showFooter={true}
        showNewButton={true}
        showEditButton={false}
        headerImage={optyLogo}
        isSticky={true}
        footerContent={<div>Pagination Placeholder</div>}
        headerTitle="Opportunities"
        widthToFull={true}
        newClickHandler={(event) => {
          event.preventDefault();
          alert("hello1");
        }}
      >
        <Table
          data={opties}
          linkHeader="Name"
          keyHeaders={keyHeaders}
          headerMap={headerMap}
          linkTo={`/contacts/${params.contactId}/opportunities/:opportunityId`}
        />
      </Card>
    </NavWrapper>
  );
};
export default ContactOptysPage;
