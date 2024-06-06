import Card from "../common/Card";
import Table from "../common/Table";
import productLogo from "../../../images/products.svg";
import { useParams } from "react-router";

const opportunities = {
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

const productsData = {
  prod1: {
    code: "prod01",
    name: "Product 1",
    listPrice: "1200.00",
    id: "prod1",
  },
  prod2: {
    code: "prod02",
    name: "Product 2",
    listPrice: "1300.00",
    id: "prod2",
  },
  prod3: {
    code: "prod03",
    name: "Product 3",
    listPrice: "1205.00",
    id: "prod3",
  },
};

const keyHeaders = ["Name", "Code", "List Price"];
const headerMap = {
  Name: "name",
  Code: "code",
  "List Price": "listPrice",
};

const OptyProducts = () => {
  const params = useParams();
  const opportunityId = params.opportunityId;
  const products = [];
  const prods = opportunities[opportunityId]["products"];

  prods.forEach((productId) => {
    products.push(productsData[productId]);
  });

  return (
    <Card
      showHeader={true}
      isSticky={true}
      headerTitle="Related Entities"
      widthToFull={true}
    >
      <Card
        showHeader={true}
        showFooter={false}
        showNewButton={true}
        showEditButton={true}
        headerImage={productLogo}
        isSticky={false}
        headerTitle="Products"
        widthToFull={true}
        newClickHandler={(event) => {
          event.preventDefault();
          alert("hello1");
        }}
        editClickHandler={(event) => {
          event.preventDefault();
          alert("hello2");
        }}
      >
        <Table
          data={products}
          keyHeaders={keyHeaders}
          headerMap={headerMap}
          linkTo="/products/:productId"
        />
      </Card>
    </Card>
  );
};

export default OptyProducts;
