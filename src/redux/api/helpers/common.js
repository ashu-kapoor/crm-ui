import { capitalize, isArray } from "lodash";

export const formatResponse = (response) => {
  if (response) {
    const formattedData = Object.entries(response).reduce(
      (formattedData, [name, data]) => {
        let newSlice;
        if (isArray(data)) {
          const allIds = [];
          const byId = {};
          data.forEach((item) => {
            allIds.push(item._id);
            byId[item._id] = item;
          });

          newSlice = {
            [capitalize(name)]: {
              byId,
              allIds,
            },
          };
        } else {
          newSlice = {
            [capitalize(name)]: {
              ...data,
            },
          };
        }

        return { ...formattedData, ...newSlice };
      },
      {}
    );

    return formattedData;
  }
  throw new Error("Malformed response");
};
