import Table from "../../components/ui/common/Table";
import NavWrapper from "../../components/layout/NavWrapper";
import Card from "../../components/ui/common/Card";
import contactLogo from "../../images/contact.svg";
import { connect } from "react-redux";
import { getContactsByPagination } from "../../redux/api/selectors/contacts.selectors";
import Pagination from "../../components/ui/common/Pagination";

//DUMMY DATA
/*const customers = {
  123: {
    title: "Mr",
    name: "Ashutosh",
    phone: "4545545",
    city: "Sydney",
    id: "123",
  },
  456: {
    title: "Mr",
    name: "Ashutosh",
    phone: "4545545",
    city: "Sydney",
    id: "456",
  },
  789: {
    title: "Mr",
    name: "Ashutosh",
    phone: "4545545",
    city: "Sydney",
    id: "789",
  },
};*/

const keyHeaders = ["Title", "Name", "Phone", "City"];
const headerMap = {
  Title: "title",
  Name: "name",
  Phone: "phone",
  City: "address.city",
};

const AllContacts = (props) => {
  const { customers } = props;
  return (
    <NavWrapper>
      <Card
        showHeader={true}
        showFooter={true}
        showNewButton={false}
        showEditButton={false}
        headerImage={contactLogo}
        isSticky={true}
        footerContent={<Pagination entityName="Contacts" />}
        headerTitle="Contacts"
        widthToFull={true}
      >
        <Table
          data={customers}
          linkHeader="Name"
          keyHeaders={keyHeaders}
          headerMap={headerMap}
          linkTo="/contacts/:contactId"
          styleName="childEntity"
        />
      </Card>
    </NavWrapper>
  );
};

const mapStateToProps = (state) => {
  const allContacts = getContactsByPagination(state);
  return { customers: allContacts };
};

/*const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(userActions.handleGetUsers()),
});*/

export default connect(mapStateToProps, null)(AllContacts);
