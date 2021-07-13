import opportunityLogo from "../../../images/opty.svg";
import { generateContactOptyDetailFields } from "../../../helpers/contactDetailsHelper";
import Card from "../common/Card";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getOpportunitiesByIds } from "../../../redux/api/selectors/opportunites.selectors";

/*const opportunities = {
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
};*/

const ContactOpportunities = ({ customerToDisplay, opportunities }) => {
  const opytObj =
    opportunities.find((o) =>
      o.hasOwnProperty(customerToDisplay.opportunities[0])
    ) || {};

  const optyFields = generateContactOptyDetailFields(
    opytObj[customerToDisplay.opportunities[0]]
  );

  return (
    <Card
      headerTitle={`Opportunites (${customerToDisplay.opportunities.length})`}
      showHeader={true}
      showFooter={true}
      showNewButton={true}
      headerImage={opportunityLogo}
      newClickHandler={(event) => {
        event.preventDefault();
        alert("hello1");
      }}
      widthToFull={true}
      footerContent={
        customerToDisplay.opportunities.length > 0 ? (
          <Link to={"/contacts/" + customerToDisplay._id + "/opportunities"}>
            View All
          </Link>
        ) : (
          "View All"
        )
      }
    >
      {optyFields}
    </Card>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    opportunities: getOpportunitiesByIds(state, {
      ids: ownProps.customerToDisplay.opportunities,
    }),
  };
};

export default connect(mapStateToProps, null)(ContactOpportunities);
