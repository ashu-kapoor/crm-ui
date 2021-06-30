import PropTypes from "prop-types";
import Table from "../../components/ui/common/Table";
import NavWrapper from "../../components/layout/NavWrapper";
import Card from "../../components/ui/common/Card";
import productLogo from "../../images/products.svg";

import { getAllProducts } from "../../redux/api/selectors/products.selectors";
import { productActions } from "../../redux/ui/modules/products";
import { connect } from "react-redux";
import { useEffect } from "react";

//DUMMY DATA
/*const products = {
  123: {
    name: "Test Product 1",
    code: "TST01",
    listPrice: "12.22",
    id: "123",
  },
  456: {
    name: "Test Product 2",
    code: "TST02",
    listPrice: "12.22",
    id: "456",
  },
  789: {
    name: "Test Product 3",
    code: "TST03",
    listPrice: "12.22",
    id: "789",
  },
};*/

const mapStateToProps = (state) => {
  const allProducts = getAllProducts(state);
  return { products: allProducts };
};

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(productActions.handleGetProducts()),
});

const keyHeaders = ["Name", "Code", "List Price"];
const headerMap = {
  Name: "name",
  Code: "code",
  "List Price": "listPrice",
};

const AllProducts = (props) => {
  const { fetchProducts, products } = props;

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <NavWrapper>
      <Card
        showHeader={true}
        showFooter={true}
        showNewButton={false}
        showEditButton={false}
        headerImage={productLogo}
        isSticky={true}
        footerContent={<div>Pagination Placeholder</div>}
        headerTitle="Products"
        widthToFull={true}
      >
        <Table
          data={products}
          linkHeader="Code"
          keyHeaders={keyHeaders}
          headerMap={headerMap}
          linkTo="/products/:productId"
          styleName="childEntity"
        />
      </Card>
    </NavWrapper>
  );
};

AllProducts.propTypes = {
  products: PropTypes.object.isRequired,
  fetchProducts: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
