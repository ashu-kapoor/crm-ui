import caseLogo from "../../../images/case.svg";
import { generateContactCaseDetailFields } from "../../../helpers/contactDetailsHelper";
import Card from "../common/Card";
import { Link } from "react-router-dom";

const cases = {
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

const ContactCases = ({ customerToDisplay }) => {
  const caseFields = generateContactCaseDetailFields(
    cases[customerToDisplay.cases[0]]
  );

  return (
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
      {caseFields}
    </Card>
  );
};

export default ContactCases;
