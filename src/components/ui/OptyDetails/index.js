import Card from "../common/Card";
import optyLogo from "../../../images/opty.svg";
import { useParams } from "react-router";

import { getOptyDetailFields } from "../../../helpers/optyDetailsHelper";

//DUMMY DATA

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

const OptyDetails = (props) => {
  const params = useParams();
  const opportunityId = params.opportunityId;
  const optyToDisplay = opportunitiesData[opportunityId];
  const fields = getOptyDetailFields(optyToDisplay);

  return (
    <Card
      showHeader={true}
      showFooter={false}
      showNewButton={true}
      showEditButton={true}
      headerImage={optyLogo}
      isSticky={true}
      headerTitle="Opportunity"
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

export default OptyDetails;
