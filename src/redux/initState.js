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
    Products: { byId: {}, allIds: [] },
    Users: { byId: {}, allIds: [] },
    Contacts: { byId: {}, allIds: [] },
    Opportunities: { byId: {}, allIds: [] },
    Cases: { byId: {}, allIds: [] },
  },
  Auth: {
    isAuthorized: false,
    token: null,
    userId: null,
  },
};

export default initialState;
