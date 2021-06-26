import FormField from "../components/ui/common/FormField/FormField";
import FormRowWrapper from "../components/ui/common/FormRowWrapper";
import RelatedEntityWrapper from "../components/ui/common/RelatedEntityWrapper";
import { Fragment } from "react";

const contactDetailDisplayOrder = [
  "gender",
  "birthdate",
  "phone",
  "city",
  "street",
  "owner",
];
const contactOptyDisplayOrder = ["name", "stage", "closeDate"];
const contactCaseDisplayOrder = ["caseNumber", "description", "stage"];

export const generateDetailFields = (customerToDisplay) => {
  const fields = [];
  contactDetailDisplayOrder.forEach((key) => {
    fields.push(
      <FormField
        key={customerToDisplay.id + "---" + key}
        type="text"
        labelText={key.charAt(0).toUpperCase() + key.slice(1)}
        fieldValue={
          key === "city" || key === "street"
            ? customerToDisplay.address[key]
            : customerToDisplay[key]
        }
        isInvalid={false}
        styleName="display-only"
        disabled={true}
      />
    );
  });
  return <FormRowWrapper>{fields}</FormRowWrapper>;
};

export const generateContactOptyDetailFields = (optyToDisplay) => {
  if (!optyToDisplay) {
    return <Fragment>No Content Found</Fragment>;
  }
  const fields = [];
  contactOptyDisplayOrder.forEach((key) => {
    fields.push(
      <FormField
        key={optyToDisplay.id + "---" + key}
        type="text"
        labelText={key.charAt(0).toUpperCase() + key.slice(1)}
        isInvalid={false}
        styleName="row-display-only"
        disabled={true}
        fieldValue={optyToDisplay[key]}
        linkPath={
          key === "name"
            ? `/contacts/${optyToDisplay.contact}/opportunities/${optyToDisplay.id}`
            : ""
        }
      />
    );
  });

  return <RelatedEntityWrapper>{fields}</RelatedEntityWrapper>;
};

export const generateContactCaseDetailFields = (caseToDisplay) => {
  if (!caseToDisplay) {
    return <Fragment>No Content Found</Fragment>;
  }
  const fields = [];
  contactCaseDisplayOrder.forEach((key) => {
    fields.push(
      <FormField
        key={caseToDisplay.id + "---" + key}
        type="text"
        labelText={key.charAt(0).toUpperCase() + key.slice(1)}
        isInvalid={false}
        styleName="row-display-only"
        disabled={true}
        fieldValue={caseToDisplay[key]}
        linkPath={
          key === "caseNumber"
            ? `/contacts/${caseToDisplay.contact}/cases/${caseToDisplay.id}`
            : ""
        }
      />
    );
  });

  return <RelatedEntityWrapper>{fields}</RelatedEntityWrapper>;
};
