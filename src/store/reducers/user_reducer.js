const INITIAL_DATA = {
  user_name: "Muhammad Uzair",
  user_email: "uxairjaaan@gmail.com",
};

const User_Reducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        user_name: action.payload,
      };
  }
  return state;
};
export default User_Reducer;
