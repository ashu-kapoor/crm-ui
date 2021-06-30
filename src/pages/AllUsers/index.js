import { useEffect } from "react";
import PropTypes from "prop-types";
import Table from "../../components/ui/common/Table";
import NavWrapper from "../../components/layout/NavWrapper";
import Card from "../../components/ui/common/Card";
import userLogo from "../../images/users.svg";
import { getAllUsers } from "../../redux/api/selectors/users.selectors";
import { userActions } from "../../redux/ui/modules/users";
import { connect } from "react-redux";

//DUMMY DATA
/*const users = {
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
};*/

const mapStateToProps = (state) => {
  const allUsers = getAllUsers(state);
  return { users: allUsers };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(userActions.handleGetUsers()),
});

const keyHeaders = ["Name", "Email", "Role"];
const headerMap = {
  Name: "username",
  Email: "email",
  Role: "role",
};

const AllUsers = (props) => {
  const { users, fetchUsers } = props;

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

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

AllUsers.propTypes = {
  users: PropTypes.object.isRequired,
  fetchUsers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);
