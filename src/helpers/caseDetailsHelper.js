import FormField from "../components/ui/common/FormField/FormField";
import FormRowWrapper from "../components/ui/common/FormRowWrapper";

const caseDetailDisplayOrder = [
  "caseNumber",
  "description",
  "stage",
  "priority",
  "owner",
];

const caseDetailsHeaderMappings = { caseNumber: "Case Number" };

export const getCaseDetailFields = (caseToDisplay) => {
  const fields = [];
  caseDetailDisplayOrder.forEach((key) => {
    fields.push(
      <FormField
        key={caseToDisplay.id + "---" + key}
        type="text"
        labelText={
          caseDetailsHeaderMappings.hasOwnProperty(key)
            ? caseDetailsHeaderMappings[key]
            : key.charAt(0).toUpperCase() + key.slice(1)
        }
        fieldValue={caseToDisplay[key]}
        isInvalid={false}
        styleName="display-only"
        disabled={true}
      />
    );
  });
  return <FormRowWrapper>{fields}</FormRowWrapper>;
};
