import { createActions } from "redux-actions";

export const usersActions = createActions({
  api: {
    users: {
      get: {
        //payload creator
        REQUEST: [
          (getUserParams) => {
            const { pathParams, params, ...restParams } = getUserParams || {};
            return { pathParams: pathParams || {}, params: { ...restParams } };
          },
          //meta creator
          (getUserParams) => {
            const { meta } = getUserParams;
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
          (err, metadata) => ({ meta: metadata, entity: "Users" }),
        ],
      },
      post: {
        //payload creator
        REQUEST: [
          (postUserParams) => {
            const { pathParams, params, query } = postUserParams;
            return { pathParams, params, query };
          },
          //meta creator
          (postUserParams) => {
            const { meta } = postUserParams;
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
          (err, metadata) => ({ meta: metadata, entity: "Users" }),
        ],
      },
      put: {
        //payload creator
        REQUEST: [
          (putUserParams) => {
            const { pathParams, params, query } = putUserParams;
            return { pathParams, params, query };
          },
          //meta creator
          (putUserParams) => {
            const { meta } = putUserParams;
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
          (err, metadata) => ({ meta: metadata, entity: "Users" }),
        ],
      },
      delete: {
        //payload creator
        REQUEST: [
          (deleteUserParams) => {
            const { pathParams, params } = deleteUserParams;
            return { pathParams, params };
          },
          //meta creator
          (deleteUserParams) => {
            const { meta } = deleteUserParams;
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
          (err, metadata) => ({ meta: metadata, entity: "Users" }),
        ],
      },
    },
  },
}); //actions map
