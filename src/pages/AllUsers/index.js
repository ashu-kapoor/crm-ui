import Table from "../../components/ui/common/Table";
import NavWrapper from "../../components/layout/NavWrapper";
import Card from "../../components/ui/common/Card";
import userLogo from "../../images/users.svg";

//DUMMY DATA
const users = {
  123: {
    name: "USER 1",
    email: "user1@gmail.com",
    role: "Admin",
    id: "123",
  },
  456: {
    name: "USER 1",
    email: "user1@gmail.com",
    role: "Admin",
    id: "456",
  },
  789: {
    name: "USER 1",
    email: "user1@gmail.com",
    role: "Admin",
    id: "789",
  },
};

const keyHeaders = ["Name", "Email", "Role"];
const headerMap = {
  Name: "name",
  Email: "email",
  Role: "role",
};

const AllUsers = () => {
  return (
    <NavWrapper>
      <Card
        showHeader={true}
        showFooter={true}
        showNewButton={false}
        showEditButton={false}
        headerImage={userLogo}
        isSticky={true}
        footerContent={<div>Pagination Placeholder</div>}
        headerTitle="Users"
        widthToFull={true}
      >
        <Table
          data={users}
          linkHeader="Email"
          keyHeaders={keyHeaders}
          headerMap={headerMap}
          linkTo="/users/:userId"
        />
      </Card>
    </NavWrapper>
  );
};

export default AllUsers;
