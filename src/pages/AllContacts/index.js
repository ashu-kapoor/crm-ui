import Table from "../../components/ui/common/Table";
import NavWrapper from "../../components/layout/NavWrapper";
import HeaderCard from "../../components/ui/common/HeaderCard";

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
      <HeaderCard title="Contacts">
        <Table
          data={customers}
          linkHeader="Name"
          keyHeaders={keyHeaders}
          headerMap={headerMap}
          linkTo="/contacts/:contactId"
        />
      </HeaderCard>
    </NavWrapper>
  );
};

export default AllContacts;
