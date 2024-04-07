export const signUp = (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = res.body;
  } catch (error) {}
};

export const login = (req, res) => {
  console.log("loginUser");
};

export const logout = (req, res) => {
  console.log("logoutUser");
};
