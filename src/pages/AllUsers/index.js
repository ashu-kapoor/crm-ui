import Table from "../../components/ui/common/Table";
import NavWrapper from "../../components/layout/NavWrapper";
import HeaderCard from "../../components/ui/common/HeaderCard";

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
      <HeaderCard title="Users">
        <Table
          data={users}
          linkHeader="Email"
          keyHeaders={keyHeaders}
          headerMap={headerMap}
          linkTo="/users/:userId"
        />
      </HeaderCard>
    </NavWrapper>
  );
};

export default AllUsers;
