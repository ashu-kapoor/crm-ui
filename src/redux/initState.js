import constants from "./constants";

const initialState = {
  UI: {
    OpportunityForm: { visible: false, mode: constants.CREATE },
    ProductForm: { visible: false, mode: constants.CREATE },
    ContactForm: { visible: false, mode: constants.CREATE },
    CaseForm: { visible: false, mode: constants.CREATE },
    UserForm: { visible: false, mode: constants.CREATE },
    AttachmentForm: { visible: false, mode: constants.CREATE },
    Notification: { visible: false, mode: constants.NOTIFY_MSG },
  },
  Data: {
    Products: {
      byId: {},
      allIds: [],
      Paging: {
        count: 0,
        pageSize: constants.PAGE_SIZE,
        nextPageKey: null,
        previousPageKey: null,
        currentPageKey: 0,
      },
    },
    Users: {
      byId: {},
      allIds: [],
      Paging: {
        count: 0,
        pageSize: constants.PAGE_SIZE,
        nextPageKey: null,
        previousPageKey: null,
        currentPageKey: 0,
      },
    },
    Contacts: {
      byId: {},
      allIds: [],
      Paging: {
        count: 0,
        pageSize: constants.PAGE_SIZE,
        nextPageKey: null,
        previousPageKey: null,
        currentPageKey: 0,
      },
    },
    Opportunities: {
      byId: {},
      allIds: [],
      Paging: {
        count: 0,
        pageSize: constants.PAGE_SIZE,
        nextPageKey: null,
        previousPageKey: null,
        currentPageKey: 0,
      },
    },
    Cases: {
      byId: {},
      allIds: [],
      Paging: {
        count: 0,
        pageSize: constants.PAGE_SIZE,
        nextPageKey: null,
        previousPageKey: null,
        currentPageKey: 0,
      },
    },
  },
  Auth: {
    isAuthorized: false,
    token: null,
    userId: null,
  },
};

export default initialState;
