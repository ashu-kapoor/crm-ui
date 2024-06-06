import { createActions } from "redux-actions";

export const authActions = createActions({
  api: {
    auth: {
      post: {
        //payload creator
        REQUEST: [
          (postAuthParams) => {
            const { pathParams, params, query } = postAuthParams;
            return { pathParams, params, query };
          },
          //meta creator
          (postAuthParams) => {
            const { meta } = postAuthParams;
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
          (err, metadata) => ({ meta: metadata, entity: "Auth" }),
        ],
      },
    },
  },
}); //actions map
