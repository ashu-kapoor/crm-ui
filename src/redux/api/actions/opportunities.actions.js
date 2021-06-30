import { createActions } from "redux-actions";

export const opportunitiesActions = createActions({
  api: {
    opportunities: {
      get: {
        //payload creator
        REQUEST: [
          (getOppotunityParams) => {
            const { pathParams, params, ...restParams } =
              getOppotunityParams || {};
            return { pathParams: pathParams || {}, params: { ...restParams } };
          },
          //meta creator
          (getOppotunityParams) => {
            const { meta } = getOppotunityParams;
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
          (err, metadata) => ({ meta: metadata, entity: "Oppotunitys" }),
        ],
      },
      post: {
        //payload creator
        REQUEST: [
          (postOppotunityParams) => {
            const { pathParams, params, query } = postOppotunityParams;
            return { pathParams, params, query };
          },
          //meta creator
          (postOppotunityParams) => {
            const { meta } = postOppotunityParams;
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
          (err, metadata) => ({ meta: metadata, entity: "Oppotunitys" }),
        ],
      },
      put: {
        //payload creator
        REQUEST: [
          (putOppotunityParams) => {
            const { pathParams, params, query } = putOppotunityParams;
            return { pathParams, params, query };
          },
          //meta creator
          (putOppotunityParams) => {
            const { meta } = putOppotunityParams;
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
          (err, metadata) => ({ meta: metadata, entity: "Oppotunitys" }),
        ],
      },
      delete: {
        //payload creator
        REQUEST: [
          (deleteOppotunityParams) => {
            const { pathParams, params } = deleteOppotunityParams;
            return { pathParams, params };
          },
          //meta creator
          (deleteOppotunityParams) => {
            const { meta } = deleteOppotunityParams;
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
          (err, metadata) => ({ meta: metadata, entity: "Oppotunitys" }),
        ],
      },
    },
  },
}); //actions map
