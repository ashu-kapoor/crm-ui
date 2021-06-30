import { createActions } from "redux-actions";

export const casesActions = createActions({
  api: {
    cases: {
      get: {
        //payload creator
        REQUEST: [
          (getCasesParams) => {
            const { pathParams, params, ...restParams } = getCasesParams || {};
            return { pathParams: pathParams || {}, params: { ...restParams } };
          },
          //meta creator
          (getCasesParams) => {
            const { meta } = getCasesParams;
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
          (err, metadata) => ({ meta: metadata, entity: "Cases" }),
        ],
      },
      post: {
        //payload creator
        REQUEST: [
          (postCasesParams) => {
            const { pathParams, params, query } = postCasesParams;
            return { pathParams, params, query };
          },
          //meta creator
          (postCasesParams) => {
            const { meta } = postCasesParams;
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
          (err, metadata) => ({ meta: metadata, entity: "Cases" }),
        ],
      },
      put: {
        //payload creator
        REQUEST: [
          (putCasesParams) => {
            const { pathParams, params, query } = putCasesParams;
            return { pathParams, params, query };
          },
          //meta creator
          (putCasesParams) => {
            const { meta } = putCasesParams;
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
          (err, metadata) => ({ meta: metadata, entity: "Cases" }),
        ],
      },
      delete: {
        //payload creator
        REQUEST: [
          (deleteCasesParams) => {
            const { pathParams, params } = deleteCasesParams;
            return { pathParams, params };
          },
          //meta creator
          (deleteCasesParams) => {
            const { meta } = deleteCasesParams;
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
          (err, metadata) => ({ meta: metadata, entity: "Cases" }),
        ],
      },
    },
  },
}); //actions map
