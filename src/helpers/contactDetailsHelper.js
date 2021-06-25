import FormField from "../components/ui/common/FormField/FormField";

const contactDetailDisplayOrder = [
  "gender",
  "birthdate",
  "phone",
  "city",
  "street",
  "owner",
];

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
        displayInRow={false}
        disabled={true}
      />
    );
  });
  return fields;
};
