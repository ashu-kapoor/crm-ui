import { createActions } from "redux-actions";

export const productsActions = createActions({
  api: {
    products: {
      get: {
        //payload creator
        REQUEST: [
          (getProductParams) => {
            const { pathParams, params, ...restParams } =
              getProductParams || {};
            return { pathParams: pathParams || {}, params: { ...restParams } };
          },
          //meta creator
          (getProductParams) => {
            const { meta } = getProductParams;
            return meta;
          },
        ],
        RECEIVE: [
          (data) => ({ ...data }),
          //meta creator
          (data, statusCode, resource, metadata = {}) => {
            //TODO
            return { data, statusCode, resource, metadata, Data: { data } };
          },
        ],
        ERROR: [
          (error) => error,
          (err, metadata) => ({ meta: metadata, entity: "Products" }),
        ],
      },
      post: {
        //payload creator
        REQUEST: [
          (postProductParams) => {
            const { pathParams, params, query } = postProductParams;
            return { pathParams, params, query };
          },
          //meta creator
          (postProductParams) => {
            const { meta } = postProductParams;
            return meta;
          },
        ],
        RECEIVE: [
          (data) => ({ ...data }),
          //meta creator
          (data, statusCode, resource, metadata = {}) => {
            //TODO
            return { data, statusCode, resource, metadata, Data: { data } };
          },
        ],
        ERROR: [
          (error) => ({ error }),
          (err, metadata) => ({ meta: metadata, entity: "Products" }),
        ],
      },
      put: {
        //payload creator
        REQUEST: [
          (putProductParams) => {
            const { pathParams, params, query } = putProductParams;
            return { pathParams, params, query };
          },
          //meta creator
          (putProductParams) => {
            const { meta } = putProductParams;
            return meta;
          },
        ],
        RECEIVE: [
          (data) => ({ ...data }),
          //meta creator
          (data, statusCode, resource, metadata = {}) => {
            //TODO
            return { data, statusCode, resource, metadata, Data: { data } };
          },
        ],
        ERROR: [
          (error) => ({ error }),
          (err, metadata) => ({ meta: metadata, entity: "Products" }),
        ],
      },
      delete: {
        //payload creator
        REQUEST: [
          (deleteProductParams) => {
            const { pathParams, params } = deleteProductParams;
            return { pathParams, params };
          },
          //meta creator
          (deleteProductParams) => {
            const { meta } = deleteProductParams;
            return meta;
          },
        ],
        RECEIVE: [
          (data) => ({ ...data }),
          //meta creator
          (data, statusCode, resource, metadata = {}) => {
            //TODO
            return { data, statusCode, resource, metadata, Data: { data } };
          },
        ],
        ERROR: [
          (error) => ({ error }),
          (err, metadata) => ({ meta: metadata, entity: "Products" }),
        ],
      },
      pagination: {
        FIRST: () => ({}),
        LAST: () => ({}),
        PREVIOUS: () => ({}),
        NEXT: () => ({}),
      },
    },
  },
}); //actions map
