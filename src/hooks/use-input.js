import { useState } from "react";

const useInput = (validateInput) => {
  const [inputVal, setInputVal] = useState("");
  const [inputTouched, setInputTouched] = useState(false);

  const onChange = (event) => {
    setInputValue(event.target.value);
    setInputTouched(true);
  };

  const onBlur = (event) => {
    setInputTouched(true);
  };

  const onReset = () => {
    setInputTouched(false);
    setInputValue("");
  };

  if (!inputTouched) {
    inputIsValid = true;
  } else {
    inputIsValid = validateInput(inputValue);
  }

  return {
    inputIsValid,
    value: inputValue,
    onChange,
    onBlur,
    onReset,
  };
};

export default useInput;
