import Card from "../common/Card";
import caseLogo from "../../../images/case.svg";
import { useParams } from "react-router";

import { getCaseDetailFields } from "../../../helpers/caseDetailsHelper";

//DUMMY DATA

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

const CaseDetails = (props) => {
  const params = useParams();
  const caseId = params.caseId;
  const caseToDisplay = casesData[caseId];
  const fields = getCaseDetailFields(caseToDisplay);

  return (
    <Card
      showHeader={true}
      showFooter={false}
      showNewButton={true}
      showEditButton={true}
      headerImage={caseLogo}
      isSticky={true}
      headerTitle="Case"
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
  );
};

export default CaseDetails;
