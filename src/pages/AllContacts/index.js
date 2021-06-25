import Table from "../../components/ui/common/Table";
import NavWrapper from "../../components/layout/NavWrapper";
import Card from "../../components/ui/common/Card";
import contactLogo from "../../images/contact.svg";

//DUMMY DATA
const customers = {
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
};

const keyHeaders = ["Title", "Name", "Phone", "City"];
const headerMap = {
  Title: "title",
  Name: "name",
  Phone: "phone",
  City: "city",
};

const AllContacts = () => {
  return (
    <NavWrapper>
      <Card
        showHeader={true}
        showFooter={true}
        showNewButton={false}
        showEditButton={false}
        headerImage={contactLogo}
        isSticky={true}
        footerContent={<div>Pagination Placeholder</div>}
        headerTitle="Contacts"
        widthToFull={true}
      >
        <Table
          data={customers}
          linkHeader="Name"
          keyHeaders={keyHeaders}
          headerMap={headerMap}
          linkTo="/contacts/:contactId"
        />
      </Card>
    </NavWrapper>
  );
};

export default AllContacts;
