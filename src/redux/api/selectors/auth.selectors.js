import { get } from "lodash";

export const getAuthSlice = (state) => get(state, "Auth", null);
