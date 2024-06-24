const validateInput = (input, rules, setError) => {
  for (let rule of rules) {
    if (!rule.test(input)) {
      setError(rule.message);
      return false;
    }
  }
  return true;
};

const validatePassword = (password, accepted, setRegisterError) => {
  // reset error message
  setRegisterError("");

  const passwordRules = [
    {
      test: (pwd) => /^.{8,}$/.test(pwd),
      message: "Ensures the password is at least 8 characters long",
    },
    {
      test: (pwd) => /^.{8,16}$/.test(pwd),
      message: "Ensures the password is between 6 and 16 characters long.",
    },
    {
      test: (pwd) => /^(?=.*[A-Z]).{8,}$/.test(pwd),
      message: "Requires at least one uppercase letter.",
    },
    {
      test: (pwd) => /^(?=.*[a-z]).{8,}$/.test(pwd),
      message: "Requires at least one lowercase letter.",
    },
    {
      test: (pwd) => /^(?=.*\d).{8,}$/.test(pwd),
      message: "Requires at least one numeric digit.",
    },
    {
      test: (pwd) => /^(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/.test(pwd),
      message:
        "Requires at least one special character (e.g., !, @, #, $, etc.).",
    },
  ];

  if (!accepted) {
    setRegisterError("Please accept our terms and conditions");
    return false;
  }

  return validateInput(password, passwordRules, setRegisterError);
};

export default validatePassword;
