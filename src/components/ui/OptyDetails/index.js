import Card from "../common/Card";
import optyLogo from "../../../images/opty.svg";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getOptyDetailFields } from "../../../helpers/optyDetailsHelper";
import { getOpportunitiesByIds } from "../../../redux/api/selectors/opportunites.selectors";

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
  const { optyArray, match } = props;
  const optyToDisplay = optyArray[0][match.params.opportunityId];
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

const mapStateToProps = (state, ownProps) => {
  return {
    optyArray: getOpportunitiesByIds(state, {
      id: ownProps.match.params.opportunityId,
    }),
  };
};

export default withRouter(connect(mapStateToProps, null)(OptyDetails));
