export const emailValidator = (val) => {
  if (val.trim() === null) {
    return false;
  }

  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      val
    )
  ) {
    return true;
  }

  return false;
};

export const passwordValidator = (val) => {
  return val.trim().length >= 6;
};
