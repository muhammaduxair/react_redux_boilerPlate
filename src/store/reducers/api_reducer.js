const INITIAL_DATA = {
  data: {},
};

const API_REDUCER = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        data: action.payload,
      };
  }
  return state;
};

export default API_REDUCER;
