import { join } from "lodash";

const baseUrl = "http://localhost:8080";
const basePath = "/crm/v1/";

export const apiEndPointConfig = {
  baseUrl,
  basePath,
  getUsersUrl: "users",
  getUsersByIdUrl: "users/{userId}",
  getProductsUrl: "products",
  getProductsByIdUrl: "products/{productId}",
  postAuthUrl: "auth",
};
