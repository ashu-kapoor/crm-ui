import { createActions } from "redux-actions";

export const contactsActions = createActions({
  api: {
    contacts: {
      get: {
        //payload creator
        REQUEST: [
          (getContactParams) => {
            const { pathParams, params, ...restParams } =
              getContactParams || {};
            return { pathParams: pathParams || {}, params: { ...restParams } };
          },
          //meta creator
          (getContactParams) => {
            const { meta } = getContactParams;
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
          (err, metadata) => ({ meta: metadata, entity: "Contacts" }),
        ],
      },
      post: {
        //payload creator
        REQUEST: [
          (postContactParams) => {
            const { pathParams, params, query } = postContactParams;
            return { pathParams, params, query };
          },
          //meta creator
          (postContactParams) => {
            const { meta } = postContactParams;
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
          (err, metadata) => ({ meta: metadata, entity: "Contacts" }),
        ],
      },
      put: {
        //payload creator
        REQUEST: [
          (putContactParams) => {
            const { pathParams, params, query } = putContactParams;
            return { pathParams, params, query };
          },
          //meta creator
          (putContactParams) => {
            const { meta } = putContactParams;
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
          (err, metadata) => ({ meta: metadata, entity: "Contacts" }),
        ],
      },
      delete: {
        //payload creator
        REQUEST: [
          (deleteContactParams) => {
            const { pathParams, params } = deleteContactParams;
            return { pathParams, params };
          },
          //meta creator
          (deleteContactParams) => {
            const { meta } = deleteContactParams;
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
          (err, metadata) => ({ meta: metadata, entity: "Contacts" }),
        ],
      },
    },
  },
}); //actions map
