import { capitalize } from "lodash";

export const formatResponse = (response) => {
  if (response) {
    const formattedData = Object.entries(response).reduce(
      (formattedData, [name, dataArray]) => {
        const allIds = [];
        const byId = {};
        dataArray.forEach((item) => {
          allIds.push(item._id);
          byId[item._id] = item;
        });

        const newSlice = {
          [capitalize(name)]: {
            byId,
            allIds,
          },
        };

        return { ...formattedData, ...newSlice };
      },
      {}
    );

    return formattedData;
  }
  throw new Error("Malformed response");
};
