import FormField from "../components/ui/common/FormField/FormField";
import FormRowWrapper from "../components/ui/common/FormRowWrapper";

const optyDetailDisplayOrder = [
  "name",
  "description",
  "stage",
  "closeDate",
  "owner",
];

const optyDetailsHeaderMappings = { closeDate: "Close Date" };

export const getOptyDetailFields = (recordToDisplay) => {
  const fields = [];
  optyDetailDisplayOrder.forEach((key) => {
    fields.push(
      <FormField
        key={recordToDisplay.id + "---" + key}
        type="text"
        labelText={
          optyDetailsHeaderMappings.hasOwnProperty(key)
            ? optyDetailsHeaderMappings[key]
            : key.charAt(0).toUpperCase() + key.slice(1)
        }
        fieldValue={recordToDisplay[key]}
        isInvalid={false}
        styleName="display-only"
        disabled={true}
      />
    );
  });
  return <FormRowWrapper>{fields}</FormRowWrapper>;
};
