export const checkValidData = (email, password, isSignIn, name) => {
  const errors = {};

  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password,
    );

  const isNameValid = /^[A-Za-z ]{3,30}$/.test(name);

  if (!isEmailValid) {
    errors.email = "Email is not valid";
  }

  if (!isPasswordValid) {
    errors.password =
      "Password must include uppercase, lowercase, number, special character and be 8+ characters long.";
  }

  if (isEmailValid && isPasswordValid) {
    errors.success = "Validation successful!";
  }

  if (!isSignIn && !isNameValid) {
    errors.name =
      "Full name must contain only letters and be 3–30 characters long.";
  }
  
  return errors;
};
