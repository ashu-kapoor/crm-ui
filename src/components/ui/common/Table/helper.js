import classes from "./Table.module.css";

export const tableMouseOverHandler = (event) => {
  const elemId = event.target.id;
  const idPattern = elemId.split("---")[0];
  const rowElems = document.querySelectorAll(`[id^="${idPattern}"]`);
  rowElems.forEach((elem) => {
    elem.classList.add(classes["Rtable-cell--highlight"]);
  });
};

export const tableMouseOutHandler = (event) => {
  const elemId = event.target.id;
  const idPattern = elemId.split("---")[0];
  const rowElems = document.querySelectorAll(`[id^="${idPattern}"]`);
  rowElems.forEach((elem) => {
    elem.classList.remove(classes["Rtable-cell--highlight"]);
  });
};

export const getLink = (data, key) => {
  data = data.substring(0, data.indexOf(":"));
  return data + key;
};

export const parseAttachmentData = (data) => {
  console.log(data);
  const nameParts = data.split("_");
  return nameParts[nameParts.length - 1];
};
