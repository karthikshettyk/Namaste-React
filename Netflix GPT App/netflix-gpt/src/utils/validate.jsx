export const validate = (name, email, password) => {
  const isNameValid = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(name);

  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (name && !isNameValid) {
    return "Name is not valid";
  }

  if (email && !isEmailValid) {
    return "Email is not valid";
  }

  if (password && !isPasswordValid) {
    return "Password is not valid";
  }

  return null;
};
