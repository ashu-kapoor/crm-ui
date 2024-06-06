import NavWrapper from "../../components/layout/NavWrapper";
import caseLogo from "../../images/case.svg";
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

const casesData = {
  caseId1: {
    caseNumber: 100,
    description: "Test Case 1",
    stage: "NEW",
    priority: "HIGH",
    owner: "ownerId1",
    contact: "123",
    id: "caseId1",
  },
  caseId2: {
    caseNumber: 101,
    description: "Test Case 2",
    stage: "NEW",
    priority: "HIGH",
    owner: "ownerId1",
    contact: "123",
    id: "caseId2",
  },
  caseId3: {
    caseNumber: 100,
    description: "Test Case 3",
    stage: "NEW",
    priority: "HIGH",
    owner: "ownerId2",
    contact: "456",
    id: "caseId3",
  },
};

const keyHeaders = ["Case Number", "Description", "Stage", "Priority", "Owner"];
const headerMap = {
  "Case Number": "caseNumber",
  Description: "description",
  Stage: "stage",
  Priority: "priority",
  Owner: "owner",
};

const ContactCasesPage = () => {
  const params = useParams();
  const contact = customers[params.contactId];
  const cases = [];
  contact.cases.forEach((caseId) => {
    cases.push(casesData[caseId]);
  });

  return (
    <NavWrapper>
      <Card
        showHeader={true}
        showFooter={true}
        showNewButton={true}
        showEditButton={false}
        headerImage={caseLogo}
        isSticky={true}
        footerContent={<div>Pagination Placeholder</div>}
        headerTitle="Cases"
        widthToFull={true}
        newClickHandler={(event) => {
          event.preventDefault();
          alert("hello1");
        }}
      >
        <Table
          data={cases}
          linkHeader="Case Number"
          keyHeaders={keyHeaders}
          headerMap={headerMap}
          linkTo={`/contacts/${params.contactId}/cases/:caseId`}
        />
      </Card>
    </NavWrapper>
  );
};
export default ContactCasesPage;
